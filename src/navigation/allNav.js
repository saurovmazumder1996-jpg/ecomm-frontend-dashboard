import { AiFillDashboard } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { MdOutlinePayment } from "react-icons/md";
import { Ri24HoursFill } from "react-icons/ri";
import { IoIosChatboxes } from "react-icons/io";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { RiDiscountPercentFill } from "react-icons/ri";
import { FaFirstOrder } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { FaRocketchat } from "react-icons/fa";
import { CiChat1 } from "react-icons/ci";
import { ImProfile } from "react-icons/im";

export const allNav = [
  {
    id: 1,
    title: "Dashboard",
    icon: <AiFillDashboard />,
    role: "admin",
    path: "/admin/dashboard",
  },
  {
    id: 2,
    title: "Orders",
    icon: <FaCartArrowDown />,
    role: "admin",
    path: "/admin/dashboard/orders",
  },
  {
    id: 3,
    title: "Category",
    icon: <BiCategory />,
    role: "admin",
    path: "/admin/dashboard/category",
  },
  {
    id: 4,
    title: "Sellers",
    icon: <IoIosPeople />,
    role: "admin",
    path: "/admin/dashboard/sellers",
  },
  {
    id: 5,
    title: "Payment Request",
    icon: <MdOutlinePayment />,
    role: "admin",
    path: "/admin/dashboard/payment-request",
  },
  {
    id: 6,
    title: "Deactive Request",
    icon: <MdOutlineRemoveShoppingCart />,
    role: "admin",
    path: "/admin/dashboard/deactive-request",
  },
  {
    id: 7,
    title: "Seller Request",
    icon: <Ri24HoursFill />,
    role: "admin",
    path: "/admin/dashboard/sellers-request",
  },
  {
    id: 8,
    title: "Live Chat",
    icon: <IoIosChatboxes />,
    role: "admin",
    path: "/admin/dashboard/chat-seller",
  },
  {
    id: 9,
    title: "Dashboard",
    icon: <AiFillDashboard />,
    role: "seller",
    path: "/seller/dashboard",
  },
  {
    id: 10,
    title: "Add Product",
    icon: <MdOutlineProductionQuantityLimits />,
    role: "seller",
    path: "/seller/dashboard/add-product",
  },
  {
    id: 11,
    title: "All Product",
    icon: <AiFillProduct />,
    role: "seller",
    path: "/seller/dashboard/all-product",
  },
  {
    id: 12,
    title: "Discount Product",
    icon: <RiDiscountPercentFill />,
    role: "seller",
    path: "/seller/dashboard/discount-product",
  },
  {
    id: 13,
    title: "Orders",
    icon: <FaFirstOrder />,
    role: "seller",
    path: "/seller/dashboard/orders",
  },
  {
    id: 14,
    title: "Payments",
    icon: <MdPayments />,
    role: "seller",
    path: "/seller/dashboard/payments",
  },
  {
    id: 15,
    title: "Chat-Customer",
    icon: <FaRocketchat />,
    role: "seller",
    path: "/seller/dashboard/chat-customer",
  },
  {
    id: 16,
    title: "Chat-Support",
    icon: <CiChat1 />,
    role: "seller",
    path: "/seller/dashboard/chat-support",
  },
  {
    id: 16,
    title: "Profile",
    icon: <ImProfile />,
    role: "seller",
    path: "/seller/dashboard/profile",
  },
];
