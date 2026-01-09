import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Target, Award, Heart, ArrowRight } from 'lucide-react';
import aboutImage from '@/assets/about-image.png';

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in every placement, ensuring quality matches that last.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We build long-term relationships with clients and candidates alike.',
  },
  {
    icon: Award,
    title: 'Integrity',
    description: 'Transparency and honesty guide every interaction we have.',
  },
  {
    icon: Heart,
    title: 'Care',
    description: 'We genuinely care about the success of everyone we work with.',
  },
];

const milestones = [
  { year: '2009', title: 'Founded', description: 'Jobaid was established with a vision to transform recruitment.' },
  { year: '2012', title: 'Expansion', description: 'Opened offices across major cities nationwide.' },
  { year: '2016', title: '5000 Placements', description: 'Reached our first major milestone in placements.' },
  { year: '2020', title: 'Digital Transformation', description: 'Launched our advanced AI-powered recruitment platform.' },
  { year: '2024', title: 'Global Reach', description: 'Expanded services to international markets.' },
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={aboutImage} 
            alt="Team meeting" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4">
              About Jobaid
            </span>
            <h1 className="heading-1 text-foreground mb-6">
              Building Bridges Between{' '}
              <span className="text-gradient">Talent & Opportunity</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Since 2009, Jobaid has been at the forefront of connecting exceptional 
              professionals with organizations that value talent. Our mission is to 
              make hiring simpler, faster, and more effective.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
              <h2 className="heading-3 text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower organizations with the right talent and help professionals 
                find fulfilling careers. We believe that the right match can transform 
                both businesses and lives.
              </p>
            </div>
            <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
              <h2 className="heading-3 mb-4">Our Vision</h2>
              <p className="text-primary-foreground/80 leading-relaxed">
                To be the most trusted HR partner globally, known for our commitment 
                to quality, innovation, and the success of every client and candidate 
                we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-2 text-foreground mb-4">
              Our Core <span className="text-gradient">Values</span>
            </h2>
            <p className="text-muted-foreground">
              These principles guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 text-center shadow-soft">
                <div className="w-14 h-14 rounded-xl bg-accent mx-auto mb-4 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-2 text-foreground mb-4">
              Our <span className="text-gradient">Journey</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {milestone.year}
                  </div>
                  {index !== milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-semibold text-foreground mb-1">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
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
            Ready to Work With Us?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join the hundreds of companies and thousands of professionals who trust Jobaid.
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
