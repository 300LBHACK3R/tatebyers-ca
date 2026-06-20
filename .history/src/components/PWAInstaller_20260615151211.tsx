"use client";

import { useEffect } from "react";

export function PWAInstaller() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("serviceWorker" in navigator)) return;

    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        // Service worker registration failed silently to avoid bothering visitors.
      });
    });
  }, []);

  return null;
}
