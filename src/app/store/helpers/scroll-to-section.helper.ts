import type { SECTIONS } from "@app/types";

export const scrollToSection = (sectionId: SECTIONS) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
}