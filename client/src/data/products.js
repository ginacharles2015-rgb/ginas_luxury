
// Complete product catalog for Gina's Luxury Fashion

const cloudinaryImages = {
  gown2:
    "https://res.cloudinary.com/dda6odnoo/image/upload/v1788466943/2clgown_o2zzip.jpg",

  armcuff:
    "https://res.cloudinary.com/dda6odnoo/image/upload/v1788466935/armcuff_ddyrxp.jpg",

  asokesk:
    "https://res.cloudinary.com/dda6odnoo/image/upload/v1788466947/asokesk_okioia.jpg",

  bangle:
    "https://res.cloudinary.com/dda6odnoo/image/upload/v1788466948/bangle_saslqe.jpg",

  bluegown:
    "https://res.cloudinary.com/dda6odnoo/image/upload/v1788466962/bluegown_pzcrba.jpg",

  blueskirt:
    "https://res.cloudinary.com/dda6odnoo/image/upload/v1788466952/blueskirt_b1uaue.jpg",

  bracelet:
    "https://res.cloudinary.com/dda6odnoo/image/upload/v1788466941/bracelet_bkvdxx.jpg",

  brownbodycon:
    "https://res.cloudinary.com/dda6odnoo/image/upload/v1788466954/brownbodycon_kxx9fp.jpg",

  brownpants:
    "https://res.cloudinary.com/dda6odnoo/image/upload/v1788466954/brownpants_j7gvk5.jpg",

  browntop:
    "https://res.cloudinary.com/dda6odnoo/image/upload/v1788466952/browntop_yyl2ev.jpg",

  cropyellowtop:
    "https://res.cloudinary.com/dda6odnoo/image/upload/v1788466959/cropyellowtop_gohbhd.jpg",

  floralgown:
    "https://res.cloudinary.com/dda6odnoo/image/upload/v1788466971/floralgown_tdulgq.jpg",

  floralskirt:
    "https://res.cloudinary.com/dda6odnoo/image/upload/v1788466961/floralskirt_fqnszz.jpg",

  flowertop:
    "https://res.cloudinary.com/dda6odnoo/image/upload/v1788466960/flowertop_oqyu6p.jpg",

  gatheredtop:
    "https://res.cloudinary.com/dda6odnoo/image/upload/v1788466962/gatheredtop_usqtbb.jpg",

  glasses:
    "https://res.cloudinary.com/dda6odnoo/image/upload/v1788466965/glasses_ttcbjb.jpg",

  goldbelt:
    "https://res.cloudinary.com/dda6odnoo/image/upload/v1788466962/goldbelt_ppu1c7.jpg",

  greengown:
    "https://res.cloudinary.com/dda6odnoo/image/upload/v1788466967/greengown_gv7kfm.jpg",

  hairclips:
    "https://res.cloudinary.com/dda6odnoo/image/upload/v1788466965/hairclips_zmvrgk.jpg",

  jean:
    "https://res.cloudinary.com/dda6odnoo/image/upload/v1788466965/jean_eghwjb.jpg",

  jewelryset:
    "https://res.cloudinary.com/dda6odnoo/image/upload/v1788466966/jewelryset_eghabm.jpg",

  longpinkgown:
    "https://res.cloudinary.com/dda6odnoo/image/upload/v1788466966/longpinkgown_qgw4xv.jpg",

  multigown:
    "https://res.cloudinary.com/dda6odnoo/image/upload/v1788466968/multigown_j7trzn.jpg",

  necklace:
    "https://res.cloudinary.com/dda6odnoo/image/upload/v1788466967/necklace_uiblr2.jpg",

  pinkgown:
    "https://res.cloudinary.com/dda6odnoo/image/upload/v1788466970/pinkgown_j375gy.jpg",

  pinkskirt:
    "https://res.cloudinary.com/dda6odnoo/image/upload/v1788466969/pinkskirt_s1bdns.jpg",

  pinktop:
    "https://res.cloudinary.com/dda6odnoo/image/upload/v1788466975/pinktop_gaxddp.jpg",

  ribbon:
    "https://res.cloudinary.com/dda6odnoo/image/upload/v1788466971/ribbon_sei9xz.jpg",

  satinskirt:
    "https://res.cloudinary.com/dda6odnoo/image/upload/v1788466971/satinskirt_ltm7sq.jpg",

  seagreentop:
    "https://res.cloudinary.com/dda6odnoo/image/upload/v1788466972/seagreentop_kqoirb.jpg",

  tailoredshorts:
    "https://res.cloudinary.com/dda6odnoo/image/upload/v1788466972/tailoredshorts_p0wzo7.jpg",

  whitegown:
    "https://res.cloudinary.com/dda6odnoo/image/upload/v1788466973/whitegown_yjvtky.jpg",

  whitetop:
    "https://res.cloudinary.com/dda6odnoo/image/upload/v1788466975/whitetop_nxwqw1.jpg",

  widepants:
    "https://res.cloudinary.com/dda6odnoo/image/upload/v1788466973/widepants_y1yndm.jpg",

  yellow2top:
    "https://res.cloudinary.com/dda6odnoo/image/upload/v1788466974/yellow2top_zq7fin.jpg",
};

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
    image: cloudinaryImages.gown2,
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
    image: cloudinaryImages.bluegown,
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
    image: cloudinaryImages.floralgown,
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
    image: cloudinaryImages.greengown,
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
    image: cloudinaryImages.longpinkgown,
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
    image: cloudinaryImages.multigown,
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
    image: cloudinaryImages.pinkgown,
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
    image: cloudinaryImages.whitegown,
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
    image: cloudinaryImages.brownbodycon,
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
    image: cloudinaryImages.browntop,
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
    image: cloudinaryImages.cropyellowtop,
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
    image: cloudinaryImages.flowertop,
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
    image: cloudinaryImages.gatheredtop,
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
    image: cloudinaryImages.pinktop,
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
    image: cloudinaryImages.seagreentop,
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
    image: cloudinaryImages.whitetop,
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
    image: cloudinaryImages.yellow2top,
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
    image: cloudinaryImages.blueskirt,
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
    image: cloudinaryImages.floralskirt,
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
    image: cloudinaryImages.brownpants,
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
    image: cloudinaryImages.jean,
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
    image: cloudinaryImages.satinskirt,
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
    image: cloudinaryImages.tailoredshorts,
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
    image: cloudinaryImages.widepants,
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
    image: cloudinaryImages.asokesk,
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
    image: cloudinaryImages.armcuff,
    description:
      "Elegant arm cuff accessory for a luxurious finishing touch.",
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
    image: cloudinaryImages.bangle,
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
    image: cloudinaryImages.bracelet,
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
    image: cloudinaryImages.glasses,
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
    image: cloudinaryImages.goldbelt,
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
    image: cloudinaryImages.hairclips,
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
    image: cloudinaryImages.jewelryset,
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
    image: cloudinaryImages.necklace,
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
    image: cloudinaryImages.ribbon,
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
    image: cloudinaryImages.hairclips,
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
    image: cloudinaryImages.asokesk,
    description: "Fashion accessory for a stylish and elegant look.",
    isNew: false,
    isSale: false,
    discount: 0,
  },
];

