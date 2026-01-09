import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="section-padding bg-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6">
            Ready to Build Your{' '}
            <span className="text-primary">Dream Team</span>?
          </h2>
          <p className="text-background/70 text-lg mb-10 max-w-2xl mx-auto">
            Whether you're looking to hire top talent or find your next career opportunity, 
            Jobaid is here to help you succeed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" asChild>
              <Link to="/employer-form">
                Hire Talent Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button 
              size="xl" 
              className="bg-background/10 text-background border-2 border-background/20 hover:bg-background/20"
              asChild
            >
              <Link to="/employer-form">
                <Phone className="w-5 h-5" />
                Schedule a Call
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
