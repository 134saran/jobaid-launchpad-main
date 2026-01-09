import { Link } from 'react-router-dom';
import { Users, FileText, Search, CreditCard, Settings, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Users,
    title: 'Permanent Staffing',
    description: 'Find full-time employees who align perfectly with your company culture and long-term goals.',
    href: '/services/permanent-staffing',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: FileText,
    title: 'Contract Staffing',
    description: 'Flexible workforce solutions for project-based needs with quick deployment.',
    href: '/services/contract-staffing',
    color: 'bg-secondary/20 text-secondary',
  },
  {
    icon: Search,
    title: 'Executive Search',
    description: 'Specialized recruitment for C-suite and senior leadership positions.',
    href: '/services/executive-search',
    color: 'bg-emerald-500/10 text-emerald-600',
  },
  {
    icon: CreditCard,
    title: 'Payroll Services',
    description: 'Streamlined payroll management ensuring accuracy and compliance.',
    href: '/services/payroll-services',
    color: 'bg-violet-500/10 text-violet-600',
  },
  {
    icon: Settings,
    title: 'HR Consulting',
    description: 'Strategic HR guidance to optimize your workforce and policies.',
    href: '/services/hr-consulting',
    color: 'bg-rose-500/10 text-rose-600',
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4">
            Our Services
          </span>
          <h2 className="heading-2 text-foreground mb-4">
            Comprehensive <span className="text-gradient">HR Solutions</span>
          </h2>
          <p className="text-muted-foreground">
            From talent acquisition to HR consulting, we offer a complete suite of 
            services to meet all your human resource needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="group bg-card rounded-2xl p-8 shadow-soft card-hover border border-transparent hover:border-primary/20"
            >
              <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                <service.icon className="w-7 h-7" />
              </div>
              
              <h3 className="heading-3 text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}

          {/* CTA Card */}
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 flex flex-col justify-center items-center text-center text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">Need Custom Solutions?</h3>
            <p className="text-primary-foreground/80 mb-6">
              Let's discuss how we can tailor our services to your unique needs.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
