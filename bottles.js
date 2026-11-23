/*
  THE TAP HOUSE BOURBON LOYALTY: BOTTLE LIST
  ------------------------------------------
  This is the only file you need to edit to change the bottles on the site.

  To ADD a bottle: copy one { ... }, block, paste it, and change the words.
  To REMOVE a bottle: delete its whole { ... }, block.
  To mark a bottle SOLD OUT: add   soldOut: true,
  Photos go in the img/bottles folder. Use the file name in "photo".

  Fields (leave any out if you don't need them):
    name     the bottle name
    nickname the pick's name, like "Bardstown Boujee" (shows in gold)
    pick     true for a Tap House Pick (shows a gold badge). Every bottle on the site is one.
    isNew    true to show a "New" tag
    photo2   a second photo, shown when someone taps the bottle
    details  short facts, like ["9 Year", "110 Proof", "186 Bottles"]
    price    like "$64.99"
    points   like "10x Points". A pick below with points also shows at the top of the 10x section.
    photo    file name in img/bottles
    type     bourbon, rye, tequila or whiskey (used by the filter buttons)
    search   words to search on taphouseliquor.com (the card links there)
*/

window.SITE = {
  // Link for the "Check your rank" button
  rankLookup: "https://script.google.com/macros/s/AKfycbw-ZimsVjAs_Vt2_SmmrAyR9WkTjwg-35QsbsZHpmUQUSMrEXjUQNadeFWz2DlHhN8m/exec",

  // Title for the bonus-points section. Change it each month.
  bonusTitle: "This month's 10x points bottles",
};

window.BONUS_BOTTLES = [
  { name: "River Roots 8 Year", type: "bourbon", pick: true, price: "$104.99", points: "10x Points", photo: "river-roots-8.jpg", search: "River Roots" },
  { name: "Frey Ranch Four Grain Single Barrel", type: "bourbon", pick: true, price: "$89.99", points: "10x Points", photo: "frey-ranch-four-grain.jpg", search: "Frey Ranch Single Barrel" },
  { name: "Shortbarrel The Bee's Knees", type: "bourbon", pick: true, price: "$109.99", points: "10x Points", photo: "shortbarrel-bees-knees.jpg", search: "Shortbarrel" },
  { name: "Jypsi Whiskey 8 Year", type: "bourbon", pick: true, price: "$79.99", points: "10x Points", photo: "jypsi-8.jpg", search: "Jypsi" },
  { name: "Elijah Craig Private Barrel Holy Proof", type: "bourbon", pick: true, price: "$84.99", points: "10x Points", photo: "elijah-craig-holy-proof.jpg", search: "Elijah Craig Private Barrel" },
  { name: "Pinhook Single Barrel 10 Year Vertical Series", type: "bourbon", pick: true, price: "$94.99", points: "10x Points", photo: "pinhook-10-vertical.jpg", search: "Pinhook" },
  { name: "Woodford Double Oaked Barrel Proof", type: "bourbon", pick: true, price: "$99.99", points: "10x Points", photo: "woodford-double-oaked-bp.jpg", search: "Woodford Double Oaked" },
  { name: "Frey Ranch Single Barrel Rye", type: "rye", pick: true, points: "10x Points", photo: "frey-ranch-rye.jpg", search: "Frey Ranch Rye" },
  { name: "High Wire Jimmy Red Private Selection", type: "bourbon", pick: true, points: "10x Points", photo: "high-wire-jimmy-red.jpg", search: "Jimmy Red" },
];

