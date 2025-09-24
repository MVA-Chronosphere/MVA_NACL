import Header from '../Header';

export default function HeaderExample() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20 p-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <section id="home" className="h-96 bg-primary/5 rounded-lg flex items-center justify-center">
            <h2 className="text-3xl font-poppins font-bold text-primary">Home Section</h2>
          </section>
          <section id="menu" className="h-96 bg-accent/5 rounded-lg flex items-center justify-center">
            <h2 className="text-3xl font-poppins font-bold text-primary">Menu Section</h2>
          </section>
          <section id="about" className="h-96 bg-secondary/5 rounded-lg flex items-center justify-center">
            <h2 className="text-3xl font-poppins font-bold text-primary">About Section</h2>
          </section>
        </div>
      </div>
    </div>
  );
}