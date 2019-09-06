import math
import json
from PIL import Image

# SETTINGS
MAX_COLUMNS = 6
COMBINED_FILE = "sprites.png"
JSON_PATH = "data.json"
WIDTH=0
HEIGHT=0
KEEP_RATIO=True

def start():

  # read json
  characters = []
  with open(JSON_PATH) as json_file:
    characters.extend(json.load(json_file))

  # mapping data
  filepaths = [ character['src'] for character in characters ]
  images = map(Image.open, filepaths)

  # calculate WIDTH and HEIGHT for each block
  widths, heights = zip(*(i.size for i in images))
  width = WIDTH if WIDTH else min(widths)
  height = HEIGHT if HEIGHT else min(heights)

  # calculate WIDTH and HEIGHT for combinding image
  total_width = width * MAX_COLUMNS
  total_height = height * math.ceil(len(filepaths) / MAX_COLUMNS)

  # create combinding image
  new_im = Image.new('RGB', (total_width, total_height))
  for character in characters:
    img = Image.open(character["src"])

    # resize image
    size = width, height
    if KEEP_RATIO:
      img.thumbnail(size, Image.ANTIALIAS)
    else:
      img = img.resize(size, Image.ANTIALIAS)

    # calculate position
    idx = character["id"] - 1
    x_offset = idx % MAX_COLUMNS * width
    y_offset = int(idx / MAX_COLUMNS) * height

    # draw to combinding image
    new_im.paste(img, (x_offset, y_offset))

  # save image
  new_im.save(COMBINED_FILE)

start()
