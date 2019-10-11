import * as jspb from "google-protobuf"

import * as google_protobuf_descriptor_pb from 'google-protobuf/google/protobuf/descriptor_pb';

export class ScalaPbOptions extends jspb.Message {
  getPackageName(): string;
  setPackageName(value: string): void;

  getFlatPackage(): boolean;
  setFlatPackage(value: boolean): void;

  getImportList(): Array<string>;
  setImportList(value: Array<string>): void;
  clearImportList(): void;
  addImport(value: string, index?: number): void;

  getPreambleList(): Array<string>;
  setPreambleList(value: Array<string>): void;
  clearPreambleList(): void;
  addPreamble(value: string, index?: number): void;

  getSingleFile(): boolean;
  setSingleFile(value: boolean): void;

  getNoPrimitiveWrappers(): boolean;
  setNoPrimitiveWrappers(value: boolean): void;

  getPrimitiveWrappers(): boolean;
  setPrimitiveWrappers(value: boolean): void;

  getCollectionType(): string;
  setCollectionType(value: string): void;

  getPreserveUnknownFields(): boolean;
  setPreserveUnknownFields(value: boolean): void;

  getObjectName(): string;
  setObjectName(value: string): void;

  getScope(): ScalaPbOptions.OptionsScope;
  setScope(value: ScalaPbOptions.OptionsScope): void;

  getLenses(): boolean;
  setLenses(value: boolean): void;

  getRetainSourceCodeInfo(): boolean;
  setRetainSourceCodeInfo(value: boolean): void;

  getMapType(): string;
  setMapType(value: string): void;

  getNoDefaultValuesInConstructor(): boolean;
  setNoDefaultValuesInConstructor(value: boolean): void;

