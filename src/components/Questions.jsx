import React from "react";

const Questions = () => {
  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center">
      <div className="container mx-auto px-4 ">
        <h1 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl pt-12 md:pt-2 mb-8 ">
          Frequently Asked Questions
        </h1>
        <p className="text-lg md:text-xl m-28 text-center leading-loose">
          Pinpoint your audience with precision, ensuring your marketing efforts
          reach those most likely to engage with your brand.{" "}
        </p>
        <div className="container w-1/2 mx-auto">
          <div className="collapse collapse-arrow bg-base-200 mb-10  hover:bg-[#0078FF] hover:text-white transition duration-300 ">
            <input className="" type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Frequently Asked Questions
            </div>
            <div className="collapse-content">
              <p className="m-7">
                We believe in measurable results. Our data-driven approach means
                that every campaign's performance is tracked, analyzed, and
                refined for optimal outcomes. We provide regular reports that
                detail key metrics, giving you clear insights into how our
                strategies are driving growth for your brand..
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 mb-4  hover:bg-[#0078FF] hover:text-white transition duration-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Frequently Asked Questions
            </div>
            <div className="collapse-content">
              <p className="m-7">
                We believe in measurable results. Our data-driven approach means
                that every campaign's performance is tracked, analyzed, and
                refined for optimal outcomes. We provide regular reports that
                detail key metrics, giving you clear insights into how our
                strategies are driving growth for your brand..
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 mb-4  hover:bg-[#0078FF] hover:text-white transition duration-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Frequently Asked Questions
            </div>
            <div className="collapse-content">
              <p className="m-7">
                We believe in measurable results. Our data-driven approach means
                that every campaign's performance is tracked, analyzed, and
                refined for optimal outcomes. We provide regular reports that
                detail key metrics, giving you clear insights into how our
                strategies are driving growth for your brand..
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
