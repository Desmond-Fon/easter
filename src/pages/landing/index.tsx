import Nav from "../../components/Nav";
import workie from "../../assets/Workie main.png";
import logo from "../../assets/LOGO.svg";
import img1 from "../../assets/Dexscreener.svg";
import img2 from "../../assets/Dextool.svg";
import pfp from "../../assets/rabbit.jpg";
import img3 from "../../assets/Dextool (1).svg";
import ellipse from "../../assets/ellipse.svg";
import mobEllipse from "../../assets/mobEllipse.svg";
import mobVec1 from "../../assets/mob1.svg";
import mobVec2 from "../../assets/mob2.svg";
import vector1 from "../../assets/Vector 2.png";
import vector2 from "../../assets/Vector 3.png";
import dollar1 from "../../assets/dollar1.png";
import dollar2 from "../../assets/dollar2.png";
import dollar3 from "../../assets/dollar3.png";
import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/slider3.png";
import slide3 from "../../assets/slide3.png";
import slide4 from "../../assets/slide4.png";
import buy from "../../assets/Buy.png";
import copy from "../../assets/copy.svg";
import footerImg from "../../assets/footerImg.svg";
import { motion } from "framer-motion";
import x from "../../assets/X.svg";
import telegram from "../../assets/TELEGRAM.svg";
import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";

const images = [slide1, slide2, slide3, slide4, slide1, slide2, slide3, slide4];

