import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";

function Home() {

  return (

    <div className="bg-gradient-to-b from-twilight to-deep min-h-screen">
      <div className="grid grid-rows-3">
     <div className="col-span-2 row-span-2">
     <HeroSection/>
     </div>
     <div className="col-span-2 row-span-1">
     <WhyChooseUs/>
     </div>
     </div>
    </div>
    
  );
    }
    


export default Home 
