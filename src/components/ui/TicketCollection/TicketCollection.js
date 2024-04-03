import Image from "next/image";
import image1 from "@/assets/ticket1.png";
import image2 from "@/assets/ticket2.png";
import image3 from "@/assets/ticket3.png";

const TicketCollection = () => {
  return (
    <div className="text-center dark:bg-gradient-to-b from-[#18282A] to-[#221A2C]  dark:from-[#18282A] dark:to-[#221A2C] p-6 mt-20 mb-12">
      <h1 className="text-[50px] dark:text-[#FFFFFF] text-center text-[#000000] font-bold ">
        Collection Spotlight
      </h1>
      <p className="text-[14px] dark:text-[#FFFFFF]  text-[#000000]">
        Discover extraordinary moments with our Spotlight Collection
        metatickets—exclusive access to premium events for an unforgettable{" "}
        <br />
        experience. Grab yours today!
      </p>
      <div className="flex justify-around items-center p-4">
        <button className="flex h-[50px] items-center justify-center w-[36px] border p-2 border-[#2C9CF0]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            fill="#2C9CF0"
          >
            <path d="M380.6 81.7c7.9 15.8 1.5 35-14.3 42.9L103.6 256 366.3 387.4c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3l-320-160C6.8 279.2 0 268.1 0 256s6.8-23.2 17.7-28.6l320-160c15.8-7.9 35-1.5 42.9 14.3z" />
          </svg>
        </button>
        <div className="flex flex-wrap justify-center mt-10 gap-10">
          <div className="border dark:border-none dark:bg-[#3B3E47] p-3 shadow-xl h-[600px] w-[257px]">
            <Image
              className=""
              src={image1}
              height={401}
              width={226}
              alt="ticket_img"
            />
            <h3 className="text-[17px] dark:text-[#FFFFFF] text-[#000000] mt-2 font-semibold">
              Las Vegas Aviators
            </h3>
            <h4 className="text-[14px] text-[#000000] mt-2 dark:text-[#FFFFFF] ">
              Oct 15 | Sun | 4:30 PM
            </h4>
            <p className="text-[14px] text-[#525965] dark:text-[#DFDFDF] py-2">
              Las Vegas Ballpark, Las Vegas, Nevada
            </p>
            <button className="bg-[#000000] text-[13px] text-[#FFFFFF] h-[36px] w-[213px]  my-2">
              Take Flight Collection
            </button>
          </div>
          <div className="border dark:border-none dark:bg-[#3B3E47] p-3 shadow-xl h-[600px] w-[257px]">
            <Image
              className=""
              src={image2}
              height={401}
              width={226}
              alt="ticket_img"
            />
            <h3 className="text-[17px] dark:text-[#FFFFFF] text-[#000000] mt-2 font-semibold">
              Sacramento River Cats
            </h3>
            <h4 className="text-[14px] text-[#000000] dark:text-[#FFFFFF] mt-2 ">
              Oct 15 | Sun | 4:30 PM
            </h4>
            <p className="text-[14px] text-[#525965] dark:text-[#DFDFDF] py-2">
              Sutter Health Park, Sacramento, California
            </p>
            <button className="bg-[#000000] text-[13px] text-[#FFFFFF] h-[36px] w-[213px]  my-2">
              Orange Collection
            </button>
          </div>
          <div className="border dark:border-none dark:bg-[#3B3E47] p-3 shadow-xl h-[600px] w-[257px]">
            <Image
              className=""
              src={image3}
              height={401}
              width={226}
              alt="ticket_img"
            />
            <h3 className="text-[17px] dark:text-[#FFFFFF] text-[#000000] mt-2 font-semibold">
              Las Vegas Aviators
            </h3>
            <h4 className="text-[14px] text-[#000000] dark:text-[#FFFFFF] mt-2 ">
              Oct 15 | Sun | 4:30 PM
            </h4>
            <p className="text-[14px] text-[#525965] dark:text-[#DFDFDF] py-2">
              Las Vegas Ballpark, Las Vegas, Nevada
            </p>
            <button className="bg-[#000000] text-[13px] text-[#FFFFFF] h-[36px] w-[213px]  my-2">
              Take Flight Collection
            </button>
          </div>
        </div>
        <button className="h-[50px] w-[36px] border p-2 border-[#2C9CF0]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            fill="#2C9CF0"
          >
            <path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TicketCollection;
