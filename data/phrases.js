// ═══════════════════════════════════════════
//  PHRASES — Fill-in-the-blank sentences
// ═══════════════════════════════════════════

const PHRASES = [
  // ══════════════════════════════════════════
  //  NIVEAU 1 : Présent, réguliers
  // ══════════════════════════════════════════
  { es_gap:'Yo ___ (hablar) español.',              es_full:'Yo hablo español.',                verb:'Hablar',    pronoun:'yo',       ans:['hablo'],     diff:1, tags:['regar','comm'] },
  { es_gap:'Tú ___ (trabajar) mucho.',              es_full:'Tú trabajas mucho.',               verb:'Trabajar',  pronoun:'tú',       ans:['trabajas'],  diff:1, tags:['regar','trav'] },
  { es_gap:'Ella ___ (estudiar) medicina.',          es_full:'Ella estudia medicina.',            verb:'Estudiar',  pronoun:'él/ella',  ans:['estudia'],   diff:1, tags:['regar','trav'] },
  { es_gap:'Nosotros ___ (comer) a las dos.',        es_full:'Nosotros comemos a las dos.',       verb:'Comer',     pronoun:'nosotros', ans:['comemos'],   diff:1, tags:['regei'] },
  { es_gap:'Yo ___ (vivir) en Bilbao.',              es_full:'Yo vivo en Bilbao.',                verb:'Vivir',     pronoun:'yo',       ans:['vivo'],      diff:1, tags:['regei'] },
  { es_gap:'Ellos ___ (comprar) la comida.',         es_full:'Ellos compran la comida.',           verb:'Comprar',   pronoun:'ellos',    ans:['compran'],   diff:1, tags:['regar'] },
  { es_gap:'Vosotros ___ (beber) mucho café.',       es_full:'Vosotros bebéis mucho café.',        verb:'Beber',     pronoun:'vosotros', ans:['bebéis','bebeis'], diff:1, tags:['regei','bar'] },
  { es_gap:'Yo ___ (escribir) un WhatsApp.',         es_full:'Yo escribo un WhatsApp.',            verb:'Escribir',  pronoun:'yo',       ans:['escribo'],   diff:1, tags:['regei','comm'] },
  { es_gap:'Tú ___ (escuchar) música en el metro.',  es_full:'Tú escuchas música en el metro.',    verb:'Escuchar',  pronoun:'tú',       ans:['escuchas'],  diff:1, tags:['regar','comm'] },
  { es_gap:'Él ___ (pagar) con tarjeta.',            es_full:'Él paga con tarjeta.',               verb:'Pagar',     pronoun:'él/ella',  ans:['paga'],      diff:1, tags:['regar','bar'] },
  { es_gap:'Nosotros ___ (aprender) español.',       es_full:'Nosotros aprendemos español.',       verb:'Aprender',  pronoun:'nosotros', ans:['aprendemos'], diff:1, tags:['regei','trav'] },
  { es_gap:'Ella ___ (enseñar) matemáticas.',        es_full:'Ella enseña matemáticas.',            verb:'Enseñar',   pronoun:'él/ella',  ans:['enseña'],    diff:1, tags:['regar','trav'] },
  { es_gap:'Tú ___ (mirar) el menú.',               es_full:'Tú miras el menú.',                  verb:'Mirar',     pronoun:'tú',       ans:['miras'],     diff:1, tags:['regar','bar'] },
  { es_gap:'Yo ___ (buscar) un restaurante.',        es_full:'Yo busco un restaurante.',            verb:'Buscar',    pronoun:'yo',       ans:['busco'],     diff:1, tags:['regar','bar'] },
  { es_gap:'Ella ___ (esperar) el autobús.',         es_full:'Ella espera el autobús.',             verb:'Esperar',   pronoun:'él/ella',  ans:['espera'],    diff:1, tags:['regar','voyage'] },
  { es_gap:'Nosotros ___ (terminar) a las seis.',    es_full:'Nosotros terminamos a las seis.',     verb:'Terminar',  pronoun:'nosotros', ans:['terminamos'], diff:1, tags:['regar','trav'] },
  { es_gap:'Tú ___ (ayudar) a tu compañero.',       es_full:'Tú ayudas a tu compañero.',           verb:'Ayudar',    pronoun:'tú',       ans:['ayudas'],    diff:1, tags:['regar','trav'] },
  { es_gap:'Ellos ___ (gastar) demasiado.',          es_full:'Ellos gastan demasiado.',              verb:'Gastar',    pronoun:'ellos',    ans:['gastan'],    diff:1, tags:['regar','argent'] },
  { es_gap:'Yo ___ (ahorrar) para viajar.',          es_full:'Yo ahorro para viajar.',               verb:'Ahorrar',   pronoun:'yo',       ans:['ahorro'],    diff:1, tags:['regar','argent'] },
  { es_gap:'Él ___ (ganar) bastante dinero.',        es_full:'Él gana bastante dinero.',              verb:'Ganar',     pronoun:'él/ella',  ans:['gana'],      diff:1, tags:['regar','argent'] },
  { es_gap:'Yo ___ (leer) el periódico.',            es_full:'Yo leo el periódico.',                  verb:'Leer',      pronoun:'yo',       ans:['leo'],       diff:1, tags:['regei','comm'] },
  { es_gap:'Ella ___ (abrir) la puerta.',            es_full:'Ella abre la puerta.',                  verb:'Abrir',     pronoun:'él/ella',  ans:['abre'],      diff:1, tags:['regei','maison'] },
  // Nouveaux verbes C2 — réguliers
  { es_gap:'Yo ___ (olvidar) las llaves siempre.',   es_full:'Yo olvido las llaves siempre.',         verb:'Olvidar',   pronoun:'yo',       ans:['olvido'],    diff:1, tags:['regar','maison'] },
  { es_gap:'Tú ___ (llamar) a un taxi.',             es_full:'Tú llamas a un taxi.',                  verb:'Llamar',    pronoun:'tú',       ans:['llamas'],    diff:1, tags:['regar','comm'] },
  { es_gap:'Nosotros ___ (cambiar) de línea aquí.',  es_full:'Nosotros cambiamos de línea aquí.',     verb:'Cambiar',   pronoun:'nosotros', ans:['cambiamos'], diff:1, tags:['regar','voyage'] },
  { es_gap:'Él ___ (preguntar) al camarero.',        es_full:'Él pregunta al camarero.',               verb:'Preguntar', pronoun:'él/ella',  ans:['pregunta'],  diff:1, tags:['regar','bar'] },
  { es_gap:'Yo ___ (intentar) hablar en español.',   es_full:'Yo intento hablar en español.',          verb:'Intentar',  pronoun:'yo',       ans:['intento'],   diff:1, tags:['regar','comm'] },
  { es_gap:'Ellos ___ (sacar) dinero del cajero.',   es_full:'Ellos sacan dinero del cajero.',         verb:'Sacar',     pronoun:'ellos',    ans:['sacan'],     diff:1, tags:['regar','argent'] },
  { es_gap:'Yo ___ (bajar) en la siguiente parada.', es_full:'Yo bajo en la siguiente parada.',       verb:'Bajar',     pronoun:'yo',       ans:['bajo'],      diff:1, tags:['regar','voyage'] },
  { es_gap:'Ella ___ (tocar) la guitarra.',          es_full:'Ella toca la guitarra.',                 verb:'Tocar',     pronoun:'él/ella',  ans:['toca'],      diff:1, tags:['regar'] },
  { es_gap:'Yo ___ (correr) por la ría.',            es_full:'Yo corro por la ría.',                   verb:'Correr',    pronoun:'yo',       ans:['corro'],     diff:1, tags:['regei','mouvement'] },
  { es_gap:'Tú ___ (meter) la ropa en la maleta.',   es_full:'Tú metes la ropa en la maleta.',        verb:'Meter',     pronoun:'tú',       ans:['metes'],     diff:1, tags:['regei','maison'] },
  { es_gap:'Nosotros ___ (subir) al autobús.',       es_full:'Nosotros subimos al autobús.',           verb:'Subir',     pronoun:'nosotros', ans:['subimos'],   diff:1, tags:['regei','voyage'] },

  // ══════════════════════════════════════════
  //  NIVEAU 2 : Présent, irréguliers
  // ══════════════════════════════════════════
  // -- Grands irréguliers --
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
  // -- Diphtongues --
  { es_gap:'Él ___ (dormir) mucho.',                  es_full:'Él duerme mucho.',                   verb:'Dormir',    pronoun:'él/ella',  ans:['duerme'],    diff:2, tags:['diph'] },
  { es_gap:'Tú ___ (volver) tarde.',                  es_full:'Tú vuelves tarde.',                  verb:'Volver',    pronoun:'tú',       ans:['vuelves'],   diff:2, tags:['diph'] },
  { es_gap:'Yo ___ (empezar) a las nueve.',           es_full:'Yo empiezo a las nueve.',            verb:'Empezar',   pronoun:'yo',       ans:['empiezo'],   diff:2, tags:['diph','trav'] },
  { es_gap:'Ella ___ (cerrar) la ventana.',           es_full:'Ella cierra la ventana.',            verb:'Cerrar',    pronoun:'él/ella',  ans:['cierra'],    diff:2, tags:['diph','maison'] },
  { es_gap:'Yo no ___ (entender) nada.',              es_full:'Yo no entiendo nada.',               verb:'Entender',  pronoun:'yo',       ans:['entiendo'],  diff:2, tags:['diph','comm'] },
  { es_gap:'Yo ___ (preferir) el vino tinto.',        es_full:'Yo prefiero el vino tinto.',         verb:'Preferir',  pronoun:'yo',       ans:['prefiero'],  diff:2, tags:['diph','bar'] },
  { es_gap:'Ella ___ (pedir) una caña.',              es_full:'Ella pide una caña.',                verb:'Pedir',     pronoun:'él/ella',  ans:['pide'],      diff:2, tags:['bar'] },
  { es_gap:'Yo ___ (traer) algo para picar.',         es_full:'Yo traigo algo para picar.',         verb:'Traer',     pronoun:'yo',       ans:['traigo'],    diff:2, tags:['go','bar'] },
  // -- Nouveaux irréguliers/diphtongues (complément) --
  { es_gap:'Nosotros ___ (tener) una reunión.',       es_full:'Nosotros tenemos una reunión.',      verb:'Tener',     pronoun:'nosotros', ans:['tenemos'],   diff:2, tags:['irre','trav'] },
  { es_gap:'Ellos ___ (ir) de vacaciones.',           es_full:'Ellos van de vacaciones.',            verb:'Ir',        pronoun:'ellos',    ans:['van'],       diff:2, tags:['irre','voyage'] },
  { es_gap:'Tú ___ (decir) que no puedes.',           es_full:'Tú dices que no puedes.',             verb:'Decir',     pronoun:'tú',       ans:['dices'],     diff:2, tags:['irre','comm'] },
  { es_gap:'Yo ___ (ver) la tele.',                   es_full:'Yo veo la tele.',                     verb:'Ver',       pronoun:'yo',       ans:['veo'],       diff:2, tags:['irre','maison'] },
  { es_gap:'Tú ___ (dar) buena impresión.',           es_full:'Tú das buena impresión.',             verb:'Dar',       pronoun:'tú',       ans:['das'],       diff:2, tags:['irre'] },
  { es_gap:'Yo no ___ (saber) cocinar.',              es_full:'Yo no sé cocinar.',                   verb:'Saber',     pronoun:'yo',       ans:['sé','se'],   diff:2, tags:['irre','maison'] },
  { es_gap:'Ella ___ (poder) venir mañana.',          es_full:'Ella puede venir mañana.',            verb:'Poder',     pronoun:'él/ella',  ans:['puede'],     diff:2, tags:['irre','diph'] },
  { es_gap:'Nosotros ___ (querer) ir al cine.',       es_full:'Nosotros queremos ir al cine.',      verb:'Querer',    pronoun:'nosotros', ans:['queremos'],  diff:2, tags:['irre'] },
  { es_gap:'Ellos ___ (hacer) mucho ruido.',          es_full:'Ellos hacen mucho ruido.',            verb:'Hacer',     pronoun:'ellos',    ans:['hacen'],     diff:2, tags:['irre','maison'] },
  { es_gap:'Nosotros ___ (empezar) a comer.',         es_full:'Nosotros empezamos a comer.',        verb:'Empezar',   pronoun:'nosotros', ans:['empezamos'], diff:2, tags:['diph'] },
  { es_gap:'Yo ___ (encontrar) mi cartera.',          es_full:'Yo encuentro mi cartera.',            verb:'Encontrar', pronoun:'yo',       ans:['encuentro'], diff:2, tags:['diph'] },
  { es_gap:'Tú ___ (perder) siempre las llaves.',     es_full:'Tú pierdes siempre las llaves.',     verb:'Perder',    pronoun:'tú',       ans:['pierdes'],   diff:2, tags:['diph','maison'] },

  // -- Réfléchis --
  { es_gap:'Yo ___ (levantarse) a las siete.',        es_full:'Yo me levanto a las siete.',         verb:'Levantarse', pronoun:'yo',      ans:['me levanto'], diff:2, tags:['reflex','maison'] },
  { es_gap:'Tú ___ (sentarse) aquí.',                 es_full:'Tú te sientas aquí.',                verb:'Sentarse',  pronoun:'tú',       ans:['te sientas'], diff:2, tags:['reflex','diph'] },
  { es_gap:'Él ___ (ponerse) nervioso.',              es_full:'Él se pone nervioso.',               verb:'Ponerse',   pronoun:'él/ella',  ans:['se pone'],   diff:2, tags:['reflex'] },

  // -- Gustar --
  { es_gap:'A mí ___ (gustar) el txakoli.',           es_full:'A mí me gusta el txakoli.',          verb:'Gustar',    pronoun:'yo',       ans:['me gusta'],  diff:2, tags:['bar'] },
  { es_gap:'A ellos ___ (gustar) las tapas.',         es_full:'A ellos les gustan las tapas.',      verb:'Gustar',    pronoun:'ellos',    ans:['les gustan','les gusta'], diff:2, tags:['bar'] },
  { es_gap:'A nosotros ___ (gustar) salir de noche.', es_full:'A nosotros nos gusta salir de noche.', verb:'Gustar', pronoun:'nosotros', ans:['nos gusta'], diff:2, tags:['bar'] },

  // -- Verbes C2 irréguliers au présent --
  { es_gap:'Yo ___ (recordar) aquella noche.',        es_full:'Yo recuerdo aquella noche.',          verb:'Recordar',  pronoun:'yo',       ans:['recuerdo'],  diff:2, tags:['diph','comm'] },
  { es_gap:'Tú ___ (pensar) demasiado.',              es_full:'Tú piensas demasiado.',               verb:'Pensar',    pronoun:'tú',       ans:['piensas'],   diff:2, tags:['diph','comm'] },
  { es_gap:'Yo ___ (sentir) mucho frío.',             es_full:'Yo siento mucho frío.',               verb:'Sentir',    pronoun:'yo',       ans:['siento'],    diff:2, tags:['diph','emotion'] },
  { es_gap:'Ella ___ (jugar) al fútbol.',             es_full:'Ella juega al fútbol.',               verb:'Jugar',     pronoun:'él/ella',  ans:['juega'],     diff:2, tags:['diph'] },
  { es_gap:'Yo ___ (seguir) recto.',                  es_full:'Yo sigo recto.',                      verb:'Seguir',    pronoun:'yo',       ans:['sigo'],      diff:2, tags:['irre','voyage'] },
  { es_gap:'Yo ___ (conducir) por la autopista.',     es_full:'Yo conduzco por la autopista.',       verb:'Conducir',  pronoun:'yo',       ans:['conduzco'],  diff:2, tags:['go','voyage'] },
  { es_gap:'Yo ___ (elegir) el menú del día.',        es_full:'Yo elijo el menú del día.',           verb:'Elegir',    pronoun:'yo',       ans:['elijo'],     diff:2, tags:['go','bar'] },
  { es_gap:'Ella ___ (parecer) cansada.',             es_full:'Ella parece cansada.',                verb:'Parecer',   pronoun:'él/ella',  ans:['parece'],    diff:2, tags:['comm'] },
  { es_gap:'Yo ___ (caer) de sueño.',                 es_full:'Yo caigo de sueño.',                  verb:'Caer',      pronoun:'yo',       ans:['caigo'],     diff:2, tags:['go'] },
  { es_gap:'Nosotros ___ (pensar) ir al monte.',      es_full:'Nosotros pensamos ir al monte.',     verb:'Pensar',    pronoun:'nosotros', ans:['pensamos'],  diff:2, tags:['diph'] },
  { es_gap:'Ellos ___ (recordar) el camino.',         es_full:'Ellos recuerdan el camino.',          verb:'Recordar',  pronoun:'ellos',    ans:['recuerdan'], diff:2, tags:['diph','voyage'] },
  { es_gap:'Tú ___ (sentir) pena por él.',            es_full:'Tú sientes pena por él.',             verb:'Sentir',    pronoun:'tú',       ans:['sientes'],   diff:2, tags:['diph','emotion'] },
  { es_gap:'Nosotros ___ (seguir) aprendiendo.',      es_full:'Nosotros seguimos aprendiendo.',     verb:'Seguir',    pronoun:'nosotros', ans:['seguimos'],  diff:2, tags:['trav'] },
  { es_gap:'Ellos ___ (jugar) los domingos.',         es_full:'Ellos juegan los domingos.',          verb:'Jugar',     pronoun:'ellos',    ans:['juegan'],    diff:2, tags:['diph'] },

  // ══════════════════════════════════════════
  //  NIVEAU 2 bis : Contextes quotidiens (présent)
  // ══════════════════════════════════════════
  { es_gap:'¿___ (necesitar, tú) algo más?',          es_full:'¿Necesitas algo más?',               verb:'Necesitar', pronoun:'tú',       ans:['necesitas'], diff:2, tags:['bar'] },
  { es_gap:'Nosotros ___ (llevar) dos años aquí.',     es_full:'Nosotros llevamos dos años aquí.',   verb:'Llevar',    pronoun:'nosotros', ans:['llevamos'],  diff:2, tags:['voyage'] },
  { es_gap:'Yo ___ (llegar) siempre puntual.',         es_full:'Yo llego siempre puntual.',          verb:'Llegar',    pronoun:'yo',       ans:['llego'],     diff:2, tags:['trav'] },
  { es_gap:'Ella ___ (creer) que sí.',                 es_full:'Ella cree que sí.',                  verb:'Creer',     pronoun:'él/ella',  ans:['cree'],      diff:2, tags:['comm'] },
  { es_gap:'Tú ___ (deber) llamar al médico.',         es_full:'Tú debes llamar al médico.',        verb:'Deber',     pronoun:'tú',       ans:['debes'],     diff:2, tags:['trav'] },

  // ══════════════════════════════════════════
  //  NIVEAU 3 : Prétérit
  // ══════════════════════════════════════════
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
  // -- Prétérit réguliers --
  { es_gap:'Ayer yo ___ (hablar) con mi jefe.',        es_full:'Ayer yo hablé con mi jefe.',        verb:'Hablar',    pronoun:'yo',       ans:['hablé','hable'], diff:3, tags:['regar','pret','trav'] },
  { es_gap:'Ella ___ (comprar) un regalo.',            es_full:'Ella compró un regalo.',             verb:'Comprar',   pronoun:'él/ella',  ans:['compró','compro'], diff:3, tags:['regar','pret'] },
  { es_gap:'Nosotros ___ (comer) paella ayer.',        es_full:'Nosotros comimos paella ayer.',      verb:'Comer',     pronoun:'nosotros', ans:['comimos'],   diff:3, tags:['regei','pret','bar'] },
  { es_gap:'Yo ___ (escribir) un email esta mañana.',  es_full:'Yo escribí un email esta mañana.',  verb:'Escribir',  pronoun:'yo',       ans:['escribí','escribi'], diff:3, tags:['regei','pret','trav'] },
  { es_gap:'Tú ___ (llegar) tarde ayer.',              es_full:'Tú llegaste tarde ayer.',            verb:'Llegar',    pronoun:'tú',       ans:['llegaste'],  diff:3, tags:['regar','pret'] },
  { es_gap:'Ellos ___ (salir) a las diez.',            es_full:'Ellos salieron a las diez.',         verb:'Salir',     pronoun:'ellos',    ans:['salieron'],  diff:3, tags:['irre','pret','bar'] },
  // -- Prétérit verbes C2 --
  { es_gap:'Yo ___ (conducir) hasta San Sebastián.',   es_full:'Yo conduje hasta San Sebastián.',   verb:'Conducir',  pronoun:'yo',       ans:['conduje'],   diff:3, tags:['irre','pret','voyage'] },
  { es_gap:'Ella ___ (elegir) el restaurante.',        es_full:'Ella eligió el restaurante.',        verb:'Elegir',    pronoun:'él/ella',  ans:['eligió','eligio'], diff:3, tags:['pret','bar'] },
  { es_gap:'Yo ___ (sentir) mucha emoción.',           es_full:'Yo sentí mucha emoción.',            verb:'Sentir',    pronoun:'yo',       ans:['sentí','senti'], diff:3, tags:['pret','emotion'] },
  { es_gap:'Él ___ (caer) en la trampa.',              es_full:'Él cayó en la trampa.',              verb:'Caer',      pronoun:'él/ella',  ans:['cayó','cayo'], diff:3, tags:['irre','pret'] },
  { es_gap:'Nosotros ___ (seguir) caminando.',         es_full:'Nosotros seguimos caminando.',       verb:'Seguir',    pronoun:'nosotros', ans:['seguimos'],  diff:3, tags:['pret'] },
  { es_gap:'Tú ___ (pensar) que era fácil.',           es_full:'Tú pensaste que era fácil.',         verb:'Pensar',    pronoun:'tú',       ans:['pensaste'],  diff:3, tags:['regar','pret'] },
  { es_gap:'Yo ___ (olvidar) el paraguas.',            es_full:'Yo olvidé el paraguas.',              verb:'Olvidar',   pronoun:'yo',       ans:['olvidé','olvide'], diff:3, tags:['regar','pret'] },
  { es_gap:'Ella ___ (llamar) por teléfono.',          es_full:'Ella llamó por teléfono.',            verb:'Llamar',    pronoun:'él/ella',  ans:['llamó','llamo'], diff:3, tags:['regar','pret','comm'] },
  { es_gap:'Yo ___ (intentar) abrir la puerta.',       es_full:'Yo intenté abrir la puerta.',        verb:'Intentar',  pronoun:'yo',       ans:['intenté','intente'], diff:3, tags:['regar','pret'] },

  // ══════════════════════════════════════════
  //  NIVEAU 3 : Imparfait
  // ══════════════════════════════════════════
  { es_gap:'De niño yo ___ (ir) a la playa.',         es_full:'De niño yo iba a la playa.',         verb:'Ir',        pronoun:'yo',       ans:['iba'],       diff:3, tags:['irre','imp'] },
  { es_gap:'Antes ella ___ (ser) muy tímida.',        es_full:'Antes ella era muy tímida.',         verb:'Ser',       pronoun:'él/ella',  ans:['era'],       diff:3, tags:['irre','imp'] },
  { es_gap:'Nosotros ___ (hacer) deporte todos los días.', es_full:'Nosotros hacíamos deporte todos los días.', verb:'Hacer', pronoun:'nosotros', ans:['hacíamos','haciamos'], diff:3, tags:['irre','imp'] },
  { es_gap:'Yo ___ (tener) 20 años cuando llegué.',   es_full:'Yo tenía 20 años cuando llegué.',    verb:'Tener',     pronoun:'yo',       ans:['tenía','tenia'], diff:3, tags:['irre','imp'] },
  // -- Imparfait réguliers --
  { es_gap:'De niño yo ___ (hablar) francés en casa.', es_full:'De niño yo hablaba francés en casa.', verb:'Hablar', pronoun:'yo',       ans:['hablaba'],   diff:3, tags:['regar','imp'] },
  { es_gap:'Antes ella ___ (trabajar) en una oficina.', es_full:'Antes ella trabajaba en una oficina.', verb:'Trabajar', pronoun:'él/ella', ans:['trabajaba'], diff:3, tags:['regar','imp','trav'] },
  { es_gap:'Nosotros ___ (comer) juntos todos los días.', es_full:'Nosotros comíamos juntos todos los días.', verb:'Comer', pronoun:'nosotros', ans:['comíamos','comiamos'], diff:3, tags:['regei','imp'] },
  { es_gap:'Antes yo ___ (vivir) en París.',           es_full:'Antes yo vivía en París.',           verb:'Vivir',     pronoun:'yo',       ans:['vivía','vivia'], diff:3, tags:['regei','imp'] },
  { es_gap:'De joven ella ___ (salir) mucho.',         es_full:'De joven ella salía mucho.',         verb:'Salir',     pronoun:'él/ella',  ans:['salía','salia'], diff:3, tags:['imp','bar'] },
  { es_gap:'Antes yo ___ (poder) correr 10 km.',      es_full:'Antes yo podía correr 10 km.',       verb:'Poder',     pronoun:'yo',       ans:['podía','podia'], diff:3, tags:['irre','imp'] },
  { es_gap:'Ellos ___ (querer) mudarse.',              es_full:'Ellos querían mudarse.',              verb:'Querer',    pronoun:'ellos',    ans:['querían','querian'], diff:3, tags:['irre','imp'] },
  { es_gap:'Yo ___ (conocer) bien esta calle.',        es_full:'Yo conocía bien esta calle.',        verb:'Conocer',   pronoun:'yo',       ans:['conocía','conocia'], diff:3, tags:['imp','voyage'] },
  { es_gap:'Nosotros ___ (jugar) en la calle.',        es_full:'Nosotros jugábamos en la calle.',    verb:'Jugar',     pronoun:'nosotros', ans:['jugábamos','jugabamos'], diff:3, tags:['imp'] },
  { es_gap:'Ella ___ (pensar) en ti.',                 es_full:'Ella pensaba en ti.',                 verb:'Pensar',    pronoun:'él/ella',  ans:['pensaba'],   diff:3, tags:['regar','imp','emotion'] },

  // ══════════════════════════════════════════
  //  NIVEAU 4 : Périphrases & structures
  // ══════════════════════════════════════════
  { es_gap:'Yo ___ (tener que) estudiar más.',         es_full:'Yo tengo que estudiar más.',         verb:'Tener',     pronoun:'yo',       ans:['tengo que'], diff:4, tags:['periph','trav'] },
  { es_gap:'Nosotros ___ (ir a) comer fuera.',         es_full:'Nosotros vamos a comer fuera.',      verb:'Ir',        pronoun:'nosotros', ans:['vamos a'],   diff:4, tags:['periph','bar'] },
  { es_gap:'Ella ___ (acabar de) llegar.',              es_full:'Ella acaba de llegar.',               verb:'Acabar',    pronoun:'él/ella',  ans:['acaba de'],  diff:4, tags:['periph'] },
  { es_gap:'Yo ___ (estar + gerundio) aprendiendo.',    es_full:'Yo estoy aprendiendo.',              verb:'Estar',     pronoun:'yo',       ans:['estoy'],     diff:4, tags:['periph','trav'] },
  { es_gap:'Ellos ___ (estar + gerundio) comiendo.',    es_full:'Ellos están comiendo.',              verb:'Estar',     pronoun:'ellos',    ans:['están','estan'], diff:4, tags:['periph'] },
  { es_gap:'Tú ___ (ir a) salir esta noche.',           es_full:'Tú vas a salir esta noche.',        verb:'Ir',        pronoun:'tú',       ans:['vas a'],     diff:4, tags:['periph','bar'] },
  { es_gap:'Nosotros ___ (tener que) trabajar mañana.', es_full:'Nosotros tenemos que trabajar mañana.', verb:'Tener', pronoun:'nosotros', ans:['tenemos que'], diff:4, tags:['periph','trav'] },
  { es_gap:'Yo ___ (deber) irme ya.',                   es_full:'Yo debo irme ya.',                  verb:'Deber',     pronoun:'yo',       ans:['debo'],      diff:4, tags:['periph'] },
  { es_gap:'Ella ___ (seguir + gerundio) trabajando.',   es_full:'Ella sigue trabajando.',            verb:'Seguir',    pronoun:'él/ella',  ans:['sigue'],     diff:4, tags:['periph','trav'] },
  { es_gap:'Nosotros ___ (poder) quedarnos un rato más.', es_full:'Nosotros podemos quedarnos un rato más.', verb:'Poder', pronoun:'nosotros', ans:['podemos'], diff:4, tags:['periph','bar'] },

  // ══════════════════════════════════════════
  //  NIVEAU 5 : Passé composé (pretérito perfecto)
  // ══════════════════════════════════════════
  { es_gap:'Yo ___ (hablar) con el médico hoy.',          es_full:'Yo he hablado con el médico hoy.',       verb:'Hablar',    pronoun:'yo',       ans:['he hablado'],      diff:5, tags:['sante','comm'] },
  { es_gap:'Tú ___ (comer) en ese restaurante antes?',    es_full:'Tú has comido en ese restaurante antes?', verb:'Comer',    pronoun:'tú',       ans:['has comido'],      diff:5, tags:['bar'] },
  { es_gap:'Ella ___ (beber) demasiado esta noche.',       es_full:'Ella ha bebido demasiado esta noche.',    verb:'Beber',    pronoun:'él/ella',  ans:['ha bebido'],       diff:5, tags:['bar'] },
  { es_gap:'Nosotros ___ (llegar) tarde al trabajo.',      es_full:'Nosotros hemos llegado tarde al trabajo.', verb:'Llegar',  pronoun:'nosotros', ans:['hemos llegado'],   diff:5, tags:['trav'] },
  { es_gap:'Vosotros ___ (aprender) mucho este año.',      es_full:'Vosotros habéis aprendido mucho este año.', verb:'Aprender', pronoun:'vosotros', ans:['habéis aprendido','habeis aprendido'], diff:5, tags:['trav'] },
  { es_gap:'Ellos ___ (terminar) el proyecto.',            es_full:'Ellos han terminado el proyecto.',        verb:'Terminar', pronoun:'ellos',    ans:['han terminado'],   diff:5, tags:['trav'] },
  { es_gap:'Yo ___ (ver) esa película dos veces.',         es_full:'Yo he visto esa película dos veces.',     verb:'Ver',      pronoun:'yo',       ans:['he visto'],        diff:5, tags:['comm'] },
  { es_gap:'Tú ___ (hacer) los deberes ya?',               es_full:'Tú has hecho los deberes ya?',            verb:'Hacer',   pronoun:'tú',       ans:['has hecho'],       diff:5, tags:['trav'] },
  { es_gap:'Él ___ (ir) al médico esta semana.',           es_full:'Él ha ido al médico esta semana.',        verb:'Ir',      pronoun:'él/ella',  ans:['ha ido'],          diff:5, tags:['sante'] },
  { es_gap:'Nosotros ___ (pedir) la cuenta.',              es_full:'Nosotros hemos pedido la cuenta.',        verb:'Pedir',   pronoun:'nosotros', ans:['hemos pedido'],    diff:5, tags:['bar'] },
  { es_gap:'Ella ___ (escribir) un correo al jefe.',       es_full:'Ella ha escrito un correo al jefe.',      verb:'Escribir', pronoun:'él/ella', ans:['ha escrito'],      diff:5, tags:['trav','comm'] },
  { es_gap:'Yo ___ (decir) la verdad.',                    es_full:'Yo he dicho la verdad.',                  verb:'Decir',   pronoun:'yo',       ans:['he dicho'],        diff:5, tags:['comm'] },
  { es_gap:'¿Vosotros ___ (volver) ya de las vacaciones?', es_full:'¿Vosotros habéis vuelto ya de las vacaciones?', verb:'Volver', pronoun:'vosotros', ans:['habéis vuelto','habeis vuelto'], diff:5, tags:['voyage'] },
  { es_gap:'Ellos ___ (abrir) una cuenta nueva.',          es_full:'Ellos han abierto una cuenta nueva.',     verb:'Abrir',   pronoun:'ellos',    ans:['han abierto'],     diff:5, tags:['argent'] },
  { es_gap:'Yo ___ (poner) las llaves en la mesa.',        es_full:'Yo he puesto las llaves en la mesa.',     verb:'Poner',   pronoun:'yo',       ans:['he puesto'],       diff:5, tags:['maison'] },
  { es_gap:'Tú ___ (romper) el vaso.',                     es_full:'Tú has roto el vaso.',                    verb:'Romper',  pronoun:'tú',       ans:['has roto'],        diff:5, tags:['maison','bar'] },
  { es_gap:'Nosotros ___ (pagar) la factura.',             es_full:'Nosotros hemos pagado la factura.',       verb:'Pagar',   pronoun:'nosotros', ans:['hemos pagado'],    diff:5, tags:['argent','bar'] },
  { es_gap:'Ella ___ (encontrar) un piso nuevo.',          es_full:'Ella ha encontrado un piso nuevo.',       verb:'Encontrar', pronoun:'él/ella', ans:['ha encontrado'],  diff:5, tags:['maison'] },
  { es_gap:'Yo ___ (leer) ese libro.',                     es_full:'Yo he leído ese libro.',                  verb:'Leer',    pronoun:'yo',       ans:['he leído','he leido'], diff:5, tags:['comm'] },
  { es_gap:'Ellos ___ (venir) en tren.',                   es_full:'Ellos han venido en tren.',               verb:'Venir',   pronoun:'ellos',    ans:['han venido'],      diff:5, tags:['voyage'] },

  // ══════════════════════════════════════════
  //  NIVEAU 6 : Futur simple
  // ══════════════════════════════════════════
  { es_gap:'Yo ___ (hablar) con él mañana.',               es_full:'Yo hablaré con él mañana.',               verb:'Hablar',   pronoun:'yo',       ans:['hablaré'],         diff:6, tags:['comm'] },
  { es_gap:'Mañana ___ (llover).',                         es_full:'Mañana lloverá.',                          verb:'Llover',   pronoun:'él/ella',  ans:['lloverá'],         diff:6, tags:['nature'] },
  { es_gap:'Nosotros ___ (comer) en casa el domingo.',     es_full:'Nosotros comeremos en casa el domingo.',   verb:'Comer',    pronoun:'nosotros', ans:['comeremos'],       diff:6, tags:['maison'] },
  { es_gap:'¿Tú ___ (venir) a la fiesta?',                 es_full:'¿Tú vendrás a la fiesta?',                 verb:'Venir',   pronoun:'tú',       ans:['vendrás'],         diff:6, tags:['social'] },
  { es_gap:'Ella ___ (tener) que trabajar el sábado.',     es_full:'Ella tendrá que trabajar el sábado.',      verb:'Tener',   pronoun:'él/ella',  ans:['tendrá'],          diff:6, tags:['trav'] },
  { es_gap:'Vosotros ___ (poder) llamarme cuando queráis.', es_full:'Vosotros podréis llamarme cuando queráis.', verb:'Poder', pronoun:'vosotros', ans:['podréis'],         diff:6, tags:['comm'] },
  { es_gap:'Ellos ___ (llegar) a las ocho.',               es_full:'Ellos llegarán a las ocho.',               verb:'Llegar',  pronoun:'ellos',    ans:['llegarán'],        diff:6, tags:['voyage'] },
  { es_gap:'Yo ___ (salir) tarde del trabajo.',            es_full:'Yo saldré tarde del trabajo.',             verb:'Salir',   pronoun:'yo',       ans:['saldré'],          diff:6, tags:['trav'] },
  { es_gap:'¿Tú ___ (hacer) la cena esta noche?',          es_full:'¿Tú harás la cena esta noche?',            verb:'Hacer',   pronoun:'tú',       ans:['harás'],           diff:6, tags:['maison','cuisine'] },
  { es_gap:'El tiempo ___ (ser) bueno el fin de semana.',  es_full:'El tiempo será bueno el fin de semana.',   verb:'Ser',     pronoun:'él/ella',  ans:['será'],            diff:6, tags:['nature'] },
  { es_gap:'Nosotros ___ (ir) a Bilbao en agosto.',        es_full:'Nosotros iremos a Bilbao en agosto.',      verb:'Ir',      pronoun:'nosotros', ans:['iremos'],          diff:6, tags:['voyage'] },
  { es_gap:'Yo ___ (poner) la mesa.',                      es_full:'Yo pondré la mesa.',                       verb:'Poner',   pronoun:'yo',       ans:['pondré'],          diff:6, tags:['maison'] },
  { es_gap:'Ellos ___ (saber) la verdad.',                 es_full:'Ellos sabrán la verdad.',                  verb:'Saber',   pronoun:'ellos',    ans:['sabrán'],          diff:6, tags:['comm'] },
  { es_gap:'Tú ___ (decir) lo que piensas?',               es_full:'Tú dirás lo que piensas?',                 verb:'Decir',   pronoun:'tú',       ans:['dirás'],           diff:6, tags:['comm'] },
  { es_gap:'Nosotros ___ (trabajar) juntos el mes que viene.', es_full:'Nosotros trabajaremos juntos el mes que viene.', verb:'Trabajar', pronoun:'nosotros', ans:['trabajaremos'], diff:6, tags:['trav'] },
];

