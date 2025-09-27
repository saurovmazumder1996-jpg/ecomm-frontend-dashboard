import React, { useState } from "react";
import Search from "../components/Search";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";

function DiscountProducts() {
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="px-2 lg:px-7 pt-5 ">
      <h1 className="text-[#00ff73] font-semibold text-lg mb-3">
        Discount Products
      </h1>
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
                <th className="py-3 px-4 font-semibold">No.</th>
                <th className="py-3 px-4 font-semibold">Image</th>
                <th className="py-3 px-4 font-semibold">Name</th>
                <th className="py-3 px-4 font-semibold">Category</th>
                <th className="py-3 px-4 font-semibold">Brand</th>
                <th className="py-3 px-4 font-semibold">Price</th>
                <th className="py-3 px-4 font-semibold">Discount</th>
                <th className="py-3 px-4 font-semibold">Stock</th>
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
                    {sl}
                  </td>
                  <td className="py-1 px-4 font-medium whitespace-nowrap hover:bg-green-800 hover:text-green-100">
                    <img
                      className="w-[45px] h-[45px]"
                      src={`http://localhost:3000/images/category/${sl}.jpg`}
                      alt=""
                    />
                  </td>
                  <td className="py-1 px-4 font-medium whitespace-nowrap hover:bg-green-800 hover:text-green-100">
                    Laptops
                  </td>
                  <td className="py-1 px-4 font-medium whitespace-nowrap hover:bg-green-800 hover:text-green-100">
                    Electronics
                  </td>
                  <td className="py-1 px-4 font-medium whitespace-nowrap hover:bg-green-800 hover:text-green-100">
                    Apple
                  </td>
                  <td className="py-1 px-4 font-medium whitespace-nowrap hover:bg-green-800 hover:text-green-100">
                    Rs.100000
                  </td>
                  <td className="py-1 px-4 font-medium whitespace-nowrap hover:bg-green-800 hover:text-green-100">
                    4%
                  </td>
                  <td className="py-1 px-4 font-medium whitespace-nowrap hover:bg-green-800 hover:text-green-100">
                    4
                  </td>
                  <td className="py-1 px-4 font-medium whitespace-nowrap hover:bg-green-800 hover:text-green-100 cursor-pointer underline">
                    <div className="flex justify-start items-center gap-2">
                      <Link className="p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50">
                        <FaEdit />
                      </Link>
                      <Link className="p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-yellow-500/50">
                        <FaEye />
                      </Link>
                      <Link className="p-[6px] bg-red-500 rounded hover:shadow-lg hover:shadow-yellow-500/50">
                        <FaTrash />
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

export default DiscountProducts;
