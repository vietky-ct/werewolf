import sys
import math
import json
from PIL import Image

from os import walk

MAX_COLUMNS = 6
COMBINED_FILE = "sprites.jpg"
JSON_PATH = "data.json"

def get_image_paths(JSON_PATH):
  filepaths = []
  with open(JSON_PATH) as json_file:
    data = json.load(json_file)
    for character in data:
      filepaths.append(character["src"])
  return filepaths

def combine_images(save_path, image_paths, max_columns):
  images = map(Image.open, image_paths)
  widths, heights = zip(*(i.size for i in images))

  max_width = max(widths)
  max_height = max(heights)
  total_width = max_width * max_columns
  total_height = max_height * math.ceil(len(image_paths) / max_columns)

  new_im = Image.new('RGB', (total_width, total_height))

  x_offset = 0
  y_offset = 0
  for index, image in enumerate(image_paths):
    img = Image.open(image)
    new_im.paste(img, (x_offset, y_offset))
    x_offset += max_width
    if (index + 1) % max_columns == 0:
      y_offset += max_height
      x_offset = 0

  new_im.save(save_path)

combine_images(COMBINED_FILE, get_image_paths(JSON_PATH), MAX_COLUMNS)