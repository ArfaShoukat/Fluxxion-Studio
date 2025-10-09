
import React from "react";
import TestimonialsCarousel from "./component/TestimonialsCarousel";
import FeaturePage from './pages/FeaturePage'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <FeaturePage />
      <TestimonialsCarousel />
    </div>
    
  );
}

export default App;
