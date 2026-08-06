import type { SECTIONS } from "@app/types/data.types";

export const scrollToSection = (sectionId: SECTIONS) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
}