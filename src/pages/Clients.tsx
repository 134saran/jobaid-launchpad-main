import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const clients = [
  { name: 'TechCorp', industry: 'Technology' },
  { name: 'HealthPlus', industry: 'Healthcare' },
  { name: 'FinanceHub', industry: 'Finance' },
  { name: 'RetailMax', industry: 'Retail' },
  { name: 'BuildRight', industry: 'Construction' },
  { name: 'EduGlobal', industry: 'Education' },
  { name: 'AeroWings', industry: 'Aviation' },
  { name: 'MediaPro', industry: 'Media' },
  { name: 'FoodChain', industry: 'F&B' },
  { name: 'LogiMove', industry: 'Logistics' },
  { name: 'GreenEnergy', industry: 'Energy' },
  { name: 'AutoDrive', industry: 'Automotive' },
];

const industries = [
  { name: 'Technology', count: 120 },
  { name: 'Healthcare', count: 85 },
  { name: 'Finance', count: 75 },
  { name: 'Manufacturing', count: 60 },
  { name: 'Retail', count: 55 },
  { name: 'Education', count: 40 },
];

export default function ClientsPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4">
              Our Clients
            </span>
            <h1 className="heading-1 text-foreground mb-6">
              Trusted by <span className="text-gradient">Leading Brands</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're proud to partner with some of the world's most innovative 
              companies across diverse industries.
            </p>
          </div>
        </div>
      </section>

      {/* Client Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 text-center shadow-soft card-hover border border-border"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{client.name.charAt(0)}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-1">{client.name}</h3>
                <p className="text-sm text-muted-foreground">{client.industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Breakdown */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-2 text-foreground mb-4">
              Clients by <span className="text-gradient">Industry</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-soft flex items-center justify-between">
                <span className="font-medium text-foreground">{industry.name}</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  {industry.count}+ clients
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Join Our Growing Client Base
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Experience the Jobaid difference and transform your hiring process.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">
              Become a Client <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
