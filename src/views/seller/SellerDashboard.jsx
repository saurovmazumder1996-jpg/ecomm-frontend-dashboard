import React from "react";
import Chart from "react-apexcharts";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { RiPassPendingLine } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
import { Link } from "react-router-dom";

function SellerDashboard() {
  const state = {
    series: [
      {
        name: "Orders",
        data: [23, 34, 45, 56, 76, 23, 76, 87, 78, 22, 44, 88],
      },
      {
        name: "Revenue",
        data: [89, 14, 43, 52, 44, 65, 22, 29, 58, 11, 33, 99],
      },
      {
        name: "Sales",
        data: [88, 72, 95, 34, 87, 34, 27, 82, 71, 67, 32, 89],
      },
    ],
    options: {
      color: ["#181ee8", "#181ee8"],
      plotOptions: {
        radius: 30,
      },
      chart: {
        background: "transparent",
        foreColor: "#d0d2d6",
      },
      dataLabels: {
        enabled: false,
      },
      strock: {
        show: true,
        curve: ["smooth", "straight", "stepline"],
        lineGap: "butt",
        colors: "#f0f0f0",
        wide: 0.5,
        dashArray: 0,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      legend: {
        position: "top",
      },
      responsive: [
        {
          breakpoint: 565,
          yaxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
          },
          options: {
            plotOptions: {
              bar: {
                horizontal: true,
              },
            },
            chart: {
              height: "550px",
            },
          },
        },
      ],
    },
  };
  return (
    <div className="px-2 md:px-7 py-5">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {/* Total Sales */}
        <div className="flex justify-between items-center p-5 bg-[#161616] rounded-md shadow-lg">
          <div className="flex flex-col text-[#A7F3D0]">
            <h2 className="text-3xl font-bold">Rs.9000</h2>
            <span className="text-md font-medium">Total Sales</span>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-[#10B981] flex justify-center items-center text-xl shadow-inner">
            <MdOutlineCurrencyRupee className="text-black" />
          </div>
        </div>

        {/* Products */}
        <div className="flex justify-between items-center p-5 bg-[#161616] rounded-md shadow-lg">
          <div className="flex flex-col text-[#93C5FD]">
            <h2 className="text-3xl font-bold">50</h2>
            <span className="text-md font-medium">Products</span>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-[#3B82F6] flex justify-center items-center text-xl shadow-inner">
            <FaProductHunt className="text-white" />
          </div>
        </div>

        {/* Orders */}
        <div className="flex justify-between items-center p-5 bg-[#161616] rounded-md shadow-lg">
          <div className="flex flex-col text-[#FACC15]">
            <h2 className="text-3xl font-bold">10</h2>
            <span className="text-md font-medium">Orders</span>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-[#CA8A04] flex justify-center items-center text-xl shadow-inner">
            <FaShippingFast className="text-white" />
          </div>
        </div>

        {/* Pending Orders */}
        <div className="flex justify-between items-center p-5 bg-[#161616] rounded-md shadow-lg">
          <div className="flex flex-col text-[#F87171]">
            <h2 className="text-3xl font-bold">3</h2>
            <span className="text-md font-medium">Pending Orders</span>
          </div>
          <div className="w-[40px] h-[47px] rounded-full bg-[#EF4444] flex justify-center items-center text-xl shadow-inner">
            <RiPassPendingLine className="text-white" />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-wrap mt-7">
        {/* Chart Section */}
        <div className="w-full lg:w-7/12 lg:pr-3">
          <div className="w-full bg-[#111827] p-4 rounded-md shadow-md">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              height={350}
            />
          </div>
        </div>

        {/* Seller Message Section */}
        <div className="w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0">
          <div className="w-full bg-[#0f172a] p-4 rounded-md shadow-md text-white">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg pb-3 text-green-300">
                Recent Customer Message
              </h2>
              <Link className="font-semibold text-sm text-green-400 hover:underline">
                View All
              </Link>
            </div>

            <div className="flex flex-col gap-4 pt-6">
              <ol className="relative border-l-2 border-green-500 ml-4">
                {/* Message 1 */}
                <li className="mb-4 ml-6">
                  <div className="flex absolute -left-5 w-10 h-10 bg-green-500 rounded-full justify-center items-center z-10 shadow-md">
                    <img
                      className="w-full h-full rounded-full shadow-sm"
                      src="http://localhost:3000/images/admin.jpg"
                      alt=""
                    />
                  </div>
                  <div className="p-3 bg-[#1e293b] rounded-lg border border-green-600 shadow-sm">
                    <div className="flex justify-between mb-1">
                      <span className="text-md font-medium text-white">
                        Customer
                      </span>
                      <time className="text-xs text-green-300">2 days ago</time>
                    </div>
                    <div className="p-2 mt-1 text-xs text-white bg-[#0f766e] rounded-md">
                      How are you?
                    </div>
                  </div>
                </li>

                {/* Message 2 */}
                <li className="mb-4 ml-6">
                  <div className="flex absolute -left-5 w-10 h-10 bg-green-500 rounded-full justify-center items-center z-10 shadow-md">
                    <img
                      className="w-full h-full rounded-full shadow-sm"
                      src="http://localhost:3000/images/admin.jpg"
                      alt=""
                    />
                  </div>
                  <div className="p-3 bg-[#1e293b] rounded-lg border border-green-600 shadow-sm">
                    <div className="flex justify-between mb-1">
                      <span className="text-md font-medium text-white">
                        Customer
                      </span>
                      <time className="text-xs text-green-300">3 days ago</time>
                    </div>
                    <div className="p-2 mt-1 text-xs text-white bg-[#0f766e] rounded-md">
                      How to update my address?
                    </div>
                  </div>
                </li>

                {/* Message 3 */}
                <li className="mb-4 ml-6">
                  <div className="flex absolute -left-5 w-10 h-10 bg-green-500 rounded-full justify-center items-center z-10 shadow-md">
                    <img
                      className="w-full h-full rounded-full shadow-sm"
                      src="http://localhost:3000/images/admin.jpg"
                      alt=""
                    />
                  </div>
                  <div className="p-3 bg-[#1e293b] rounded-lg border border-green-600 shadow-sm">
                    <div className="flex justify-between mb-1">
                      <span className="text-md font-medium text-white">
                        Customer
                      </span>
                      <time className="text-xs text-green-300">4 days ago</time>
                    </div>
                    <div className="p-2 mt-1 text-xs text-white bg-[#0f766e] rounded-md">
                      My Order is not yet dispatched
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full p-4 bg-[#0f172a] rounded-md mt-6">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg text-green-300 pb-3">
            Recent Orders
          </h2>
          <Link className="font-semibold text-sm text-green-400 hover:underline">
            View All
          </Link>
        </div>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-white uppercase border-b border-green-700">
            <thead className="text-sm text-green-200 uppercase bg-[#1e293b] border-b border-green-700">
              <tr className="border border-green-700">
                <th className="py-3 px-4 font-semibold">Order ID</th>
                <th className="py-3 px-4 font-semibold">Price</th>
                <th className="py-3 px-4 font-semibold">Payment Status</th>
                <th className="py-3 px-4 font-semibold">Order Status</th>
                <th className="py-3 px-4 font-semibold">Active</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4].map((_, i) => (
                <tr
                  key={i}
                  className={`${
                    i % 2 === 0 ? "bg-[#1e293b]" : "bg-[#0f172a]"
                  } transition-colors duration-200`}
                >
                  <td className="py-3 px-4 font-medium whitespace-nowrap hover:bg-green-800 hover:text-green-100">
                    #34344
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap hover:bg-green-800 hover:text-green-100">
                    Rs.3000
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap hover:bg-green-800 hover:text-green-100">
                    Pending
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap hover:bg-green-800 hover:text-green-100">
                    Pending
                  </td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap hover:bg-green-800 hover:text-green-100 cursor-pointer underline">
                    View
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SellerDashboard;
