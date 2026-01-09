import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

export default function ApplyJob() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    qualification: "",
    dob: "",
    jobArea: "",
    message: ""
  });

  const [resume, setResume] = useState<File | null>(null);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const whatsappNumber = "919962245383"; // CHANGE TO HR NUMBER

    const text = `
*New Job Application*

Name: ${formData.name}
Email: ${formData.email}
Mobile: ${formData.mobile}
Subject: ${formData.subject}
Qualification: ${formData.qualification}
DOB: ${formData.dob}
Job Area: ${formData.jobArea}

Message:
${formData.message}

(Resume will be shared separately)
`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    alert("Your application has been sent to HR");
  };

  return (
    <Layout>
      <section className="section-padding bg-muted">
        <div className="container-custom max-w-3xl">

          <div className="text-center mb-10">
            <h1 className="heading-2 mb-3">
              Apply for <span className="text-gradient">Job</span>
            </h1>
            <p className="text-muted-foreground">
              Submit your details and our HR team will contact you shortly.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-card p-8 rounded-2xl shadow-soft space-y-5"
          >

            <input
              name="name"
              placeholder="Your Name *"
              onChange={handleChange}
              className="form-input"
              required
            />

            <input
              name="email"
              placeholder="Your Email *"
              onChange={handleChange}
              className="form-input"
              required
            />

            <input
              name="mobile"
              placeholder="Mobile Number *"
              onChange={handleChange}
              className="form-input"
              required
            />

            <input
              name="subject"
              placeholder="Subject"
              onChange={handleChange}
              className="form-input"
            />

            <input
              name="qualification"
              placeholder="Qualification"
              onChange={handleChange}
              className="form-input"
            />

            <input
              type="date"
              name="dob"
              onChange={handleChange}
              className="form-input"
            />

            <select
              name="jobArea"
              onChange={handleChange}
              className="form-input"
            >
              <option value="">Select Job Area</option>
              <option>IT</option>
              <option>Manufacturing</option>
              <option>Architecture</option>
              <option>Banking & Finance</option>
              <option>Auditing</option>
            </select>

            {/* Resume Upload */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Upload Resume *
              </label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) =>
                  setResume(e.target.files ? e.target.files[0] : null)
                }
                className="block w-full text-sm
                file:mr-4 file:py-2 file:px-4
                file:rounded-lg file:border-0
                file:bg-accent file:text-accent-foreground
                hover:file:bg-accent/80"
                required
              />
            </div>

            <textarea
              name="message"
              placeholder="Your Message (optional)"
              onChange={handleChange}
              className="form-textarea"
            />

            <Button
              type="submit"
              variant="hero"
              className="w-full"
            >
              Submit Application
            </Button>

          </form>
        </div>
      </section>
    </Layout>
  );
}
