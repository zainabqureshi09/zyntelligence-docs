import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/lib/theme";
import { AuthProvider } from "@/contexts/AuthContext";
import { AIChatAssistant } from "@/components/AIChatAssistant";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { PageLoading } from "@/components/PageLoading";
import { Suspense, lazy, useEffect } from "react";

// Eager load critical pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load all other pages for better performance
const Auth = lazy(() => import("./pages/Auth"));

// Python docs
const PythonIntroduction = lazy(() => import("./pages/docs/python/Introduction"));
const PythonSyntax = lazy(() => import("./pages/docs/python/Syntax"));
const PythonVariables = lazy(() => import("./pages/docs/python/Variables"));
const PythonConditions = lazy(() => import("./pages/docs/python/Conditions"));
const PythonLoops = lazy(() => import("./pages/docs/python/Loops"));
const PythonFunctions = lazy(() => import("./pages/docs/python/Functions"));
const PythonExamples = lazy(() => import("./pages/docs/python/Examples"));

// JavaScript docs
const JavaScriptIntroduction = lazy(() => import("./pages/docs/javascript/Introduction"));
const JavaScriptSyntax = lazy(() => import("./pages/docs/javascript/Syntax"));
const JavaScriptVariables = lazy(() => import("./pages/docs/javascript/Variables"));
const JavaScriptConditions = lazy(() => import("./pages/docs/javascript/Conditions"));
const JavaScriptLoops = lazy(() => import("./pages/docs/javascript/Loops"));
const JavaScriptFunctions = lazy(() => import("./pages/docs/javascript/Functions"));
const JavaScriptExamples = lazy(() => import("./pages/docs/javascript/Examples"));

// HTML docs
const HTMLIntroduction = lazy(() => import("./pages/docs/html/Introduction"));
const HTMLElements = lazy(() => import("./pages/docs/html/Elements"));
const HTMLAttributes = lazy(() => import("./pages/docs/html/Attributes"));
const HTMLExamples = lazy(() => import("./pages/docs/html/Examples"));

// CSS docs
const CSSIntroduction = lazy(() => import("./pages/docs/css/Introduction"));
const CSSSelectors = lazy(() => import("./pages/docs/css/Selectors"));
const CSSProperties = lazy(() => import("./pages/docs/css/Properties"));
const CSSExamples = lazy(() => import("./pages/docs/css/Examples"));

// C++ docs
const CppIntroduction = lazy(() => import("./pages/docs/cpp/Introduction"));
const CppSyntax = lazy(() => import("./pages/docs/cpp/Syntax"));
const CppVariables = lazy(() => import("./pages/docs/cpp/Variables"));
const CppConditions = lazy(() => import("./pages/docs/cpp/Conditions"));
const CppLoops = lazy(() => import("./pages/docs/cpp/Loops"));
const CppFunctions = lazy(() => import("./pages/docs/cpp/Functions"));
const CppExamples = lazy(() => import("./pages/docs/cpp/Examples"));

// Java docs
const JavaIntroduction = lazy(() => import("./pages/docs/java/Introduction"));
const JavaSyntax = lazy(() => import("./pages/docs/java/Syntax"));
const JavaVariables = lazy(() => import("./pages/docs/java/Variables"));
const JavaConditions = lazy(() => import("./pages/docs/java/Conditions"));
const JavaLoops = lazy(() => import("./pages/docs/java/Loops"));
const JavaFunctions = lazy(() => import("./pages/docs/java/Functions"));
const JavaExamples = lazy(() => import("./pages/docs/java/Examples"));

// AI/ML Path
const AIMLIntroduction = lazy(() => import("./pages/paths/ai-ml/Introduction"));
const MathFoundations = lazy(() => import("./pages/paths/ai-ml/MathFoundations"));
const SupervisedLearning = lazy(() => import("./pages/paths/ai-ml/SupervisedLearning"));
const DeepLearning = lazy(() => import("./pages/paths/ai-ml/DeepLearning"));
const AIMLProjects = lazy(() => import("./pages/paths/ai-ml/Projects"));

// Pages
const GettingStarted = lazy(() => import("./pages/GettingStarted"));
const Resources = lazy(() => import("./pages/Resources"));
const About = lazy(() => import("./pages/About"));
const Architecture = lazy(() => import("./pages/Architecture"));
const ApiReference = lazy(() => import("./pages/ApiReference"));
const Tutorials = lazy(() => import("./pages/Tutorials"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Security = lazy(() => import("./pages/Security"));
const Roadmap = lazy(() => import("./pages/Roadmap"));

// Admin
const AdminDashboard = lazy(() => import("./pages/admin/Dashboard"));
const DocEditor = lazy(() => import("./pages/admin/DocEditor"));

// Query client with production-ready config
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <ScrollToTop />
              <Suspense fallback={<PageLoading />}>
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
              </Suspense>
              <AIChatAssistant />
            </BrowserRouter>
          </TooltipProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
