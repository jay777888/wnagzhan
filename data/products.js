/*
 * HUBTEK demo content.
 * Everything the page renders lives in this file. No database, no API.
 * To use your own catalogue: replace the objects in `products`, and update
 * `slides`, `categories` and `promos` below. Keep the same field names.
 */

const SITE_DATA = {
  brand: {
    name: "HUBTEK",
    tagline: "Wheel Hub Unit Specialists"
  },

  slides: [
    {
      eyebrow: "OEM-GRADE PRECISION",
      title: "Built to Keep You Moving.",
      text: "Wheel hub units engineered for smooth rotation, quiet operation and a long service life.",
      cta: "Explore Products",
      href: "#products",
      accent: "#ff6b1a",
      image: "images/hero-1.jpg",
      bolts: 5
    },
    {
      eyebrow: "ABS-READY ENGINEERING",
      title: "Precision Sensors. Confident Stops.",
      text: "Integrated ABS rings and speed sensors deliver reliable signal output in every condition.",
      cta: "View Categories",
      href: "#categories",
      accent: "#4da3ff",
      image: "images/hero-2.jpg",
      bolts: 6
    },
    {
      eyebrow: "GLOBAL SUPPLY",
      title: "From the Factory to Your Fleet.",
      text: "Stable stock, fast dispatch and fitment support for distributors and workshops worldwide.",
      cta: "See Promotions",
      href: "#promotions",
      accent: "#ffbe3d",
      image: "images/hero-3.jpg",
      bolts: 8
    }
  ],

  benefits: [
    { title: "OEM Quality", text: "Built to OEM tolerances", icon: "shield" },
    { title: "12-Month Warranty", text: "Coverage on every unit", icon: "clock" },
    { title: "Global Shipping", text: "Dispatch within 48 hours", icon: "globe" },
    { title: "Fitment Support", text: "VIN & OEM cross-reference", icon: "tool" }
  ],

  categories: [
    { id: "passenger", name: "Passenger Car", text: "Sedans, hatchbacks and daily drivers", icon: "car" },
    { id: "suv", name: "SUV & Crossover", text: "Ride height and load tuned units", icon: "suv" },
    { id: "truck", name: "Light Truck", text: "Reinforced for pickup applications", icon: "truck" },
    { id: "commercial", name: "Commercial Vehicle", text: "Heavy duty continuous operation", icon: "van" },
    { id: "performance", name: "Performance", text: "Low-friction, high-speed design", icon: "bolt" },
    { id: "trailer", name: "Trailer & Axle", text: "Cost-effective axle solutions", icon: "axle" }
  ],

  products: [
    {
      id: "ht-513256",
      image: "images/product-01.jpg",
      name: "Front Wheel Hub Unit",
      fitment: "Toyota Corolla 2008–2013",
      oem: "513256",
      category: "passenger",
      price: 48.5,
      badge: "BEST SELLER",
      accent: "#ff6b1a",
      bolts: 5,
      specs: {
        "Position": "Front axle",
        "Bearing type": "Double row ball",
        "Flange": "4-bolt mounting",
        "ABS sensor": "Integrated",
        "Material": "Forged steel",
        "MOQ": "20 pcs"
      }
    },
    {
      id: "ht-42200-SNA-008",
      image: "images/product-02.jpg",
      name: "Rear Wheel Hub Assembly",
      fitment: "Honda Civic 2006–2011",
      oem: "42200-SNA-008",
      category: "passenger",
      price: 52.0,
      badge: "",
      accent: "#4da3ff",
      bolts: 5,
      specs: {
        "Position": "Rear axle",
        "Bearing type": "Double row ball",
        "Flange": "4-bolt mounting",
        "ABS sensor": "Integrated",
        "Material": "Forged steel",
        "MOQ": "20 pcs"
      }
    },
    {
      id: "ht-KD35-26-15X",
      image: "images/product-03.jpg",
      name: "Front Hub Bearing Assembly",
      fitment: "Mazda CX-5 2012–2016",
      oem: "KD35-26-15X",
      category: "suv",
      price: 76.8,
      badge: "HOT",
      accent: "#ffbe3d",
      bolts: 5,
      specs: {
        "Position": "Front axle",
        "Bearing type": "Double row angular contact",
        "Flange": "5-bolt mounting",
        "ABS sensor": "Magnetic ring",
        "Material": "Hardened steel",
        "MOQ": "12 pcs"
      }
    },
    {
      id: "ht-513121",
      image: "images/product-04.jpg",
      name: "Rear Wheel Hub Unit",
      fitment: "buick 2014–2019",
      oem: "513121",
      category: "suv",
      price: 69.9,
      badge: "",
      accent: "#a78bfa",
      bolts: 5,
      specs: {
        "Position": "Rear axle",
        "Bearing type": "Double row ball",
        "Flange": "4-bolt mounting",
        "ABS sensor": "Integrated",
        "Material": "Forged steel",
        "MOQ": "12 pcs"
      }
    },
    {
      id: "ht-9l3z1104",
      image: "images/product-05.jpg",
      name: "Front Wheel Hub Assembly",
      fitment: "Ford F-150 2009–2014",
      oem: "9L3Z-1104-A",
      category: "truck",
      price: 95.0,
      badge: "",
      accent: "#38bdf8",
      bolts: 6,
      specs: {
        "Position": "Front axle",
        "Bearing type": "Tapered roller",
        "Flange": "6-bolt mounting",
        "ABS sensor": "Integrated",
        "Material": "Heavy duty cast steel",
        "MOQ": "8 pcs"
      }
    },
    {
      id: "ht-68080127",
      image: "images/product-06.jpg",
      name: "Rear Hub Bearing Unit",
      fitment: "RAM 1500 2012–2018",
      oem: "68080127AA",
      category: "truck",
      price: 108.0,
      badge: "NEW",
      accent: "#f472b6",
      bolts: 6,
      specs: {
        "Position": "Rear axle",
        "Bearing type": "Tapered roller",
        "Flange": "6-bolt mounting",
        "ABS sensor": "Integrated",
        "Material": "Heavy duty cast steel",
        "MOQ": "8 pcs"
      }
    },
    {
      id: "ht-9063300025",
      image: "images/product-07.jpg",
      name: "Heavy Duty Wheel Hub",
      fitment: "Mercedes Sprinter 2010–2018",
      oem: "906 330 0025",
      category: "commercial",
      price: 142.0,
      badge: "",
      accent: "#34d399",
      bolts: 6,
      specs: {
        "Position": "Front / rear axle",
        "Bearing type": "Tapered roller",
        "Flange": "6-bolt mounting",
        "ABS sensor": "Integrated",
        "Material": "High-strength cast steel",
        "MOQ": "6 pcs"
      }
    },
    {
      id: "ht-28373fg",
      image: "images/product-08.jpg",
      name: "Performance Hub Unit",
      fitment: "Subaru WRX 2015–2020",
      oem: "28373FG020",
      category: "performance",
      price: 118.0,
      badge: "PRO SERIES",
      accent: "#ef4444",
      bolts: 5,
      specs: {
        "Position": "Front axle",
        "Bearing type": "Low-friction ball",
        "Flange": "5-bolt mounting",
        "ABS sensor": "High-response ring",
        "Material": "Forged alloy steel",
        "MOQ": "10 pcs"
      }
    },
    {
      id: "ht-tha3500",
      image: "images/product-09.jpg",
      name: "Trailer Hub Assembly",
      fitment: "3,500 lb trailer axle",
      oem: "THA-3500",
      category: "trailer",
      price: 39.9,
      badge: "",
      accent: "#fbbf24",
      bolts: 4,
      specs: {
        "Position": "Trailer axle",
        "Bearing type": "Tapered roller",
        "Flange": "4-bolt mounting",
        "ABS sensor": "Not included",
        "Material": "Galvanised steel",
        "MOQ": "30 pcs"
      }
    },
    {
      id: "ht-1k0498621",
      image: "images/product-10.jpg",
      name: "Front Wheel Hub Bearing",
      fitment: "VW Golf 2010–2017",
      oem: "1K0 498 621",
      category: "passenger",
      price: 58.6,
      badge: "",
      accent: "#22d3ee",
      bolts: 5,
      specs: {
        "Position": "Front axle",
        "Bearing type": "Double row ball",
        "Flange": "4-bolt mounting",
        "ABS sensor": "Magnetic ring",
        "Material": "Forged steel",
        "MOQ": "20 pcs"
      }
    }
  ],

  promos: [
    {
      tag: "BULK DEAL",
      title: "Buy 4, Get 1 Free",
      text: "Order four or more wheel hub units and we will add a fifth one to the shipment.",
      code: "BUNDLE5",
      accent: "#ff6b1a"
    },
    {
      tag: "FREIGHT OFFER",
      title: "Free Express Shipping",
      text: "All orders above $500 ship express, free of charge, to most destinations.",
      code: "FREIGHT500",
      accent: "#4da3ff"
    },
    {
      tag: "LIMITED STOCK",
      title: "Clearance Corner",
      text: "Selected rear hub units are now up to 30% off. Available while stock lasts.",
      code: "CLEAR30",
      accent: "#ffbe3d"
    }
  ]
};
