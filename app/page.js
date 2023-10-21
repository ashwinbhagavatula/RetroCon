import {Press_Start_2P,Inter} from 'next/font/google'
const press = Press_Start_2P({weight: '400', subsets: ['latin'], variable: '--font-press'})
const normalFont = Inter({ subsets: ['latin'] , variable: '--font-inter',})
export default function Home() {

  
  return (
    <main className="">
      Hello
    </main>
  )
}
