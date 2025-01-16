import { FeatureCard } from "../components/FeatureCard";
import { Dumbbell, MapPin, Package, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900">
      {/* Features Section */}
      <section className="px-6 py-24 bg-black/50">
        <div className="container mx-auto flex flex-col items-center gap-2">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="animate-fade-down text-5xl lg:text-6xl font-bold text-white mb-6">
              Movilízate Online
            </h1>
            <p className="animate-fade-up text-lg md:text-xl text-white/80 mb-8">
              Entrena desde cualquier lugar, sin material necesario, para todos
              los niveles
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="Entrenamiento online"
              description="Ponte en forma de manera online en grupos de hasta 5 personas"
              icon={<Dumbbell className="h-6 w-6" />}
            />
            <FeatureCard
              title="Desde cualquier lugar"
              description="Entrena donde quieras, cuando quieras"
              icon={<MapPin className="w-6 h-6" />}
            />
            <FeatureCard
              title="Sin material"
              description="Entrenamientos diseñados para realizar sin equipamiento"
              icon={<Package className="w-6 h-6" />}
            />
            <FeatureCard
              title="Todos los niveles"
              description="Grupos adaptados a cada nivel de experiencia"
              icon={<Users className="w-6 h-6" />}
            />
          </div>

          <a
            href="/planes/#plan-index"
            className="animate-fade-up mt-12 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
          >
            Más Información
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;
