export type CommunityMember = {
    name: string;
    role: string;
    roleCategory: 'Executive Board' | 'Project Leads' | 'Red Designers' | 'Red Developers' | 'Blue Designers' | 'Blue Developers' | 'Mentors' | 'Social Members';
    semester: string;
    imgSrc: string;
    linkedinUrl?: string;
};

export const allCommunityMembers: CommunityMember[] = [
    {
        name: 'Alice Johnson',
        role: 'President',
        roleCategory: 'Executive Board',
        semester: 'Spring 2024',
        imgSrc: '/community/alice-johnson.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/alicejohnson',
    },
    {
        name: 'Emily Zhang',
        role: 'Designer',
        roleCategory: 'Red Designers',
        semester: 'Fall 2023',
        imgSrc: '/community/emily-zhang.jpg',
    },
    {
        name: 'James Wilson',
        role: 'Developer',
        roleCategory: 'Red Developers',
        semester: 'Spring 2024',
        imgSrc: '/community/james-wilson.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/jameswilson',
    },
    {
        name: 'Liam Garcia',
        role: 'Mentor',
        roleCategory: 'Mentors',
        semester: 'Fall 2023',
        imgSrc: '/community/liam-garcia.jpg',
    },
    {
        name: 'Sophia Patel',
        role: 'Social Member',
        roleCategory: 'Social Members',
        semester: 'Spring 2024',
        imgSrc: '/community/sophia-patel.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/sophiapatel',
    },
    {
        name: 'William Thompson',
        role: 'Developer',
        roleCategory: 'Blue Developers',
        semester: 'Fall 2023',
        imgSrc: '/community/william-thompson.jpg',
    },
    {
        name: 'Michael Lee',
        role: 'Vice President',
        roleCategory: 'Executive Board',
        semester: 'Fall 2023',
        imgSrc: '/community/michael-lee.jpg',
    },
    {
        name: 'Bob Smith',
        role: 'Project Lead',
        roleCategory: 'Project Leads',
        semester: 'Fall 2023',
        imgSrc: '/community/bob-smith.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/bobsmith',
    },
    {
        name: 'Catherine Lee',
        role: 'Designer',
        roleCategory: 'Red Designers',
        semester: 'Spring 2024',
        imgSrc: '/community/catherine-lee.jpg',
    },
    {
        name: 'David Kim',
        role: 'Developer',
        roleCategory: 'Red Developers',
        semester: 'Fall 2023',
        imgSrc: '/community/david-kim.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/davidkim',
    },
    {
        name: 'Eva Martinez',
        role: 'Mentor',
        roleCategory: 'Mentors',
        semester: 'Spring 2024',
        imgSrc: '/community/eva-martinez.jpg',
    },
    {
        name: 'Frank Wilson',
        role: 'Social Member',
        roleCategory: 'Social Members',
        semester: 'Fall 2023',
        imgSrc: '/community/frank-wilson.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/frankwilson',
    },
    {
        name: 'Grace Chen',
        role: 'Designer',
        roleCategory: 'Blue Designers',
        semester: 'Spring 2024',
        imgSrc: '/community/grace-chen.jpg',
    },
    {
        name: 'Henry Brown',
        role: 'Developer',
        roleCategory: 'Blue Developers',
        semester: 'Fall 2023',
        imgSrc: '/community/henry-brown.jpg',
        linkedinUrl: 'https://www.linkedin.com/in/henrybrown',
    },
    {
        name: 'Isabella Davis',
        role: 'Project Lead',
        roleCategory: 'Project Leads',
        semester: 'Spring 2024',
        imgSrc: '/community/isabella-davis.jpg',      
    linkedinUrl: 'https://www.linkedin.com/in/isabelladavis',
    },
    {
        name: 'Jack Miller',
        role: 'Executive Board Member',
        roleCategory: 'Executive Board',
        semester: 'Fall 2023',
        imgSrc: '/community/jack-miller.jpg',
    },
];