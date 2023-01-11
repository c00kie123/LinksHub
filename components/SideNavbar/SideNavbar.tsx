import classNames from "classnames";
import React, { useState } from "react";
import { data, sidebarData } from "../../database/data";
import { SideNavbarElement } from "./SideNavbarElement";

export const SideNavbar = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarActive((prev) => !prev);
  };
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
      <div
          className={classNames(
          `lg:w-1/5 bg-base-300 p-4 lg:min-h-screen ${
            isDarkMode ? "dark-mode" : "light-mode"
          }`
        )}
     >
      <div className={classNames(isDarkMode ? "dark-mode" : "light-mode")}>
        <h1 className="text-3xl font-bold mb-4">
          <span className="border-b-4 border-violet-500 text-violet-200">
            Links
          </span>
          <span className="text-violet-500">Hub</span>
        </h1>
      <button className="mode-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
        
        <label className="btn btn-circle swap swap-rotate lg:hidden">
          <input
            type="checkbox"
            onClick={toggleSidebar}
            className=className={classNames(isDarkMode ? "dark-mode-checkbox" : "light-mode-checkbox")}
          />

          <svg
            className={classNames("swap-off fill-current", isDarkMode ? "dark-mode-svg" : "light-mode-svg")}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          <svg
            className={classNames("swap-on fill-current", isDarkMode ? "dark-mode-svg" : "light-mode-svg")}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
        <button className={classNames("mode-toggle", isDarkMode ? "dark-mode-btn" : "light-mode-btn")} onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <div
        className={classNames(
          "lg:block transition-all ease-in duration-300",
          isSidebarActive ? "block" : "hidden"
        )}
      >
        <div className={classNames("py-4 flex flex-col justify-center gap-8", isDarkMode ? "dark-mode" : "light-mode")}>
          <button className={classNames("mode-toggle", isDarkMode ? "dark-mode-btn" : "light-mode-btn")} onClick={toggleDarkMode}>
          { isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
          {sidebarData.map((item, index) => {
            return (
              <div key={index}>
                <h2 key={index} className="uppercase font-bold text-xl">
                  {item.category}
                </h2>
                {item.subcategory.map((s, i) => {
                  return <SideNavbarElement key={i} title={s} />;
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LightDarkModeToggle;
