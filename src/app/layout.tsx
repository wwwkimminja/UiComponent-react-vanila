import type { Metadata } from 'next'
import './globals.scss'

export const metadata: Metadata = {
  title: 'UI Component ',
  description: 'Make UI component with Vanilla / React',
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
export default Layout
