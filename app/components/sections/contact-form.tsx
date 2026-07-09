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
import { CheckCircle, Loader2, AlertTriangle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
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
  { value: "tax-advisory", label: "Income Tax" },
  { value: "audit-assurance", label: "Audit & Assurance" },
  { value: "gst-compliance", label: "GST Compliance" },
  { value: "msme-consulting", label: "Business Setup" },
  { value: "roc-compliance", label: "Corporate Compliance" },
  { value: "nri-taxation", label: "NRI & FEMA" },
  { value: "other", label: "Other / General Enquiry" },
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  async function onSubmit(values: FormValues) {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center  bg-gold/10">
          <CheckCircle className="h-10 w-10 text-gold" />
        </div>
        <h3 className="mb-3 font-headline text-[26px] font-semibold text-navy">
          Thank You
        </h3>
        <p className="mb-8 font-body text-[15px] text-navy/60">
          Your message has been received. We'll review your requirements and
          reach out within one business day.
        </p>
        <Button variant="primary" onClick={() => setSubmitted(false)}>
          Submit Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
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
                <FormLabel>Phone Number</FormLabel>
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
                  className="flex h-12 w-full rounded-sm border border-navy/12 bg-white px-4 py-2 font-body text-[14px] text-navy focus-visible:border-gold focus-visible:outline-none"
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
                  className="min-h-[140px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {error && (
          <div className="flex items-start gap-3 rounded-sm border border-red-200 bg-red-50 p-4">
            <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-600" />
            <p className="font-body text-[13px] text-red-700">{error}</p>
          </div>
        )}

        <Button type="submit" variant="primary" size="lg" disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Submit Enquiry"
          )}
        </Button>
      </form>
    </Form>
  );
}
