import CarrotHero from '../FloatingVegetables';

export default function CarrotHeroExample() {
  return (
    <div className="relative h-96 bg-gradient-to-r from-amber-50 to-orange-50 border rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
      <CarrotHero />
      <div className="relative z-10 flex items-start justify-start h-full p-8">
        <div className="max-w-md">
          <h3 className="text-3xl font-poppins font-bold text-foreground mb-4">GREEN REBEL MENU</h3>
          <p className="text-lg text-muted-foreground mb-4 uppercase tracking-wide font-inter">
            THE CHOICE IS EASY WHEN IT'S REAL FOOD.
          </p>
          <p className="text-lg text-muted-foreground font-inter">
            EAT REAL. FEEL REAL.
          </p>
        </div>
      </div>
    </div>
  );
}