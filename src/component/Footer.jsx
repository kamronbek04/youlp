import React from 'react';
import Logo from '../img/logo-outbg.png';

const Footer = () => {
  return (
    <footer
      className="w-full xl:w-[1400px] py-[30px] md:py-[50px] px-[30px] m-auto flex flex-col text-[#343a40] 
      bg-[#f1f3f5]"
    >
      <div className="flex justify-between">
        <a
          href="#main"
          className="py-[20px] md:py-[30px]"
          aria-label="company logo"
        >
          <img src={Logo} className="w-[400px] m-auto" alt="company logo" />
        </a>

        <div className="flex flex-col items-start justify-between text-lg">
          <a
            href="#youlp"
            className="text-[#343a40] no-underline hover:!text-[#5F73F1]"
            aria-label="direct to what is youlp section"
          >
            What is YouLP?
          </a>
          <a
            href="#intern"
            className="text-[#343a40] no-underline hover:!text-[#5F73F1]"
            aria-label="direct to our interns section"
          >
            Our Interns
          </a>
          <a
            href="#news"
            className="text-[#343a40] no-underline hover:!text-[#5F73F1] "
            aria-label="direct to News & Insights section"
          >
            News & Insights
          </a>
          <a
            href="#"
            className="text-[#343a40] no-underline hover:!text-[#5F73F1]"
            aria-label="direct to Internship Programmes section"
          >
            Internship Programmes
          </a>
          <a
            href="#"
            className="text-[#343a40] no-underline hover:!text-[#5F73F1] "
            aria-label="direct to Applications section"
          >
            Applications
          </a>
        </div>

        <div className="flex flex-col items-start justify-between text-lg">
          <h4 className="text-[#343a40] font-semibold mb-4">Connect with us</h4>

          <span className="text-[#343a40]">
            Safdosh Street, 10, Tashkent, Uzbekistan
          </span>
          <a
            href="tel:+998997214262 "
            className="text-[#343a40] no-underline hover:!text-[#5F73F1]"
            aria-label="direct to youlp call center"
          >
            +998 99 721 42 62
          </a>
          <a
            href="mailto:info.yldp@gmail.com"
            className="text-[#343a40] no-underline hover:!text-[#5F73F1]"
            aria-label="direct to youlp email"
          >
            info.yldp@gmail.com
          </a>
        </div>

        <div className="flex flex-col items-center text-lg">
          <h4 className="text-[#343a40] font-semibold mb-4">
            Our Social media
          </h4>

          <ul className="flex gap-[20px] p-0 opacity-70">
            <li className="translate-y-[4px]">
              <a
                href="https://t.me/yldpuzb"
                className="text-[#343a40] text-[30px] hover:!text-[#5F73F1]"
                aria-label="direct to youlp telegram"
              >
                <i className="fa-brands fa-telegram"></i>
              </a>
            </li>
            <li className="translate-y-[4px]">
              <a
                href="https://www.linkedin.com/company/yldpuz/"
                className="text-[#343a40] text-[30px] hover:!text-[#5F73F1]"
                aria-label="direct to youlp linkedin"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li className="translate-y-[4px]">
              <a
                href="https://www.instagram.com/youlp.uz/"
                className=" text-[#343a40] text-[30px] hover:!text-[#5F73F1]"
                aria-label="direct to youlp instagram"
              >
                <i className="fa-brands fa-instagram "></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="mt-4 text-center font-light">
        © YouLP 2024 All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
