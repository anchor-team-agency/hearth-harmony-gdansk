import Navigation from "@/components/Navigation";
import StructuredData from "@/components/StructuredData";
import HeroSection from "@/components/HeroSection";
import ServiceDetails from "@/components/ServiceDetails";
import StoreLocation from "@/components/StoreLocation";
import ComprehensiveOffer from "@/components/ComprehensiveOffer";
import WhyUs from "@/components/WhyUs";
import AboutUs from "@/components/AboutUs";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import ProductExample from "@/components/ProductExample";
import CustomerReviews from "@/components/CustomerReviews";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Summary from "@/components/Summary";
import Footer from "@/components/Footer";

const Index = () => {
  console.log("Index component is rendering");
  
  return (
    <div style={{ 
        background: 'red', 
        color: 'white', 
        padding: '50px', 
        fontSize: '24px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <h1>APLIKACJA DZIAŁA!</h1>
      <p>Jeśli widzisz ten tekst, wszystko jest OK</p>
      <p>Routing: {window.location.pathname}</p>
      <p>Base URL: {window.location.href}</p>
      
      <div style={{ marginTop: '20px' }}>
        <button 
          onClick={() => console.log('Test kliknięcia')}
          style={{ padding: '10px 20px', fontSize: '16px' }}
        >
          Test Button
        </button>
      </div>
    </div>
  );
};

export default Index;