import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const response = await fetch(`https://api.beehiiv.com/v2/publications/pub_7fd444c9-029e-48b5-b1a0-693b3560a7bb/subscriptions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 5IYjt1rdTHCYuInFOggGMEuu17I9mvhINmkyLCIYFtwB6rAZEYfWStG7ORLZVt0s`,
      },
      body: JSON.stringify({
        email: email,
        reactivate_existing: true,
        send_welcome_email: true,
        utm_source: 'Website Hero Section',
      }),
    });

    const data = await response.json();
    
    // 👉 Yeh line terminal mein exact error print kar degi
    console.log("Beehiiv API Response:", response.status, data);

    if (!response.ok) {
      return NextResponse.json({ error: data.message || data.error || 'Subscription failed' }, { status: response.status });
    }

    return NextResponse.json({ success: true, message: 'Subscribed successfully!' });
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
