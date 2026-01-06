import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/lib/theme";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Python docs
import PythonIntroduction from "./pages/docs/python/Introduction";
import PythonSyntax from "./pages/docs/python/Syntax";
import PythonVariables from "./pages/docs/python/Variables";
import PythonConditions from "./pages/docs/python/Conditions";
import PythonLoops from "./pages/docs/python/Loops";
import PythonFunctions from "./pages/docs/python/Functions";
import PythonExamples from "./pages/docs/python/Examples";

// JavaScript docs
import JavaScriptIntroduction from "./pages/docs/javascript/Introduction";
import JavaScriptSyntax from "./pages/docs/javascript/Syntax";
import JavaScriptVariables from "./pages/docs/javascript/Variables";
import JavaScriptConditions from "./pages/docs/javascript/Conditions";
import JavaScriptLoops from "./pages/docs/javascript/Loops";
import JavaScriptFunctions from "./pages/docs/javascript/Functions";
import JavaScriptExamples from "./pages/docs/javascript/Examples";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Python Documentation */}
            <Route path="/docs/python/introduction" element={<PythonIntroduction />} />
            <Route path="/docs/python/syntax" element={<PythonSyntax />} />
            <Route path="/docs/python/variables" element={<PythonVariables />} />
            <Route path="/docs/python/conditions" element={<PythonConditions />} />
            <Route path="/docs/python/loops" element={<PythonLoops />} />
            <Route path="/docs/python/functions" element={<PythonFunctions />} />
            <Route path="/docs/python/examples" element={<PythonExamples />} />
            
            {/* JavaScript Documentation */}
            <Route path="/docs/javascript/introduction" element={<JavaScriptIntroduction />} />
            <Route path="/docs/javascript/syntax" element={<JavaScriptSyntax />} />
            <Route path="/docs/javascript/variables" element={<JavaScriptVariables />} />
            <Route path="/docs/javascript/conditions" element={<JavaScriptConditions />} />
            <Route path="/docs/javascript/loops" element={<JavaScriptLoops />} />
            <Route path="/docs/javascript/functions" element={<JavaScriptFunctions />} />
            <Route path="/docs/javascript/examples" element={<JavaScriptExamples />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
