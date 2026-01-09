const clients = [
  'TechCorp',
  'HealthPlus',
  'FinanceHub',
  'RetailMax',
  'BuildRight',
  'EduGlobal',
  'AeroWings',
  'MediaPro',
];

export default function ClientsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4">
            Our Clients
          </span>
          <h2 className="heading-2 text-foreground mb-4">
            Trusted by <span className="text-gradient">Leading Brands</span>
          </h2>
          <p className="text-muted-foreground">
            We're proud to partner with some of the world's most innovative companies.
          </p>
        </div>

        {/* Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 flex items-center justify-center shadow-soft hover:shadow-elevated transition-shadow border border-border"
            >
              <span className="text-xl font-bold text-muted-foreground/60 hover:text-primary transition-colors">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
