import requests
import re
import json

p = re.compile('dx-([a-zA-Z]+(-[a-zA-Z]*)*)')
arr = []

def format_image_name(url):
    m = p.match(url.split('/')[-1].split('?')[0])
    if m is None:
        return None
    # print('fileName', fileName)
    return m.group(1)

# format_image_name('http://cdn.shopify.com/s/files/1/0740/4855/products/dx-seer_400x400.png?v=1555593941')

with open('cards.txt') as f:
    id = 0
    for line in f:
        fileName = format_image_name(line).lower()
        if fileName is None:
            continue
        id += 1
        arr.append({
            "id": id,
            "name": '{}'.format(fileName),
            "src": "./images/{}.png".format(fileName),
            "score": 1,
            "count": 1,
        })
    # print(arr)
    print(json.dumps(arr))