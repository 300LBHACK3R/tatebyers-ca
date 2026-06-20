"use client";

import { useEffect } from "react";

export function PWAInstaller() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (typeof window === "undefined") return;
    if (!("serviceWorker" in navigator)) return;

    let isCancelled = false;

    const registerServiceWorker = () => {
      if (isCancelled) return;

      navigator.serviceWorker.register("/sw.js", { scope: "/" }).catch(() => {
        // Registration fails silently so visitors are never interrupted.
      });
    };

    if (document.readyState === "complete") {
      registerServiceWorker();
    } else {
      window.addEventListener("load", registerServiceWorker, { once: true });
    }

    return () => {
      isCancelled = true;
      window.removeEventListener("load", registerServiceWorker);
    };
  }, []);

  return null;
}