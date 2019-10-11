PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
PROTOC_GEN_GRPC_PATH="./node_modules/.bin/grpc_tools_node_protoc_plugin"
# Directory to write generated code to (.js and .d.ts files)
OUT_DIR="./grpc"
SRC_DIR="./pb"

protoc \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:$OUT_DIR \
    -I $SRC_DIR \
    $(find $SRC_DIR -name *.proto)