import React from 'react';
import ImgFirst from '../img/news/news-1.jpg';
import ImgSecond from '../img/news/news-2.jpg';
import ImgThrid from '../img/news/news-3.jpg';

export default function News() {
  return (
    <div id="news" className="text-[#343a40]">
      <h1 className="text-center mt-16 font-bold ml-6">News & Insights</h1>
      <div className="flex flex-col gap-[50px] w-full xl:w-[1400px] py-[30px] md:py-[50px] px-[30px] m-auto">
        <div className="flex items-start gap-[40px] w-[1000px] m-auto mt-[100px]">
          <div className="w-[420px] h-[220px]">
            <img src={ImgFirst} alt="image of the youlp members" />
          </div>

          <div>
            <h2 className="text-[30px] font-medium text-[#5F73F1]">
              Trip to Samarkand with other YouLP teams
            </h2>
            <p className="text-[1.3rem] text-[#747577] font-bold my-[12px]">
              04.11.2023
            </p>
            <p className="text-[18px]">
              The fifth module of YouLP will be held in Samarkand and will
              involve teamwork with other YouLP teams.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-[40px] w-[1000px] m-auto mt-[100px]">
          <div className="w-[500px]">
            <img src={ImgSecond} alt="image of the youlp lesson" />
          </div>

          <div>
            <h2 className="text-[30px] font-medium text-[#5F73F1]">
              What is YLDP? How to make a social team.
            </h2>
            <p className="text-[1.3rem] text-[#747577] font-bold my-[12px]">
              07.10.2023
            </p>
            <p className="text-[18px]">
              Mirjalal Mirsabitov talked about making a social project and how
              to find partners for it and make this project successful.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-[40px] w-[1000px] m-auto mt-[100px]">
          <div className="w-[500px]">
            <img src={ImgThrid} alt="youlp members image" />
          </div>

          <div className="mb-[100px]">
            <h2 className="text-[30px] font-medium text-[#5F73F1]">
              A botanic garden plogging trip and panel discussion
            </h2>
            <p className="text-[1.3rem] text-[#747577] font-bold my-[12px]">
              22.10.2023
            </p>
            <p className="text-[18px]">
              The YouLP team took a plogging trip to the Botanic Gardens and
              spent part of their 4 modules in the Botanic Garden.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