  getTestOnlyNoJavaConversions(): boolean;
  setTestOnlyNoJavaConversions(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScalaPbOptions.AsObject;
  static toObject(includeInstance: boolean, msg: ScalaPbOptions): ScalaPbOptions.AsObject;
  static serializeBinaryToWriter(message: ScalaPbOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScalaPbOptions;
  static deserializeBinaryFromReader(message: ScalaPbOptions, reader: jspb.BinaryReader): ScalaPbOptions;
}

export namespace ScalaPbOptions {
  export type AsObject = {
    packageName: string,
    flatPackage: boolean,
    importList: Array<string>,
    preambleList: Array<string>,
    singleFile: boolean,
    noPrimitiveWrappers: boolean,
    primitiveWrappers: boolean,
    collectionType: string,
    preserveUnknownFields: boolean,
    objectName: string,
    scope: ScalaPbOptions.OptionsScope,
    lenses: boolean,
    retainSourceCodeInfo: boolean,
    mapType: string,
    noDefaultValuesInConstructor: boolean,
    testOnlyNoJavaConversions: boolean,
  }

  export enum OptionsScope { 
    FILE = 0,
    PACKAGE = 1,
  }
}

export class MessageOptions extends jspb.Message {
  getExtendsList(): Array<string>;
  setExtendsList(value: Array<string>): void;
  clearExtendsList(): void;
  addExtends(value: string, index?: number): void;

  getCompanionExtendsList(): Array<string>;
  setCompanionExtendsList(value: Array<string>): void;
  clearCompanionExtendsList(): void;
  addCompanionExtends(value: string, index?: number): void;

  getAnnotationsList(): Array<string>;
  setAnnotationsList(value: Array<string>): void;
  clearAnnotationsList(): void;
  addAnnotations(value: string, index?: number): void;

  getType(): string;
  setType(value: string): void;

  getCompanionAnnotationsList(): Array<string>;
  setCompanionAnnotationsList(value: Array<string>): void;
  clearCompanionAnnotationsList(): void;
  addCompanionAnnotations(value: string, index?: number): void;

  getSealedOneofExtendsList(): Array<string>;
  setSealedOneofExtendsList(value: Array<string>): void;
  clearSealedOneofExtendsList(): void;
  addSealedOneofExtends(value: string, index?: number): void;

  getNoBox(): boolean;
  setNoBox(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageOptions.AsObject;
  static toObject(includeInstance: boolean, msg: MessageOptions): MessageOptions.AsObject;
  static serializeBinaryToWriter(message: MessageOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageOptions;
  static deserializeBinaryFromReader(message: MessageOptions, reader: jspb.BinaryReader): MessageOptions;
}

export namespace MessageOptions {
  export type AsObject = {
    extendsList: Array<string>,
    companionExtendsList: Array<string>,
    annotationsList: Array<string>,
    type: string,
    companionAnnotationsList: Array<string>,
    sealedOneofExtendsList: Array<string>,
    noBox: boolean,
  }
}

export class FieldOptions extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getScalaName(): string;
  setScalaName(value: string): void;

  getCollectionType(): string;
  setCollectionType(value: string): void;

  getKeyType(): string;
  setKeyType(value: string): void;

  getValueType(): string;
  setValueType(value: string): void;

  getAnnotationsList(): Array<string>;
  setAnnotationsList(value: Array<string>): void;
  clearAnnotationsList(): void;
  addAnnotations(value: string, index?: number): void;

  getMapType(): string;
  setMapType(value: string): void;

  getNoBox(): boolean;
  setNoBox(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldOptions.AsObject;
  static toObject(includeInstance: boolean, msg: FieldOptions): FieldOptions.AsObject;
  static serializeBinaryToWriter(message: FieldOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldOptions;
  static deserializeBinaryFromReader(message: FieldOptions, reader: jspb.BinaryReader): FieldOptions;
}

export namespace FieldOptions {
  export type AsObject = {
    type: string,
    scalaName: string,
    collectionType: string,
    keyType: string,
    valueType: string,
    annotationsList: Array<string>,
    mapType: string,
    noBox: boolean,
  }
}

export class EnumOptions extends jspb.Message {
  getExtendsList(): Array<string>;
  setExtendsList(value: Array<string>): void;
  clearExtendsList(): void;
  addExtends(value: string, index?: number): void;

  getCompanionExtendsList(): Array<string>;
  setCompanionExtendsList(value: Array<string>): void;
  clearCompanionExtendsList(): void;
  addCompanionExtends(value: string, index?: number): void;

  getType(): string;
  setType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnumOptions.AsObject;
  static toObject(includeInstance: boolean, msg: EnumOptions): EnumOptions.AsObject;
  static serializeBinaryToWriter(message: EnumOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnumOptions;
  static deserializeBinaryFromReader(message: EnumOptions, reader: jspb.BinaryReader): EnumOptions;
}

export namespace EnumOptions {
  export type AsObject = {
    extendsList: Array<string>,
    companionExtendsList: Array<string>,
    type: string,
  }
}

export class EnumValueOptions extends jspb.Message {
  getExtendsList(): Array<string>;
  setExtendsList(value: Array<string>): void;
  clearExtendsList(): void;
  addExtends(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnumValueOptions.AsObject;
  static toObject(includeInstance: boolean, msg: EnumValueOptions): EnumValueOptions.AsObject;
  static serializeBinaryToWriter(message: EnumValueOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnumValueOptions;
  static deserializeBinaryFromReader(message: EnumValueOptions, reader: jspb.BinaryReader): EnumValueOptions;
}

export namespace EnumValueOptions {
  export type AsObject = {
    extendsList: Array<string>,
  }
}

export class OneofOptions extends jspb.Message {
  getExtendsList(): Array<string>;
  setExtendsList(value: Array<string>): void;
  clearExtendsList(): void;
  addExtends(value: string, index?: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OneofOptions.AsObject;
  static toObject(includeInstance: boolean, msg: OneofOptions): OneofOptions.AsObject;
  static serializeBinaryToWriter(message: OneofOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OneofOptions;
  static deserializeBinaryFromReader(message: OneofOptions, reader: jspb.BinaryReader): OneofOptions;
}

export namespace OneofOptions {
  export type AsObject = {
    extendsList: Array<string>,
  }
}

