"use client";

import React from "react";

export default function CheckReaload() {
  if (window.performance && window.performance.getEntriesByType) {
    const entries = window.performance.getEntriesByType("navigation");
    if (entries.length > 0) {
      const navigationEntry = entries[0] as PerformanceNavigationTiming;
      if (navigationEntry.type === "reload") {
        console.log("Page was reloaded");
      } else {
        console.log("Page was not reloaded");
      }
    }
  }
}
