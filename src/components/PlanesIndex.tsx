import { PlanCard } from "./PlanCard";
import img1 from "../assets/imgSesiones/diario.png";
import img2 from "../assets/imgSesiones/4sesions.png";
import img3 from "../assets/imgSesiones/8sesiones.png";

const PlanesIndex = () => {
  const plans = [
    {
      title: "Bono Diario",
      pricePerSession: "35€/Sesión",
      totalPrice: "35.00",
      icon: img1.src,
    },
    {
      title: "Bono 4 Sesiones",
      pricePerSession: "30€/Sesión",
      totalPrice: "120.00",
      icon: img2.src,
    },
    {
      title: "Bono 8 Sesiones",
      pricePerSession: "20€/Sesión",
      totalPrice: "160.00",
      icon: img3.src,
    },
  ];
  return (
    <div className=" bg-gradient-to-b from-black to-gray-900" id="plan-index">
      {/* Pricing Section */}
      <section className="px-6 py-12 sm:py-24 bg-black/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Nuestros Planes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <PlanCard
                key={index}
                title={plan.title}
                pricePerSession={plan.pricePerSession}
                totalPrice={plan.totalPrice}
                icon={plan.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-12 sm:py-24 bg-black/50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comienza tu transformación hoy
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Únete a nuestra comunidad y alcanza tus objetivos fitness
            </p>
            <a
              href="https://form.jotform.com/250032690598056"
              target="_blank"
              className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              rel="noopener noreferrer"
            >
              Empezar Ahora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlanesIndex;
