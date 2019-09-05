import requests
import re

p = re.compile('dx-([a-zA-Z]+(-[a-zA-Z]*)*)')

def format_image_name(url):
    m = p.match(url.split('/')[-1].split('?')[0])
    if m is None:
        return None
    fileName = '{}.png'.format(m.group(1))
    print('fileName', fileName)
    return fileName

def save_image(url):
    fileName = format_image_name(url.split('/')[-1].split('?')[0])
    if fileName is None:
        return

    f = open('./images/{}'.format(fileName),'wb')
    f.write(requests.get(url).content)
    f.close()

with open('cards.txt') as f:
    for line in f:
        save_image(line)
