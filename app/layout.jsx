import './globals.css';

export const metadata = {
  title: 'AI Hustlerss Pro',
  description: 'The high-tempo accelerator for builders and operators.',
  icons: {
    icon: '/logo.jpeg',
    shortcut: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
