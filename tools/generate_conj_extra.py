"""
Generate data/conj_extra.js from jehle_extracted.json
Maps each verb (lowercase infinitive) to its extra conjugation data:
  fut[], cond[], subj[], ger, pp
"""
import json, sys

JSON_PATH = 'C:/Users/Paul Pruvot/OneDrive/Bureau/Code/Espangol/tools/jehle_extracted.json'
OUT_PATH  = 'C:/Users/Paul Pruvot/OneDrive/Bureau/Code/Espangol/data/conj_extra.js'

# Map our verb inf (as in verbs.js) → lookup key in extracted JSON
# Reflexives map to their base form data
INF_MAP = {
    'Levantarse': 'levantarse',
    'Sentarse':   'sentarse',
    'Ponerse':    'ponerse',
}

# Manual data for verbs not in Jehle
MANUAL = {
    'cambiar': {
        'fut':  ['cambiaré','cambiarás','cambiará','cambiaremos','cambiaréis','cambiarán'],
        'cond': ['cambiaría','cambiarías','cambiaría','cambiaríamos','cambiaríais','cambiarían'],
        'subj': ['cambie','cambies','cambie','cambiemos','cambiéis','cambien'],
        'ger':  'cambiando',
        'pp':   'cambiado',
    }
}

with open(JSON_PATH, encoding='utf-8') as f:
    data = json.load(f)

def fmt_arr(lst):
    return '[' + ','.join(f"'{x}'" for x in lst) + ']'

lines = [
    "// ═══════════════════════════════════════════",
    "//  CONJ_EXTRA — Extra conjugations from Jehle database",
    "//  Keyed by lowercase infinitive (without -se for reflexives)",
    "//  Used by: fiches_verbes.html",
    "// ═══════════════════════════════════════════",
    "",
    "const CONJ_EXTRA = {",
]

# Collect all verb infinitives from data
all_keys = sorted(set(list(data.keys()) + list(MANUAL.keys())))

for key in all_keys:
    d = data.get(key) or MANUAL.get(key)
    if not d:
        continue
    fut  = d.get('fut',  [])
    cond = d.get('cond', [])
    subj = d.get('subj', [])
    ger  = d.get('ger',  '')
    pp   = d.get('pp',   '')
    if not (fut and cond and subj and ger and pp):
        print(f"SKIP (incomplete): {key}", file=sys.stderr)
        continue

    lines.append(f"  '{key}': {{")
    lines.append(f"    fut:  {fmt_arr(fut)},")
    lines.append(f"    cond: {fmt_arr(cond)},")
    lines.append(f"    subj: {fmt_arr(subj)},")
    lines.append(f"    ger:  '{ger}',")
    lines.append(f"    pp:   '{pp}',")
    lines.append(f"  }},")

lines.append("};")
lines.append("")

output = '\n'.join(lines)
with open(OUT_PATH, 'w', encoding='utf-8') as f:
    f.write(output)

print(f"Written {len(all_keys)} entries to {OUT_PATH}", file=sys.stderr)
