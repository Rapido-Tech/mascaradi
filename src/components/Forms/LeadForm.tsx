"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare, Loader2 } from "lucide-react";

type Department = { icon: React.ReactNode; name: string; value: string };

interface LeadFormProps {
  source: "contact" | "financing";
  departments?: Department[];
  submitLabel?: string;
}

export function LeadForm({ source, departments, submitLabel = "Send Message" }: LeadFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [department, setDepartment] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      source,
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      department: department || undefined,
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");

      toast({
        title: "Message sent",
        description: "Thanks for reaching out — our team will get back to you within 24 hours.",
      });
      form.reset();
      setDepartment("");
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again, or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor={`${source}-firstName`}>First Name</Label>
          <Input id={`${source}-firstName`} name="firstName" placeholder="John" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${source}-lastName`}>Last Name</Label>
          <Input id={`${source}-lastName`} name="lastName" placeholder="Doe" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${source}-email`}>Email</Label>
        <Input id={`${source}-email`} name="email" type="email" placeholder="john@example.com" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${source}-phone`}>Phone Number</Label>
        <Input id={`${source}-phone`} name="phone" type="tel" placeholder="+254 700 123 456" />
      </div>

      {departments && (
        <div className="space-y-2">
          <Label htmlFor={`${source}-department`}>Department</Label>
          <Select value={department} onValueChange={setDepartment}>
            <SelectTrigger id={`${source}-department`}>
              <SelectValue placeholder="Select department" />
            </SelectTrigger>
            <SelectContent>
              {departments.map((dept) => (
                <SelectItem key={dept.value} value={dept.value}>
                  <div className="flex items-center gap-2">
                    {dept.icon}
                    {dept.name}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor={`${source}-subject`}>Subject</Label>
        <Input id={`${source}-subject`} name="subject" placeholder="How can we help you?" />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`${source}-message`}>Message</Label>
        <Textarea
          id={`${source}-message`}
          name="message"
          placeholder="Please describe your inquiry in detail..."
          className="min-h-[120px]"
          required
        />
      </div>

      <Button type="submit" variant="premium" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <Loader2 className="h-5 w-5 mr-2 animate-spin" />
        ) : (
          <MessageSquare className="h-5 w-5 mr-2" />
        )}
        {submitLabel}
      </Button>
    </form>
  );
}
