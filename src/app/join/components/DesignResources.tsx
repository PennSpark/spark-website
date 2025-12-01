import ResourcesSection from "./ResourcesSection";

const designItems = [
    { id: 1, code: "DSGN 1020", name: "Art of the Web", href: "#" },
    { id: 2, code: "DSGN 1020", name: "Art of the Web", href: "#" },
    { id: 3, code: "DSGN 1020", name: "Art of the Web", href: "#" },
    { id: 4, code: "DSGN 1020", name: "Art of the Web", href: "#" },
    { id: 5, code: "DSGN 1020", name: "Art of the Web", href: "#" },
];

export default function DesignResourcesPage() {
    return (
        <ResourcesSection
            headerText="Design Resources"
            sectionTitle="Penn Classes"
            items={designItems}
        />
    );
}
