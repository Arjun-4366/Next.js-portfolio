"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem } from "./form";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Button } from "./button";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "Must have 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  text: z.string().min(5, { message: "Content should be at least 5 characters" }),
});

type FormSchema = z.infer<typeof formSchema>;

function ContactForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: { firstName: "", email: "", text: "" },
  });

  const { toast } = useToast();

  const onSubmit = async (inputs: FormSchema) => {
    setLoading(true);
    await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(inputs),
      headers: { "Content-Type": "application/json" },
    })
      .then(async (res) => {
        const data = await res.json();
        if (data?.success) {
          toast({ title: "Message sent successfully", description: "Thank you for contacting me." });
          form.reset();
        }
      })
      .catch((err) => {
        console.log(err.message)
        toast({ title: "Error Sending Message", description: "There was an error. Try again later." });
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="px-3">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid sm:grid-cols-2 gap-4 mt-10">
          <FormField
            control={form.control}
            name="firstName"
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

          <Button variant="outline" type="submit" size="sm" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default ContactForm;
