"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem } from "./form";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Button } from "./button";
// import {useForm}

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Must have 2 characters",
  }),
  email: z.string().email({
    message: "Invalid email address",
  }),
  text: z.string().min(5, {
    message: "Content should be atleast 5 characters",
  }),
});

// type FormSchema = z.infer<typeof formSchema>;
type Props = {};

function ContactForm({}: Props) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      text: "",
    },
  });
  const { toast } = useToast();
  const onSubmit = () => {
    toast({
      title: "Message sent succesfully",
      description:
        "Thank you for contacting me I'll get back to you as soon as possible",
    });
  };
  return (
    <div className="px-3">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid sm:grid-cols-2 items-center gap-4 mt-10">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="sm:col-span-2">
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="Type your message here" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <Button variant={"outline"} type="submit" size="sm">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default ContactForm;
