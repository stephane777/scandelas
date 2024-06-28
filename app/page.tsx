import { getCodeWarsProfile } from '@/app/lib/data';
import { monserrat } from '@/app/ui/fonts';
import clsx from 'clsx';
import Image from 'next/image';
import { Suspense } from 'react';

export default async function Home() {
  const codewarsData = await getCodeWarsProfile();
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

          <div className="absolute -left-3 -top-3 h-[17rem] w-[17rem] rounded-full bg-gradient-to-t from-[#232b72] via-[#5495df] to-[#d2dee3]"></div>
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
      <section className="container mx-auto gap-36">
        <h1>Codewars</h1>
        <div>
          <Image
            src="/codewars.png"
            width={250}
            height={250}
            alt={'Codewars logo'}
            className="z-10 border-8 border-gray-900"
          />
        </div>
        <div>
          <Image
            src="https://www.codewars.com/users/stephane777/badges/large"
            width={480}
            height={250}
            alt={'Codewars logo'}
            className=""
          />
          <Image
            src="https://www.codewars.com/users/stephane777/badges/small"
            width={480}
            height={250}
            alt={'Codewars logo'}
            className=""
          />
          <Image
            src="https://www.codewars.com/users/stephane777/badges/micro"
            width={480}
            height={250}
            alt={'Codewars logo'}
            className=""
          />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <div>{JSON.stringify(codewarsData)} </div>
        </Suspense>
      </section>
    </main>
  );
}
