import os, sys
import json
import pathlib
import shutil
from js_template import template

print("ID?: ")
ID = input()

JSON_PATH = "../main_app/public/works.json"

print(f"Deleting...")

# public/thumbnail/:ID.jpg を消す
try:
    os.remove(f"../main_app/public/thumbnail/{ID}.jpg")
except FileNotFoundError as e:
    print("Error: ID doesn't exists...")
    sys.exit(1)

# public/img/:ID を消す
shutil.rmtree(f"../main_app/public/img/{ID}")

# @/src/pages/work/:ID.js を消す
os.remove(f"../main_app/src/pages/work/{ID}.js")

# public/works.json に要素を追加
with open(JSON_PATH, "r") as f:
    works = json.load(f)

works = [work for work in works if work["id"] != ID]

with open(JSON_PATH, 'w') as f:
    json.dump(works, f, indent=2, ensure_ascii=False)


print("Completed.")