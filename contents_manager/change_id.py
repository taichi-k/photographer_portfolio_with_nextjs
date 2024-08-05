import os, sys
import json
import pathlib
import shutil
from js_template import template

print("Current ID?: ")
CURRENT_ID = input()
print("Future ID?: ")
FUTURE_ID = input()

JSON_PATH = "../main_app/public/works.json"

print(f"Changing ID...")

# public/thumbnail/:ID.jpg を改名
try:
    os.rename(f"../main_app/public/thumbnail/{CURRENT_ID}.jpg", f"../main_app/public/thumbnail/{FUTURE_ID}.jpg")
except FileNotFoundError as e:
    print("Error: ID doesn't exists...")
    sys.exit(1)

# public/img/:ID を改名
os.rename(f"../main_app/public/img/{CURRENT_ID}", f"../main_app/public/img/{FUTURE_ID}")

# @/src/pages/work/:ID.js を改名
os.rename(f"../main_app/src/pages/work/{CURRENT_ID}.js", f"../main_app/src/pages/work/{FUTURE_ID}.js")

# @/src/pages/work/:ID.js の中の変数ID、Class名を変更
content = None
with open(f"../main_app/src/pages/work/{FUTURE_ID}.js", "r") as f:
    content = f.read()
if content.count(CURRENT_ID) > 2:
    print('\033[31m' + "Warning: " + "\033[0m" + f"../main_app/src/pages/work/{FUTURE_ID}.js の中で予期せぬ置換がありました。")
content = content.replace(CURRENT_ID, FUTURE_ID)
with open(f"../main_app/src/pages/work/{FUTURE_ID}.js", "w") as f:
    f.write(content)

# public/works.json のIDを変換
with open(JSON_PATH, "r") as f:
    works = json.load(f)

for work in works:
    if work["id"] == CURRENT_ID:
        work["id"] = FUTURE_ID

with open(JSON_PATH, 'w') as f:
    json.dump(works, f, indent=2, ensure_ascii=False)


print("Completed.")