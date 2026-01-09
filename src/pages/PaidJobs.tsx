import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Briefcase, MapPin, Clock, DollarSign, Building2, Filter, Search } from 'lucide-react';

const jobListings = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'Tech Solutions Inc.',
    location: 'Mumbai, India',
    type: 'Full-time',
    salary: '₹15-25 LPA',
    category: 'IT & Software',
    posted: '2 days ago',
  },
  {
    id: 2,
    title: 'Financial Analyst',
    company: 'Global Finance Corp',
    location: 'Bangalore, India',
    type: 'Full-time',
    salary: '₹10-15 LPA',
    category: 'Finance & Banking',
    posted: '3 days ago',
  },
  {
    id: 3,
    title: 'Marketing Manager',
    company: 'Brand Masters',
    location: 'Delhi, India',
    type: 'Full-time',
    salary: '₹12-18 LPA',
    category: 'Marketing & Sales',
    posted: '1 day ago',
  },
  {
    id: 4,
    title: 'HR Business Partner',
    company: 'People First Ltd.',
    location: 'Hyderabad, India',
    type: 'Full-time',
    salary: '₹8-12 LPA',
    category: 'Human Resources',
    posted: '5 days ago',
  },
  {
    id: 5,
    title: 'Operations Manager',
    company: 'Logistics Pro',
    location: 'Chennai, India',
    type: 'Full-time',
    salary: '₹14-20 LPA',
    category: 'Operations',
    posted: '4 days ago',
  },
  {
    id: 6,
    title: 'Data Scientist',
    company: 'Analytics Hub',
    location: 'Pune, India',
    type: 'Full-time',
    salary: '₹18-28 LPA',
    category: 'IT & Software',
    posted: '1 day ago',
  },
];

const categories = [
  'All Categories',
  'IT & Software',
  'Finance & Banking',
  'Marketing & Sales',
  'Human Resources',
  'Operations',
  'Healthcare',
  'Engineering',
];

export default function PaidJobsPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <Link 
              to="/job-seekers" 
              className="inline-flex items-center gap-2 text-primary hover:underline mb-4"
            >
              ← Back to Job Seekers
            </Link>
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/70 mx-auto mb-6 flex items-center justify-center">
              <Briefcase className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="heading-1 text-foreground mb-4">
              <span className="text-gradient">Paid Jobs</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Browse our curated list of paid job opportunities for experienced professionals with industry-ready skills.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input 
                type="text"
                placeholder="Search jobs by title, company, or keyword..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div className="flex gap-4">
              <select className="px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50">
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <button className="px-4 py-3 rounded-xl border border-border bg-background hover:bg-muted flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filters
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <p className="text-muted-foreground">
              Showing <span className="text-foreground font-semibold">{jobListings.length}</span> jobs
            </p>
            <select className="px-4 py-2 rounded-lg border border-border bg-background text-sm">
              <option>Most Recent</option>
              <option>Highest Salary</option>
              <option>Most Relevant</option>
            </select>
          </div>

          <div className="space-y-4">
            {jobListings.map((job) => (
              <div 
                key={job.id} 
                className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:border-primary hover:shadow-floating transition-all duration-300 group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {job.title}
                        </h3>
                        <p className="text-muted-foreground">{job.company}</p>
                        <div className="flex flex-wrap gap-4 mt-3 text-sm">
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1 text-primary font-medium">
                            <DollarSign className="w-4 h-4" />
                            {job.salary}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 lg:flex-col lg:items-end">
                    <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs">
                      {job.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{job.posted}</span>
                    <Button variant="hero" size="sm" asChild>
                      <Link to="/apply-job">
                        Apply Now
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Jobs
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Can't Find the Right Job?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Submit your resume and let our recruiters find the perfect match for your skills and experience.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/apply-job">
              Submit Your Resume <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}