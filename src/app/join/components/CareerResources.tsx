import ResourcesSection from "./ResourcesSection";

const careerItems = [
    { id: 1, code: "INTERNS.DESIGN", name: "Design related internships", href: "#" },
    { id: 2, code: "INTERNS.DESIGN", name: "Design related internships", href: "#" },
    { id: 3, code: "INTERNS.DESIGN", name: "Design related internships", href: "#" },
    { id: 4, code: "INTERNS.DESIGN", name: "Design related internships", href: "#" },
    { id: 5, code: "INTERNS.DESIGN", name: "Design related internships", href: "#" },
];

export default function DevResourcesPage() {
    return (
        <ResourcesSection
            headerText="Career Resources"
            sectionTitle="Resources"
            items={careerItems}
        />
    );
}
