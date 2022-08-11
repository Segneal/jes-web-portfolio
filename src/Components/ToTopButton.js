import React, { useEffect } from "react";

export default function ToTopButton() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const toTop = () => {
    window.scrollTo({ top: 10 });
  };

  const visible = () => {
    if (isVisible) {
      return "scroll-button-active";
    }
  };

  return (
    <div>
      <button className={`button-scroller ${visible}`}>Top</button>;
    </div>
  );
}
