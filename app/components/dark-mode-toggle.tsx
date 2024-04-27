"use client";

import { useEffect } from "react";

export function DarkModeToggle() {
  const isDark = () => localStorage.getItem("theme") === "dark";
  const setIsDark = (value: boolean) => {
    const darkIcon = document.getElementById("dark-icon");
    const lightIcon = document.getElementById("light-icon");
    if (value) {
      localStorage.setItem("theme", "dark");
      if (darkIcon) {
        darkIcon.style.display = "block";
      }
      if (lightIcon) {
        lightIcon.style.display = "none";
      }
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      if (lightIcon) {
        lightIcon.style.display = "block";
      }
      if (darkIcon) {
        darkIcon.style.display = "none";
      }
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      const defaultDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDark(defaultDark);
    } else if (isDark()) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return (
    <button onClick={() => setIsDark(!isDark())}>
      <svg
        width="30"
        height="30"
        id="light-icon"
        color="black"
        style={{ display: isDark() ? "none" : "block" }}
      >
        <circle cx="15" cy="15" r="6" fill="currentColor" />

        <line
          id="ray"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          x1="15"
          y1="1"
          x2="15"
          y2="4"
        ></line>

        <use href="#ray" transform="rotate(45 15 15)" />
        <use href="#ray" transform="rotate(90 15 15)" />
        <use href="#ray" transform="rotate(135 15 15)" />
        <use href="#ray" transform="rotate(180 15 15)" />
        <use href="#ray" transform="rotate(225 15 15)" />
        <use href="#ray" transform="rotate(270 15 15)" />
        <use href="#ray" transform="rotate(315 15 15)" />
      </svg>
      <svg
        width="30"
        height="30"
        id="dark-icon"
        color="white"
        style={{ display: isDark() ? "block" : "none" }}
      >
        <path
          fill="currentColor"
          d="
          M 23, 5
          A 12 12 0 1 0 23, 25
          A 12 12 0 0 1 23, 5"
        />
      </svg>
    </button>
  );
}
