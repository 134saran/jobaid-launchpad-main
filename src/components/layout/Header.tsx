import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import logoIcon from '@/assets/logo-icon.png';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  {
    name: 'Our Services',
    href: '/services',
    dropdown: [
      { name: 'Permanent Staffing', href: '/services/permanent-staffing' },
      { name: 'Contract Staffing', href: '/services/contract-staffing' },
      { name: 'Executive Search', href: '/services/executive-search' },
      { name: 'Payroll Services', href: '/services/payroll-services' },
      { name: 'HR Consulting', href: '/services/hr-consulting' },
    ],
  },
  { name: 'Job Seekers', href: '/job-seekers' },
  { name: 'Employers', href: '/employers' },
  { name: 'Our Clients', href: '/clients' },
  {
    name: 'Blogs',
    href: '/blogs',
    dropdown: [
      { name: 'Achievements', href: '/blogs/achievements' },
      { name: 'Testimonials', href: '/blogs/testimonials' },
    ],
  },
  { name: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      )}
    >
      <div className="container-custom">
<nav className="flex items-center justify-between h-20 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 h-20">
<img
  src={logoIcon}
  alt="Jobaid Logo"
  className="h-14 w-auto object-contain"
/>
            <span className="text-3xl font-bold text-foreground">
              Job<span className="text-primary">aid</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={cn(
                    'flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                    location.pathname === item.href
                      ? 'text-primary bg-accent'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  )}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && openDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-2 w-56 animate-fade-in">
                    <div className="bg-card rounded-xl shadow-floating border border-border p-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <Link to="/job-seekers">Apply for Jobs</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border animate-fade-in">
            <div className="py-4 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={cn(
                      'flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg transition-colors',
                      location.pathname === item.href
                        ? 'text-primary bg-accent'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                    onClick={(e) => {
                      if (item.dropdown) {
                        e.preventDefault();
                        setOpenDropdown(openDropdown === item.name ? null : item.name);
                      }
                    }}
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown
                        className={cn(
                          'w-4 h-4 transition-transform',
                          openDropdown === item.name && 'rotate-180'
                        )}
                      />
                    )}
                  </Link>

                  {item.dropdown && openDropdown === item.name && (
                    <div className="pl-6 space-y-1 mt-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 px-4 space-y-2">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/job-seekers">Apply for Jobs</Link>
                </Button>
                <Button variant="hero" className="w-full" asChild>
                  <Link to="/employer-form">Hire Talent</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
