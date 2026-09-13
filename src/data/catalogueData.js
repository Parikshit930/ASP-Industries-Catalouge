/**
 * ASP Industries - Centralized Business & Catalogue Data
 * 
 * Sourced directly from official ASP Industries company profile documentation,
 * MSME registrations, and verified in-house machinery specifications.
 */

export const companyDetails = {
  name: "ASP Industries",
  legalName: "ASP Industries",
  brandSubtitle: "ASP Die & Components",
  establishedYear: 2006,
  experience: "20+ Years of Experience",
  businessType: "Manufacturer, Supplier & Retailer",
  industry: "Industrial Machinery, Tool Room, Die Manufacturing Support & Precision Engineering",
  email: "aspindustries336@gmail.com",
  phone: "+91 85120 22050",
  whatsappNumber: "918512022050",
  ceo: "Prashant",
  gstin: "06ASEPT8854H1Z7",
  msmeRegistration: "Government Registered under MSME",
  
  // Works & Manufacturing Facility (Gurgaon)
  address: {
    khasra: "Khasara No. 7684/6329/219",
    area: "Daultabad, Tek Chand Nagar, Gali No. 12",
    city: "Gurgaon",
    pincode: "122001",
    state: "Haryana",
    country: "India",
    full: "Khasara No. 7684/6329/219, Daultabad, Tek Chand Nagar, Gali No. 12, Gurgaon – 122001, Haryana, India."
  },

  // Registered Corporate Office (New Delhi)
  registeredOffice: {
    address: "C-3/2 Phase-2, Mayapuri Industrial Area, New Delhi – 110064, India",
    city: "New Delhi",
    pincode: "110064"
  },

  // Verified Google Maps embed URL
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d12002.29402637812!2d76.99217439304628!3d28.482076247903525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sKhasara%20No.%207684%2F6329%2F219%2C%20Daultabad%2C%20Tek%20Chand%20Nagar%2C%20Gali%20No.%2012%2C%20Gurgaon%20%E2%80%93%20122001%2C%20Haryana%2C%20India!5e1!3m2!1sen!2sin!4v1789116943288!5m2!1sen!2sin", 
  googleMapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Khasara No. 7684/6329/219, Daultabad, Tek Chand Nagar, Gali No. 12, Gurgaon – 122001, Haryana, India")
};

export const trustHighlights = [
  {
    label: "ESTABLISHED",
    value: "2006",
    subtext: "Operating for 20+ Years"
  },
  {
    label: "BUSINESS SCOPE",
    value: "Manufacturer · Supplier · Retailer",
    subtext: "End-to-End Industrial Solutions"
  },
  {
    label: "ACCREDITATION",
    value: "MSME Registered",
    subtext: "GSTIN: 06ASEPT8854H1Z7"
  },
  {
    label: "LOCATIONS",
    value: "Gurgaon & Mayapuri",
    subtext: "Works & Registered Office"
  }
];

// Verified Esteemed Industrial Clients & Partners from Company Profile
export const esteemedPartners = [
  { name: "Motherson Group", segment: "Global Automotive Systems" },
  { name: "Maa Durga Advance Technologies", segment: "Precision Engineering & Technologies" },
  { name: "PACKMAN", segment: "Packaging Engineering" },
  { name: "STEERWELS", segment: "Industrial Assemblies" },
  { name: "LOFTO DESIGN", segment: "Product & Mould Design" },
  { name: "KK INDUSTRIES", segment: "Bhiwadi Industrial Unit" },
  { name: "BALAJI AUTO PARTS", segment: "Precision Auto Components" },
  { name: "KRISHNA INDUSTRIES", segment: "Manufacturing Support" },
  { name: "MACRO MOULDS", segment: "Mould Tooling Systems" },
  { name: "Bharat Lighting", segment: "Automotive & Industrial Lighting" }
];

