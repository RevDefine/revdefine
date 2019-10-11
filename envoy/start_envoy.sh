#!/bin/bash
docker run --rm -d -p 8088:8080 -p 9901:9901 -v $(pwd)/envoy.yaml:/etc/envoy/envoy.yaml --name envoy envoyproxy/envoy:v1.11.1