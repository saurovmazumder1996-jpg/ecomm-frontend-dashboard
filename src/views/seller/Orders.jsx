import React, { useState } from "react";
import Search from "../components/Search";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";

function Orders() {
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="px-2 lg:px-7 pt-5 ">
      <h1 className="text-[#00ff73] font-semibold text-lg mb-3">Orders</h1>
      <div className="w-full p-4 bg-[#1e293b] rounded-md">
        <Search
          setPerPage={setPerPage}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />

        <div className="relative overflow-x-auto mt-3">
          <table className="w-full text-sm text-left text-white uppercase border-b border-green-700">
            <thead className="text-sm text-green-200 uppercase bg-[#1e293b] border-b border-green-700">
              <tr className="border border-green-700">
                <th className="py-3 px-4 font-semibold">Order Id</th>
                <th className="py-3 px-4 font-semibold">Price</th>
                <th className="py-3 px-4 font-semibold">Payment Status</th>
                <th className="py-3 px-4 font-semibold">Order Status</th>
                <th className="py-3 px-4 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((sl, i) => (
                <tr
                  key={i}
                  className={`${
                    i % 2 === 0 ? "bg-[#1e293b]" : "bg-[#0f172a]"
                  } transition-colors duration-200`}
                >
                  <td className="py-1 px-4 font-medium whitespace-nowrap hover:bg-green-800 hover:text-green-100">
                    #652190
                  </td>
                  <td className="py-1 px-4 font-medium whitespace-nowrap hover:bg-green-800 hover:text-green-100">
                    Rs.3489
                  </td>
                  <td className="py-1 px-4 font-medium whitespace-nowrap hover:bg-green-800 hover:text-green-100">
                    Pending
                  </td>
                  <td className="py-1 px-4 font-medium whitespace-nowrap hover:bg-green-800 hover:text-green-100">
                    Pending
                  </td>
                  <td className="py-1 px-4 font-medium whitespace-nowrap hover:bg-green-800 hover:text-green-100 cursor-pointer underline">
                    <div className="flex justify-start items-center gap-2">
                      <Link
                        to={`/seller/dashboard/orders/details/33`}
                        className="p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-yellow-500/50"
                      >
                        <FaEye />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full flex justify-end mt-4 bottom-4 right-4">
          <Pagination
            pageNumber={currentPage}
            setPageNumber={setCurrentPage}
            totalItem={50}
            perPage={perPage}
            showItems={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Orders;
