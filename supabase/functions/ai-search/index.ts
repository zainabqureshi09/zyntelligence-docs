import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Documentation content for AI to search through
const docsContent = [
  // Python
  { path: '/docs/python/introduction', title: 'Python Introduction', category: 'Python', content: 'Python is a high-level programming language known for its simple syntax and readability. Created by Guido van Rossum. Used for web development, data science, AI, automation. Features: interpreted, dynamic typing, object-oriented, rich libraries. First program: print("Hello, World!")' },
  { path: '/docs/python/syntax', title: 'Python Syntax', category: 'Python', content: 'Python syntax is clean and uses indentation for code blocks. No semicolons or curly braces needed. Comments start with #. Variables dont need type declaration. Whitespace matters in Python.' },
  { path: '/docs/python/variables', title: 'Python Variables', category: 'Python', content: 'Variables in Python store data values. No declaration needed. Types: int, float, str, bool, list, tuple, dict, set. Type conversion with int(), str(), float(). Variable naming rules.' },
  { path: '/docs/python/conditions', title: 'Python Conditions', category: 'Python', content: 'If-else statements for conditional execution. Syntax: if condition: elif condition: else:. Comparison operators: ==, !=, <, >, <=, >=. Logical operators: and, or, not.' },
  { path: '/docs/python/loops', title: 'Python Loops', category: 'Python', content: 'For loops iterate over sequences. While loops repeat while condition is true. Range() function for numeric sequences. Break and continue statements. List comprehensions for concise loops.' },
  { path: '/docs/python/functions', title: 'Python Functions', category: 'Python', content: 'Functions defined with def keyword. Parameters and arguments. Return values. Default parameters. *args and **kwargs for variable arguments. Lambda functions for one-liners.' },
  { path: '/docs/python/examples', title: 'Python Examples', category: 'Python', content: 'Practical Python examples: calculator, file handling, web scraping, data analysis, automation scripts, API calls, database operations.' },

  // JavaScript
  { path: '/docs/javascript/introduction', title: 'JavaScript Introduction', category: 'JavaScript', content: 'JavaScript is a programming language for web development. Runs in browsers and Node.js. Used for interactive websites, web apps, mobile apps, server-side programming. ES6+ modern features.' },
  { path: '/docs/javascript/syntax', title: 'JavaScript Syntax', category: 'JavaScript', content: 'JavaScript uses semicolons (optional), curly braces for blocks. let, const, var for variables. Strict mode with "use strict". Comments with // and /* */.' },
  { path: '/docs/javascript/variables', title: 'JavaScript Variables', category: 'JavaScript', content: 'Variables with let, const (block-scoped), var (function-scoped). Primitive types: string, number, boolean, null, undefined, symbol, bigint. Objects and arrays.' },
  { path: '/docs/javascript/conditions', title: 'JavaScript Conditions', category: 'JavaScript', content: 'If-else statements, switch statements, ternary operator. Truthy and falsy values. Comparison with == and === (strict equality). Short-circuit evaluation.' },
  { path: '/docs/javascript/loops', title: 'JavaScript Loops', category: 'JavaScript', content: 'For loops, while loops, do-while loops. For...of for iterables, for...in for object properties. Array methods: forEach, map, filter, reduce.' },
  { path: '/docs/javascript/functions', title: 'JavaScript Functions', category: 'JavaScript', content: 'Function declarations and expressions. Arrow functions () =>. Parameters, default values, rest parameters. Callbacks, closures. Async/await for asynchronous code.' },
  { path: '/docs/javascript/examples', title: 'JavaScript Examples', category: 'JavaScript', content: 'DOM manipulation, event handling, fetch API, local storage, form validation, animations, interactive components.' },

  // HTML
  { path: '/docs/html/introduction', title: 'HTML Introduction', category: 'HTML', content: 'HTML (HyperText Markup Language) structures web content. Tags, elements, attributes. Document structure: DOCTYPE, html, head, body. Semantic HTML5 elements.' },
  { path: '/docs/html/elements', title: 'HTML Elements', category: 'HTML', content: 'Headings h1-h6, paragraphs p, links a, images img, lists ul/ol/li, tables, forms, divs, spans. Block vs inline elements. Semantic elements: header, nav, main, article, section, footer.' },
  { path: '/docs/html/attributes', title: 'HTML Attributes', category: 'HTML', content: 'id, class, style, href, src, alt, title. Data attributes. Boolean attributes. Global attributes. Accessibility attributes: aria-*, role.' },
  { path: '/docs/html/examples', title: 'HTML Examples', category: 'HTML', content: 'Complete webpage templates, forms, navigation menus, image galleries, responsive layouts, semantic structure examples.' },

  // CSS
  { path: '/docs/css/introduction', title: 'CSS Introduction', category: 'CSS', content: 'CSS (Cascading Style Sheets) styles HTML elements. Selectors, properties, values. Inline, internal, external stylesheets. Cascade, specificity, inheritance.' },
  { path: '/docs/css/selectors', title: 'CSS Selectors', category: 'CSS', content: 'Element, class, ID selectors. Combinators: descendant, child, sibling. Pseudo-classes :hover, :focus, :nth-child. Pseudo-elements ::before, ::after. Attribute selectors.' },
  { path: '/docs/css/properties', title: 'CSS Properties', category: 'CSS', content: 'Colors, backgrounds, borders, margins, padding. Flexbox for layout. Grid for complex layouts. Typography: font-family, font-size, line-height. Animations and transitions.' },
  { path: '/docs/css/examples', title: 'CSS Examples', category: 'CSS', content: 'Responsive designs, flexbox layouts, grid layouts, animations, card components, navigation styles, form styling.' },

  // C++
  { path: '/docs/cpp/introduction', title: 'C++ Introduction', category: 'C++', content: 'C++ is a powerful, compiled language. Extension of C with object-oriented features. Used for systems programming, game development, embedded systems. High performance.' },
  { path: '/docs/cpp/syntax', title: 'C++ Syntax', category: 'C++', content: 'Semicolons required. Curly braces for blocks. #include for headers. Main function int main(). Compilation with g++. Namespaces, std::cout for output.' },
  { path: '/docs/cpp/variables', title: 'C++ Variables', category: 'C++', content: 'Static typing - must declare type. int, float, double, char, bool, string. Arrays, pointers, references. Const and constexpr. Memory management.' },
  { path: '/docs/cpp/conditions', title: 'C++ Conditions', category: 'C++', content: 'If-else, switch statements. Same operators as C. Ternary operator. Short-circuit evaluation. Type safety in comparisons.' },
  { path: '/docs/cpp/loops', title: 'C++ Loops', category: 'C++', content: 'For, while, do-while loops. Range-based for loop for containers. Iterators for STL containers. Break, continue, goto (avoid).' },
  { path: '/docs/cpp/functions', title: 'C++ Functions', category: 'C++', content: 'Function declaration and definition. Return types, parameters by value/reference/pointer. Function overloading. Templates for generic programming. Inline functions.' },
  { path: '/docs/cpp/examples', title: 'C++ Examples', category: 'C++', content: 'Console applications, file I/O, data structures implementation, algorithms, object-oriented design patterns.' },

  // Java
  { path: '/docs/java/introduction', title: 'Java Introduction', category: 'Java', content: 'Java is an object-oriented, platform-independent language. Write once, run anywhere (JVM). Used for enterprise applications, Android development, web backends.' },
  { path: '/docs/java/syntax', title: 'Java Syntax', category: 'Java', content: 'Class-based structure. Every file needs a class. main method as entry point. Semicolons required. Strong typing. Package system for organization.' },
  { path: '/docs/java/variables', title: 'Java Variables', category: 'Java', content: 'Primitive types: int, long, float, double, boolean, char, byte, short. Reference types: String, arrays, objects. final for constants. Variable scope.' },
  { path: '/docs/java/conditions', title: 'Java Conditions', category: 'Java', content: 'If-else, switch statements (including switch expressions in newer Java). Comparison and logical operators. Objects compared with .equals().' },
  { path: '/docs/java/loops', title: 'Java Loops', category: 'Java', content: 'For, while, do-while loops. Enhanced for loop for arrays/collections. Iterators. Stream API for functional iteration.' },
  { path: '/docs/java/functions', title: 'Java Functions', category: 'Java', content: 'Methods belong to classes. Static vs instance methods. Return types, parameters. Method overloading. Access modifiers: public, private, protected.' },
  { path: '/docs/java/examples', title: 'Java Examples', category: 'Java', content: 'Console applications, GUI with Swing/JavaFX, web services, database connectivity, multithreading examples.' },

  // AI/ML Path
  { path: '/paths/ai-ml/introduction', title: 'AI & ML Introduction', category: 'Learning Paths', content: 'Introduction to Artificial Intelligence and Machine Learning. What is AI, ML, Deep Learning. Career paths in AI. Prerequisites and learning roadmap. Real-world AI applications.' },
  { path: '/paths/ai-ml/math-foundations', title: 'Math Foundations for ML', category: 'Learning Paths', content: 'Linear algebra: vectors, matrices, transformations. Statistics: probability, distributions, hypothesis testing. Calculus: derivatives, gradients, optimization. Essential math for understanding ML algorithms.' },
  { path: '/paths/ai-ml/supervised-learning', title: 'Supervised Learning', category: 'Learning Paths', content: 'Learning from labeled data. Regression: linear, polynomial, ridge, lasso. Classification: logistic regression, decision trees, random forests, SVM. Evaluation metrics: accuracy, precision, recall, F1.' },
  { path: '/paths/ai-ml/deep-learning', title: 'Deep Learning', category: 'Learning Paths', content: 'Neural networks fundamentals. Perceptrons, activation functions. Backpropagation. CNNs for images. RNNs and LSTMs for sequences. Transformers and attention. PyTorch and TensorFlow.' },
  { path: '/paths/ai-ml/projects', title: 'AI/ML Projects', category: 'Learning Paths', content: 'Hands-on projects: image classification, sentiment analysis, recommendation systems, chatbots, time series forecasting. Portfolio building.' },

  // Other pages
  { path: '/getting-started', title: 'Getting Started', category: 'Guides', content: 'Quick start guide. Choose your learning path. Prerequisites. Setting up development environment. First steps in programming. Learning tips and best practices.' },
  { path: '/resources', title: 'Resources', category: 'Guides', content: 'Downloadable cheat sheets. External learning resources. Recommended tools and editors. Community links. Books and courses recommendations.' },
  { path: '/about', title: 'About', category: 'Guides', content: 'About Neurovera documentation. Mission to make IT learning accessible. Created by Zainab Ayaz. Contact and social links.' },
];

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Validate authentication
    const authHeader = req.headers.get('Authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return new Response(
        JSON.stringify({ error: "Unauthorized - authentication required" }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
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
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const userId = claimsData.claims.sub;
    console.log("Authenticated user for ai-search:", userId);

    const { query } = await req.json();
    
    if (!query || typeof query !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Query is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    console.log('Processing AI search query:', query);

    // Build context from docs
    const docsContext = docsContent.map(doc => 
      `[${doc.category}] ${doc.title} (${doc.path}): ${doc.content}`
    ).join('\n\n');

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-3-flash-preview',
        messages: [
          {
            role: 'system',
            content: `You are a helpful documentation search assistant for Neurovera, a programming learning platform.

Your job is to understand user queries in natural language and find the most relevant documentation pages.

Here is the documentation content:
${docsContext}

When responding, return a JSON object with this structure:
{
  "results": [
    {
      "path": "/docs/python/introduction",
      "title": "Python Introduction",
      "category": "Python",
      "relevance": "high",
      "snippet": "A brief explanation of why this result matches the query"
    }
  ],
  "aiSummary": "A helpful 1-2 sentence summary answering the user's question or explaining what they'll find"
}

Rules:
- Return 1-5 most relevant results ordered by relevance
- Only include truly relevant results (don't pad with unrelated content)
- The snippet should explain WHY this page answers their question
- For questions like "how do I..." provide actionable guidance in aiSummary
- If no relevant docs exist, return empty results with a helpful aiSummary
- Always respond with valid JSON only, no markdown or extra text`
          },
          {
            role: 'user',
            content: query
          }
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI gateway error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again in a moment.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'AI credits exhausted. Please try the regular search.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;
    
    if (!content) {
      throw new Error('No response from AI');
    }

    console.log('AI response:', content);

    // Parse AI response
    let parsedResponse;
    try {
      // Remove any markdown code blocks if present
      const cleanContent = content.replace(/```json\n?|\n?```/g, '').trim();
      parsedResponse = JSON.parse(cleanContent);
    } catch (parseError) {
      console.error('Failed to parse AI response:', parseError);
      // Return a fallback response
      parsedResponse = {
        results: [],
        aiSummary: "I couldn't find specific documentation for your query. Try searching for specific topics like 'Python loops' or 'JavaScript functions'."
      };
    }

    return new Response(
      JSON.stringify(parsedResponse),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('AI search error:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Search failed',
        results: [],
        aiSummary: 'Search encountered an error. Please try again.'
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
