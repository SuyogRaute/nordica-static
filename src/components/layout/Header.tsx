import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, ChevronDown, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCurrency } from '@/contexts/CurrencyContext';
import { useCart } from '@/contexts/CartContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import LOGO from "@/assets/logo.jpeg"

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/products' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const { currency, setCurrency } = useCurrency();
  const { totalItems } = useCart();

  // Mock user data - Replace with your actual auth context/state
  

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
               <img src={LOGO} alt="" className='object-contain h-20 w-20'/>
              
              </div>
             
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex ml-auto gap-14">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center ml-auto lg:ml-0 gap-4">
            {/* Currency Switcher */}
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="hidden sm:flex gap-1 text-foreground/80">
                  {currency}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card border-border">
                <DropdownMenuItem 
                  onClick={() => setCurrency('USD')}
                  className="cursor-pointer"
                >
                  🇺🇸 USD - US Dollar
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setCurrency('CAD')}
                  className="cursor-pointer"
                >
                  🇨🇦 CAD - Canadian Dollar
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}

            {/* Cart */}
            {/* <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium">
                    {totalItems}
                  </span>
                )}
              </Button> */}
            {/* </Link> */}

            {/* User Profile - Desktop */}
           

            {/* Mobile Menu */}
            <Sheet>
              
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-card border-border">
                {/* Mobile User Profile Section */}
          
                {/* Navigation Links */}
                <nav className="flex flex-col justify-center gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2 border-b border-border"
                    >
                      {link.name}
                    </Link>
                  ))}
                  
                  {/* Currency Switcher Mobile */}
                  {/* <div className="pt-4">
                    <p className="text-sm text-muted-foreground mb-2">Currency</p>
                    <div className="flex gap-2">
                      <Button 
                        variant={currency === 'USD' ? 'default' : 'outline'} 
                        size="sm"
                        onClick={() => setCurrency('USD')}
                      >
                        🇺🇸 USD
                      </Button>
                      <Button 
                        variant={currency === 'CAD' ? 'default' : 'outline'} 
                        size="sm"
                        onClick={() => setCurrency('CAD')}
                      >
                        🇨🇦 CAD
                      </Button>
                    </div>
                  </div> */}

                 
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;