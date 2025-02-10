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


type CartItem = {
  id: string
  name: string
  price: number
  image: string
  sku_id: string
  quantity: number
  isChecked: boolean
  discount: number
  product_id: string
}

type TableIcon = ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>


export type ShadcnAccordion = { title: ReactNode, content: ReactNode }


export type Image = {
  name: string
  type: string
  size: string
  url: string
}