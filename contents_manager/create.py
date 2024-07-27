import os, sys
import json
import pathlib
from js_template import template

### USAGE
# python main.py TITLE ID YEAR?

print("TITLE?: ")
TITLE = input()
print("ID?: ")
ID = input()
print("YEAR?(Optional): ")
YEAR = input()
if len(YEAR) > 0:
    YEAR = YEAR
else:
    YEAR = None

print(f"Creating...")

JSON_PATH = "../main_app/public/works.json"

# public/img/:ID を作る
try:
    os.mkdir(f"../main_app/public/img/{ID}")
except OSError as e:
    print("Error: ID already exists...")
    sys.exit(1)

# public/thumbnail/:ID.jpg を作る
new_image = pathlib.Path(f"../main_app/public/thumbnail/{ID}.jpg")
new_image.touch()

# @/src/pages/work/:ID.js を作る
new_js_text = template.replace("REPLACING_ID", ID)
with open(f"../main_app/src/pages/work/{ID}.js", "w") as f:
    f.write(new_js_text)

# public/works.json に要素を追加
with open(JSON_PATH, "r") as f:
    works = json.load(f)

if YEAR:
    works.append({
        "title": TITLE, 
        "id": ID,
        "year": YEAR
    })
else:
    works.append({
        "title": TITLE, 
        "id": ID
    })

with open(JSON_PATH, 'w') as f:
    json.dump(works, f, indent=2, ensure_ascii=False)

print("Completed.")