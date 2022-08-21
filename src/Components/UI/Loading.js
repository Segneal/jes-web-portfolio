import React from "react";

export default function Loading() {
  setTimeout(() => {}, 2500);

  return (
    <div className="loading">
      <div className="loading-dot dot-1"></div>
      <div className="loading-dot dot-2"></div>
      <div className="loading-dot dot-3"></div>
    </div>
  );
}
