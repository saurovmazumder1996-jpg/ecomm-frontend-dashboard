import React from "react";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

function Pagination({
  pageNumber,
  setPageNumber,
  totalItem,
  perPage,
  showItems,
}) {
  let totalPage = Math.ceil(totalItem / perPage);
  let startPage = pageNumber;

  let dif = totalPage - pageNumber;
  if (dif <= showItems) {
    startPage = totalPage - showItems;
  }
  let endPage = startPage < 0 ? showItems : showItems + startPage;

  if (startPage <= 0) {
    startPage = 1;
  }

  const createBtn = () => {
    const btns = [];
    for (let i = startPage; i < endPage; i++) {
      btns.push(
        <li
          onClick={() => setPageNumber(i)}
          className={` ${
            pageNumber === i
              ? "bg-green-400 shadow-md shadow-green-300/50 text-white"
              : "bg-green-900 hover:bg-green-400 shadow-lg hover:shadow-green-500/50 hover:text-white text-[#d0d2d6]"
          } w-[33px] h-[33px] rounded-full flex justify-center items-center cursor-pointer `}
        >
          {i}
        </li>
      );
    }
    return btns;
  };

  return (
    <ul className="flex gap-3">
      {pageNumber > 1 && (
        <li
          onClick={() => setPageNumber(pageNumber - 1)}
          className="w-[33px] h-[33px] rounded-full flex justify-center items-center bg-green-200 text-[#000000] cursor-pointer"
        >
          <MdOutlineKeyboardDoubleArrowLeft />
        </li>
      )}
      {createBtn()}
      {pageNumber < totalPage && (
        <li
          onClick={() => setPageNumber(pageNumber + 1)}
          className="w-[33px] h-[33px] rounded-full flex justify-center items-center bg-green-200 text-[#000000] cursor-pointer"
        >
          <MdOutlineKeyboardDoubleArrowRight />
        </li>
      )}
    </ul>
  );
}

export default Pagination;
