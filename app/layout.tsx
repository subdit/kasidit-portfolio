import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Kasidit B. | Portfolio',
  description:
    'Kasidit B. is a full-stack developer with CMS and front-end focus for over 6 years of experience.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative h-[5000px] pt28 sm:-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacitiy-90`}>
        <div className='bg-[#e9dede] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]'></div>
        <div className='bg-[#c3bfe3] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]'></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
