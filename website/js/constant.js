var company = "Golden Buzzer Solar Power";
var companyShort = "Golden Buzzer Solar Power Engineering Services";


var items_company = ["top-nav"];

const NAV_ITEMS = [
    { name: "Home", link: "index.html", active: true },
    { name: "Services", link: "services.html" },
    { name: "Projects", link: "#" },
    { name: "About", link: "index.html#aboutdiv" },
    { name: "Resources", link: "#" },
    { name: "Contact", link: "contact.html" }
];

const FOOTER = {
    companyName: "Golden Buzzer Solar Power Engineering Services",
    description:
        "Golden Buzzer Solar is supported by an engineering team with over 10 years of hands-on experience in the solar industry.",

    social: [
        { icon: "icon-twitter", link: "#" },
        { icon: "icon-facebook", link: "#" },
        { icon: "icon-instagram", link: "#" }
    ],

    information: [
        { name: "Testimonials", link: "#" },
        { name: "Ideal Client Profile", link: "company-overview.html#idealclient" },
    ],

    links: [
        { name: "Home", link: "index.html" },
        { name: "Services", link: "services.html" },
        { name: "Projects", link: "#" },
        { name: "About", link: "index.html#aboutdiv" },
        { name: "Resources", link: "#" },
        { name: "Contact", link: "contact.html" }
    ],

    contact: {
        address:
            "2nd Flr. Unit D. Golden Buzzer Building E. Monserrate corner J. Cabarrus St. BF homes Parañaque 1720 City Metro Manila.",
        phone: "0920 512 7938",
        email: "inquiries@goldenbuzzer-solarpower.com.ph"
    }
};

const PARTNERS = [
    {
        name: "Thornova Solar",
        image: "images/gbimages/thornova.jpg",
        title: "Solar Partners",
        why: `Not every project requires premium pricing — but every project requires reliability.
Thornova Solar is used when balanced performance is needed without compromising system stability or lifecycle expectations.`,
        protects: `Paying for efficiency gains that do not translate to usable energy, and
Budget-driven compromises that reduce long-term system lifespan.`
    },

    {
        name: "AIKO Solar",
        image: "images/gbimages/AIKO.jpg",
        title: "Solar Partners",
        why: `When roof space is limited, design inefficiencies become costly. AIKO’s high-efficiency cell technology allows us to meet load targets without overcomplicating system architecture.`,
        protects: `Undersized systems due to roof constraints, and Forced design compromises that reduce usable power.`
    },

    {
        name: "Jinko Solar",
        image: "images/gbimages/Jinko.jpg",
        title: "Solar Partners",
        why: `We deploy Jinko Solar modules in projects where system predictability and long-term output stability are critical.`,
        protects: `Uneven panel aging across arrays, Output degradation occurring faster than projected, and systems underperforming despite correct initial sizing.`
    },

    {
        name: "AE Solar",
        image: "images/gbimages/AESolar.jpeg",
        title: "Solar Partners",
        why: `AE Solar modules are selected for environments where heat, humidity, and mounting stress are significant risk factors.`,
        protects: `Hot-spot formation, Moisture-related degradation, and premature panel replacement due to environmental stress.`
    },
    {
        name: "SUNGROW",
        image: "images/gbimages/sungrow.jpg",
        title: "HYBRID INVERTER PARTNER",
        why: `Most hybrid system failures occur at the inverter level. We use SUNGROW because of its proven stability, robust battery communication, and performance under real-world operating conditions — not just laboratory ratings.`,
        protects: `Battery disconnections during load spikes, Inverter instability during grid outages, Systems that function only under ideal conditions.`
    },

    {
        name: "LVFU LiFePO4",
        image: "images/gbimages/LVFULiFePO4.jpg",
        title: "ENERGY STORAGE PARTNERS",
        why: `Battery system issues are rarely about capacity alone — they are about coordination. LVFU is used when precise BMS communication and inverter compatibility are critical to hybrid system performance.`,
        protects: `Random battery cut-offs, Mismatched charge and discharge behavior, and Premature battery stress and degradation.`
    },

    {
        name: "Dyness LiFePO4",
        image: "images/gbimages/dyness.jpg",
        title: "ENERGY STORAGE PARTNERS",
        why: `Future energy growth is often underestimated. Dyness is selected when modular scalability and predictable expansion are required without system redesign.`,
        protects: `Replacing batteries instead of expanding capacity, and System reconfiguration when energy usage increases.`
    },

    {
        name: "Clenergy Solar Railings",
        image: "images/gbimages/clenergy.jpg",
        title: "MOUNTING / RAILINGS PARTNER",
        why: `Roof-friendly, lightweight, adaptable, load-compliant, space-efficient, secure, and long-lasting mounting systems designed for various rooftop types.`,
        protects: `Poor roof compatibility, structural instability, corrosion issues, and complex installations that increase project risk.`
    }
];


