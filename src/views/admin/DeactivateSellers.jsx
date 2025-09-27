import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

function DeactivateSellers() {
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [show, setShow] = useState(false);
  return (
    <div className="px-2 lg:px-7 pt-5">
      <h1 className="text-[20px] font-bold mb-3">Deactivate Seller</h1>

      <div className="w-full p-4 bg-[#1e293b] rounded-md">
        <div className="flex justify-between items-center">
          <select
            onChange={(e) => setPerPage(parseInt(e.target.value))}
            className="px-4 py-2 outline-none bg-[#1e293b] border border-green-800 rounded-md text-[#d0d2d6]"
          >
            <option value="5">5</option>
            <option value="5">10</option>
            <option value="5">20</option>
          </select>
          <input
            className="px-4 py-2 focus:border-green-500 outline-none bg-[#283046] border border-green-800 rounded-md text-[#d0d2d6]"
            type="text"
            placeholder="search"
          />
        </div>

        <div className="relative overflow-x-auto mt-3">
          <table className="w-full text-sm text-left text-white uppercase border-b border-green-700">
            <thead className="text-sm text-green-200 uppercase bg-[#1e293b] border-b border-green-700">
              <tr className="border border-green-700">
                <th className="py-3 px-4 font-semibold">No.</th>
                <th className="py-3 px-4 font-semibold">Image</th>
                <th className="py-3 px-4 font-semibold">Name</th>
                <th className="py-3 px-4 font-semibold">Email</th>
                <th className="py-3 px-4 font-semibold">Payment Status</th>
                <th className="py-3 px-4 font-semibold">Status</th>
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
                    Santosh Pal
                  </td>
                  <td className="py-1 px-4 font-medium whitespace-nowrap hover:bg-green-800 hover:text-green-100">
                    Santosh.Pal@gmail.com
                  </td>
                  <td className="py-1 px-4 font-medium whitespace-nowrap hover:bg-green-800 hover:text-green-100">
                    <span>Pending</span>
                  </td>
                  <td className="py-1 px-4 font-medium whitespace-nowrap hover:bg-green-800 hover:text-green-100">
                    Deactivate
                  </td>
                  <td className="py-1 px-4 font-medium whitespace-nowrap hover:bg-green-800 hover:text-green-100 cursor-pointer underline">
                    <div className="flex justify-start items-center gap-4">
                      <Link className="p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50">
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

export default DeactivateSellers;
