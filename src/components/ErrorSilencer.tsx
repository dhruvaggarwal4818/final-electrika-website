"use client";
import { useEffect } from "react";

export default function ErrorSilencer() {
  useEffect(() => {
    const handleRejection = (event: PromiseRejectionEvent) => {
      if (
        event.reason &&
        (event.reason.message?.includes("Transition was aborted") ||
         event.reason.name === "AbortError" ||
         event.reason.name === "InvalidStateError")
      ) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    const handleError = (event: ErrorEvent) => {
      if (
        event.message?.includes("Transition was aborted") ||
        event.error?.name === "AbortError" ||
        event.error?.name === "InvalidStateError"
      ) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    window.addEventListener("unhandledrejection", handleRejection);
    window.addEventListener("error", handleError);

    return () => {
      window.removeEventListener("unhandledrejection", handleRejection);
      window.removeEventListener("error", handleError);
    };
  }, []);

  return null;
}
