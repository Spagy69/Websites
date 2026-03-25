// ─── ICONS REMOVED ───────────────────────────────────────────────────────────
const ICONS = {
  chevdown: `▼`,
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
// tx: "all" | "manual" | "auto" | "both"
// paint: bool  damage: bool
// screws: array of {n, s}  — n = count, s = size string
const SECTIONS = [
  // ── ENGINE ───────────────────────────────────────────────────────────────
  {
    id:"engine", name:"Engine Assembly", icon:"cog", color:"#2563eb",
    optional:false,
    parts:[
      { id:"air_cleaner",       name:"Air Cleaner",           qty:1, tx:"all",    paint:false, damage:false, screws:[{n:1,s:"7mm"}] },
      { id:"alternator",        name:"Alternator",            qty:1, tx:"all",    paint:false, damage:true,  screws:[{n:1,s:"11mm"},{n:1,s:"Screw"}] },
      { id:"aux_shaft",         name:"Aux Shaft",             qty:1, tx:"all",    paint:false, damage:true,  screws:[{n:3,s:"6mm"}] },
      { id:"aux_sprocket",      name:"Aux Shaft Sprocket",    qty:1, tx:"all",    paint:true,  damage:false, screws:[{n:1,s:"14mm"}] },
      { id:"block",             name:"Block",                 qty:1, tx:"all",    paint:true,  damage:true,  screws:[{n:2,s:"12mm"}] },
      { id:"camshaft",          name:"Camshaft",              qty:1, tx:"all",    paint:false, damage:true,  screws:[{n:2,s:"6mm"}] },
      { id:"camshaft_sprocket", name:"Camshaft Sprocket",     qty:1, tx:"all",    paint:true,  damage:false, screws:[{n:1,s:"14mm"}] },
      { id:"carburettor",       name:"Carburettor",           qty:1, tx:"all",    paint:false, damage:false, screws:[{n:5,s:"9mm"}] },
      { id:"clutch_cover",      name:"Clutch Cover Plate",    qty:1, tx:"manual", paint:true,  damage:false, screws:[{n:6,s:"8mm"}] },
      { id:"clutch_disc",       name:"Clutch Disc",           qty:1, tx:"manual", paint:false, damage:true,  screws:[] },
      { id:"clutch_pressure",   name:"Clutch Pressure Plate", qty:1, tx:"manual", paint:false, damage:false, screws:[] },
      { id:"crankshaft",        name:"Crankshaft",            qty:1, tx:"all",    paint:false, damage:true,  screws:[] },
      { id:"crank_pulley",      name:"Crankshaft Pulley",     qty:1, tx:"all",    paint:true,  damage:false, screws:[{n:1,s:"13mm"}] },
      { id:"cylinder_head",     name:"Cylinder Head",         qty:1, tx:"all",    paint:false, damage:false, screws:[{n:10,s:"9mm"}] },
      { id:"distributor",       name:"Distributor",           qty:1, tx:"all",    paint:false, damage:true,  screws:[{n:1,s:"Screw"}] },
      { id:"exhaust_manifold",  name:"Exhaust Manifold",      qty:1, tx:"all",    paint:false, damage:false, screws:[{n:8,s:"9mm"}] },
      { id:"exhaust_headers",   name:"Exhaust Headers",       qty:1, tx:"all",    paint:false, damage:false, screws:[{n:8,s:"9mm"}] },
      { id:"fan",               name:"Fan",                   qty:1, tx:"all",    paint:true,  damage:false, screws:[{n:4,s:"8mm"}] },
      { id:"fan_belt",          name:"Fan Belt",              qty:1, tx:"all",    paint:false, damage:true,  screws:[] },
      { id:"flexplate",         name:"Flexplate",             qty:1, tx:"auto",   paint:false, damage:false, screws:[{n:6,s:"12mm"}] },
      { id:"flywheel",          name:"Flywheel",              qty:1, tx:"manual", paint:false, damage:false, screws:[{n:6,s:"12mm"}] },
      { id:"fuel_pump",         name:"Fuel Pump",             qty:1, tx:"all",    paint:false, damage:true,  screws:[{n:2,s:"7mm"}] },
      { id:"gearbox",           name:"Gearbox",               qty:1, tx:"all",    paint:false, damage:true,  screws:[{n:6,s:"11mm"}] },
      { id:"headgasket",        name:"Headgasket",            qty:1, tx:"all",    paint:false, damage:true,  screws:[] },
      { id:"main_bearings",     name:"Main Bearings",         qty:1, tx:"all",    paint:false, damage:true,  screws:[{n:2,s:"10mm"}] },
      { id:"oil_filter",        name:"Oil Filter",            qty:1, tx:"all",    paint:false, damage:true,  screws:[{n:0,s:"Hand tighten"}] },
      { id:"oilpan",            name:"Oilpan",                qty:1, tx:"all",    paint:false, damage:false, screws:[{n:10,s:"7mm"},{n:1,s:"13mm"}] },
      { id:"oil_pump",          name:"Oil Pump",              qty:1, tx:"all",    paint:false, damage:true,  screws:[{n:2,s:"6mm"}] },
      { id:"piston",            name:"Piston",                qty:4, tx:"all",    paint:false, damage:true,  screws:[{n:2,s:"8mm"}] },
      { id:"rear_plate",        name:"Rear Plate",            qty:1, tx:"all",    paint:false, damage:false, screws:[] },
      { id:"rocker_arm",        name:"Rocker",                qty:8, tx:"all",    paint:false, damage:true,  screws:[{n:1,s:"Clip"}] },
      { id:"rocker_cover",      name:"Rocker Cover",          qty:1, tx:"all",    paint:false, damage:false, screws:[{n:8,s:"7mm"}] },
      { id:"starter",           name:"Starter",               qty:1, tx:"all",    paint:false, damage:true,  screws:[{n:1,s:"6mm"},{n:3,s:"8mm"}] },
      { id:"spark_plug",        name:"Spark Plug",            qty:4, tx:"all",    paint:false, damage:true,  screws:[{n:1,s:"Spark wrench"}] },
      { id:"thermostat",        name:"Thermostat",            qty:1, tx:"all",    paint:false, damage:true,  screws:[] },
      { id:"thermo_housing",    name:"Thermostat Housing",    qty:1, tx:"all",    paint:false, damage:false, screws:[{n:2,s:"8mm"}] },
      { id:"timing_belt",       name:"Timing Belt",           qty:1, tx:"all",    paint:false, damage:true,  screws:[] },
      { id:"timing_cover",      name:"Timing Belt Cover",     qty:1, tx:"all",    paint:true,  damage:false, screws:[{n:2,s:"6mm"}] },
      { id:"water_pump",        name:"Water Pump",            qty:1, tx:"all",    paint:false, damage:true,  screws:[{n:4,s:"7mm"}] },
      { id:"wp_pulley",         name:"Water Pump Pulley",     qty:1, tx:"all",    paint:true,  damage:false, screws:[{n:4,s:"8mm"}] },
    ]
  },

  // ── AUXILIARY ────────────────────────────────────────────────────────────
  {
    id:"auxiliary", name:"Auxiliary Assembly", icon:"plug", color:"#7c3aed",
    optional:false,
    parts:[
      { id:"battery",           name:"Battery",               qty:1, tx:"all",    paint:false, damage:true,  screws:[{n:2,s:"8mm"}] },
      { id:"brake_master",      name:"Brake Master Cylinder", qty:1, tx:"all",    paint:false, damage:true,  screws:[{n:4,s:"8mm"}] },
      { id:"brake_lines",       name:"Brake Lines",           qty:1, tx:"all",    paint:false, damage:false, screws:[{n:6,s:"7mm"},{n:2,s:"10mm"}] },
      { id:"clutch_cable",      name:"Clutch Cable",          qty:1, tx:"manual", paint:false, damage:true,  screws:[{n:1,s:"7mm"}] },
      { id:"exhaust_front",     name:"Exhaust Pipe Front",    qty:1, tx:"all",    paint:false, damage:false, screws:[{n:1,s:"7mm"},{n:2,s:"8mm"},{n:2,s:"11mm"}] },
      { id:"exhaust_rear",      name:"Exhaust Pipe Rear",     qty:1, tx:"all",    paint:false, damage:false, screws:[{n:1,s:"9mm"},{n:2,s:"7mm"}] },
      { id:"fuel_tank",         name:"Fuel Tank",             qty:1, tx:"all",    paint:false, damage:false, screws:[{n:2,s:"10mm"}] },
      { id:"gb_crossmember",    name:"Gearbox Crossmember",   qty:1, tx:"all",    paint:false, damage:false, screws:[{n:2,s:"14mm"}] },
      { id:"heater_box",        name:"Heater Box",            qty:1, tx:"all",    paint:false, damage:true,  screws:[{n:4,s:"7mm"}] },
      { id:"heater_hose_inlet", name:"Heater Hose Inlet",     qty:1, tx:"all",    paint:false, damage:false, screws:[{n:2,s:"Screw"}] },
      { id:"heater_hose_outlet",name:"Heater Hose Outlet",    qty:1, tx:"all",    paint:false, damage:false, screws:[{n:2,s:"Screw"}] },
      { id:"ignition_coil",     name:"Ignition Coil",         qty:1, tx:"all",    paint:false, damage:true,  screws:[{n:2,s:"8mm"}] },
      { id:"muffler",           name:"Muffler",               qty:1, tx:"all",    paint:false, damage:false, screws:[{n:1,s:"8mm"}] },
      { id:"power_brake",       name:"Power Brake Cylinder",  qty:1, tx:"all",    paint:false, damage:true,  screws:[{n:4,s:"8mm"}] },
      { id:"radiator",          name:"Radiator",              qty:1, tx:"all",    paint:false, damage:true,  screws:[{n:4,s:"10mm"}] },
      { id:"rad_hose_bot",      name:"Radiator Hose Bottom",  qty:1, tx:"all",    paint:false, damage:false, screws:[{n:2,s:"Screw"}] },
      { id:"rad_hose_top",      name:"Radiator Hose Top",     qty:1, tx:"all",    paint:false, damage:false, screws:[{n:2,s:"Screw"}] },
      { id:"steering_col",      name:"Steering Column",       qty:1, tx:"all",    paint:false, damage:false, screws:[{n:2,s:"12mm"}] },
      { id:"steering_rack",     name:"Steering Rack",         qty:1, tx:"all",    paint:false, damage:true,  screws:[{n:4,s:"9mm"},{n:2,s:"11mm"}] },
      { id:"steering_shaft",    name:"Steering Shaft",        qty:1, tx:"all",    paint:false, damage:false, screws:[{n:1,s:"6mm"}] },
      { id:"wiper_motor",       name:"Wiper Motor Assembly",  qty:1, tx:"all",    paint:false, damage:true,  screws:[{n:4,s:"7mm"}] },
    ]
  },

  // ── SUSPENSION ───────────────────────────────────────────────────────────
  {
    id:"suspension", name:"Suspension Assembly", icon:"disc", color:"#0891b2",
    optional:false,
    parts:[
      { id:"brake_front_l",     name:"Front Left Brake Assembly", qty:1, tx:"all",    paint:false, damage:false, screws:[{n:2,s:"12mm"}] },
      { id:"brake_front_r",     name:"Front Right Brake Assembly",qty:1, tx:"all",    paint:false, damage:false, screws:[{n:2,s:"12mm"}] },
      { id:"coil_spring",       name:"Coil Spring",               qty:4, tx:"all",    paint:false, damage:true,  screws:[] },
      { id:"driveshaft",        name:"Driveshaft",                qty:1, tx:"all",    paint:false, damage:true,  screws:[{n:4,s:"8mm"}] },
      { id:"front_link_l",      name:"Front Link Left",           qty:1, tx:"all",    paint:false, damage:false, screws:[{n:2,s:"11mm"},{n:1,s:"12mm"}] },
      { id:"front_link_r",      name:"Front Link Right",          qty:1, tx:"all",    paint:false, damage:false, screws:[{n:2,s:"11mm"},{n:1,s:"12mm"}] },
      { id:"front_lower_arm",   name:"Front Lower Control Arm",   qty:2, tx:"all",    paint:false, damage:false, screws:[{n:1,s:"14mm"}] },
      { id:"front_upper_arm",   name:"Front Upper Control Arm",   qty:2, tx:"all",    paint:false, damage:false, screws:[{n:2,s:"14mm"}] },
      { id:"rear_axle",         name:"Rear Axle",                 qty:1, tx:"all",    paint:false, damage:true,  screws:[{n:1,s:"7mm"},{n:4,s:"15mm"}] },
      { id:"rear_lower_arm",    name:"Rear Lower Control Arm",    qty:2, tx:"all",    paint:false, damage:false, screws:[{n:1,s:"13mm"}] },
      { id:"rear_upper_arm",    name:"Rear Upper Control Arm",    qty:2, tx:"all",    paint:false, damage:false, screws:[{n:1,s:"15mm"}] },
      { id:"shock_front",       name:"Front Shock Absorber",      qty:2, tx:"all",    paint:false, damage:true,  screws:[{n:2,s:"8mm"},{n:1,s:"12mm"}] },
      { id:"shock_rear",        name:"Rear Shock Absorber",       qty:2, tx:"all",    paint:false, damage:true,  screws:[{n:2,s:"13mm"}] },
      { id:"wheels",            name:"Wheels",                    qty:4, tx:"all",    paint:true,  damage:true,  screws:[{n:4,s:"15mm"}] },
    ]
  },

  // ── BODY ─────────────────────────────────────────────────────────────────
  {
    id:"body", name:"Body Assembly", icon:"carfront", color:"#059669",
    optional:false,
    parts:[
      { id:"bootlid",           name:"Bootlid",                   qty:1, tx:"all",    paint:true,  damage:true,  screws:[{n:4,s:"8mm"}] },
      { id:"door_left",         name:"Door Left",                 qty:1, tx:"all",    paint:true,  damage:true,  screws:[{n:4,s:"8mm"}] },
      { id:"door_right",        name:"Door Right",                qty:1, tx:"all",    paint:true,  damage:true,  screws:[{n:4,s:"8mm"}] },
      { id:"fender_left",       name:"Fender Left",               qty:1, tx:"all",    paint:true,  damage:true,  screws:[{n:6,s:"8mm"}] },
      { id:"fender_right",      name:"Fender Right",              qty:1, tx:"all",    paint:true,  damage:true,  screws:[{n:6,s:"8mm"}] },
      { id:"front_bumper",      name:"Front Bumper",              qty:1, tx:"all",    paint:true,  damage:true,  screws:[{n:2,s:"10mm"}] },
      { id:"grille",            name:"Grille",                    qty:1, tx:"all",    paint:true,  damage:true,  screws:[{n:2,s:"9mm"}] },
      { id:"headlight_asm_l",   name:"Headlight Assembly (Left)", qty:1, tx:"all",    paint:false, damage:false, screws:[{n:2,s:"9mm"}] },
      { id:"headlight_asm_r",   name:"Headlight Assembly (Right)",qty:1, tx:"all",    paint:false, damage:false, screws:[{n:2,s:"9mm"}] },
      { id:"hood",              name:"Hood",                      qty:1, tx:"all",    paint:true,  damage:true,  screws:[{n:4,s:"7mm"}] },
      { id:"hubcap",            name:"Hubcap",                    qty:4, tx:"all",    paint:false, damage:false, screws:[] },
      { id:"rear_bumper",       name:"Rear Bumper",               qty:1, tx:"all",    paint:true,  damage:true,  screws:[{n:2,s:"10mm"}] },
      { id:"rear_light_left",   name:"Rear Light Left",           qty:1, tx:"all",    paint:false, damage:false, screws:[{n:2,s:"8mm"}] },
      { id:"rear_light_right",  name:"Rear Light Right",          qty:1, tx:"all",    paint:false, damage:false, screws:[{n:2,s:"8mm"}] },
    ]
  },

  // ── INTERIOR ─────────────────────────────────────────────────────────────
  {
    id:"interior", name:"Interior Assembly", icon:"sofa", color:"#db2777",
    optional:false,
    parts:[
      { id:"seat_driver",       name:"Seat Driver",               qty:1, tx:"all",    paint:false, damage:false, screws:[{n:3,s:"10mm"},{n:1,s:"8mm"}] },
      { id:"seat_passenger",    name:"Seat Passenger",            qty:1, tx:"all",    paint:false, damage:false, screws:[{n:3,s:"10mm"},{n:1,s:"8mm"}] },
      { id:"center_console",    name:"Center Console",            qty:1, tx:"all",    paint:false, damage:false, screws:[{n:2,s:"6mm"}] },
      { id:"col_shroud_l",      name:"Column Shroud Left",        qty:1, tx:"all",    paint:false, damage:false, screws:[{n:1,s:"8mm"}] },
      { id:"col_shroud_r",      name:"Column Shroud Right",       qty:1, tx:"all",    paint:false, damage:false, screws:[{n:1,s:"8mm"}] },
      { id:"dashboard",         name:"Dashboard",                 qty:1, tx:"all",    paint:false, damage:false, screws:[{n:2,s:"7mm"}] },
      { id:"dash_bot",          name:"Dashboard Bottom Cover",    qty:1, tx:"all",    paint:false, damage:false, screws:[{n:2,s:"Screw"}] },
      { id:"dash_top",          name:"Dashboard Top Cover",       qty:1, tx:"all",    paint:false, damage:false, screws:[] },
      { id:"fresh_air",         name:"Fresh Air Duct",            qty:1, tx:"all",    paint:false, damage:false, screws:[{n:1,s:"8mm"}] },
      { id:"gear_lever",        name:"Gear Lever",                qty:1, tx:"both",   paint:false, damage:false, screws:[] },
      { id:"handbrake",         name:"Hand Brake Lever",          qty:1, tx:"all",    paint:false, damage:false, screws:[{n:1,s:"6mm"},{n:2,s:"7mm"}] },
      { id:"instrument_panel",  name:"Instrument Panel",          qty:1, tx:"all",    paint:false, damage:false, screws:[{n:2,s:"Screw"}] },
      { id:"parcel_shelf",      name:"Parcel Shelf",              qty:1, tx:"all",    paint:false, damage:false, screws:[] },
      { id:"pedal_manual",      name:"Manual Pedal Box",          qty:1, tx:"manual", paint:false, damage:false, screws:[{n:4,s:"8mm"}] },
      { id:"pedal_auto",        name:"Automatic Pedal Box",       qty:1, tx:"auto",   paint:false, damage:false, screws:[{n:4,s:"8mm"}] },
      { id:"radio",             name:"Radio",                     qty:1, tx:"all",    paint:false, damage:false, screws:[] },
      { id:"rear_seat_back",    name:"Rear Seat Backrest",        qty:1, tx:"all",    paint:false, damage:false, screws:[{n:2,s:"12mm"}] },
      { id:"rear_seat_bench",   name:"Rear Seat Bench",           qty:1, tx:"all",    paint:false, damage:false, screws:[{n:2,s:"12mm"}] },
      { id:"steering_wheel",    name:"Steering Wheel",            qty:1, tx:"all",    paint:false, damage:false, screws:[{n:1,s:"14mm"}] },
      { id:"vent_box",          name:"Ventilation Box",           qty:1, tx:"all",    paint:false, damage:false, screws:[{n:4,s:"7mm"}] },
    ]
  },

  // ── AFTERMARKET ──────────────────────────────────────────────────────────
  {
    id:"aftermarket", name:"Aftermarket Parts", icon:"zap", color:"#d97706",
    optional:true,
    parts:[
      { id:"afr_gauge",         name:"AFR Gauge",                 qty:1, tx:"all",    paint:false, damage:false, screws:[{n:1,s:"Screw"}] },
      { id:"airdam",            name:"Airdam Spoiler",            qty:1, tx:"all",    paint:true,  damage:true,  screws:[] },
      { id:"amp_sub",           name:"Amplifier & Subwoofers",    qty:1, tx:"all",    paint:false, damage:false, screws:[{n:2,s:"5mm"}] },
      { id:"antenna",           name:"Antenna",                   qty:2, tx:"all",    paint:false, damage:false, screws:[{n:1,s:"8mm"}] },
      { id:"bucket_seat_d",     name:"Bucket Seat (Driver)",      qty:1, tx:"all",    paint:false, damage:false, screws:[{n:4,s:"10mm"}] },
      { id:"bucket_seat_p",     name:"Bucket Seat (Passenger)",   qty:1, tx:"all",    paint:false, damage:false, screws:[{n:4,s:"10mm"}] },
      { id:"cd_player",         name:"CD Player",                 qty:1, tx:"all",    paint:false, damage:false, screws:[] },
      { id:"collector",         name:"Collector",                 qty:1, tx:"all",    paint:false, damage:false, screws:[{n:2,s:"11mm"},{n:1,s:"8mm"}] },
      { id:"ducktail",          name:"Ducktail Spoiler",          qty:1, tx:"all",    paint:true,  damage:true,  screws:[] },
      { id:"extinguisher",      name:"Extinguisher Clamp",        qty:1, tx:"all",    paint:false, damage:false, screws:[{n:2,s:"8mm"}] },
      { id:"extra_gauges",      name:"Extra Gauges",              qty:1, tx:"all",    paint:false, damage:false, screws:[{n:2,s:"Screw"}] },
      { id:"fender_flares",     name:"Fender Flares",             qty:1, tx:"all",    paint:true,  damage:true,  screws:[] },
      { id:"fiberglass_hood",   name:"Fiberglass Hood",           qty:1, tx:"all",    paint:true,  damage:true,  screws:[{n:0,s:"Clips"}] },
      { id:"long_headers",      name:"Long Headers",              qty:1, tx:"all",    paint:false, damage:false, screws:[{n:8,s:"9mm"}] },
      { id:"front_rear_pipe",   name:"Front-Rear Pipe",           qty:1, tx:"all",    paint:false, damage:false, screws:[{n:2,s:"8mm"},{n:1,s:"9mm"}] },
      { id:"marker_lights",     name:"Marker Lights",             qty:1, tx:"all",    paint:false, damage:false, screws:[{n:2,s:"8mm"}] },
      { id:"rally_coil",        name:"Rally Coil Springs",        qty:4, tx:"all",    paint:false, damage:false, screws:[] },
      { id:"racing_harness",    name:"Racing Harness",            qty:1, tx:"all",    paint:false, damage:false, screws:[{n:4,s:"10mm"}] },
      { id:"rally_mudflaps",    name:"Rally Mudflaps",            qty:1, tx:"all",    paint:false, damage:false, screws:[] },
      { id:"rally_shock_f",     name:"Rally Shock Absorbers Front",qty:2,tx:"all",   paint:false, damage:true,  screws:[{n:2,s:"8mm"},{n:1,s:"12mm"}] },
      { id:"rally_shock_r",     name:"Rally Shock Absorbers Rear", qty:2,tx:"all",   paint:false, damage:true,  screws:[{n:2,s:"13mm"}] },
      { id:"rally_wheel",       name:"Rally Steering Wheel",      qty:1, tx:"all",    paint:false, damage:false, screws:[{n:1,s:"14mm"}] },
      { id:"rear_spoiler",      name:"Rear Spoiler",              qty:1, tx:"all",    paint:true,  damage:false, screws:[] },
      { id:"side_skirts",       name:"Side Skirts",               qty:1, tx:"all",    paint:true,  damage:true,  screws:[{n:2,s:"11mm"}] },
      { id:"skid_plate",        name:"Skid Plate",                qty:1, tx:"all",    paint:false, damage:false, screws:[{n:4,s:"9mm"}] },
      { id:"rally_lights",      name:"Rally Lights",              qty:1, tx:"all",    paint:false, damage:false, screws:[{n:2,s:"10mm"}] },
      { id:"rev_limiter",       name:"Rev Limiter",               qty:1, tx:"all",    paint:false, damage:false, screws:[{n:1,s:"Screw"}] },
      { id:"roll_cage",         name:"Roll Cage",                 qty:1, tx:"all",    paint:true,  damage:false, screws:[] },
      { id:"fuel_cell",         name:"Safety Fuel Cell 19L",      qty:1, tx:"all",    paint:false, damage:false, screws:[{n:4,s:"9mm"}] },
      { id:"side_pipe",         name:"Side Pipe",                 qty:1, tx:"all",    paint:false, damage:false, screws:[{n:1,s:"8mm"}] },
      { id:"tachometer",        name:"Tachometer",                qty:1, tx:"all",    paint:false, damage:false, screws:[{n:1,s:"Screw"}] },
      { id:"window_grille",     name:"Window Grille",             qty:1, tx:"all",    paint:false, damage:false, screws:[] },
    ]
  },
];

// ─── STATE ────────────────────────────────────────────────────────────────────
const STORAGE_KEY = "rivett_winter_v1";
let state = {};     // { partId: checkedCount }
let collapsed = {}; // { sectionId: bool }
let currentTx = "all";

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const p = JSON.parse(saved);
      state     = p.state     || {};
      collapsed = p.collapsed || {};
      currentTx = p.currentTx || "all";
    }
  } catch(e) { state = {}; collapsed = {}; currentTx = "all"; }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ state, collapsed, currentTx }));
}

