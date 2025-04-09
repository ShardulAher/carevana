
const partners = [
  {
    name: "Down Syndrome Foundation",
    logo: "https://placehold.co/200x80/A5D7E8/white?text=DSF"
  },
  {
    name: "Special Care Network",
    logo: "https://placehold.co/200x80/B5EAD7/333333?text=SCN"
  },
  {
    name: "Children's Health Alliance",
    logo: "https://placehold.co/200x80/FFDAC1/333333?text=CHA"
  },
  {
    name: "Inclusive Education Institute",
    logo: "https://placehold.co/200x80/E2D1F9/333333?text=IEI"
  },
  {
    name: "Family Support Initiative",
    logo: "https://placehold.co/200x80/FFDEE2/333333?text=FSI"
  },
  {
    name: "Global Care Partners",
    logo: "https://placehold.co/200x80/A5D7E8/white?text=GCP"
  }
];

const PartnersSection = () => {
  return (
    <section className="container-padding">
      <div className="container mx-auto">
        <h2 className="section-title">Our Partners</h2>
        <p className="section-subtitle">
          We collaborate with trusted organizations dedicated to supporting children with Down syndrome and their families.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-4 flex items-center justify-center h-24 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
