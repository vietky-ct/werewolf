import requests
import re
import json

p = re.compile('dx-(\w+)_\w+')
arr = []

def format_image_name(url, id):
    m = p.match(url.split('/')[-1].split('?')[0])
    if m is None:
        return None
    fileName = '{}.png'.format(m.group(1))
    # print('fileName', fileName)
    d = {
        "id": id,
        "name": m.group(1),
        "src": "./images/{}".format(fileName),
        "score": 1,
        "count": 1,
    }
    arr.append(d)

# format_image('http://cdn.shopify.com/s/files/1/0740/4855/products/dx-seer_400x400.png?v=1555593941')

with open('cards.txt') as f:
    c = 0
    for line in f:
        c += 1
        format_image_name(line, c)
    # print(arr)
    print(json.dumps(arr))