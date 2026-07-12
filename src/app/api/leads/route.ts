import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const leadSchema = z.object({
  source: z.enum(["contact", "financing"]),
  firstName: z.string().min(1).max(100),
  lastName: z.string().min(1).max(100),
  email: z.string().email(),
  phone: z.string().max(40).optional().nullable(),
  department: z.string().max(60).optional().nullable(),
  subject: z.string().max(200).optional().nullable(),
  message: z.string().min(1).max(4000),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = leadSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  const { source, firstName, lastName, email, phone, department, subject, message } = parsed.data;
  const lead = await prisma.lead.create({
    data: { source, firstName, lastName, email, phone, department, subject, message },
  });

  return NextResponse.json({ id: lead.id }, { status: 201 });
}
