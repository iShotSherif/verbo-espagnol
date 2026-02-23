// ═══════════════════════════════════════════
//  VOCABULAIRE — Thematic vocabulary
// ═══════════════════════════════════════════

const VOCAB_THEMES = [
  {
    id: 'bar',
    label: 'Bar & pintxos',
    emoji: '🍺',
    words: [
      { es:'la caña',          fr:'la bière pression (petite)', ans:['bière pression','biere pression','bière','biere','caña'], ex:'Ponme una caña, por favor.' },
      { es:'el zurito',        fr:'la petite bière (Pays Basque)', ans:['petite bière','petite biere','zurito'],              ex:'Un zurito, porfa.' },
      { es:'el txakoli',       fr:'le txakoli (vin blanc basque)', ans:['txakoli','vin blanc basque','vin blanc'],            ex:'¿Nos pones un txakoli?' },
      { es:'el pintxo',        fr:'le pintxo / la tapa',        ans:['pintxo','tapa','tapas'],                                ex:'Vamos de pintxos por el Casco Viejo.' },
      { es:'la cuenta',        fr:'l\'addition',                ans:['addition','l\'addition'],                                ex:'La cuenta, por favor.' },
      { es:'la propina',       fr:'le pourboire',               ans:['pourboire','le pourboire'],                             ex:'¿Dejamos propina?' },
      { es:'el menú del día',  fr:'le menu du jour',            ans:['menu du jour','le menu du jour'],                       ex:'¿Tenéis menú del día?' },
      { es:'la terraza',       fr:'la terrasse',                ans:['terrasse','la terrasse'],                                ex:'¿Nos sentamos en la terraza?' },
      { es:'para llevar',      fr:'à emporter',                 ans:['à emporter','a emporter'],                              ex:'Un café para llevar, por favor.' },
      { es:'la barra',         fr:'le comptoir / le bar',       ans:['comptoir','bar','le comptoir','le bar'],                 ex:'¿Comemos en la barra?' },
      { es:'el camarero',      fr:'le serveur',                 ans:['serveur','le serveur'],                                  ex:'El camarero es muy amable.' },
      { es:'picar algo',       fr:'grignoter',                  ans:['grignoter'],                                             ex:'¿Pedimos algo para picar?' },
    ]
  },
  {
    id: 'directions',
    label: 'Directions & lieux',
    emoji: '🗺️',
    words: [
      { es:'a la derecha',     fr:'à droite',                   ans:['à droite','a droite'],                                   ex:'Gira a la derecha en el semáforo.' },
      { es:'a la izquierda',   fr:'à gauche',                   ans:['à gauche','a gauche'],                                   ex:'La farmacia está a la izquierda.' },
      { es:'todo recto',       fr:'tout droit',                 ans:['tout droit'],                                            ex:'Sigue todo recto hasta el final.' },
      { es:'la calle',         fr:'la rue',                     ans:['rue','la rue'],                                          ex:'La calle Gran Vía es muy bonita.' },
      { es:'la plaza',         fr:'la place',                   ans:['place','la place'],                                      ex:'Quedamos en la plaza.' },
      { es:'el semáforo',      fr:'le feu (tricolore)',         ans:['feu','le feu','feu tricolore'],                          ex:'Cruza en el semáforo.' },
      { es:'la parada',        fr:'l\'arrêt (de bus/metro)',    ans:['arrêt','arret','l\'arrêt'],                              ex:'La parada del metro está cerca.' },
      { es:'cerca',            fr:'près / proche',              ans:['près','pres','proche'],                                  ex:'El bar está muy cerca.' },
      { es:'lejos',            fr:'loin',                       ans:['loin'],                                                  ex:'No está lejos, a 5 minutos.' },
      { es:'la esquina',       fr:'le coin (de rue)',           ans:['coin','le coin'],                                        ex:'Hay una farmacia en la esquina.' },
      { es:'el puente',        fr:'le pont',                    ans:['pont','le pont'],                                        ex:'Cruzamos el puente Zubizuri.' },
      { es:'el barrio',        fr:'le quartier',                ans:['quartier','le quartier'],                                ex:'Vivo en un barrio tranquilo.' },
    ]
  },
  {
    id: 'nombres',
    label: 'Nombres',
    emoji: '🔢',
    words: [
      { es:'cero',       fr:'zéro',     ans:['zéro','zero','0'],     ex:'Estamos a cero grados.' },
      { es:'uno',        fr:'un',       ans:['un','1'],              ex:'Uno, dos, tres...' },
      { es:'dos',        fr:'deux',     ans:['deux','2'],            ex:'Somos dos personas.' },
      { es:'tres',       fr:'trois',    ans:['trois','3'],           ex:'Tres cañas, por favor.' },
      { es:'cuatro',     fr:'quatre',   ans:['quatre','4'],          ex:'Son las cuatro de la tarde.' },
      { es:'cinco',      fr:'cinq',     ans:['cinq','5'],            ex:'Cinco euros.' },
      { es:'diez',       fr:'dix',      ans:['dix','10'],            ex:'El bar abre a las diez.' },
      { es:'veinte',     fr:'vingt',    ans:['vingt','20'],          ex:'Cuesta veinte euros.' },
      { es:'cincuenta',  fr:'cinquante', ans:['cinquante','50'],     ex:'Tiene cincuenta años.' },
      { es:'cien',       fr:'cent',     ans:['cent','100'],          ex:'La farmacia está a cien metros.' },
      { es:'mil',        fr:'mille',    ans:['mille','1000'],        ex:'El piso cuesta mil euros al mes.' },
      { es:'primero/a',  fr:'premier / première', ans:['premier','première','premiere'], ex:'Es la primera vez que vengo.' },
    ]
  },
  {
    id: 'temps',
    label: 'Jours & temps',
    emoji: '📅',
    words: [
      { es:'lunes',      fr:'lundi',      ans:['lundi'],      ex:'El lunes empiezo el trabajo.' },
      { es:'martes',     fr:'mardi',      ans:['mardi'],      ex:'El martes hay reunión.' },
      { es:'miércoles',  fr:'mercredi',   ans:['mercredi'],   ex:'Los miércoles tengo clase.' },
      { es:'jueves',     fr:'jeudi',      ans:['jeudi'],      ex:'El jueves vamos de pintxos.' },
      { es:'viernes',    fr:'vendredi',   ans:['vendredi'],   ex:'¡Por fin es viernes!' },
      { es:'sábado',     fr:'samedi',     ans:['samedi'],     ex:'El sábado voy a la playa.' },
      { es:'domingo',    fr:'dimanche',   ans:['dimanche'],   ex:'Los domingos descanso.' },
      { es:'hoy',        fr:'aujourd\'hui', ans:['aujourd\'hui','aujourd\'hui','aujourd hui'], ex:'Hoy hace buen tiempo.' },
      { es:'mañana',     fr:'demain',     ans:['demain'],     ex:'Mañana tengo una cita.' },
      { es:'ayer',       fr:'hier',       ans:['hier'],       ex:'Ayer fui al cine.' },
      { es:'ahora',      fr:'maintenant', ans:['maintenant'], ex:'Lo necesito ahora.' },
      { es:'siempre',    fr:'toujours',   ans:['toujours'],   ex:'Siempre llego tarde.' },
      { es:'nunca',      fr:'jamais',     ans:['jamais'],     ex:'Nunca he ido a Madrid.' },
      { es:'a veces',    fr:'parfois',    ans:['parfois','des fois'], ex:'A veces como en casa.' },
    ]
  },
];
