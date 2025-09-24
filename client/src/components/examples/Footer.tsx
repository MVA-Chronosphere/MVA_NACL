import Footer from '../Footer';

export default function FooterExample() {
  return (
    <div className="min-h-screen bg-background">
      <div className="h-96 bg-gradient-to-b from-background to-accent/5 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-poppins font-bold text-primary mb-4">Website Content</h2>
          <p className="text-muted-foreground font-inter">Footer example below</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}