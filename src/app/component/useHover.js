import { useState } from "react";

export default function useHover() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return {
    hoveredIndex,
    handleMouseEnter,
    handleMouseLeave,
  };
}
