import axios from '@/_core/fetcher/external'

export const key = () => ['external-api', 'examples', 'ip'].join('/')

export const fetcher = async () => {
  const resp = await axios.get('https://ifconfig.me/all.json')
  return resp.data
}
