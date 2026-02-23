// ═══════════════════════════════════════════
//  PHRASES — Fill-in-the-blank sentences
// ═══════════════════════════════════════════

const PHRASES = [
  // ── Niveau 1 : Présent, réguliers ──
  { es_gap:'Yo ___ (hablar) español.',              es_full:'Yo hablo español.',                verb:'Hablar',    pronoun:'yo',       ans:['hablo'],     diff:1, tags:['regar'] },
  { es_gap:'Tú ___ (trabajar) mucho.',              es_full:'Tú trabajas mucho.',               verb:'Trabajar',  pronoun:'tú',       ans:['trabajas'],  diff:1, tags:['regar','trav'] },
  { es_gap:'Ella ___ (estudiar) medicina.',          es_full:'Ella estudia medicina.',            verb:'Estudiar',  pronoun:'él/ella',  ans:['estudia'],   diff:1, tags:['regar','trav'] },
  { es_gap:'Nosotros ___ (comer) a las dos.',        es_full:'Nosotros comemos a las dos.',       verb:'Comer',     pronoun:'nosotros', ans:['comemos'],   diff:1, tags:['regei'] },
  { es_gap:'Yo ___ (vivir) en Bilbao.',              es_full:'Yo vivo en Bilbao.',                verb:'Vivir',     pronoun:'yo',       ans:['vivo'],      diff:1, tags:['regei'] },
  { es_gap:'Ellos ___ (comprar) la comida.',         es_full:'Ellos compran la comida.',           verb:'Comprar',   pronoun:'ellos',    ans:['compran'],   diff:1, tags:['regar'] },
  { es_gap:'Vosotros ___ (beber) mucho café.',       es_full:'Vosotros bebéis mucho café.',        verb:'Beber',     pronoun:'vosotros', ans:['bebéis','bebeis'], diff:1, tags:['regei','bar'] },
  { es_gap:'Yo ___ (escribir) un WhatsApp.',         es_full:'Yo escribo un WhatsApp.',            verb:'Escribir',  pronoun:'yo',       ans:['escribo'],   diff:1, tags:['regei','comm'] },
  { es_gap:'Tú ___ (escuchar) música en el metro.',  es_full:'Tú escuchas música en el metro.',    verb:'Escuchar',  pronoun:'tú',       ans:['escuchas'],  diff:1, tags:['regar','comm'] },
  { es_gap:'Él ___ (pagar) con tarjeta.',            es_full:'Él paga con tarjeta.',               verb:'Pagar',     pronoun:'él/ella',  ans:['paga'],      diff:1, tags:['regar','bar'] },

  // ── Niveau 2 : Présent, irréguliers ──
  { es_gap:'Yo ___ (tener) mucha hambre.',           es_full:'Yo tengo mucha hambre.',             verb:'Tener',     pronoun:'yo',       ans:['tengo'],     diff:2, tags:['irre'] },
  { es_gap:'Tú ___ (poder) ayudarme.',               es_full:'Tú puedes ayudarme.',                verb:'Poder',     pronoun:'tú',       ans:['puedes'],    diff:2, tags:['irre','diph'] },
  { es_gap:'Ella ___ (querer) un café.',              es_full:'Ella quiere un café.',               verb:'Querer',    pronoun:'él/ella',  ans:['quiere'],    diff:2, tags:['irre','diph','bar'] },
  { es_gap:'Yo ___ (ir) al trabajo.',                 es_full:'Yo voy al trabajo.',                 verb:'Ir',        pronoun:'yo',       ans:['voy'],       diff:2, tags:['irre'] },
  { es_gap:'Nosotros ___ (hacer) deporte.',           es_full:'Nosotros hacemos deporte.',           verb:'Hacer',     pronoun:'nosotros', ans:['hacemos'],   diff:2, tags:['irre'] },
  { es_gap:'¿Tú ___ (saber) dónde está?',            es_full:'¿Tú sabes dónde está?',              verb:'Saber',     pronoun:'tú',       ans:['sabes'],     diff:2, tags:['irre'] },
  { es_gap:'Yo ___ (decir) la verdad.',               es_full:'Yo digo la verdad.',                 verb:'Decir',     pronoun:'yo',       ans:['digo'],      diff:2, tags:['irre','go'] },
  { es_gap:'Yo ___ (salir) esta noche.',              es_full:'Yo salgo esta noche.',               verb:'Salir',     pronoun:'yo',       ans:['salgo'],     diff:2, tags:['go','bar'] },
  { es_gap:'Ella ___ (venir) mañana.',                es_full:'Ella viene mañana.',                 verb:'Venir',     pronoun:'él/ella',  ans:['viene'],     diff:2, tags:['irre'] },
  { es_gap:'Yo ___ (conocer) un buen bar.',           es_full:'Yo conozco un buen bar.',            verb:'Conocer',   pronoun:'yo',       ans:['conozco'],   diff:2, tags:['go','bar'] },
  { es_gap:'Yo ___ (poner) la mesa.',                 es_full:'Yo pongo la mesa.',                  verb:'Poner',     pronoun:'yo',       ans:['pongo'],     diff:2, tags:['go','maison'] },
  { es_gap:'Él ___ (dormir) mucho.',                  es_full:'Él duerme mucho.',                   verb:'Dormir',    pronoun:'él/ella',  ans:['duerme'],    diff:2, tags:['diph'] },
  { es_gap:'Tú ___ (volver) tarde.',                  es_full:'Tú vuelves tarde.',                  verb:'Volver',    pronoun:'tú',       ans:['vuelves'],   diff:2, tags:['diph'] },
  { es_gap:'Yo ___ (empezar) a las nueve.',           es_full:'Yo empiezo a las nueve.',            verb:'Empezar',   pronoun:'yo',       ans:['empiezo'],   diff:2, tags:['diph','trav'] },
  { es_gap:'Ella ___ (cerrar) la ventana.',           es_full:'Ella cierra la ventana.',            verb:'Cerrar',    pronoun:'él/ella',  ans:['cierra'],    diff:2, tags:['diph','maison'] },
  { es_gap:'Yo no ___ (entender) nada.',              es_full:'Yo no entiendo nada.',               verb:'Entender',  pronoun:'yo',       ans:['entiendo'],  diff:2, tags:['diph','comm'] },
  { es_gap:'Yo ___ (preferir) el vino tinto.',        es_full:'Yo prefiero el vino tinto.',         verb:'Preferir',  pronoun:'yo',       ans:['prefiero'],  diff:2, tags:['diph','bar'] },
  { es_gap:'Ella ___ (pedir) una caña.',              es_full:'Ella pide una caña.',                verb:'Pedir',     pronoun:'él/ella',  ans:['pide'],      diff:2, tags:['bar'] },
  { es_gap:'Yo ___ (traer) algo para picar.',         es_full:'Yo traigo algo para picar.',         verb:'Traer',     pronoun:'yo',       ans:['traigo'],    diff:2, tags:['go','bar'] },

  // ── Niveau 2 : Réfléchis ──
  { es_gap:'Yo ___ (levantarse) a las siete.',        es_full:'Yo me levanto a las siete.',         verb:'Levantarse', pronoun:'yo',      ans:['me levanto'], diff:2, tags:['reflex','maison'] },
  { es_gap:'Tú ___ (sentarse) aquí.',                 es_full:'Tú te sientas aquí.',                verb:'Sentarse',  pronoun:'tú',       ans:['te sientas'], diff:2, tags:['reflex','diph'] },
  { es_gap:'Él ___ (ponerse) nervioso.',              es_full:'Él se pone nervioso.',               verb:'Ponerse',   pronoun:'él/ella',  ans:['se pone'],   diff:2, tags:['reflex'] },

  // ── Niveau 2 : Gustar ──
  { es_gap:'A mí ___ (gustar) el txakoli.',           es_full:'A mí me gusta el txakoli.',          verb:'Gustar',    pronoun:'yo',       ans:['me gusta'],  diff:2, tags:['bar'] },
  { es_gap:'A ellos ___ (gustar) las tapas.',         es_full:'A ellos les gustan las tapas.',      verb:'Gustar',    pronoun:'ellos',    ans:['les gustan','les gusta'], diff:2, tags:['bar'] },

  // ── Niveau 3 : Prétérit ──
  { es_gap:'Ayer yo ___ (ir) al cine.',               es_full:'Ayer yo fui al cine.',               verb:'Ir',        pronoun:'yo',       ans:['fui'],       diff:3, tags:['irre','pret'] },
  { es_gap:'Ella ___ (hacer) la cena anoche.',        es_full:'Ella hizo la cena anoche.',          verb:'Hacer',     pronoun:'él/ella',  ans:['hizo'],      diff:3, tags:['irre','pret'] },
  { es_gap:'Yo ___ (tener) un problema ayer.',        es_full:'Yo tuve un problema ayer.',          verb:'Tener',     pronoun:'yo',       ans:['tuve'],      diff:3, tags:['irre','pret'] },
  { es_gap:'Tú ___ (decir) que sí.',                  es_full:'Tú dijiste que sí.',                 verb:'Decir',     pronoun:'tú',       ans:['dijiste'],   diff:3, tags:['irre','pret'] },
  { es_gap:'Yo ___ (estar) enfermo la semana pasada.', es_full:'Yo estuve enfermo la semana pasada.', verb:'Estar', pronoun:'yo',        ans:['estuve'],    diff:3, tags:['irre','pret'] },
  { es_gap:'Él ___ (poner) la mesa ayer.',            es_full:'Él puso la mesa ayer.',              verb:'Poner',     pronoun:'él/ella',  ans:['puso'],      diff:3, tags:['irre','pret'] },
  { es_gap:'Yo ___ (venir) lo más rápido posible.',   es_full:'Yo vine lo más rápido posible.',     verb:'Venir',     pronoun:'yo',       ans:['vine'],      diff:3, tags:['irre','pret'] },
  { es_gap:'Nosotros ___ (saber) la verdad.',         es_full:'Nosotros supimos la verdad.',        verb:'Saber',     pronoun:'nosotros', ans:['supimos'],   diff:3, tags:['irre','pret'] },
  { es_gap:'Ella ___ (traer) la factura.',            es_full:'Ella trajo la factura.',             verb:'Traer',     pronoun:'él/ella',  ans:['trajo'],     diff:3, tags:['irre','pret'] },
  { es_gap:'Yo ___ (querer) ir pero no pude.',        es_full:'Yo quise ir pero no pude.',          verb:'Querer',    pronoun:'yo',       ans:['quise'],     diff:3, tags:['irre','pret'] },
  { es_gap:'Yo no ___ (poder) dormir anoche.',        es_full:'Yo no pude dormir anoche.',          verb:'Poder',     pronoun:'yo',       ans:['pude'],      diff:3, tags:['irre','pret'] },

  // ── Niveau 3 : Imparfait ──
  { es_gap:'De niño yo ___ (ir) a la playa.',         es_full:'De niño yo iba a la playa.',         verb:'Ir',        pronoun:'yo',       ans:['iba'],       diff:3, tags:['irre','imp'] },
  { es_gap:'Antes ella ___ (ser) muy tímida.',        es_full:'Antes ella era muy tímida.',         verb:'Ser',       pronoun:'él/ella',  ans:['era'],       diff:3, tags:['irre','imp'] },
  { es_gap:'Nosotros ___ (hacer) deporte todos los días.', es_full:'Nosotros hacíamos deporte todos los días.', verb:'Hacer', pronoun:'nosotros', ans:['hacíamos','haciamos'], diff:3, tags:['irre','imp'] },
  { es_gap:'Yo ___ (tener) 20 años cuando llegué.',   es_full:'Yo tenía 20 años cuando llegué.',    verb:'Tener',     pronoun:'yo',       ans:['tenía','tenia'], diff:3, tags:['irre','imp'] },
];

// Phrase lists for game filtering
const PHRASE_LISTS = [
  { id:'tout',   emoji:'🔥', label:'Toutes',               desc:'Toutes les phrases',            f: () => true },
  { id:'n1',     emoji:'🌱', label:'Niveau 1 — Réguliers', desc:'Présent, verbes réguliers',     f: p => p.diff === 1 },
  { id:'n2',     emoji:'⭐', label:'Niveau 2 — Irréguliers', desc:'Présent, verbes irréguliers', f: p => p.diff === 2 },
  { id:'n3',     emoji:'🔴', label:'Niveau 3 — Passé',     desc:'Prétérit et imparfait',         f: p => p.diff === 3 },
  { id:'bar',    emoji:'🍺', label:'Bar & tapas',           desc:'Contexte bar et sorties',       f: p => p.tags.includes('bar') },
  { id:'trav',   emoji:'💼', label:'Travail',               desc:'Contexte professionnel',        f: p => p.tags.includes('trav') },
];
