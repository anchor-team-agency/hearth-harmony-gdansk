
const advantages = [
  "Bezpłatna konsultacja i wycena",
  "Certyfikowane materiały i sprawdzeni producenci",
  "Czysty montaż – zabezpieczenie i posprzątanie miejsca pracy",
  "Wsparcie w dokumentacji i odbiorach"
];

const WhyUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-warm-brown mb-6">
            Dlaczego Pankominek?
          </h2>
        </header>
        
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {advantages.map((advantage, index) => (
              <li key={index} className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-fire-orange rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <span className="text-lg text-foreground/80">{advantage}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;