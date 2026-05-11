import './globals.css'

export const metadata = {
  title: 'FloraVision – Premium Plant Shop',
  description: 'Discover rare and beautiful plants for your home. Earth\'s Exhale — purity and vitality of nature.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
