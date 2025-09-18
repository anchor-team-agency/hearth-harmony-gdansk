import { Card, CardContent } from "@/components/ui/card";
import installationImage from "@/assets/installation-process.jpg";

const ServiceDetails = () => {
  return (
    <section id="services" className="py-20 bg-stone-gray-light/20">
      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-warm-brown mb-6">
            Oferta
          </h2>
        </header>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-warm-brown mb-4">Sprzedaż kominków</h3>
              <p className="text-foreground/80">
                Dobór wkładu, akcesoriów i zabudowy pod Twój styl i budżet.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-warm-brown mb-4">Montaż z gwarancją</h3>
              <p className="text-foreground/80">
                Profesjonalny montaż zgodny ze sztuką i przepisami.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-warm-brown mb-4">Serwis i przeglądy</h3>
              <p className="text-foreground/80">
                Opieka posprzedażowa i sezonowe przeglądy instalacji.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;