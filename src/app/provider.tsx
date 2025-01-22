"use client"

import { Provider } from "react-redux"

import { ReactNode, useRef } from "react"
import {AppStore,makeStore } from "./redux/Store"


export const Providers = ({children}:{children:ReactNode}) => {
  const storeRef =useRef<AppStore>();
  if(!storeRef.current){
    storeRef.current= makeStore()
  }
  return (
    <Provider store={storeRef.current}>
      {children}
    </Provider>
  )
}

