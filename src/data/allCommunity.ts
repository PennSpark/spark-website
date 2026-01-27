// community directory database!

/* UPDATE INSTRUCTIONS:
1. add new headshot image to /public/headshots
2. add new member to HEADSHOTS object below
3. add new member to allCommunityMembers array below
* be sure to specify each new semester in the comments
*/


export type CommunityMember = {
  name: string;
  role: string;
  roleCategory:
    | "Executive Board"
    | "Project Leads"
    | "Red Designers"
    | "Red Developers"
    | "Blue Designers"
    | "Blue Developers"
    | "Mentors"
    | "Social Members";
  semester: string;
  imgSrc: string;
  linkedinUrl?: string;
};

const ANON_IMG = "/headshots/anon.png";

const HEADSHOTS: Record<string, string> = {
  "Ally Chen": "/headshots/ally-chen.jpg",
  "André van de Ven": "/headshots/andre-van-de-ven.jpg",
  "Andrei Piterbarg": "/headshots/andrei-piterbarg.jpg",
  "Andrew Chang": "/headshots/andrew-chang.jpg",
  "Angie Cao": "/headshots/angie-cao.jpeg",
  "Ani Nguyen Le": "/headshots/ani-nguyen-le.jpeg",
  "April Zhang": "/headshots/april-zhang.jpg",
  "Brianna Kwan": "/headshots/brianna-kwan.jpg",
  "Brandon Yan": "/headshots/brandon-yan.jpg",
  "Brian Lee": "/headshots/brian-lee.jpg",
  "Bryan Chung": "/headshots/bryan-chung.jpg",
  "Cindy Wei": "/headshots/cindy-wei.jpg",
  "David Lee": "/headshots/david-lee.jpeg",
  "Divyansha Nashine": "/headshots/divyansha-nashine.png",
  "Dre Davis": "/headshots/dre-davis.jpeg",
  "Eman Mohamed": "/headshots/eman-mohamed.jpg",
  "Emily Kang": "/headshots/emily-kang.jpeg",
  "Emily Tang": "/headshots/emily-tang.jpg",
  "Emmi Wu": "/headshots/emmi-wu.jpg",
  "Eric Lee": "/headshots/eric-lee.png",
  "Eric Zou": "/headshots/eric-zou.jpg",
  "Estelle Kim": "/headshots/estelle-kim.jpeg",
  "Eve Fan": "/headshots/eve-fan.jpg",
  "Fiona Herzog": "/headshots/fiona-herzog.jpg",
  "Fiona Jiang": "/headshots/fiona-jiang.jpeg",
  "Gabriel Thiessen": "/headshots/gabriel-thiessen.jpeg",
  "Gia Gupta": "/headshots/gia-gupta.png",
  "Gordon Chen": "/headshots/gordon-chen.jpg",
  "Hemosoo Woo": "/headshots/hemosoo-woo.jpg",
  "James Baker": "/headshots/james-baker.jpg",
  "James Tsaggaris": "/headshots/james-tsaggaris.png",
  "Jasmine Wang": "/headshots/jasmine-wang.png",
  "Jasper Zhu": "/headshots/jasper-zhu.jpg",
  "Jayme Chen": "/headshots/jayme-chen.jpeg",
  "Jimin Choi": "/headshots/jimin-choi.jpg",
  "Johnny Jeong": "/headshots/johnny-jeong.jpg",
  "Joyce Chen": "/headshots/joyce-chen.jpeg",
  "Joseph Dattilo": "/headshots/joseph-dattilo.jpeg",
  "Justin Xia": "/headshots/justin-xia.jpg",
  "Kashyap Chaturvedula": "/headshots/kashyap.jpg",
  "Katherine Yue": "/headshots/katherine-yue.jpeg",
  "Kei Taketsuna": "/headshots/kei-taketsuna.jpg",
  "Kevin Wei": "/headshots/kevin-wei.jpeg",
  "Lorenzo Santos": "/headshots/lorenzo-santos.jpeg",
  "Luca Picazo": "/headshots/luca-picazo.jpeg",
  "Luka Koll": "/headshots/luka-koll.jpg",
  "Luke Tong": "/headshots/luke-tong.jpg",
  "Luna Chen": "/headshots/luna-chen.jpeg",
  "Lori Brown": "/headshots/lori-brown.jpeg",
  "Mary Liu": "/headshots/mary-liu.jpg",
  "Megan Yang": "/headshots/megan-yang.jpeg",
  "Meiling Mathur": "/headshots/meiling-mathur.png",
  "Melody Zhang": "/headshots/melody-zhang.jpeg",
  "Michael Li": "/headshots/michael-li.jpeg",
  "Natalie Lim": "/headshots/natalie-lim.jpg",
  "Nick Cirillo": "/headshots/nick-cirillo.png",
  "Nond Phokasub": "/headshots/nond-phokasub.jpg",
  "Nishat Olayiwola": "/headshots/nishat-olayiwola.jpg",
  "Olivia Hu": "/headshots/olivia-hu.jpg",
  "Raelynn Cui": "/headshots/raelynn-cui.jpg",
  "Raphael Martinez": "/headshots/raphael-martinez.png",
  "Ruth Zhao": "/headshots/ruth-zhao.png",
  "Salma Bouftas": "/headshots/salma-bouftas.png",
  "Seohyun (Sam) Park": "/headshots/sam-park.png",
  "Sumanth Kadiyala": "/headshots/sumanth-kadiyala.jpg",
  "Surabhi Sharma": "/headshots/surabhi-sharma.jpg",
  "Sarah Chan": "/headshots/sarah-chan.png",
  "Seth Sukboontip": "/headshots/seth-sukboontip.jpg",
  "Sarina Fernandez-Grinshpun": "/headshots/sarina-fernandez-grinshpun.jpeg",
  "Shaurya Sarma": "/headshots/shaurya-sarma.jpg",
  "Sylvia Yu": "/headshots/sylvia-yu.jpeg",
  "Teesh Liang": "/headshots/teesh-liang.png",
  "Term Taepaisitphongse": "/headshots/term-taepaisitphongse.jpg",
  "Tina Ni": "/headshots/tina-ni.jpg",
  "Wesley Liu": "/headshots/wesley-liu.jpg",
  "Ximing Luo": "/headshots/ximing-luo.jpg",
  "Xue Jiang": "/headshots/xue-jiang.jpg",
  "Yue Zhao": "/headshots/yue-zhao.jpeg",
  "Zara Baig": "/headshots/zara-baig.jpeg",
  "Ziana Sundrani": "/headshots/ziana-sundrani.jpeg",
};

