/* Resume content lives here so updates do not require editing layout markup. */
const RESUME_DATA = {
    profile: {
        name: "Kapil Sinha",
        fullName: "Kapil Kumar Sinha",
        nameDisplay: "KAPIL SINHA",
        credential: "PhD",
        degrees: "B.Arch, M.Tech, Ph.D.",
        title: "Ph.D. | Building Science",
        roleLine: "Researcher and Academic",
        location: "Bhopal, Madhya Pradesh, India",
        address: "Bhopal, Madhya Pradesh, India",
        pdfHref: "CVDetailed_KapilPD.pdf",
        appHref: "https://kapils16.github.io/AppHomePage/",
        appTitle: "Web Apps",
        appSubtitle: "Interactive Building Science Tools"
    },

    navigation: [
        { id: "about", label: "About" },
        { id: "education", label: "Education" },
        { id: "experience", label: "Experience" },
        { id: "research", label: "Research & Patent" },
        { id: "publications", label: "Publications" },
        { id: "awards", label: "Honors" },
        { id: "skills", label: "Technical Skills" },       
        { id: "contact", label: "Contact" }
    ],

    sectionOrder: [
        "about",
        "education",
        "experience",
        "research",
        "publications",
        "awards",
        "skills",        
        "contact"
    ],

    about: {
        eyebrow: "RESEARCH PHILOSOPHY",
        headlinePrefix: "Bridging architectural tradition and technology through",
        headlineAccent: "interdisciplinary innovation.",
        summary: "Specializing in transient thermal comfort, indoor environmental quality, and energy efficiency in buildings. My research integrates advanced sensing, human comfort models, agent-based crowd simulation, and building performance analysis to optimize terminal environments.",
        highlights: [
            "Thermal Comfort",
            "Indoor Environment Quality",
            "Energy Efficiency in Buildings",
            "Human Centric Design",
            "Crowd Simulations",
            "ISO 7730 Compliance",
            "Bio-Heat Transfer Models",
            "PMV-PPD Analysis"
        ],
        philosophy: "I approach complex building science questions through interdisciplinary innovation, moving across architecture, electronics, simulation, and human physiology when the research problem requires it."
    },

    education: [
        {
            degree: "Ph.D. in Architecture and Planning",
            institution: "Indian Institute of Technology Roorkee",
            period: "2018 - 2024",
            detail: "Thesis: \"Studies on transient thermo-physiological response of passengers in airport terminal buildings.\"",
            supervision: "Supervised by Prof. E. Rajasekar & Prof. Mahua Mukherjee",
            featured: false
        },
        {
            degree: "Visiting Scholar (Ph.D.)",
            institution: "University of Bath, UK",
            period: "June - September 2022",
            detail: "Topic: \"Evaluation of thermo-physiological responses in terminal buildings.\"",
            supervision: "Advised by Dr. Sukumar Natarajan & Dr. E. Rajasekar"
        },
        {
            degree: "M.Tech in Transportation Systems",
            institution: "IIT Roorkee | CGPA: 9.06",
            period: "2015 - 2017",
            detail: "Dissertation: \"Evaluation of underground metro stations based on thermal comfort.\"",
            supervision: "Supervised by Dr. E. Rajasekar"
        },
        {
            degree: "B.Arch in Architecture",
            institution: "School of Planning and Architecture Bhopal | CGPA: 7.16",
            period: "2010 - 2015"
        }
    ],

    experience: [
        {
            label: "CURRENT STATUS",
            title: "Assistant Professor",
            organization: "Chandigarh University, University Institute of Architecture",
            location: "Chandigarh",
            period: "July 2024 - Present",
            highlights: []
        },
        {
            title: "Assistant Professor (on contract)",
            organization: "School of Planning and Architecture, Department of Architecture",
            period: "October 2023 - April 2024",
            highlights: []
        },
        {
            title: "Senior Research Fellow",
            organization: "Indian Institute of Technology Roorkee, Department of Architecture and Planning",
            period: "December 2020 - June 2021; October 2021 - January 2022",
            project: "DST, Government of India: Smart performance roadmap for airport terminal buildings in India",
            highlights: [
                "Created a thermo-physiological model for passengers.",
                "Created an energy model for an airport terminal building.",
                "Developed an occupancy-based control algorithm for HVAC systems.",
                "Prepared the final report, authored a white paper, and produced a short project video."
            ]
        },
        {
            title: "Junior Research Fellow",
            organization: "Indian Institute of Technology Roorkee, Department of Architecture and Planning",
            period: "September 2017 - May 2020",
            project: "DST, Government of India: Smart performance roadmap for airport terminal buildings in India",
            highlights: [
                "Developed a model for managing passenger flow at the airport.",
                "Carried out passenger surveys and environmental measurements.",
                "Coordinated project meetings with stakeholders, including AAI and CDAC.",
                "Conducted experimental studies on human subjects in climate-controlled chambers."
            ]
        }
    ],

    research: [
        {
            tag: "Patent No. 566975",
            title: "Human Thermal Stress Assessment Kit",
            description: "Device and method for human thermal stress assessment using a wearable kit.",
            meta: "Inventors: K. Sinha, G. Subramanian, S. Krishnan, E. Rajasekar",
            variant: "accent"
        },
        {
            tag: "International Collaboration",
            title: "CREST Bursary | University of Bath",
            description: "Evaluated thermo-physiological responses in terminal buildings during a research stay in the United Kingdom (2022).",
            variant: "standard"
        },
        {
            tag: "Research Vision",
            title: "Personalized and Local Thermal Comfort",
            description: "Ongoing interest in transient comfort, thermo-physiological modelling, local body-part comfort, and human-environment thermal interaction across radiative, convective, evaporative, and respiratory heat exchanges.",
            variant: "standard"
        }
    ],

    awards: [
        {
            title: "CREST Bursary",
            year: "2022",
            description: "Research stay at the University of Bath, UK."
        },
        {
            title: "World Architecture Festival",
            year: "2014",
            description: "Finalist, Student Charrette at Singapore."
        },
        {
            title: "IGBC Student Design Competition",
            year: "2013",
            description: "Third position, organized by Indian Green Building Council."
        }
    ],

    internships: [
        {
            title: "Trainee Architect",
            organization: "Larsen & Toubro Limited, Construction Division, Hyderabad",
            period: "May - June 2016",
            highlights: [
                "Prepared working drawings and BOQs.",
                "Supported design activities for metro station work."
            ]
        },
        {
            title: "Trainee Architect",
            organization: "Shilanyas Design Consultants, Ahmedabad",
            period: "January - June 2014",
            highlights: [
                "Prepared construction drawings and BOQs.",
                "Coordinated with consultants and engineers."
            ]
        }
    ],

    skills: [
        
        {
            group: "Building and Simulation",
            items: ["EnergyPlus", "AnyLogic", "TAI Therm", "Climate Consultant", "Rhino-Grasshopper"]
        },
        {
            group: "Architecture and BIM",
            items: ["AutoCAD", "Revit", "ArchiCAD"]
        },
        {
            group: "Data and Statistics",
            items: ["OriginPro", "SPSS", "Minitab"]
        },
        {
            group: "Hardware and Prototyping",
            items: ["Arduino", "Raspberry Pi", "Node-RED", "3D Printing", "VR Development"]
        },
        {
            group: "Creative Tools",
            items: ["Photoshop", "Illustrator", "InDesign", "After Effects", "Premiere Pro"]
        },
        {
            group: "Programming",
            items: ["Python"]
        }
    ],

    publicationFilters: [
        { key: "all", label: "All" },
        { key: "journal", label: "Journals" },
        { key: "conference", label: "Conferences" }
    ],

    publications: [
        {
            category: "journal",
            venue: "Building and Environment",
            title: "Evaluating the dynamics of occupancy heat gains in a mid-sized airport terminal through agent-based modelling",
            authors: "K. Sinha, N. Ali, E. Rajasekar",
            year: "2021",
            href: "https://doi.org/10.1016/j.buildenv.2021.108147",
            linkLabel: "DOI Link"
        },
        {
            category: "journal",
            venue: "Journal of Air Transport Management",
            title: "Functional efficiency in airport terminals: A review on Overall and Stratified Service Quality",
            authors: "A. Thampan, K. Sinha, B.R. Gurjar, E. Rajasekar",
            year: "2020",
            href: "https://doi.org/10.1016/j.jairtraman.2020.101837",
            linkLabel: "DOI Link"
        },
        {
            category: "journal",
            venue: "Building and Environment",
            title: "Thermal comfort evaluation of an underground metro station in New Delhi using agent-based modelling",
            authors: "K. Sinha, E. Rajasekar",
            year: "2020",
            href: "https://doi.org/10.1016/j.buildenv.2020.106924",
            linkLabel: "DOI Link"
        },
        {
            category: "conference",
            venue: "IBPSA Rome",
            title: "An Agent-based dynamic occupancy schedule model for prediction of HVAC energy demand",
            authors: "K. Sinha, N. Ali, E. Rajasekar",
            year: "2019",
            href: "http://www.ibpsa.org/proceedings/BS2019/BS2019_211133.pdf",
            linkLabel: "Paper Link"
        },
        {
            category: "conference",
            venue: "Windsor Conference",
            title: "Assessment of transient thermal comfort characteristics in an underground metro station",
            authors: "K. Sinha, E. Rajasekar",
            year: "2018",
            href: "https://windsorconference.com/wp-content/uploads/2018/05/W18_PROCEEDINGS.pdf",
            linkLabel: "Paper Link"
        }
    ],

    invitedLectures: [
        {
            title: "Application of agent-based modelling for thermal comfort and energy efficiency studies in airport terminal buildings",
            event: "AnyLogic Indian User Conference",
            location: "Bangalore, India",
            year: "2019"
        }
    ],

    affiliations: [
        {
            title: "Council of Architecture, India",
            detail: "Registered Architect, CA/2016/75300",
            period: "2016 - Present"
        }
    ],

       

    contactLinks: [
        {
            type: "mail",
            label: "kapil.k.sinha@gmail.com",
            href: "mailto:kapil.k.sinha@gmail.com"
        },
        {
            type: "linkedin",
            label: "LinkedIn Profile",
            href: "https://www.linkedin.com/in/kapil-sinha-32642378/"
        },
        {
            type: "scholar",
            label: "Google Scholar",
            href: "https://scholar.google.com/citations?user=f8NgAwUAAAAJ&hl=en"
        },
        {
            type: "profile",
            label: "ResearchGate",
            href: "https://www.researchgate.net/profile/Kapil-Sinha?ev=hdr_xprf"
        }
    ],

    footer: {
        copyright: "&copy; Kapil Sinha, All Rights Reserved."
    }
};
