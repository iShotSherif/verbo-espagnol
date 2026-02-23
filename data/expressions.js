// ═══════════════════════════════════════════
//  EXPRESSIONS — Idiomatic expressions tied to verbs
// ═══════════════════════════════════════════

const EXPRESSIONS = [
  // ── Tener ──
  { verb:'Tener', es:'tener hambre',       fr:'avoir faim',             ctx:'Tengo mucha hambre, ¿comemos?',         ctx_fr:'J\'ai très faim, on mange ?',            tags:['quotidien'], ans:['avoir faim'] },
  { verb:'Tener', es:'tener sed',          fr:'avoir soif',             ctx:'Tengo sed, ¿pedimos algo?',             ctx_fr:'J\'ai soif, on commande quelque chose ?', tags:['quotidien','bar'], ans:['avoir soif'] },
  { verb:'Tener', es:'tener prisa',        fr:'être pressé',            ctx:'Perdona, tengo mucha prisa.',           ctx_fr:'Pardon, je suis très pressé.',            tags:['quotidien'], ans:['être pressé','etre presse'] },
  { verb:'Tener', es:'tener razón',        fr:'avoir raison',           ctx:'Tienes razón, vamos a otro sitio.',     ctx_fr:'Tu as raison, allons ailleurs.',          tags:['quotidien'], ans:['avoir raison'] },
  { verb:'Tener', es:'tener ganas de',     fr:'avoir envie de',         ctx:'Tengo ganas de ir a la playa.',         ctx_fr:'J\'ai envie d\'aller à la plage.',        tags:['quotidien'], ans:['avoir envie','avoir envie de'] },
  { verb:'Tener', es:'tener sueño',        fr:'avoir sommeil',          ctx:'Tengo mucho sueño, me voy a dormir.',   ctx_fr:'J\'ai très sommeil, je vais dormir.',     tags:['quotidien'], ans:['avoir sommeil'] },
  { verb:'Tener', es:'tener miedo',        fr:'avoir peur',             ctx:'Tengo miedo de las arañas.',            ctx_fr:'J\'ai peur des araignées.',               tags:['emotion'], ans:['avoir peur'] },
  { verb:'Tener', es:'tener calor / frío', fr:'avoir chaud / froid',    ctx:'¿No tienes frío sin chaqueta?',         ctx_fr:'Tu n\'as pas froid sans veste ?',         tags:['quotidien'], ans:['avoir chaud','avoir froid'] },

  // ── Hacer ──
  { verb:'Hacer', es:'hacer falta',        fr:'falloir / manquer',      ctx:'Hace falta más tiempo.',                ctx_fr:'Il faut plus de temps.',                  tags:['quotidien'], ans:['falloir','manquer','il faut'] },
  { verb:'Hacer', es:'hacer caso',         fr:'écouter / obéir',        ctx:'No me hace caso nunca.',                ctx_fr:'Il ne m\'écoute jamais.',                 tags:['quotidien'], ans:['écouter','ecouter','obéir','obeir'] },
  { verb:'Hacer', es:'hacer cola',         fr:'faire la queue',         ctx:'Hay que hacer cola para entrar.',       ctx_fr:'Il faut faire la queue pour entrer.',     tags:['quotidien'], ans:['faire la queue'] },
  { verb:'Hacer', es:'hacer buen/mal tiempo', fr:'faire beau/mauvais temps', ctx:'Hoy hace buen tiempo, ¡vamos al parque!', ctx_fr:'Aujourd\'hui il fait beau, allons au parc !', tags:['quotidien'], ans:['faire beau','faire mauvais'] },

  // ── Ir ──
  { verb:'Ir',    es:'ir de pintxos',      fr:'aller manger des pintxos', ctx:'¿Vamos de pintxos por el Casco Viejo?', ctx_fr:'On va manger des pintxos dans le Casco Viejo ?', tags:['bar','bilbao'], ans:['aller manger des pintxos'] },
  { verb:'Ir',    es:'ir de compras',      fr:'aller faire les courses/du shopping', ctx:'Voy de compras al centro.', ctx_fr:'Je vais faire du shopping en ville.',    tags:['quotidien'], ans:['aller faire les courses','faire du shopping','faire les courses'] },
  { verb:'Ir',    es:'ir tirando',         fr:'aller doucement / tenir le coup', ctx:'—¿Qué tal? —Voy tirando.', ctx_fr:'—Comment ça va ? —Je tiens le coup.',           tags:['quotidien'], ans:['tenir le coup','aller doucement'] },

  // ── Dar ──
  { verb:'Dar',   es:'dar igual',          fr:'être égal / s\'en ficher', ctx:'Me da igual, elige tú.',              ctx_fr:'Ça m\'est égal, choisis toi.',            tags:['quotidien'], ans:['être égal','etre egal','s\'en ficher'] },
  { verb:'Dar',   es:'dar un paseo',       fr:'faire une promenade',    ctx:'¿Damos un paseo por la ría?',           ctx_fr:'On fait une promenade le long de la ría ?', tags:['quotidien','bilbao'], ans:['faire une promenade','se promener'] },
  { verb:'Dar',   es:'darse cuenta',       fr:'se rendre compte',       ctx:'Me he dado cuenta de que es tarde.',    ctx_fr:'Je me suis rendu compte qu\'il est tard.', tags:['quotidien'], ans:['se rendre compte'] },

  // ── Estar ──
  { verb:'Estar', es:'estar de acuerdo',   fr:'être d\'accord',         ctx:'Estoy de acuerdo contigo.',             ctx_fr:'Je suis d\'accord avec toi.',             tags:['quotidien'], ans:['être d\'accord','etre d\'accord'] },
  { verb:'Estar', es:'estar harto/a',      fr:'en avoir marre',         ctx:'Estoy harto de esperar.',               ctx_fr:'J\'en ai marre d\'attendre.',             tags:['emotion'], ans:['en avoir marre'] },
  { verb:'Estar', es:'estar de broma',     fr:'plaisanter / rigoler',   ctx:'¡Estás de broma! ¿En serio?',          ctx_fr:'Tu plaisantes ! Sérieusement ?',          tags:['quotidien'], ans:['plaisanter','rigoler'] },

  // ── Ser ──
  { verb:'Ser',   es:'ser de',             fr:'être de / venir de',     ctx:'Soy de Francia pero vivo en Bilbao.',   ctx_fr:'Je suis de France mais je vis à Bilbao.', tags:['presentation'], ans:['être de','etre de','venir de'] },

  // ── Poner ──
  { verb:'Poner', es:'ponerse nervioso/a', fr:'devenir nerveux',        ctx:'Me pongo nervioso antes de los exámenes.', ctx_fr:'Je deviens nerveux avant les examens.', tags:['emotion'], ans:['devenir nerveux'] },
  { verb:'Poner', es:'ponerse enfermo/a',  fr:'tomber malade',          ctx:'Se ha puesto enfermo con el frío.',     ctx_fr:'Il est tombé malade avec le froid.',      tags:['quotidien'], ans:['tomber malade'] },

  // ── Quedar ──
  { verb:'Querer', es:'quedar con alguien', fr:'retrouver quelqu\'un / se donner rendez-vous', ctx:'¿Quedamos a las 8?', ctx_fr:'On se retrouve à 8h ?', tags:['quotidien','bar'], ans:['retrouver','se donner rendez-vous','se retrouver'] },

  // ── Llevar ──
  { verb:'Llevar', es:'llevar tiempo',     fr:'ça fait du temps',       ctx:'Llevo tres años viviendo aquí.',        ctx_fr:'Ça fait trois ans que je vis ici.',       tags:['quotidien'], ans:['ça fait du temps','ca fait du temps'] },
  { verb:'Llevar', es:'llevarse bien/mal', fr:'bien/mal s\'entendre',   ctx:'Me llevo muy bien con mis vecinos.',    ctx_fr:'Je m\'entends très bien avec mes voisins.', tags:['quotidien'], ans:['bien s\'entendre','s\'entendre bien','s\'entendre'] },

  // ── Echar ──
  { verb:'Hacer', es:'echar de menos',     fr:'manquer (qqn)',          ctx:'Echo de menos a mi familia.',           ctx_fr:'Ma famille me manque.',                   tags:['emotion'], ans:['manquer'] },

  // ── Salir ──
  { verb:'Salir', es:'salir de marcha',    fr:'sortir faire la fête',   ctx:'Los viernes salimos de marcha.',        ctx_fr:'Les vendredis on sort faire la fête.',    tags:['bar','quotidien'], ans:['sortir faire la fête','sortir','faire la fête','faire la fete'] },

  // ── Pedir ──
  { verb:'Pedir', es:'pedir la cuenta',    fr:'demander l\'addition',   ctx:'¿Pedimos la cuenta?',                  ctx_fr:'On demande l\'addition ?',                tags:['bar'], ans:['demander l\'addition','demander l\'addition'] },
  { verb:'Pedir', es:'pedir perdón',       fr:'demander pardon',        ctx:'Te pido perdón, fue culpa mía.',       ctx_fr:'Je te demande pardon, c\'était ma faute.', tags:['quotidien'], ans:['demander pardon'] },

  // ── Pasar ──
  { verb:'Hacer', es:'pasarlo bien/mal',   fr:'s\'amuser / passer un bon/mauvais moment', ctx:'Lo pasamos genial en la fiesta.', ctx_fr:'On s\'est super bien amusés à la fête.', tags:['quotidien'], ans:['s\'amuser','passer un bon moment'] },
];

// Expression lists for quiz filtering
const EXPR_LISTS = [
  { id:'toutes',    emoji:'🔥', label:'Toutes',           desc:'Toutes les expressions',         f: () => true },
  { id:'quotidien', emoji:'🏠', label:'Quotidien',        desc:'Expressions du quotidien',       f: e => e.tags.includes('quotidien') },
  { id:'bar',       emoji:'🍺', label:'Bar & sorties',    desc:'Commander, sortir, trinquer',    f: e => e.tags.includes('bar') },
  { id:'emotion',   emoji:'❤️', label:'Émotions',         desc:'Exprimer ses sentiments',        f: e => e.tags.includes('emotion') },
  { id:'bilbao',    emoji:'🏙️', label:'Bilbao',           desc:'Expressions locales',            f: e => e.tags.includes('bilbao') },
];
