/// <reference types="vite/client" />

import { ReactNode } from "react"

type Children<T = {}> = { children: ReactNode } & T

type HttpMethods = 'get' | 'post' | 'put' | 'patch' | 'delete'


type Drawer = {
  title: string
  description: string
  component: string
}

type SelectOption = { label: ReactNode, value: string }