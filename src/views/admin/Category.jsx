import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import { CiImageOn } from "react-icons/ci";
import { IoIosCloseCircle } from "react-icons/io";
import { PropagateLoader } from "react-spinners";
import { overrideStyle } from "../../utils/utils";
import {
  categoryAdd,
  get_category,
  messageClear,
} from "../../store/Reducers/categoryReducer";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import Search from "../components/Search";

function Category() {
  const dispatch = useDispatch();
  const { loader, successMessage, errorMessage, categories } = useSelector(
    (state) => state.category
  );
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [show, setShow] = useState(false);
  const [imageShow, setImageShow] = useState("");

  const [state, setState] = useState({
    name: "",
    image: "",
  });

  const imagehandle = (e) => {
    let files = e.target.files;
    if (files.length > 0) {
      setImageShow(URL.createObjectURL(files[0]));
      setState({
        ...state,
        image: files[0],
      });
    }
  };

  const addCategory = (e) => {
    e.preventDefault();
    dispatch(categoryAdd(state));
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      setState({
        name: "",
        image: "",
      });
      setImageShow("");
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
  }, [successMessage, errorMessage]);

  useEffect(() => {
    const obj = {
      perPage: parseInt(perPage),
      page: parseInt(currentPage),
      searchValue,
    };
    dispatch(get_category(obj));
  }, [searchValue, currentPage, perPage]);

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="flex lg:hidden justify-between items-center mb-5 p-4 bg-[#1e293b] rounded-md">
        <h1 className="text-[#00ff73] font-semibold text-lg">Category</h1>
        <button
          onClick={() => setShow(true)}
          className="bg-red-500 shadow-lg hover:shadow-red-500/40 px-4 py-2 coursor-pointer text-white rounded-sm text-sm"
        >
          Add
        </button>
      </div>

      <div className="flex flex-wrap w-full">
        <div className="w-full lg:w-7/12">
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
                    <th className="py-3 px-4 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((ix, i) => (
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
                        <img
                          className="w-[45px] h-[45px]"
                          src={ix.image}
                          alt=""
                        />
                      </td>
                      <td className="py-1 px-4 font-medium whitespace-nowrap ">
                        {ix.name}
                      </td>
                      <td className="py-1 px-4 font-medium whitespace-nowrap  cursor-pointer underline">
                        <div className="flex justify-start items-center gap-4">
                          <Link className="p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50">
                            <FaEdit />
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
        <div
          className={`w-[320px] lg:w-5/12 translate-x-100 lg:relative lg:right-0 fixed ${
            show ? "right-0" : "-right-[340px]"
          } z-[9999] top-0 transition-all duration-500`}
        >
          <div className="w-full pl-5 ">
            <div className="bg-[#1e293b] h-screen lg:h-auto px-3 py-2 lg:rounded-md text-[#d0d2d6]">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-[#d0d2d6] font-semibold text-xl mb-4 w-full text-center">
                  Add Category
                </h1>
                <div
                  onClick={() => setShow(false)}
                  className="block lg:hidden "
                >
                  <IoIosCloseCircle />
                </div>
              </div>

              <form onSubmit={addCategory}>
                <div className="flex flex-col w-full gap-1 mb-3">
                  <label htmlFor="name">Category Name</label>
                  <input
                    value={state.name}
                    onChange={(e) =>
                      setState({ ...state, name: e.target.value })
                    }
                    className="px-4 py-2 focus:border-green-500 outline-none bg-[#283046] border border-green-800 rounded-md text-[#d0d2d6]"
                    type="text"
                    id="name"
                    name="category_name"
                    placeholder="Category Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="image"
                    className="flex justify-center items-center flex-col h-[238px] cursor-pointer border border-dashed hover:border-grey-500 w-full border-[#d0d2d6]"
                  >
                    {imageShow ? (
                      <img src={imageShow} className="w-full h-full" />
                    ) : (
                      <>
                        <span>
                          <CiImageOn />
                        </span>
                        <span>Select Image</span>
                      </>
                    )}
                  </label>
                  <input
                    onChange={imagehandle}
                    className="hidden"
                    type="file"
                    name="image"
                    id="image"
                  />
                  <div className="mt-4">
                    <button
                      disabled={loader ? true : false}
                      className="bg-green-900 w-full hover:shadow-blue-300/hover:shadow-lg text-white rounded-md px-7 py-2 mb-3"
                    >
                      {loader ? (
                        <PropagateLoader
                          color="#fff"
                          cssOverride={overrideStyle}
                        />
                      ) : (
                        "Add Category"
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
