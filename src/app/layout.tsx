
import type { Metadata } from 'next'
import './globals.scss'
import Gnb from './gnb'

export const metadata: Metadata = {
  title: 'UI Component ',
  description: 'Make UI component with Vanilla / React',
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Gnb/>
        <main>{children}</main>
      </body>
    </html>
  )
}
export default Layout