// Verified In-House Machinery Inventory & Technical Specifications from Company Profile
export const inHouseMachinery = [
  {
    type: "Vertical Machining Centre (VMC)",
    model: "HAAS VF2-YT",
    brand: "HAAS (USA)",
    image: "/images/vmc.jpg",
    travel: "760 × 510 × 510 mm (X/Y/Z)",
    maxJobSize: "1000 × 510 mm",
    maxJobWeight: "650 kg",
    spindleSpeed: "100 – 8,100 RPM",
    rapidFeed: "30,000 mm/min",
    cutterDia: "0.8 mm – 150 mm",
    workPurpose: "High-speed 3D surface milling, heavy die cavity roughing & finishing, precision boring on tough alloy steels."
  },
  {
    type: "Vertical Machining Centre (VMC)",
    model: "HAAS VF1",
    brand: "HAAS (USA)",
    image: "/images/vmc.jpg",
    travel: "508 × 408 × 508 mm (X/Y/Z)",
    spindleSpeed: "80 – 7,500 RPM",
    cutterDia: "0.8 mm minimum",
    accuracy: "0.006 mm (6 Microns)",
    repeatability: "0.010 mm (10 Microns)",
    workPurpose: "High-precision tool room milling, complex mould core inserts, and tight-tolerance component machining."
  },
  {
    type: "High-Capacity Injection Moulding Machine",
    model: "Toshiba 180Ton",
    brand: "Toshiba (Japan)",
    image: "/images/plastic-moulding.jpg",
    clampingForce: "180 TON",
    tieBarDistance: "510 × 510 mm",
    maxMouldWeight: "600 kg",
    workPurpose: "High-tonnage precision injection moulding of heavy technical polymers, automotive components, multi-cavity moulds, and rigid industrial plastics."
  },
  {
    type: "Plastic Injection Moulding Machine",
    model: "ELECTRONICA 110T",
    brand: "ELECTRONICA",
    image: "/images/plastic-moulding.jpg",
    clampingForce: "110 TON",
    tieBarDistance: "410 mm",
    mouldHeightRange: "200 mm (Min) – 450 mm (Max)",
    maxMouldWeight: "300 kg",
    workPurpose: "Mass production of technical plastic parts, multi-cavity injection moulding, and polymer components."
  },
  {
    type: "High-Precision CNC Turning Centre",
    model: "AMS J300LM",
    brand: "AMS (Ace Micromatic Group)",
    image: "/images/turning-cnc.jpg",
    maxJobLength: "500 mm",
    maxDia: "320 mm",
    spindleSpeed: "50 – 4,000 RPM",
    workPurpose: "High-speed CNC turning, extended shaft processing, precision threading (Metric/NPT), concentric boring, and tight-tolerance turned components."
  },
  {
    type: "CNC EDM Hole Drilling Machine",
    model: "Drill ZNC Machine",
    brand: "Robo Machines",
    image: "/images/edm.jpg",
    travel: "350 × 250 × 350 mm (X/Y/Z)",
    electrodeRange: "0.2 mm – 3.0 mm (Brass/Copper Tubes)",
    workPurpose: "High-speed electro-discharge micro-hole drilling, wire-cut EDM starter holes, deep ejector pin holes, cooling passages, and spark drilling through hardened tool steels without bit breakage."
  },
  {
    type: "ZNC Electrical Discharge Machine",
    model: "HI-TECH 450×350×250",
    brand: "ELECTRONICA",
    image: "/images/edm-job-work.jpg",
    travel: "450 × 350 × 250 mm (X/Y/Z)",
    workPurpose: "Spark erosion of deep blind cavities, narrow ribs, delicate electrode features, and pre-hardened die steels."
  },
  {
    type: "High-Precision Wirecut EDM Machine",
    model: "Ecoline Precision Wirecut",
    brand: "Ecoline",
    image: "/images/edm.jpg",
    travel: "300 × 200 × 200 mm (X/Y/Z)",
    maxJobWeight: "300 kg",
    machineWeight: "1,200 kg",
    workPurpose: "Precision brass-wire erosion of punch apertures, extrusion profiles, taper reliefs, and hardened die blocks."
  },
  {
    type: "CNC Turning Centre",
    model: "Galaxy Midas 6",
    brand: "Galaxy",
    image: "/images/turning-cnc.jpg",
    maxJobLength: "365 mm",
    maxDia: "240 mm",
    boreDia: "40 mm",
    workPurpose: "High-accuracy turning, cylindrical profiling, multi-start threading, and concentric boring of shafts & bushes."
  },
  {
    type: "Cylindrical Grinding Machine",
    model: "Riat Sons 350mm Cylindrical Grinder",
    brand: "Riat Sons",
    image: "/images/tool-room.jpg",
    centreHeight: "150 mm",
    maxJobDia: "200 mm",
    maxJobLength: "350 mm",
    workPurpose: "OD/ID precision cylindrical grinding, guide pillar finishing, and mirror-grade shaft sizing up to 350 mm length."
  },
  {
    type: "Precision Surface Grinder",
    model: "Ramana Surface Grinder",
    brand: "Ramana",
    image: "/images/tool-room.jpg",
    maxJobSize: "500 × 250 × 300 mm",
    maxJobWeight: "250 kg",
    workPurpose: "Micron-level flattening and parallel face grinding of hardened die plates and punch tooling."
  },
  {
    type: "Universal Milling Machine",
    model: "Bhavya & Baljeet Universal Millers",
    brand: "Bhavya / Baljeet",
    image: "/images/tool-room.jpg",
    maxTravel: "800 × 250 × 300 mm (Baljeet) / 500 × 175 × 130 mm (Bhavya)",
    maxJobWeight: "150 – 250 kg",
    workPurpose: "Angular compound milling, fixture pocketing, slot cutting, and tool room preparation."
  },
  {
    type: "Heavy Industrial Lathe",
    model: "Pimco 6-Feet Lathe",
    brand: "Pimco",
    image: "/images/tool-room.jpg",
    bedLength: "6 Feet",
    maxDia: "250 mm",
    workPurpose: "Heavy rough turning, large shaft fabrication, facing, and industrial threading operations."
  }
];

// CAD / CAM Software Suite
export const cadCamSuite = {
  cadSoftware: ["Siemens NX-10", "Cimatron E", "AutoCAD"],
  camSoftware: ["Cimatron E", "SolidWorks"],
  coreCapabilities: [
    "Core & Cavity extraction directly from client 3D models",
    "Substantial reduction in tool design lead times",
    "Automated toolpath generation for 3D multi-axis VMC milling",
    "Micron-accuracy simulation to prevent interference before cutting"
  ]
};

