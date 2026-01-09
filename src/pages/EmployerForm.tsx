import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

export default function EmployerForm() {
  return (
    <Layout>
      <section className="section-padding bg-muted">
        <div className="container-custom max-w-3xl">
          
          <div className="text-center mb-12">
            <h1 className="heading-2 mb-4">
              Employer <span className="text-gradient">Hiring Form</span>
            </h1>
            <p className="text-muted-foreground">
              Share your requirements and our team will get back to you shortly.
            </p>
          </div>

          <form className="bg-card rounded-2xl shadow-soft p-8 space-y-6">

            <div>
              <label className="form-label">Your Name *</label>
              <input type="text" required className="form-input" />
            </div>

            <div>
              <label className="form-label">Your Email *</label>
              <input type="email" required className="form-input" />
            </div>

            <div>
              <label className="form-label">Phone Number *</label>
              <input type="tel" required className="form-input" />
            </div>

            <div>
              <label className="form-label">Company Name *</label>
              <input type="text" required className="form-input" />
            </div>

            <div>
              <label className="form-label">Company Website</label>
              <input type="url" className="form-input" />
            </div>

            <div>
              <label className="form-label">Location *</label>
              <input type="text" required className="form-input" />
            </div>

            <div>
              <label className="form-label">Company Address (Optional)</label>
              <textarea rows={3} className="form-textarea" />
            </div>

            <div>
              <label className="form-label">Position Name *</label>
              <input type="text" required className="form-input" />
            </div>

            <div>
              <label className="form-label">Expected Salary</label>
              <input type="text" className="form-input" />
            </div>

            <div>
              <label className="form-label">Experience Required *</label>
              <input type="text" required className="form-input" />
            </div>

            <div>
              <label className="form-label">Job Description (Optional)</label>
              <textarea rows={4} className="form-textarea" />
            </div>

            <div>
              <label className="form-label">Upload Job Description Brief (Optional)</label>
              <input type="file" className="block w-full text-sm" />
            </div>

            <Button variant="hero" size="lg" className="w-full">
              Submit Hiring Request
            </Button>

          </form>
        </div>
      </section>
    </Layout>
  );
}
