"use client";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useModalStore } from "@/hooks/use-modal-store";
import { useLang } from "@/providers/lang-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must contain at least 3 characters.",
  }),
  email: z.string().email("Please enter a valid email."),
  message: z.string().min(10, {
    message: "Please write something more descriptive.",
  }),
  social: z.string().url().optional().or(z.literal("")),
});

export function ContactForm() {
  const { lang } = useLang();
  const storeModal = useModalStore();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      social: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log("Form values to submit:", values);
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      // console.log("Response from API:", response);

      form.reset();

      if (response.status === 200) {
        storeModal.onOpen({
          title: "Thankyou!",
          description:
            "Your message has been received! I appreciate your contact and will get back to you shortly.",
          icon: Icons.successAnimated,
        });
      }
    } catch (err) {
      // console.log("Err!", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 min-w-full"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{lang === "th" ? "ชื่อ" : "Name"}</FormLabel>
              <FormControl>
                <Input
                  placeholder={
                    lang === "th" ? "ใส่ชื่อของคุณ" : "Enter your name"
                  }
                  {...field}
                  disabled={loading}
                />
              </FormControl>
              <FormDescription>
                {lang === "th"
                  ? "กรุณากรอก ชื่อ-นามสกุล ของคุณ"
                  : "Please enter your full name."}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{lang === "th" ? "อีเมล" : "Email"}</FormLabel>
              <FormControl>
                <Input
                  placeholder={
                    lang === "th" ? "ใส่อีเมลของคุณ" : "Enter your email"
                  }
                  {...field}
                  disabled={loading}
                />
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
              <FormLabel>{lang === "th" ? "ข้อความ" : "Message"}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={
                    lang === "th" ? "ป้อนข้อความของคุณ" : "Enter your message"
                  }
                  {...field}
                  disabled={loading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="social"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {lang === "th" ? "โซเชียล (ไม่บังคับ)" : "Social (optional)"}
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={
                    lang === "th"
                      ? "ลิงค์สำหรับบัญชีโซเชียล"
                      : "Link for social account"
                  }
                  {...field}
                  disabled={loading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={loading}>
          {loading
            ? lang === "th"
              ? "กำลังส่ง..."
              : "Submitting..."
            : lang === "th"
              ? "ส่ง"
              : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
