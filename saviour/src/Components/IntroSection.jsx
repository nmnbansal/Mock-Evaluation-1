import HeroSection2 from '../assets/Hero-image-2.png';
import dropdown from '../assets/Down-arrow-icon.png';

const IntroSection = () => {
  return (
    <div className='flex flex-col lg:flex-row bg-[#0A0A0A]'>
      {/* Left Section */}
      <div className='text-start mx-4 lg:mx-[163px] mt-6 lg:mt-[89px] lg:w-[40%]'>
        <h1 className='text-[24px] lg:text-[44px] font-herofont text-[#ED0137] lg:text-left'>Introduction</h1>
        {/* Conditionally render the image based on screen size */}
        <div className="lg:flex items-center">
          <img src={HeroSection2} className='h-auto lg:hidden mt-4' alt="Hero Image" />
          <p className='text-[16px] lg:text-[24px] text-white font-saviour mt-4'>
            We've all been in the mud once, and now we've decided to fight it out. <br />
            Pay tribute to those pioneers of WEB3 and the warriors who dedicated their love to the blockchain. Save the lucky ones alive, join us to save the future! <br />
            Our mission is to empower everyone to share wealth and succeed. <br />
            <span className='text-gray-400'>read more...</span>
          </p>
        </div>
        {/* Button visible on all screen sizes */}
        <button className="w-[178px] h-[54px] rounded-3xl bg-gradient-to-r from-[#ED0137] to-[#F05733] text-white text-[16px] lg:text-[20px] p-[27px 31px] font-saviour mt-[24px] flex justify-center items-center gap-2">
          Documents <img src={dropdown} className="h-[7px] w-[13px]" alt="Dropdown Icon" />
        </button>
      </div>
      {/* Conditionally render the image based on screen size */}
      <img src={HeroSection2} className='hidden lg:block h-[300px] lg:h-[795px] w-full mt-6 lg:mt-0' alt="Hero Image" />
    </div>
  )
}

export { IntroSection }
