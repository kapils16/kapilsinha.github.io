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
        { id: "research-highlights", label: "Research Highlights" },
        { id: "research", label: "Patent" },
        { id: "publications", label: "Publications" },
        { id: "education", label: "Education" },
        { id: "experience", label: "Experience" },        
        { id: "awards", label: "Awards" },
        { id: "skills", label: "Technical Skills" },       
        { id: "contact", label: "Contact" }
    ],

    sectionOrder: [
        "about",
        "researchHighlights",
        "research",
        "publications",
        "education",
        "experience",        
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
        philosophy: "I approach complex building science questions through interdisciplinary innovation, moving across architecture, electronics, simulation, and human physiology when the research problem requires it.",
        thermalDiagramSvg: `<svg viewBox="0 0 200 240" class="w-full max-w-[280px] opacity-90 drop-shadow-[0_0_15px_rgba(249,115,22,0.2)]" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 30c-6 0-11 5-11 11s5 11 11 11 11-5 11-11-5-11-11-11zm-25 30c-10 0-18 8-18 18v50h12V80h6v120h20v-60h10v60h20V80h6v48h12V78c0-10-8-18-18-18H75z" fill="none" stroke="#f97316" stroke-width="0.75" stroke-dasharray="4 2"/>
            <circle cx="100" cy="41" r="2" fill="#f97316" /> <circle cx="100" cy="100" r="2" fill="#f97316" /> <circle cx="130" cy="110" r="2" fill="#f97316" />
            <line x1="102" y1="41" x2="160" y2="41" stroke="#f97316" stroke-width="0.5" stroke-dasharray="2 1" />
            <text x="165" y="44" fill="#f97316" class="mono text-[8px] font-bold">BRAIN (Tcr)</text>
            <line x1="132" y1="110" x2="160" y2="140" stroke="#f97316" stroke-width="0.5" stroke-dasharray="2 1" />
            <text x="165" y="145" fill="#f97316" class="mono text-[8px] font-bold">SKIN TEMP (Tsk)</text>
            <path d="M60 90 Q 30 90 30 70" fill="none" stroke="#f97316" stroke-width="0.5" marker-end="url(#arrow)"/>
            <text x="5" y="65" fill="#f97316" class="mono text-[7px]">CONVECTION (C)</text>
            <path d="M60 140 Q 30 140 30 160" fill="none" stroke="#f97316" stroke-width="0.5" marker-end="url(#arrow)"/>
            <text x="5" y="172" fill="#f97316" class="mono text-[7px]">EVAPORATION (E)</text>
            <defs><marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#f97316" /></marker></defs>
        </svg>`
    },

    /* Research highlight panels combine compact narrative with canvas-based technical sketches. */
    researchHighlights: {
        eyebrow: "RESEARCH HIGHLIGHTS",
        headline: "Applied models for people, heat, and terminal performance.",
        panels: [
            {
                visual: "thermal",
                tag: "Thermo-physiological response",
                title: "Transient comfort in terminal environments",
                description: "Studies passenger response under changing thermal conditions by linking body-part temperature, sensation, exposure duration, and indoor environmental measurements.",
                metrics: ["Tcr / Tsk", "PMV-PPD", "Local comfort"],
                svg: `<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" aria-label="Thermal comfort visualization">
                    <rect width="220" height="220" fill="#09090b"/>
                    <circle cx="83.6" cy="59.4" r="16" fill="none" stroke="rgba(249,115,22,0.85)" stroke-width="1.5" stroke-dasharray="4 4"/>
                    <line x1="83.6" y1="75.4" x2="83.6" y2="158.4" stroke="rgba(249,115,22,0.85)" stroke-width="1.5" stroke-dasharray="4 4"/>
                    <line x1="47.6" y1="99" x2="119.6" y2="99" stroke="rgba(249,115,22,0.85)" stroke-width="1.5" stroke-dasharray="4 4"/>
                    <line x1="83.6" y1="158.4" x2="55.6" y2="189.2" stroke="rgba(249,115,22,0.85)" stroke-width="1.5" stroke-dasharray="4 4"/>
                    <line x1="83.6" y1="158.4" x2="111.6" y2="189.2" stroke="rgba(249,115,22,0.85)" stroke-width="1.5" stroke-dasharray="4 4"/>
                    <circle cx="61.6" cy="105.6" r="4" fill="#f97316"/>
                    <circle cx="83.6" cy="123.2" r="4" fill="#fb923c"/>
                    <circle cx="105.6" cy="140.8" r="4" fill="#fdba74"/>
                    <polyline points="121,127.6 126,118.6 130.9,110 135.9,106 140.8,106.2 145.7,110.6 150.7,117.6 155.6,124.9 160.6,131.2 165.5,133.7 170.5,132.4 175.4,124.3 180.4,114.3 185.3,103.3 190.3,92 195.2,91.3 200.2,125.5" fill="none" stroke="rgba(251,146,60,0.95)" stroke-width="2"/>
                    <text x="123" y="62" fill="rgba(249,115,22,0.85)" font-size="10" font-family="Roboto Mono,monospace">Tsk response</text>
                    <text x="50" y="209" fill="rgba(249,115,22,0.85)" font-size="10" font-family="Roboto Mono,monospace">sensor nodes</text>
                </svg>`
            },
            {
                visual: "occupancy",
                tag: "Occupancy-energy interaction",
                title: "Agent-based schedules for HVAC demand",
                description: "Connects passenger movement, heat gains, and terminal zones to understand when occupancy changes should influence energy and comfort decisions.",
                metrics: ["Agent flow", "Heat gains", "Control logic"],
                svg: `<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" aria-label="Occupancy visualization">
                    <rect width="220" height="220" fill="#09090b"/>
                    <rect x="26.4" y="39.6" width="105.6" height="127.6" fill="none" stroke="rgba(249,115,22,0.75)" stroke-width="1.5"/>
                    <line x1="84.5" y1="39.6" x2="84.5" y2="167.2" stroke="rgba(249,115,22,0.35)" stroke-width="1"/>
                    <line x1="26.4" y1="103.4" x2="132" y2="103.4" stroke="rgba(249,115,22,0.35)" stroke-width="1"/>
                    <circle cx="49.6" cy="80.4" r="4" fill="#f97316"/>
                    <circle cx="64.4" cy="93.2" r="4" fill="#fb923c"/>
                    <circle cx="77.1" cy="121.3" r="4" fill="#f97316"/>
                    <circle cx="98.2" cy="84.3" r="4" fill="#fb923c"/>
                    <circle cx="108.8" cy="123.8" r="4" fill="#f97316"/>
                    <polyline points="145.2,132.2 153.4,133.4 161.5,141.1 169.7,132.7 177.9,121.5 186.1,134.3 194.2,160.7 202.4,170.8" fill="none" stroke="rgba(251,146,60,0.9)" stroke-width="2"/>
                    <text x="26.4" y="189.2" fill="rgba(249,115,22,0.85)" font-size="10" font-family="Roboto Mono,monospace">agent zones</text>
                    <text x="145.2" y="79.2" fill="rgba(249,115,22,0.85)" font-size="10" font-family="Roboto Mono,monospace">HVAC load</text>
                </svg>`
            }
        ]
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
            organization: "School of Planning and Architecture Bhopal, Department of Architecture",
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
            variant: "accent",
            svg: `<svg width="200" height="200" viewBox="100 0 20 170" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#f97316" stroke-width="1.8">
                    <ellipse cx="100" cy="32" rx="10" ry="12"/>
                    <path d="M100 44v8m-15 0q15-4 30 0l3 48q-18 10-36 0Z"/>
                    <path d="M85 60Q65 75 60 95m55-35q20 15 25 35m-50 5q-5 30-5 55m25-55q5 30 5 55m-35 0h10m20 0h10"/>
                    <circle cx="110" cy="32" r="2.5" fill="#f97316"/>
                    <circle cx="100" cy="52" r="2.5" fill="#f97316"/>
                    <circle cx="100" cy="80" r="2.5" fill="#f97316"/>
                    <circle cx="60" cy="95" r="2.5" fill="#f97316"/>
                    <circle cx="85" cy="140" r="2.5" fill="#f97316"/>
                    <path d="M140 70h28v28h-28z"/>
                    <path stroke-dasharray="2,3" d="m110 32 30 38m-40-18 40 23m-40 5 40 5M60 95l80-5m-55 50 55-45"/>
                    </svg>`
        },
        /*{
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
        }*/
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
