import { NextResponse } from "next/server";
import { Resend } from "resend";
import { firm } from "@/app/components/content/firm";
import { siteConfig } from "@/app/components/content/site";

const resend = new Resend(process.env.RESEND_API_KEY);

const serviceLabels: Record<string, string> = {
  "tax-advisory": "Income Tax",
  "audit-assurance": "Audit & Assurance",
  "gst-compliance": "GST Compliance",
  "msme-consulting": "Business Setup",
  "roc-compliance": "Corporate Compliance",
  "nri-taxation": "NRI & FEMA",
  other: "Other / General Enquiry",
};

function buildEmailHtml(data: {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message: string;
}) {
  const serviceLabel = serviceLabels[data.service] ?? data.service;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#f7f5f0;font-family:-apple-system,Segoe UI,system-ui,sans-serif">
  <table align="center" width="100%" style="max-width:580px;margin:0 auto;padding:32px 16px">
    <tr>
      <td>
        <table width="100%" style="background-color:#0b1e3d;border-radius:4px 4px 0 0;overflow:hidden">
          <tr>
            <td style="padding:32px 32px 24px">
              <p style="margin:0 0 4px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.15em;color:#6d8a9e">New Enquiry</p>
              <h1 style="margin:0;font-family:Georgia,serif;font-size:26px;font-weight:600;color:#ffffff">${siteConfig.name}</h1>
              <p style="margin:4px 0 0;font-size:13px;color:rgba(255,255,255,0.55)">From ${data.name} via <a href="${siteConfig.url}" style="color:#8ba3b5;text-decoration:none">$</a></p>
            </td>
          </tr>
        </table>

        <table width="100%" style="background-color:#ffffff;border:1px solid rgba(11,30,61,0.08)">
          <tr>
            <td style="padding:28px 32px 20px">
              <p style="margin:0 0 20px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#6d8a9e">Customer Details</p>

              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse">
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid rgba(11,30,61,0.06)">
                    <span style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:rgba(11,30,61,0.45)">Name</span>
                    <p style="margin:2px 0 0;font-size:15px;font-weight:600;color:#0b1e3d">${data.name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid rgba(11,30,61,0.06)">
                    <span style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:rgba(11,30,61,0.45)">Email</span>
                    <p style="margin:2px 0 0;font-size:15px;color:#0b1e3d"><a href="mailto:${data.email}" style="color:#0b1e3d;text-decoration:none">${data.email}</a></p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid rgba(11,30,61,0.06)">
                    <span style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:rgba(11,30,61,0.45)">Phone</span>
                    <p style="margin:2px 0 0;font-size:15px;color:#0b1e3d"><a href="tel:${data.phone}" style="color:#0b1e3d;text-decoration:none">${data.phone}</a></p>
                  </td>
                </tr>
                ${data.company ? `<tr>
                  <td style="padding:10px 0;border-bottom:1px solid rgba(11,30,61,0.06)">
                    <span style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:rgba(11,30,61,0.45)">Company</span>
                    <p style="margin:2px 0 0;font-size:15px;color:#0b1e3d">${data.company}</p>
                  </td>
                </tr>` : ""}
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid rgba(11,30,61,0.06)">
                    <span style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:rgba(11,30,61,0.45)">Service</span>
                    <p style="margin:2px 0 0;font-size:15px;font-weight:600;color:#0b1e3d">${serviceLabel}</p>
                  </td>
                </tr>
              </table>

              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:20px;background-color:#f7f5f0;border-radius:2px">
                <tr>
                  <td style="padding:20px 24px">
                    <span style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:rgba(11,30,61,0.45)">Message</span>
                    <p style="margin:8px 0 0;font-size:14px;line-height:1.7;color:#0b1e3d">${data.message}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <table width="100%" style="background-color:#0b1e3d;border-radius:0 0 4px 4px;overflow:hidden">
          <tr>
            <td style="padding:20px 32px">
              <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.4)">&copy; ${new Date().getFullYear()} ${siteConfig.name}. Sent from <a href="${siteConfig.url}" style="color:#8ba3b5;text-decoration:none">${siteConfig.url}</a></p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const html = buildEmailHtml({ name, email, phone, company, service, message });

    const { data, error } = await resend.emails.send({
      from: `${siteConfig.name} <${process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"}>`,
      to: [process.env.CONTACT_EMAIL || firm.contact.gmail],
      subject: `New Enquiry from ${name} — ${siteConfig.name}`,
      html,
      replyTo: email,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
