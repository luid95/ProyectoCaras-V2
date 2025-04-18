import React from "react";
import Header from "./components/Header";
import SubscriptionForm from "./components/SubscriptionForm";
import FeaturedSection from "./components/FeaturedSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
const App: React.FC = () => {
  return (
    <>
      <Header />
      <FeaturedSection />
      <SubscriptionForm />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
