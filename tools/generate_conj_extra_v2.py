"""
Generate conj_extra.js for ALL 176 verbs in our database.
Extracts fut, cond, subj, ger, pp from Jehle's database.
"""
import csv, json, re, urllib.request, sys

URL = "https://raw.githubusercontent.com/ghidinelli/fred-jehle-spanish-verbs/master/jehle_verb_database.csv"

# All our verb infinitives (lowercase), mapping to Jehle lookup key
# Format: 'our_inf': 'jehle_key'  (None if same)
VERB_MAP = {
    # Essentiels
    'ser': None, 'estar': None, 'tener': None, 'hacer': None, 'ir': None,
    'venir': None, 'poder': None, 'querer': None, 'decir': None, 'ver': None,
    'dar': None, 'saber': None, 'conocer': None, 'hablar': None, 'comer': None,
    'beber': None, 'pedir': None, 'salir': None, 'llegar': None,
    'volver': None, 'dormir': None, 'levantarse': 'levantar',
    'sentarse': 'sentar', 'comprar': None, 'pagar': None, 'gustar': None,
    # Courants
    'vivir': None, 'trabajar': None, 'estudiar': None, 'aprender': None,
    'enseñar': None, 'escribir': None, 'leer': None, 'escuchar': None,
    'mirar': None, 'buscar': None, 'encontrar': None, 'perder': None,
    'ganar': None, 'gastar': None, 'ahorrar': None, 'llevar': None,
    'traer': None, 'poner': None, 'abrir': None, 'cerrar': None,
    'empezar': None, 'terminar': None, 'esperar': None, 'ayudar': None,
    'necesitar': None, 'preferir': None, 'entender': None, 'creer': None,
    'deber': None, 'ponerse': 'poner',
    # Courants 2
    'recordar': None, 'olvidar': None, 'cambiar': None, 'llamar': None,
    'tocar': None, 'jugar': None, 'correr': None, 'pensar': None,
    'sentir': None, 'parecer': None, 'caer': None, 'seguir': None,
    'preguntar': None, 'intentar': None, 'meter': None, 'sacar': None,
    'subir': None, 'bajar': None, 'conducir': None, 'elegir': None,
    # D1 Vie quotidienne
    'tomar': None, 'pasar': None, 'quedar': None, 'quedarse': 'quedar',
    'dejar': None, 'entrar': None, 'preparar': None, 'limpiar': None,
    'ducharse': 'duchar', 'despertarse': 'despertar', 'acostarse': 'acostar',
    'vestirse': 'vestir', 'afeitarse': 'afeitar', 'descansar': None,
    'caminar': None,
    # D2 Social
    'saludar': None, 'invitar': None, 'amar': None, 'besar': None,
    'abrazar': None, 'quejarse': 'quejar', 'gritar': None, 'llorar': None,
    'reunirse': 'reunir', 'responder': None, 'explicar': None,
    'presentar': None, 'recibir': None,
    # D3 Santé
    'doler': None, 'curar': None, 'enfermar': None, 'respirar': None,
    'recetar': 'recetar', 'vacunar': 'vacunar', 'mejorar': None,
    'desayunar': None,
    # D4 Cuisine
    'cocinar': None, 'hervir': None, 'cortar': None, 'calentar': None,
    'servir': None, 'probar': None, 'almorzar': None, 'cenar': None,
    'añadir': None,
    # D5 Sport & nature
    'nadar': None, 'andar': None, 'montar': None, 'escalar': None,
    'nevar': None, 'llover': None, 'pasear': None, 'entrenar': None,
    'lavar': None, 'arreglar': None,
    # D6 Travail
    'crear': None, 'conseguir': None, 'cobrar': None, 'negociar': None,
    'organizar': None, 'lograr': None, 'producir': None, 'calcular': None,
    'mantener': None, 'resolver': None,
    # D7 Voyage
    'reservar': None, 'coger': None, 'aparcar': None, 'confirmar': None,
    'cancelar': None, 'aterrizar': None, 'perderse': 'perder',
    # D8 Emotions
    'preocuparse': 'preocupar', 'alegrarse': 'alegrar', 'asustarse': 'asustar',
    'divertirse': 'divertir', 'aburrirse': 'aburrir', 'enfadarse': 'enfadar',
    'enamorarse': 'enamorar',
    # D9 Divers
    'mostrar': None, 'tratar': None, 'ofrecer': None, 'ocurrir': None,
    'resultar': None, 'suponer': None, 'reconocer': None, 'permitir': None,
    'aumentar': None, 'vender': None, 'comprender': None, 'incluir': None,
    'construir': None, 'nacer': None, 'crecer': None, 'morir': None,
    'mover': None,
    # Others found in verbs.js
    'oír': None, 'reírse': 'reír', 'medir': None, 'romper': None,
}

