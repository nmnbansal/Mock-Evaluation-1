import tokenImage from '../assets/Hero-image-4(1).png';
import './TokenOmics.css';

const TokenOmics = () => {
  return (
    <div className="tokenomics">
      <h1 className="text-[24px] lg:text-[44px] font-herofont text-[#ED0137] text-center p-[24px] lg:p-[64px]">
        TOKENOMICS
      </h1>
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <div className="mb-8 lg:mb-0">
          <div className="w-[244px] h-[70px] bg-[#ED0137] flex justify-center items-center mx-auto lg:ml-[168px] rounded-[20px] lg:mb-0 token-details">
            <p className="text-[18px] font-herofont text-white text-center">TOKEN DETAILS</p>
          </div>
          <div className="border-[3px] border-red-800 mt-[-30px] rounded-2xl w-[90%] sm:w-[412px] h-auto sm:h-[306px] mx-auto lg:ml-[90px] p-5 border-box">
            <table className="token-table mt-[24px] sm:mt-[42px] mx-auto lg:ml-[25px]">
              <tbody>
                <tr>
                  <td className="text-white font-saviour text-[16px] sm:text-[20px]">Name</td>
                  <td className="text-[#DF180A] font-saviour text-[16px] sm:text-[20px]">Saviour</td>
                </tr>
                <tr>
                  <td className="text-white font-saviour text-[16px] sm:text-[20px]">Symbol</td>
                  <td className="text-[#DF180A] font-saviour text-[16px] sm:text-[20px]">SVR</td>
                </tr>
                <tr>
                  <td className="text-white font-saviour text-[16px] sm:text-[20px]">Total Supply</td>
                  <td className="text-[#DF180A] font-saviour text-[16px] sm:text-[20px]">1000 Trillion</td>
                </tr>
                <tr>
                  <td className="text-white font-saviour text-[16px] sm:text-[20px]">Decimals</td>
                  <td className="text-[#DF180A] font-saviour text-[16px] sm:text-[20px]">18</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <img src={tokenImage} className="w-full max-w-[90%] sm:max-w-[300px] lg:max-w-[none] ml-0 lg:ml-[41px] mt-[100px] lg:mt-0" alt="Token" />
      </div>
    </div>
  );
}

export { TokenOmics };
