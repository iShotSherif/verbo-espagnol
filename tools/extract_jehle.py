"""
Extract conjugation data from Fred Jehle's Spanish verb database
for our 76 verbs, and output enriched JS fields:
  fut[], cond[], subj[], ger, pp
"""
import csv, json, urllib.request, sys

URL = "https://raw.githubusercontent.com/ghidinelli/fred-jehle-spanish-verbs/master/jehle_verb_database.csv"

# Our 76 verbs — lowercase infinitive without -se for reflexives
OUR_VERBS = [
    # Essentiels
    'ser','estar','tener','hacer','ir','venir','poder','querer','decir','ver',
    'dar','saber','conocer','hablar','comer','beber','pedir','salir','llegar',
    'volver','dormir','levantar','sentar','comprar','pagar','gustar',
    # Courants
    'vivir','trabajar','estudiar','aprender','enseñar','escribir','leer',
    'escuchar','mirar','buscar','encontrar','perder','ganar','gastar','ahorrar',
    'llevar','traer','poner','abrir','cerrar','empezar','terminar',
    'esperar','ayudar','necesitar','preferir','entender','creer','deber',
    # Courants 2
    'recordar','olvidar','cambiar','llamar','tocar','jugar','correr','pensar',
    'sentir','parecer','caer','seguir','preguntar','intentar','meter','sacar',
    'subir','bajar','conducir','elegir',
]

# Reflexive verb mapping: our key -> base infinitive in Jehle
REFLEXIVE_MAP = {
    'levantarse': 'levantar',
    'sentarse':   'sentar',
    'ponerse':    'poner',
}

print("Downloading Jehle CSV...", file=sys.stderr)
response = urllib.request.urlopen(URL, timeout=30)
content = response.read().decode('utf-8')
lines = content.splitlines()
print(f"Downloaded {len(lines)} lines", file=sys.stderr)

reader = csv.DictReader(lines)

# Group by infinitive → (mood_english, tense_english) → row
db = {}
for row in reader:
    inf = row['infinitive'].lower()
    if inf not in db:
        db[inf] = {}
    key = (row['mood_english'].strip(), row['tense_english'].strip())
    db[inf][key] = row

print(f"Loaded {len(db)} verbs from database", file=sys.stderr)

def get_6(row):
    return [row['form_1s'], row['form_2s'], row['form_3s'],
            row['form_1p'], row['form_2p'], row['form_3p']]

# Build result
all_verbs = OUR_VERBS + list(REFLEXIVE_MAP.keys())
results = {}
not_found = []

for verb in all_verbs:
    # look up base form in Jehle
    base = REFLEXIVE_MAP.get(verb, verb)
    data = db.get(base)
    if not data:
        not_found.append(verb)
        continue

    r = {}
    # Present (verify our conj[])
    p = data.get(('Indicative', 'Present'))
    if p:
        r['present'] = get_6(p)
        r['ger'] = p['gerund']
        r['pp']  = p['pastparticiple']

    # Future
    f = data.get(('Indicative', 'Future'))
    if f: r['fut'] = get_6(f)

    # Conditional
    c = data.get(('Indicative', 'Conditional'))
    if c: r['cond'] = get_6(c)

    # Subjunctive present
    s = data.get(('Subjunctive', 'Present'))
    if s: r['subj'] = get_6(s)

    # Preterite (verify our ps)
    pt = data.get(('Indicative', 'Preterite'))
    if pt: r['pret'] = get_6(pt)

    # Imperfect (verify our imp)
    im = data.get(('Indicative', 'Imperfect'))
    if im: r['imp6'] = get_6(im)

    results[verb] = r

if not_found:
    print(f"\nNOT FOUND in Jehle: {not_found}", file=sys.stderr)

out_path = 'C:/Users/Paul Pruvot/OneDrive/Bureau/Code/Espangol/tools/jehle_extracted.json'
with open(out_path, 'w', encoding='utf-8') as fout:
    json.dump(results, fout, ensure_ascii=False, indent=2)
print(f"Written to {out_path}", file=sys.stderr)
print(f"Extracted data for {len(results)} verbs", file=sys.stderr)
