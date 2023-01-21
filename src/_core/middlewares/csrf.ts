import { nextCsrf } from 'next-csrf'

const { csrf, setup } = nextCsrf({
  tokenKey: 'csrf-token',
  secret: process.env.CSRF_SECRET || 'default-secret',
  cookieOptions: {
    httpOnly: true,
    sameSite: 'strict',
    path: '/',
  },
})

export { csrf, setup }
