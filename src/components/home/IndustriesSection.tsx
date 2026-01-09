import { 
  Building2, 
  Stethoscope, 
  Cpu, 
  Banknote, 
  ShoppingBag, 
  Factory, 
  Plane, 
  GraduationCap 
} from 'lucide-react';

const industries = [
  { icon: Cpu, name: 'Technology', positions: '2,500+' },
  { icon: Stethoscope, name: 'Healthcare', positions: '1,800+' },
  { icon: Banknote, name: 'Finance', positions: '1,200+' },
  { icon: Factory, name: 'Manufacturing', positions: '950+' },
  { icon: ShoppingBag, name: 'Retail', positions: '780+' },
  { icon: Building2, name: 'Real Estate', positions: '620+' },
  { icon: Plane, name: 'Aviation', positions: '450+' },
  { icon: GraduationCap, name: 'Education', positions: '380+' },
];

export default function IndustriesSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4">
            Industries We Serve
          </span>
          <h2 className="heading-2 text-foreground mb-4">
            Expertise Across <span className="text-gradient">All Sectors</span>
          </h2>
          <p className="text-muted-foreground">
            Our specialized teams have deep knowledge across various industries, 
            ensuring we understand your unique hiring needs.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 text-center shadow-soft card-hover border border-transparent hover:border-primary/20"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <industry.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{industry.name}</h3>
              <p className="text-sm text-primary font-medium">{industry.positions} placed</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
