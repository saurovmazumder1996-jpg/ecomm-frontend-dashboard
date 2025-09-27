import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  get_seller_details,
  submit_seller_status,
  messageClear,
} from "../../store/Reducers/sellerReducer";
import { useParams } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { overrideStyle } from "../../utils/utils";

function SellerDetails() {
  const { sellerId } = useParams();
  const dispatch = useDispatch();
  const { loader, successMessage, errorMessage, sellerDetails } = useSelector(
    (state) => state.seller
  );
  const [sellerStatus, setSellerStatus] = useState("");

  useEffect(() => {
    dispatch(get_seller_details(sellerId));
  }, []);

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
  }, [successMessage, errorMessage]);

  useEffect(() => {
    setSellerStatus(sellerDetails?.status);
  }, [sellerDetails]);

  const submitSellerStatus = (e) => {
    e.preventDefault();
    dispatch(submit_seller_status({ sellerId, sellerStatus }));
  };
  return (
    <div className="px-2 lg:px-7 pt-5">
      <h1 className="text-[20px] font-bold mb-3">Seller Details</h1>
      <div className="w-full p-4 bg-[#1e293b] rounded-md">
        <div className="w-full flex flex-wrap text-[#d0d2d6] ">
          <div className="w-2/12 flex justify-center items-center py-3">
            <div>
              {sellerDetails?.image && (
                <img
                  className="w-full h-[230px]"
                  src={sellerDetails?.image}
                  alt=""
                />
              )}
            </div>
          </div>
          <div className="w-4/12">
            <div className="px-0 md:px-5 py-2">
              <div className="py-2 text-lg">
                <h2>Basic Info</h2>
              </div>
              <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-green-100 rounded-md">
                <div className="flex gap-2 font-bold text-[#000000]">
                  <span>Name: </span>
                  <span>{sellerDetails?.name} </span>
                </div>
                <div className="flex gap-2 font-bold text-[#000000]">
                  <span>Email: </span>
                  <span>{sellerDetails?.email}</span>
                </div>
                <div className="flex gap-2 font-bold text-[#000000]">
                  <span>Role: </span>
                  <span>{sellerDetails?.role} </span>
                </div>
                <div className="flex gap-2 font-bold text-[#000000]">
                  <span>Status: </span>
                  <span>{sellerDetails?.status} </span>
                </div>
                <div className="flex gap-2 font-bold text-[#000000]">
                  <span>Payment Status: </span>
                  <span>{sellerDetails?.payment} </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-4/12">
            <div className="px-0 md:px-5 py-2">
              <div className="py-2 text-lg">
                <h2>Address</h2>
              </div>
              <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-green-100 rounded-md">
                <div className="flex gap-2 font-bold text-[#000000]">
                  <span>Shop Name: </span>
                  <span>{sellerDetails?.shopInfo?.shopName}</span>
                </div>
                <div className="flex gap-2 font-bold text-[#000000]">
                  <span>Division: </span>
                  <span>{sellerDetails?.shopInfo?.division}</span>
                </div>
                <div className="flex gap-2 font-bold text-[#000000]">
                  <span>District: </span>
                  <span>{sellerDetails?.shopInfo?.district} </span>
                </div>
                <div className="flex gap-2 font-bold text-[#000000]">
                  <span>Subdistrict: </span>
                  <span>{sellerDetails?.shopInfo?.sub_district} </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form onSubmit={submitSellerStatus}>
            <div className="flex gap-4 py-3 ">
              <select
                value={sellerStatus}
                className="px-4 py-2 outline-none bg-[#1e293b] border border-green-800 rounded-md text-[#d0d2d6]"
                name="status"
                id="status"
                onChange={(e) => setSellerStatus(e.target.value)}
              >
                <option value="">--Select Status--</option>
                <option value="active">Active</option>
                <option value="deactive">Deactive</option>
              </select>
              <button
                disabled={loader ? true : false}
                className="bg-green-900 w-[200px]  hover:shadow-blue-300/hover:shadow-lg text-white rounded-md px-7 py-2 mb-3"
              >
                {loader ? (
                  <PropagateLoader color="#fff" cssOverride={overrideStyle} />
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SellerDetails;