# Manual fallbacks for verbs not in Jehle
MANUAL = {
    'pasear': {
        'fut':  ['pasearé','pasearás','paseará','pasearemos','pasearéis','pasearán'],
        'cond': ['pasearía','pasearías','pasearía','pasearíamos','pasearíais','pasearían'],
        'subj': ['pasee','pasees','pasee','paseemos','paseéis','paseen'],
        'ger':  'paseando', 'pp': 'paseado',
    },
    'recetar': {
        'fut':  ['recetaré','recetarás','recetará','recetaremos','recetaréis','recetarán'],
        'cond': ['recetaría','recetarías','recetaría','recetaríamos','recetaríais','recetarían'],
        'subj': ['recete','recetes','recete','recetemos','recetéis','receten'],
        'ger':  'recetando', 'pp': 'recetado',
    },
    'vacunar': {
        'fut':  ['vacunaré','vacunarás','vacunará','vacunaremos','vacunaréis','vacunarán'],
        'cond': ['vacunaría','vacunarías','vacunaría','vacunaríamos','vacunaríais','vacunarían'],
        'subj': ['vacune','vacunes','vacune','vacunemos','vacunéis','vacunen'],
        'ger':  'vacunando', 'pp': 'vacunado',
    },
    'entrenar': {
        'fut':  ['entrenaré','entrenarás','entrenará','entrenaremos','entrenaréis','entrenarán'],
        'cond': ['entrenaría','entrenarías','entrenaría','entrenaríamos','entrenaríais','entrenarían'],
        'subj': ['entrene','entrenes','entrene','entrenemos','entrenéis','entrenen'],
        'ger':  'entrenando', 'pp': 'entrenado',
    },
    'escalar': {
        'fut':  ['escalaré','escalarás','escalará','escalaremos','escalaréis','escalarán'],
        'cond': ['escalaría','escalarías','escalaría','escalaríamos','escalaríais','escalarían'],
        'subj': ['escale','escales','escale','escalemos','escaléis','escalen'],
        'ger':  'escalando', 'pp': 'escalado',
    },
    'aparcar': {
        'fut':  ['aparcaré','aparcarás','aparcará','aparcaremos','aparcaréis','aparcarán'],
        'cond': ['aparcaría','aparcarías','aparcaría','aparcaríamos','aparcaríais','aparcarían'],
        'subj': ['aparque','aparques','aparque','aparquemos','aparquéis','aparquen'],
        'ger':  'aparcando', 'pp': 'aparcado',
    },
    'aterrizar': {
        'fut':  ['aterrizaré','aterrizarás','aterrizará','aterrizaremos','aterrizaréis','aterrizarán'],
        'cond': ['aterrizaría','aterrizarías','aterrizaría','aterrizaríamos','aterrizaríais','aterrizarían'],
        'subj': ['aterrice','aterrices','aterrice','aterricemos','aterricéis','aterricen'],
        'ger':  'aterrizando', 'pp': 'aterrizado',
    },
    'preocuparse': {
        'fut':  ['preocuparé','preocuparás','preocupará','preocuparemos','preocuparéis','preocuparán'],
        'cond': ['preocuparía','preocuparías','preocuparía','preocuparíamos','preocuparíais','preocuparían'],
        'subj': ['preocupe','preocupes','preocupe','preocupemos','preocupéis','preocupen'],
        'ger':  'preocupando', 'pp': 'preocupado',
    },
    'reunirse': {
        'fut':  ['reuniré','reunirás','reunirá','reuniremos','reuniréis','reunirán'],
        'cond': ['reuniría','reunirías','reuniría','reuniríamos','reuniríais','reunirían'],
        'subj': ['reúna','reúnas','reúna','reunamos','reunáis','reúnan'],
        'ger':  'reuniendo', 'pp': 'reunido',
    },
    'reírse': {
        'fut':  ['reiré','reirás','reirá','reiremos','reiréis','reirán'],
        'cond': ['reiría','reirías','reiría','reiríamos','reiríais','reirían'],
        'subj': ['ría','rías','ría','riamos','riáis','rían'],
        'ger':  'riendo', 'pp': 'reído',
    },
    'ducharse': {
        'fut':  ['ducharé','ducharás','duchará','ducharemos','ducharéis','ducharán'],
        'cond': ['ducharía','ducharías','ducharía','ducharíamos','ducharíais','ducharían'],
        'subj': ['duche','duches','duche','duchemos','duchéis','duchen'],
        'ger':  'duchando', 'pp': 'duchado',
    },
    'afeitarse': {
        'fut':  ['afeitaré','afeitarás','afeitará','afeitaremos','afeitaréis','afeitarán'],
        'cond': ['afeitaría','afeitarías','afeitaría','afeitaríamos','afeitaríais','afeitarían'],
        'subj': ['afeite','afeites','afeite','afeitemos','afeitéis','afeiten'],
        'ger':  'afeitando', 'pp': 'afeitado',
    },
    'cambiar': {
        'fut':  ['cambiaré','cambiarás','cambiará','cambiaremos','cambiaréis','cambiarán'],
        'cond': ['cambiaría','cambiarías','cambiaría','cambiaríamos','cambiaríais','cambiarían'],
        'subj': ['cambie','cambies','cambie','cambiemos','cambiéis','cambien'],
        'ger':  'cambiando', 'pp': 'cambiado',
    },
    'quejarse': {
        'fut':  ['quejaré','quejarás','quejará','quejaremos','quejaréis','quejarán'],
        'cond': ['quejaría','quejarías','quejaría','quejaríamos','quejaríais','quejarían'],
        'subj': ['queje','quejes','queje','quejemos','quejéis','quejen'],
        'ger':  'quejando', 'pp': 'quejado',
    },
    'mejorar': {
        'fut':  ['mejoraré','mejorarás','mejorará','mejoraremos','mejoraréis','mejorarán'],
        'cond': ['mejoraría','mejorarías','mejoraría','mejoraríamos','mejoraríais','mejorarían'],
        'subj': ['mejore','mejores','mejore','mejoremos','mejoréis','mejoren'],
        'ger':  'mejorando', 'pp': 'mejorado',
    },
}