// ─── BUILD DOM ────────────────────────────────────────────────────────────────
function build() {
  const main = document.getElementById("main-content");
  main.innerHTML = "";

  SECTIONS.forEach(sec => {
    const card = document.createElement("div");
    card.className = "section-card" + (collapsed[sec.id] ? " collapsed" : "");
    card.id = "sec-" + sec.id;

    // HEADER
    const header = document.createElement("div");
    header.className = "section-header";
    header.addEventListener("click", () => toggleSection(sec.id));

    // icon box
    const iconEl = document.createElement("div");
    iconEl.className = "section-icon";
    iconEl.style.display = "none";
    iconEl.innerHTML = "";

    // meta
    const meta = document.createElement("div");
    meta.className = "section-meta";

    const nameRow = document.createElement("div");
    nameRow.className = "section-name";
    nameRow.textContent = sec.name;
    if (sec.optional) {
      const ob = document.createElement("span");
      ob.className = "optional-badge";
      ob.textContent = "OPTIONAL";
      nameRow.appendChild(ob);
    }

    const subEl = document.createElement("div");
    subEl.className = "section-sub";
    subEl.id = "sub-" + sec.id;
    meta.appendChild(nameRow);
    meta.appendChild(subEl);

    // stats
    const stats = document.createElement("div");
    stats.className = "section-stats";
    const fracEl = document.createElement("div");
    fracEl.className = "section-fraction";
    fracEl.id = "frac-" + sec.id;
    const badge = document.createElement("div");
    badge.id = "badge-" + sec.id;
    badge.className = "section-pct-badge pct-0";
    stats.appendChild(fracEl);
    stats.appendChild(badge);

    const chev = document.createElement("div");
    chev.className = "chevron";
    chev.innerHTML = ICONS.chevdown;

    header.appendChild(meta);
    header.appendChild(stats);
    header.appendChild(chev);
    card.appendChild(header);

    // SECTION PROGRESS BAR
    const progWrap = document.createElement("div");
    progWrap.className = "section-progress-wrap";
    const tr = document.createElement("div");
    tr.className = "progress-track";
    const fill = document.createElement("div");
    fill.className = "progress-fill";
    fill.id = "secbar-" + sec.id;
    fill.style.background = `linear-gradient(90deg, ${sec.color}cc, ${sec.color})`;
    tr.appendChild(fill);
    progWrap.appendChild(tr);
    card.appendChild(progWrap);

    // PARTS BODY
    const body = document.createElement("div");
    body.className = "parts-body";
    body.id = "body-" + sec.id;

    sec.parts.forEach(part => {
      body.appendChild(buildPartRow(part));
    });

    card.appendChild(body);
    main.appendChild(card);
  });

  applyFilters();
  updateAllProgress();
}

