"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { CheckCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().optional(),
  service: z.enum([
    "tax-advisory",
    "audit-assurance",
    "gst-compliance",
    "msme-consulting",
    "roc-compliance",
    "nri-taxation",
    "other",
  ]),
  message: z
    .string()
    .min(10, "Please provide at least 10 characters of detail")
    .max(2000),
});

type FormValues = z.infer<typeof formSchema>;

const serviceOptions = [
  { value: "tax-advisory", label: "Tax Advisory" },
  { value: "audit-assurance", label: "Audit & Assurance" },
  { value: "gst-compliance", label: "GST Compliance" },
  { value: "msme-consulting", label: "MSME Business Consulting" },
  { value: "roc-compliance", label: "ROC & Corporate Compliance" },
  { value: "nri-taxation", label: "NRI Taxation & FEMA Advisory" },
  { value: "other", label: "Other / General Enquiry" },
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "tax-advisory",
      message: "",
    },
  });

  function onSubmit(_values: FormValues) {
    // TODO: wire submission to Vercel serverless route or Resend/Formspree
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-fixed/30">
          <CheckCircle className="h-10 w-10 text-primary" />
        </div>
        <h1 className="mb-stack-md font-headline text-display-lg-mobile text-primary md:text-display-lg">
          Thank You
        </h1>
        <p className="mb-stack-lg font-body text-body-lg text-on-surface-variant">
          Your consultation request has been received. A senior partner will
          review your requirements and reach out within one business day.
        </p>
        <Button variant="primary" onClick={() => setSubmitted(false)}>
          Submit Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address *</FormLabel>
                <FormControl>
                  <Input placeholder="you@company.com" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number *</FormLabel>
                <FormControl>
                  <Input placeholder="+91 98765 43210" type="tel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company / Firm</FormLabel>
                <FormControl>
                  <Input placeholder="Your company name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service Required *</FormLabel>
              <FormControl>
                <select
                  className="flex h-10 w-full border-b border-outline-variant bg-transparent px-1 py-2 font-body text-body-md text-on-surface focus-visible:border-primary focus-visible:outline-none"
                  {...field}
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message *</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe your requirements in brief..."
                  className="min-h-[160px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" variant="primary" size="lg">
          Submit Enquiry
        </Button>
      </form>
    </Form>
  );
}
