import React, { forwardRef } from "react";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FixedSizeList as List } from "react-window";

function handleOnWheel({ deltaY }) {
  console.log("handleOnWheel", deltaY);
}

const outerElementType = forwardRef((props, ref) => (
  <div ref={ref} onWheel={handleOnWheel} {...props} />
));

function Payments() {
  const Row = ({ index, style }) => {
    return (
      <div style={style} className="flex text-sm text-white font-medium">
        <div className="w-[25%] p-2 whitespace-nowrap">{index + 1}</div>
        <div className="w-[25%] p-2 whitespace-nowrap">Rs.2560</div>
        <div className="w-[25%] p-2 whitespace-nowrap">
          <span className="py-[1px] px-[5px] bg-green-900 text-white rounded-md text-sm">
            Pending
          </span>
        </div>
        <div className="w-[25%] p-2 whitespace-nowrap">16 July 2025</div>
      </div>
    );
  };
  return (
    <div className="px-2 md:px-7 py-5">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7 mb-5">
        {/* Total Sales */}
        <div className="flex justify-between items-center p-5 bg-[#161616] rounded-md shadow-lg">
          <div className="flex flex-col text-[#A7F3D0]">
            <h2 className="text-2xl font-bold">Rs.9000</h2>
            <span className="text-md font-normal">Total Sales</span>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-[#10B981] flex justify-center items-center text-xl shadow-inner">
            <MdOutlineCurrencyRupee className="text-black" />
          </div>
        </div>

        {/* Available Amount */}
        <div className="flex justify-between items-center p-5 bg-[#161616] rounded-md shadow-lg">
          <div className="flex flex-col text-[#93C5FD]">
            <h2 className="text-2xl font-bold">Rs.2000</h2>
            <span className="text-md font-normal">Available Amount</span>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-[#3B82F6] flex justify-center items-center text-xl shadow-inner">
            <MdOutlineCurrencyRupee className="text-black" />
          </div>
        </div>

        {/* Withdraw Amount */}
        <div className="flex justify-between items-center p-5 bg-[#161616] rounded-md shadow-lg">
          <div className="flex flex-col text-[#FACC15]">
            <h2 className="text-2xl font-bold">Rs.1000</h2>
            <span className="text-md font-normal">Withdraw Amount</span>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-[#CA8A04] flex justify-center items-center text-xl shadow-inner">
            <MdOutlineCurrencyRupee className="text-black" />
          </div>
        </div>

        {/* Pending Amount */}
        <div className="flex justify-between items-center p-5 bg-[#161616] rounded-md shadow-lg">
          <div className="flex flex-col text-[#F87171]">
            <h2 className="text-2xl font-bold">Rs.1000</h2>
            <span className="text-md font-normal">Pending Amount</span>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-[#EF4444] flex justify-center items-center text-xl shadow-inner">
            <MdOutlineCurrencyRupee className="text-black" />
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 pb-4">
        <div className="bg-[#1e293b] text-[#d0d2d6] rounded-md p-5">
          <h2 className="text-lg">Send Request</h2>
          <div className="pt-5 mb-5">
            <form>
              <div className="flex gap-3 flex-wrap">
                <input
                  min="0"
                  type="number"
                  name="amount"
                  className="px-3 py-2 md:w-[75%] focus:border-green-500 outline-none bg-[#283046] border border-green-800 rounded-md text-[#d0d2d6]"
                />
                <button className="bg-red-500 hover:shadow-red-540 hover:shadow-md text-white rounded px-7 py-2">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div>
            <h2 className="text-lg pb-4">Pending Request</h2>
            <div className="w-full overflow-x-auto">
              <div className="flex bg-[#0e0e10] uppercase text-xs font-bold min-w-[340px] rounded-md">
                <div className="w-[25%] p-2">No.</div>
                <div className="w-[25%] p-2">Amount</div>
                <div className="w-[25%] p-2">Status</div>
                <div className="w-[25%] p-2">Date</div>
              </div>
              {
                <List
                  style={{ minWidth: "340px" }}
                  className="List"
                  height={350}
                  itemCount={10}
                  itemSize={35}
                  outerElementType={outerElementType}
                >
                  {Row}
                </List>
              }
            </div>
          </div>
        </div>

        <div className="bg-[#1e293b] text-[#d0d2d6] rounded-md p-5">
          <div>
            <h2 className="text-lg pb-4">Success Withdraw</h2>
            <div className="w-full overflow-x-auto">
              <div className="flex bg-[#0e0e10] uppercase text-xs font-bold min-w-[340px] rounded-md">
                <div className="w-[25%] p-2">No.</div>
                <div className="w-[25%] p-2">Amount</div>
                <div className="w-[25%] p-2">Status</div>
                <div className="w-[25%] p-2">Date</div>
              </div>
              {
                <List
                  style={{ minWidth: "340px" }}
                  className="List"
                  height={350}
                  itemCount={10}
                  itemSize={35}
                  outerElementType={outerElementType}
                >
                  {Row}
                </List>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payments;