function buildPartRow(part) {
  const checked = state[part.id] || 0;
  const row = document.createElement("div");
  row.className = "part-row";
  row.id = "row-" + part.id;

  // — checkboxes in a box pattern (2 rows)
  const cluster = document.createElement("div");
  cluster.className = "checkbox-cluster";
  
  const cols = Math.max(1, Math.ceil(part.qty / 2));
  cluster.style.gridTemplateColumns = `repeat(${cols}, 17px)`;

  for (let i = 0; i < part.qty; i++) {
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.className = "part-checkbox";
    cb.checked = i < checked;
    cb.dataset.partId = part.id;
    cb.dataset.idx = String(i);
    cb.addEventListener("change", (e) => {
      const newChecked = e.target.checked ? i + 1 : i;
      const cbs = document.querySelectorAll(`[data-part-id="${part.id}"]`);
      cbs.forEach((box, idx) => { box.checked = idx < newChecked; });
      updatePartChecked(part.id, newChecked);
    });
    cluster.appendChild(cb);
  }

  // — info block
  const info = document.createElement("div");
  info.className = "part-info";

  // name row
  const nameEl = document.createElement("div");
  nameEl.className = "part-name" + (checked >= part.qty ? " all-done" : "");
  nameEl.id = "name-" + part.id;
  nameEl.textContent = part.name;

  if (part.qty > 1) {
    const qb = document.createElement("span");
    qb.className = "qty-badge";
    qb.textContent = "×" + part.qty;
    nameEl.appendChild(qb);
  }

  if (part.tx !== "all") {
    const tb = document.createElement("span");
    tb.className = "tx-badge " + (part.tx === "both" ? "both" : part.tx);
    tb.textContent = part.tx === "manual" ? "Manual" : part.tx === "auto" ? "Automatic" : "Auto / Manual";
    nameEl.appendChild(tb);
  }

  info.appendChild(nameEl);

  // attributes row (paintable / damageable)
  if (part.paint || part.damage) {
    const attrs = document.createElement("div");
    attrs.className = "part-attrs";
    if (part.paint) {
      const a = document.createElement("span");
      a.className = "attr-tag attr-paint";
      a.innerHTML = `Paintable`;
      attrs.appendChild(a);
    }
    if (part.damage) {
      const a = document.createElement("span");
      a.className = "attr-tag attr-damage";
      a.innerHTML = `Damageable`;
      attrs.appendChild(a);
    }
    info.appendChild(attrs);
  }

  // screws row
  const screwRow = document.createElement("div");
  screwRow.className = "screws-row";
  const usefulScrews = part.screws.filter(s => s.n > 0 || s.s);
  if (usefulScrews.length > 0) {
    usefulScrews.forEach(s => {
      const tag = document.createElement("span");
      tag.className = "screw-tag";
      const label = s.n > 0 ? `${s.n}× ${s.s}` : s.s;
      tag.innerHTML = `${label}`;
      screwRow.appendChild(tag);
    });
  }

  // — counter
  const counter = document.createElement("div");
  counter.className = "part-counter";
  const fracSpan = document.createElement("span");
  fracSpan.className = "part-counter-fraction";
  fracSpan.id = "cfrac-" + part.id;
  fracSpan.textContent = checked + " / " + part.qty;
  fracSpan.style.color = checked >= part.qty ? "var(--green)" : "var(--text-dim)";
  counter.appendChild(fracSpan);

  row.appendChild(cluster);
  row.appendChild(info);
  row.appendChild(screwRow);
  row.appendChild(counter);
  return row;
}

