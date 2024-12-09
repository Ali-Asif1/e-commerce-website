import React from "react";
import Image from "next/image";
import right from "../../public/images/testright.svg";
import star from "../../public/images/teststar.svg";

export const Testomonial = () => {
  return (
    <div className="text-gray-600 body-font">
      <div className="container pt-12 mx-auto">
        <h1 className="font-bold text-3xl text-black ml-6">OUR HAPPY COUSTOMER</h1>

        <div className="flex flex-wrap mx-4">
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <Image src={star} alt="star" className="mb-1" />
            <h2 className="text-gray-900 title-font mb-1 tracking-wider text-base flex gap-2 font-semibold">
              Sara M.
              <Image src={right} alt="right" />
            </h2>
            <div className="h-full text-center">
              <p className="leading-relaxed text-justify">
                "I'm blown away by the quality and style of the clothes I
                received from Shop.co. From casual wear to elegant dresses,
                every piece I've bought has exceeded my expectations.”
              </p>
            </div>
          </div>

          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <Image src={star} alt="star" className="mb-1" />
            <h2 className="text-gray-900 title-font mb-1 tracking-wider text-base flex gap-2 font-semibold">
              Alex K.
              <Image src={right} alt="right" />
            </h2>
            <div className="h-full text-center">
              <p className="leading-relaxed text-justify">
                "Finding clothes that align with my personal style used to be a
                challenge until I discovered Shop.co. The range of options they
                offer is truly remarkable, catering to a variety of tastes and
                occasions.”
              </p>
            </div>
          </div>

          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <Image src={star} alt="star" className="mb-1" />
            <h2 className="text-gray-900 title-font mb-1 tracking-wider text-base flex gap-2 font-semibold">
              James L.
              <Image src={right} alt="right" />
            </h2>
            <div className="h-full text-center">
              <p className="leading-relaxed text-justify">
                "As someone who's always on the lookout for unique fashion
                pieces, I'm thrilled to have stumbled upon Shop.co. The
                selection of clothes is not only diverse but also on-point with
                the latest trends.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