export const allCommunityMembers: CommunityMember[] = [
  // ============================================================
  // FALL 2025 – COMMUNITY DIRECTORY
  // ============================================================

  {
    name: "Meiling Mathur",
    role: "Co-President",
    roleCategory: "Executive Board",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Meiling Mathur"] ?? ANON_IMG,
    linkedinUrl: "https://www.violinmeiling.net",
  },
  {
    name: "Estelle Kim",
    role: "VP External & Project Lead",
    roleCategory: "Executive Board",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Estelle Kim"] ?? ANON_IMG,
    linkedinUrl: "https://estellekimdev.com",
  },  
  {
    name: "Jimin Choi",
    role: "Social Chair",
    roleCategory: "Executive Board",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Jimin Choi"] ?? ANON_IMG,
  },
  {
    name: "Ruth Zhao",
    role: "VP Internal",
    roleCategory: "Executive Board",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Ruth Zhao"] ?? ANON_IMG,
  },
  {
    name: "Brandon Yan",
    role: "VP Red",
    roleCategory: "Executive Board",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Brandon Yan"] ?? ANON_IMG,
  },
  {
    name: "Nishat Olayiwola",
    role: "VP Blue",
    roleCategory: "Executive Board",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Nishat Olayiwola"] ?? ANON_IMG,
  },
  {
    name: "James Tsaggaris",
    role: "Blue Developer",
    roleCategory: "Blue Developers",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["James Tsaggaris"] ?? ANON_IMG,
    linkedinUrl: "https://www.linkedin.com/in/jamestsaggaris",
  },
  {
    name: "Nick Cirillo",
    role: "Social Member",
    roleCategory: "Social Members",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Nick Cirillo"] ?? ANON_IMG,
    linkedinUrl: "https://nicholascirillo.com",
  },
  {
    name: "Luca Picazo",
    role: "Red Designer",
    roleCategory: "Red Designers",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Luca Picazo"] ?? ANON_IMG,
    linkedinUrl: "https://lucapicazo.com",
  },
  {
    name: "Emmi Wu",
    role: "Marketing Chair",
    roleCategory: "Executive Board",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Emmi Wu"] ?? ANON_IMG,
    linkedinUrl: "https://emmiwu.com",
  },
  {
    name: "Justin Xia",
    role: "Red Developer",
    roleCategory: "Red Developers",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Justin Xia"] ?? ANON_IMG,
    linkedinUrl:
      "https://www.linkedin.com/in/justin-xia-7a62b0277/",
  },
  {
    name: "Fiona Herzog",
    role: "Red Designer",
    roleCategory: "Red Designers",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Fiona Herzog"] ?? ANON_IMG,
    linkedinUrl: "https://www.linkedin.com/in/fionaherzog/",
  },
  {
    name: "Kevin Wei",
    role: "Red Developer",
    roleCategory: "Red Developers",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Kevin Wei"] ?? ANON_IMG,
    linkedinUrl: "https://kevwei.com",
  },
  {
    name: "MELODY Zhang",
    role: "Project Lead",
    roleCategory: "Project Leads",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Melody Zhang"] ?? ANON_IMG,
    linkedinUrl:
      "https://www.linkedin.com/in/melody-zhang-90605b217/",
  },
  {
    name: "Olivia Hu",
    role: "Red Developer",
    roleCategory: "Red Developers",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Olivia Hu"] ?? ANON_IMG,
    linkedinUrl: "https://www.linkedin.com/in/olivianhu/",
  },
  {
    name: "Luka Koll",
    role: "Project Lead",
    roleCategory: "Project Leads",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Luka Koll"] ?? ANON_IMG,
    linkedinUrl:
      "https://www.linkedin.com/in/luka-koll-704715274/",
  },
  {
    name: "Hemosoo Woo",
    role: "Red Developer",
    roleCategory: "Red Developers",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Hemosoo Woo"] ?? ANON_IMG,
    linkedinUrl: "https://www.linkedin.com/in/hemosoowoo/",
  },
  {
    name: "Sarina Fernandez-Grinshpun",
    role: "Blue Developer",
    roleCategory: "Blue Developers",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Sarina Fernandez-Grinshpun"] ?? ANON_IMG,
    linkedinUrl: "https://www.linkedin.com/in/sarina-fg/",
  },
  {
    name: "Katherine Yue",
    role: "Red Developer",
    roleCategory: "Red Developers",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Katherine Yue"] ?? ANON_IMG,
  },
  {
    name: "Luna Chen",
    role: "Social Member",
    roleCategory: "Social Members",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Luna Chen"] ?? ANON_IMG,
  },
  {
    name: "Natalie Lim",
    role: "Red Developer",
    roleCategory: "Red Developers",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Natalie Lim"] ?? ANON_IMG,
    linkedinUrl: "https://www.linkedin.com/in/natalie-lim1906/",
  },
  {
    name: "Bryan Chung",
    role: "Red Designer",
    roleCategory: "Red Designers",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Bryan Chung"] ?? ANON_IMG,
    linkedinUrl: "https://www.bran.organic/",
  },
  {
    name: "Salma Bouftas",
    role: "Blue Designer",
    roleCategory: "Blue Designers",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Salma Bouftas"] ?? ANON_IMG,
    linkedinUrl: "https://www.linkedin.com/in/salma-bouftas",
  },
  {
    name: "Term Taepaisitphongse",
    role: "Red Developer",
    roleCategory: "Red Developers",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Term Taepaisitphongse"] ?? ANON_IMG,
    linkedinUrl: "https://www.linkedin.com/in/pran-tae/",
  },
  {
    name: "Eman Mohamed",
    role: "Blue Developer",
    roleCategory: "Blue Developers",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Eman Mohamed"] ?? ANON_IMG,
    linkedinUrl:
      "https://www.linkedin.com/in/eman-mohamed25",
  },
  {
    name: "Seth Sukboontip",
    role: "Red Developer",
    roleCategory: "Red Developers",
    semester: "Fall 2025",
    imgSrc:
      HEADSHOTS["Seth Sukboontip"] ?? ANON_IMG,
    linkedinUrl:
      "https://www.linkedin.com/in/seth-sukboontip",
  },
  {
    name: "Nond Phokasub",
    role: "Red Designer",
    roleCategory: "Red Designers",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Nond Phokasub"] ?? ANON_IMG,
    linkedinUrl: "https://www.bynond.com",
  },
  {
    name: "Lorenzo Santos",
    role: "Blue Developer",
    roleCategory: "Blue Developers",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Lorenzo Santos"] ?? ANON_IMG,
  },
  {
    name: "Raphael Martinez",
    role: "Co-President",
    roleCategory: "Executive Board",
    semester: "Fall 2025",
    imgSrc:
      HEADSHOTS["Raphael Martinez"] ?? ANON_IMG,
  },
  {
    name: "Luke Tong",
    role: "Social Member",
    roleCategory: "Social Members",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Luke Tong"] ?? ANON_IMG,
    linkedinUrl: "https://www.lukert.me/",
  },
  {
    name: "Divyansha Nashine",
    role: "Red Developer",
    roleCategory: "Red Developers",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Divyansha Nashine"] ?? ANON_IMG,
    linkedinUrl:
      "https://www.linkedin.com/in/divyansha-nashine",
  },
  {
    name: "Ximing Luo",
    role: "Social Member",
    roleCategory: "Social Members",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Ximing Luo"] ?? ANON_IMG,
    linkedinUrl: "https://ximingluo.com",
  },
  {
    name: "Jayme Chen",
    role: "Project Lead",
    roleCategory: "Project Leads",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Jayme Chen"] ?? ANON_IMG,
    linkedinUrl: "https://linkedin.com/in/jaymechen555",
  },
  {
    name: "Emily Tang",
    role: "Blue Designer",
    roleCategory: "Blue Designers",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Emily Tang"] ?? ANON_IMG,
    linkedinUrl:
      "https://www.linkedin.com/in/emily-tang-908796380",
  },
  {
    name: "Brian Lee",
    role: "Project Lead",
    roleCategory: "Project Leads",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Brian Lee"] ?? ANON_IMG,
    linkedinUrl:
      "https://www.linkedin.com/in/brian-lee-0b706b225/",
  },
  {
    name: "Dre Davis",
    role: "Blue Developer",
    roleCategory: "Blue Developers",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Dre Davis"] ?? ANON_IMG,
    linkedinUrl:
      "https://www.linkedin.com/in/dre-davis-37up/",
  },
  {
    name: "Teesh Liang",
    role: "Blue Developer",
    roleCategory: "Blue Developers",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Teesh Liang"] ?? ANON_IMG,
  },
  {
    name: "Gia Gupta",
    role: "Project Lead",
    roleCategory: "Project Leads",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Gia Gupta"] ?? ANON_IMG,
    linkedinUrl:
      "https://www.linkedin.com/in/gia-gupta/",
  },
  {
    name: "Zara Baig",
    role: "Red Designer",
    roleCategory: "Red Designers",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Zara Baig"] ?? ANON_IMG,
    linkedinUrl:
      "https://www.linkedin.com/in/zarabaig19?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Tina Ni",
    role: "Red Developer",
    roleCategory: "Red Developers",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Tina Ni"] ?? ANON_IMG,
    linkedinUrl:
      "https://www.linkedin.com/in/tina-ni-795838284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Gordon Chen",
    role: "Red Developer",
    roleCategory: "Red Developers",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Gordon Chen"] ?? ANON_IMG,
    linkedinUrl:
      "https://www.linkedin.com/in/gchen9405",
  },
  {
    name: "Surabhi Sharma",
    role: "Red Developer",
    roleCategory: "Red Developers",
    semester: "Fall 2025",
    imgSrc:
      HEADSHOTS["Surabhi Sharma"] ?? ANON_IMG,
  },
  {
    name: "Sylvia Yu",
    role: "Blue Developer",
    roleCategory: "Blue Developers",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Sylvia Yu"] ?? ANON_IMG,
    linkedinUrl:
      "https://www.linkedin.com/in/sylvia-yu-39b270307/",
  },
  {
    name: "Ziana Sundrani",
    role: "Red Developer",
    roleCategory: "Red Developers",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Ziana Sundrani"] ?? ANON_IMG,
    linkedinUrl:
      "https://www.linkedin.com/in/ziana-sundrani/",
  },
  {
    name: "Eve Fan",
    role: "Red Designer",
    roleCategory: "Red Designers",
    semester: "Fall 2025",
    imgSrc: HEADSHOTS["Eve Fan"] ?? ANON_IMG,
    linkedinUrl:
      "https://www.linkedin.com/in/eve-fan-364337308",
  },

  // ============================================================
  // SPRING 2025 – CURRENT MEMBERS PAGE
  // ============================================================

  // Executive Board
  {
    name: "Nick Cirillo",
    role: "Co-President & Project Lead",
    roleCategory: "Executive Board",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Nick Cirillo"] ?? ANON_IMG,
    linkedinUrl: "https://www.linkedin.com/in/nicholas-cirillo-/",
  },
  {
    name: "André van de Ven",
    role: "Co-President",
    roleCategory: "Executive Board",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["André van de Ven"] ?? ANON_IMG,
    linkedinUrl: "https://www.andrevandeven.us/",
  },
  {
    name: "Meiling Mathur",
    role: "VP External",
    roleCategory: "Executive Board",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Meiling Mathur"] ?? ANON_IMG,
    linkedinUrl: "https://www.linkedin.com/in/meilingmathur/",
  },
  {
    name: "Megan Yang",
    role: "VP Internal",
    roleCategory: "Executive Board",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Megan Yang"] ?? ANON_IMG,
    linkedinUrl: "megyang@seas.upenn.edu",
  },
  {
    name: "Jasmine Wang",
    role: "VP Red",
    roleCategory: "Executive Board",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Jasmine Wang"] ?? ANON_IMG,
    linkedinUrl: "https://jasminewangux.com/",
  },
  {
    name: "Raphael Martinez",
    role: "VP Blue",
    roleCategory: "Executive Board",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Raphael Martinez"] ?? ANON_IMG,
  },
  {
    name: "Luke Tong",
    role: "Social Chair & Mentor",
    roleCategory: "Executive Board",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Luke Tong"] ?? ANON_IMG,
    linkedinUrl: "https://www.linkedin.com/in/luke-rt/",
  },
  {
    name: "Emmi Wu",
    role: "Marketing Chair & Project Lead",
    roleCategory: "Executive Board",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Emmi Wu"] ?? ANON_IMG,
  },

  // Project Leads
  {
    name: "Angie Cao",
    role: "Project Lead",
    roleCategory: "Project Leads",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Angie Cao"] ?? ANON_IMG,
    linkedinUrl:
      "https://www.linkedin.com/in/angelina-cao-78a0551a5",
  },
  {
    name: "Luna Chen",
    role: "Project Lead",
    roleCategory: "Project Leads",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Luna Chen"] ?? ANON_IMG,
    linkedinUrl:
      "https://www.linkedin.com/in/luna-chen-9246501b0/",
  },
  {
    name: "Estelle Kim",
    role: "Project Lead",
    roleCategory: "Project Leads",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Estelle Kim"] ?? ANON_IMG,
    linkedinUrl:
      "https://www.linkedin.com/in/estelle-kim-41b1b7218/",
  },
  {
    name: "Ruth Zhao",
    role: "Project Lead",
    roleCategory: "Project Leads",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Ruth Zhao"] ?? ANON_IMG,
    linkedinUrl:
      "https://www.linkedin.com/in/ruth-zhao-450446251/",
  },
  {
    name: "Shaurya Sarma",
    role: "Project Lead",
    roleCategory: "Project Leads",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Shaurya Sarma"] ?? ANON_IMG,
    linkedinUrl: "https://www.linkedin.com/in/shaurya-sarma/",
  },
  {
    name: "April Zhang",
    role: "Project Lead",
    roleCategory: "Project Leads",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["April Zhang"] ?? ANON_IMG,
  },

  // Spark Red Designers
  {
    name: "Ally Chen",
    role: "Red Designer",
    roleCategory: "Red Designers",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Ally Chen"] ?? ANON_IMG,
    linkedinUrl: "https://allychen.me/",
  },
  {
    name: "Bryan Chung",
    role: "Red Designer",
    roleCategory: "Red Designers",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Bryan Chung"] ?? ANON_IMG,
    linkedinUrl: "https://www.bran.organic/",
  },
  {
    name: "Raelynn Cui",
    role: "Red Designer",
    roleCategory: "Red Designers",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Raelynn Cui"] ?? ANON_IMG,
  },
  {
    name: "Ani Nguyen Le",
    role: "Red Designer",
    roleCategory: "Red Designers",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Ani Nguyen Le"] ?? ANON_IMG,
    linkedinUrl:
      "https://www.linkedin.com/in/ani-nguyen-le-0788a1220",
  },
  {
    name: "Brian Lee",
    role: "Red Designer",
    roleCategory: "Red Designers",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Brian Lee"] ?? ANON_IMG,
    linkedinUrl:
      "https://www.linkedin.com/in/brian-lee-0b706b225/",
  },
  {
    name: "Nond Phokasub",
    role: "Red Designer",
    roleCategory: "Red Designers",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Nond Phokasub"] ?? ANON_IMG,
    linkedinUrl: "https://bynond.com/",
  },

  // Spark Red Developers
  {
    name: "Lori Brown",
    role: "Red Developer",
    roleCategory: "Red Developers",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Lori Brown"] ?? ANON_IMG,
    linkedinUrl:
      "https://www.linkedin.com/in/lori-brown-17a653248/",
  },
  {
    name: "Andrew Chang",
    role: "Red Developer",
    roleCategory: "Red Developers",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Andrew Chang"] ?? ANON_IMG,
  },
  {
    name: "Joyce Chen",
    role: "Red Developer",
    roleCategory: "Red Developers",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Joyce Chen"] ?? ANON_IMG,
    linkedinUrl: "https://joycezchen.myportfolio.com/work",
  },
  {
    name: "Jimin Choi",
    role: "Red Developer",
    roleCategory: "Red Developers",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Jimin Choi"] ?? ANON_IMG,
    linkedinUrl: "https://jiminchoi.com",
  },
  {
    name: "Joseph Dattilo",
    role: "Red Developer",
    roleCategory: "Red Developers",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Joseph Dattilo"] ?? ANON_IMG,
    linkedinUrl: "https://www.linkedin.com/in/joe-dattilo/",
  },
  {
    name: "Fiona Jiang",
    role: "Red Developer",
    roleCategory: "Red Developers",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Fiona Jiang"] ?? ANON_IMG,
    linkedinUrl:
      "http://linkedin.com/in/fiona-jiang-62b6a31b2",
  },
  {
    name: "Xue Jiang",
    role: "Red Developer",
    roleCategory: "Red Developers",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Xue Jiang"] ?? ANON_IMG,
    linkedinUrl: "https://xue-portfolio.vercel.app/",
  },
  {
    name: "Luka Koll",
    role: "Red Developer",
    roleCategory: "Red Developers",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Luka Koll"] ?? ANON_IMG,
    linkedinUrl:
      "https://www.linkedin.com/in/luka-koll-704715274/",
  },
  {
    name: "David Lee",
    role: "Red Developer",
    roleCategory: "Red Developers",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["David Lee"] ?? ANON_IMG,
  },
  {
    name: "Natalie Lim",
    role: "Red Developer",
    roleCategory: "Red Developers",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Natalie Lim"] ?? ANON_IMG,
    linkedinUrl:
      "https://www.linkedin.com/in/natalie-lim-593953222/",
  },
  {
    name: "Ximing Luo",
    role: "Red Developer",
    roleCategory: "Red Developers",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Ximing Luo"] ?? ANON_IMG,
    linkedinUrl: "https://www.ximingluo.com",
  },
  {
    name: "Cindy Wei",
    role: "Red Developer",
    roleCategory: "Red Developers",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Cindy Wei"] ?? ANON_IMG,
    linkedinUrl:
      "https://www.linkedin.com/in/cindy-wei-7ba778227/",
  },
  {
    name: "Hemosoo Woo",
    role: "Red Developer",
    roleCategory: "Red Developers",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Hemosoo Woo"] ?? ANON_IMG,
  },
  {
    name: "Brandon Yan",
    role: "Red Developer",
    roleCategory: "Red Developers",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Brandon Yan"] ?? ANON_IMG,
    linkedinUrl: "https://www.brandonvyan.com/",
  },
  {
    name: "Katherine Yue",
    role: "Red Developer",
    roleCategory: "Red Developers",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Katherine Yue"] ?? ANON_IMG,
    linkedinUrl:
      "https://www.linkedin.com/in/katherine-yue/",
  },
  {
    name: "Eric Zou",
    role: "Red Developer",
    roleCategory: "Red Developers",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Eric Zou"] ?? ANON_IMG,
    linkedinUrl: "https://ezou626.github.io",
  },

  // Spark Blue Designers
  {
    name: "Zara Baig",
    role: "Blue Designer",
    roleCategory: "Blue Designers",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Zara Baig"] ?? ANON_IMG,
  },
  {
    name: "Nishat Olayiwola",
    role: "Blue Designer",
    roleCategory: "Blue Designers",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Nishat Olayiwola"] ?? ANON_IMG,
    linkedinUrl: "https://nishatolay.netlify.app/",
  },
  {
    name: "Luca Picazo",
    role: "Blue Designer",
    roleCategory: "Blue Designers",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Luca Picazo"] ?? ANON_IMG,
    linkedinUrl:
      "https://lkplorenzo.wixsite.com/breakeven",
  },
  {
    name: "Surabhi Sharma",
    role: "Blue Designer",
    roleCategory: "Blue Designers",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Surabhi Sharma"] ?? ANON_IMG,
  },
  {
    name: "Kevin Wei",
    role: "Blue Designer",
    roleCategory: "Blue Designers",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Kevin Wei"] ?? ANON_IMG,
    linkedinUrl: "https://kevinwei.itch.io/",
  },
  {
    name: "Melody Zhang",
    role: "Blue Designer",
    roleCategory: "Blue Designers",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Melody Zhang"] ?? ANON_IMG,
    linkedinUrl:
      "https://drive.google.com/drive/folders/15JxR0x9xpSuJKatoIyEU47xBR_9-ez3d",
  },

  // Spark Blue Developers
  {
    name: "Jayme Chen",
    role: "Blue Developer",
    roleCategory: "Blue Developers",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Jayme Chen"] ?? ANON_IMG,
  },
  {
    name: "Gia Gupta",
    role: "Blue Developer",
    roleCategory: "Blue Developers",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Gia Gupta"] ?? ANON_IMG,
  },
  {
    name: "Olivia Hu",
    role: "Blue Developer",
    roleCategory: "Blue Developers",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Olivia Hu"] ?? ANON_IMG,
    linkedinUrl: "https://github.com/olivianhu",
  },
  {
    name: "Brianna Kwan",
    role: "Blue Developer",
    roleCategory: "Blue Developers",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Brianna Kwan"] ?? ANON_IMG,
    linkedinUrl:
      "https://www.linkedin.com/in/brianna-kwan-929413228",
  },
  {
    name: "Wesley Liu",
    role: "Blue Developer",
    roleCategory: "Blue Developers",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Wesley Liu"] ?? ANON_IMG,
    linkedinUrl:
      "https://www.linkedin.com/in/wesley-liu-067518212/",
  },
  {
    name: "Seohyun (Sam) Park",
    role: "Blue Developer",
    roleCategory: "Blue Developers",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Seohyun (Sam) Park"] ?? ANON_IMG,
  },
  {
    name: "Seth Sukboontip",
    role: "Blue Developer",
    roleCategory: "Blue Developers",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Seth Sukboontip"] ?? ANON_IMG,
    linkedinUrl:
      "https://www.linkedin.com/in/seth-sukboontip/",
  },
  {
    name: "Kei Taketsuna",
    role: "Blue Developer",
    roleCategory: "Blue Developers",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Kei Taketsuna"] ?? ANON_IMG,
    linkedinUrl: "https://www.linkedin.com/in/keitsuna/",
  },

  // Mentors
  {
    name: "James Baker",
    role: "Mentor",
    roleCategory: "Mentors",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["James Baker"] ?? ANON_IMG,
    linkedinUrl:
      "https://www.linkedin.com/in/james-baker-4694b7206",
  },
  {
    name: "Kashyap Chaturvedula",
    role: "Mentor",
    roleCategory: "Mentors",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Kashyap Chaturvedula"] ?? ANON_IMG,
    linkedinUrl:
      "https://www.linkedin.com/in/kashyap-chaturvedula-596682162/",
  },
  {
    name: "Johnny Jeong",
    role: "Mentor",
    roleCategory: "Mentors",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Johnny Jeong"] ?? ANON_IMG,
    linkedinUrl:
      "https://www.linkedin.com/in/jaeheon-jeong-ab0761223",
  },
  {
    name: "Sumanth Kadiyala",
    role: "Mentor",
    roleCategory: "Mentors",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Sumanth Kadiyala"] ?? ANON_IMG,
    linkedinUrl:
      "https://www.linkedin.com/in/sumanthkadiyala/",
  },

  // Social Members
  {
    name: "Sarah Chan",
    role: "Social Member",
    roleCategory: "Social Members",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Sarah Chan"] ?? ANON_IMG,
  },
  {
    name: "Fiona Herzog",
    role: "Social Member",
    roleCategory: "Social Members",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Fiona Herzog"] ?? ANON_IMG,
  },
  {
    name: "Emily Kang",
    role: "Social Member",
    roleCategory: "Social Members",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Emily Kang"] ?? ANON_IMG,
    linkedinUrl:
      "https://www.linkedin.com/in/emily-kang-67b55b20a",
  },
  {
    name: "Eric Lee",
    role: "Social Member",
    roleCategory: "Social Members",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Eric Lee"] ?? ANON_IMG,
    linkedinUrl: "https://www.ericslee.dev",
  },
  {
    name: "Michael Li",
    role: "Social Member",
    roleCategory: "Social Members",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Michael Li"] ?? ANON_IMG,
    linkedinUrl: "https://github.com/Michaell14",
  },
  {
    name: "Mary Liu",
    role: "Social Member",
    roleCategory: "Social Members",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Mary Liu"] ?? ANON_IMG,
  },
  {
    name: "Andrei Piterbarg",
    role: "Social Member",
    roleCategory: "Social Members",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Andrei Piterbarg"] ?? ANON_IMG,
    linkedinUrl: "https://apiterbarg.com",
  },
  {
    name: "Term Taepaisitphongse",
    role: "Social Member",
    roleCategory: "Social Members",
    semester: "Spring 2025",
    imgSrc:
      HEADSHOTS["Term Taepaisitphongse"] ?? ANON_IMG,
  },
  {
    name: "Gabriel Thiessen",
    role: "Social Member",
    roleCategory: "Social Members",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Gabriel Thiessen"] ?? ANON_IMG,
    linkedinUrl: "https://github.com/bingberpbuck",
  },
  {
    name: "Yue Zhao",
    role: "Social Member",
    roleCategory: "Social Members",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Yue Zhao"] ?? ANON_IMG,
    linkedinUrl:
      "https://www.linkedin.com/in/yue-zhao-janie/",
  },
  {
    name: "Jasper Zhu",
    role: "Social Member",
    roleCategory: "Social Members",
    semester: "Spring 2025",
    imgSrc: HEADSHOTS["Jasper Zhu"] ?? ANON_IMG,
    linkedinUrl:
      "https://www.linkedin.com/in/jasper-zhu-827063193",
  },

  // ============================================================
  // FALL 2024 DIRECTORY
  // ============================================================

  // Executive Board
  {
    name: "Nick Cirillo",
    role: "Presidents",
    roleCategory: "Executive Board",
    semester: "Fall 2024",
    imgSrc: HEADSHOTS["Nick Cirillo"] ?? ANON_IMG,
  },
  {
    name: "André van de Ven",
    role: "Presidents",
    roleCategory: "Executive Board",
    semester: "Fall 2024",
    imgSrc: HEADSHOTS["André van de Ven"] ?? ANON_IMG,
  },
  {
    name: "Megan Yang",
    role: "VP Internal",
    roleCategory: "Executive Board",
    semester: "Fall 2024",
    imgSrc: HEADSHOTS["Megan Yang"] ?? ANON_IMG,
  },
  {
    name: "Meiling Mathur",
    role: "VP External",
    roleCategory: "Executive Board",
    semester: "Fall 2024",
    imgSrc: HEADSHOTS["Meiling Mathur"] ?? ANON_IMG,
  },
  {
    name: "Jasmine Wang",
    role: "VP Red",
    roleCategory: "Executive Board",
    semester: "Fall 2024",
    imgSrc: HEADSHOTS["Jasmine Wang"] ?? ANON_IMG,
  },
  {
    name: "Raphael Martinez",
    role: "VP Blue",
    roleCategory: "Executive Board",
    semester: "Fall 2024",
    imgSrc: HEADSHOTS["Raphael Martinez"] ?? ANON_IMG,
  },
  {
    name: "Luke Tong",
    role: "Social Chair",
    roleCategory: "Executive Board",
    semester: "Fall 2024",
    imgSrc: HEADSHOTS["Luke Tong"] ?? ANON_IMG,
  },
  {
    name: "Namita Sajai",
    role: "Marketing Chair",
    roleCategory: "Executive Board",
    semester: "Fall 2024",
    imgSrc: ANON_IMG,
  },

  // Spark Red – Project Leads
  ...[
    "Joyce Chen",
    "Fiona Jiang",
    "Estelle Kim",
    "Michael Li",
    "Meiling Mathur",
    "Shaurya Sarma",
    "Eric Zou",
  ].map<CommunityMember>((name) => ({
    name,
    role: "Project Leads",
    roleCategory: "Project Leads",
    semester: "Fall 2024",
    imgSrc: HEADSHOTS[name] ?? ANON_IMG,
  })),

  // Spark Red – Developers
  ...[
    "Lori Brown",
    "Angie Cao",
    "Luna Chen",
    "Luka Koll",
    "David Lee",
    "Eric Lee",
    "Andrei Piterbarg",
    "Term Taepaisitphongse",
    "Gabriel Thiessen",
    "Cindy Wei",
    "Katherine Yue",
  ].map<CommunityMember>((name) => ({
    name,
    role: "Developers",
    roleCategory: "Red Developers",
    semester: "Fall 2024",
    imgSrc: HEADSHOTS[name] ?? ANON_IMG,
  })),

  // Spark Red – Designers
  ...[
    "Sarah Chan",
    "Raelynn Cui",
    "Fiona Herzog",
    "Mary Liu",
    "Ani Nguyen Le",
    "Nond Phokasub",
    "Emmi Wu",
    "Ruth Zhao",
    "Yue Zhao",
  ].map<CommunityMember>((name) => ({
    name,
    role: "Designers",
    roleCategory: "Red Designers",
    semester: "Fall 2024",
    imgSrc: HEADSHOTS[name] ?? ANON_IMG,
  })),

  // Spark Blue – Mentors
  ...["James Baker", "Grace Thanglerdsumpan", "April Zhang"].map<
    CommunityMember
  >((name) => ({
    name,
    role: "Mentors",
    roleCategory: "Mentors",
    semester: "Fall 2024",
    imgSrc: HEADSHOTS[name] ?? ANON_IMG,
  })),

  // Spark Blue – Developers
  ...[
    "Jayme Chen",
    "Gia Gupta",
    "Olivia Hu",
    "Brianna Kwan",
    "Wesley Liu",
    "Seohyun (Sam) Park",
    "Seth Sukboontip",
    "Kei Taketsuna",
  ].map<CommunityMember>((name) => ({
    name,
    role: "Developers",
    roleCategory: "Blue Developers",
    semester: "Fall 2024",
    imgSrc: HEADSHOTS[name] ?? ANON_IMG,
  })),

  // Spark Blue – Designers
  ...[
    "Zara Baig",
    "Nishat Olayiwola",
    "Luca Picazo",
    "Surabhi Sharma",
    "Kevin Wei",
    "Melody Zhang",
  ].map<CommunityMember>((name) => ({
    name,
    role: "Designers",
    roleCategory: "Blue Designers",
    semester: "Fall 2024",
    imgSrc: HEADSHOTS[name] ?? ANON_IMG,
  })),

  // ============================================================
  // SPRING 2024 DIRECTORY
  // ============================================================

  // Executive Board
  ...[
    { role: "Directors", names: ["Haley Kang", "Paul Loh"] },
    { role: "VP Internal", names: ["André van de Ven"] },
    { role: "VP External", names: ["Grace Thanglerdsumpan"] },
    { role: "VP Red", names: ["Jasper Zhu"] },
    { role: "VP Blue", names: ["Nick Cirillo"] },
    { role: "Social Chair", names: ["Luna Chen"] },
    { role: "Marketing Chair", names: ["Joyce Chen"] },
  ].flatMap<CommunityMember>(({ role, names }) =>
    names.map((name) => ({
      name,
      role,
      roleCategory: "Executive Board",
      semester: "Spring 2024",
      imgSrc: HEADSHOTS[name] ?? ANON_IMG,
    }))
  ),

  // Spark Red – Project Leads
  ...["Jasmine Wang", "James Baker", "Eric Lee", "Luke Tong"].map<
    CommunityMember
  >((name) => ({
    name,
    role: "Project Leads",
    roleCategory: "Project Leads",
    semester: "Spring 2024",
    imgSrc: HEADSHOTS[name] ?? ANON_IMG,
  })),

  // Spark Red – Developers
  ...[
    "Fiona Jiang",
    "Joseph Dattilo",
    "Charles Jin",
    "Megan Yang",
    "Meiling Mathur",
    "Michael Li",
    "August Fu",
    "Emily Kang",
    "Angie Cao",
    "Johnny Jeong",
    "Cindy Wei",
    "Lori Brown",
    "Sumanth Kadiyala",
  ].map<CommunityMember>((name) => ({
    name,
    role: "Developers",
    roleCategory: "Red Developers",
    semester: "Spring 2024",
    imgSrc: HEADSHOTS[name] ?? ANON_IMG,
  })),

  // Spark Red – Designers
  ...["Yue Zhao", "Ani Nguyen Le", "Namita Sajai"].map<CommunityMember>(
    (name) => ({
      name,
      role: "Designers",
      roleCategory: "Red Designers",
      semester: "Spring 2024",
      imgSrc: HEADSHOTS[name] ?? ANON_IMG,
    })
  ),

  // Spark Blue – Instructors → Mentors
  ...[
    "Barbara Seyram Nhyira Agbotey",
    "Chelsea Cheng",
  ].map<CommunityMember>((name) => ({
    name,
    role: "Instructors",
    roleCategory: "Mentors",
    semester: "Spring 2024",
    imgSrc: HEADSHOTS[name] ?? ANON_IMG,
  })),

  // Spark Blue – Developers
  ...[
    "Gabriel Thiessen",
    "Katherine Yue",
    "Raphael Martinez",
    "Xue Jiang",
    "David Lee",
    "Luna Chen",
  ].map<CommunityMember>((name) => ({
    name,
    role: "Developers",
    roleCategory: "Blue Developers",
    semester: "Spring 2024",
    imgSrc: HEADSHOTS[name] ?? ANON_IMG,
  })),

  // Spark Blue – Designers
  ...["Fiona Herzog", "Nond Phokasub", "Mary Liu", "Raelynn Cui"].map<
    CommunityMember
  >((name) => ({
    name,
    role: "Designers",
    roleCategory: "Blue Designers",
    semester: "Spring 2024",
    imgSrc: HEADSHOTS[name] ?? ANON_IMG,
  })),

  // ============================================================
  // FALL 2023 DIRECTORY
  // ============================================================

  // Executive Board
  ...[
    { role: "Directors", names: ["Na Kyung Lee", "Haley Kang"] },
    { role: "VP Internal", names: ["Kashyap Chaturvedula"] },
    { role: "VP External", names: ["Grace Thanglerdsumpan"] },
    { role: "VP Red", names: ["Paul Loh"] },
    { role: "VP Blue", names: ["Matthew Cho", "Nick Cirillo"] },
    { role: "Social Chair", names: ["André van de Ven"] },
    { role: "Design Chair", names: ["Joyce Yoon"] },
  ].flatMap<CommunityMember>(({ role, names }) =>
    names.map((name) => ({
      name,
      role,
      roleCategory: "Executive Board",
      semester: "Fall 2023",
      imgSrc: HEADSHOTS[name] ?? ANON_IMG,
    }))
  ),

  // Spark Red – Developers
  ...[
    "Alyssa Nie",
    "Andrew Jiang",
    "Angie Cao",
    "Anna Xia",
    "August Fu",
    "Cindy Wei",
    "Dhatri Medarametla",
    "Emily Kang",
    "James Baker",
    "Jasper Zhu",
    "Johnny Jeong",
    "Marcel Kida",
    "Ryan De Lopez",
    "Sanya Shetty",
    "Sydney Simon",
  ].map<CommunityMember>((name) => ({
    name,
    role: "Developers",
    roleCategory: "Red Developers",
    semester: "Fall 2023",
    imgSrc: HEADSHOTS[name] ?? ANON_IMG,
  })),

  // Spark Red – Designers
  ...[
    "April Zhang",
    "Barbara Seyram Nhyira Agbotey",
    "Isabelle Gu",
    "Jason Saito",
    "Tobias Nguyen",
    "Chelsea Cheng",
    "Christiana Guan",
    "Claire Zhang",
    "Jasmine Wang",
    "Joyce Chen",
    "Joyce He",
    "Sonia Tam",
    "Nwai Alfa",
  ].map<CommunityMember>((name) => ({
    name,
    role: "Designers",
    roleCategory: "Red Designers",
    semester: "Fall 2023",
    imgSrc: HEADSHOTS[name] ?? ANON_IMG,
  })),

  // Spark Blue – Developers
  ...[
    "Defne Tim",
    "Gabriel Thiessen",
    "Katherine Yue",
    "Luna Chen",
    "David Lee",
    "Xue Jiang",
    "Raphael Martinez",
  ].map<CommunityMember>((name) => ({
    name,
    role: "Developers",
    roleCategory: "Blue Developers",
    semester: "Fall 2023",
    imgSrc: HEADSHOTS[name] ?? ANON_IMG,
  })),

  // Spark Blue – Designers
  ...["Fiona Herzog", "Nond Phokasub", "Mary Liu", "Raelynn Cui"].map<
    CommunityMember
  >((name) => ({
    name,
    role: "Designers",
    roleCategory: "Blue Designers",
    semester: "Fall 2023",
    imgSrc: HEADSHOTS[name] ?? ANON_IMG,
  })),

  // ============================================================
  // SPRING 2023 DIRECTORY
  // ============================================================

  // Executive Board
  ...[
    { role: "Directors", names: ["Andrew Jiang", "Jimmy Ren"] },
    { role: "VP Internal", names: ["Anna Xia"] },
    { role: "VP External", names: ["Janice Kim"] },
    { role: "VP Red", names: ["Subin Kim"] },
    { role: "VP Blue", names: ["Na Kyung Lee"] },
    { role: "Social Chair", names: ["Haley Kang"] },
    { role: "Communications Chair", names: ["Claire Zhang"] },
  ].flatMap<CommunityMember>(({ role, names }) =>
    names.map((name) => ({
      name,
      role,
      roleCategory: "Executive Board",
      semester: "Spring 2023",
      imgSrc: HEADSHOTS[name] ?? ANON_IMG,
    }))
  ),

  // Spark Red – Project Leads
  ...["Elyssa Chou", "Marcel Kida", "Paul Loh"].map<CommunityMember>(
    (name) => ({
      name,
      role: "Project Leads",
      roleCategory: "Project Leads",
      semester: "Spring 2023",
      imgSrc: HEADSHOTS[name] ?? ANON_IMG,
    })
  ),

  // Spark Red – Developers
  ...[
    "August Fu",
    "Cindy Wei",
    "Clyve Gassant",
    "Dhatri Medarametla",
    "Elizabeth Chou",
    "Hyun Ki Cho",
    "Kashyap Chaturvedula",
    "Marcel Kida",
    "Paul Loh",
    "Praneel Chakraborty",
    "Ryan De Lopez",
    "Yuhan Liu",
    "Haley Kang",
  ].map<CommunityMember>((name) => ({
    name,
    role: "Developers",
    roleCategory: "Red Developers",
    semester: "Spring 2023",
    imgSrc: HEADSHOTS[name] ?? ANON_IMG,
  })),

  // Spark Red – Designers
  ...[
    "Grace Thanglerdsumpan",
    "Jasper Zhu",
    "Joyce Yoon",
    "Michelle Gong",
    "Christiana Guan",
    "Joyce He",
  ].map<CommunityMember>((name) => ({
    name,
    role: "Designers",
    roleCategory: "Red Designers",
    semester: "Spring 2023",
    imgSrc: HEADSHOTS[name] ?? ANON_IMG,
  })),

  // Spark Blue – Instructors → Mentors
  ...[
    "Alyssa Nie",
    "Chelsea Cheng",
    "Eric Wang",
    "Jimmy Ren",
    "Anna Xia",
    "Christiana Guan",
    "Joyce He",
    "Janice Kim",
  ].map<CommunityMember>((name) => ({
    name,
    role: "Instructors",
    roleCategory: "Mentors",
    semester: "Spring 2023",
    imgSrc: HEADSHOTS[name] ?? ANON_IMG,
  })),

  // Spark Blue – Developers
  ...[
    "André van de Ven",
    "Emily Kang",
    "James Baker",
    "Kai Wang",
    "Nick Cirillo",
    "Nicole Zhao",
    "Razaq Aribidesi",
    "Sanya Shetty",
    "Sydney Simon",
    "Zain Khan",
  ].map<CommunityMember>((name) => ({
    name,
    role: "Developers",
    roleCategory: "Blue Developers",
    semester: "Spring 2023",
    imgSrc: HEADSHOTS[name] ?? ANON_IMG,
  })),

  // Spark Blue – Designers
  ...[
    "April Zhang",
    "Isabelle Gu",
    "Jason Saito",
    "Maliha Rahman",
    "Nwai Alfa",
    "Tobias Nguyen",
    "Yanjie Zhang",
    "Barbara Seyram Nhyira Agbotey",
  ].map<CommunityMember>((name) => ({
    name,
    role: "Designers",
    roleCategory: "Blue Designers",
    semester: "Spring 2023",
    imgSrc: HEADSHOTS[name] ?? ANON_IMG,
  })),

  // ============================================================
  // FALL 2022 DIRECTORY
  // ============================================================

  // Executive Board
  ...[
    { role: "Directors", names: ["Andrew Jiang", "Jimmy Ren"] },
    { role: "VP Internal", names: ["Ethan Zhao"] },
    { role: "VP External", names: ["Janice Kim"] },
    { role: "VP Red", names: ["Subin Kim"] },
    { role: "VP Blue", names: ["Na Kyung Lee"] },
  ].flatMap<CommunityMember>(({ role, names }) =>
    names.map((name) => ({
      name,
      role,
      roleCategory: "Executive Board",
      semester: "Fall 2022",
      imgSrc: HEADSHOTS[name] ?? ANON_IMG,
    }))
  ),

  // Spark Red – Project Leads
  ...["Anna Baringer", "Ethan Zhao", "Yuhan Liu"].map<CommunityMember>(
    (name) => ({
      name,
      role: "Project Leads",
      roleCategory: "Project Leads",
      semester: "Fall 2022",
      imgSrc: HEADSHOTS[name] ?? ANON_IMG,
    })
  ),

  // Spark Red – Developers
  ...[
    "Alyssa Nie",
    "Anna Baringer",
    "Arush Mehrotra",
    "Clyve Gassant",
    "Dhatri Medarametla",
    "Eric Wang",
    "Marcel Kida",
    "Paul Loh",
    "Rain Yan",
    "Sanya Shetty",
    "Sumanth Kadiyala",
  ].map<CommunityMember>((name) => ({
    name,
    role: "Developers",
    roleCategory: "Red Developers",
    semester: "Fall 2022",
    imgSrc: HEADSHOTS[name] ?? ANON_IMG,
  })),

  // Spark Red – Designers
  ...[
    "Allison Zhang",
    "Chelsea Cheng",
    "Christiana Guan",
    "Claire Zhang",
    "Joyce He",
    "Marcel Kida",
    "Mykaela Salvacion",
  ].map<CommunityMember>((name) => ({
    name,
    role: "Designers",
    roleCategory: "Red Designers",
    semester: "Fall 2022",
    imgSrc: HEADSHOTS[name] ?? ANON_IMG,
  })),

  // Spark Blue – Instructors → Mentors
  ...[
    "Anna Xia",
    "Chelsea Cheng",
    "Christiana Guan",
    "Joyce He",
    "Hyun Ki Cho",
    "Paul Loh",
    "Yuhan Liu",
  ].map<CommunityMember>((name) => ({
    name,
    role: "Instructors",
    roleCategory: "Mentors",
    semester: "Fall 2022",
    imgSrc: HEADSHOTS[name] ?? ANON_IMG,
  })),

  // Spark Blue – Developers
  ...["Allison Zhang", "Zain Khan"].map<CommunityMember>((name) => ({
    name,
    role: "Developers",
    roleCategory: "Blue Developers",
    semester: "Fall 2022",
    imgSrc: HEADSHOTS[name] ?? ANON_IMG,
  })),

  // Spark Blue – Designers
  ...["Dhatri Medarametla", "Yanjie Zhang"].map<CommunityMember>(
    (name) => ({
      name,
      role: "Designers",
      roleCategory: "Blue Designers",
      semester: "Fall 2022",
      imgSrc: HEADSHOTS[name] ?? ANON_IMG,
    })
  ),

  // ============================================================
  // SPRING 2022 DIRECTORY
  // ============================================================

  // Executive Board
  ...[
    { role: "Directors", names: ["Christina Lu", "Grace Jiang"] },
    { role: "VP Internal", names: ["Ethan Zhao"] },
    { role: "VP External", names: ["Janice Kim"] },
    { role: "VP Red", names: ["Andrew Jiang"] },
    { role: "VP Blue", names: ["Yuhan Liu"] },
  ].flatMap<CommunityMember>(({ role, names }) =>
    names.map((name) => ({
      name,
      role,
      roleCategory: "Executive Board",
      semester: "Spring 2022",
      imgSrc: HEADSHOTS[name] ?? ANON_IMG,
    }))
  ),

  // Spark Red – Project Leads
  ...[
    "Anna Baringer",
    "Chelsea Cheng",
    "Marcel Kida",
    "Subin Kim",
    "Yuhan Liu",
  ].map<CommunityMember>((name) => ({
    name,
    role: "Project Leads",
    roleCategory: "Project Leads",
    semester: "Spring 2022",
    imgSrc: HEADSHOTS[name] ?? ANON_IMG,
  })),

  // Spark Red – Developers
  ...[
    "Acelyn Choi",
    "Anna Xia",
    "Arush Mehrotra",
    "Claire Zhang",
    "Eric Wang",
    "Hyun Ki Cho",
    "James Ciardullo",
    "Paul Loh",
    "Sumanth Kadiyala",
  ].map<CommunityMember>((name) => ({
    name,
    role: "Developers",
    roleCategory: "Red Developers",
    semester: "Spring 2022",
    imgSrc: HEADSHOTS[name] ?? ANON_IMG,
  })),

  // Spark Red – Designers
  ...[
    "Chelsea Cheng",
    "Claire Zhang",
    "Eric Dai",
    "Joyce He",
    "Marcel Kida",
    "Olivia Zha",
    "Paul Loh",
  ].map<CommunityMember>((name) => ({
    name,
    role: "Designers",
    roleCategory: "Red Designers",
    semester: "Spring 2022",
    imgSrc: HEADSHOTS[name] ?? ANON_IMG,
  })),

  // Spark Blue – Instructors → Mentors
  ...["Jimmy Ren", "Joyce He", "Matthew Dong", "Olivia Zha"].map<
    CommunityMember
  >((name) => ({
    name,
    role: "Instructors",
    roleCategory: "Mentors",
    semester: "Spring 2022",
    imgSrc: HEADSHOTS[name] ?? ANON_IMG,
  })),

  // Spark Blue – Developers
  ...[
    "Alyssa Nie",
    "Clyve Gassant",
    "Dhatri Medarametla",
    "Na Kyung Lee",
    "Sanya Shetty",
    "Yanjie Zhang",
    "Zain Khan",
  ].map<CommunityMember>((name) => ({
    name,
    role: "Developers",
    roleCategory: "Blue Developers",
    semester: "Spring 2022",
    imgSrc: HEADSHOTS[name] ?? ANON_IMG,
  })),

  // Spark Blue – Designers
  ...[
    "Allison Zhang",
    "Christiana Guan",
    "Emily Guo",
    "Mykaela Salvacion",
    "Rain Yan",
  ].map<CommunityMember>((name) => ({
    name,
    role: "Designers",
    roleCategory: "Blue Designers",
    semester: "Spring 2022",
    imgSrc: HEADSHOTS[name] ?? ANON_IMG,
  })),

  // ============================================================
  // FALL 2021 DIRECTORY
  // ============================================================

  // Executive Board
  ...[
    { role: "Directors", names: ["Grace Jiang", "Olivia Zha"] },
    { role: "VP Internal", names: ["Jimmy Ren"] },
    { role: "VP External", names: ["Janice Kim"] },
    { role: "VP Red", names: ["Akshay Sharma"] },
    { role: "VP Blue", names: ["Elyssa Chou"] },
  ].flatMap<CommunityMember>(({ role, names }) =>
    names.map((name) => ({
      name,
      role,
      roleCategory: "Executive Board",
      semester: "Fall 2021",
      imgSrc: HEADSHOTS[name] ?? ANON_IMG,
    }))
  ),

  // Spark Red – Project Leads
  ...[
    "Acelyn Choi",
    "Anna Xia",
    "Janice Kim",
    "Marcel Kida",
    "Subin Kim",
  ].map<CommunityMember>((name) => ({
    name,
    role: "Project Leads",
    roleCategory: "Project Leads",
    semester: "Fall 2021",
    imgSrc: HEADSHOTS[name] ?? ANON_IMG,
  })),

  // Spark Red – Developers
  ...[
    "Alexander Zheng",
    "Andrew Jiang",
    "David Zhang",
    "Jiacheng Li",
    "Kevin Zhou",
    "Marcel Kida",
  ].map<CommunityMember>((name) => ({
    name,
    role: "Developers",
    roleCategory: "Red Developers",
    semester: "Fall 2021",
    imgSrc: HEADSHOTS[name] ?? ANON_IMG,
  })),

  // Spark Red – Designers
  ...[
    "Chelsea Cheng",
    "Isabel An",
    "Janice Kim",
    "Joyce He",
    "Marcel Kida",
  ].map<CommunityMember>((name) => ({
    name,
    role: "Designers",
    roleCategory: "Red Designers",
    semester: "Fall 2021",
    imgSrc: HEADSHOTS[name] ?? ANON_IMG,
  })),

  // Spark Blue – Instructors → Mentors
  ...[
    "Akshay Sharma",
    "Christina Lu",
    "Elyssa Chou",
    "Grace Jiang",
    "Janice Kim",
  ].map<CommunityMember>((name) => ({
    name,
    role: "Instructors",
    roleCategory: "Mentors",
    semester: "Fall 2021",
    imgSrc: HEADSHOTS[name] ?? ANON_IMG,
  })),

  // Spark Blue – Developers
  ...[
    "Anna Baringer",
    "Arush Mehrotra",
    "Arushi Srivastava",
    "Claire Zhang",
    "Elaine Fan",
    "Ethan Zhao",
    "Homer Wang",
    "James Ciardullo",
    "Will Liang",
    "Rain Yan",
    "Yuhan Liu",
  ].map<CommunityMember>((name) => ({
    name,
    role: "Developers",
    roleCategory: "Blue Developers",
    semester: "Fall 2021",
    imgSrc: HEADSHOTS[name] ?? ANON_IMG,
  })),

  // Spark Blue – Designers
  ...[
    "Matthew Dong",
    "Paul Kwok Eu Loh",
    "Seiyon Lee",
  ].map<CommunityMember>((name) => ({
    name,
    role: "Designers",
    roleCategory: "Blue Designers",
    semester: "Fall 2021",
    imgSrc: HEADSHOTS[name] ?? ANON_IMG,
  })),

  // ============================================================
  // SPRING 2021 DIRECTORY
  // (General Members → Social Members)
  // ============================================================

  // Executive Board
  ...[
    { role: "Directors", names: ["Grace Jiang", "Olivia Zha"] },
    { role: "VP Internal", names: ["Christina Lu"] },
    { role: "Tech Leads", names: ["Akshay Sharma", "Joochan Shin"] },
    {
      role: "Design Leads",
      names: ["Elyssa Chou", "Janice Kim"],
    },
    { role: "Social Chair", names: ["Olivia Cheng"] },
  ].flatMap<CommunityMember>(({ role, names }) =>
    names.map((name) => ({
      name,
      role,
      roleCategory: "Executive Board",
      semester: "Spring 2021",
      imgSrc: HEADSHOTS[name] ?? ANON_IMG,
    }))
  ),

  // General Members – Developers → Social Members
  ...[
    "Aarushi Singh",
    "Acelyn Choi",
    "Aditya Gupta",
    "Ahmed Laban",
    "Andrew Zhang",
    "Arushi Srivastava",
    "Aryan Nagariya",
    "Brandon Adiele",
    "Bryan Denq",
    "Charles Cheng",
    "David Zhang",
    "Egret Jin",
    "Elaine Fan",
    "Helena Zhang",
    "Janna Goliff",
    "Jimmy Ren",
    "Leon Hertzberg",
    "Logan Cho",
    "Lindsay Smith",
    "Linda Lu",
    "Maggie Yu",
    "Norman Chen",
    "Subin Kim",
    "Tinatin Kokoshvili",
    "Vishaal Kumar",
    "Wendy Wu",
    "Shelly Wu",
  ].map<CommunityMember>((name) => ({
    name,
    role: "Developers",
    roleCategory: "Social Members",
    semester: "Spring 2021",
    imgSrc: HEADSHOTS[name] ?? ANON_IMG,
  })),

  // General Members – Designers → Social Members
  ...[
    "Caroline Chin",
    "Christy Qiu",
    "Connie Lin",
    "Isabel An",
    "Julia Deng",
    "Juliana Lu",
    "Karen Zheng",
    "Kristine Lam",
    "Vivienne Chen",
  ].map<CommunityMember>((name) => ({
    name,
    role: "Designers",
    roleCategory: "Social Members",
    semester: "Spring 2021",
    imgSrc: HEADSHOTS[name] ?? ANON_IMG,
  })),
];
