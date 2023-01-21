import getConfig from "next/config"
import { logger } from "../logger"

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig()

function assertString(key: string, payload: unknown): asserts payload is string {
  if (typeof payload !== "string") {
    throw new Error(`環境変数: ${key} を設定してください`)
  }
}

function assertNumber(key: string, payload: unknown): asserts payload is number {
  if (typeof payload !== "string") {
    throw new Error(`環境変数: ${key} を設定してください`)
  }
  const maybeNumber = parseInt(payload, 10)
  if (isNaN(maybeNumber)) {
    throw new Error(`環境変数: ${key} は数値を期待しています: actual: ${maybeNumber}`)
  }
}

/**
 * サーバーサイド runtime で利用する環境変数 をバリデーションしつつ取得する関数
 * @param key {String} 環境変数名
 * @param defaultValue {String?} 環境変数が未定義のときの初期値
 * @returns {String}
 * @example 設定が必須かつデフォルト設定がないケース
 *
 * const val = getServerRuntimeConfigAsString("someThingEndpoint")
 * // もし，next.config.js で未設定の場合 エラーが throw される
 *
 * @example 設定が任意で，未設定の場合デフォルト設定を使うケース
 *
 * const val = getServerRuntimeConfigAsString("someThingEndpoint", "http://localhost:8080")
 * // もし，next.config.js で未設定の場合 http://localhost:8080 が入る
 */
export const getServerRuntimeConfigAsString = (key: keyof typeof serverRuntimeConfig, defaultValue?: string): string => {
  const maybeEnv = serverRuntimeConfig[key] ?? defaultValue
  logger.debug({ message: `load env: ${key}=${maybeEnv}` })
  assertString(key, maybeEnv)
  return maybeEnv
}

/**
 * サーバーサイド runtime で利用する環境変数 をバリデーションしつつ取得する関数
 * @description redis のポート番号 や BFF のポート番号 などで使う想定
 * @param key {String} 環境変数名
 * @param defaultValue {String?} 環境変数が未定義のときの初期値
 * @returns {Number}
 */
export const getServerRuntimeConfigAsNumber = (key: keyof typeof serverRuntimeConfig, defaultValue?: string): number => {
  const maybeEnv = serverRuntimeConfig[key] ?? defaultValue
  logger.debug({ message: `load env: ${key}=${maybeEnv}` })
  assertNumber(key, maybeEnv)
  return maybeEnv
}

export const getPublicRuntimeConfigAsString = (key: keyof typeof publicRuntimeConfig, defaultValue?: string): string => {
  const maybeEnv = publicRuntimeConfig[key] ?? defaultValue
  logger.debug({ message: `load env: ${key}=${maybeEnv}` })
  assertString(key, maybeEnv)
  return maybeEnv
}

export const getPublicRuntimeConfigAsNumber = (key: keyof typeof publicRuntimeConfig, defaultValue?: string): number => {
  const maybeEnv = publicRuntimeConfig[key] ?? defaultValue
  logger.debug({ message: `load env: ${key}=${maybeEnv}` })
  assertNumber(key, maybeEnv)
  return maybeEnv
}
