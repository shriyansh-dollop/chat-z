import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ChatZ - Secure Real-Time Chat with E2EE',
  description: 'Ultra-fast messaging powered by Socket.IO with military-grade End-to-End Encryption',
  keywords: ['chat', 'encryption', 'e2ee', 'socket.io', 'real-time', 'secure'],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-dark-bg">
        {children}
      </body>
    </html>
  );
}