window.SINGLE_BARRELS = [
  // Newest Tap House Picks (fall 2026)
  { name: "Company Distilling Single Barrel, Cherry Wood Finish", type: "whiskey", pick: true, isNew: true, points: "10x Points", details: ["Tennessee Whiskey", "Cherry Wood Finish", "127.6 Proof"], price: "$69.99", photo: "company-cherry-wood.jpg", photo2: "company-cherry-wood-signed.jpg", search: "Company Distilling" },
  { name: "Rare Character Single Barrel, Kentucky Straight Bourbon", nickname: "T.A.S.S.A.", type: "bourbon", pick: true, isNew: true, points: "10x Points", details: ["11 Yr 1 Mo", "118.7 Proof", "Cask Strength"], price: "$109.99", photo: "rare-character-tassa.jpg", search: "Rare Character" },
  { name: "Blue Note Honey Rye Cask", type: "rye", pick: true, isNew: true, points: "10x Points", details: ["Honey Barrel Finish", "120.3 Proof", "Cask Strength"], price: "$69.99", photo: "blue-note-honey-rye.jpg", search: "Blue Note" },
  { name: "Bardstown Bourbon Co. Wheated Single Barrel", nickname: "Bardstown Boujee", type: "bourbon", pick: true, isNew: true, points: "10x Points", details: ["Wheated", "127.6 Proof"], price: "$79.99", photo: "bardstown-boujee.jpg", search: "Bardstown Bourbon" },

  { name: "Chicken Cock", type: "bourbon", pick: true, details: ["5 Yr 2 Mo", "121.34 Proof", "90 Bottles"], price: "$59.99", photo: "chicken-cock.jpg", search: "Chicken Cock" },
  { name: "Sagamore Barrel Select", type: "rye", pick: true, details: ["9 Year", "110 Proof", "186 Bottles"], price: "$64.99", photo: "sagamore-barrel-select.jpg", search: "Sagamore" },
  { name: "Smoke Wagon", type: "bourbon", pick: true, details: ["8 Year", "118 Proof", "96 Bottles"], price: "$99.99", photo: "smoke-wagon-8.jpg", search: "Smoke Wagon" },
  { name: "Old Ezra 7 Year", type: "bourbon", pick: true, details: ["117 Proof", "210 Bottles"], price: "$64.99", photo: "old-ezra-7.jpg", search: "Old Ezra" },
  { name: "Nashville Barrel Co. Rye", type: "rye", pick: true, details: ["7 Year", "109.48 Proof", "102 Bottles"], price: "$79.99", photo: "nashville-barrel-rye.jpg", search: "Nashville Barrel" },
  { name: "Nashville Barrel Bourbon", type: "bourbon", pick: true, details: ["11 Yr 10 Mo", "118.76 Proof", "120 Bottles"], price: "$184.99", photo: "nashville-barrel-bourbon.jpg", search: "Nashville Barrel" },
  { name: "Nashtucky by Nashville Barrel Co.", type: "bourbon", pick: true, details: ["7 Yr 2 Mo", "122.34 Proof", "96 Bottles"], price: "$79.99", photo: "nashtucky-7.jpg", search: "Nashtucky" },
  { name: "Jeptha Creed Wheated", type: "bourbon", pick: true, details: ["7 Yr 1 Mo", "125.54 Proof", "156 Bottles"], price: "$69.99", photo: "jeptha-creed-wheated.jpg", search: "Jeptha Creed" },
  { name: "Penelope Project X, PX Sherry Cask", type: "bourbon", pick: true, details: ["6+ Years", "112 Proof", "156 Bottles"], price: "$74.99", photo: "penelope-project-x.jpg", search: "Penelope" },
  { name: "ASW Fiddler Antique Rye", type: "rye", pick: true, details: ["8 Yr 4 Mo", "116.8 Proof", "168 Bottles"], price: "$99.99", photo: "asw-fiddler-antique-rye.jpg", search: "Fiddler" },
  { name: "Knob Creek Cask Strength", type: "bourbon", pick: true, details: ["9 Yr 8 Mo", "124 Proof", "138 Bottles"], price: "$64.99", photo: "knob-creek-cask.jpg", search: "Knob Creek" },
  { name: "El Tesoro Single Barrel Tequila", type: "tequila", pick: true, details: ["80 Proof", "240 Bottles"], price: "$84.99", photo: "el-tesoro.jpg", search: "El Tesoro" },
  { name: "Elliott Brothers Reserve", type: "whiskey", pick: true, details: ["10 Year", "Malbec Cask", "128 Proof"], price: "$139.99", photo: "elliott-brothers.jpg", search: "Elliott Brothers" },
  { name: "Dark Arts Whisky", type: "whiskey", pick: true, details: ["11 Yr 5 Mo"], price: "$169.99", photo: "dark-arts.jpg", search: "Dark Arts" },
  { name: "Larceny Barrel Proof", type: "bourbon", pick: true, details: ["7 Year", "126 Proof"], price: "$69.99", photo: "larceny-bp.jpg", search: "Larceny Barrel Proof" },
  { name: "Hogsworth Bourbon & Armagnac Barrel Select", type: "bourbon", pick: true, price: "$59.99", photo: "hogsworth.jpg", search: "Hogsworth" },
  { name: "Rare Character Single Barrel Series", type: "whiskey", pick: true, details: ["20 Yr 11 Mo", "American Light Whiskey"], photo: "rare-character.jpg", search: "Rare Character" },
];
