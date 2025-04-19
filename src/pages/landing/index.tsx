import Nav from "../../components/Nav";
import logo from "../../assets/hero.jpg";
import pfp from "../../assets/rabbit.jpg";
import copy from "../../assets/copy.svg";
import { useRef, useEffect } from "react";
import Slider from "../../components/Slider";

const Landing = () => {
  const slidingTextRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (slidingTextRef.current) {
      const textWidth = slidingTextRef.current.scrollWidth;
      slidingTextRef.current.style.width = `${textWidth}px`;
    }
  }, []);

  return (
    <div className="relative bg-[#E6E5E6] overflow-y-auto">
      <div className="hero pt-[35px]">
        <div className="px-[30px] lg:px-[144px]">
          <Nav />
        </div>
        <div className="pt-[30%] lg:pt-[20%] flex justify-center items-center pb-[180px]">
          {/* <img src={workie} alt="" className="" /> */}
          <h1 className="naughty text-white text-[40px] lg:text-[135px] font-[900]">
            EasterRewards
          </h1>
        </div>

        {/* <div className="bg-[#E6E5E6] border-black border-[2px] w-full py-[11px] lg:py-[38px] px-[40px] lg:px-[180px] flex justify-between items-center fixed bottom-0 z-[9999]">
          <div className="flex justify-start items-center gap-2">
            <img
              src={logo}
              alt=""
              className="w-[18px] lg:w-10 h-[18px] lg:h-10"
            />
            <h1 className="naughty text-black text-[18px] lg:text-[35px] font-[900]">
              Workie
            </h1>
          </div>

          <button className="rounded-[114px] bg-black text-white h-[27px] lg:h-[55px] px-[18px] text-[12px] lg:text-[16px] lg:px-[30px] whitespace-nowrap">
            Buy Now!
          </button>

          <div className="flex justify-center items-center gap-[10px] lg:gap-[18px]">
            <img
              src={img1}
              alt=""
              className="h-[22px] lg:h-[48px] w-[22px] lg:w-[48px]"
            />
            <img
              src={img2}
              alt=""
              className="h-[22px] lg:h-[48px] w-[22px] lg:w-[48px]"
            />
            <img
              src={img3}
              alt=""
              className="h-[22px] lg:h-[48px] w-[22px] lg:w-[48px]"
            />
          </div>
        </div> */}
      </div>{" "}
      <div className="bg-[#E6E5E6] ">
        <div id="about" className="relative  overflow-hidden">
          <div className="relative z-[10px]">
            <div className="pt-[50px] lg:pt-[160px] flex justify-center -pb-[40px] relative z-[999]">
              <div className="bg-white -mx-10 flex justify-center p-4 rounded shadow-lg sliding-text-box w-[110%] transform -rotate-5 origin-center border-[#464646] border-[3px] relative z-[999]">
                <span className="sliding-text py-0 font-bold text-[#0D3157] text-[14px] lg:text-[50px]">
                  EasterEgg EasterEgg EasterEgg EasterEgg EasterEgg EasterEgg
                  EasterEgg EasterEgg EasterEgg EasterEgg EasterEgg EasterEgg
                  EasterEgg
                </span>
              </div>
            </div>
          </div>
          <div className="pb-[80px] lg:pb-[120px] flex-col lg:flex-row flex justify-between items-center lg:items-start lg:px-[100px] relative z-0">
            <div className="w-full lg:w-1/2 -mt-0 px-[30px]">
              <img
                src={pfp}
                alt=""
                className="relative z-0 rounded-[10px] lg:w-full"
              />
            </div>
            <div className="flex justify-between flex-col items-center lg:items-start lg:w-1/2 mt-10 min-[1724px]:mt-14 gap-[30px] ">
              <div className="border-[3px] lg:border-[6px] border-[#0D3157] rounded-[10px] lg:rounded-[28px] bg-white py-2 lg:py-5 px-10 transform rotate-9 lg:rotate-4 origin-center">
                <div className="transform lg:-rotate-6 origin-center">
                  <p className="text-[18px] lg:text-[42px] min-[1724px]:text-[54px] font-[700] text-[#0D3157] text-center transform -rotate-4 lg:rotate-0 origin-center">
                    Hello my name is <br />{" "}
                    <span className="text-[44px] lg:text-[95px] min-[1724px]:text-[121px] naughty lg:leading-[100px]">
                      EasterEgg
                    </span>
                  </p>
                </div>
              </div>
              <div className="border-[3px] mt-2 lg:mt-0 lg:border-[6px] border-[#0D3157] rounded-[10px] lg:rounded-[28px] bg-white py-[30px] px-[20px] transform rotate-2 origin-center w-[85%] min-[1724px]:w-[90%]">
                <div className="transform -rotate-7 origin-center">
                  <p className="text-[12px] lg:text-[20px] min-[1724px]:text-[25px] text-[#0D3157] font-[700] text-center">
                    <span className="font-[800]">EasterRewards ($EasterEgg)</span> is the ultimate holiday-themed
                    memecoin that gives back! Every transaction comes with a 10%
                    tax—automatically redistributed to holders as sweet rewards.
                    The longer you hold, the more you earn. It&apos;s not just a
                    coin… it&apos;s an Easter hunt for passive income!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[white] pb-[80px] lg:pb-0">
          <h1 className="text-center font-[900] naughty text-[#0D3157] min-[1724px]:text-[194px] text-[58px] pt-[60px] lg:pt-0 lg:text-[170px]">
            Tokenomics
          </h1>

          <div className="flex justify-center items-center w-full">
            <div className="pt-[450px] lg:pt-[190px] pb-[300px] relative w-full">
              <div className="flex justify-center items-center">
                <img
                  src={logo}
                  alt=""
                  className="w-[250px] lg:w-[520px] rounded-full"
                />
              </div>

              <div className="bg-white border-[#0D3157] border-[2px] rounded-[10px] absolute shadow-md pl-[5px] mx-auto pr-[3px] pb-4 transform top-[60px] lg:top-[30px] -rotate-5 origin-center comics text-center font-[700] pt-[10px] flex flex-col items-center left-[15px] lg:left-auto lg:right-[520px] lg:w-fit min-[1724px]:right-[600px]">
                <h1 className="text-[14px] lg:text-[22px] min-[1724px]:text-[26px] font-[700] text-[#FF0A0A]">
                  TOTAL SUPPLY
                </h1>
                <div className="flex justify-start items-start flex-col lg:pl-4">
                  <p className="text-left text-[32px] text-[#0D3157] lg:text-[54px] min-[1724px]:text-[63px] font-[900] min-[1724px]:leading-[47px] naughty2 lg:px-4">
                    1,000,000,000{" "}
                  </p>
                </div>
              </div>

              <div className="bg-white border-[#0D3157] border-[2px] rounded-[10px] absolute shadow-md pl-[5px] mx-auto pr-[3px] pb-4 transform bottom-[20px] lg:bottom-[150px] min-[1724px]:bottom-[100px] -rotate-5 origin-center comics text-center font-[700] pt-[10px] flex flex-col items-center left-[20px] lg:left-[520px] min-[1724px]:left-[640px]">
                <h1 className="text-[14px] lg:text-[22px] min-[1724px]:text-[26px] font-[700] text-[#FF0A0A]">
                  Contract Address{" "}
                </h1>
                <div className="flex justify-start items-start flex-col lg:pl-4">
                  <p className="text-[12px] lg:text-[20px] text-[#0D3157] min-[1724px]:text-[25px] font-[900] min-[1724px]:leading-[47px] naughty2 lg:px-4 text-center ">
                    000000000000000000000000000000 <br />{" "}
                    <span className="flex justify-center items-center gap-1">
                      000000000
                      <img
                        src={copy}
                        alt=""
                        className="h-[15px] cursor-pointer"
                        onClick={() => {
                          navigator.clipboard.writeText("");
                        }}
                      />
                    </span>
                  </p>
                </div>
              </div>

              <div className="bg-white border-[#0D3157] border-[2px] rounded-[10px] absolute shadow-md pl-[5px] mx-auto pr-[3px] pb-4 transform top-[220px] lg:top-[400px] min-[1724px]:top-[400px] -rotate-3 origin-center text-center font-[700] pt-[10px] flex flex-col items-center right-[50px] lg:right-auto lg:left-[130px] min-[1724px]:left-[300px] w-[250px] lg:w-[350px]">
                <div className="text-center pt-2 lg:pt-4">
                  <h1 className="text-[14px] lg:text-[16px] min-[1724px]:text-[20px] font-[700] text-[#FF0A0A]">
                    tax fees{" "}
                  </h1>
                  <div className="flex flex-col ">
                    <p className="text-[34px] lg:text-[42px] text-[#0D3157] min-[1724px]:text-[50px] font-[900] min- naughty2 lg:px-4 text-center ">
                      10%
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-[#0D3157] border-[2px] rounded-[10px] absolute shadow-md pl-[5px] mx-auto pr-[3px] pb-4 transform bottom-[150px] lg:bottom-0 lg:top-[400px] min-[1724px]:top-[400px] rotate-8 origin-center text-center font-[700] pt-[10px] flex flex-col items-center left-[60px] lg:left-auto lg:right-[120px] min-[1724px]:right-[250px] lg:w-fit h-fit">
                <h1 className="text-[14px] lg:text-[16px] min-[1724px]:text-[20px] font-[700] text-[#FF0A0A]">
                  OWNERSHIP{" "}
                </h1>
                <div className="flex justify-start items-start text-[#0D3157] flex-col lg:pl-4">
                  <p className="text-[34px] lg:text-[42px] min-[1724px]:text-[50px] font-[900] min- naughty2 lg:px-4 text-center ">
                    RENOUNCED{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Slider />
      </div>
    </div>
  );
};

export default Landing;
