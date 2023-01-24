import axios from 'axios'
import { logger } from '../logger'

const instance = axios.create({
  // TODO: SSR のときは localhost, CSR のときは domain にする
  baseURL: 'http://localhost:3000/api',
  timeout: 5000,
})

instance.defaults.withCredentials = true

instance.interceptors.request.use(
  (context) => {
    const m = context.method?.toUpperCase() ?? ''
    logger.debug({ headers: context.headers, body: context.data }, `${m.padStart(5)} ==> | ${context.baseURL}${context.url}`)
    return context
  },
  (error) => {
    logger.debug(`${(error?.status ?? '---').padStart(5)} ==X`)
    if (axios.isAxiosError(error)) {
      const logPayload = {
        status: error.status,
        message: error.message,
        stack: error.stack,
      }
      logger.error(logPayload)
    } else if (error instanceof Error) {
      const { stack } = error
      logger.error(stack)
    } else {
      logger.error(error, 'unkown error')
    }
    return Promise.reject(error)
  }
)
instance.interceptors.response.use(
  (context) => {
    const s = context.status.toString()
    logger.debug({ headers: context.headers, body: context.data }, `${s.padStart(5)} <== | ${context.config.baseURL}${context.config.url}`)
    return context
  },
  (error) => {
    const c = error?.config
    // ECONBADERR などのときは status が null
    logger.debug(`${(error?.status ?? '---').padStart(5)} X== | ${c?.url}`)
    if (axios.isAxiosError(error)) {
      const logPayload = {
        status: error.status,
        message: error.message,
        response: {
          headers: error.response?.headers,
        },
        stack: error.stack,
      }
      logger.error(logPayload)
    } else if (error instanceof Error) {
      const { stack } = error
      logger.error(stack)
    } else {
      logger.error(error, 'unkown error')
    }
    return Promise.reject(error)
  }
)

export default instance
