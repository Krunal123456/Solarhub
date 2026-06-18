import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder_key");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, city, monthlyBill, message } = body;

    // Send email to admin
    const { data, error } = await resend.emails.send({
      from: "HighTech Solar System <onboarding@resend.dev>",
      to: ["info@nextgensolar.com"], // Replace with actual admin email
      subject: `New Solar Inquiry from ${name}`,
      html: `
        <h2>New Solar Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Monthly Bill:</strong> ₹${monthlyBill}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      // Fallback for development without API key
      if (process.env.NODE_ENV === "development") {
        console.log("Dev mode: Simulating successful email send.", body);
        return NextResponse.json({ success: true, message: "Simulated send" });
      }
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    // Auto-reply to customer if email is provided
    if (email) {
      await resend.emails.send({
      from: "HighTech Solar System <onboarding@resend.dev>",
      to: email,
      subject: "We received your inquiry - HighTech Solar System",
      html: `
        <h2>Thank you for contacting HighTech Solar System!</h2>
        <p>Hi ${name},</p>
        <p>We have received your inquiry and our solar experts will get back to you shortly.</p>
        <p>Best regards,<br/>The HighTech Solar System Team</p>
      `
    });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: unknown) {
    console.error("Server Error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
