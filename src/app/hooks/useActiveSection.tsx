import type { SECTIONS } from "@app/types";
import { useEffect, useState } from "react";

export const useActiveSection = (sectionIds: SECTIONS[]) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      const headerHeight = (header ? header.offsetHeight : 0) + 40; // Add some offset to trigger the change a bit earlier
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

  return [activeSection, setActiveSection] as const;
};
