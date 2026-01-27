"use client";

import { allCommunityMembers, type CommunityMember } from "../../data/allCommunity";

const SEMESTER_ORDER = [
  "Fall 2025", "Spring 2025",
  "Fall 2024", "Spring 2024",
  "Fall 2023", "Spring 2023",
  "Fall 2022", "Spring 2022",
] as const;

const SEMESTER_INDEX = Object.fromEntries(
  SEMESTER_ORDER.map((s, i) => [s, i])
) as Record<string, number>;

function compareSemestersDesc(a: string, b: string) {
  const ia = SEMESTER_INDEX[a];
  const ib = SEMESTER_INDEX[b];
  if (ia !== undefined && ib !== undefined) return ia - ib; // array is newest→oldest
  if (ia !== undefined) return -1;
  if (ib !== undefined) return 1;

  // fallback: newer years / seasons first if ever outside the list
  const [sa, ya] = a.split(" ");
  const [sb, yb] = b.split(" ");
  if (+ya !== +yb) return +yb - +ya;
  const rank = (s: string) => (s === "Fall" ? 2 : 1);
  return rank(sb) - rank(sa);
}

// Group members inside a card by their `role`
function groupByRole(list: CommunityMember[]) {
  return list.reduce<Record<string, CommunityMember[]>>((acc, m) => {
    (acc[m.role] ??= []).push(m);
    return acc;
  }, {});
}

// Buckets: map multiple roleCategories into one visible card
const BUCKETS: {
  key: string;
  label: string;
  categories: CommunityMember["roleCategory"][];
}[] = [
  {
    key: "exec",
    label: "Executive Board",
    categories: ["Executive Board"],
  },
  {
    key: "spark-red",
    label: "Spark Red",
    // Project Leads are grouped into Spark Red
    categories: ["Project Leads", "Red Designers", "Red Developers"],
  },
  {
    key: "spark-blue",
    label: "Spark Blue",
    categories: ["Blue Designers", "Blue Developers"],
  },
  {
    key: "mentors",
    label: "Mentors",
    categories: ["Mentors"],
  },
  {
    key: "social",
    label: "Social Members",
    categories: ["Social Members"],
  },
];

export default function DirectoryGrid() {
  // group everything by semester first
  const bySemester = allCommunityMembers.reduce<
    Record<string, CommunityMember[]>
  >((acc, m) => {
    (acc[m.semester] ??= []).push(m);
    return acc;
  }, {});

  const semesters = Object.keys(bySemester).sort(compareSemestersDesc);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 md:px-8 text-left">
      <h2
        className="mb-8 bold"
        style={{
          fontFamily: "'Hanken Grotesk', 'Inter', 'Karla', sans-serif",
        }}
      >
        Member Directory
      </h2>

      {semesters.map((sem) => {
        const members = bySemester[sem];
        const sections = BUCKETS.map((bucket) => {
          const list = members.filter((m) =>
            bucket.categories.includes(m.roleCategory)
          );
          if (!list.length) return null;
          return { bucket, list };
        }).filter(Boolean) as { bucket: (typeof BUCKETS)[number]; list: CommunityMember[] }[];

        if (!sections.length) return null;

        return (
          <section key={sem} className="mb-16 w-full">
            <h3 className='uppercase'>
              {sem}
            </h3>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {sections.map(({ bucket, list }) => {
                const roleGroups = groupByRole(list);

                return (
                  <article
                    key={bucket.key}
                    className="border-box p-8 text-left"
                  >
                    <h3 style={{color: bucket.key === 'spark-red' ? '#EB5757' : bucket.key === 'spark-blue' ? '#2F80ED' : '#000'}} className="mb-4">
                      {bucket.label}
                    </h3>

                    <ul className="list-none text-xs">
                      {Object.entries(roleGroups)
                        .sort(([ra], [rb]) => ra.localeCompare(rb))
                        .map(([role, people]) => (
                          <li key={role}>
                            <span className="font-semibold">{role}:</span>{" "}
                            {people
                              .map((p) => p.name)
                              .sort()
                              .join(", ")}
                          </li>
                        ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