const Landing = () => {
  const slidingTextRef = useRef<HTMLSpanElement | null>(null);
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

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
                <span className="sliding-text py-0 font-bold text-[#464646] text-[14px] lg:text-[50px]">
                  Meet Workie, the official mascot of the workers on Base. Meet
                  Workie, the official mascot of the workers on Base.{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="pb-[80px] lg:pb-[120px] flex-col lg:flex-row flex justify-between items-center lg:items-start lg:px-[100px] relative z-0">
            <div className="w-full lg:w-1/2 -mt-0 px-[30px]">
              <img
                src={pfp}
                alt=""
                className="relative z-0 rounded-[10px] lg:w-full h-full"
              />
            </div>
            <div className="flex justify-between flex-col items-center lg:items-start lg:w-1/2 mt-10 min-[1724px]:mt-14 gap-[30px] ">
              <div className="border-[3px] lg:border-[6px] border-black rounded-[10px] lg:rounded-[28px] bg-white py-2 lg:py-5 px-10 transform rotate-9 lg:rotate-4 origin-center">
                <div className="transform lg:-rotate-6 origin-center">
                  <p className="text-[18px] lg:text-[42px] min-[1724px]:text-[54px] font-[700] text-center transform -rotate-4 lg:rotate-0 origin-center">
                    Hello my name is <br />{" "}
                    <span className="text-[44px] lg:text-[95px] min-[1724px]:text-[121px] naughty lg:leading-[100px]">
                      WORKIE
                    </span>
                  </p>
                </div>
              </div>
              <div className="border-[3px] mt-2 lg:mt-0 lg:border-[6px] border-black rounded-[10px] lg:rounded-[28px] bg-white py-[30px] px-[20px] transform rotate-2 origin-center w-[85%] min-[1724px]:w-[90%]">
                <div className="transform -rotate-7 origin-center">
                  <p className="text-[12px] lg:text-[20px] min-[1724px]:text-[25px] font-[700] text-center">
                    Workie is more than just a character, it's a social
                    movement, a state of mind. Being a Workie is nothing to be
                    ashamed of, it's actually quite the opposite. It's an
                    important stage in life, giving you a taste of the
                    thankless, underpaid work that will remind you that you have
                    to do whatever it takes to get by.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="roadmap" className="pb-[110px] overflow-hidden">
          <h1 className="text-center -mb-[80px] lg:mb-0 text-[65px] lg:text-[200px] naughty lg:leading-[180px]">
            ROADMAP
          </h1>

          <div className="pt-[150px] lg:pt-[95px] lg:flex justify-center items-center relative">
            <div className="hidden lg:block lg:px-[165px]">
              <img src={ellipse} alt="" />
            </div>
            <div className="lg:hidden">
              <img src={mobEllipse} alt="" />
            </div>
            <div className="bg-white border-black border-[2px] lg:border-[4px] rounded-[8px] lg:rounded-[20px] absolute shadow-md pl-[5px] mx-auto pr-[3px] pb-4 transform top-[430px] right-[20px] lg:right-auto lg:top-[200px] rotate-5 origin-center w-[210px] lg:w-[430px] min-[1724px]:w-[500px] comics text-center font-[700] pt-[10px] flex flex-col items-center ">
              <h1 className="text-[26px] lg:text-[58px] min-[1724px]:text-[68px] font-[900] naughty">
                STEP 2
              </h1>
              <div className="flex justify-start items-start flex-col pl-4">
                <p className="text-left text-[13px] lg:text-[28px] min-[1724px]:text-[35px] font-[700] min-[1724px]:leading-[47px]">
                  - GET TRADING
                </p>
                <p className="text-left text-[13px] lg:text-[28px] min-[1724px]:text-[35px] font-[700] min-[1724px]:leading-[47px]">
                  - MORE DEX LISTING
                </p>
                <p className="text-left text-[13px] lg:text-[28px] min-[1724px]:text-[35px] font-[700] min-[1724px]:leading-[47px]">
                  - MEME FACTORY
                </p>
                <p className="text-left text-[13px] lg:text-[28px] min-[1724px]:text-[35px] font-[700] min-[1724px]:leading-[47px]">
                  - ORGANIC GROWTH
                </p>
                <p className="text-left text-[13px] lg:text-[28px] min-[1724px]:text-[35px] font-[700] min-[1724px]:leading-[47px]">
                  - $1M MARKETCAP
                </p>
              </div>
            </div>
            <div className="bg-white border-black border-[2px] lg:border-[4px] rounded-[8px] lg:rounded-[20px] absolute shadow-md pl-[5px] mx-auto pr-[3px] pb-4 transform left-[20px] lg:left-auto -bottom-[40px] lg:bottom-[100px] -rotate-5 origin-center w-[210px] lg:w-[430px] min-[1724px]:w-[500px] comics text-center font-[700] pt-[10px] flex flex-col items-center z-[99]">
              <h1 className="text-[26px] lg:text-[58px] min-[1724px]:text-[68px] font-[900] naughty">
                STEP 4
              </h1>
              <div className="flex justify-start items-start flex-col pl-8">
                <p className="text-left text-[13px] lg:text-[28px] min-[1724px]:text-[35px] font-[700] min-[1724px]:leading-[47px]">
                  - Workie becomes a top Base meme.
                </p>
                <p className="text-left text-[13px] lg:text-[28px] min-[1724px]:text-[35px] font-[700] min-[1724px]:leading-[47px]">
                  - Top CEX Listings{" "}
                </p>
                <p className="text-left text-[13px] lg:text-[28px] min-[1724px]:text-[35px] font-[700] min-[1724px]:leading-[47px]">
                  - Everybody quits McDonald's{" "}
                </p>
                <p className="text-left text-[13px] lg:text-[28px] min-[1724px]:text-[35px] font-[700] min-[1724px]:leading-[47px]">
                  - ORGANIC GROWTH
                </p>
                <p className="text-left text-[13px] lg:text-[28px] min-[1724px]:text-[35px] font-[700] min-[1724px]:leading-[47px]">
                  - $1B Marketcap{" "}
                </p>
              </div>
            </div>

            <motion.div className="bg-red-500 z-[999]">
              <motion.div
                ref={ref1}
                initial={{ opacity: 0, x: -100 }}
                animate={{
                  opacity: inView1 ? 1 : 0,
                  x: inView1 ? 0 : -100,
                }}
                transition={{ duration: 0.5 }}
                className="absolute left-0 top-[500px]"
              >
                <img
                  src={vector1}
                  alt=""
                  className="h-[720px] hidden lg:block min-[1724px]:h-[840px]"
                />
              </motion.div>
              <motion.div
                ref={ref1}
                initial={{ opacity: 0, x: -100 }}
                animate={{
                  opacity: inView1 ? 1 : 0,
                  x: inView1 ? 0 : -100,
                }}
                transition={{ duration: 0.5 }}
                className="absolute left-0 top-[130px]"
              >
                <img src={mobVec1} alt="" className="h-[420px] lg:hidden" />
              </motion.div>
              <motion.div
                ref={ref1}
                initial={{ opacity: 0, x: -100, rotate: -5 }}
                animate={{
                  opacity: inView1 ? 1 : 0,
                  x: inView1 ? 0 : -100,
                  rotate: isDesktop ? -5 : 6, // Different rotate for desktop and mobile
                }}
                transition={{ duration: 0.5 }}
                className="bg-white border-black border-[2px] lg:border-[4px] rounded-[8px] lg:rounded-[20px] absolute shadow-md pl-[5px] mx-auto pr-[3px] pb-4 transform left-[105px] lg:left-[10px] top-[135px] lg:top-[457px] min-[1724px]:top-[480px] rotate-8 lg:-rotate-5 origin-center w-[210px] lg:w-[430px] min-[1724px]:w-[500px] comics text-center font-[700] pt-[10px] flex flex-col items-center "
              >
                <h1 className="text-[26px] lg:text-[58px] min-[1724px]:text-[68px] font-[900] naughty">
                  STEP 1
                </h1>
                <div className="flex justify-start items-start flex-col pl-8 capitalize">
                  <p className="text-left text-[13px] lg:text-[28px] min-[1724px]:text-[35px] font-[700] min-[1724px]:leading-[47px]">
                    - Project launch
                  </p>
                  <p className="text-left text-[13px] lg:text-[28px] min-[1724px]:text-[35px] font-[700] min-[1724px]:leading-[47px]">
                    - DEX listing{" "}
                  </p>
                  <p className="text-left text-[13px] lg:text-[28px] min-[1724px]:text-[35px] font-[700] min-[1724px]:leading-[47px]">
                    - First Tweets{" "}
                  </p>
                  <p className="text-left text-[13px] lg:text-[28px] min-[1724px]:text-[35px] font-[700] min-[1724px]:leading-[47px]">
                    - Creation of the workie community{" "}
                  </p>
                  <p className="text-left text-[13px] lg:text-[28px] min-[1724px]:text-[35px] font-[700] min-[1724px]:leading-[47px]">
                    - $100k Marketcap{" "}
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div className="">
              <motion.div
                ref={ref2}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: inView2 ? 1 : 0,
                  x: inView2 ? 0 : 100,
                }}
                transition={{ duration: 0.5 }}
                className="absolute right-0 top-[300px]"
              >
                <img
                  src={vector2}
                  alt=""
                  className="h-[830px] hidden lg:block min-[1724px]:h-[940px]"
                />
              </motion.div>
              <motion.div
                ref={ref2}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: inView2 ? 1 : 0,
                  x: inView2 ? 0 : 100,
                }}
                transition={{ duration: 0.5 }}
                className="absolute right-0 top-[620px]"
              >
                <img
                  src={mobVec2}
                  alt=""
                  className="h-[480px] lg:hidden min-[1724px]:h-[940px]"
                />
              </motion.div>
              <motion.div
                ref={ref2}
                initial={{ opacity: 0, x: 100, rotate: -8 }}
                animate={{
                  opacity: inView2 ? 1 : 0,
                  x: inView2 ? 0 : 100,
                  rotate: -8,
                }}
                transition={{ duration: 0.5 }}
                className="bg-white border-black border-[2px] lg:border-[4px] rounded-[8px] lg:rounded-[20px] absolute shadow-md pl-[5px] mx-auto pr-[3px] pb-4 right-[80px] top-[630px] lg:top-[320px] min-[1724px]:top-[320px] origin-center w-[210px] lg:w-[430px] min-[1724px]:w-[500px] comics text-center font-[700] pt-[10px] flex flex-col items-center "
              >
                <h1 className="text-[26px] lg:text-[58px] min-[1724px]:text-[68px] font-[900] naughty">
                  STEP 3
                </h1>
                <div className="flex justify-start items-start flex-col pl-8 capitalize">
                  <p className="text-left text-[13px] lg:text-[28px] min-[1724px]:text-[35px] font-[700] min-[1724px]:leading-[47px]">
                    - Project launch
                  </p>
                  <p className="text-left text-[13px] lg:text-[28px] min-[1724px]:text-[35px] font-[700] min-[1724px]:leading-[47px]">
                    - DEX listing
                  </p>
                  <p className="text-left text-[13px] lg:text-[28px] min-[1724px]:text-[35px] font-[700] min-[1724px]:leading-[47px]">
                    - First Tweets
                  </p>
                  <p className="text-left text-[13px] lg:text-[28px] min-[1724px]:text-[35px] font-[700] min-[1724px]:leading-[47px]">
                    - Creation of the workie community
                  </p>
                  <p className="text-left text-[13px] lg:text-[28px] min-[1724px]:text-[35px] font-[700] min-[1724px]:leading-[47px]">
                    - $100k Marketcap
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="border-[2px] h-[400px] lg:h-[1200px] min-[1724px]:h-[1300px] border-black overflow-hidden bg-white lg:rounded-t-[35px] flex justify-between pl-[10px] lg:pl-[112px] lg:pr-[90px] items-center mb-[56px] lg:mb-[170px] gap-2 relative">
          <img
            src={dollar1}
            alt=""
            className="absolute z-[998] bottom-0 w-[140px] lg:w-[530px]  min-[1724px]:w-[650px] right-[60px] lg:right-[300px]  min-[1724px]:right-[450px]"
          />
          <img
            src={dollar2}
            alt=""
            className="hidden lg:block absolute z-[998] bottom-40 right-0"
          />
          <img
            src={dollar3}
            alt=""
            className="hidden lg:block absolute z-[998] top-5 right-0"
          />
          <div className="w-[70%] lg:w-[62%] h-full flex flex-col gap-1 lg:gap-4 items-start pt-[50px] lg:pt-[250px] pb-[300px]">
            <div className="flex justify-start items-center gap-[10px] lg:gap-[30px]">
              <h1 className="font-[700  min-[1724px]:text-[100px] text-[27px] lg:text-[80px]">
                1
              </h1>
              <div>
                <h2 className="font-[700] min-[1724px]:text-[34px] text-[11px] lg:text-[28px]">
                  Set up a crypto wallet on the base network
                </h2>
                <p className="text-[#FF0000] font-[700] min-[1724px]:text-[26px] text-[9px] lg:text-[20px]">
                  You can use Coinbase Wallet or Metamask, these are the two we
                  recommend.
                </p>
              </div>
            </div>

            <div>
              <div className="lg:w-[20px] lg:h-[20px] w-[5px] h-[5px] rounded-full bg-[#868686]"></div>
            </div>
            <div className="flex justify-start items-center gap-[10px] lg:gap-[30px]">
              <h1 className="font-[700]  min-[1724px]:text-[100px] text-[27px] lg:text-[80px]">
                2
              </h1>
              <div>
                <h2 className="font-[700] min-[1724px]:text-[34px] text-[11px] lg:text-[28px]">
                  Deposit Ethereum (ETH) to Base{" "}
                </h2>
                <p className="text-[#FF0000] font-[700] min-[1724px]:text-[26px] text-[9px] lg:text-[20px]">
                  Visit bridge.base.org, connect your wallet, and select the
                  amount of ETH you want to bridge to Base. Ensureto keep enough
                  ETH for gas fees.
                </p>
              </div>
            </div>

            <div>
              <div className="lg:w-[20px] lg:h-[20px] w-[5px] h-[5px] rounded-full bg-[#868686]"></div>
            </div>
            <div className="flex justify-start items-center gap-[10px] lg:gap-[30px]">
              <h1 className="font-[700] min-[1724px]:text-[100px] text-[27px] lg:text-[80px]">
                3
              </h1>
              <div>
                <h2 className="font-[700] min-[1724px]:text-[34px] text-[11px] lg:text-[28px]">
                  Swap ETH for $WORKIE{" "}
                </h2>
                <p className="text-[#FF0000] font-[700] min-[1724px]:text-[26px] text-[9px] lg:text-[20px]">
                  Head over to Uniswap and paste the Workie contractAddress
                  listed on this website to swap your ETH.
                </p>
              </div>
            </div>

            <div>
              <div className="lg:w-[20px] lg:h-[20px] w-[5px] h-[5px] rounded-full bg-[#868686]"></div>
            </div>
            <div className="flex justify-start items-center gap-[10px] lg:gap-[30px]">
              <h1 className="font-[700]  min-[1724px]:text-[100px] text-[27px] lg:text-[80px]">
                4
              </h1>
              <div>
                <h2 className="font-[700] min-[1724px]:text-[34px] text-[11px] lg:text-[28px]">
                  Congrats, you're a workie{" "}
                </h2>
                <p className="text-[#FF0000] font-[700] min-[1724px]:text-[26px] text-[9px] lg:text-[20px]">
                  Now all you have to do is add the contract address to your
                  Wallet for your Workie tokens to show. <br /> Welcome aboard!{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="h-full w-[30%] lg:w-[38%]">
            <motion.div
              className="flex flex-col gap-2 lg:gap-5"
              animate={{ y: ["0%", "-100%"] }}
              transition={{
                duration: images.length * 5, // Adjust speed by changing the duration
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {images.concat(images).map((image, index) => (
                <motion.img src={image} key={index} />
              ))}
            </motion.div>{" "}
          </div>
        </div>

        <div className="bg-[white] pb-[80px] lg:pb-0">
          <h1 className="text-center font-[900] naughty text-[#1251FF] min-[1724px]:text-[194px] text-[58px] pt-[60px] lg:pt-0 lg:text-[170px]">
            Tokenomics
          </h1>

          <div className="flex justify-center items-center w-full">
            <div className="pt-[450px] lg:pt-[190px] pb-[300px] relative w-full">
              <div className="flex justify-center items-center">
                <img src={buy} alt="" className="w-[250px] lg:w-[520px]" />
              </div>

              <div className="bg-white border-black border-[2px] rounded-[10px] absolute shadow-md pl-[5px] mx-auto pr-[3px] pb-4 transform top-[60px] lg:top-[30px] -rotate-5 origin-center comics text-center font-[700] pt-[10px] flex flex-col items-center left-[15px] lg:left-auto lg:right-[520px] lg:w-fit min-[1724px]:right-[600px]">
                <h1 className="text-[14px] lg:text-[22px] min-[1724px]:text-[26px] font-[700] text-[#FF0A0A]">
                  TOTAL SUPPLY
                </h1>
                <div className="flex justify-start items-start flex-col lg:pl-4">
                  <p className="text-left text-[32px] lg:text-[54px] min-[1724px]:text-[63px] font-[900] min-[1724px]:leading-[47px] naughty2 lg:px-4">
                    1,000,000,000{" "}
                  </p>
                </div>
              </div>

              <div className="bg-white border-black border-[2px] rounded-[10px] absolute shadow-md pl-[5px] mx-auto pr-[3px] pb-4 transform bottom-[20px] lg:bottom-[150px] min-[1724px]:bottom-[100px] -rotate-5 origin-center comics text-center font-[700] pt-[10px] flex flex-col items-center left-[20px] lg:left-[520px] min-[1724px]:left-[640px]">
                <h1 className="text-[14px] lg:text-[22px] min-[1724px]:text-[26px] font-[700] text-[#FF0A0A]">
                  Contract{" "}
                </h1>
                <div className="flex justify-start items-start flex-col lg:pl-4">
                  <p className="text-[12px] lg:text-[20px] min-[1724px]:text-[25px] font-[900] min-[1724px]:leading-[47px] naughty2 lg:px-4 text-center ">
                    0x7480527815ccAE421400Da01E052b12 <br />{" "}
                    <span className="flex justify-center items-center gap-1">
                      0Cc4255E9
                      <img
                        src={copy}
                        alt=""
                        className="h-[15px] cursor-pointer"
                        onClick={() => {
                          navigator.clipboard.writeText(
                            "0x7480527815ccAE421400Da01E052b120Cc4255E9"
                          );
                        }}
                      />
                    </span>
                  </p>
                </div>
              </div>

              <div className="bg-white border-black border-[2px] rounded-[10px] absolute shadow-md pl-[5px] mx-auto pr-[3px] pb-4 transform top-[220px] lg:top-[400px] min-[1724px]:top-[400px] -rotate-3 origin-center text-center font-[700] pt-[10px] flex flex-col items-center right-[50px] lg:right-auto lg:left-[130px] min-[1724px]:left-[300px] w-[250px] lg:w-[350px]">
                <h1 className="text-[14px] lg:text-[16px] min-[1724px]:text-[20px] font-[700] text-[#FF0A0A]">
                  Liquidity pool{" "}
                </h1>
                <div className="flex justify-start items-start flex-col lg:pl-4">
                  <p className="text-[34px] lg:text-[42px] min-[1724px]:text-[50px] font-[900] min- naughty2 lg:px-4 text-center ">
                    BURNT
                  </p>
                </div>
                <div className="text-center pt-2 lg:pt-4">
                  <h1 className="text-[14px] lg:text-[16px] min-[1724px]:text-[20px] font-[700] text-[#FF0A0A]">
                    BUY/SELL TAXES{" "}
                  </h1>
                  <div className="flex flex-col ">
                    <p className="text-[34px] lg:text-[42px] min-[1724px]:text-[50px] font-[900] min- naughty2 lg:px-4 text-center ">
                      0/0
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-black border-[2px] rounded-[10px] absolute shadow-md pl-[5px] mx-auto pr-[3px] pb-4 transform bottom-[150px] lg:bottom-0 lg:top-[400px] min-[1724px]:top-[400px] rotate-8 origin-center text-center font-[700] pt-[10px] flex flex-col items-center left-[60px] lg:left-auto lg:right-[120px] min-[1724px]:right-[250px] lg:w-fit h-fit">
                <h1 className="text-[14px] lg:text-[16px] min-[1724px]:text-[20px] font-[700] text-[#FF0A0A]">
                  OWNERSHIP{" "}
                </h1>
                <div className="flex justify-start items-start flex-col lg:pl-4">
                  <p className="text-[34px] lg:text-[42px] min-[1724px]:text-[50px] font-[900] min- naughty2 lg:px-4 text-center ">
                    RENOUNCED{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[90px] lg:mt-[170px] relative bg-white mb-[20px] lg:mb-[100px]">
          <div className="absolute w-full">
            <div className="flex justify-center w-full sliding-text-box  transform relative z-[9]">
              <span
                className="sliding-text font-bold text-[77px] lg:text-[300px] min-[1724px]:text-[345px]"
                ref={slidingTextRef}
              >
                JOIN US JOIN US JOIN US JOIN US
              </span>
            </div>

            <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between items-center px-[30px] lg:px-[110px] pb-[400px]">
              <p className="w-full lg:w-[40%] text-center lga;text-left text-[11px] lg:text-[22px] min-[1724px]:text-[27px]">
                The Workie community gathers around a common suffering: that of
                being exploited by your employer for a handful of dollars.
                Together, we will take this project to the top of the Base
                Chain. <br /> BUY NOW.
              </p>

              <div className="flex flex-col items-center gap-5">
                <div className="flex justify-center items-center gap-5 h-full w-full">
                  <img
                    src={x}
                    alt=""
                    className="h-[33px] w-[33px] lg:h-[75px] lg:w-[75px] object-cover"
                  />
                  <img
                    src={telegram}
                    alt=""
                    className="h-[33px] w-[33px] lg:h-[75px] object-cover lg:w-[75px]"
                  />
                </div>
                <button className="rounded-[114px] min-[1724px]:text-[30px] text-[14px] lg:text-[24px] bg-black text-white h-[40px] lg:h-[80px] px-[20px] lg:px-[40px] whitespace-nowrap">
                  Buy Now!
                </button>
              </div>
            </div>
          </div>
          <div className="lg:relative pt-[350px] lg:pt-0 z-[999] bottom-0 w-full">
            <img src={footerImg} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