// ─── EVENTS ───────────────────────────────────────────────────────────────────
function updatePartChecked(partId, newChecked) {
  const part = findPart(partId);
  if (!part) return;

  state[partId] = newChecked;

  const nameEl = document.getElementById("name-" + partId);
  if (nameEl) nameEl.className = "part-name" + (newChecked >= part.qty ? " all-done" : "");

  const fracEl = document.getElementById("cfrac-" + partId);
  if (fracEl) {
    fracEl.textContent = newChecked + " / " + part.qty;
    fracEl.style.color = newChecked >= part.qty ? "var(--green)" : "var(--text-dim)";
  }

  saveState();
  updateAllProgress();
}

function toggleSection(id) {
  collapsed[id] = !collapsed[id];
  const card = document.getElementById("sec-" + id);
  if (card) card.classList.toggle("collapsed", collapsed[id]);
  saveState();
}

// ─── FILTERS ──────────────────────────────────────────────────────────────────
function applyFilters() {
  const query = (document.getElementById("part-search")?.value || "").toLowerCase();
  const dmgOnly = document.getElementById("filter-damage")?.checked;
  const pntOnly = document.getElementById("filter-paint")?.checked;

  SECTIONS.forEach(sec => {
    let sectionHasVisibleParts = false;
    sec.parts.forEach(part => {
      const row = document.getElementById("row-" + part.id);
      if (!row) return;

      let hidden = false;
      if (currentTx === "manual" && part.tx === "auto") hidden = true;
      if (currentTx === "auto" && part.tx === "manual") hidden = true;
      if (query && !part.name.toLowerCase().includes(query)) hidden = true;
      if (dmgOnly && !part.damage) hidden = true;
      if (pntOnly && !part.paint) hidden = true;

      row.classList.toggle("tx-hidden", hidden);

      if (!hidden) sectionHasVisibleParts = true;
    });

    const card = document.getElementById("sec-" + sec.id);
    if (card) {
      card.style.display = sectionHasVisibleParts ? "block" : "none";
    }
  });

  updateAllProgress();
}

