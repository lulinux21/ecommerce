import Banners from '../components/Banners';
import BestSellers from '../components/BestSellers';
import FeaturedBanners from '../components/FeaturedBanners';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Header from '../components/Header';
import News from '../components/News';
import '/public/styles.css';

const Home = () => {
  return (
    <>
      <Header />
      <Banners />
      <BestSellers />
      <FeaturedBanners />
      <News />
      <Gallery />
      <Footer />
    </>
  );
};

export default Home;
