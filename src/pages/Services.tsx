import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, FileText, Search, CreditCard, Settings, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'Permanent Staffing',
    slug: 'permanent-staffing',
    description: 'Build your dream team with full-time employees who perfectly match your culture and goals.',
    features: [
      'Comprehensive candidate screening',
      'Cultural fit assessment',
      'Background verification',
      'Onboarding support',
      'Replacement guarantee',
    ],
  },
  {
    icon: FileText,
    title: 'Contract Staffing',
    slug: 'contract-staffing',
    description: 'Flexible workforce solutions for project-based needs with quick deployment and scaling.',
    features: [
      'Rapid deployment',
      'Flexible contracts',
      'Compliance management',
      'Payroll handling',
      'Performance monitoring',
    ],
  },
  {
    icon: Search,
    title: 'Executive Search',
    slug: 'executive-search',
    description: 'Specialized recruitment for C-suite and senior leadership positions.',
    features: [
      'Confidential searches',
      'Leadership assessment',
      'Market mapping',
      'Succession planning',
      'Executive coaching',
    ],
  },
  {
    icon: CreditCard,
    title: 'Payroll Services',
    slug: 'payroll-services',
    description: 'End-to-end payroll management ensuring accuracy, compliance, and employee satisfaction.',
    features: [
      'Salary processing',
      'Tax compliance',
      'Benefits administration',
      'Leave management',
      'Statutory filings',
    ],
  },
  {
    icon: Settings,
    title: 'HR Consulting',
    slug: 'hr-consulting',
    description: 'Strategic HR guidance to optimize your workforce, policies, and organizational culture.',
    features: [
      'HR policy development',
      'Compensation benchmarking',
      'Performance management',
      'Employee engagement',
      'Training programs',
    ],
  },
];

export default function ServicesPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4">
              Our Services
            </span>
            <h1 className="heading-1 text-foreground mb-6">
              Comprehensive <span className="text-gradient">HR Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From talent acquisition to HR consulting, we offer a complete suite of 
              services designed to help your organization thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="heading-2 text-foreground mb-4">{service.title}</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="hero" asChild>
                    <Link to={`/services/${service.slug}`}>
                      Learn More <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
                <div className={`bg-muted rounded-3xl p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <service.icon className="w-32 h-32 text-primary/40" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can tailor our services to meet your specific needs.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">
              Get in Touch <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
