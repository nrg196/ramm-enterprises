"""Convert Ramm-Products.xlsx into js/products.js for the website.
Usage: python excel_to_products.py Ramm-Products.xlsx js/products.js"""
import sys, json
from openpyxl import load_workbook

def s(v): return "" if v is None else str(v).strip()

def convert(xlsx, out):
    wb = load_workbook(xlsx, data_only=True)
    def rows(name):
        ws = wb[name]; it = ws.iter_rows(values_only=True); hdr = [s(h) for h in next(it)]
        return [dict(zip(hdr, r)) for r in it if any(s(x) for x in r[:4])]
    cats = sorted(rows('Categories'), key=lambda r: float(r['Order'] or 999))
    categories = [{"id": s(c['Category ID']), "name": s(c['Category Name'])} for c in cats if s(c['Category ID'])]
    cat_ids = [c['id'] for c in categories]
    specs = {}
    for r in rows('Specs'):
        pid = s(r['Product ID'])
        if pid and s(r['Specification']): specs.setdefault(pid, []).append(r)
    problems = []
    prods = []
    for r in rows('Products'):
        pid = s(r['Product ID'])
        if not pid or s(r['Show on Website']).lower() == 'no': continue
        cat = s(r['Category ID'])
        if cat not in cat_ids: problems.append(f"{pid}: unknown Category ID '{cat}'")
        p = {"id": pid, "name": s(r['Product Name']), "model": s(r['Model']), "category": cat,
             "make": s(r['Make / Brand']),
             "images": [s(r[f'Image {i}']) for i in range(1, 5) if s(r[f'Image {i}'])],
             "summary": s(r['Summary']),
             "features": [ln.strip().lstrip('•-').strip() for ln in s(r['Features']).splitlines() if ln.strip()]}
        sp = sorted(specs.pop(pid, []), key=lambda x: float(x['Order'] or 999))
        if any(s(x['Model Column']) for x in sp):
            cols, labels, grid = [], [], {}
            for x in sp:
                c, l = s(x['Model Column']) or '-', s(x['Specification'])
                if c not in cols: cols.append(c)
                if l not in labels: labels.append(l)
                grid[(l, c)] = s(x['Value'])
            p["specs"] = {"cols": cols, "rows": [[l] + [grid.get((l, c), '-') for c in cols] for l in labels]}
        else:
            p["specs"] = [[s(x['Specification']), s(x['Value'])] for x in sp]
        if s(r['Internal Notes']): p["verify"] = s(r['Internal Notes'])
        p["_order"] = (cat_ids.index(cat) if cat in cat_ids else 99, float(r['Order'] or 999))
        prods.append(p)
    for pid in specs: problems.append(f"Specs rows for unknown Product ID '{pid}'")
    prods.sort(key=lambda p: p.pop("_order"))
    js = ("/* GENERATED from Ramm-Products.xlsx. Edit the Excel file, not this file. */\n"
          "const CATEGORIES = " + json.dumps(categories, ensure_ascii=False, indent=2) + ";\n\n"
          "const PRODUCTS = " + json.dumps(prods, ensure_ascii=False, indent=2) + ";\n")
    open(out, 'w', encoding='utf-8').write(js)
    return len(prods), problems

if __name__ == '__main__':
    n, probs = convert(sys.argv[1], sys.argv[2])
    print(f"{n} products written to {sys.argv[2]}")
    for x in probs: print("WARNING:", x)
