#!/bin/bash

HOST="localhost"
PORT="13737"

## 1) using curl
#curl --data-binary @data http://${HOST}:${PORT}
## "POST / HTTP/1.1\r\nHost: localhost:1337\r\nUser-Agent: curl/7.55.1\r\nAccept: */*\r\nContent-Length: 24\r\nContent-Type: application/x-www-form-urlencoded\r\n\r\n000000d88abfef04be90000\n"

## 2) using netcat
cat data | nc ${HOST} ${PORT}
## "000000d88abfef04be90000\n"
