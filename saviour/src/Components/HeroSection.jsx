import { Navbar } from "../Routes/Navbar";
import logo from '../assets/savior-logo-1.png';
import './HeroSection.css';
import dropdown from '../assets/Down-arrow-icon.png';

const HeroSection = () => {
  return (
    <div className="bg-[url('./assets/Hero-image-1.png')] bg-cover h-[588px] lg:h-[700px] xl:h-[800px]">
      <div className="flex flex-col lg:flex-row justify-between items-center p-4 lg:p-8">
        <div className="flex items-center mt-4 lg:mt-[27px]">
          <div className="lg:hidden">
            <Navbar />
          </div>
          <img src={logo} className="w-[80px] lg:w-[106px] ml-2 lg:ml-0" />
          <h1 className="text-[24px] lg:text-[32px] text-white font-saviour ml-2 lg:ml-4">Saviour</h1>
          {/* Add saviour text */}
        </div>
        <div className="hidden lg:flex flex-col lg:flex-row items-center bg-[#191818] p-[8px] lg:p-[12px] font-saviour text-white rounded-3xl mt-4 lg:mt-[46px]">
          <Navbar />
          <img src={dropdown} className="h-[7px] w-[13px]" />
        </div>
        <div className="text-center lg:text-right mt-6 lg:mt-0"> {/* Center in mobile, right in larger screens */}
          <button className="hidden lg:block w-[100px] lg:w-[127px] h-[38px] rounded-3xl bg-gradient-to-r from-[#ED0137] to-[#F05733] text-white text-[10px] lg:text-[12px] p-[8px] lg:p-[10px 16px] font-connectwallet font-semibold mt-4 lg:mt-[54px]">
            Connect Wallet
          </button>
        </div>
      </div>
      <div className="text-center font-herofont text-[30px] lg:text-[45px] text-white mt-16 lg:mt-[175px] px-4 lg:px-0">
        <h1>Where Blockchain Heroes Thrive, Rescuing<br className="hidden lg:block" /> Dreams, Elevating Fortunes.</h1>
      </div>
      {/* Add mobile version of Connect Wallet button */}
      <div className="text-right lg:hidden absolute top-24 right-4">
        <button className="w-[100px] h-[38px] rounded-3xl bg-gradient-to-r from-[#ED0137] to-[#F05733] text-white text-[10px] p-[8px 16px] font-connectwallet font-semibold">
          Connect Wallet
        </button>
      </div>
    </div>
  );
}

export { HeroSection };
