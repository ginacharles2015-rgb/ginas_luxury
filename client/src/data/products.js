// Complete product catalog for Gina's Luxury Fashion

import gown2 from "../assets/2clgown.jpg";
import armcuff from "../assets/armcuff.jpg";
import asokesk from "../assets/asokesk.jpg";
import bangle from "../assets/bangle.jpg";
import bluegown from "../assets/bluegown.jpg";
import blueskirt from "../assets/blueskirt.jpg";
import bracelet from "../assets/bracelet.jpg";
import brownbodycon from "../assets/brownbodycon.jpg";
import brownpants from "../assets/brownpants.jpg";
import browntop from "../assets/browntop.jpg";
import cropyellowtop from "../assets/cropyellowtop.jpg";
import floralgown from "../assets/floralgown.jpg";
import floralskirt from "../assets/floralskirt.jpg";
import flowertop from "../assets/flowertop.jpg";
import gatheredtop from "../assets/gatheredtop.jpg";
import glasses from "../assets/glasses.jpg";
import goldbelt from "../assets/goldbelt.jpg";
import greengown from "../assets/greengown.jpg";
import greytop from "../assets/greytop.jpg";
import hairclips from "../assets/hairclips.jpg";
import jean from "../assets/jean.jpg";
import jewelryset from "../assets/jewelryset.jpg";
import longpinkgown from "../assets/longpinkgown.jpg";
import multigown from "../assets/multigown.jpg";
import necklace from "../assets/necklace.jpg";
import pinkgown from "../assets/pinkgown.jpg";
import pinkskirt from "../assets/pinkskirt.jpg";
import pinktop from "../assets/pinktop.jpg";
import ribbon from "../assets/ribbon.jpg";
import satinskirt from "../assets/satinskirt.jpg";
import seagreentop from "../assets/seagreentop.jpg";
import tailoredshorts from "../assets/tailoredshorts.jpg";
import whitegown from "../assets/whitegown.jpg";
import whitetop from "../assets/whitetop.jpg";
import widepants from "../assets/widepants.jpg";
import yellow2top from "../assets/yellow2top.jpg";

