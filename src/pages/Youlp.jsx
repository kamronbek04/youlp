import React from 'react';
import imgOne from '../img/yulp/yulp-1.jpg';
import imgSecond from '../img/yulp/yulp-2.jpg';
import imgThird from '../img/yulp/yulp-3.jpg';

export default function Youlp() {
  return (
    <div id="youlp" className="text-[#343a40]">
      <h1 className="text-center mt-16 font-bold">What is YouLP?</h1>
      <div className="flex flex-col gap-[100px] w-full xl:w-[1400px] py-[30px] md:py-[50px] px-[30px] m-auto">
        <div className="grid grid-cols-2 items-start gap-[40px] w-[1000px] m-auto mt-[100px]">
          <div>
            <h2 className="mb-[10px] text-[30px] font-medium">
              Young Leadership Program
            </h2>
            <p className="text-[18px]">
              The Young Leadership Program (YouLP) is a youth initiative
              organized by the Mahorat & Management, and
              Friedrich-Ebert-Stiftung in Uzbekistan (FES). The program aims to
              empower the young people of Uzbekistan by cultivating their
              leadership, interpersonal, and community engagement skills.{' '}
            </p>
          </div>

          <div>
            <img src={imgOne} alt="about Young Leadership Program" />
          </div>
        </div>

        <div className="grid grid-cols-2 items-start gap-[40px] w-[1000px] m-auto mt-[100px]">
          <div>
            <img src={imgSecond} alt="Program Overview:" />
          </div>

          <div>
            <h2 className="mb-[10px] text-[30px] font-medium">
              Program Overview:
            </h2>
            <p className="text-[18px]">
              The program lasts for three months and consists of a five-module
              Continuing Professional Development (CPD) curriculum. The training
              includes offline guest lectures by local experts, online
              zoom/telegram chat meetups featuring experts from abroad, case
              study analyses, practical field trips, and a variety of
              team-building activities and informal meetups initiated by the
              team. Each module consists of 8 hours of training, including team
              building activities, guest speaker lectures including a Q/A
              session, Soft skills, case studies or module tasks.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 items-start gap-[40px] w-[1000px] m-auto my-[100px]">
          <div>
            <h2 className="mb-[10px] text-[30px] font-medium">
              Young Leadership Program
            </h2>
            <p className="text-[18px]">
              The internship programme also includes leadership skills
              development including debate and communications training. During
              the programme, Interns have the opportunity to participate in
              media training with seasoned professionals and contribute to a
              formal public debate. They spend a weekend retreat exploring their
              own leadership styles and developing personal and professional
              skills for leading change with confidence.
            </p>
          </div>

          <div>
            <img
              src={imgThird}
              alt="youlp members teaching in a class masterclass"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
