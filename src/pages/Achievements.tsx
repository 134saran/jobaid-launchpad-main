import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Trophy, Target, TrendingUp, Award, ArrowRight } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'Best HR Consultancy 2024',
    description: 'Awarded by National HR Excellence Awards for outstanding service delivery.',
    year: '2024',
  },
  {
    icon: Target,
    title: '10,000+ Placements Milestone',
    description: 'Successfully placed over 10,000 professionals across various industries.',
    year: '2023',
  },
  {
    icon: TrendingUp,
    title: 'Fastest Growing HR Firm',
    description: 'Recognized for 150% YoY growth in client acquisition.',
    year: '2023',
  },
  {
    icon: Award,
    title: 'ISO 9001:2015 Certified',
    description: 'Achieved international quality management certification.',
    year: '2022',
  },
  {
    icon: Trophy,
    title: 'Customer Excellence Award',
    description: '98% client satisfaction rating for three consecutive years.',
    year: '2022',
  },
  {
    icon: Target,
    title: 'Industry Innovation Award',
    description: 'Pioneering AI-powered recruitment matching technology.',
    year: '2021',
  },
];

const stats = [
  { value: '15+', label: 'Industry Awards' },
  { value: '25+', label: 'Partnerships' },
  { value: '50+', label: 'Expert Team' },
  { value: '98%', label: 'Success Rate' },
];

export default function AchievementsPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4">
              Our Achievements
            </span>
            <h1 className="heading-1 text-foreground mb-6">
              Celebrating <span className="text-gradient">Excellence</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our journey has been marked by recognition and milestones that 
              reflect our commitment to excellence in HR services.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-primary-foreground mb-2">{stat.value}</p>
                <p className="text-primary-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-soft card-hover border border-border"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
                    <achievement.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    {achievement.year}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-foreground mb-6">
            Be Part of Our Success Story
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Partner with an award-winning HR consultancy and experience the difference.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
