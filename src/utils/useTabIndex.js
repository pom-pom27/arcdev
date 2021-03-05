import { useEffect, useState } from "react";

function useTabIndex() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);

  useEffect(() => {
    if (window.location.pathname === "/" && selectedIndex !== 0) {
      setSelectedIndex(0);
    } else if (
      window.location.pathname === "/services" &&
      selectedIndex !== 1
    ) {
      setSelectedIndex(1);
      setSelectedMenuItem(0);
    } else if (
      window.location.pathname === "/mobile-app" &&
      selectedIndex !== 1
    ) {
      setSelectedIndex(1);
      setSelectedMenuItem(1);
    } else if (window.location.pathname === "/website" && selectedIndex !== 1) {
      setSelectedIndex(1);
      setSelectedMenuItem(2);
    } else if (
      window.location.pathname === "/custom-software" &&
      selectedIndex !== 1
    ) {
      setSelectedIndex(1);
      setSelectedMenuItem(3);
    } else if (
      window.location.pathname === "/the-revolution" &&
      selectedIndex !== 2
    ) {
      setSelectedIndex(2);
    } else if (window.location.pathname === "/about" && selectedIndex !== 3) {
      setSelectedIndex(3);
    } else if (window.location.pathname === "/contact" && selectedIndex !== 4) {
      setSelectedIndex(4);
    }
  }, [selectedIndex]);

  return [selectedIndex, setSelectedIndex];
}

export default useTabIndex;
