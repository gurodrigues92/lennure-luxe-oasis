import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Dashboard from "./pages/admin/Dashboard";
import ContentEditor from "./pages/admin/ContentEditor";
import ImageManager from "./pages/admin/ImageManager";
import History from "./pages/admin/History";
import VisualEditor from "./pages/admin/VisualEditor";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CancellationPolicy from "./pages/CancellationPolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <LanguageProvider>
        <TooltipProvider>
          <div className="overflow-x-hidden">
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route 
                  path="/admin" 
                  element={
                    <ProtectedRoute requireAdmin>
                      <Dashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/admin/content" 
                  element={
                    <ProtectedRoute requireAdmin>
                      <ContentEditor />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/admin/images" 
                  element={
                    <ProtectedRoute requireAdmin>
                      <ImageManager />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/admin/history" 
                  element={
                    <ProtectedRoute requireAdmin>
                      <History />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/admin/visual-editor" 
                  element={
                    <ProtectedRoute requireAdmin>
                      <VisualEditor />
                    </ProtectedRoute>
                  } 
                />
                <Route path="/politica-privacidade" element={<PrivacyPolicy />} />
                <Route path="/termos-uso" element={<TermsOfService />} />
                <Route path="/politica-cancelamento" element={<CancellationPolicy />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </div>
        </TooltipProvider>
      </LanguageProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
