import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Star, Quote, ArrowRight } from 'lucide-react';
import testimonial1 from '@/assets/testimonial-1.png';
import testimonial2 from '@/assets/testimonial-2.png';
import testimonial3 from '@/assets/testimonial-3.png';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'HR Director',
    company: 'TechCorp Inc.',
    content: 'Jobaid completely transformed our hiring process. Their understanding of our company culture and technical requirements was exceptional. Within just 3 weeks, they filled 5 critical positions.',
    rating: 5,
    image: testimonial1,
  },
  {
    name: 'Michael Chen',
    role: 'CEO',
    company: 'HealthPlus',
    content: 'The executive search team found us the perfect CFO within weeks. Their professionalism, network, and commitment to understanding our needs is unmatched in the industry.',
    rating: 5,
    image: testimonial2,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Operations Manager',
    company: 'RetailMax',
    content: 'Contract staffing through Jobaid saved us during peak season. Reliable, quick, and quality candidates every time. They truly understand the retail industry dynamics.',
    rating: 5,
    image: testimonial3,
  },
  {
    name: 'David Thompson',
    role: 'Founder',
    company: 'StartupX',
    content: 'As a startup, finding the right early hires was crucial. Jobaid not only found us great talent but also provided valuable HR consulting that helped us build strong foundations.',
    rating: 5,
    image: testimonial1,
  },
  {
    name: 'Lisa Wang',
    role: 'VP of Engineering',
    company: 'CodeBase',
    content: 'The technical recruitment team at Jobaid truly understands the tech landscape. They consistently deliver candidates who are not just skilled but also great cultural fits.',
    rating: 5,
    image: testimonial3,
  },
  {
    name: 'Robert Martinez',
    role: 'CFO',
    company: 'FinanceHub',
    content: 'Jobaid\'s payroll services have been a game-changer for us. Accurate, compliant, and hassle-free. Their attention to detail and proactive communication is commendable.',
    rating: 5,
    image: testimonial2,
  },
];

export default function TestimonialsPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4">
              Testimonials
            </span>
            <h1 className="heading-1 text-foreground mb-6">
              What Our <span className="text-gradient">Clients Say</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Don't just take our word for it – hear from the companies and 
              professionals who have experienced the Jobaid difference.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-soft relative"
              >
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>

                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
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
            Ready to Experience the Difference?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join the hundreds of companies who trust Jobaid for their HR needs.
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
