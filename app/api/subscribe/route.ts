import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const apiKey = process.env.MAILCHIMP_API_KEY;
    const listId = process.env.MAILCHIMP_LIST_ID;
    const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;

    if (!apiKey || !listId || !serverPrefix) {
      console.error("Missing Mailchimp environment variables");
      return NextResponse.json({ error: "Server not configured" }, { status: 500 });
    }

    const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}/members`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`,
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
      }),
    });

    const data = await response.json();

    // Mailchimp returns 400 if email already exists — treat as success
    if (!response.ok) {
      if (data.title === "Member Exists") {
        return NextResponse.json({ success: true, alreadySubscribed: true });
      }
      console.error("Mailchimp error:", data);
      return NextResponse.json({ error: data.detail || "Subscription failed" }, { status: response.status });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
