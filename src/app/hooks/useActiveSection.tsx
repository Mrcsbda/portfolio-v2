import { useEffect, useState } from "react";
import type { SECTIONS } from "../types/data.types";

export const useActiveSection = (sectionIds: SECTIONS[]) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      const headerHeight = header ? header.offsetHeight : 0;
      const scrollPosition = window.scrollY + headerHeight;

      let current = sectionIds[0];

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return activeSection;
};
