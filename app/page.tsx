import { monserrat } from '@/app/ui/fonts';
import clsx from 'clsx';
import Image from 'next/image';
export default async function Home() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto flex flex-row justify-center gap-36 pt-48">
        {/* <h1 className={`text-xl md:text-2xl`}>Projects</h1> */}

        <div className="relative flex justify-end">
          <Image
            src="/stephane_2.png"
            width={250}
            height={250}
            alt={'profile image'}
            className="z-10 rounded-full border-8 border-gray-900"
          ></Image>

          <div className="absolute -left-3 -top-3 h-[17rem] w-[17rem] rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]"></div>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-2xl">Hi 👋, I am Stephane</span>
          <p className={clsx(monserrat.className, 'flex justify-start text-8xl font-bold')}>
            {' '}
            Full Stack
          </p>
          <p className={clsx(monserrat.className, 'flex justify-start text-8xl font-bold')}>
            {' '}
            Developer _
          </p>
        </div>
      </section>
      <section></section>
    </main>
  );
}
