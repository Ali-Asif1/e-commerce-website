import React from "react";
import Image from "next/image";
import right from "../../public/images/testright.png";
import star from "../../public/images/teststar.png";
import arrow from "../../public/images/arrow.png";

export const Testomonial = () => {
  return (
    <section className="testomonials">
      <div className="px-4 sm:px-8 md:px-12 lg:px-16 py-16 ">
        <div className="flex justify-between mb-16">
          <h1 className="font-[900] text-3xl md:text-4xl lg:text-5xl">
            OUR HAPPY COSTUMERS
          </h1>
          <Image src={arrow} alt="arrow"/>
        </div>
        <div className="">
          <div className="flex justify-around gap-12">
            <div className="w-full sm:w-[336px] space-y-2 border-2 border-gray-200 p-4">
              <Image src={star} alt="star" className="" />
              <h2 className="tracking-wider text-xl flex gap-2 font-bold">
                Sara M.
                <Image src={right} alt="right" />
              </h2>
              <div className="">
                <p className="text-base">
                  I am blown away by the quality and style of the clothes I
                  received from Shop.co. From casual wear to elegant dresses,
                  every piece I have bought has exceeded my expectations.
                </p>
              </div>
            </div>

            <div className="w-[336px] hidden sm:block space-y-2 border-2 border-gray-200 p-4">
              <Image src={star} alt="star" className="mb-1" />
              <h2 className="tracking-wider text-xl flex gap-2 font-bold">
                Alex K.
                <Image src={right} alt="right" />
              </h2>
              <div className="">
                <p className="text-base">
                  Finding clothes that align with my personal style used to be a
                  challenge until I discovered Shop.co. The range of options
                  they offer is truly remarkable, catering to a variety of
                  tastes and occasions.
                </p>
              </div>
            </div>

            <div className="w-[336px] hidden lg:block space-y-2 border-2 border-gray-200 p-4">
              <Image src={star} alt="star" className="mb-1" />
              <h2 className="tracking-wider text-xl flex gap-2 font-bold">
                James L.
                <Image src={right} alt="right" />
              </h2>
              <div className="">
                <p className="text-base">
                  As someone who is always on the lookout for unique fashion
                  pieces, I am thrilled to have stumbled upon Shop.co. The
                  selection of clothes is not only diverse but also on-point
                  with the latest trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
