// import { Inter } from 'next/font/google';
 
// export const inter = Inter({ subsets: ['latin'] });

//새로운 폰트를 추가해보자
import { Inter, Roboto_Mono, Lusitana,  } from 'next/font/google'
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
});