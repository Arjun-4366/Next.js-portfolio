"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import React from "react";



interface ToastType {
  id:string,
  title?:string,
  description?:string,
  action?:React.ReactElement;
  [Key:string]:any
}

const Toaster:React.FC = ()=> {
  const { toasts } = useToast()

  return (
    (<ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }:ToastType) {
        return (
          (<Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action }
            <ToastClose altText="" onClick={()=>props.dismiss && props.dismiss()}/>
          </Toast>)
        );
      })}
      <ToastViewport />
    </ToastProvider>)
  );
} 

export default Toaster