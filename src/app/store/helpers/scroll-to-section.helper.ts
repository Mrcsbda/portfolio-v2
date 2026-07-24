import type { SECTIONS } from "../../types/data.types";

export const scrollToSection = (sectionId: SECTIONS) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
}