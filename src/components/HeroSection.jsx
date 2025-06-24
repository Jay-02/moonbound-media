import React from 'react'
import HeroImage from './HeroImage';
import { Button } from './ui/button';
function HeroSection() {
  return (
    <div className=" ms-40 grid grid-cols-6  gap-x-24">
      <div className="col-span-3 row-span-4">
        <HeroImage />
      </div>
      <div className="col-span-2 ">
        <h2
          className="text-3xl font-bold text-white row-span-3 pt-10"
          style={{ fontFamily: "Homemade Apple" }}
        >
          Moonbound
        </h2>
        <div>
          <p
            className="text-2xl text-accent pt-[4rem] row-start-4 font-light"
            style={{ fontFamily: "Inter" }}
          >
           Looking for a  team to bring your alien ideas to life?
            Look no further! We develop galactic websites, apps and even integrate AI into your already existing platform!
           ` 
          </p>
          <div className="mt-20">
            <Button className="font-bold text-lg text-primary-accent bg-background rounded-[50px] p-[32px]">
              TAKE OFF
            </Button>
          </div>
        </div>
          <hr className='mt-10 opacity-[30%] text-text-main'/>
      </div>
    </div>
  );
}

export default HeroSection