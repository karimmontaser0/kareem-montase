import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* 💡 ملحوظة: شيلنا الـ basename واستخدمنا المسار الكامل في الـ Route */}
      <BrowserRouter>
        <Routes>
          <Route path="/My_Portfolio/" element={<Index />} />
          <Route path="/My_Portfolio/project/:id" element={<ProjectPage />} />
          {/* الـ Route ده عشان لو حد دخل من غير اسم الـ repo يوديه للـ Home برضه */}
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