const EXECUTIVES = [
    {
        name: "Ismael C. Nabong",
        position: "Director",
        image: "images/gbimages/executives/director-1.png",
        link: "executive.html?id=director"
    },
    {
        name: "Pee-Jay M. Alfaro",
        position: "President & CEO",
        image: "images/gbimages/executives/presandceo.png",
        link: "executive.html?id=president"
    },

    {
        name: "Joanne B. Banua",
        position: "Vice President",
        image: "images/gbimages/executives/vicepresident.png",
        link: "executive.html?id=vicepresident"
    },

    {
        name: "John Patrick V. Bernardino",
        position: "Chief of Business Development Officer",
        image: "images/gbimages/executives/cbdo.png",
        link: "executive.html?id=cbdo"
    }


];


const EXECUTIVE_DETAILS = {
    president: {
        name: "Pee-Jay M. Alfaro",
        position: "President & CEO",
        image: "images/gbimages/executives/presandceo-1.png",
        message: [
            `At <strong>Golden Buzzer Solar Power Engineering Services</strong>, our vision is clear: to provide clean, reliable, and sustainable energy solutions that power progress and protect the future.`,
            `As energy demands continue to grow, we believe solar power is no longer just an option—it is a responsibility. Through innovation, engineering excellence, and responsible project execution, we transform sunlight into efficient, long-term energy solutions for homes, businesses, and large-scale developments.`,
            `Every project we undertake reflects our commitment to quality, safety, and performance. From design and installation to commissioning and maintenance, we ensure that each solar system delivers maximum value and dependable results.`,
            `Our greatest strength lies in our people—engineers, technicians, and partners who share a unified purpose: to build a cleaner, smarter, and more energy-secure Philippines.`,
            `At Golden Buzzer Solar Power Engineering Services, we are proud to lead the shift toward renewable energy. The future is bright, and we are committed to powering it—together.`
        ]
    },

    director: {
        name: "Ismael C. Nabong",
        position: "Director",
        image: "images/gbimages/executives/director-1.png",
        message: [
            `At <strong>Golden Buzzer Solar Power Engineering Services</strong>, strong leadership and clear direction are the foundations of sustainable growth.`,
            `As Director, I have full confidence in the capability, vision, and leadership of our President & CEO, Pee-Jay Alfaro. His strategic mindset and commitment to excellence continue to guide the company toward innovation, operational strength, and long-term impact in the renewable energy sector.`,
            `Our role at the board level is to ensure that sound governance, accountability, and forward-thinking decisions support the company’s mission. With a leadership team that values integrity, technical excellence, and responsible growth, Golden Buzzer Solar Power Engineering Services is well-positioned to deliver reliable and future-ready solar solutions.`,
            `We believe in the power of renewable energy to drive economic progress while protecting the environment. Under strong executive leadership, we remain focused on expanding our capabilities, strengthening partnerships, and contributing meaningfully to a cleaner and more energy-secure Philippines.`,
            `The direction is clear, the leadership is trusted, and the future is bright.`
        ]
    },

    vicepresident: {
        name: "Joanne B. Banua",
        position: "Vice President",
        image: "images/gbimages/executives/vicepresident.png",
        message: [
            `At <strong>Golden Buzzer Solar Power Engineering Services</strong>, our work is guided by a clear commitment: to turn sustainable energy into practical, high-impact solutions.`,
            `As Vice President, I focus on ensuring that innovation translates into performance. From project planning to execution, we prioritize smart engineering, operational efficiency, and uncompromising quality—so every solar system we deliver is built to perform reliably and sustainably over the long term.`,
            `We believe the success of renewable energy lies in disciplined execution, continuous improvement, and strong collaboration. By embracing advanced technologies, refining our processes, and investing in our people, we create solutions that meet today’s energy needs while preparing for tomorrow’s challenges.`,
            `Beyond technology, our mission is to build trust—through transparency, accountability, and results. Each project is a partnership, and each installation is a step toward a cleaner, more energy-resilient Philippines.`,
            `At Golden Buzzer Solar Power Engineering Services, we are proud to help power progress—responsibly and intelligently.`
        ]
    },

    cbdo: {
        name: "John Patrick V. Bernardino",
        position: "Chief Business Development Officer",
        image: "images/gbimages/executives/cbdo.png",
        message: [
            `At <strong>Golden Buzzer Solar Power Engineering Services</strong>, we believe that energy is more than power — it is a catalyst for progress, sustainability, and shared prosperity.`,
            `As Chief of Business Development, my commitment is to build strong partnerships, unlock new opportunities, and drive innovative solutions that accelerate our mission of delivering reliable and clean solar energy to communities and industries.`,
            `In an evolving energy landscape, our strategy is anchored on three pillars: innovation, collaboration, and long-term value creation. We continuously seek to expand our reach through strategic alliances, forward-thinking technologies, and customer-centric approaches that ensure every project contributes to a greener and more resilient future.`,
            `Our journey is guided by a simple yet powerful vision — to empower businesses and communities through sustainable energy solutions that create lasting impact. Together with our dedicated team and partners, we are not only meeting today’s energy needs but also shaping tomorrow’s possibilities.`,
            `I invite our stakeholders, clients, and collaborators to join us as we energize growth, inspire innovation, and lead the transition toward a cleaner future.`
        ]
    }
};


