enum EnvTypes {
  prod = 'production',
  dev = 'development'
}

const isDev = process.env.NODE_ENV === EnvTypes.dev
const isProd = process.env.NODE_ENV === EnvTypes.prod

const prodUrl = 'https://panda-ipsum.now.sh/'
const devUrl = 'http://localhost:3000/'

export const env: Env = {
  isDev,
  isProd,
  hostUrl: isDev ? devUrl : prodUrl
}

export interface Env {
  isDev: boolean;
  isProd: boolean;
  hostUrl: string;
}
