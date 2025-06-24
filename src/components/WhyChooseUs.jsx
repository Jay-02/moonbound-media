import React from 'react'

function WhyChooseUs() {
  return (
    <div className="bg-[##0C1A2F] grid-cols-3 gap-24 ps-40 text-2xl border-b-primary-accent border-t-primary-accent">
      <div className="col-span-1">
        <h2 className=" text-3xl font-bold font-mono text-text-main pt-10 ">
          Why Choose Us
        </h2>
      </div>
      <div style={{fontFamily: "Inter"}}>
        <ul className="list-disc p-10 pl-20 space-y-3 text-text-main text-[1.5rem]">
          
          <li>
            <strong>Orbit-Worthy Strategy:</strong> Every campaign is aligned
            with your brand’s goals and audience, designed for long-term growth
            and visibility.
          </li>
          <li>
            <strong>Data, Not Dust:</strong> We use real analytics to guide
            decisions, constantly optimizing your reach and resonance.
          </li>
          <li>
            <strong>Myth Meets Modern:</strong> We blend timeless storytelling
            with the latest digital tools for an experience that feels both
            grounded and magical.
          </li>
          <li>
            <strong>Transparent & Human:</strong> We're collaborative,
            communicative, and always aligned with your vision — no mystery
            behind the scenes.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WhyChooseUs