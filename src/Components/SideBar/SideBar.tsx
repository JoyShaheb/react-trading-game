import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../../store/slices/UserSlice";
import NavLink from "./NavLink";
import {
  HomeIcon,
  ChartPieIcon as DashboardIcon,
  DocumentChartBarIcon as DocumentsIcon,
  CurrencyDollarIcon,
  UserCircleIcon as UserIcon,
  ShoppingBagIcon as ProductIcon,
  // ArrowRightOnRectangleIcon as SignoutIcon,
  // ArrowLeftOnRectangleIcon as SigninIcon,
  // UserPlusIcon as SignupIcon,
  XMarkIcon as CrossIcon,
} from "@heroicons/react/24/outline";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const dispatch = useDispatch();
  // const user = useSelector((state: any) => state.user);
  // const { userID } = user;

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <button
        data-drawer-target="cta-button-sidebar"
        data-drawer-toggle="cta-button-sidebar"
        aria-controls="cta-button-sidebar"
        type="button"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="cta-button-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          !isSidebarOpen && "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <button
            data-drawer-target="cta-button-sidebar"
            data-drawer-toggle="cta-button-sidebar"
            aria-controls="cta-button-sidebar"
            type="button"
            onClick={closeSidebar}
            className="inline-flex items-center ml-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Close sidebar</span>
            <CrossIcon className="w-6" />
          </button>
          <ul className="space-y-2">
            <NavLink
              to="/"
              label="Home"
              isPro={false}
              onClick={closeSidebar}
              Icon={<HomeIcon className="w-6" />}
            />
            <NavLink
              to="/profit-calculator"
              label="Profit Calculator"
              isPro={false}
              Icon={<CurrencyDollarIcon className="w-6" />}
              onClick={closeSidebar}
            />
            <NavLink
              to="/swap-profits"
              label="Swap Profits"
              isPro={false}
              Icon={<DashboardIcon className="w-6" />}
              onClick={closeSidebar}
            />
            <NavLink
              to="/Products"
              label="Products"
              isPro={false}
              Icon={<ProductIcon className="w-6" />}
              onClick={closeSidebar}
            />
          </ul>
          <div
            id="dropdown-cta"
            className="p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900"
            role="alert"
          >
            <div className="flex items-center mb-3">
              <span className="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">
                Beta
              </span>
              <button
                type="button"
                className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
                data-dismiss-target="#dropdown-cta"
                aria-label="Close"
              >
                <span className="sr-only">Close</span>
                <svg
                  aria-hidden="true"
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <p className="text-sm text-blue-800 dark:text-blue-400">
              The App is in beta mode, feel free to suggest us for new features.
            </p>
          </div>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">{children}</div>
    </>
  );
};

export default Sidebar;
