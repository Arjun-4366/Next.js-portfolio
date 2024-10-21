"use client";
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { Control, Controller, FormProvider, useFormContext } from "react-hook-form";

import { cn } from "@/lib/utils"

interface FormFieldProps {
  control:Control<any>,
  name:string,
  render:({field,fieldState,formState}:{
    field:any,
    fieldState:any,
    formState:any
  })=>React.ReactElement
  
}




const Form = FormProvider

const FormFieldContext = React.createContext<({name?:string})>({})  

const FormField:React.FC<FormFieldProps> =(props)=> {
  return (
    (<FormFieldContext.Provider value={{ name: props.name }}>
      <Controller name={props.name} render={({field,fieldState,formState})=>(
        props.render({field,fieldState,formState})
      )}
      />
    </FormFieldContext.Provider>)
  );
}


const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const fieldState = getFieldState(fieldContext.name as string, formState)


  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

const FormItemContext = React.createContext<({id?:string})>({})
interface FormItemProps extends React.HTMLAttributes<HTMLDivElement>{}
const FormItem = React.forwardRef<HTMLDivElement,FormItemProps>(({ className, ...props }, ref) => {
  const id = React.useId()

  return (
    (<FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>)
  );
})
FormItem.displayName = "FormItem"
interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>{}


const FormLabel = React.forwardRef<HTMLLabelElement,FormLabelProps>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return (
    (<FormLabel
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props} />)
  );
})
FormLabel.displayName = "FormLabel"

interface FormControlProps extends React.HTMLAttributes<HTMLDivElement>{}

const FormControl = React.forwardRef<HTMLDivElement,FormControlProps>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    (<Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props} />)
  );
})
FormControl.displayName = "FormControl"

interface FormDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement>{}
const FormDescription = React.forwardRef<HTMLParagraphElement,FormDescriptionProps>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()

  return (
    (<p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props} />)
  );
})
FormDescription.displayName = "FormDescription"


interface FormMessageProps extends React.HTMLAttributes<HTMLParagraphElement>{
  children?:React.ReactNode 
}


const FormMessage = React.forwardRef<HTMLParagraphElement,FormMessageProps>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message) : children

  if (!body) {
    return null
  }

  return (
    (<p
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}>
      {body}
    </p>)
  );
})
FormMessage.displayName = "FormMessage"

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}