// Phrase lists for game filtering
const PHRASE_LISTS = {
  temps: [
    { id:'tout',   emoji:'🔥', label:'Tout',           desc:'Toutes les phrases',                f: () => true },
    { id:'pres',   emoji:'🗣️', label:'Présent',        desc:'Indicatif présent (rég. + irrég.)', f: p => p.diff <= 2 },
    { id:'passe',  emoji:'⏮️', label:'Passé',          desc:'Prétérit et imparfait',             f: p => p.diff === 3 },
    { id:'pc',     emoji:'🔵', label:'Passé composé',  desc:'He/has/ha + participio',            f: p => p.diff === 5 },
    { id:'fut',    emoji:'🔮', label:'Futur simple',   desc:'Hablaré, comeré, viviré…',          f: p => p.diff === 6 },
    { id:'peri',   emoji:'▶️', label:'Périphrases',    desc:'Ir a, tener que, estar + -ando',    f: p => p.diff === 4 },
  ],
  theme: [
    { id:'bar',    emoji:'🍺', label:'Bar & tapas',    desc:'Contexte bar et sorties',           f: p => p.tags.includes('bar') },
    { id:'trav',   emoji:'💼', label:'Travail',         desc:'Contexte professionnel',            f: p => p.tags.includes('trav') },
    { id:'voyage', emoji:'✈️', label:'Voyage',          desc:'Transports et déplacements',        f: p => p.tags.includes('voyage') },
    { id:'maison', emoji:'🏠', label:'Maison',          desc:'Contexte domestique',               f: p => p.tags.includes('maison') },
    { id:'comm',   emoji:'🗣️', label:'Communication',  desc:'Parler, écrire, comprendre',        f: p => p.tags.includes('comm') },
    { id:'emotion',emoji:'❤️', label:'Émotions',        desc:'Sentir, aimer, préférer',           f: p => p.tags.includes('emotion') },
  ],
};
