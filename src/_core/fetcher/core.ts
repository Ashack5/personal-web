const errorStatusByCode = {
  400: 'bad request',
  401: 'unauthalized',
  403: 'forbidden',
  404: 'not found',
  405: 'method not allowed',
  408: 'request timeout',
} as const

export type ErrorStatus = 'bad request' | 'unauthalized' | 'forbidden' | 'not found' | 'method not allowed' | 'request timeout'

const isKnownCode = (code: number | string): code is keyof typeof errorStatusByCode => {
  if (Object.keys(errorStatusByCode).includes(code.toString())) {
    return true
  }
  return false
}

export const getStatusFromCode = (code: number | string) => {
  if (isKnownCode(code)) return errorStatusByCode[code]
  return errorStatusByCode[400]
}

export type ErrorResponse = {
  status: ErrorStatus
  message: string
}
