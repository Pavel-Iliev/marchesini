import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="text-primary">Marchesini</div>
      <p className="text-primary-dark">This is a primary dark text color.</p>
      <p className="text-secondary">This is a secondary default text color.</p>
      <p className="text-accent">This is an accent color text.</p>
      <div className="bg-primary-light text-primary-dark font-poppins p-6">
        <h1 className="text-9xl">Tailwind Theme Test</h1>
        <p className="text-secondary">This is using custom colors and fonts.</p>
      </div>
      <Footer />
    </div>
  );
}
