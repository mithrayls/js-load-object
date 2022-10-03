import { andThen, cond, pipe, over, lensProp, assoc, filter, collectBy, map, mapObjIndexed, view, replace } from "ramda"
import parsePath from "parse-path"
import undici from "undici"
import { readFile as readLocalDocument, readdir } from "node:fs/promises"
import { statSync } from "fs"
import * as path from "path"
import { parsers } from "./parsers.js"
import { tap } from "ramda"
import { Buffer } from "node:buffer"
import { getFile } from "./getFile.js"
import { getFormat } from "./getFile.js"

//
// A Parser takes content in one format, returns in another
//

export const parseYaml = parsers["yaml"]
export const parseJson = parsers["json"]
export const parseToml = parsers["toml"]
export const parseHtml = parsers["html"]
export const parseXml  = parsers["xml"]
export const parseMd = parsers["md"]
export const parseCbor = parsers["cbor"]
export const parseDhall = parsers["dhall"]

//
// A Loader takes a URI, downloads it, parses it, returns it
//

const loaders = mapObjIndexed
  ( (parser,parserName,o) => pipe(getFile,andThen(parser))
  , parsers 
  )

export const loadYaml = loaders["yaml"]
export const loadJson = loaders["json"]
export const loadToml = loaders["toml"]
export const loadHtml = loaders["html"]
export const loadXml  = loaders["xml"]
export const loadMd = loaders["md"]
export const loadCbor = loaders["cbor"]
export const loadDhall = loaders["dhall"]

export const load = x => loaders[getFormat(x)](x)
