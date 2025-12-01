import ResourcesSection from "./ResourcesSection";

const devItems = [
    { id: 1, code: "CIS 4120", name: "Human-Computer Interaction", href: "#" },
    { id: 2, code: "CIS 4120", name: "Human-Computer Interaction", href: "#" },
    { id: 3, code: "CIS 4120", name: "Human-Computer Interaction", href: "#" },
    { id: 4, code: "CIS 4120", name: "Human-Computer Interaction", href: "#" },
    { id: 5, code: "CIS 4120", name: "Human-Computer Interaction", href: "#" },
];

export default function DevResourcesPage() {
    return (
        <ResourcesSection
            headerText="Dev Resources"
            sectionTitle="Penn Classes"
            items={devItems}
        />
    );
}
