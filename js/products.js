/* GENERATED from Ramm-Products.xlsx. Edit the Excel file, not this file. */
const CATEGORIES = [
  {
    "id": "buffing",
    "name": "Cot Buffing & Grinding"
  },
  {
    "id": "mounting",
    "name": "Cot Mounting"
  },
  {
    "id": "toproll",
    "name": "Top Roller Maintenance"
  },
  {
    "id": "cardroom",
    "name": "Card Room Machinery"
  },
  {
    "id": "drafting",
    "name": "Drafting & Ring Frame"
  },
  {
    "id": "compact",
    "name": "Compact Spinning"
  },
  {
    "id": "tools",
    "name": "Gauges, Tools & Consumables"
  },
  {
    "id": "hygiene",
    "name": "Hygiene Solutions"
  }
];

const PRODUCTS = [
  {
    "id": "fabf1",
    "name": "Fully Auto Buffing & Finishing Machine with UV Treatment",
    "model": "FAB&F-1",
    "category": "buffing",
    "make": "C2Y Solutions",
    "images": [
      "images/fabf1.jpg"
    ],
    "summary": "Fully automatic buffing, checking and UV finishing of cots in a single line.",
    "features": [
      "Suitable for draw frame, lap preparation, comber, speed frame, ring frame and OE cots",
      "Surface finish Ra < 0.5 µm",
      "UV surface treatment for fine finishing and longer cot life",
      "Large storage for raw and finished cots",
      "Advanced PLC system with auto controller and self error diagnosis"
    ],
    "specs": [
      [
        "Operating system",
        "Fully automatic"
      ],
      [
        "Loading capacity",
        "Up to 400 cots"
      ],
      [
        "Production per hour",
        "Up to 600 cots"
      ],
      [
        "Working range (ring / speed frame)",
        "Dia 19 to 38 mm, top roller length 190 mm, max cot length 45 mm"
      ],
      [
        "Operating control",
        "Pneumatic / PLC"
      ],
      [
        "Connecting load",
        "3 kW"
      ],
      [
        "Error diagnosis",
        "Self diagnosis & displayed"
      ],
      [
        "Dimensions (L x W x H)",
        "2400 x 1400 x 1600 mm"
      ],
      [
        "Weight",
        "1400 kg"
      ]
    ],
    "verify": "Catalogue text says 'up to 300 cots per hr' but the spec table says 'up to 600'. Confirm."
  },
  {
    "id": "fab1",
    "name": "Fully Auto Buffing Machine",
    "model": "FAB-1",
    "category": "buffing",
    "make": "C2Y Solutions",
    "images": [
      "images/fab1.jpg"
    ],
    "summary": "Fully automatic cot buffing without UV treatment.",
    "features": [
      "Suitable for draw frame, lap preparation, comber, speed frame, ring frame and OE cots",
      "Surface finish Ra < 0.5 µm",
      "Large storage for raw and finished cots",
      "Advanced PLC system with auto controller and self error diagnosis"
    ],
    "specs": [
      [
        "Operating system",
        "Fully automatic"
      ],
      [
        "Loading capacity",
        "Up to 300 cots"
      ],
      [
        "Production per hour",
        "Up to 300 cots"
      ],
      [
        "Working range (ring / speed frame)",
        "Dia 19 to 38 mm, top roller length 190 mm, max cot length 45 mm"
      ],
      [
        "Operating control",
        "Pneumatic / PLC"
      ],
      [
        "Connecting load",
        "3 kW"
      ],
      [
        "Error diagnosis",
        "Self diagnosis & displayed"
      ],
      [
        "Dimensions (L x W x H)",
        "2400 x 1400 x 1600 mm"
      ],
      [
        "Weight",
        "1200 kg"
      ]
    ]
  },
  {
    "id": "cgm1af",
    "name": "Cot Grinding Machine with Auto Feeding",
    "model": "CGM1-AF (BM1-AF)",
    "category": "buffing",
    "make": "C2Y Solutions",
    "images": [
      "images/cgm1-af.jpg"
    ],
    "summary": "Semi-automatic cot grinder with auto feeding for all common top rolls, including long cots.",
    "features": [
      "Suitable for all top rolls in cotton / synthetic spinning mills",
      "Auto feeding attachment",
      "Centerless grinding attachment for speed / ring frame with 200 mm wide grinding stone",
      "Center grinding attachment for long cots with 25 mm wide grinding stone",
      "Adjustable digital timer control",
      "Hydraulically operated taper buffing for comber top detaching rolls",
      "Powerful dust extraction"
    ],
    "specs": [
      [
        "Operating system",
        "Semi automatic"
      ],
      [
        "Loading capacity",
        "Up to 65 cots"
      ],
      [
        "Production per hour",
        "325 to 400 cots"
      ],
      [
        "Working range (longer cots)",
        "Max dia 150 mm, top roller length 535 mm, max cot length 375 mm"
      ],
      [
        "Operating control",
        "Hydro-pneumatic / PLC"
      ],
      [
        "Connecting load",
        "3.3 kW"
      ],
      [
        "Dimensions",
        "1350 x 1160 x 1650 mm"
      ],
      [
        "Weight",
        "1100 kg"
      ]
    ],
    "verify": "Production rate differs between sheets (325-400 vs 325-360). Error diagnosis listed as 'No' on one sheet and 'Self diagnosis' on another, so it is left out. Confirm the model name (CGM1-AF vs BM1-AF)."
  },
  {
    "id": "cgm",
    "name": "Cot Grinding Machine",
    "model": "CGM (BM)",
    "category": "buffing",
    "make": "C2Y Solutions",
    "images": [
      "images/cgm.jpg"
    ],
    "summary": "Semi-automatic cot grinder for all types of top rolls.",
    "features": [
      "Suitable for draw frame, lap preparation, comber, speed frame, ring frame and OE cots",
      "Centerless grinding attachment with 200 mm wide grinding stone",
      "Center grinding attachment for long cots with 25 mm wide grinding stone",
      "Adjustable digital timer control",
      "Hydraulically operated taper buffing for comber top detaching rolls",
      "Powerful dust extraction"
    ],
    "specs": [
      [
        "Operating system",
        "Semi automatic"
      ],
      [
        "Loading capacity",
        "Up to 65 cots"
      ],
      [
        "Production per hour",
        "360 to 400 cots"
      ],
      [
        "Working range (longer cots)",
        "Max dia 150 mm, top roller length 535 mm, max cot length 375 mm"
      ],
      [
        "Operating control",
        "Hydraulic / micro control"
      ],
      [
        "Connecting load",
        "3.33 kW"
      ],
      [
        "Error diagnosis",
        "No"
      ],
      [
        "Dimensions",
        "1350 x 1160 x 1650 mm"
      ],
      [
        "Weight",
        "1000 kg"
      ]
    ],
    "verify": "Confirm the model name (CGM vs BM)."
  },
  {
    "id": "fab2",
    "name": "Fully Auto Buffing Machine",
    "model": "FAB-2",
    "category": "buffing",
    "make": "C2Y Solutions",
    "images": [
      "images/fab2.jpg"
    ],
    "summary": "Fully automatic cot buffing machine with auto feeding.",
    "features": [],
    "specs": [],
    "verify": "No technical specs found in the catalogue folder. Add specs or keep as 'on request'."
  },
  {
    "id": "ab1",
    "name": "Auto Buffing Machine / Manual Buffing Machine",
    "model": "AB-1 / MB-1",
    "category": "buffing",
    "make": "C2Y Solutions",
    "images": [
      "images/ab1.jpg"
    ],
    "summary": "Cot buffing machine available in auto (AB-1) and manual (MB-1) versions.",
    "features": [],
    "specs": [],
    "verify": "No technical specs found in the catalogue folder."
  },
  {
    "id": "uv",
    "name": "Ultraviolet Treatment Machine",
    "model": "U-VF",
    "category": "buffing",
    "make": "C2Y Solutions",
    "images": [
      "images/uv.jpg"
    ],
    "summary": "UV surface treatment of rubber cots to improve finish and prevent lapping.",
    "features": [
      "Exposing cots to UV rays for a preset time improves surface finish and prevents lapping",
      "Eliminates acid treatment and toxic chemical coating of cots",
      "Simple and easy to operate",
      "Environmentally friendly"
    ],
    "specs": [
      [
        "Operating system",
        "Manual"
      ],
      [
        "Working range",
        "All common top rollers"
      ],
      [
        "UV lamp",
        "1 x 2000 W"
      ],
      [
        "Connecting load",
        "7.5 kW"
      ],
      [
        "Dimensions (L x W x H)",
        "1200 x 550 x 1100 mm"
      ],
      [
        "Weight",
        "325 kg (approx.)"
      ]
    ]
  },
  {
    "id": "cci",
    "name": "Cot Checking Instrument",
    "model": "CCI-1 / CCI-2",
    "category": "buffing",
    "make": "C2Y Solutions",
    "images": [
      "images/cci.jpg"
    ],
    "summary": "Checks eccentricity and taper of all types of top rollers.",
    "features": [
      "Two dial gauges for accurate measurement",
      "Available in manual (CCI-1) and motorized (CCI-2) versions",
      "Simple and accurate operation"
    ],
    "specs": {
      "cols": [
        "CCI-1",
        "CCI-2"
      ],
      "rows": [
        [
          "Operating system",
          "Manual",
          "Motorized"
        ],
        [
          "Dimensions (L x W x H)",
          "520 x 250 x 350 mm",
          "520 x 250 x 350 mm"
        ],
        [
          "Net weight",
          "15 kg",
          "15 kg"
        ]
      ]
    }
  },
  {
    "id": "cmhyv",
    "name": "Hydraulic Cot Mounting Machine (Vertical)",
    "model": "CMHY-V",
    "category": "mounting",
    "make": "C2Y Solutions",
    "images": [
      "images/cmhyv.jpg"
    ],
    "summary": "Vertical hydraulic press for mounting and demounting long top roll cots.",
    "features": [
      "Mounting and demounting of draw frame, comber, sliver lap and ribbon lap cots",
      "Individual vertical hydraulic piston-cylinder",
      "Supplied with complete electricals",
      "Mounting force on main cylinder for long cots: 7.5 kN",
      "Electric motor 2.2 kW, 1440 rpm"
    ],
    "specs": [
      [
        "Operating system",
        "Hydraulic / pneumatic"
      ],
      [
        "Range (cot length / dia)",
        "500 mm / 80 mm"
      ],
      [
        "Working pressure",
        "Up to 100 bar"
      ],
      [
        "Demounting",
        "Yes"
      ],
      [
        "Connecting load",
        "2.2 kW"
      ],
      [
        "Dimensions",
        "2000 x 600 x 1500 mm"
      ],
      [
        "Weight",
        "300 kg"
      ]
    ]
  },
  {
    "id": "pcm2",
    "name": "Pneumatic Cot Mounting Machine",
    "model": "PCM-2",
    "category": "mounting",
    "make": "C2Y Solutions",
    "images": [
      "images/pcm2.jpg"
    ],
    "summary": "Pneumatic press for mounting and demounting top roll cots, including alu-core cots.",
    "features": [
      "Mounting and demounting of draw frame, comber, speed frame, ring frame and OE cots",
      "Also suitable for alu-core cots",
      "Pneumatically operated, with complete electricals",
      "Supplied without air compressor"
    ],
    "specs": [
      [
        "Operating system",
        "Pneumatic"
      ],
      [
        "Range (press range / cot dia)",
        "500 mm / 80 mm"
      ],
      [
        "Working pressure",
        "6 to 10 bar"
      ],
      [
        "Demounting",
        "Yes"
      ],
      [
        "Compressed air supply",
        "6 to 10 bar"
      ],
      [
        "Dimensions",
        "760 x 710 x 2000 mm"
      ],
      [
        "Weight",
        "230 kg"
      ]
    ],
    "verify": "Two PCM-2 sheets exist. One says 'up to 100 bar, 2.2 kW, 2000x600x1500, 300 kg' (looks copied from the hydraulic model). Using the 6-10 bar / 230 kg version. Confirm."
  },
  {
    "id": "cmmp",
    "name": "Cot Mounting Machine (Pneumatic)",
    "model": "CMMP",
    "category": "mounting",
    "make": "C2Y Solutions",
    "images": [
      "images/cmmp.jpg"
    ],
    "summary": "Compact pneumatic cot mounting press.",
    "features": [],
    "specs": [],
    "verify": "No technical specs found. Is this a separate model from PCM-2?"
  },
  {
    "id": "greasing",
    "name": "Top Roll Greasing Machine",
    "model": "Automatic / Manual",
    "category": "toproll",
    "make": "C2Y Solutions",
    "images": [
      "images/greasing.jpg",
      "images/greasing-pneumatic.jpg",
      "images/greasing-motorized.jpg"
    ],
    "summary": "Inserts an exact, pre-metered quantity of grease into top roll bearings.",
    "features": [
      "One arbor greased at a time",
      "Exact metered, pre-determined grease quantity",
      "Automatic model: pneumatically / electrically operated, compact and easy to operate",
      "Supplied without air compressor",
      "Manual model: lever operated"
    ],
    "specs": {
      "cols": [
        "Automatic",
        "Manual"
      ],
      "rows": [
        [
          "Sides greased at a time",
          "2 sides",
          "1 side"
        ],
        [
          "Greasing rate",
          "12 arbors per min",
          "4 arbors per min"
        ],
        [
          "Total cycle time",
          "7 sec",
          "20 sec"
        ],
        [
          "Clamping system",
          "Pneumatic",
          "Lever clamping"
        ],
        [
          "Connecting load",
          "0.37 kW",
          "-"
        ],
        [
          "Dimensions (L x W x H)",
          "510 x 550 x 840 mm",
          "400 x 500 x 850 mm"
        ],
        [
          "Weight",
          "50 kg",
          "75 kg"
        ]
      ]
    },
    "verify": "Catalogue lists the automatic model as lighter (50 kg) than the manual (75 kg). Confirm. Also confirm the two photos (pneumatic and motorized) belong here."
  },
  {
    "id": "mgm",
    "name": "Mobile Greasing Machine",
    "model": "MGM",
    "category": "toproll",
    "make": "C2Y Solutions",
    "images": [
      "images/mgm.jpg"
    ],
    "summary": "Trolley-mounted greasing unit for on-machine greasing.",
    "features": [],
    "specs": [],
    "verify": "No technical specs found."
  },
  {
    "id": "tdg",
    "name": "Top Roller De-greasing Machine",
    "model": "TDG-1 / TDG-4",
    "category": "toproll",
    "make": "C2Y Solutions",
    "images": [
      "images/tdg.jpg"
    ],
    "summary": "Fully automatic cleaning of top roller arbors with a powerful air jet.",
    "features": [
      "Fully automatic cycle",
      "TDG-1 cleans one arbor at a time; TDG-4 cleans up to four",
      "Arbor rotates while cleaning",
      "Fully enclosed, electrically operated"
    ],
    "specs": {
      "cols": [
        "TDG-1",
        "TDG-4"
      ],
      "rows": [
        [
          "Rollers loaded at a time",
          "1",
          "Up to 4"
        ],
        [
          "Cleaning time",
          "1 min",
          "2 min"
        ],
        [
          "Total cycle time",
          "1.5 min",
          "3 min"
        ],
        [
          "Clamping system",
          "Air cylinder",
          "Air cylinder"
        ],
        [
          "Cleaning media",
          "Air & oil",
          "Air & oil"
        ],
        [
          "Electric pump",
          "0.12 kW",
          "0.12 kW"
        ],
        [
          "Air per operation at 6 bar",
          "0.5 L",
          "2 L"
        ],
        [
          "Power",
          "220 V AC",
          "220 V AC"
        ],
        [
          "Dimensions (W x D x H)",
          "600 x 500 x 700 mm",
          "600 x 600 x 700 mm"
        ],
        [
          "Gross weight",
          "75 kg",
          "100 kg"
        ]
      ]
    }
  },
  {
    "id": "adgm2",
    "name": "Automatic De-greasing Machine",
    "model": "ADGM-2",
    "category": "toproll",
    "make": "C2Y Solutions",
    "images": [
      "images/adgm2.jpg"
    ],
    "summary": "Automatic de-greasing unit for top roller arbors.",
    "features": [],
    "specs": [],
    "verify": "No technical specs found. Is this the same as TDG?"
  },
  {
    "id": "crc",
    "name": "Clearer Roller Cleaning Machine",
    "model": "CRC-1 (Manual)",
    "category": "toproll",
    "make": "C2Y Solutions",
    "images": [
      "images/crc.jpg"
    ],
    "summary": "Manual cleaning roller and brush for clearer (flocked) rollers.",
    "features": [
      "Manually operated cleaning roller and brush with basket",
      "Fully covered fabricated box collects cleaning waste",
      "Collected fluff is easily removed",
      "Cleans different clearer roller diameters",
      "Mounted on caster wheels"
    ],
    "specs": [
      [
        "Operating system",
        "Manual"
      ],
      [
        "Working range",
        "All common flocked rollers"
      ],
      [
        "Dimensions",
        "300 x 710 x 760 mm"
      ],
      [
        "Weight",
        "50 kg"
      ]
    ]
  },
  {
    "id": "dccm",
    "name": "Dual Cleaner Roller Cleaning Machine",
    "model": "DCCM-1 / CCM / MCM",
    "category": "toproll",
    "make": "C2Y Solutions",
    "images": [
      "images/dccm.jpg"
    ],
    "summary": "Motorized cleaning of clearer rollers.",
    "features": [],
    "specs": [],
    "verify": "No technical specs found."
  },
  {
    "id": "cutroller",
    "name": "Cut Roller Machine",
    "model": "",
    "category": "toproll",
    "make": "C2Y Solutions",
    "images": [
      "images/cut-roller.jpg",
      "images/cut-roller-2.jpg",
      "images/cut-roller-3.jpg"
    ],
    "summary": "Brush-type roller cleaning machine on caster wheels.",
    "features": [],
    "specs": [],
    "verify": "Photos only (folder 'CUT ROLLER MACHINE'). Confirm product name and add specs."
  },
  {
    "id": "som",
    "name": "Spindle Oiling Machine",
    "model": "SOM-3 / SOM-2",
    "category": "toproll",
    "make": "C2Y Solutions",
    "images": [
      "images/som.jpg"
    ],
    "summary": "Mobile spindle oiling unit for ring frames.",
    "features": [],
    "specs": [],
    "verify": "No technical specs found."
  },
  {
    "id": "flyerclean",
    "name": "Flyer Cleaning Machine",
    "model": "HOT CLEAN HP20",
    "category": "toproll",
    "make": "Perfect / Holz",
    "images": [
      "images/flyer-clean.jpg"
    ],
    "summary": "Specially designed to clean closed-type flyers.",
    "features": [],
    "specs": [],
    "verify": "Image is a phone screenshot of the manufacturer's website. Replace with a proper photo and add specs. Confirm Ramm deals in this product."
  },
  {
    "id": "thoc",
    "name": "Traversing Head on Card Flat Grinding Machine",
    "model": "THOC (Pneumatic)",
    "category": "cardroom",
    "make": "C2Y Solutions",
    "images": [
      "images/thoc.jpg"
    ],
    "summary": "Grinds the flat tops on the card itself, with no need to remove flats.",
    "features": [
      "Pneumatically operated traversing head",
      "Brush roller for cleaning flat tops",
      "Emery fillet for re-sharpening flat clothing on the card",
      "Saves time as flats need not be removed from the machine",
      "Easy to install; drive is adapted to the card make"
    ],
    "specs": [
      [
        "Operating system",
        "Electro-pneumatic"
      ],
      [
        "Air supply",
        "6 to 20 bar"
      ],
      [
        "Working range",
        "Up to 40\" (60\" on request)"
      ],
      [
        "Connecting load",
        "0.6 kW"
      ],
      [
        "Dimensions (L x B x W)",
        "1200 x 500 x 1500 mm"
      ],
      [
        "Weight",
        "110 kg"
      ]
    ]
  },
  {
    "id": "flatclip",
    "name": "Flat Clipping Machine",
    "model": "",
    "category": "cardroom",
    "make": "C2Y Solutions",
    "images": [
      "images/flat-clipping.jpg"
    ],
    "summary": "For clipping card flat clothing.",
    "features": [],
    "specs": [],
    "verify": "No specs found."
  },
  {
    "id": "flattear",
    "name": "Flat Tear-off Machine",
    "model": "",
    "category": "cardroom",
    "make": "C2Y Solutions",
    "images": [
      "images/flat-tearoff.jpg"
    ],
    "summary": "For removing worn flat clothing.",
    "features": [],
    "specs": [],
    "verify": "No specs found."
  },
  {
    "id": "wiremount",
    "name": "Multipurpose Wire Mounting Machine",
    "model": "",
    "category": "cardroom",
    "make": "C2Y Solutions",
    "images": [
      "images/wire-mounting.jpg"
    ],
    "summary": "Mounting of metallic card wire on cylinders and doffers.",
    "features": [],
    "specs": [],
    "verify": "No specs found. The MWM folder holds Perfect assembly drawings only."
  },
  {
    "id": "spooler",
    "name": "Wire Spooler",
    "model": "",
    "category": "cardroom",
    "make": "C2Y Solutions",
    "images": [
      "images/wire-spooler.jpg"
    ],
    "summary": "Spooling unit for card clothing wire.",
    "features": [],
    "specs": [],
    "verify": "No specs found."
  },
  {
    "id": "buttweld",
    "name": "Butt Welder",
    "model": "",
    "category": "cardroom",
    "make": "C2Y Solutions",
    "images": [
      "images/butt-welder.jpg"
    ],
    "summary": "Butt welding of card clothing wire.",
    "features": [],
    "specs": [],
    "verify": "No specs found."
  },
  {
    "id": "endmill",
    "name": "Card Flat End Milling Machine",
    "model": "",
    "category": "cardroom",
    "make": "C2Y Solutions",
    "images": [
      "images/flat-end-milling.jpg"
    ],
    "summary": "Milling of card flat ends.",
    "features": [],
    "specs": [],
    "verify": "No specs found."
  },
  {
    "id": "flatemery",
    "name": "Card Flat Grinder (Emery)",
    "model": "",
    "category": "cardroom",
    "make": "C2Y Solutions",
    "images": [
      "images/flat-grinder-emery.jpg"
    ],
    "summary": "Emery roller grinder for card flats.",
    "features": [],
    "specs": [],
    "verify": "No specs found."
  },
  {
    "id": "flatstone",
    "name": "Card Flat Grinder (Stone)",
    "model": "",
    "category": "cardroom",
    "make": "C2Y Solutions",
    "images": [
      "images/flat-grinder-stone.jpg"
    ],
    "summary": "Stone roller grinder for card flats.",
    "features": [],
    "specs": [],
    "verify": "No specs found."
  },
  {
    "id": "bcg",
    "name": "Bare Cylinder Grinder",
    "model": "BCG",
    "category": "cardroom",
    "make": "C2Y Solutions",
    "images": [
      "images/bcg.jpg"
    ],
    "summary": "Trolley-mounted grinder for bare card cylinders.",
    "features": [],
    "specs": [],
    "verify": "No specs found."
  },
  {
    "id": "traverse",
    "name": "Traverse Grinder & Stripper",
    "model": "",
    "category": "cardroom",
    "make": "C2Y Solutions",
    "images": [
      "images/traverse-grinder.jpg"
    ],
    "summary": "Traverse grinding and stripping for card clothing.",
    "features": [],
    "specs": [],
    "verify": "No specs found."
  },
  {
    "id": "burnish",
    "name": "Wire Burnishing Machine",
    "model": "",
    "category": "cardroom",
    "make": "C2Y Solutions",
    "images": [
      "images/wire-burnishing.jpg"
    ],
    "summary": "Burnishing of card clothing wire.",
    "features": [],
    "specs": [],
    "verify": "No specs found."
  },
  {
    "id": "bendgrind",
    "name": "Card Bend Grinder",
    "model": "",
    "category": "cardroom",
    "make": "C2Y Solutions",
    "images": [
      "images/card-bend-grinder.jpg"
    ],
    "summary": "Grinder for card bends.",
    "features": [],
    "specs": [],
    "verify": "No specs found."
  },
  {
    "id": "flatgrind",
    "name": "Flat Grinding Machine",
    "model": "",
    "category": "cardroom",
    "make": "C2Y Solutions",
    "images": [
      "images/flat-grinding.jpg"
    ],
    "summary": "Off-machine grinding of card flats.",
    "features": [],
    "specs": [],
    "verify": "No specs found."
  },
  {
    "id": "frtm",
    "name": "Manual Fluted Roller Truing Machine",
    "model": "FRTM Model 1 / Model 2",
    "category": "drafting",
    "make": "C2Y Solutions",
    "images": [
      "images/frtm-1.jpg",
      "images/frtm-2.jpg",
      "images/frtm-3.jpg",
      "images/frtm-4.jpg"
    ],
    "summary": "Identifies and rectifies eccentric fluted rollers, rods and bars.",
    "features": [
      "Accurate identification and rectification of eccentric rollers, rods and bars",
      "Dial gauge to measure eccentricity",
      "Capacity: fluted rollers up to Ø 34 mm, lengths 1100 and 1200 mm",
      "Manually operated press"
    ],
    "specs": [
      [
        "Operating system",
        "Manual"
      ],
      [
        "Working range",
        "Up to Ø 34 mm"
      ],
      [
        "Net weight",
        "168 kg (approx.)"
      ],
      [
        "Dimensions, Model 1 (L x W x H)",
        "1211 x 610 x 745 mm"
      ],
      [
        "Dimensions, Model 2 (L x W x H)",
        "1111 x 610 x 745 mm"
      ]
    ]
  },
  {
    "id": "easytrue",
    "name": "Prestige Easytrue Fluted Roller Truing Machine",
    "model": "",
    "category": "drafting",
    "make": "Prestige",
    "images": [
      "images/easytrue.jpg"
    ],
    "summary": "Improves yarn quality through accurate identification and rectification of eccentric rollers.",
    "features": [
      "Special device available for straightening cast iron bare flats and removing twist"
    ],
    "specs": []
  },
  {
    "id": "scd",
    "name": "Spindle Centering Device",
    "model": "SCD",
    "category": "drafting",
    "make": "Orion Electronics",
    "images": [
      "images/scd.jpg"
    ],
    "summary": "Electronic device for precise centering of spindles with respect to the ring.",
    "features": [
      "Eliminates wrong centering due to fatigue and visual misjudgment",
      "LED indication in X and Y directions on the front panel",
      "Specially designed trolley for easy operation",
      "Reduces peak tensions, end breakages and premature wear of rings and travelers",
      "Result: improved quality, higher production, longer life of rings and travelers"
    ],
    "specs": [
      [
        "Accuracy",
        "0.025 mm"
      ],
      [
        "Power",
        "Mains or rechargeable battery"
      ]
    ]
  },
  {
    "id": "cds",
    "name": "Compact Spinning CDS System & Spares",
    "model": "CDS",
    "category": "compact",
    "make": "Supra Syndicate",
    "images": [
      "images/cds.jpg",
      "images/cds-2.jpg"
    ],
    "summary": "Compact spinning system and spares for ring frames.",
    "features": [],
    "specs": [],
    "verify": "Catalogue has no technical specs. It claims '150+ installations' and '50+ customers' for Supra Syndicate; left out until confirmed."
  },
  {
    "id": "fluff",
    "name": "Fluff Cleaner",
    "model": "100S / 100M / 100L",
    "category": "tools",
    "make": "J Pro",
    "images": [
      "images/fluff-cleaner.jpg"
    ],
    "summary": "Hand-held rotary fluff cleaner with extension rods.",
    "features": [
      "For carding, comber, simplex, ring frame, knitting and weaving",
      "Interchangeable extension rods",
      "Full range of spares available"
    ],
    "specs": [
      [
        "100S",
        "250 mm"
      ],
      [
        "100M",
        "400 mm"
      ],
      [
        "100L",
        "550 mm"
      ]
    ]
  },
  {
    "id": "gauges",
    "name": "Card Gauges",
    "model": "",
    "category": "tools",
    "make": "Prestige",
    "images": [
      "images/card-gauges.jpg",
      "images/leaf-gauge.jpg"
    ],
    "summary": "Single leaf gauges and flat gauges to safeguard carding performance.",
    "features": [
      "Single leaf gauges with plastic handles",
      "Flat gauges with aluminum handles"
    ],
    "specs": [],
    "verify": "Add the gauge sizes per set (see '7 LEAF GUAGES SIZE PER SET' image)."
  },
  {
    "id": "scraper",
    "name": "Steel and Nylon Scraper Blades",
    "model": "",
    "category": "tools",
    "make": "Prestige",
    "images": [
      "images/scraper-blades.jpg"
    ],
    "summary": "Scraper blades for common card makes to tackle loose fibers.",
    "features": [],
    "specs": [
      [
        "LMW-Rieter Cristalina cards",
        "64 x 1020 x 0.25 mm, 54 x 1020 x 0.25 mm"
      ],
      [
        "LMW-Graf Web-King cards",
        "37\", 38\" and 40\""
      ],
      [
        "CVHP cards",
        "40½\" x 2\", 40½\" x 1⅞\", 40½\" x 1¾\", 40½\" x 1½\""
      ],
      [
        "IRHP cards",
        "40½\" x 1¼\", 40½\" x 1½\", 40½\" x 15/16\""
      ],
      [
        "Trützschler cards",
        "1053 x 63 mm"
      ],
      [
        "Crosrol cards",
        "1020 x 24 mm, 38 x 26 mm, 75 x 41 mm, 40 x 15 mm"
      ]
    ]
  },
  {
    "id": "wrench",
    "name": "Prestige Easyfix Fluted Roller Wrench",
    "model": "",
    "category": "tools",
    "make": "Prestige",
    "images": [
      "images/wrench.jpg"
    ],
    "summary": "Tightens or loosens fluted rollers quickly with a single operator.",
    "features": [],
    "specs": []
  },
  {
    "id": "liquimix",
    "name": "Liquimix 1 & 2",
    "model": "",
    "category": "tools",
    "make": "Prestige",
    "images": [
      "images/liquimix-photo.jpg",
      "images/liquimix.jpg"
    ],
    "summary": "Surface treatment for synthetic rubber cots to prevent lapping.",
    "features": [
      "Especially for draw frame and comber detaching rollers",
      "Kit includes Liquimix 1, Liquimix 2, measuring glass, gloves and brush",
      "Mix 5 ml of Liquimix 1 with 15 ml of Liquimix 2 per application"
    ],
    "specs": [
      [
        "Pack size",
        "500 ml containers"
      ]
    ]
  },
  {
    "id": "dispenser",
    "name": "Auto Sanitizer Dispenser",
    "model": "",
    "category": "hygiene",
    "make": "C2Y Solutions",
    "images": [
      "images/dispenser.jpg"
    ],
    "summary": "Touch-free wall-mounted dispenser for hospitals, hotels, offices and more.",
    "features": [
      "Touch-free, hygienic dispensing",
      "Easy to install and refill",
      "3 to 5 ml per cycle in 3 to 5 seconds",
      "For hospitals, hotels, offices, gyms, restaurants, malls and schools"
    ],
    "specs": [
      [
        "Capacity",
        "1 liter or 5 liters"
      ],
      [
        "Type",
        "Wall mount"
      ],
      [
        "Colors",
        "Black & white, blue, white"
      ],
      [
        "Body material",
        "MS"
      ],
      [
        "Power supply",
        "12 V DC"
      ],
      [
        "Sensor range",
        "1 to 15 cm"
      ]
    ]
  }
];
