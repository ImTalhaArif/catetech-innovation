// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const name = data.get('name')?.toString() ?? '';
    const email = data.get('email')?.toString() ?? '';
    const message = data.get('message')?.toString() ?? '';

    // For now: simple echo + console log on server
    console.log('Contact form submission:', { name, email, message });

    // TODO: Add real integration (SendGrid, SMTP, or store in DB)
    return NextResponse.json({ success: true, name, email, message });
  } catch (err) {
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
