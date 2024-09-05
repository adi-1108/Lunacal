import React, { useState } from "react";
import { ChevronLeft, ChevronRight, PlusCircle } from "lucide-react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import "./index.css";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Recommended from "./components/Recommended";
import ProfileWidget from "./components/ProfileWidget";
import GalleryWidget from "./components/GalleryWidget";
import { motion } from "framer-motion"

const App = () => {
  return (
    <motion.div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-darkGrey to-lightGrey py-4 px-4">
      <div className="flex flex-col lg:flex-row w-full h-[calc(100vh-200px)] max-w-7xl">
        {/* Left empty card */}
        <div className="w-full lg:w-1/2 pr-0 lg:pr-2 mb-4 lg:mb-0">
          <div className="bg-[#616161] rounded-lg h-full"></div>
        </div>

        {/* Right side with two cards */}
        <div className="w-full lg:w-1/2 pl-0 lg:pl-2 flex flex-col space-y-4 rounded-custom">
          {/* Profile Widget */}

          <ProfileWidget />

          {/* Gallery Widget */}
          <GalleryWidget />
        </div>
      </div>
    </motion.div>
  );
};

export default App;