export const catalogueCategories = [
  {
    id: "die-products",
    index: "01",
    title: "Die Products & Manufacturing",
    shortDescription: "Die-related products and industrial solutions for manufacturing and tooling requirements.",
    longDescription: "ASP Industries deals in die-related products and comprehensive industrial solutions catering to press tooling, die-making facilities, and manufacturing plants. All offerings are structured to support industrial-grade tool room and fabrication environments.",
    whatWorkItDoes: "Die tooling components form, blank, bend, and stamp raw sheet metals into finished geometric components. They maintain punch-and-die alignment under massive mechanical press tonnage for automotive, appliance, and metal fabrication production lines.",
    image: "/images/die-products.jpg",
    isService: false,
    badge: "Tooling & Die Support",
    coreOperations: [
      "Press tool blanking & piercing alignment",
      "Progressive metal forming & bending support",
      "Die pillar and bushing wear-resistant guidance",
      "Tool room maintenance for stamping dies"
    ],
    offerings: [
      {
        id: "die-sets-elements",
        name: "Die Sets & Assembly Elements",
        image: "/images/die-products.jpg",
        description: "Industrial die bases, guide pillars, bushings, and essential assembly components for metal forming and stamping operations.",
        inquiryScope: "Die sets and press tool assembly components"
      },
      {
        id: "tool-room-die-spares",
        name: "Tool Room Die Components",
        image: "/images/product-4.jpg",
        description: "High-durability tooling elements and standard components supporting daily die maintenance and manufacturing workflows.",
        inquiryScope: "Tool room die components and tooling accessories"
      },
      {
        id: "forming-press-tool-solutions",
        name: "Forming & Press Tool Solutions",
        image: "/images/product-10.jpg",
        description: "Tailored industrial solutions designed to meet specific manufacturing and press tooling operational requirements.",
        inquiryScope: "Industrial forming and press tool solutions"
      }
    ]
  },
  {
    id: "vmc-machines",
    index: "02",
    title: "VMC — Vertical Machining Centres",
    shortDescription: "Explore VMC machinery solutions featuring USA-built HAAS VF2-YT and HAAS VF1.",
    longDescription: "Equipped with high-precision HAAS VF2-YT (8,100 RPM, 1000×510 mm) and HAAS VF1 (0.006 mm accuracy) machines, our VMC capabilities deliver robust industrial performance, rigid cutting conditions, and high-precision metal removal.",
    whatWorkItDoes: "Vertical Machining Centres (VMC) perform computerized high-speed multi-axis milling, precision hole boring, helical interpolation, facing, and tapping. They cut complex 3D contours into heavy blocks of steel, aluminium, and cast iron for tool rooms and batch manufacturing.",
    image: "/images/vmc.jpg",
    isService: false,
    badge: "HAAS CNC Machining",
    coreOperations: [
      "3D profile and die cavity milling",
      "High-speed face milling and slot cutting",
      "Precision boring and multi-diameter drilling",
      "Rigid tapping for mass manufacturing parts"
    ],
    offerings: [
      {
        id: "heavy-duty-vmc",
        name: "HAAS VF2-YT High-Rigidity VMC",
        image: "/images/vmc.jpg",
        description: "Equipped for large components up to 1000×510 mm and 650 kg, featuring 30,000 mm/min rapid feeds and 8,100 RPM spindle.",
        inquiryScope: "HAAS VF2-YT VMC machining"
      },
      {
        id: "tool-room-vmc",
        name: "HAAS VF1 Micron-Precision VMC",
        image: "/images/product-7.jpg",
        description: "Featuring 0.006 mm accuracy and 0.010 mm repeatability for complex die cavities, mould cores, and fine tool room finishing.",
        inquiryScope: "HAAS VF1 precision VMC solutions"
      },
      {
        id: "batch-production-vmc",
        name: "Industrial Batch Production Machining",
        image: "/images/vmc.jpg",
        description: "Multi-shift continuous machining setups engineered for automotive parts, flanges, and precision milled components.",
        inquiryScope: "Batch production VMC machining solutions"
      }
    ]
  },
  {
    id: "plastic-moulding",
    index: "03",
    title: "Plastic Moulding Machines",
    shortDescription: "Industrial injection moulding machinery solutions featuring Toshiba 180Ton and Electronica 110T.",
    longDescription: "Supported by high-capacity Toshiba 180-Ton and Electronica 110-Ton injection moulding machinery alongside Siemens NX / Cimatron CAD/CAM mould design, we deliver end-to-end plastic component manufacturing and tooling solutions.",
    whatWorkItDoes: "Plastic injection moulding machines heat raw thermoplastic granules until molten, then inject the liquid polymer under high hydraulic clamp pressure (up to 180 Tons) into precision moulds. After rapid cooling, finished plastic components are automatically ejected at high production speeds.",
    image: "/images/plastic-moulding.jpg",
    isService: false,
    badge: "Toshiba 180T & 110T Moulding",
    coreOperations: [
      "180-Ton hydraulic clamp lockup (Toshiba 180T)",
      "Uniform polymer melting & screw plasticizing",
      "High-precision injection into multi-cavity moulds",
      "Automated continuous cycle part ejection"
    ],
    offerings: [
      {
        id: "toshiba-180t-moulding",
        name: "Toshiba 180Ton Heavy Injection Moulding Machine",
        image: "/images/plastic-moulding.jpg",
        description: "180-Ton clamping capacity with 510×510 mm tie bar spacing, accommodating heavy mould tooling up to 600 kg for automotive and engineering polymer parts.",
        inquiryScope: "Toshiba 180Ton injection moulding machine"
      },
      {
        id: "injection-moulding-machinery",
        name: "Electronica 110T Precision Injection Moulding Machine",
        image: "/images/plastic-moulding.jpg",
        description: "110-Ton clamping capacity with 410 mm tie bar spacing, accommodating moulds up to 300 kg for high-durability polymer production.",
        inquiryScope: "Electronica 110T injection moulding machinery"
      },
      {
        id: "clamping-injection-systems",
        name: "Mould Core & Cavity Extraction Suite",
        image: "/images/product-6.jpg",
        description: "Utilizing Siemens NX-10 and Cimatron E to design and fabricate rapid-cycle, high-quality injection moulds.",
        inquiryScope: "Injection mould design and tooling"
      }
    ]
  },
  {
    id: "edm-job-work",
    index: "04",
    title: "EDM Job Work Solutions",
    shortDescription: "EDM job work solutions for precision manufacturing and tooling requirements.",
    longDescription: "ASP Industries delivers dedicated EDM job work solutions utilizing Electronica ZNC EDM, Robo Machines Drill ZNC, and Ecoline CNC Wirecut machinery for mould makers and tool rooms requiring precision electro-discharge erosion.",
    whatWorkItDoes: "Our EDM Job Work facility undertakes subcontracted precision spark erosion for tool rooms and factories. We machine complex die cavities, deep narrow ribs, blind keyways, internal sharp radii, and hardened parts without mechanical distortion or tool deflection.",
    image: "/images/edm-job-work.jpg",
    isService: true,
    badge: "Contract Job Work",
    coreOperations: [
      "Contract spark erosion for pre-hardened die steels",
      "Deep-rib and delicate mould core spark machining",
      "Intricate internal contours and sharp corners",
      "Fast turnaround on complex tool room job work"
    ],
    offerings: [
      {
        id: "die-mould-edm-jobwork",
        name: "Die & Mould Cavity EDM Job Work",
        image: "/images/edm-job-work.jpg",
        description: "Accurate spark erosion for complex mould cavities, deep ribs, blind slots, and delicate die features in pre-hardened steels.",
        inquiryScope: "Die and mould cavity EDM job work"
      },
      {
        id: "precision-engineering-jobwork",
        name: "Precision Component EDM Job Work",
        image: "/images/product-2.jpg",
        description: "Specialized EDM machining for tight-clearance engineering components where conventional milling cannot reach.",
        inquiryScope: "Precision engineering component EDM job work"
      },
      {
        id: "tool-room-edm-services",
        name: "Tool Room Support & Urgent Job Work",
        image: "/images/edm-job-work.jpg",
        description: "Reliable job work support assisting industrial tool rooms and production units with intricate sparking requirements.",
        inquiryScope: "Tool room support and contract EDM job work"
      }
    ]
  },
  {
    id: "tool-room",
    index: "05",
    title: "Tool Room Machines",
    shortDescription: "A range of tool room machinery supporting tooling, die-making, maintenance, and industrial manufacturing requirements.",
    longDescription: "Our tool room battery includes Riat Sons precision cylindrical grinders (350 mm length), Ramana surface grinders, Bhavya and Baljeet universal millers, and Pimco lathes serving die and mould maintenance.",
    whatWorkItDoes: "Tool room machinery constitutes the backbone of precision manufacturing. Surface grinders achieve micron-level flatness on hardened die plates; precision lathes turn cylindrical components, threads, and bushings; and universal millers prepare fixtures, pockets, and tool assemblies.",
    image: "/images/tool-room.jpg",
    isService: false,
    badge: "Grinders, Lathes & Millers",
    coreOperations: [
      "Precision surface grinding for micro-finish flatness",
      "Tool room lathe turning, threading & boring",
      "Universal milling for fixtures and pockets",
      "Tool sharpening and component re-machining"
    ],
    offerings: [
      {
        id: "precision-surface-grinders",
        name: "Ramana Precision Surface Grinder",
        image: "/images/tool-room.jpg",
        description: "Accommodates plates up to 500×250×300 mm and 250 kg for ultra-flat, parallel tool steel plate sizing.",
        inquiryScope: "Ramana tool room precision surface grinders"
      },
      {
        id: "cylindrical-grinders",
        name: "Riat Sons Cylindrical Grinder (350mm)",
        image: "/images/product-4.jpg",
        description: "High-accuracy OD/ID cylindrical grinding for shafts and guide pillars up to 350 mm length.",
        inquiryScope: "Riat Sons cylindrical grinding solutions (350 mm length)"
      },
      {
        id: "universal-milling-machines",
        name: "Bhavya & Baljeet Universal Millers",
        image: "/images/tool-room.jpg",
        description: "Heavy-duty universal milling machinery supporting multi-axis facing, pocketing, and fixture building.",
        inquiryScope: "Universal tool room milling machines"
      }
    ]
  },
  {
    id: "edm-machines",
    index: "06",
    title: "EDM Machines & Solutions",
    shortDescription: "EDM machinery and Robo Machines Drill ZNC solutions for precision-focused industrial applications.",
    longDescription: "Featuring Robo Machines Drill ZNC hole driller, Electronica ZNC EDM (450×350×250 mm), and Ecoline Wirecut systems for non-contact electro-erosion of tough metallurgical alloys, heat-treated tool steels, and micro-precision geometries without mechanical stress.",
    whatWorkItDoes: "EDM machines use controlled electrical spark discharges occurring between an electrode (or wire) and a conductive workpiece submerged in dielectric fluid. Robo Machines Drill ZNC penetrates hardened tool steels to produce wire-cut starter holes and cooling channels with zero drill bit breakage.",
    image: "/images/edm.jpg",
    isService: false,
    badge: "Robo Machines & Electronica EDM",
    coreOperations: [
      "Micro-hole EDM drilling via Robo Machines Drill ZNC (0.2–3.0 mm)",
      "Non-contact thermal erosion with dielectric flushing",
      "Micro-precision Z-axis servo cavity sinking",
      "Stress-free cutting of heat-treated alloy steels"
    ],
    offerings: [
      {
        id: "robo-drill-znc",
        name: "Robo Machines Drill ZNC Hole Drilling Machine",
        image: "/images/edm.jpg",
        description: "High-speed electro-discharge hole drilling from 0.2 mm to 3.0 mm through hardened tool steels, carbide, and pre-hardened die blocks without drill bit breakage.",
        inquiryScope: "Robo Machines Drill ZNC hole drilling"
      },
      {
        id: "sinker-edm-machinery",
        name: "Electronica Hi-Tech ZNC EDM",
        image: "/images/edm-job-work.jpg",
        description: "450×350×250 mm travel with sensitive servo spark control for fine cavity reproduction and intricate die features.",
        inquiryScope: "Electronica ZNC EDM machinery"
      },
      {
        id: "wirecut-edm-machinery",
        name: "Ecoline CNC Wirecut EDM",
        image: "/images/edm.jpg",
        description: "300×200×200 mm cutting envelope accommodating workpieces up to 300 kg for fine-kerf wire electro-erosion.",
        inquiryScope: "Ecoline wirecut EDM equipment"
      }
    ]
  },
  {
    id: "turning-cnc-machines",
    index: "07",
    title: "Turning CNC Machines",
    shortDescription: "Precision CNC turning machines and cylindrical tooling solutions featuring AMS J300LM.",
    longDescription: "Equipped with the high-rigidity AMS J300LM CNC Turning Centre (Ace Micromatic Group) and Galaxy Midas 6, ASP Industries delivers high-speed computerized turning, extended shaft manufacturing, precision threading (Metric/NPT), and concentric boring.",
    whatWorkItDoes: "Turning CNC machines spin cylindrical metal billets, shafts, and cast blanks at programmable speeds (up to 4,000 RPM) while computer-controlled carbide inserts cut external OD contours, internal bores, face grooves, multi-start threads, and tapers with micron repeatability.",
    image: "/images/turning-cnc.jpg",
    isService: false,
    badge: "AMS CNC Turning Centre",
    coreOperations: [
      "Precision cylindrical OD & ID turning",
      "Multi-start metric, NPT & imperial threading",
      "Concentric step-boring and grooving",
      "High-speed shaft & flanged bushing turning"
    ],
    offerings: [
      {
        id: "ams-j300lm-cnc-turning",
        name: "AMS J300LM Heavy-Duty CNC Turning Centre",
        image: "/images/turning-cnc.jpg",
        description: "Ace Micromatic Group CNC turning centre with 500 mm turning length, 320 mm maximum turning diameter, and 4,000 RPM spindle for heavy alloy steels.",
        inquiryScope: "AMS J300LM CNC turning centre solutions"
      },
      {
        id: "galaxy-midas-6-turning",
        name: "Galaxy Midas 6 High-Speed CNC Turning Machine",
        image: "/images/turning-cnc.jpg",
        description: "Equipped for precision turning up to 365 mm length and 240 mm diameter with 40 mm through-bore for bar-fed production.",
        inquiryScope: "Galaxy Midas 6 CNC turning machine"
      },
      {
        id: "custom-cnc-turned-components",
        name: "Turned Shafts, Adapters & Bushing Manufacturing",
        image: "/images/product-1.jpg",
        description: "Batch production and tool room machining of hydraulic fittings, guide pillars, flanged collars, and threaded adapters.",
        inquiryScope: "Custom CNC turned component manufacturing"
      }
    ]
  }
];

