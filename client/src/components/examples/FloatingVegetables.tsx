import FloatingVegetables from '../FloatingVegetables';

export default function FloatingVegetablesExample() {
  return (
    <div className="relative h-96 bg-background border rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
      <FloatingVegetables density="medium" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <h3 className="text-2xl font-poppins font-bold text-foreground">Floating Vegetables</h3>
          <p className="text-muted-foreground mt-2">Organic animations for fresh appeal</p>
        </div>
      </div>
    </div>
  );
}