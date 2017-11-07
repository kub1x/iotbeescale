#!/bin/bash
curl -XPUT 'localhost:9200/iotbeescale-manual_test?pretty' -d @add_timestamp_mapping.json
