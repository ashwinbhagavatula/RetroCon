import { Inter, Roboto_Slab, Press_Start_2P} from 'next/font/google'
import './globals.css'

const normalFont = Inter({ subsets: ['latin'] , variable: '--font-inter',})
const headingFont = Roboto_Slab({weight: '400', subsets: ['latin'],variable: '--font-roboto-slab'})


export const metadata = {
  title: 'RetroCon',
  description: 'An e-commerse store to buy Retro consoles',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        {children}
        
      </body>
    </html>
  )
}