// ─── PROGRESS ─────────────────────────────────────────────────────────────────
function updateAllProgress() {
  let totalAvail = 0, totalDone = 0;

  SECTIONS.forEach(sec => {
    let avail = 0, done = 0;
    let visCount = 0;

    sec.parts.forEach(part => {
      const row = document.getElementById("row-" + part.id);
      const hidden = row && row.classList.contains("tx-hidden");
      if (!hidden) {
        avail += part.qty;
        done  += Math.min(state[part.id] || 0, part.qty);
        visCount++;
      }
    });

    const pct = avail > 0 ? Math.round((done / avail) * 100) : 0;

    const bar = document.getElementById("secbar-" + sec.id);
    if (bar) bar.style.width = pct + "%";

    const frac = document.getElementById("frac-" + sec.id);
    if (frac) frac.textContent = done + " / " + avail;

    const sub = document.getElementById("sub-" + sec.id);
    if (sub) sub.textContent = visCount + " part" + (visCount !== 1 ? "s" : "");

    const badge = document.getElementById("badge-" + sec.id);
    if (badge) {
      badge.textContent = pct + "%";
      badge.className = "section-pct-badge " + pctClass(pct);
    }

    totalAvail += avail;
    totalDone  += done;
  });

  const gp = totalAvail > 0 ? Math.round((totalDone / totalAvail) * 100) : 0;
  const gb = document.getElementById("global-bar");
  if (gb) gb.style.width = gp + "%";
  const gf = document.getElementById("global-fraction");
  if (gf) gf.textContent = totalDone + " / " + totalAvail;
  const gpEl = document.getElementById("global-pct");
  if (gpEl) gpEl.textContent = gp + "%";
}

