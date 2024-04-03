import Image from "next/image";
import image1 from "@/assets/sports.png";
import image2 from "@/assets/sports2.png";
import image3 from "@/assets/sports3.png";
import image4 from "@/assets/sports4.png";
import image5 from "@/assets/sports ad.png";
const Sports = () => {
  return (
    <div className="dark:text-[#FFFFFF]">
      <div className="flex flex-wrap  justify-center mt-10 gap-3">
        <div className="border dark:border-none dark:bg-[#3B3E47]  p-3 shadow-xl h-[500px] w-[238px]">
          <Image
            className=""
            src={image1}
            height={385}
            width={218}
            alt="sports_img"
          />
          <h3 className="text-[17px] text-[#000000] mt-2 dark:text-[#FFFFFF] font-semibold">
            Sacramento River Cats
          </h3>
          <div className="flex mb-2 gap-8 dark:bg-[#292B32] py-1 pl-2 my-2 ">
            <div>
              <h4 className="text-[12px] text-[#525965] dark:text-[#DFDFDF]">
                Total Events
              </h4>
              <p className="text-[#000000] text-[15px] dark:text-[#FFFFFF] font-semibold">
                48 Events
              </p>
            </div>
            <div>
              <h4 className="text-[12px] text-[#525965] dark:text-[#DFDFDF]">
                Sport
              </h4>
              <p className="text-[#000000]  text-[15px] dark:text-[#FFFFFF] font-semibold">
                Baseball
              </p>
            </div>
          </div>
        </div>
        <div className="border dark:border-none dark:bg-[#3B3E47] p-3 shadow-xl h-[500px] w-[238px]">
          <Image src={image2} height={385} width={218} alt="sports_img" />
          <h3 className="text-[17px] px-2 text-[#000000] mt-2 dark:text-[#FFFFFF] font-semibold">
            Sacramento River Cats
          </h3>
          <div className="flex mb-2 gap-8 dark:bg-[#292B32] py-1 pl-2 my-2 ">
            <div>
              <h4 className="text-[12px] text-[#525965] dark:text-[#DFDFDF]">
                Total Events
              </h4>
              <p className="text-[#000000] text-[15px] dark:text-[#FFFFFF] font-semibold">
                48 Events
              </p>
            </div>
            <div>
              <h4 className="text-[12px] text-[#525965] dark:text-[#DFDFDF]">
                Sport
              </h4>
              <p className="text-[#000000] text-[15px] dark:text-[#FFFFFF] font-semibold">
                Baseball
              </p>
            </div>
          </div>
        </div>
        <div className="border dark:border-none dark:bg-[#3B3E47] p-3 shadow-xl h-[500px] w-[238px]">
          <Image src={image3} height={385} width={218} alt="sports_img" />
          <h3 className="text-[17px] px-2 text-[#000000] mt-2 dark:text-[#FFFFFF] font-semibold">
            Sacramento River Cats
          </h3>
          <div className="flex mb-2 gap-8 dark:bg-[#292B32] py-1 pl-2 my-2 ">
            <div>
              <h4 className="text-[12px] text-[#525965] dark:text-[#DFDFDF]">
                Total Events
              </h4>
              <p className="text-[#000000] text-[15px] dark:text-[#FFFFFF] font-semibold">
                48 Events
              </p>
            </div>
            <div>
              <h4 className="text-[12px] text-[#525965] dark:text-[#DFDFDF]">
                Sport
              </h4>
              <p className="text-[#000000] text-[15px] dark:text-[#FFFFFF] font-semibold">
                Baseball
              </p>
            </div>
          </div>
        </div>
        <div className="border dark:border-none dark:bg-[#3B3E47] p-3 shadow-xl h-[500px] w-[238px]">
          <Image src={image4} height={385} width={218} alt="sports_img" />
          <h3 className="text-[17px] px-2 text-[#000000] mt-2 dark:text-[#FFFFFF] font-semibold">
            Sacramento River Cats
          </h3>
          <div className="flex mb-2 gap-8 dark:bg-[#292B32] py-1 pl-2 my-2 ">
            <div>
              <h4 className="text-[12px] text-[#525965] dark:text-[#DFDFDF]">
                Total Events
              </h4>
              <p className="text-[#000000] text-[15px] dark:text-[#FFFFFF] font-semibold">
                48 Events
              </p>
            </div>
            <div>
              <h4 className="text-[12px] text-[#525965] dark:text-[#DFDFDF]">
                Sport
              </h4>
              <p className="text-[#000000] text-[15px] dark:text-[#FFFFFF] font-semibold">
                Baseball
              </p>
            </div>
          </div>
        </div>
        <div className="border dark:border-none dark:bg-[#3B3E47]  p-3 h-[500px] w-[238px] shadow-xl ">
          <div className="relative">
            <Image
              className="relative"
              src={image5}
              height={385}
              width={218}
              alt="sports_img"
            />
            <div className="h-[25px] text-center z-10  w-[48px] px-[15px] py-[2px] text-[12.8px] font-bold  top-0 right-0 absolute text-[#ffffff] bg-[#000000]">
              Ad
            </div>
          </div>
          <h3 className="text-[20px]  text-[#222D3A] mt-2 dark:text-[#FFFFFF] font-semibold">
            Advertisement title
          </h3>
          <p className="text-[13px] h-[188px] w=[171px] text-[#525965] dark:text-[#DFDFDF] p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="my-12 text-center">
        <button className="bg-[#2C9CF0] text-[15px] dark:text-[#FFFFFF] btn px-[30px] py-[10px] text-[#FFFFFF]">
          See More
        </button>
      </div>
    </div>
  );
};

export default Sports;