const ABOUT_US = [
    {
        title: "OUR SPECIALIZATION",
        content: `
      <p>
      Hybrid Solar Systems — Designed for Reliability, Not Guesswork.
      <br><br>
      Hybrid solar systems integrate solar generation, battery storage,
      and grid power to deliver:
      <br>• Reduced electricity expenses
      <br>• Reliable power during grid outages
      <br>• Controlled load prioritization and future system expandability.
      <br><br>
      Our residential-first specialization allows us to refine engineering
      standards that scale effectively to commercial and industrial
      environments, where documentation, predictability, and performance
      under load are non-negotiable.
      </p>
    `
    },

    {
        title: "ENGINEERING EXPERIENCE",
        content: `
      <p>
      Golden Buzzer Solar is supported by an engineering team with over
      10 years of hands-on experience in the solar industry, including:
      <br><br>
      • 10+ years in solar system engineering and field deployment
      <br>• 250+ residential and commercial systems designed and installed
      <br>• Extensive experience with hybrid systems requiring backup power,
      battery management, and load prioritization.
      <br><br>
      All systems are engineered using actual consumption data and load
      calculations, ensuring installed performance aligns with real-world
      usage conditions.
      </p>
    `
    },

    {
        title: "OUR APPROACH",
        content: `
      <p>
      We treat solar as long-term electrical infrastructure, not a
      short-term cost-saving product.
      <br><br>
      Every project follows a consistent, engineering-first methodology:
      <br>• Load-based system sizing
      <br>• Battery capacity aligned with defined critical loads
      <br>• Use of proven components from established manufacturers
      <br>• Complete electrical diagrams, system documentation, and design assumptions
      <br><br>
      Projects that cannot be properly engineered, documented, or supported
      are intentionally declined.
      </p>
    `
    },

    {
        title: "CORE VALUES",
        content: `
      <ul style="list-style-type:none;padding:0;">
        <li><strong>Sustainability:</strong> We design systems that last using properly sized components and installation standards that reduce premature failures and unnecessary replacements.</li>
        <br>
        <li><strong>Engineering Discipline:</strong> We apply proven Hybrid System design, load analysis, and future-ready configurations so systems perform in real-world conditions.</li>
        <br>
        <li><strong>Energy Control:</strong> We help homeowners and businesses gain control over their power with lower electricity bills and reliable backup.</li>
        <br>
        <li><strong>Integrity:</strong> We recommend systems based on actual needs, not inflated capacities or shortcuts.</li>
        <br>
        <li><strong>Long-Term Responsibility:</strong> Systems are designed with long-term serviceability so clients are supported years after installation.</li>
      </ul>
    `
    }
];

const COMPANY_OVERVIEW = [
    {
        title: "Core Focus",
        description: "Design, engineering, installation, and maintenance of solar power systems"
    },
    {
        title: "OUR MISSION",
        description: "To deliver fast, reliable, and premium hybrid solar power solution that help homes, businesses, and industries transition to clean, sustainable, and cost-efficient energy."
    },
    {
        title: "OUR VISION",
        description: "To become the most trusted and leading hybrid solar engineering company in the Philippines, recognized for excellence, innovation, and customer satisfaction."
    }
];
export { company, companyShort, items_company, NAV_ITEMS, FOOTER, PARTNERS, EXECUTIVES, EXECUTIVE_DETAILS, ABOUT_US, COMPANY_OVERVIEW };