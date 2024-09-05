import React, { useState } from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Recommended from "./Recommended";


const ProfileWidget = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      title: "About Me",
      id: 0,
      component: () => (
        <div>
          <AboutMe />
        </div>
      ),
    },
    {
      title: "Experience",
      id: 1,
      component: () => (
        <div>
          <Experience />
        </div>
      ),
    },
    {
      title: "Recommended",
      id: 2,
      component: () => (
        <div>
          <Recommended />
        </div>
      ),
    },
  ];

  const handleTabChange = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="bg-cardGrey relative rounded-custom p-6 shadow-lg flex-grow">
      <QuestionMarkCircleIcon className="h-6 w-6 absolute left-1 top-3 cursor-pointer text-gray-500" />

      <div className="flex flex-wrap w-fit px-4 lg:flex-nowrap lg:w-fit space-x-2 lg:space-x-4  transition-all bg-black rounded-custom-md  lg:px-4 py-1 mb-4">
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={`transition-all px-6 lg:px-6 lg:py-1 py-2  xl:px-10 xl:py-2 my-1 text-white rounded-custom-sm ${
              activeTab === tab.id
                ? "bg-tabGrey shadow-[10px_18px_50px_8px_#000000] scale-110"
                : "bg-none"
            }`}
            onClick={() => handleTabChange(i)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="font-poppins text-slate-400">
        {tabs[activeTab].component()}
      </div>
    </div>
  );
};

export default ProfileWidget;
