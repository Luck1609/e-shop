/// <reference types="vite/client" />

type Children<T = {}> = { children: ReactNode } & T

type HttpMethods = 'get' | 'post' | 'put' | 'patch' | 'delete'


type Drawer = {
  title: string
  description: string
  component: string
}