export const Products = [
  // =========================
  // DRESSES
  // =========================

  {
    id: 1,
    name: "2CL Gown",
    category: "dresses",
    price: 129.99,
    rating: 4.8,
    image: gown2,
    description: "Elegant gown perfect for special occasions.",
    isNew: true,
    isSale: false,
    discount: 0,
  },

  {
    id: 2,
    name: "Blue Gown",
    category: "dresses",
    price: 249.99,
    rating: 4.9,
    image: bluegown,
    description: "Beautiful blue gown with an elegant and stylish design.",
    isNew: true,
    isSale: true,
    discount: 30,
  },

  {
    id: 3,
    name: "Floral Gown",
    category: "dresses",
    price: 99.99,
    rating: 4.7,
    image: floralgown,
    description: "Beautiful floral gown for a feminine and elegant look.",
    isNew: false,
    isSale: true,
    discount: 15,
  },

  {
    id: 4,
    name: "Green Gown",
    category: "dresses",
    price: 189.99,
    rating: 4.8,
    image: greengown,
    description: "Elegant green gown perfect for special occasions.",
    isNew: true,
    isSale: false,
    discount: 0,
  },

  {
    id: 5,
    name: "Long Pink Gown",
    category: "dresses",
    price: 79.99,
    rating: 4.6,
    image: longpinkgown,
    description: "A beautiful long pink gown with a sophisticated style.",
    isNew: false,
    isSale: true,
    discount: 20,
  },

  {
    id: 6,
    name: "Multi Gown",
    category: "dresses",
    price: 149.99,
    rating: 4.8,
    image: multigown,
    description: "Stylish multi-coloured gown for a bold fashion look.",
    isNew: false,
    isSale: false,
    discount: 0,
  },

  {
    id: 7,
    name: "Pink Gown",
    category: "dresses",
    price: 199.99,
    rating: 4.9,
    image: pinkgown,
    description: "Elegant pink gown designed for a beautiful feminine look.",
    isNew: true,
    isSale: false,
    discount: 0,
  },

  {
    id: 8,
    name: "White Gown",
    category: "dresses",
    price: 159.99,
    rating: 4.9,
    image: whitegown,
    description: "Classic white gown with an elegant finish.",
    isNew: true,
    isSale: false,
    discount: 0,
  },

  {
    id: 9,
    name: "Brown Bodycon",
    category: "dresses",
    price: 119.99,
    rating: 4.7,
    image: brownbodycon,
    description: "Stylish brown bodycon dress with a flattering fit.",
    isNew: false,
    isSale: false,
    discount: 0,
  },

  // =========================
  // TOPS
  // =========================

  {
    id: 10,
    name: "Brown Top",
    category: "tops",
    price: 89.99,
    rating: 4.7,
    image: browntop,
    description: "Simple and stylish brown top.",
    isNew: false,
    isSale: true,
    discount: 10,
  },

  {
    id: 11,
    name: "Crop Yellow Top",
    category: "tops",
    price: 79.99,
    rating: 4.6,
    image: cropyellowtop,
    description: "Trendy crop yellow top for a stylish casual look.",
    isNew: true,
    isSale: false,
    discount: 0,
  },

  {
    id: 12,
    name: "Floral Top",
    category: "tops",
    price: 99.99,
    rating: 4.8,
    image: flowertop,
    description: "Beautiful floral top with a feminine design.",
    isNew: false,
    isSale: true,
    discount: 15,
  },

  {
    id: 13,
    name: "Gathered Top",
    category: "tops",
    price: 109.99,
    rating: 4.8,
    image: gatheredtop,
    description: "Elegant gathered top for a sophisticated look.",
    isNew: false,
    isSale: false,
    discount: 0,
  },

  {
    id: 14,
    name: "Pink Top",
    category: "tops",
    price: 89.99,
    rating: 4.7,
    image: pinktop,
    description: "Beautiful pink top for everyday elegance.",
    isNew: true,
    isSale: false,
    discount: 0,
  },

  {
    id: 15,
    name: "Sea Green Top",
    category: "tops",
    price: 99.99,
    rating: 4.8,
    image: seagreentop,
    description: "Fresh sea green top with a stylish finish.",
    isNew: false,
    isSale: false,
    discount: 0,
  },

  {
    id: 16,
    name: "White Top",
    category: "tops",
    price: 79.99,
    rating: 4.6,
    image: whitetop,
    description: "Classic white top that pairs beautifully with any outfit.",
    isNew: false,
    isSale: true,
    discount: 10,
  },

  {
    id: 17,
    name: "Yellow Top",
    category: "tops",
    price: 89.99,
    rating: 4.7,
    image: yellow2top,
    description: "Bright yellow top for a stylish and confident look.",
    isNew: true,
    isSale: false,
    discount: 0,
  },

  // =========================
  // BOTTOMS
  // =========================

  {
    id: 18,
    name: "Blue Skirt",
    category: "bottoms",
    price: 89.99,
    rating: 4.7,
    image: blueskirt,
    description: "Stylish blue skirt perfect for different occasions.",
    isNew: false,
    isSale: true,
    discount: 15,
  },

  {
    id: 19,
    name: "Floral Skirt",
    category: "bottoms",
    price: 99.99,
    rating: 4.8,
    image: floralskirt,
    description: "Beautiful floral skirt with a feminine finish.",
    isNew: true,
    isSale: false,
    discount: 0,
  },

  {
    id: 20,
    name: "Brown Pants",
    category: "bottoms",
    price: 109.99,
    rating: 4.8,
    image: brownpants,
    description: "Elegant brown pants for a sophisticated look.",
    isNew: false,
    isSale: true,
    discount: 10,
  },

  {
    id: 21,
    name: "Jean",
    category: "bottoms",
    price: 119.99,
    rating: 4.7,
    image: jean,
    description: "Classic jeans designed for everyday comfort and style.",
    isNew: false,
    isSale: false,
    discount: 0,
  },

  {
    id: 22,
    name: "Satin Skirt",
    category: "bottoms",
    price: 129.99,
    rating: 4.8,
    image: satinskirt,
    description: "Elegant satin skirt with a smooth luxurious finish.",
    isNew: true,
    isSale: false,
    discount: 0,
  },

  {
    id: 23,
    name: "Tailored Shorts",
    category: "bottoms",
    price: 79.99,
    rating: 4.6,
    image: tailoredshorts,
    description: "Smart tailored shorts with a clean modern finish.",
    isNew: false,
    isSale: true,
    discount: 15,
  },

  {
    id: 24,
    name: "Wide Pants",
    category: "bottoms",
    price: 119.99,
    rating: 4.8,
    image: widepants,
    description: "Comfortable wide-leg pants with an elegant silhouette.",
    isNew: true,
    isSale: false,
    discount: 0,
  },

  {
    id: 25,
    name: "Asoke Skirt",
    category: "bottoms",
    price: 139.99,
    rating: 4.8,
    image: asokesk,
    description: "Beautiful Asoke-inspired skirt with a stylish design.",
    isNew: true,
    isSale: false,
    discount: 0,
  },

  // =========================
  // ACCESSORIES
  // =========================

  {
    id: 26,
    name: "Arm Cuff",
    category: "accessories",
    price: 49.99,
    rating: 4.8,
    image: armcuff,
    description: "Elegant arm cuff accessory for a luxurious finishing touch.",
    isNew: true,
    isSale: false,
    discount: 0,
  },

  {
    id: 27,
    name: "Bangle",
    category: "accessories",
    price: 39.99,
    rating: 4.7,
    image: bangle,
    description: "Elegant bangle designed to complement any outfit.",
    isNew: false,
    isSale: false,
    discount: 0,
  },

  {
    id: 28,
    name: "Bracelet",
    category: "accessories",
    price: 44.99,
    rating: 4.8,
    image: bracelet,
    description: "Stylish bracelet for an elegant everyday look.",
    isNew: true,
    isSale: false,
    discount: 0,
  },

  {
    id: 29,
    name: "Glasses",
    category: "accessories",
    price: 89.99,
    rating: 4.8,
    image: glasses,
    description: "Stylish glasses that add a fashionable finishing touch.",
    isNew: false,
    isSale: true,
    discount: 20,
  },

  {
    id: 30,
    name: "Gold Belt",
    category: "accessories",
    price: 59.99,
    rating: 4.7,
    image: goldbelt,
    description: "Elegant gold belt for a luxurious fashion statement.",
    isNew: true,
    isSale: false,
    discount: 0,
  },

  {
    id: 31,
    name: "Hair Clips",
    category: "accessories",
    price: 29.99,
    rating: 4.6,
    image: hairclips,
    description: "Beautiful hair clips for a stylish finishing touch.",
    isNew: false,
    isSale: false,
    discount: 0,
  },

  {
    id: 32,
    name: "Jewelry Set",
    category: "accessories",
    price: 149.99,
    rating: 4.9,
    image: jewelryset,
    description: "Elegant jewelry set designed for special occasions.",
    isNew: true,
    isSale: true,
    discount: 15,
  },

  {
    id: 33,
    name: "Necklace",
    category: "accessories",
    price: 79.99,
    rating: 4.8,
    image: necklace,
    description: "Elegant necklace that adds a luxurious finishing touch.",
    isNew: false,
    isSale: false,
    discount: 0,
  },

  {
    id: 34,
    name: "Ribbon",
    category: "accessories",
    price: 24.99,
    rating: 4.6,
    image: ribbon,
    description: "Simple and stylish ribbon accessory.",
    isNew: false,
    isSale: false,
    discount: 0,
  },

  {
    id: 35,
    name: "Hair Accessory",
    category: "accessories",
    price: 34.99,
    rating: 4.7,
    image: hairclips,
    description: "Stylish hair accessory for completing your look.",
    isNew: true,
    isSale: false,
    discount: 0,
  },

  {
    id: 36,
    name: "Fashion Accessory",
    category: "accessories",
    price: 69.99,
    rating: 4.7,
    image: asokesk,
    description: "Fashion accessory for a stylish and elegant look.",
    isNew: false,
    isSale: false,
    discount: 0,
  },
];