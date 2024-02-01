import React from 'react';
import main from '../img/main-outbg.png';

const Main = () => {
  return (
    <div
      className="w-full xl:w-[1400px] py-[30px] md:py-[50px] px-[30px] m-auto"
      id="main"
    >
      <header className="p-4 flex items-center justify-between">
        <div className="flex flex-col gap-y-16">
          <h1 className="text-7xl font-bold text-[#5F73F1]">
            <span className="text-5xl text-[#343a40]">Join Our</span>
            <br />
            Young Leaders
          </h1>
          <div className="flex items-center gap-x-3">
            <button className="text-white bg-[#5F73F1] hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-lg px-5 py-3 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
              <a href="#" className="no-underline"></a>
              Apply now
            </button>
            <button className="text-[#5F73F1] bg-[#dbe4ff] hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-lg px-5 py-3 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
              <a href="#youlp" className="no-underline">
                More ...
              </a>
            </button>
          </div>
        </div>
        <div className="w-50">
          <img src={main} alt="Header Image" className="object-cover w-100" />
        </div>
      </header>
    </div>
  );
};

export default Main;
