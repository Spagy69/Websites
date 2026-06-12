// pane kotmele stejnak tohle nebudete číst, ale kdyby náhodou, tak jsem to napsal za 3 hodiny a je to úplně na hovno, takže se nedivte, že to vypadá jako z roku 1999 :D
// ps použil jsem asi jen 10% ai

var statusMsgs = [
  "Analyzuje internet...",
  "Prozkoumává obličejové rysy...",
  "Prochází sociální sítě...",
  "Porovnává DNA vzorky...",
  "Přistupuje k databázi Pana Kotmela :)...",
  "Skenování satelitních snímků...",
  "Kontroluje cestovní pasy...",
  "Hledá shody ve školních záznamech...",
  "Prochází dark web...",
  "Porovnává hlas a chůzi...",
  "Dešifruje biometrická data...",
  "Finalizuje výsledky...",
];

var foods = ["Svíčková", "Sushi", "Kebab", "Špagety", "Tacos"];
var mottos = ["Nás je víc", "Kdo jsem?", "I já se divím", "Nejsem originál?"];
var locs = ["Ulaanbaatar, Mongolsko", "Tromsø, Norsko", "Minsk, Bělorusko", "Port Moresby, Papua NG"];

function previewFoto() {
  var file = document.getElementById("foto").files[0];
  if (!file) return;
  var reader = new FileReader();
  reader.onload = function(e) {
    var img = document.getElementById("preview");
    img.src = e.target.result;
    img.style.display = "block";
  };
  reader.readAsDataURL(file);
}

function show(id) {
  document.querySelectorAll(".page").forEach(function(el) { el.style.display = "none"; });
  document.getElementById(id).style.display = "block";
  window.scrollTo(0, 0);
}

function startScan() {
  var jmeno = document.getElementById("jmeno").value.trim();
  var vek   = document.getElementById("vek").value.trim();
  var oci   = document.getElementById("oci").value;
  var vyska = document.getElementById("vyska").value.trim();
  var hobby = document.getElementById("hobby").value.trim();

  var err = "";
  if (jmeno.length < 2)                                          err = "Zadejte jméno.";
  else if (!vek || isNaN(vek) || vek < 1 || vek > 120)          err = "Věk musí být číslo 1–120.";
  else if (!oci)                                                  err = "Vyberte barvu očí.";
  else if (!vyska || isNaN(vyska) || vyska < 100 || vyska > 250) err = "Výška musí být číslo 100–250.";
  else if (hobby.length < 2)                                     err = "Zadejte alespoň jeden koníček.";

  document.getElementById("err").textContent = err;
  if (err) return;

  show("scanning");
  rotateStatus();
  runCountdown();
}

function rotateStatus() {
  var i = 0;
  var el = document.getElementById("status-msg");
  function next() {
    if (document.getElementById("scanning").style.display === "none") return;
    el.textContent = statusMsgs[i % statusMsgs.length];
    i++;
    setTimeout(next, 1600 + Math.random() * 700);
  }
  next();
}

function runCountdown() {
  var n = 1000000;
  function tick() {
    n = Math.max(1, n - Math.max(1, Math.floor(n * 0.07)));
    document.getElementById("count").textContent = n.toLocaleString("cs-CZ");

    var progress = (1 - Math.log10(Math.max(1, n)) / 6) * 100;
    document.getElementById("bar").value = progress;
    document.getElementById("pct").textContent = Math.floor(progress) + " %";

    if (n > 1) {
      var delay = n > 100000 ? 30 : n > 10000 ? 60 : n > 1000 ? 130 : n > 100 ? 230 : 400;
      setTimeout(tick, delay);
    } else {
      setTimeout(showResult, 800);
    }
  }
  tick();
}

function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
function rnd(a, b) { return (Math.random() * (b - a) + a).toFixed(1); }

function showResult() {
  show("result");

  var rf = document.getElementById("result-foto");
    rf.src = "imgs/profil.png"; 
    rf.style.display = "block";

  var jmeno = document.getElementById("jmeno").value.trim();
  var vek   = parseInt(document.getElementById("vek").value) || 25;

  var rows = [
    ["Jméno dvojčete", "Max von " + jmeno.split(" ").pop()],
    ["Lokace",         pick(locs)],
    ["Věk",            (vek + Math.floor(Math.random() * 4)) + " let"],
    ["Shoda tváře",    rnd(97, 99.9) + " %"],
    ["Shoda DNA",      rnd(85, 99) + " %"],
    ["Oblíbené jídlo", pick(foods)],
    ["Životní motto",  pick(mottos)],
    ["Status",         "Naživu. Hledá tě také."]
  ];

  var html = "<table>";
  rows.forEach(function(r) {
    html += "<tr><td>" + r[0] + "</td><td><b>" + r[1] + "</b></td></tr>";
  });
  html += "</table>";
  document.getElementById("stats").innerHTML = html;
}
