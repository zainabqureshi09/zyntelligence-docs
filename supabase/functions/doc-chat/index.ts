import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Documentation content for context
const docsContext = `
Neurovera Documentation Platform - Knowledge Base

PYTHON:
- Introduction: Python is a high-level, interpreted programming language known for its readability and versatility.
- Variables: Use descriptive names, Python is dynamically typed. Examples: x = 5, name = "John"
- Data Types: int, float, str, bool, list, tuple, dict, set
- Loops: for loops iterate over sequences, while loops repeat while condition is true
- Functions: Defined with 'def' keyword. Can have default parameters and return values.
- Conditionals: if, elif, else statements for decision making

JAVASCRIPT:
- Introduction: JavaScript is a versatile scripting language for web development, both client and server-side.
- Variables: var (function scoped), let (block scoped), const (block scoped, immutable reference)
- Functions: Regular functions, arrow functions, callbacks, async/await
- DOM Manipulation: document.querySelector, getElementById, event listeners
- ES6+ Features: Template literals, destructuring, spread operator, classes

HTML:
- Structure: DOCTYPE, html, head, body elements
- Common Elements: div, span, p, h1-h6, a, img, ul/ol/li, form, input, button
- Semantic Elements: header, nav, main, section, article, aside, footer
- Attributes: id, class, href, src, alt, type, name, value

CSS:
- Selectors: Element, class, ID, attribute, pseudo-class, pseudo-element
- Box Model: margin, border, padding, content
- Flexbox: display: flex, justify-content, align-items, flex-direction
- Grid: display: grid, grid-template-columns, grid-template-rows
- Responsive: media queries, viewport units, relative units

C++:
- Introduction: C++ is a powerful, high-performance language for systems programming
- Syntax: Semicolons required, curly braces for blocks, #include for headers
- Variables: Must declare type (int, float, double, char, bool, string)
- Pointers: Memory addresses, dynamic allocation with new/delete
- Classes: Object-oriented programming, constructors, destructors

JAVA:
- Introduction: Java is a popular, object-oriented language known for "write once, run anywhere"
- Classes: Everything is in a class, public static void main(String[] args)
- Variables: Strongly typed, primitive types and reference types
- OOP: Inheritance, polymorphism, encapsulation, abstraction
- Collections: ArrayList, HashMap, HashSet, LinkedList
`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Validate authentication
    const authHeader = req.headers.get('Authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return new Response(
        JSON.stringify({ error: "Unauthorized - authentication required" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_ANON_KEY')!,
      { global: { headers: { Authorization: authHeader } } }
    );

    const token = authHeader.replace('Bearer ', '');
    const { data: claimsData, error: claimsError } = await supabase.auth.getClaims(token);
    
    if (claimsError || !claimsData?.claims) {
      return new Response(
        JSON.stringify({ error: "Unauthorized - invalid token" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const userId = claimsData.claims.sub;
    console.log("Authenticated user for doc-chat:", userId);

    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: "Messages array is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `You are Neurovera AI, a helpful documentation assistant for the Neurovera programming documentation platform.

Your knowledge base includes documentation for:
- Python (introduction, syntax, variables, conditions, loops, functions, examples)
- JavaScript (introduction, syntax, variables, conditions, loops, functions, examples)
- HTML (introduction, elements, attributes, examples)
- CSS (introduction, selectors, properties, examples)
- C++ (introduction, syntax, variables, conditions, loops, functions, examples)
- Java (introduction, syntax, variables, conditions, loops, functions, examples)

Reference Documentation:
${docsContext}

Guidelines:
1. Answer questions ONLY about programming topics covered in Neurovera documentation
2. Be helpful, clear, and educational
3. Provide code examples when relevant
4. If asked about topics outside the documentation scope, politely redirect
5. Keep responses concise but informative
6. Use markdown formatting for code snippets
7. Be encouraging to learners`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const status = response.status;
      if (status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits exhausted. Please add more credits." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", status, errorText);
      return new Response(
        JSON.stringify({ error: "AI gateway error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Error in doc-chat:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
