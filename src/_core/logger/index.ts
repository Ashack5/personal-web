import pino from 'pino'
import { format } from 'date-fns'
import { isBrowser } from '@/_core/utils/runtime-context'

const formatLog = (time: number, msg: string, level: number): string => `[${format(time, 'HH:mm')}] <${level}> ${msg ?? ''} %o`

export const logger = isBrowser
  ? process.env.NODE_ENV === 'production'
    ? pino({ level: 'error', browser: { serialize: true } })
    : pino({
        level: 'debug',
        browser: {
          write: {
            // @ts-expect-error
            info: ({ time, msg, level, ...o }) => console.info(formatLog(time, msg, level), o),
            // @ts-expect-error
            error: ({ time, msg, level, ...o }) => console.error(formatLog(time, msg, level), o),
            // @ts-expect-error
            warn: ({ time, msg, level, ...o }) => console.warn(formatLog(time, msg, level), o),
            // @ts-expect-error
            debug: ({ time, msg, level, ...o }) => console.debug(formatLog(time, msg, level), o),
          },
        },
      })
  : process.env.NODE_ENV === 'production'
  ? pino({ level: 'info' })
  : pino({
      level: 'debug',
      transport: {
        target: 'pino-pretty',
        options: {
          colorize: true,
        },
      },
    })
