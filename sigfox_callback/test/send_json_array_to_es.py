#!/usr/bin/env python
import json;
import io;
import requests;

try:
    to_unicode = unicode
except NameError:
    to_unicode = str

with open('data50.json') as data_file:
    data_loaded = json.load(data_file)

for f in data_loaded:
    str_ = json.dumps(f, indent=2, sort_keys=True, separators=(',', ': '), ensure_ascii=False)
    print("Sending: " + str_)

    #req = requests.post('http://localhost:9200/iotbeescale-manual_test', data=str_)
    #print req.text
