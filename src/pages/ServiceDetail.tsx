import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, FileText, Search, CreditCard, Settings } from 'lucide-react';

const servicesData: Record<string, {
  icon: typeof Users;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  process: { step: string; title: string; description: string }[];
}> = {
  'permanent-staffing': {
    icon: Users,
    title: 'Permanent Staffing',
    description: 'Build your dream team with full-time employees who perfectly match your culture and goals.',
    longDescription: 'Our permanent staffing solutions help you find dedicated professionals who will grow with your organization. We focus on understanding your company culture, values, and long-term goals to identify candidates who will thrive in your environment.',
    features: [
      'Comprehensive candidate screening',
      'Cultural fit assessment',
      'Technical skill evaluation',
      'Background verification',
      'Reference checks',
      'Onboarding support',
    ],
    benefits: [
      'Reduced time-to-hire',
      'Lower turnover rates',
      'Better cultural alignment',
      'Access to passive candidates',
      'Replacement guarantee',
    ],
    process: [
      { step: '01', title: 'Understanding', description: 'We deep-dive into your requirements and culture' },
      { step: '02', title: 'Sourcing', description: 'Our team identifies and approaches qualified candidates' },
      { step: '03', title: 'Screening', description: 'Rigorous assessment of skills and cultural fit' },
      { step: '04', title: 'Placement', description: 'Interview coordination and offer management' },
    ],
  },
  'contract-staffing': {
    icon: FileText,
    title: 'Contract Staffing',
    description: 'Flexible workforce solutions for project-based needs with quick deployment.',
    longDescription: 'Our contract staffing services provide you with skilled professionals for specific projects or temporary needs. We handle all aspects of employment, allowing you to focus on your core business.',
    features: [
      'Rapid deployment',
      'Flexible contract terms',
      'Complete compliance management',
      'Payroll handling',
      'Performance monitoring',
      'Extension flexibility',
    ],
    benefits: [
      'Cost-effective scaling',
      'No long-term commitments',
      'Access to specialized skills',
      'Reduced administrative burden',
      'Quick ramp-up/down',
    ],
    process: [
      { step: '01', title: 'Requirement', description: 'Define project scope and skill requirements' },
      { step: '02', title: 'Matching', description: 'Connect you with pre-vetted contractors' },
      { step: '03', title: 'Onboarding', description: 'Quick and seamless integration' },
      { step: '04', title: 'Management', description: 'Ongoing support and compliance handling' },
    ],
  },
  'executive-search': {
    icon: Search,
    title: 'Executive Search',
    description: 'Specialized recruitment for C-suite and senior leadership positions.',
    longDescription: 'Our executive search practice is dedicated to identifying and attracting top-tier leadership talent. We leverage our extensive network and industry expertise to find leaders who can drive your organization forward.',
    features: [
      'Confidential searches',
      'Leadership assessment',
      'Market mapping',
      'Compensation benchmarking',
      'Succession planning',
      'Executive coaching',
    ],
    benefits: [
      'Access to top-tier talent',
      'Discreet recruitment process',
      'Strategic alignment',
      'Reduced hiring risk',
      'Long-term success',
    ],
    process: [
      { step: '01', title: 'Strategy', description: 'Define leadership requirements and success criteria' },
      { step: '02', title: 'Research', description: 'In-depth market mapping and candidate identification' },
      { step: '03', title: 'Engagement', description: 'Confidential outreach and assessment' },
      { step: '04', title: 'Selection', description: 'Final interviews and offer negotiation' },
    ],
  },
  'payroll-services': {
    icon: CreditCard,
    title: 'Payroll Services',
    description: 'End-to-end payroll management ensuring accuracy and compliance.',
    longDescription: 'Our comprehensive payroll services ensure your employees are paid accurately and on time, every time. We handle all aspects of payroll processing while ensuring full compliance with local regulations.',
    features: [
      'Salary processing',
      'Tax calculations and filing',
      'Benefits administration',
      'Leave management',
      'Statutory compliance',
      'Detailed reporting',
    ],
    benefits: [
      'Zero errors guarantee',
      'Complete compliance',
      'Time and cost savings',
      'Employee self-service',
      'Scalable solutions',
    ],
    process: [
      { step: '01', title: 'Setup', description: 'System configuration and data migration' },
      { step: '02', title: 'Processing', description: 'Monthly payroll calculation and verification' },
      { step: '03', title: 'Disbursement', description: 'Salary transfer and documentation' },
      { step: '04', title: 'Reporting', description: 'Comprehensive reports and compliance filings' },
    ],
  },
  'hr-consulting': {
    icon: Settings,
    title: 'HR Consulting',
    description: 'Strategic HR guidance to optimize your workforce and policies.',
    longDescription: 'Our HR consulting services help organizations build strong HR foundations and optimize their people strategies. We provide expert guidance on everything from policy development to organizational design.',
    features: [
      'HR policy development',
      'Compensation design',
      'Performance management',
      'Employee engagement',
      'Training programs',
      'Organizational design',
    ],
    benefits: [
      'Improved productivity',
      'Better retention',
      'Compliance assurance',
      'Enhanced culture',
      'Strategic alignment',
    ],
    process: [
      { step: '01', title: 'Assessment', description: 'Evaluate current HR practices and gaps' },
      { step: '02', title: 'Strategy', description: 'Develop customized HR roadmap' },
      { step: '03', title: 'Implementation', description: 'Execute initiatives with your team' },
      { step: '04', title: 'Optimization', description: 'Continuous improvement and support' },
    ],
  },
};

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <Layout>
        <section className="section-padding bg-background">
          <div className="container-custom text-center">
            <h1 className="heading-2 text-foreground mb-4">Service Not Found</h1>
            <Button asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  const Icon = service.icon;

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-6">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <h1 className="heading-1 text-foreground mb-6">{service.title}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {service.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-3 text-foreground mb-6">What's Included</h2>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="heading-3 text-foreground mb-6">Key Benefits</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-2 text-foreground mb-4">Our Process</h2>
            <p className="text-muted-foreground">
              A systematic approach that ensures quality results every time.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                {index < service.process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how our {service.title.toLowerCase()} can help your organization.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
