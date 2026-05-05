import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ChurnSurvey — Auto-send exit surveys when users cancel',
  description: 'Automatically detect subscription cancellations and send personalized exit surveys. Understand why users churn with an analytics dashboard.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="04ba57b4-be72-44ee-a7e3-4d554be4c538"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
