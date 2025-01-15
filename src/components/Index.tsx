import { ImageCarousel } from "../components/ImageCarousel";
import { FeatureCard } from "../components/FeatureCard";
import { Calendar, MapPin, Package, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="animate-fade-down text-4xl md:text-6xl font-bold text-white mb-6">
              Movilízate Online
            </h1>
            <p className="animate-fade-up text-lg md:text-xl text-white/80 mb-8">
              Entrena desde cualquier lugar, sin material necesario, para todos
              los niveles
            </p>
            <button className="animate-fade-up bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
              Más Información
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-24 bg-black/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="Personaliza tu plan"
              description="Adapta tu entrenamiento según tus objetivos y nivel"
              icon={<Calendar className="w-6 h-6" />}
            />
            <FeatureCard
              title="Desde cualquier lugar"
              description="Entrena donde quieras, cuando quieras"
              icon={<MapPin className="w-6 h-6" />}
            />
            <FeatureCard
              title="Sin material"
              description="Ejercicios diseñados para realizar sin equipamiento"
              icon={<Package className="w-6 h-6" />}
            />
            <FeatureCard
              title="Todos los niveles"
              description="Programas adaptados a cada nivel de experiencia"
              icon={<Users className="w-6 h-6" />}
            />
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="px-6 py-24">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Descubre nuestros entrenamientos
          </h2>
          <ImageCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-24 bg-black/50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comienza tu transformación hoy
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Únete a nuestra comunidad y alcanza tus objetivos fitness
            </p>
            <button className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
              Empezar Ahora
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
