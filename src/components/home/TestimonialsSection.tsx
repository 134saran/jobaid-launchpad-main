import { Star, Quote } from 'lucide-react';
import testimonial1 from '@/assets/testimonial-1.png';
import testimonial2 from '@/assets/testimonial-2.png';
import testimonial3 from '@/assets/testimonial-3.png';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'HR Director',
    company: 'TechCorp Inc.',
    content: 'Jobaid transformed our hiring process. Their understanding of our company culture and technical requirements was exceptional.',
    rating: 5,
    image: testimonial1,
  },
  {
    name: 'Michael Chen',
    role: 'CEO',
    company: 'HealthPlus',
    content: 'The executive search team found us the perfect CFO within weeks. Their professionalism and network are unmatched.',
    rating: 5,
    image: testimonial2,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Operations Manager',
    company: 'RetailMax',
    content: 'Contract staffing through Jobaid saved us during peak season. Reliable, quick, and quality candidates every time.',
    rating: 5,
    image: testimonial3,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="heading-2 text-foreground mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-muted-foreground">
            Don't just take our word for it – hear from the companies we've helped succeed.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
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
  );
}
