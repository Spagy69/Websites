// ── Populate mask dropdown ────────────────────────────────────
(function () {
  const masks = [
    [0,'0.0.0.0'],[1,'128.0.0.0'],[2,'192.0.0.0'],[3,'224.0.0.0'],
    [4,'240.0.0.0'],[5,'248.0.0.0'],[6,'252.0.0.0'],[7,'254.0.0.0'],
    [8,'255.0.0.0'],[9,'255.128.0.0'],[10,'255.192.0.0'],[11,'255.224.0.0'],
    [12,'255.240.0.0'],[13,'255.248.0.0'],[14,'255.252.0.0'],[15,'255.254.0.0'],
    [16,'255.255.0.0'],[17,'255.255.128.0'],[18,'255.255.192.0'],[19,'255.255.224.0'],
    [20,'255.255.240.0'],[21,'255.255.248.0'],[22,'255.255.252.0'],[23,'255.255.254.0'],
    [24,'255.255.255.0'],[25,'255.255.255.128'],[26,'255.255.255.192'],[27,'255.255.255.224'],
    [28,'255.255.255.240'],[29,'255.255.255.248'],[30,'255.255.255.252'],
    [31,'255.255.255.254'],[32,'255.255.255.255'],
  ];
  const sel = document.getElementById('mask-select');
  masks.forEach(([p, d]) => {
    const o = document.createElement('option');
    o.value = p;
    o.textContent = `${d} (/${p})`;
    if (p === 24) o.selected = true;
    sel.appendChild(o);
  });
})();

// ── Helpers ───────────────────────────────────────────────────
function ipToInt(str) {
  const parts = str.trim().split('.');
  if (parts.length !== 4) return null;
  let v = 0;
  for (const x of parts) {
    const n = parseInt(x, 10);
    if (isNaN(n) || n < 0 || n > 255) return null;
    v = (v << 8) | n;
  }
  return v >>> 0;
}

function intToIp(n) {
  return [(n>>>24)&255,(n>>>16)&255,(n>>>8)&255,n&255].join('.');
}

const RESULT_IDS = ['val-network','val-broadcast','val-total','val-usable','val-first','val-last'];

function resetResults() {
  RESULT_IDS.forEach(id => {
    const el = document.getElementById(id);
    el.classList.remove('populated');
    el.textContent = '—';
  });
}

function setResult(id, value) {
  const el = document.getElementById(id);
  // Remove class to re-trigger animation if already set
  el.classList.remove('populated');
  void el.offsetWidth; // reflow to restart animation
  el.textContent = value;
  el.classList.add('populated');
}

// ── Calculate ─────────────────────────────────────────────────
function calculate() {
  const errEl = document.getElementById('err');
  errEl.textContent = '';
  resetResults();

  const ipInt  = ipToInt(document.getElementById('ip-input').value);
  const prefix = parseInt(document.getElementById('mask-select').value, 10);

  if (ipInt === null) {
    errEl.textContent = 'Neplatna IP adresa. Zadej format 192.168.1.0';
    return;
  }

  const mask      = prefix === 0 ? 0 : (0xffffffff << (32 - prefix)) >>> 0;
  const network   = (ipInt & mask) >>> 0;
  const broadcast = (network | (~mask >>> 0)) >>> 0;
  const total     = Math.pow(2, 32 - prefix);
  const usable    = prefix >= 31 ? (prefix === 32 ? 1 : 2) : total - 2;
  const first     = prefix >= 31 ? network   : (network + 1) >>> 0;
  const last      = prefix >= 31 ? broadcast : (broadcast - 1) >>> 0;

  // Stagger the results slightly for a smooth cascade effect
  const results = [
    ['val-network',   intToIp(network) + ' /' + prefix],
    ['val-broadcast', intToIp(broadcast)],
    ['val-total',     total.toLocaleString('cs-CZ')],
    ['val-usable',    usable.toLocaleString('cs-CZ')],
    ['val-first',     intToIp(first)],
    ['val-last',      intToIp(last)],
  ];

  results.forEach(([id, val], i) => {
    setTimeout(() => setResult(id, val), i * 40);
  });
}

// ── Events ────────────────────────────────────────────────────
document.getElementById('ip-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') calculate();
});
document.getElementById('mask-select').addEventListener('change', () => {
  if (document.getElementById('ip-input').value.trim()) calculate();
});

// ── On load ───────────────────────────────────────────────────
document.getElementById('ip-input').value = '192.168.1.0';
calculate();
