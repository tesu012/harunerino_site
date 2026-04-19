"use client";

import React, { useEffect, useState } from "react";
import DownloadPanelDesktop from "./DownloadPanelDesktop";
import DownloadPanelMobile from "./DownloadPanelMobile";

export default function DownloadPanel() {
  // default to desktop (false) so server-render and initial client render match
  const [isMobile, setIsMobile] = useState<boolean>(() => false);

  useEffect(() => {
    // Treat devices as mobile if narrow OR if they use a coarse pointer (touch devices)
    const mq = window.matchMedia("(max-width: 767px), (pointer: coarse)");
    // If we're actually on mobile, flip to mobile after mount.
    const raf = requestAnimationFrame(() => {
      if (mq.matches) setIsMobile(true);
    });
    const onChange = (e: MediaQueryListEvent) => requestAnimationFrame(() => setIsMobile(e.matches));
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", onChange);
      return () => {
        cancelAnimationFrame(raf);
        mq.removeEventListener("change", onChange);
      };
    }
    return () => cancelAnimationFrame(raf);
  }, []);

  return isMobile ? <DownloadPanelMobile /> : <DownloadPanelDesktop />;
}
