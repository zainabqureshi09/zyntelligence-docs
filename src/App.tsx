import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/lib/theme";
import { AuthProvider } from "@/contexts/AuthContext";
import { AIChatAssistant } from "@/components/AIChatAssistant";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";

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

// HTML docs
import HTMLIntroduction from "./pages/docs/html/Introduction";
import HTMLElements from "./pages/docs/html/Elements";
import HTMLAttributes from "./pages/docs/html/Attributes";
import HTMLExamples from "./pages/docs/html/Examples";

// CSS docs
import CSSIntroduction from "./pages/docs/css/Introduction";
import CSSSelectors from "./pages/docs/css/Selectors";
import CSSProperties from "./pages/docs/css/Properties";
import CSSExamples from "./pages/docs/css/Examples";

// C++ docs
import CppIntroduction from "./pages/docs/cpp/Introduction";
import CppSyntax from "./pages/docs/cpp/Syntax";
import CppVariables from "./pages/docs/cpp/Variables";
import CppConditions from "./pages/docs/cpp/Conditions";
import CppLoops from "./pages/docs/cpp/Loops";
import CppFunctions from "./pages/docs/cpp/Functions";
import CppExamples from "./pages/docs/cpp/Examples";

// Java docs
import JavaIntroduction from "./pages/docs/java/Introduction";
import JavaSyntax from "./pages/docs/java/Syntax";
import JavaVariables from "./pages/docs/java/Variables";
import JavaConditions from "./pages/docs/java/Conditions";
import JavaLoops from "./pages/docs/java/Loops";
import JavaFunctions from "./pages/docs/java/Functions";
import JavaExamples from "./pages/docs/java/Examples";

// AI/ML Path
import AIMLIntroduction from "./pages/paths/ai-ml/Introduction";
import MathFoundations from "./pages/paths/ai-ml/MathFoundations";
import SupervisedLearning from "./pages/paths/ai-ml/SupervisedLearning";
import DeepLearning from "./pages/paths/ai-ml/DeepLearning";
import AIMLProjects from "./pages/paths/ai-ml/Projects";

// Pages
import GettingStarted from "./pages/GettingStarted";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Architecture from "./pages/Architecture";
import ApiReference from "./pages/ApiReference";
import Tutorials from "./pages/Tutorials";
import FAQ from "./pages/FAQ";
import Security from "./pages/Security";
import Roadmap from "./pages/Roadmap";
import DeepLearning from "./pages/paths/ai-ml/DeepLearning";
import AIMLProjects from "./pages/paths/ai-ml/Projects";

// Pages
import GettingStarted from "./pages/GettingStarted";
import Resources from "./pages/Resources";
import About from "./pages/About";

// Admin
import AdminDashboard from "./pages/admin/Dashboard";
import DocEditor from "./pages/admin/DocEditor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              
              {/* Admin */}
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/docs/:id" element={<DocEditor />} />
              
              {/* Python */}
              <Route path="/docs/python/introduction" element={<PythonIntroduction />} />
              <Route path="/docs/python/syntax" element={<PythonSyntax />} />
              <Route path="/docs/python/variables" element={<PythonVariables />} />
              <Route path="/docs/python/conditions" element={<PythonConditions />} />
              <Route path="/docs/python/loops" element={<PythonLoops />} />
              <Route path="/docs/python/functions" element={<PythonFunctions />} />
              <Route path="/docs/python/examples" element={<PythonExamples />} />
              
              {/* JavaScript */}
              <Route path="/docs/javascript/introduction" element={<JavaScriptIntroduction />} />
              <Route path="/docs/javascript/syntax" element={<JavaScriptSyntax />} />
              <Route path="/docs/javascript/variables" element={<JavaScriptVariables />} />
              <Route path="/docs/javascript/conditions" element={<JavaScriptConditions />} />
              <Route path="/docs/javascript/loops" element={<JavaScriptLoops />} />
              <Route path="/docs/javascript/functions" element={<JavaScriptFunctions />} />
              <Route path="/docs/javascript/examples" element={<JavaScriptExamples />} />
              
              {/* HTML */}
              <Route path="/docs/html/introduction" element={<HTMLIntroduction />} />
              <Route path="/docs/html/elements" element={<HTMLElements />} />
              <Route path="/docs/html/attributes" element={<HTMLAttributes />} />
              <Route path="/docs/html/examples" element={<HTMLExamples />} />
              
              {/* CSS */}
              <Route path="/docs/css/introduction" element={<CSSIntroduction />} />
              <Route path="/docs/css/selectors" element={<CSSSelectors />} />
              <Route path="/docs/css/properties" element={<CSSProperties />} />
              <Route path="/docs/css/examples" element={<CSSExamples />} />
              
              {/* C++ */}
              <Route path="/docs/cpp/introduction" element={<CppIntroduction />} />
              <Route path="/docs/cpp/syntax" element={<CppSyntax />} />
              <Route path="/docs/cpp/variables" element={<CppVariables />} />
              <Route path="/docs/cpp/conditions" element={<CppConditions />} />
              <Route path="/docs/cpp/loops" element={<CppLoops />} />
              <Route path="/docs/cpp/functions" element={<CppFunctions />} />
              <Route path="/docs/cpp/examples" element={<CppExamples />} />
              
              {/* Java */}
              <Route path="/docs/java/introduction" element={<JavaIntroduction />} />
              <Route path="/docs/java/syntax" element={<JavaSyntax />} />
              <Route path="/docs/java/variables" element={<JavaVariables />} />
              <Route path="/docs/java/conditions" element={<JavaConditions />} />
              <Route path="/docs/java/loops" element={<JavaLoops />} />
              <Route path="/docs/java/functions" element={<JavaFunctions />} />
              <Route path="/docs/java/examples" element={<JavaExamples />} />
              
              {/* AI/ML Path */}
              <Route path="/paths/ai-ml/introduction" element={<AIMLIntroduction />} />
              <Route path="/paths/ai-ml/math-foundations" element={<MathFoundations />} />
              <Route path="/paths/ai-ml/supervised-learning" element={<SupervisedLearning />} />
              <Route path="/paths/ai-ml/deep-learning" element={<DeepLearning />} />
              <Route path="/paths/ai-ml/projects" element={<AIMLProjects />} />

              {/* Pages */}
              <Route path="/getting-started" element={<GettingStarted />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/about" element={<About />} />
              <Route path="/architecture" element={<Architecture />} />
              <Route path="/api-reference" element={<ApiReference />} />
              <Route path="/tutorials" element={<Tutorials />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/security" element={<Security />} />
              <Route path="/roadmap" element={<Roadmap />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
            <AIChatAssistant />
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
