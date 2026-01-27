import { assetUrl } from "../../utils";

import { allCommunityMembers, type CommunityMember } from "../../data/allCommunity";

const ROLE_ORDER: CommunityMember["roleCategory"][] = [
  "Executive Board",
  "Project Leads",
  "Red Designers",
  "Red Developers",
  "Blue Designers",
  "Blue Developers",
  "Mentors",
  "Social Members",
];

const SEMESTER_ORDER = [
  "Fall 2025"
] as const;

type SemesterValue = (typeof SEMESTER_ORDER)[number];

const SEMESTER_INDEX = Object.fromEntries(
  SEMESTER_ORDER.map((s, i) => [s, i])
) as Record<string, number>;

function compareSemestersDesc(a: string, b: string) {
  const ia = SEMESTER_INDEX[a];
  const ib = SEMESTER_INDEX[b];
  if (ia !== undefined && ib !== undefined) return ia - ib; // array is newest→oldest
  if (ia !== undefined) return -1;
  if (ib !== undefined) return 1;
  // fallback: newer years/seasons first if ever outside the list
  const [sa, ya] = a.split(" "); const [sb, yb] = b.split(" ");
  if (+ya !== +yb) return +yb - +ya;
  const rank = (s: string) => (s === "Fall" ? 2 : 1);
  return rank(sb) - rank(sa);
}

function prettySemesterTitle(s: string) {
  const [season, yearStr] = s.split(" ");
  return `${season} ’${yearStr.slice(-2)} Members`;
}

type Props = {
  semester?: string;
};

export default function CommunityGrid({ semester }: Props) {
  const source = semester
    ? allCommunityMembers.filter((m) => m.semester === semester)
    : allCommunityMembers.filter((m) =>
        SEMESTER_ORDER.includes(m.semester as SemesterValue)
      );

  const bySemester = source.reduce<Record<string, CommunityMember[]>>(
    (acc, m) => {
      (acc[m.semester] ??= []).push(m);
      return acc;
    },
    {}
  );

  const semesters = Object.keys(bySemester).sort(compareSemestersDesc);
  return (
    <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
      {semesters.map((sem) => {
        const members = bySemester[sem];

        const byRole = members.reduce<Record<CommunityMember["roleCategory"], CommunityMember[]>>(
          (acc, m) => {
            (acc[m.roleCategory] ??= []).push(m);
            return acc;
          },
          {} as Record<CommunityMember["roleCategory"], CommunityMember[]>
        );

        const sections = ROLE_ORDER
          .filter((cat) => (byRole[cat]?.length ?? 0) > 0)
          .map((cat) => [cat, byRole[cat]!] as const);

        return (
          <section key={sem} className="mb-16 flex flex-col justify-start items-start"
          >
            <h2 className="mb-6 bold" style={{ fontFamily: "'Hanken Grotesk', 'Inter', 'Karla', sans-serif" }}>
              {prettySemesterTitle(sem)}
            </h2>

            {sections.map(([category, list]) => (
              <div key={category} className="w-full mb-10 flex flex-col justify-start items-start">
                <h4 className="mb-4 w-full text-left bg-neutral-100">
                  {category}
                </h4>

                <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-14 text-left">
                  {list
                    .slice()
                    .sort((a, b) => a.role.localeCompare(b.role) || a.name.localeCompare(b.name))
                    .map((m) => (
                      <li key={`${m.name}-${m.role}`} className="flex flex-col items-start">
                        <a
                          href={m.linkedinUrl || undefined}
                          target={m.linkedinUrl ? "_blank" : undefined}
                          rel={m.linkedinUrl ? "noopener noreferrer" : undefined}
                          className="group focus:outline-none"
                        >
                          <span className="relative block w-28 sm:w-32 lg:w-36 aspect-square rounded-[22px] bg-neutral-200 overflow-hidden transition-shadow duration-200 group-hover:shadow-md">
                            {m.imgSrc && (
                              <img
                                src={assetUrl("/community-images" + m.imgSrc)} 
                                alt={m.name}
                                className="object-cover"
                                sizes="(min-width:1024px) 9rem, (min-width:640px) 8rem, 7rem"
                              />
                            )}
                          </span>
                        </a>

                        <p className="w-28 sm:w-32 lg:w-36 mt-3 bold">{m.name}</p>
                        <p className="w-28 sm:w-32 lg:w-36 text-xs text-neutral-500">{m.role}</p>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </section>
        );
      })}
    </div>
  );
}
