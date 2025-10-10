
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: '$CHASE - Powering Prediction with Solana Speed.',
  description: 'Powering Prediction with Solana Speed.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <video autoPlay loop muted playsInline className="video-background">
          <source src="https://res.cloudinary.com/ds0ifdrhk/video/upload/v1759353247/VID_20251002_024311_891_jbrovo.mov" type="video/mp4" />
        </video>
        <div className="relative z-10">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}

    