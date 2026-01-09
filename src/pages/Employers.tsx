import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Clock, Shield, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';
import employersImage from '@/assets/employers-image.png';

const benefits = [
  {
    icon: Users,
    title: 'Quality Candidates',
    description: 'Access pre-screened, verified professionals ready to contribute.',
  },
  {
    icon: Clock,
    title: 'Fast Hiring',
    description: 'Reduce time-to-hire with our efficient recruitment process.',
  },
  {
    icon: Shield,
    title: 'Risk Mitigation',
    description: 'Replacement guarantee and thorough background checks.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'From one hire to bulk recruitment, we scale with you.',
  },
];

const services = [
  'Permanent Staffing',
  'Contract Staffing',
  'Executive Search',
  'Payroll Services',
  'HR Consulting',
  'Bulk Hiring',
];

export default function Employers() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4">
                For Employers
              </span>
              <h1 className="heading-1 text-foreground mb-6">
                Hire the <span className="text-gradient">Best Talent</span> Fast
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Partner with Jobaid to access top-tier professionals. We understand 
                your business needs and deliver candidates who drive results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/employer-form">
                    Start Hiring
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/services">View Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-floating">
                <img 
                  src={employersImage} 
                  alt="HR manager reviewing candidates" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-floating">
                <h3 className="font-semibold text-foreground mb-4">Our Hiring Solutions</h3>
                <div className="space-y-2">
                  {services.slice(0, 4).map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-2 text-foreground mb-4">
              Why Partner With <span className="text-gradient">Jobaid</span>?
            </h2>
            <p className="text-muted-foreground">
              We're committed to delivering exceptional hiring experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-soft text-center card-hover">
                <div className="w-14 h-14 rounded-xl bg-accent mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">10,000+</p>
              <p className="text-muted-foreground">Successful Placements</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">500+</p>
              <p className="text-muted-foreground">Client Companies</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">98%</p>
              <p className="text-muted-foreground">Client Retention</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">72h</p>
              <p className="text-muted-foreground">Avg. Response Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Build Your Dream Team?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your hiring needs and find the perfect candidates together.
          </p>
        </div>
      </section>
    </Layout>
  );
}
