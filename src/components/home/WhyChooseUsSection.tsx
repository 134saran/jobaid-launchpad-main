import { Target, Clock, Users, Shield, Zap, Heart } from 'lucide-react';

const reasons = [
  {
    icon: Target,
    title: 'Precision Matching',
    description: 'Our advanced screening ensures candidates perfectly match your requirements.',
  },
  {
    icon: Clock,
    title: 'Quick Turnaround',
    description: 'Reduce your time-to-hire with our efficient recruitment process.',
  },
  {
    icon: Users,
    title: 'Industry Expertise',
    description: 'Specialized recruiters with deep knowledge across multiple sectors.',
  },
  {
    icon: Shield,
    title: 'Quality Guarantee',
    description: 'We stand behind our placements with replacement guarantees.',
  },
  {
    icon: Zap,
    title: 'Scalable Solutions',
    description: 'From startups to enterprises, we scale to meet your needs.',
  },
  {
    icon: Heart,
    title: 'Dedicated Support',
    description: '24/7 client support throughout the recruitment journey.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="heading-2 text-foreground mb-6">
              What Makes{' '}
              <span className="text-gradient">Jobaid</span>{' '}
              Different?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We don't just fill positions – we build teams that drive success. 
              Our commitment to quality and understanding of the modern workforce 
              sets us apart from traditional recruitment agencies.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.slice(0, 4).map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{reason.title}</h4>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card rounded-2xl p-6 shadow-soft text-center">
              <p className="text-4xl font-bold text-primary mb-2">98%</p>
              <p className="text-sm text-muted-foreground">Client Satisfaction</p>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-soft text-center mt-8">
              <p className="text-4xl font-bold text-primary mb-2">72h</p>
              <p className="text-sm text-muted-foreground">Avg. Response Time</p>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-soft text-center">
              <p className="text-4xl font-bold text-primary mb-2">25+</p>
              <p className="text-sm text-muted-foreground">Industries Served</p>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-soft text-center mt-8">
              <p className="text-4xl font-bold text-primary mb-2">50+</p>
              <p className="text-sm text-muted-foreground">Expert Recruiters</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
