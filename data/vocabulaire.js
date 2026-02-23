// ═══════════════════════════════════════════
//  VOCABULAIRE — Thematic vocabulary
//  ~200 words across 12 themes
// ═══════════════════════════════════════════

const VOCAB_THEMES = [
  // ══════════ BAR & PINTXOS ══════════
  {
    id: 'bar',
    label: 'Bar & pintxos',
    emoji: '🍺',
    words: [
      { es:'la caña',          fr:'la bière pression (petite)', ans:['bière pression','biere pression','bière','biere'], ex:'Ponme una caña, por favor.' },
      { es:'el zurito',        fr:'la petite bière (Pays Basque)', ans:['petite bière','petite biere','zurito'],         ex:'Un zurito, porfa.' },
      { es:'el txakoli',       fr:'le txakoli (vin blanc basque)', ans:['txakoli','vin blanc'],                          ex:'¿Nos pones un txakoli?' },
      { es:'el pintxo',        fr:'le pintxo / la tapa',        ans:['pintxo','tapa','tapas'],                           ex:'Vamos de pintxos por el Casco Viejo.' },
      { es:'la cuenta',        fr:'l\'addition',                ans:['addition','l\'addition'],                           ex:'La cuenta, por favor.' },
      { es:'la propina',       fr:'le pourboire',               ans:['pourboire'],                                        ex:'¿Dejamos propina?' },
      { es:'el menú del día',  fr:'le menu du jour',            ans:['menu du jour'],                                     ex:'¿Tenéis menú del día?' },
      { es:'la terraza',       fr:'la terrasse',                ans:['terrasse'],                                          ex:'¿Nos sentamos en la terraza?' },
      { es:'para llevar',      fr:'à emporter',                 ans:['à emporter','a emporter'],                          ex:'Un café para llevar, por favor.' },
      { es:'la barra',         fr:'le comptoir',                ans:['comptoir','bar'],                                    ex:'¿Comemos en la barra?' },
      { es:'el camarero',      fr:'le serveur',                 ans:['serveur'],                                           ex:'El camarero es muy amable.' },
      { es:'picar algo',       fr:'grignoter',                  ans:['grignoter'],                                         ex:'¿Pedimos algo para picar?' },
      { es:'la ronda',         fr:'la tournée',                 ans:['tournée','tournee'],                                 ex:'Esta ronda la pago yo.' },
      { es:'el txikiteo',      fr:'la tournée des bars',        ans:['tournée des bars','tournee des bars'],               ex:'¿Nos vamos de txikiteo?' },
      { es:'el vino tinto',    fr:'le vin rouge',               ans:['vin rouge'],                                         ex:'Un vino tinto de la casa.' },
      { es:'el refresco',      fr:'le soda / la boisson fraîche', ans:['soda','boisson','boisson fraîche','boisson fraiche'], ex:'¿Quieres un refresco?' },
    ]
  },

  // ══════════ NOURRITURE & CUISINE ══════════
  {
    id: 'food',
    label: 'Nourriture & cuisine',
    emoji: '🍽️',
    words: [
      { es:'la manzana',    fr:'la pomme',          ans:['pomme'],           ex:'Me como una manzana de postre.' },
      { es:'el plátano',    fr:'la banane',          ans:['banane'],          ex:'¿Quieres un plátano?' },
      { es:'la naranja',    fr:'l\'orange',          ans:['orange'],          ex:'Un zumo de naranja, por favor.' },
      { es:'el tomate',     fr:'la tomate',          ans:['tomate'],          ex:'Necesito tomates para la ensalada.' },
      { es:'la cebolla',    fr:'l\'oignon',          ans:['oignon'],          ex:'Corta la cebolla en trozos.' },
      { es:'el ajo',        fr:'l\'ail',             ans:['ail'],             ex:'El ajo es esencial en la cocina española.' },
      { es:'la patata',     fr:'la pomme de terre',  ans:['pomme de terre','patate'], ex:'Patatas fritas o patatas bravas.' },
      { es:'el pollo',      fr:'le poulet',          ans:['poulet'],          ex:'Hoy comemos pollo asado.' },
      { es:'la ternera',    fr:'le bœuf / le veau', ans:['bœuf','boeuf','veau'], ex:'Un filete de ternera, poco hecho.' },
      { es:'el cerdo',      fr:'le porc',            ans:['porc'],            ex:'El cerdo ibérico es muy bueno.' },
      { es:'el pescado',    fr:'le poisson',         ans:['poisson'],         ex:'En Bilbao se come mucho pescado.' },
      { es:'el bacalao',    fr:'la morue',           ans:['morue','cabillaud'], ex:'El bacalao al pil-pil es típico.' },
      { es:'las gambas',    fr:'les crevettes',      ans:['crevettes'],       ex:'Gambas a la plancha, por favor.' },
      { es:'el pan',        fr:'le pain',            ans:['pain'],            ex:'¿Nos trae más pan?' },
      { es:'el arroz',      fr:'le riz',             ans:['riz'],             ex:'Arroz con leche de postre.' },
      { es:'la ensalada',   fr:'la salade',          ans:['salade'],          ex:'Una ensalada mixta para compartir.' },
      { es:'el huevo',      fr:'l\'œuf',            ans:['œuf','oeuf'],      ex:'Huevos fritos con patatas.' },
      { es:'el queso',      fr:'le fromage',         ans:['fromage'],         ex:'El queso Idiazábal es del País Vasco.' },
      { es:'el aceite',     fr:'l\'huile (d\'olive)', ans:['huile','huile d\'olive'], ex:'Con un poco de aceite de oliva.' },
      { es:'la sal',        fr:'le sel',             ans:['sel'],             ex:'¿Me pasas la sal?' },
    ]
  },

  // ══════════ CORPS & SANTÉ ══════════
  {
    id: 'health',
    label: 'Corps & santé',
    emoji: '🏥',
    words: [
      { es:'la cabeza',     fr:'la tête',            ans:['tête','tete'],     ex:'Me duele la cabeza.' },
      { es:'el estómago',   fr:'l\'estomac / le ventre', ans:['estomac','ventre'], ex:'Me duele el estómago.' },
      { es:'la espalda',    fr:'le dos',             ans:['dos'],             ex:'Tengo dolor de espalda.' },
      { es:'el brazo',      fr:'le bras',            ans:['bras'],            ex:'Me he hecho daño en el brazo.' },
      { es:'la pierna',     fr:'la jambe',           ans:['jambe'],           ex:'Me duele la pierna derecha.' },
      { es:'la rodilla',    fr:'le genou',           ans:['genou'],           ex:'Tengo mal la rodilla.' },
      { es:'el pie',        fr:'le pied',            ans:['pied'],            ex:'Me duele el pie izquierdo.' },
      { es:'la mano',       fr:'la main',            ans:['main'],            ex:'Dame la mano.' },
      { es:'el ojo',        fr:'l\'œil',            ans:['œil','oeil'],      ex:'Me pica el ojo.' },
      { es:'la boca',       fr:'la bouche',          ans:['bouche'],          ex:'Abre la boca, por favor.' },
      { es:'el diente',     fr:'la dent',            ans:['dent'],            ex:'Me duele un diente.' },
      { es:'el corazón',    fr:'le cœur',           ans:['cœur','coeur'],    ex:'El corazón late rápido.' },
      { es:'la farmacia',   fr:'la pharmacie',       ans:['pharmacie'],       ex:'¿Hay una farmacia por aquí?' },
      { es:'el médico',     fr:'le médecin',         ans:['médecin','medecin'], ex:'Tengo cita con el médico.' },
      { es:'la fiebre',     fr:'la fièvre',          ans:['fièvre','fievre'], ex:'Tengo fiebre, 38 grados.' },
      { es:'el resfriado',  fr:'le rhume',           ans:['rhume'],           ex:'Estoy resfriado desde ayer.' },
      { es:'la receta',     fr:'l\'ordonnance',      ans:['ordonnance'],      ex:'El médico me ha dado una receta.' },
      { es:'la pastilla',   fr:'le comprimé / la pilule', ans:['comprimé','comprime','pilule'], ex:'Tómate una pastilla cada 8 horas.' },
    ]
  },

  // ══════════ VÊTEMENTS ══════════
  {
    id: 'clothes',
    label: 'Vêtements',
    emoji: '👕',
    words: [
      { es:'la camiseta',   fr:'le t-shirt',         ans:['t-shirt','tee-shirt'], ex:'Llevo una camiseta blanca.' },
      { es:'la camisa',     fr:'la chemise',         ans:['chemise'],         ex:'Ponte la camisa para la reunión.' },
      { es:'el pantalón',   fr:'le pantalon',        ans:['pantalon'],        ex:'Este pantalón me queda bien.' },
      { es:'los vaqueros',  fr:'le jean',            ans:['jean','jeans'],    ex:'Siempre llevo vaqueros.' },
      { es:'la falda',      fr:'la jupe',            ans:['jupe'],            ex:'Lleva una falda negra.' },
      { es:'el vestido',    fr:'la robe',            ans:['robe'],            ex:'Ese vestido te queda genial.' },
      { es:'la chaqueta',   fr:'la veste',           ans:['veste'],           ex:'Coge la chaqueta, hace frío.' },
      { es:'el abrigo',     fr:'le manteau',         ans:['manteau'],         ex:'Me pongo el abrigo para salir.' },
      { es:'el impermeable', fr:'l\'imperméable',    ans:['imperméable','impermeable'], ex:'En Bilbao necesitas un impermeable.' },
      { es:'los zapatos',   fr:'les chaussures',     ans:['chaussures'],      ex:'Estos zapatos son cómodos.' },
      { es:'las zapatillas', fr:'les baskets / les chaussons', ans:['baskets','chaussons'], ex:'Zapatillas para correr.' },
      { es:'las botas',     fr:'les bottes',         ans:['bottes'],          ex:'Con esta lluvia, mejor botas.' },
      { es:'el paraguas',   fr:'le parapluie',       ans:['parapluie'],       ex:'No olvides el paraguas.' },
      { es:'el gorro',      fr:'le bonnet',          ans:['bonnet'],          ex:'Ponte el gorro, hace frío.' },
      { es:'las gafas',     fr:'les lunettes',       ans:['lunettes'],        ex:'¿Dónde están mis gafas?' },
      { es:'el bolso',      fr:'le sac',             ans:['sac'],             ex:'Llevo el móvil en el bolso.' },
    ]
  },

  // ══════════ MÉTÉO & NATURE ══════════
  {
    id: 'weather',
    label: 'Météo & nature',
    emoji: '🌧️',
    words: [
      { es:'el sol',         fr:'le soleil',          ans:['soleil'],          ex:'Hoy hace sol, ¡por fin!' },
      { es:'la lluvia',      fr:'la pluie',           ans:['pluie'],           ex:'La lluvia es muy frecuente en Bilbao.' },
      { es:'el sirimiri',    fr:'la bruine fine (Pays Basque)', ans:['bruine','bruine fine','sirimiri'], ex:'Hay sirimiri, típico del País Vasco.' },
      { es:'el chaparrón',   fr:'l\'averse',          ans:['averse'],          ex:'Ha caído un buen chaparrón.' },
      { es:'la nube',        fr:'le nuage',           ans:['nuage'],           ex:'Hay muchas nubes hoy.' },
      { es:'la niebla',      fr:'le brouillard',      ans:['brouillard'],      ex:'Hay niebla en la montaña.' },
      { es:'el viento',      fr:'le vent',            ans:['vent'],            ex:'Hace mucho viento en la costa.' },
      { es:'la nieve',       fr:'la neige',           ans:['neige'],           ex:'Ha nevado en el monte.' },
      { es:'la tormenta',    fr:'l\'orage',           ans:['orage'],           ex:'Esta noche hay tormenta.' },
      { es:'la primavera',   fr:'le printemps',       ans:['printemps'],       ex:'La primavera es bonita en Bilbao.' },
      { es:'el verano',      fr:'l\'été',             ans:['été','ete'],       ex:'En verano hace calor.' },
      { es:'el otoño',       fr:'l\'automne',         ans:['automne'],         ex:'El otoño es lluvioso aquí.' },
      { es:'el invierno',    fr:'l\'hiver',           ans:['hiver'],           ex:'El invierno es suave en Bilbao.' },
      { es:'el monte',       fr:'la montagne',        ans:['montagne'],        ex:'¿Subimos al monte el domingo?' },
      { es:'la playa',       fr:'la plage',           ans:['plage'],           ex:'Vamos a la playa de Sopela.' },
      { es:'el río / la ría', fr:'la rivière / l\'estuaire', ans:['rivière','riviere','estuaire'], ex:'La ría de Bilbao es muy bonita.' },
      { es:'el bosque',      fr:'la forêt',           ans:['forêt','foret'],   ex:'Hay un bosque precioso cerca.' },
    ]
  },

  // ══════════ MAISON ══════════
  {
    id: 'home',
    label: 'Maison & meubles',
    emoji: '🏠',
    words: [
      { es:'la cocina',      fr:'la cuisine',         ans:['cuisine'],         ex:'Estoy cocinando en la cocina.' },
      { es:'el salón',       fr:'le salon',           ans:['salon'],           ex:'Vemos la tele en el salón.' },
      { es:'el dormitorio',  fr:'la chambre',         ans:['chambre'],         ex:'Mi dormitorio es pequeño.' },
      { es:'el baño',        fr:'la salle de bain',   ans:['salle de bain','salle de bains'], ex:'El baño está al fondo.' },
      { es:'el balcón',      fr:'le balcon',          ans:['balcon'],          ex:'Tenemos un balcón pequeño.' },
      { es:'la mesa',        fr:'la table',           ans:['table'],           ex:'Pongo la mesa para cenar.' },
      { es:'la silla',       fr:'la chaise',          ans:['chaise'],          ex:'Siéntate en esta silla.' },
      { es:'el sofá',        fr:'le canapé',          ans:['canapé','canape'], ex:'Me tumbo en el sofá.' },
      { es:'la cama',        fr:'le lit',             ans:['lit'],             ex:'La cama es muy cómoda.' },
      { es:'la nevera',      fr:'le frigo',           ans:['frigo','réfrigérateur','refrigerateur'], ex:'Hay leche en la nevera.' },
      { es:'la lavadora',    fr:'la machine à laver', ans:['machine à laver','machine a laver','lave-linge'], ex:'Pongo la lavadora.' },
      { es:'el grifo',       fr:'le robinet',         ans:['robinet'],         ex:'Cierra el grifo del baño.' },
      { es:'la luz',         fr:'la lumière',         ans:['lumière','lumiere'], ex:'Enciende la luz, por favor.' },
      { es:'el enchufe',     fr:'la prise (électrique)', ans:['prise','prise électrique','prise electrique'], ex:'¿Dónde hay un enchufe?' },
      { es:'la calefacción', fr:'le chauffage',       ans:['chauffage'],       ex:'Pon la calefacción, hace frío.' },
      { es:'el alquiler',    fr:'le loyer',           ans:['loyer'],           ex:'El alquiler es caro en Bilbao.' },
      { es:'la llave',       fr:'la clé',             ans:['clé','cle','clef'], ex:'No encuentro las llaves del piso.' },
      { es:'el ascensor',    fr:'l\'ascenseur',       ans:['ascenseur'],       ex:'¿Subimos en ascensor?' },
    ]
  },

  // ══════════ TRANSPORTS ══════════
  {
    id: 'transport',
    label: 'Transports',
    emoji: '🚇',
    words: [
      { es:'el metro',       fr:'le métro',           ans:['métro','metro'],   ex:'Cojo el metro en Moyua.' },
      { es:'el tranvía',     fr:'le tramway',         ans:['tramway','tram'],  ex:'El tranvía pasa cada 5 minutos.' },
      { es:'el autobús',     fr:'le bus',             ans:['bus','autobus'],   ex:'¿Qué autobús va al centro?' },
      { es:'el tren',        fr:'le train',           ans:['train'],           ex:'Voy a San Sebastián en tren.' },
      { es:'el avión',       fr:'l\'avion',           ans:['avion'],           ex:'El avión sale a las 7.' },
      { es:'el billete',     fr:'le billet / le ticket', ans:['billet','ticket'], ex:'¿Dónde compro el billete?' },
      { es:'el andén',       fr:'le quai',            ans:['quai'],            ex:'El tren sale del andén 3.' },
      { es:'la estación',    fr:'la gare / la station', ans:['gare','station'], ex:'La estación de Abando es bonita.' },
      { es:'el aeropuerto',  fr:'l\'aéroport',        ans:['aéroport','aeroport'], ex:'El aeropuerto de Bilbao está en Loiu.' },
      { es:'el coche',       fr:'la voiture',         ans:['voiture'],         ex:'Voy en coche al trabajo.' },
      { es:'la bici',        fr:'le vélo',            ans:['vélo','velo'],     ex:'Voy en bici por la ría.' },
      { es:'el atasco',      fr:'l\'embouteillage / le bouchon', ans:['embouteillage','bouchon'], ex:'Hay un atasco terrible.' },
      { es:'el aparcamiento', fr:'le parking',        ans:['parking'],         ex:'¿Hay aparcamiento cerca?' },
      { es:'girar',          fr:'tourner',            ans:['tourner'],         ex:'Gira a la derecha en la rotonda.' },
      { es:'cruzar',         fr:'traverser',          ans:['traverser'],       ex:'Cruza la calle por el paso de cebra.' },
      { es:'la autopista',   fr:'l\'autoroute',       ans:['autoroute'],       ex:'La autopista a Donosti es rápida.' },
    ]
  },

  // ══════════ DIRECTIONS & LIEUX ══════════
  {
    id: 'directions',
    label: 'Directions & lieux',
    emoji: '🗺️',
    words: [
      { es:'a la derecha',     fr:'à droite',         ans:['à droite','a droite'],     ex:'Gira a la derecha en el semáforo.' },
      { es:'a la izquierda',   fr:'à gauche',         ans:['à gauche','a gauche'],     ex:'La farmacia está a la izquierda.' },
      { es:'todo recto',       fr:'tout droit',       ans:['tout droit'],              ex:'Sigue todo recto hasta el final.' },
      { es:'la calle',         fr:'la rue',           ans:['rue'],                     ex:'La calle Gran Vía es muy bonita.' },
      { es:'la plaza',         fr:'la place',         ans:['place'],                   ex:'Quedamos en la plaza.' },
      { es:'el semáforo',      fr:'le feu (tricolore)', ans:['feu'],                   ex:'Cruza en el semáforo.' },
      { es:'la parada',        fr:'l\'arrêt',         ans:['arrêt','arret'],           ex:'La parada del metro está cerca.' },
      { es:'cerca',            fr:'près / proche',    ans:['près','pres','proche'],    ex:'El bar está muy cerca.' },
      { es:'lejos',            fr:'loin',             ans:['loin'],                    ex:'No está lejos, a 5 minutos.' },
      { es:'la esquina',       fr:'le coin (de rue)', ans:['coin'],                    ex:'Hay una farmacia en la esquina.' },
      { es:'el puente',        fr:'le pont',          ans:['pont'],                    ex:'Cruzamos el puente Zubizuri.' },
      { es:'el barrio',        fr:'le quartier',      ans:['quartier'],                ex:'Vivo en un barrio tranquilo.' },
      { es:'enfrente de',      fr:'en face de',       ans:['en face','en face de'],    ex:'El banco está enfrente del bar.' },
      { es:'al lado de',       fr:'à côté de',        ans:['à côté','a cote','à côté de'], ex:'Vivo al lado de la estación.' },
      { es:'entre',            fr:'entre',            ans:['entre'],                   ex:'El bar está entre la farmacia y el banco.' },
    ]
  },

  // ══════════ NOMBRES ══════════
  {
    id: 'nombres',
    label: 'Nombres',
    emoji: '🔢',
    words: [
      { es:'cero',       fr:'zéro',      ans:['zéro','zero'],      ex:'Estamos a cero grados.' },
      { es:'uno',        fr:'un',        ans:['un'],               ex:'Uno, dos, tres...' },
      { es:'dos',        fr:'deux',      ans:['deux'],             ex:'Somos dos personas.' },
      { es:'tres',       fr:'trois',     ans:['trois'],            ex:'Tres cañas, por favor.' },
      { es:'cuatro',     fr:'quatre',    ans:['quatre'],           ex:'Son las cuatro de la tarde.' },
      { es:'cinco',      fr:'cinq',      ans:['cinq'],             ex:'Cinco euros.' },
      { es:'seis',       fr:'six',       ans:['six'],              ex:'Somos seis para cenar.' },
      { es:'siete',      fr:'sept',      ans:['sept'],             ex:'Son las siete de la mañana.' },
      { es:'ocho',       fr:'huit',      ans:['huit'],             ex:'Quedamos a las ocho.' },
      { es:'nueve',      fr:'neuf',      ans:['neuf'],             ex:'Empiezo a las nueve.' },
      { es:'diez',       fr:'dix',       ans:['dix'],              ex:'El bar abre a las diez.' },
      { es:'veinte',     fr:'vingt',     ans:['vingt'],            ex:'Cuesta veinte euros.' },
      { es:'treinta',    fr:'trente',    ans:['trente'],           ex:'Tengo treinta años.' },
      { es:'cincuenta',  fr:'cinquante', ans:['cinquante'],        ex:'Tiene cincuenta años.' },
      { es:'cien',       fr:'cent',      ans:['cent'],             ex:'La farmacia está a cien metros.' },
      { es:'mil',        fr:'mille',     ans:['mille'],            ex:'El piso cuesta mil euros al mes.' },
    ]
  },

  // ══════════ JOURS & TEMPS ══════════
  {
    id: 'temps',
    label: 'Jours & temps',
    emoji: '📅',
    words: [
      { es:'lunes',      fr:'lundi',        ans:['lundi'],        ex:'El lunes empiezo el trabajo.' },
      { es:'martes',     fr:'mardi',        ans:['mardi'],        ex:'El martes hay reunión.' },
      { es:'miércoles',  fr:'mercredi',     ans:['mercredi'],     ex:'Los miércoles tengo clase.' },
      { es:'jueves',     fr:'jeudi',        ans:['jeudi'],        ex:'El jueves vamos de pintxos.' },
      { es:'viernes',    fr:'vendredi',     ans:['vendredi'],     ex:'¡Por fin es viernes!' },
      { es:'sábado',     fr:'samedi',       ans:['samedi'],       ex:'El sábado voy a la playa.' },
      { es:'domingo',    fr:'dimanche',     ans:['dimanche'],     ex:'Los domingos descanso.' },
      { es:'hoy',        fr:'aujourd\'hui', ans:['aujourd\'hui','aujourd hui'], ex:'Hoy hace buen tiempo.' },
      { es:'mañana',     fr:'demain',       ans:['demain'],       ex:'Mañana tengo una cita.' },
      { es:'ayer',       fr:'hier',         ans:['hier'],         ex:'Ayer fui al cine.' },
      { es:'ahora',      fr:'maintenant',   ans:['maintenant'],   ex:'Lo necesito ahora.' },
      { es:'siempre',    fr:'toujours',     ans:['toujours'],     ex:'Siempre llego tarde.' },
      { es:'nunca',      fr:'jamais',       ans:['jamais'],       ex:'Nunca he ido a Madrid.' },
      { es:'a veces',    fr:'parfois',      ans:['parfois','des fois'], ex:'A veces como en casa.' },
      { es:'pronto',     fr:'bientôt',      ans:['bientôt','bientot'], ex:'Nos vemos pronto.' },
      { es:'tarde',      fr:'tard',         ans:['tard'],         ex:'Llego tarde al trabajo.' },
      { es:'temprano',   fr:'tôt',          ans:['tôt','tot'],    ex:'Me levanto temprano.' },
    ]
  },

  // ══════════ ADJECTIFS COURANTS ══════════
  {
    id: 'adjectives',
    label: 'Adjectifs courants',
    emoji: '📝',
    words: [
      { es:'grande',       fr:'grand',          ans:['grand','grande'],       ex:'El piso es muy grande.' },
      { es:'pequeño/a',    fr:'petit',          ans:['petit','petite'],       ex:'Tengo un coche pequeño.' },
      { es:'caro/a',       fr:'cher',           ans:['cher','chère','chere'], ex:'Este restaurante es muy caro.' },
      { es:'barato/a',     fr:'bon marché / pas cher', ans:['pas cher','bon marché','bon marche'], ex:'El menú del día es barato.' },
      { es:'bueno/a',      fr:'bon',            ans:['bon','bonne'],          ex:'El bacalao está muy bueno.' },
      { es:'malo/a',       fr:'mauvais',        ans:['mauvais','mauvaise'],   ex:'Hace mal tiempo hoy.' },
      { es:'caliente',     fr:'chaud',          ans:['chaud','chaude'],       ex:'El café está muy caliente.' },
      { es:'frío/a',       fr:'froid',          ans:['froid','froide'],       ex:'La cerveza está fría, perfecto.' },
      { es:'nuevo/a',      fr:'nouveau / neuf', ans:['nouveau','neuf','nouvelle'], ex:'Tengo un móvil nuevo.' },
      { es:'viejo/a',      fr:'vieux / ancien', ans:['vieux','ancien','vieille'], ex:'El Casco Viejo es precioso.' },
      { es:'rápido/a',     fr:'rapide',         ans:['rapide'],               ex:'El metro es rápido.' },
      { es:'lento/a',      fr:'lent',           ans:['lent','lente'],         ex:'El autobús es muy lento.' },
      { es:'fácil',        fr:'facile',         ans:['facile'],               ex:'El español es más fácil que el euskera.' },
      { es:'difícil',      fr:'difficile',      ans:['difficile'],            ex:'El euskera es muy difícil.' },
      { es:'bonito/a',     fr:'joli / beau',    ans:['joli','beau','belle'],  ex:'Bilbao es una ciudad muy bonita.' },
      { es:'feo/a',        fr:'laid / moche',   ans:['laid','moche'],         ex:'Este edificio es bastante feo.' },
      { es:'lleno/a',      fr:'plein',          ans:['plein','pleine'],       ex:'El bar está lleno.' },
      { es:'vacío/a',      fr:'vide',           ans:['vide'],                 ex:'La terraza está vacía.' },
      { es:'abierto/a',    fr:'ouvert',         ans:['ouvert','ouverte'],     ex:'¿Está abierto el museo?' },
      { es:'cerrado/a',    fr:'fermé',          ans:['fermé','ferme','fermée','fermee'], ex:'Está cerrado los lunes.' },
    ]
  },

  // ══════════ ÉMOTIONS & ÉTATS ══════════
  {
    id: 'emotions',
    label: 'Émotions & états',
    emoji: '❤️',
    words: [
      { es:'contento/a',    fr:'content',         ans:['content','contente'],   ex:'Estoy muy contento de vivir aquí.' },
      { es:'triste',        fr:'triste',          ans:['triste'],               ex:'Está triste porque se va.' },
      { es:'enfadado/a',    fr:'en colère / fâché', ans:['en colère','en colere','fâché','fache'], ex:'Está enfadado conmigo.' },
      { es:'cansado/a',     fr:'fatigué',         ans:['fatigué','fatigue','fatiguée','fatiguee'], ex:'Estoy cansado del trabajo.' },
      { es:'nervioso/a',    fr:'nerveux',         ans:['nerveux','nerveuse'],   ex:'Me pongo nervioso antes de hablar.' },
      { es:'tranquilo/a',   fr:'tranquille / calme', ans:['tranquille','calme'], ex:'Estoy tranquilo, no te preocupes.' },
      { es:'preocupado/a',  fr:'inquiet / préoccupé', ans:['inquiet','inquiète','préoccupé','preoccupe'], ex:'Estoy preocupado por el examen.' },
      { es:'aburrido/a',    fr:'ennuyé / qui s\'ennuie', ans:['ennuyé','ennuye'], ex:'Estoy aburrido, ¿hacemos algo?' },
      { es:'sorprendido/a', fr:'surpris',         ans:['surpris','surprise'],   ex:'Estoy sorprendido por la noticia.' },
      { es:'asustado/a',    fr:'effrayé / apeuré', ans:['effrayé','effraye','apeuré','apeure'], ex:'Estoy asustado por la tormenta.' },
      { es:'ilusionado/a',  fr:'enthousiaste / excité', ans:['enthousiaste','excité','excite'], ex:'Estoy muy ilusionado con el viaje.' },
      { es:'agobiado/a',    fr:'stressé / débordé', ans:['stressé','stresse','débordé','deborde'], ex:'Estoy agobiado con tanto trabajo.' },
      { es:'enamorado/a',   fr:'amoureux',        ans:['amoureux','amoureuse'], ex:'Está enamorado de ella.' },
      { es:'orgulloso/a',   fr:'fier',            ans:['fier','fière','fiere'], ex:'Estoy orgulloso de ti.' },
      { es:'solo/a',        fr:'seul',            ans:['seul','seule'],         ex:'Vivo solo en Bilbao.' },
      { es:'ocupado/a',     fr:'occupé',          ans:['occupé','occupe','occupée','occupee'], ex:'Estoy ocupado ahora, te llamo luego.' },
    ]
  },
];
