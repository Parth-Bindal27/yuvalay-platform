import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import "./ScrollIndicator.css";

export default function ScrollIndicator() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`scroll-indicator ${
        hidden ? "scroll-indicator--hidden" : ""
      }`}
    >
      <span>Scroll to Begin</span>

      <div className="scroll-indicator__mouse">
        <div className="scroll-indicator__wheel"></div>
      </div>

      <ChevronDown
        size={18}
        className="scroll-indicator__arrow"
      />
    </div>
  );
}