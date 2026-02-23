// ═══════════════════════════════════════════
//  EXPRESSIONS — Idiomatic expressions (~70)
// ═══════════════════════════════════════════

const EXPRESSIONS = [
  // ══════════ TENER ══════════
  { verb:'Tener', es:'tener hambre',       fr:'avoir faim',             ctx:'Tengo mucha hambre, ¿comemos?',         ctx_fr:'J\'ai très faim, on mange ?',            tags:['quotidien'], ans:['avoir faim'] },
  { verb:'Tener', es:'tener sed',          fr:'avoir soif',             ctx:'Tengo sed, ¿pedimos algo?',             ctx_fr:'J\'ai soif, on commande quelque chose ?', tags:['quotidien','bar'], ans:['avoir soif'] },
  { verb:'Tener', es:'tener prisa',        fr:'être pressé',            ctx:'Perdona, tengo mucha prisa.',           ctx_fr:'Pardon, je suis très pressé.',            tags:['quotidien'], ans:['être pressé','etre presse'] },
  { verb:'Tener', es:'tener razón',        fr:'avoir raison',           ctx:'Tienes razón, vamos a otro sitio.',     ctx_fr:'Tu as raison, allons ailleurs.',          tags:['quotidien'], ans:['avoir raison'] },
  { verb:'Tener', es:'tener ganas de',     fr:'avoir envie de',         ctx:'Tengo ganas de ir a la playa.',         ctx_fr:'J\'ai envie d\'aller à la plage.',        tags:['quotidien'], ans:['avoir envie','avoir envie de'] },
  { verb:'Tener', es:'tener sueño',        fr:'avoir sommeil',          ctx:'Tengo mucho sueño, me voy a dormir.',   ctx_fr:'J\'ai très sommeil, je vais dormir.',     tags:['quotidien'], ans:['avoir sommeil'] },
  { verb:'Tener', es:'tener miedo',        fr:'avoir peur',             ctx:'Tengo miedo de las arañas.',            ctx_fr:'J\'ai peur des araignées.',               tags:['emotion'], ans:['avoir peur'] },
  { verb:'Tener', es:'tener calor / frío', fr:'avoir chaud / froid',    ctx:'¿No tienes frío sin chaqueta?',         ctx_fr:'Tu n\'as pas froid sans veste ?',         tags:['quotidien'], ans:['avoir chaud','avoir froid'] },
  { verb:'Tener', es:'tener que + inf',    fr:'devoir / il faut que',   ctx:'Tengo que irme, es tarde.',             ctx_fr:'Je dois partir, il est tard.',            tags:['grammaire','quotidien'], ans:['devoir','il faut'] },
  { verb:'Tener', es:'tener suerte',       fr:'avoir de la chance',     ctx:'¡Has tenido mucha suerte!',             ctx_fr:'Tu as eu beaucoup de chance !',           tags:['quotidien'], ans:['avoir de la chance'] },
  { verb:'Tener', es:'tener cuidado',      fr:'faire attention',        ctx:'Ten cuidado con el escalón.',           ctx_fr:'Fais attention à la marche.',             tags:['quotidien'], ans:['faire attention'] },

  // ══════════ HACER ══════════
  { verb:'Hacer', es:'hacer falta',        fr:'falloir / manquer',      ctx:'Hace falta más tiempo.',                ctx_fr:'Il faut plus de temps.',                  tags:['quotidien','grammaire'], ans:['falloir','manquer','il faut'] },
  { verb:'Hacer', es:'hacer caso',         fr:'écouter / obéir',        ctx:'No me hace caso nunca.',                ctx_fr:'Il ne m\'écoute jamais.',                 tags:['quotidien'], ans:['écouter','ecouter','obéir','obeir'] },
  { verb:'Hacer', es:'hacer cola',         fr:'faire la queue',         ctx:'Hay que hacer cola para entrar.',       ctx_fr:'Il faut faire la queue pour entrer.',     tags:['quotidien'], ans:['faire la queue'] },
  { verb:'Hacer', es:'hacer buen/mal tiempo', fr:'faire beau/mauvais temps', ctx:'Hoy hace buen tiempo, ¡vamos al parque!', ctx_fr:'Aujourd\'hui il fait beau, allons au parc !', tags:['quotidien','meteo'], ans:['faire beau','faire mauvais'] },
  { verb:'Hacer', es:'hacer frío / calor', fr:'faire froid / chaud',    ctx:'Hace mucho frío en invierno en Bilbao.', ctx_fr:'Il fait très froid en hiver à Bilbao.',  tags:['quotidien','meteo'], ans:['faire froid','faire chaud'] },
  { verb:'Hacer', es:'hacer deporte',      fr:'faire du sport',         ctx:'Hago deporte tres veces por semana.',   ctx_fr:'Je fais du sport trois fois par semaine.', tags:['quotidien'], ans:['faire du sport'] },

  // ══════════ IR ══════════
  { verb:'Ir',    es:'ir de pintxos',      fr:'aller manger des pintxos', ctx:'¿Vamos de pintxos por el Casco Viejo?', ctx_fr:'On va manger des pintxos dans le Casco Viejo ?', tags:['bar','bilbao'], ans:['aller manger des pintxos'] },
  { verb:'Ir',    es:'ir de compras',      fr:'faire du shopping',      ctx:'Voy de compras al centro.',              ctx_fr:'Je vais faire du shopping en ville.',     tags:['quotidien'], ans:['faire du shopping','faire les courses'] },
  { verb:'Ir',    es:'ir tirando',         fr:'tenir le coup',          ctx:'—¿Qué tal? —Voy tirando.',               ctx_fr:'—Comment ça va ? —Je tiens le coup.',    tags:['quotidien'], ans:['tenir le coup','aller doucement'] },
  { verb:'Ir',    es:'ir a + infinitif',   fr:'aller + infinitif (futur proche)', ctx:'Voy a comer algo.',          ctx_fr:'Je vais manger quelque chose.',           tags:['grammaire'], ans:['aller + infinitif','futur proche'] },

  // ══════════ DAR ══════════
  { verb:'Dar',   es:'dar igual',          fr:'être égal / s\'en ficher', ctx:'Me da igual, elige tú.',              ctx_fr:'Ça m\'est égal, choisis toi.',            tags:['quotidien'], ans:['être égal','etre egal','s\'en ficher'] },
  { verb:'Dar',   es:'dar un paseo',       fr:'faire une promenade',    ctx:'¿Damos un paseo por la ría?',           ctx_fr:'On fait une promenade le long de la ría ?', tags:['quotidien','bilbao'], ans:['faire une promenade','se promener'] },
  { verb:'Dar',   es:'darse cuenta',       fr:'se rendre compte',       ctx:'Me he dado cuenta de que es tarde.',    ctx_fr:'Je me suis rendu compte qu\'il est tard.', tags:['quotidien'], ans:['se rendre compte'] },
  { verb:'Dar',   es:'dar una vuelta',     fr:'faire un tour',          ctx:'¿Damos una vuelta por el centro?',      ctx_fr:'On fait un tour en centre-ville ?',       tags:['quotidien','bilbao'], ans:['faire un tour'] },

  // ══════════ ESTAR ══════════
  { verb:'Estar', es:'estar de acuerdo',   fr:'être d\'accord',         ctx:'Estoy de acuerdo contigo.',             ctx_fr:'Je suis d\'accord avec toi.',             tags:['quotidien'], ans:['être d\'accord','etre d\'accord'] },
  { verb:'Estar', es:'estar harto/a',      fr:'en avoir marre',         ctx:'Estoy harto de esperar.',               ctx_fr:'J\'en ai marre d\'attendre.',             tags:['emotion'], ans:['en avoir marre'] },
  { verb:'Estar', es:'estar de broma',     fr:'plaisanter',             ctx:'¡Estás de broma! ¿En serio?',           ctx_fr:'Tu plaisantes ! Sérieusement ?',          tags:['quotidien'], ans:['plaisanter','rigoler'] },
  { verb:'Estar', es:'estar a punto de',   fr:'être sur le point de',   ctx:'Estoy a punto de salir.',               ctx_fr:'Je suis sur le point de partir.',         tags:['grammaire','quotidien'], ans:['être sur le point de','etre sur le point de'] },
  { verb:'Estar', es:'estar lloviendo',    fr:'être en train de pleuvoir', ctx:'Está lloviendo otra vez.',           ctx_fr:'Il pleut encore.',                        tags:['meteo'], ans:['pleuvoir','il pleut'] },

  // ══════════ SER ══════════
  { verb:'Ser',   es:'ser de',             fr:'être de / venir de',     ctx:'Soy de Francia pero vivo en Bilbao.',   ctx_fr:'Je suis de France mais je vis à Bilbao.', tags:['presentation','quotidien'], ans:['être de','etre de','venir de'] },

  // ══════════ PONER ══════════
  { verb:'Poner', es:'ponerse nervioso/a', fr:'devenir nerveux',        ctx:'Me pongo nervioso antes de los exámenes.', ctx_fr:'Je deviens nerveux avant les examens.', tags:['emotion'], ans:['devenir nerveux'] },
  { verb:'Poner', es:'ponerse enfermo/a',  fr:'tomber malade',          ctx:'Se ha puesto enfermo con el frío.',     ctx_fr:'Il est tombé malade avec le froid.',      tags:['quotidien'], ans:['tomber malade'] },
  { verb:'Poner', es:'ponerse a + inf',    fr:'se mettre à',            ctx:'Se puso a llover de repente.',          ctx_fr:'Il s\'est mis à pleuvoir soudainement.',  tags:['grammaire'], ans:['se mettre à','se mettre a'] },

  // ══════════ QUEDAR ══════════
  { verb:'Querer', es:'quedar con alguien', fr:'retrouver qqn / avoir rendez-vous', ctx:'¿Quedamos a las 8?', ctx_fr:'On se retrouve à 8h ?', tags:['quotidien','bar'], ans:['retrouver','se retrouver','se donner rendez-vous'] },
  { verb:'Querer', es:'quedarse sin',      fr:'se retrouver sans / manquer de', ctx:'Me he quedado sin batería.', ctx_fr:'Je n\'ai plus de batterie.', tags:['quotidien'], ans:['se retrouver sans','manquer de'] },

  // ══════════ LLEVAR ══════════
  { verb:'Llevar', es:'llevar tiempo',     fr:'ça fait du temps',       ctx:'Llevo tres años viviendo aquí.',        ctx_fr:'Ça fait trois ans que je vis ici.',       tags:['quotidien','grammaire'], ans:['ça fait du temps','ca fait du temps'] },
  { verb:'Llevar', es:'llevarse bien/mal', fr:'bien/mal s\'entendre',   ctx:'Me llevo muy bien con mis vecinos.',    ctx_fr:'Je m\'entends très bien avec mes voisins.', tags:['quotidien'], ans:['bien s\'entendre','s\'entendre bien','s\'entendre'] },

  // ══════════ ACABAR ══════════
  { verb:'Hacer', es:'acabar de + inf',    fr:'venir de (passé récent)', ctx:'Acabo de llegar a casa.',              ctx_fr:'Je viens d\'arriver à la maison.',        tags:['grammaire'], ans:['venir de'] },

  // ══════════ DEJAR ══════════
  { verb:'Hacer', es:'dejar de + inf',     fr:'arrêter de',             ctx:'He dejado de fumar.',                   ctx_fr:'J\'ai arrêté de fumer.',                  tags:['grammaire'], ans:['arrêter de','arreter de'] },

  // ══════════ SEGUIR ══════════
  { verb:'Hacer', es:'seguir + gérondif',  fr:'continuer à',            ctx:'Sigo estudiando español.',              ctx_fr:'Je continue à étudier l\'espagnol.',      tags:['grammaire'], ans:['continuer à','continuer a','continuer'] },

  // ══════════ VOLVER ══════════
  { verb:'Volver', es:'volver a + inf',    fr:'refaire / re-',          ctx:'Vuelve a llover en Bilbao.',            ctx_fr:'Il se remet à pleuvoir à Bilbao.',        tags:['grammaire','meteo'], ans:['refaire','re-'] },

  // ══════════ SALIR ══════════
  { verb:'Salir', es:'salir de marcha',    fr:'sortir faire la fête',   ctx:'Los viernes salimos de marcha.',        ctx_fr:'Les vendredis on sort faire la fête.',    tags:['bar','quotidien'], ans:['sortir faire la fête','faire la fête','faire la fete'] },
  { verb:'Salir', es:'salir bien/mal',     fr:'bien/mal se passer',     ctx:'El examen me ha salido bien.',          ctx_fr:'L\'examen s\'est bien passé.',            tags:['quotidien'], ans:['bien se passer','se passer bien'] },

  // ══════════ PEDIR ══════════
  { verb:'Pedir', es:'pedir la cuenta',    fr:'demander l\'addition',   ctx:'¿Pedimos la cuenta?',                  ctx_fr:'On demande l\'addition ?',                tags:['bar'], ans:['demander l\'addition'] },
  { verb:'Pedir', es:'pedir perdón',       fr:'demander pardon',        ctx:'Te pido perdón, fue culpa mía.',       ctx_fr:'Je te demande pardon, c\'était ma faute.', tags:['quotidien'], ans:['demander pardon'] },
  { verb:'Pedir', es:'pedir prestado',     fr:'emprunter',              ctx:'¿Me puedes pedir prestado un boli?',   ctx_fr:'Tu peux me prêter un stylo ?',            tags:['quotidien'], ans:['emprunter'] },

  // ══════════ ECHAR ══════════
  { verb:'Hacer', es:'echar de menos',     fr:'manquer (qqn)',          ctx:'Echo de menos a mi familia.',           ctx_fr:'Ma famille me manque.',                   tags:['emotion'], ans:['manquer'] },
  { verb:'Hacer', es:'echar un vistazo',   fr:'jeter un coup d\'œil',  ctx:'Voy a echar un vistazo a la tienda.',  ctx_fr:'Je vais jeter un coup d\'œil au magasin.', tags:['quotidien'], ans:['jeter un coup d\'œil','jeter un coup d\'oeil'] },

  // ══════════ PASAR ══════════
  { verb:'Hacer', es:'pasarlo bien/mal',   fr:'s\'amuser / passer un bon moment', ctx:'Lo pasamos genial en la fiesta.', ctx_fr:'On s\'est super bien amusés à la fête.', tags:['quotidien','bar'], ans:['s\'amuser','passer un bon moment'] },
  { verb:'Hacer', es:'¿qué pasa?',        fr:'qu\'est-ce qui se passe ?', ctx:'¿Qué pasa? Tienes mala cara.',     ctx_fr:'Qu\'est-ce qui se passe ? Tu as mauvaise mine.', tags:['quotidien'], ans:['qu\'est-ce qui se passe'] },
  { verb:'Hacer', es:'pasar de',           fr:'s\'en ficher de',        ctx:'Paso de ir al gimnasio hoy.',          ctx_fr:'J\'ai pas envie d\'aller à la salle aujourd\'hui.', tags:['quotidien'], ans:['s\'en ficher','s\'en moquer'] },

  // ══════════ CAER ══════════
  { verb:'Hacer', es:'caer bien/mal',      fr:'trouver qqn sympa/antipathique', ctx:'Me cae muy bien tu amigo.', ctx_fr:'Je trouve ton ami très sympa.',            tags:['quotidien'], ans:['trouver sympa','trouver sympathique'] },

  // ══════════ TOCAR ══════════
  { verb:'Hacer', es:'tocar a alguien',    fr:'c\'est au tour de qqn',  ctx:'Te toca pagar la ronda.',               ctx_fr:'C\'est à ton tour de payer la tournée.',  tags:['bar'], ans:['c\'est au tour de','c\'est ton tour'] },

  // ══════════ METER ══════════
  { verb:'Hacer', es:'meter la pata',      fr:'gaffer / faire une bourde', ctx:'He metido la pata con mi jefe.',   ctx_fr:'J\'ai fait une bourde avec mon chef.',    tags:['quotidien'], ans:['gaffer','faire une bourde'] },

  // ══════════ HAY QUE ══════════
  { verb:'Hacer', es:'hay que + inf',      fr:'il faut',                ctx:'Hay que reservar mesa.',                ctx_fr:'Il faut réserver une table.',             tags:['grammaire','quotidien'], ans:['il faut'] },

  // ══════════ MOLAR / FLIPAR (argot) ══════════
  { verb:'Hacer', es:'molar',              fr:'être cool / déchirer',   ctx:'¡Mola mucho este sitio!',               ctx_fr:'Cet endroit est trop cool !',             tags:['quotidien','bar'], ans:['être cool','etre cool','déchirer'] },
  { verb:'Hacer', es:'flipar',             fr:'halluciner',             ctx:'¡Estoy flipando con esta vista!',       ctx_fr:'J\'hallucine avec cette vue !',           tags:['quotidien'], ans:['halluciner'] },
  { verb:'Hacer', es:'apetecer',           fr:'avoir envie de',         ctx:'¿Te apetece una caña?',                 ctx_fr:'Tu as envie d\'une bière ?',              tags:['bar','quotidien'], ans:['avoir envie','avoir envie de'] },

  // ══════════ VALE ══════════
  { verb:'Hacer', es:'vale',               fr:'d\'accord / ok',         ctx:'—¿Quedamos a las 9? —¡Vale!',          ctx_fr:'—On se retrouve à 9h ? —D\'accord !',    tags:['quotidien'], ans:['d\'accord','ok'] },

  // ══════════ BILBAO / BASQUE ══════════
  { verb:'Ir',    es:'ir de txikiteo',     fr:'faire la tournée des bars', ctx:'¿Nos vamos de txikiteo por las Siete Calles?', ctx_fr:'On fait la tournée des bars dans les Siete Calles ?', tags:['bar','bilbao'], ans:['faire la tournée des bars','tournée des bars','tournee des bars'] },
  { verb:'Hacer', es:'coger el tranvía',   fr:'prendre le tramway',     ctx:'Cojo el tranvía en Atxuri.',            ctx_fr:'Je prends le tramway à Atxuri.',          tags:['quotidien','bilbao'], ans:['prendre le tramway','prendre le tram'] },
  { verb:'Hacer', es:'¡qué fuerte!',       fr:'incroyable / n\'importe quoi !', ctx:'¿Has visto el precio? ¡Qué fuerte!', ctx_fr:'Tu as vu le prix ? N\'importe quoi !', tags:['quotidien'], ans:['incroyable','n\'importe quoi'] },

  // ══════════ GUSTAR / ENCANTAR ══════════
  { verb:'Gustar', es:'me encanta',        fr:'j\'adore',               ctx:'Me encanta Bilbao en verano.',          ctx_fr:'J\'adore Bilbao en été.',                 tags:['emotion','quotidien'], ans:['j\'adore','adorer'] },
  { verb:'Gustar', es:'no me apetece',     fr:'je n\'ai pas envie',     ctx:'No me apetece salir, estoy cansado.',   ctx_fr:'Je n\'ai pas envie de sortir, je suis fatigué.', tags:['quotidien'], ans:['je n\'ai pas envie','pas envie'] },

  // ══════════ SABER ══════════
  { verb:'Saber', es:'¡yo qué sé!',       fr:'qu\'est-ce que j\'en sais !', ctx:'—¿Dónde está? —¡Yo qué sé!',     ctx_fr:'—Où est-ce ? —Qu\'est-ce que j\'en sais !', tags:['quotidien'], ans:['qu\'est-ce que j\'en sais'] },

  // ══════════ PODER ══════════
  { verb:'Poder', es:'no puedo más',       fr:'je n\'en peux plus',     ctx:'No puedo más, estoy agotado.',          ctx_fr:'Je n\'en peux plus, je suis épuisé.',     tags:['emotion','quotidien'], ans:['je n\'en peux plus'] },

  // ══════════ HASTA LAS NARICES ══════════
  { verb:'Estar', es:'estar hasta las narices', fr:'en avoir ras le bol', ctx:'Estoy hasta las narices del sirimiri.', ctx_fr:'J\'en ai ras le bol de la bruine.',  tags:['emotion','bilbao'], ans:['en avoir ras le bol','ras le bol'] },
];

// Expression lists for quiz filtering
const EXPR_LISTS = [
  { id:'toutes',    emoji:'🔥', label:'Toutes',           desc:'Toutes les expressions',         f: () => true },
  { id:'quotidien', emoji:'🏠', label:'Quotidien',        desc:'Expressions du quotidien',       f: e => e.tags.includes('quotidien') },
  { id:'bar',       emoji:'🍺', label:'Bar & sorties',    desc:'Commander, sortir, trinquer',    f: e => e.tags.includes('bar') },
  { id:'emotion',   emoji:'❤️', label:'Émotions',         desc:'Exprimer ses sentiments',        f: e => e.tags.includes('emotion') },
  { id:'grammaire', emoji:'📐', label:'Périphrases',      desc:'Structures verbales essentielles', f: e => e.tags.includes('grammaire') },
  { id:'bilbao',    emoji:'🏙️', label:'Bilbao',           desc:'Expressions locales',            f: e => e.tags.includes('bilbao') },
  { id:'meteo',     emoji:'🌧️', label:'Météo',            desc:'Parler du temps',                f: e => e.tags.includes('meteo') },
];
