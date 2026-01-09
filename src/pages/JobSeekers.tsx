import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Briefcase, GraduationCap, ArrowRight, CheckCircle } from 'lucide-react';

export default function JobSeekersPage() {
  return (
    <Layout>
      {/* Hero Section - Centered Message */}
<section className="py-5 md:py-8 bg-gradient-to-br from-primary/5 via-background to-accent/10">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-6">
              For Job Seekers
            </span>
            <h1 className="heading-1 text-foreground mb-6">
              Find Your <span className="text-gradient">Perfect Career Path</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We help you find the right job based on your <span className="text-primary font-semibold">knowledge</span>, <span className="text-primary font-semibold">skills</span>, and <span className="text-primary font-semibold">experience</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Two Section Layout */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-foreground mb-4">
              Choose Your <span className="text-gradient">Path</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Select the option that best matches your current skills and career goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Paid Jobs Section */}
            <Link 
              to="/job-seekers/paid-jobs" 
              className="group bg-card rounded-3xl p-8 shadow-soft border-2 border-transparent hover:border-primary hover:shadow-floating transition-all duration-300"
            >
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/70 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-10 h-10 text-primary-foreground" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                UnPaid Jobs
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  For candidates with <span className="text-foreground font-medium">strong knowledge</span> and <span className="text-foreground font-medium">industry-ready skills</span>. These opportunities are suitable for experienced or highly skilled professionals.
                </p>
                
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Immediate job placement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Competitive salary packages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Top companies hiring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Career growth opportunities</span>
                  </li>
                </ul>
                
                <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all duration-300">
                  Explore Paid Jobs
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>

            {/* Training & Placement Jobs Section */}
            <Link 
              to="/job-seekers/training-placement" 
              className="group bg-card rounded-3xl p-8 shadow-soft border-2 border-transparent hover:border-secondary hover:shadow-floating transition-all duration-300"
            >
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary to-secondary/70 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-10 h-10 text-secondary-foreground" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-secondary transition-colors">
                 Paid Jobs
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  For candidates who <span className="text-foreground font-medium">need training</span> before placement. We provide comprehensive training followed by guaranteed job placement opportunities.
                </p>
                
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Professional skill training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Industry certifications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Guaranteed placement assistance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Mentorship & support</span>
                  </li>
                </ul>
                
                <div className="inline-flex items-center gap-2 text-secondary font-semibold group-hover:gap-4 transition-all duration-300">
                  Explore Training Programs
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-foreground mb-4">
            Not Sure Which Path Is Right For You?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact our career counselors for personalized guidance to help you choose the best option for your career goals.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors"
          >
            Talk to a Career Counselor
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