function pctClass(p) {
  if (p === 0)  return "pct-0";
  if (p < 33)   return "pct-low";
  if (p < 66)   return "pct-mid";
  if (p < 100)  return "pct-high";
  return "pct-full";
}

function findPart(id) {
  for (const sec of SECTIONS) {
    const p = sec.parts.find(x => x.id === id);
    if (p) return p;
  }
  return null;
}

// ─── INFO MODAL ───────────────────────────────────────────────────────────────
const infoModal = document.getElementById("info-modal");
const btnInfo = document.getElementById("btn-info");
const btnCloseInfo = document.getElementById("btn-close-info");

function openInfoModal() {
  infoModal?.classList.add("active");
}

function closeInfoModal() {
  infoModal?.classList.remove("active");
  localStorage.setItem(STORAGE_KEY + "_info_seen", "true");
}

btnInfo?.addEventListener("click", openInfoModal);
btnCloseInfo?.addEventListener("click", closeInfoModal);
infoModal?.addEventListener("click", (e) => {
  if (e.target === infoModal) closeInfoModal();
});

// Show modal on first visit
if (!localStorage.getItem(STORAGE_KEY + "_info_seen")) {
  setTimeout(openInfoModal, 400);
}

// ─── CONTROLS ─────────────────────────────────────────────────────────────────
document.getElementById("btn-expand").addEventListener("click", () => {
  SECTIONS.forEach(sec => {
    collapsed[sec.id] = false;
    document.getElementById("sec-" + sec.id)?.classList.remove("collapsed");
  });
  saveState();
});

document.getElementById("btn-collapse").addEventListener("click", () => {
  SECTIONS.forEach(sec => {
    collapsed[sec.id] = true;
    document.getElementById("sec-" + sec.id)?.classList.add("collapsed");
  });
  saveState();
});

document.getElementById("btn-reset").addEventListener("click", () => {
  if (!confirm("Reset ALL progress? This cannot be undone.")) return;
  state = {};
  saveState();
  build();
});

document.querySelectorAll(".tx-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tx-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentTx = btn.dataset.tx;
    saveState();
    applyFilters();
  });
});

document.getElementById("part-search")?.addEventListener("input", applyFilters);
document.getElementById("filter-damage")?.addEventListener("change", applyFilters);
document.getElementById("filter-paint")?.addEventListener("change", applyFilters);

// ─── INIT ─────────────────────────────────────────────────────────────────────
loadState();
build();

// restore TX button state
document.querySelectorAll(".tx-btn").forEach(btn => {
  btn.classList.toggle("active", btn.dataset.tx === currentTx);
});