/**
 * The 10 Actual Products & Manufactured Components
 * Sourced directly from your uploaded component photos in "Just dial Components"!
 */
export const featuredProducts = [
  {
    id: "prod-01",
    index: "01",
    name: "Precision CNC Turned Adapters & Threaded Fittings Set",
    category: "CNC Turning (AMS J300LM)",
    categoryId: "turning-cnc-machines",
    machine: "AMS J300LM CNC Turning Centre",
    filterGroups: ["turning"],
    image: "/images/product-1.jpg",
    tag: "AMS J300LM Turning",
    whatWorkItDoes: "Precision multi-axis turned and threaded hydraulic adapters, perforated filter sleeves, hex plugs, and grooved fluid connectors machined from stainless steel and alloy rods on the AMS J300LM.",
    typicalWork: [
      "Perforated filter sleeves & inner sleeves",
      "High-pressure hex male/female adapters",
      "Threaded connector stems & bungs",
      "Precision flanged spool bushings"
    ],
    keySpecsNote: "Machined on AMS J300LM CNC Turning Centre · Metric & NPT threads · Concentric tolerances"
  },
  {
    id: "prod-02",
    index: "02",
    name: "Precision Copper EDM Electrode & Torch Nozzle",
    category: "EDM Electrodes & Drill ZNC",
    categoryId: "edm-machines",
    machine: "Robo Machines Drill ZNC & Sinker EDM",
    filterGroups: ["edm-robo"],
    image: "/images/product-2.jpg",
    tag: "Robo Machines Drill ZNC",
    whatWorkItDoes: "High-conductivity electrolytic copper electrode and gas torch nozzle turned with internal flow bore, cross-drilled cooling ports, and dielectric flushing orifice drilled via Robo Machines Drill ZNC.",
    typicalWork: [
      "Sinker EDM spark erosion electrodes",
      "Industrial welding & torch gas nozzles",
      "High-current conductive contact tips",
      "Fluid dielectric delivery nozzles"
    ],
    keySpecsNote: "Spark erosion electrode with micro-flushing channel drilled via Robo Machines Drill ZNC"
  },
  {
    id: "prod-03",
    index: "03",
    name: "High-Tensile Hex Stud Bolt with Cross-Drilled Port",
    category: "CNC Turning & Fasteners",
    categoryId: "turning-cnc-machines",
    machine: "AMS J300LM & Robo Drill ZNC",
    filterGroups: ["turning", "edm-robo"],
    image: "/images/product-3.jpg",
    tag: "AMS J300LM & Drill ZNC",
    whatWorkItDoes: "Heavy-duty hex stud bolt with ground bearing collar, axial lubrication feed port drilled via Robo Machines Drill ZNC, and rolled metric clamping threads turned on AMS J300LM.",
    typicalWork: [
      "Die set clamping and tie-down bolts",
      "Hydraulic cylinder pivot pins",
      "High-pressure mechanical fixture studs",
      "Internal lubrication transfer fasteners"
    ],
    keySpecsNote: "Turned on AMS J300LM · Axial lubrication pass-through hole drilled via Robo Machines Drill ZNC"
  },
  {
    id: "prod-04",
    index: "04",
    name: "Precision Stepped Tooling Spindle Shaft & Pin",
    category: "Tool Room Machining & Grinding",
    categoryId: "tool-room-machines",
    machine: "AMS J300LM & Riat Sons Cylindrical Grinder (350mm)",
    filterGroups: ["turning", "tool-room"],
    image: "/images/product-4.jpg",
    tag: "AMS Turning & Riat Sons Grinding",
    whatWorkItDoes: "Multi-stepped hardened tooling shaft turned on AMS J300LM with precision ground ODs on Riat Sons cylindrical grinder (350 mm length), featuring cross-drilled oil passage and external threaded clamping end.",
    typicalWork: [
      "Tool room guide pins and alignment dowels",
      "Machine spindle shafts and arbor pins",
      "Press die guide pillar components",
      "High-wear industrial hinge pins"
    ],
    keySpecsNote: "Rough turned on AMS J300LM · Final sizing on Riat Sons cylindrical grinder (350 mm length, ±0.005 mm runout)"
  },
  {
    id: "prod-05",
    index: "05",
    name: "Precision CNC Turned Collar Rings & Flanged Pins",
    category: "CNC Turning (AMS J300LM)",
    categoryId: "turning-cnc-machines",
    machine: "AMS J300LM CNC Turning Centre",
    filterGroups: ["turning"],
    image: "/images/product-5.jpg",
    tag: "AMS J300LM Turning",
    whatWorkItDoes: "Set of precision collar rings with set-screw holes, 4-hole mounting flange pins, domed threaded caps, and grooved locking bushings machined on the AMS J300LM CNC Turning Centre.",
    typicalWork: [
      "Axial shaft locating collars & stop rings",
      "Flanged locating pins with dowel holes",
      "Domed threaded sealing plugs",
      "Automotive fixture alignment components"
    ],
    keySpecsNote: "Turned on AMS J300LM CNC Turning Centre · Precise concentricity · Smooth chamfered entries"
  },
  {
    id: "prod-06",
    index: "06",
    name: "Precision Tapered Needle Pin, Funnel Nozzle & Sleeves",
    category: "Injection Mould Tooling (Toshiba 180T)",
    categoryId: "plastic-moulding",
    machine: "Toshiba 180Ton Moulds & Tool Room",
    filterGroups: ["moulding", "tool-room"],
    image: "/images/product-6.jpg",
    tag: "Toshiba 180T Mould Tooling",
    whatWorkItDoes: "Specialized precision tapered needle pin shut-off valve, conical funnel nozzle with hose barb, deep-drawn shielding cup, and stepped sleeves supporting Toshiba 180Ton injection mould assemblies.",
    typicalWork: [
      "Plastic injection gate needle valves",
      "Conical fluid funnel nozzles with hose tail",
      "Deep drawn metal caps & shielding cups",
      "Precision stepped clamping sleeves"
    ],
    keySpecsNote: "Engineered for Toshiba 180Ton & 110T mould assemblies · Ultra-fine taper needle shut-off"
  },
  {
    id: "prod-07",
    index: "07",
    name: "Heavy-Duty CNC Milled Flange Wheel Spacer / Hub Adapter",
    category: "VMC Milling (HAAS CNC)",
    categoryId: "vmc-machines",
    machine: "HAAS VF2-YT High-Rigidity VMC",
    filterGroups: ["vmc"],
    image: "/images/product-7.jpg",
    tag: "HAAS VF2-YT VMC Machining",
    whatWorkItDoes: "Precision CNC turned and milled circular wheel spacer and hub adapter plate featuring a large center bore and dual bolt circles with counterbored socket holes machined on HAAS VF2-YT VMC.",
    typicalWork: [
      "Automotive wheel spacers & hub adapters",
      "Heavy equipment drivetrain flange couplings",
      "Industrial rotary table mounting plates",
      "Precision circular bolt circle patterns"
    ],
    keySpecsNote: "Milled on HAAS VF2-YT VMC · Pitch circle diameter (PCD) precision · Counterbored bolt relief"
  },
  {
    id: "prod-08",
    index: "08",
    name: "Flanged Heavy-Duty Sleeve Bushing & Bearing Housing",
    category: "Heavy Turning (AMS J300LM)",
    categoryId: "turning-cnc-machines",
    machine: "AMS J300LM CNC Turning Centre",
    filterGroups: ["turning", "tool-room"],
    image: "/images/product-8.jpg",
    tag: "AMS J300LM Heavy Turning",
    whatWorkItDoes: "Rigid flanged sleeve bushing featuring an accurately bored and honed internal cylinder, pilot mounting shoulder, and circular flange turned on the heavy-duty AMS J300LM CNC Turning Centre.",
    typicalWork: [
      "Press tool guide pillar bearing housings",
      "Rotary machine spindle sleeve mounts",
      "Heavy equipment pivot bushings",
      "Hydraulic ram guide sleeves"
    ],
    keySpecsNote: "Rough turned and precision bored on AMS J300LM CNC Turning Centre · Parallel flange face"
  },
  {
    id: "prod-09",
    index: "09",
    name: "Precision Turned Brass Hydraulic Valve Spool & Fitting",
    category: "Brass Turning (AMS J300LM)",
    categoryId: "turning-cnc-machines",
    machine: "AMS J300LM & Robo Drill ZNC",
    filterGroups: ["turning", "edm-robo"],
    image: "/images/product-9.jpg",
    tag: "AMS J300LM & Drill ZNC",
    whatWorkItDoes: "Precision brass valve spool and fluid connector featuring external threads, elastomeric O-ring sealing groove, and micro-metering cross fluid orifices drilled on the Robo Machines Drill ZNC.",
    typicalWork: [
      "Hydraulic and pneumatic control valve spools",
      "High-pressure fluid coupling connectors",
      "Fuel and coolant metering fittings",
      "Instrumentation fluid control pins"
    ],
    keySpecsNote: "Turned on AMS J300LM CNC · Micro-metering cross fluid orifices drilled via Robo Machines Drill ZNC"
  },
  {
    id: "prod-10",
    index: "10",
    name: "Precision Bronze / Brass Flanged Guide Bushing",
    category: "Mould & Die Guide Bushings (Toshiba 180T)",
    categoryId: "plastic-moulding",
    machine: "Toshiba 180Ton Moulds & Tool Room",
    filterGroups: ["moulding", "tool-room"],
    image: "/images/product-10.jpg",
    tag: "Toshiba 180T Mould Bushing",
    whatWorkItDoes: "Low-friction flanged bronze sleeve bushing with radial oil delivery port and precision honed ID for smooth, galling-free sliding guidance in Toshiba 180Ton injection mould sets.",
    typicalWork: [
      "Stamping die guide post bushings",
      "Plastic injection mould ejector guide sleeves",
      "High-speed sliding bearing sleeves",
      "Heavy mechanical press toggle bushings"
    ],
    keySpecsNote: "High wear-resistant bronze guide bushing for Toshiba 180Ton moulds · Honed sliding bore"
  },
  {
    id: "prod-11",
    index: "11",
    name: "High-Precision Progressive Stamping Die Block Assembly",
    category: "Die Moulds & Press Tooling",
    categoryId: "die-products",
    machine: "HAAS CNC VMC & Tool Room Bay",
    filterGroups: ["die-moulds", "tool-room", "vmc"],
    image: "/images/die-mould-1.jpg",
    tag: "Progressive Die Mould",
    whatWorkItDoes: "Multi-station progressive stamping die block featuring precision guided slide inserts, hardened punch tooling, stripper plates, and wear-resistant guide pillars for high-speed automated sheet metal stamping.",
    typicalWork: [
      "Progressive automotive stamping dies",
      "Multi-stage sheet metal blanking & piercing",
      "Precision punch & die insert assemblies",
      "High-wear hardened tool steel die sets"
    ],
    keySpecsNote: "Engineered on HAAS VMC & Tool Room · Hardened tool steel inserts · Micron alignment tolerances"
  },
  {
    id: "prod-12",
    index: "12",
    name: "4-Cavity Precision Plastic Injection Mould Cavity Block",
    category: "Die Moulds & Injection Tooling",
    categoryId: "plastic-moulding",
    machine: "HAAS VF2-YT & Siemens NX CAD/CAM",
    filterGroups: ["die-moulds", "moulding", "vmc"],
    image: "/images/die-mould-2.jpg",
    tag: "Injection Mould Tooling",
    whatWorkItDoes: "High-accuracy 4-cavity plastic injection mould cavity block featuring balanced runner feeds, precision gate orifices, hardened leader pin bushings, and conformal cooling channels for uniform cycle cooling.",
    typicalWork: [
      "4-cavity thermoplastic injection moulding",
      "Precision runner & sprue gating layouts",
      "Automotive & electrical component moulds",
      "Optimized water cooling channel layouts"
    ],
    keySpecsNote: "3D profile milled on HAAS VF2-YT · Siemens NX Core/Cavity design · Balanced runner flow"
  },
  {
    id: "prod-13",
    index: "13",
    name: "Multi-Cavity Mirror-Polished Core & Cavity Mould Set",
    category: "Die Moulds & Optical Tooling",
    categoryId: "plastic-moulding",
    machine: "HAAS VF1 Precision VMC & EDM Bay",
    filterGroups: ["die-moulds", "moulding", "vmc"],
    image: "/images/die-mould-3.jpg",
    tag: "Optical Multi-Cavity Mould",
    whatWorkItDoes: "Matched core and cavity mould halves featuring multi-impression high-speed 3D VMC milling, micro-spark EDM fine finishing, and mirror-grade cavity polishing for flash-free cosmetic thermoplastic production.",
    typicalWork: [
      "Multi-cavity cosmetic & optical housings",
      "Automotive lens & reflector mould sets",
      "Precision parting line shut-off surfaces",
      "Flash-free tight tolerance component moulding"
    ],
    keySpecsNote: "Machined on HAAS VF1 (0.006 mm accuracy) · Mirror polished cavities · Zero flash parting line"
  },
  {
    id: "prod-14",
    index: "14",
    name: "Complete Multi-Plate Industrial Injection Mould Tool Assembly",
    category: "Die Moulds & Turnkey Tooling",
    categoryId: "plastic-moulding",
    machine: "Toshiba 180T & HAAS VMC Tooling Bay",
    filterGroups: ["die-moulds", "moulding", "tool-room"],
    image: "/images/die-mould-4.jpg",
    tag: "Turnkey Mould Assembly",
    whatWorkItDoes: "Turnkey multi-plate industrial plastic injection mould assembly complete with precision ground guide pillars, mechanical slider side-action cores, guided ejector return system, and heavy clamping plates.",
    typicalWork: [
      "Turnkey injection mould tool sets",
      "Side-action slider cores for undercut parts",
      "Heavy-duty die sets for 110T–180T presses",
      "Complete mould trial & production tooling"
    ],
    keySpecsNote: "Built for Toshiba 180Ton & Electronica 110T · Slide core mechanics · Hardened guide pillars"
  }
];

