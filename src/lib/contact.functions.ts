import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const ContactSchema = z.object({
  full_name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  programme: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(2000),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => ContactSchema.parse(data))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      full_name: data.full_name,
      email: data.email,
      phone: data.phone || null,
      programme: data.programme || null,
      message: data.message,
    });
    if (error) {
      console.error("contact insert failed", error);
      return { ok: false as const, error: "Could not save your message. Please try again." };
    }
    return { ok: true as const };
  });