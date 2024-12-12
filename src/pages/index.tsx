import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="text-primary-light">Marchesini light</div>
      <p className="text-primary-dark">This is a primary dark text color.</p>
      <p className="text-primary-regular">Regular</p>
      <Footer />
    </div>
  );
}
