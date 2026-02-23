// ═══════════════════════════════════════════
//  ENGINE — Shared game logic
//  Used by: verbo_game.html, expressions.html, phrases.html, vocabulaire.html
// ═══════════════════════════════════════════

// --- Answer normalization ---
function norm(s) {
  return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
          .toLowerCase().trim().replace(/['']/g, "'");
}

// --- Answer checking ---
function checkAnswer(input, answers) {
  const a = norm(input);
  return a.length >= 2 && answers.some(c => norm(c) === a);
}

// --- Deck shuffle (Fisher-Yates) ---
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// --- localStorage scoring (namespaced by prefix) ---
function getBest(prefix, id) {
  return parseInt(localStorage.getItem(prefix + '-b-' + id) || '0');
}
function setBest(prefix, id, n) {
  if (n > getBest(prefix, id)) localStorage.setItem(prefix + '-b-' + id, n);
}
function getRuns(prefix, id) {
  return parseInt(localStorage.getItem(prefix + '-r-' + id) || '0');
}
function addRun(prefix, id) {
  localStorage.setItem(prefix + '-r-' + id, getRuns(prefix, id) + 1);
}
