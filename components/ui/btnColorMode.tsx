"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const BtnColorMode = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    console.log(theme);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      The current theme is: {theme}{" "}
      <span className="dark:text-purple-600">mode</span>
      {currentTheme === "dark" ? (
        <button
          onClick={() => setTheme("light")}
          className="flex justify-center alight-center"
        >
          <BsFillSunFill />
        </button>
      ) : (
        <button
          onClick={() => setTheme("dark")}
          className="flex justify-center alight-center"
        >
          <BsFillMoonFill />
        </button>
      )}
    </div>
  );
};

export default BtnColorMode;
