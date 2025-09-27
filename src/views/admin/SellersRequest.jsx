import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Search from "../components/Search";
import {
  get_sellers_requests,
  messageClear,
} from "../../store/Reducers/sellerReducer";

function SellersRequest() {
  const dispatch = useDispatch();
  const { sellers, totalSeller } = useSelector((state) => state.seller);
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch(
      get_sellers_requests({
        perPage,
        searchValue,
        page: currentPage,
      })
    );
  }, [perPage, searchValue, currentPage]);
  return (
    <div className="px-2 lg:px-7 pt-5">
      <h1 className="text-[20px] font-bold mb-3">Sellers Request</h1>

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
                <th className="py-3 px-4 font-semibold">Name</th>
                <th className="py-3 px-4 font-semibold">Email</th>
                <th className="py-3 px-4 font-semibold">Payment Status</th>
                <th className="py-3 px-4 font-semibold">Status</th>
                <th className="py-3 px-4 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {sellers.map((sl, i) => (
                <tr
                  key={i}
                  className={`${
                    i % 2 === 0 ? "bg-[#1e293b]" : "bg-[#0f172a]"
                  } transition-colors duration-200`}
                >
                  <td className="py-1 px-4 font-medium whitespace-nowrap ">
                    {i + 1}
                  </td>

                  <td className="py-1 px-4 font-medium whitespace-nowrap ">
                    {sl.name}
                  </td>
                  <td className="py-1 px-4 font-medium whitespace-nowrap ">
                    {sl.email}
                  </td>
                  <td className="py-1 px-4 font-medium whitespace-nowrap ">
                    <span>{sl.payment}</span>
                  </td>
                  <td className="py-1 px-4 font-medium whitespace-nowrap ">
                    {sl.status}
                  </td>
                  <td className="py-1 px-4 font-medium whitespace-nowrap  cursor-pointer underline">
                    <div className="flex justify-start items-center gap-4">
                      <Link
                        to={`/admin/dashboard/sellers/details/${sl._id}`}
                        className="p-[6px] bg-green-500 rounded hover:shadow-lg"
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

export default SellersRequest;
