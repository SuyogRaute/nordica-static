import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

import About from "./pages/About";
import Contact from "./pages/Contact";
import WhereToBuy from "./pages/WhereToBuy";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./contexts/CartContext";
import { CurrencyProvider } from "./contexts/CurrencyContext";
import Cart from "./pages/Cart";
import Products from "./pages/Product";
import { Scroll } from "lucide-react";
import ScrolltoTop from "./components/ScrolltoTop";
import { ShippingReturnsPage } from "./pages/shiping-returns";
import { FAQPage } from "./pages/Faqpage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
      <CurrencyProvider>
      <CartProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrolltoTop />
        <Routes>
          <Route path="/" element={<Index />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/where-to-buy" element={<WhereToBuy />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/shipping" element={<ShippingReturnsPage/>}/>
          <Route path="/faq" element={<FAQPage/>}/>
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </CartProvider>
    </CurrencyProvider>
  </QueryClientProvider>
);

export default App;
