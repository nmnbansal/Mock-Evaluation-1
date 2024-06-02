import "./IDOEvent.css";
import timer from '../assets/Timer.png'
import copy from '../assets/copy-icon.png'
const IDOEvent = () => {
  return (
    <div className="idoevent">
      <h1 className="text-[44px] font-herofont text-[#ED0137] text-center p-[64px]">
        PARTICIPATE IN OUR IDO EVENT!
      </h1>
      <div className="flex">
        <div>
          <p className="text-center text-[#E6E3E3] font-saviour ml-[80px]">
            During our IDO event, you will gain early access to our <br />{" "}
            revolutionary ecosystem, designed to empower <br /> everyone to
            share wealth and achieve success.
          </p>
          <div>
            <div className="w-[244px] h-[70px] bg-[#ED0137] flex justify-center items-center rounded-[20px] mb-[-35px]     token-details mt-[24px] ml-[229px]">
              <p className="text-[18px] font-herofont text-white text-center">
                TOKEN INFO
              </p>
            </div>
            <div className=" border-[3px] border-red-800 rounded-2xl w-[412px] h-[382px] ml-[151px] p-5 border-box">
              <table className="token-table mt-[42px] ml-[25px]">
                <tbody>
                  <tr>
                    <td className="text-white font-saviour text-[20px]">
                      Total Token <br /> Supply
                    </td>
                    <td className="text-[#DF180A] font-saviour text-[20px]">
                      20%
                    </td>
                  </tr>
                  <tr>
                    <td className="text-white font-saviour text-[20px]">
                      Soft Cap
                    </td>
                    <td className="text-[#DF180A] font-saviour text-[20px]">
                      200BNB
                    </td>
                  </tr>
                  <tr>
                    <td className="text-white font-saviour text-[20px]">
                      Initial exchange <br /> rate
                    </td>
                    <td className="text-[#DF180A] font-saviour text-[20px]">
                      1BNB
                    </td>
                  </tr>
                  <tr>
                    <td className="text-white font-saviour text-[20px]">
                      1st Generation
                    </td>
                    <td className="text-[#DF180A] font-saviour text-[20px]">
                      5%
                    </td>
                  </tr>
                  <tr>
                    <td className="text-white font-saviour text-[20px]">
                      2nd Generation
                    </td>
                    <td className="text-[#DF180A] font-saviour text-[20px]">
                      2%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <button className="w-[138px] h-[39px] rounded-2xl bg-gradient-to-r from-[#ED0137] to-[#F05733] text-white text-[14px] p-[12px 15px] font-saviour mt-[35px] ml-[286px]">
            Connect Wallet
          </button>
          <p className="text-[28px] font-herofont text-[#ED0137] text-center mt-[40px] ml-[72px]">
            Become an affiliate & Earn <br /> 7% as Commission!
          </p>
          <div className="border-2 border-[#C4110C] h-[48px] w-[467px] rounded-3xl ml-[111px] mt-[40px] flex items-center bg-[#040815] relative">
            <input type="text" className="h-[44px] flex-grow bg-transparent rounded-3xl pl-4 pr-[150px] text-white placeholder-gray-400 font-saviour" placeholder="Generate a unique referral link"/>
            <button className="absolute right-0.5 w-[108px] h-[39px] rounded-3xl bg-[#ED0137] text-white text-[15px] font-saviour">Generate</button>
            <img src={copy} className="absolute right-[-35px] h-[34px] w-[34px] cursor-pointer" />
          </div>

        </div>

        <div>
          <div>
            <img src={timer} className="ml-[281px] mb-[-85px] token-details"/>
            <div className=" border-[3px] border-red-800 rounded-2xl w-[708px] h-[738px] ml-[90px] p-5 border-box mt-[44px]">
              <h1 className="text-[48px] font-herofont text-[#ED0137] text-center p-[64px]">
                PRESALE 1
              </h1>
              <p className="text-[32px] font-saviour text-[#F5F1F1] text-center mt-[-52px]">
                1 Saviour = 0.657 USDT
              </p>
              <p className="text-[24px] font-saviour text-[#F0F0F0] text-center mt-[20px]">
                Next Stage Price = 0.723 USDT
              </p>
              <p className="text-[24px] font-saviour text-[#F0F0F0] text-center mt-[20px]">
                Sold - $34,56,56,764/$50,00,00,000
              </p>
              <p className="text-[24px] font-saviour text-[#F0F0F0] text-center mt-[20px]">
                Raised - $34,56,56,764/$40,00,00,000
              </p>
              <div className="border-2 border-[#C4110C] h-[48px] w-[467px] rounded-3xl ml-[111px] mt-[30px] flex items-center bg-[#040815] relative">
            <input type="text" className="h-[44px] flex-grow bg-transparent rounded-3xl pl-4 pr-[150px] text-white placeholder-gray-400 font-saviour" placeholder="Enter the amount (BNB)"/>
              </div>
              <div className="border-2 border-[#C4110C] h-[48px] w-[467px] rounded-3xl ml-[111px] mt-[30px] flex items-center bg-[#040815] relative">
            <input type="text" className="h-[44px] flex-grow bg-transparent rounded-3xl pl-4 pr-[150px] text-white placeholder-gray-400 font-saviour" placeholder="Minimum Quantity to Buy"/>
              </div>
              <div className="border-2 border-[#C4110C] h-[48px] w-[467px] rounded-3xl ml-[111px] mt-[30px] flex items-center bg-[#040815] relative">
            <input type="text" className="h-[44px] flex-grow bg-transparent rounded-3xl pl-4 pr-[150px] text-white placeholder-gray-400 font-saviour" placeholder="Maximum Quantity of Tokens"/>
              </div>
              <div className=" flex justify-center items-center gap-10 mt-[-20px]">
              <button className="w-[78px] h-[39px] rounded-2xl bg-gradient-to-r from-[#ED0137] to-[#F05733] text-white text-[14px] font-saviour mt-[54px]">
                Buy
              </button>
              <button className="w-[138px] h-[39px] rounded-2xl bg-gradient-to-r from-[#ED0137] to-[#F05733] text-white text-[14px] p-[12px 15px] font-saviour mt-[54px]">
                Claim Drop
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { IDOEvent };