export const valuePillars = [
  {
    title: "Established Track Record",
    badge: "EST. 2006",
    description: "Over two decades of continuous business experience serving industrial manufacturing, tool rooms, and engineering units across the region."
  },
  {
    title: "Comprehensive Scope",
    badge: "ONE-STOP",
    description: "Offering industrial machinery, tool room equipment, die-related products, and specialized EDM job work under one trusted name."
  },
  {
    title: "B2B Credibility & Focus",
    badge: "ENTERPRISE",
    description: "Serving leading industrial clients including Motherson Group, Maa Durga Advance Technologies, PACKMAN, and Balaji Auto Parts with rigorous quality control."
  },
  {
    title: "Direct Engineering Access",
    badge: "FAST RESPONSE",
    description: "Connect directly with CEO Prashant and our technical team via WhatsApp or email to discuss machine specs, drawings, and RFQs."
  }
];

/**
 * Generates an official, pre-filled WhatsApp inquiry link for ASP Industries
 */
export function generateWhatsAppUrl(categoryTitle = "", offeringName = "") {
  let message = "Hello ASP Industries, I am visiting your digital catalogue and would like to enquire about";
  
  if (offeringName && categoryTitle) {
    message += ` *${offeringName}* under *${categoryTitle}*.`;
  } else if (categoryTitle) {
    message += ` your *${categoryTitle}* solutions.`;
  } else {
    message += " your industrial machinery and engineering solutions.";
  }
  
  message += " Please share technical details, availability, and catalogue information.";
  
  return `https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
