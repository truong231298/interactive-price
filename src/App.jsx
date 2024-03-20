import React, { useState } from "react";
import bgCircles from "/images/pattern-circles.svg";
import iconCheck from "/images/icon-check.svg";

export default function App() {
  const infors = [
    { pageviews: 10, month: 8 },
    { pageviews: 50, month: 12 },
    { pageviews: 100, month: 16 },
    { pageviews: 500, month: 24 },
    { pageviews: "1M", month: 36 },
  ];
  const [vSlider, setVSlider] = useState(2);
  const [yearly, setYearly] = useState(false);

  const handleChange = (e) => {
    setVSlider(parseInt(e.target.value, 10));
  };

  const selectedOption = infors[vSlider];

  return (
    <main className="min-h-screen flex justify-center bg-bg-pattern">
      <section className="w-full max-w-md flex flex-col mt-10 p-4">
        {/* part 1 */}
        <div className="relative flex justify-center items-center mb-4">
          <img src={bgCircles} alt="" className="absolute inset-0 w-full h-full" />
          <div className="text-center">
            <h1 className="font-semibold text-2xl text-black">Simple, traffic-based pricing</h1>
            <p className="text-gray-400">Sign-up for our 30 day trial. No credit card required</p>
          </div>
        </div>
        {/* part 2 */}
        <div className="flex flex-col gap-4 p-4 bg-white rounded-lg items-center sm:items-stretch mt-4">
          <div className="flex flex-col sm:flex-row justify-between text-gray-400 font-semibold">
            <p>{selectedOption.pageviews} PAGEVIEWS</p>
            <span className="sm:inline-flex hidden">
              <p className="text-2xl text-black">${yearly ? (selectedOption.month * 12 * 0.75).toFixed(2) : selectedOption.month.toFixed(2)}</p>
              <span>/month</span>
            </span>
          </div>
          {/* filter bar */}
          <div className="relative w-full">
            <input
              type="range"
              min={0}
              max={infors.length - 1}
              value={vSlider}
              onChange={handleChange}
              className="w-full"
            
            />
          </div>
          <span className="sm:hidden">
              <p className="text-2xl text-black">${yearly ? (selectedOption.month * 12 * 0.75).toFixed(2) : selectedOption.month.toFixed(2)}</p>
              <span>/month</span>
            </span>
          <div className="flex flex-row justify-center items-center my-4">
            <label htmlFor="billingType" className="inline-flex items-center cursor-pointer">
              <span className={`me-3 text-sm font-medium text-gray-900 ${yearly ? " dark:text-gray-300" : "dark:text-blue-900" }`}>
                Monthly Billing
              </span>
              <input
                type="checkbox"
                id="billingType"
                checked={yearly}
                onChange={() => setYearly(!yearly)}
                className="sr-only peer"
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className={`me-3 text-sm font-medium text-gray-900 ${!yearly ? " dark:text-gray-300" : "dark:text-blue-900" }`}>
                Yearly Billing
                <span className="sm:ms-3 text-sm font-medium text-gray-900 dark:text-LightRed bg-LightGrayishRed">25% <p className="hidden sm:block">discount</p></span>
              </span>
            </label>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-col">
              {["Unlimited websites", "100% data ownership", "Email reports"].map(
                (infor, index) => (
                  <span key={index} className="flex flex-row gap-2 items-center">
                    <img src={iconCheck} alt="" />
                    <p>{infor}</p>
                  </span>
                )
              )}
            </div>

            <button className="sm:ml-10 mt-10 sm:mt-0 px-4 py-2 bg-blue-900 rounded-full text-white hover:bg-LightGrayishRed">
              Start my trial
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
