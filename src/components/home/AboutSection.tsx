import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import aboutImage from '@/assets/about-image.png';

const highlights = [
  'Industry-leading talent acquisition expertise',
  'Personalized recruitment solutions',
  'Pan-industry coverage across sectors',
  'End-to-end HR consulting services',
];

export default function AboutSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-floating">
              <img 
                src={aboutImage} 
                alt="Team meeting in conference room" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            
            {/* Accent Card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl shadow-floating p-6 max-w-[200px]">
              <p className="text-3xl font-bold text-primary mb-1">500+</p>
              <p className="text-sm text-muted-foreground">Happy Clients Worldwide</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full">
              About Jobaid
            </span>
            
            <h2 className="heading-2 text-foreground">
              Your Trusted Partner in{' '}
              <span className="text-gradient">Talent Solutions</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Jobaid is a premier HR consultancy dedicated to bridging the gap between 
              exceptional talent and outstanding organizations. With over 15 years of 
              experience, we've helped thousands of businesses find the right people 
              to drive their success.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Our team of seasoned HR professionals understands the nuances of 
              recruitment across various industries, ensuring a perfect cultural 
              and skill fit every time.
            </p>

            <ul className="space-y-3">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Button variant="hero" size="lg" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
