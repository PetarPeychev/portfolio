"use client";

import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useColorScheme } from "app/hooks/color-scheme";
import "react-toggle/style.css";

export const DarkModeToggle = () => {
  const { isDark, setIsDark } = useColorScheme();
  return (
    <div className="mr-2">
      <DarkModeSwitch
        checked={isDark}
        onChange={(checked) => setIsDark(checked)}
      />
    </div>
  );
};