print("Downloading Jehle CSV...", file=sys.stderr)
response = urllib.request.urlopen(URL, timeout=30)
content = response.read().decode('utf-8')
lines_csv = content.splitlines()
print(f"Downloaded {len(lines_csv)} lines", file=sys.stderr)

reader = csv.DictReader(lines_csv)
db = {}
for row in reader:
    inf = row['infinitive'].lower()
    if inf not in db:
        db[inf] = {}
    key = (row['mood_english'].strip(), row['tense_english'].strip())
    db[inf][key] = row

print(f"Loaded {len(db)} verbs from Jehle", file=sys.stderr)

def get_6(row):
    return [row['form_1s'], row['form_2s'], row['form_3s'],
            row['form_1p'], row['form_2p'], row['form_3p']]

# Also get all inf from verbs.js
verbs_js = r'c:/Users/Paul Pruvot/OneDrive/Bureau/Code/Espangol/data/verbs.js'
with open(verbs_js, 'r', encoding='utf-8') as f:
    js = f.read()
all_infs = re.findall(r"inf:'([^']+)'", js)
all_infs = [v.lower() for v in all_infs]

results = {}
not_found = []

for verb in all_infs:
    # Check manual first
    if verb in MANUAL:
        results[verb] = MANUAL[verb]
        continue

    # Look up in VERB_MAP or use as-is
    if verb in VERB_MAP:
        jehle_key = VERB_MAP[verb] if VERB_MAP[verb] else verb
    else:
        jehle_key = verb

    data = db.get(jehle_key)
    if not data:
        # Try without accent
        jehle_key_plain = jehle_key.replace('ñ','n').replace('é','e').replace('á','a').replace('ó','o').replace('ú','u').replace('í','i')
        data = db.get(jehle_key_plain)

    if not data:
        not_found.append(verb)
        continue

    r = {}
    p = data.get(('Indicative', 'Present'))
    if p:
        r['ger'] = p['gerund']
        r['pp']  = p['pastparticiple']

    f = data.get(('Indicative', 'Future'))
    if f: r['fut'] = get_6(f)

    c = data.get(('Indicative', 'Conditional'))
    if c: r['cond'] = get_6(c)

    s = data.get(('Subjunctive', 'Present'))
    if s: r['subj'] = get_6(s)

    results[verb] = r

print(f"\nExtracted: {len(results)} verbs", file=sys.stderr)
if not_found:
    print(f"Not found in Jehle: {not_found}", file=sys.stderr)

# Write conj_extra.js
out_path = r'c:/Users/Paul Pruvot/OneDrive/Bureau/Code/Espangol/data/conj_extra.js'
lines_out = ['const CONJ_EXTRA = {']
for verb, r in sorted(results.items()):
    lines_out.append(f"  '{verb}': {{")
    if 'fut' in r:
        fut = "', '".join(r['fut'])
        lines_out.append(f"    fut:  ['{fut}'],")
    if 'cond' in r:
        cond = "', '".join(r['cond'])
        lines_out.append(f"    cond: ['{cond}'],")
    if 'subj' in r:
        subj = "', '".join(r['subj'])
        lines_out.append(f"    subj: ['{subj}'],")
    if 'ger' in r:
        lines_out.append(f"    ger:  '{r['ger']}',")
    if 'pp' in r:
        lines_out.append(f"    pp:   '{r['pp']}',")
    lines_out.append('  },')
lines_out.append('};')

with open(out_path, 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines_out) + '\n')
print(f"Written {out_path}", file=sys.stderr)
