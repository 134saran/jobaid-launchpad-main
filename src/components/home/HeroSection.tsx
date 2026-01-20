import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Briefcase, Award } from 'lucide-react';
import heroImage from '@/assets/hero-image.png';

const stats = [
  { icon: Users, value: '1000+', label: 'Placements' },
  { icon: Briefcase, value: '150+', label: 'Companies' },
  { icon: Award, value: '3+', label: 'Years Experience' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional team collaborating" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-accent-foreground">
                Trusted by Fortune 150 Companies
              </span>
            </div>

            <h4 className="heading-1">
              We offer<span className="text-gradient"> Placement Services,</span>{' '}{' '}
              <span className="text-gradient">Job Consultancy,</span>{' '}
              comprehensive <span className="text-gradient">Interview Support.</span>{' '}
            </h4>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Jobaid connects exceptional professionals with leading organizations. 
              Whether you're hiring or seeking opportunities, we make the perfect match.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/employer-form">
                  Hire Talent
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/job-seekers">Find Jobs</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <stat.icon className="w-5 h-5 text-primary" />
                    <span className="text-2xl md:text-3xl font-bold text-foreground">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
