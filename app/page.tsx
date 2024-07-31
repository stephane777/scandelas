import { getCodeWarsProfile } from '@/app/lib/data';
import About from '@/app/ui/Home/About/About';
import { CertificatesAndCompletions } from '@/app/ui/Home/CertificatesAndCompletions/Certificates';
import { monserrat } from '@/app/ui/fonts';
import {
  ArrowTrendingUpIcon,
  ChevronDoubleUpIcon,
  LockOpenIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';

/**
 * To allow svg with next/image component the next.config.mjs had to be updated
 * with dangerouslyAllowSVG
 * https://github.com/vercel/next.js/discussions/53041
 */
export default async function Home() {
  const codewarsData = await getCodeWarsProfile();
  return (
    <main className="min-h-screen">
      <section className="container mx-auto flex flex-row justify-center gap-36 py-52">
        <div className="relative flex justify-end">
          <Image
            src="/stephane_2.png"
            width={200}
            height={200}
            alt={'profile image'}
            className="border-6 z-10 rounded-full border-gray-900 grayscale"
          ></Image>

          {/* <div className="absolute -left-3 -top-3 h-[17rem] w-[17rem] rounded-full bg-gradient-to-t from-[#232b72] via-[#5495df] to-[#d2dee3]"></div> */}
          <div className="absolute -left-3 -top-3 h-[14rem] w-[14rem] rounded-full border-1 border-slate-600 bg-slate-800"></div>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-2xl">Hi 👋, I am Stephane</span>
          <p
            className={clsx(
              monserrat.className,
              'flex justify-start text-pretty text-6xl font-bold'
            )}
          >
            {' '}
            Full Stack
          </p>

          <p className={clsx(monserrat.className, 'flex justify-start text-6xl font-bold')}>
            {' '}
            <span className="bg-gradient-to-t from-[#232b72] via-[#5495df] to-[#d2dee3] bg-clip-text text-6xl font-bold text-transparent">
              Dev
            </span>
            eloper _
          </p>
        </div>
      </section>
      <section className="container mx-auto w-[800px]">
        <h2 className="my-12 text-4xl font-bold">About</h2>
        <About />
      </section>
      <section className="container mx-auto mt-32 w-[800px]">
        <h1 className="my-12 text-4xl font-bold">Sources</h1>
      </section>
      <div className="bg-slate-100 py-24 dark:bg-slate-800">
        <section className="container mx-auto max-w-[1600px]">
          <div className="container mx-auto w-[800px]">
            <h1 className="mb-24 text-4xl font-bold">Certificates & courses completion</h1>
          </div>
          <div className="flex max-w-[1600px] flex-wrap justify-center lg:gap-24">
            {CertificatesAndCompletions}
          </div>
        </section>
      </div>

      <section className="container mx-auto mt-32 w-[800px]">
        <h1 className="my-12 text-4xl font-bold">What colleague say</h1>
      </section>

      <section className="container mx-auto mt-32 w-[800px]">
        <h1 className="my-12 text-4xl font-bold">Calendy - Book a call</h1>
        {/* Check Calendly API's documentation : https://developer.calendly.com/getting-started */}
      </section>

      <section className="container mx-auto mt-32 w-[800px]">
        <h1 className="my-12 text-4xl font-bold">Download a pdf</h1>
      </section>

      <section className="container mx-auto mt-32 w-[800px]">
        <h1 className="my-12 text-4xl font-bold">This</h1>
      </section>

      <section className="container mx-auto mt-32 w-[1000px]">
        <h1 className="my-12 text-4xl font-bold">Codewars</h1>
        <div className="flex flex-row justify-center gap-14">
          <Image
            src="/codewars.png"
            width={250}
            height={0}
            alt={'Codewars logo'}
            className="z-10 border-8 border-gray-900"
          />

          <div>
            <p className={clsx(monserrat.className, 'text-base leading-8 tracking-wide')}>
              I couldn&apos;t not to mention codewars in this page as it was part of my journey at
              the start. Codewars is a coding challenge platform which helps you to learn, train &
              improve your coding skills. The difficulty for a kata (challenge) is divided by 8
              kyu(level) and the goal is to pass all unit tests from the kata. Once the challenge is
              solved you have access to all solutions sorted by most voted <em>best practices</em> /{' '}
              <em>clever</em>.
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-center py-24">
          <Image
            src="https://www.codewars.com/users/stephane777/badges/large"
            alt={'Codewars logo'}
            className="hidden h-auto w-96 lg:block"
            priority={false}
            width={0}
            height={0}
          />
          <Image
            src="https://www.codewars.com/users/stephane777/badges/small"
            alt={'Codewars logo'}
            className="hidden h-auto w-96 md:max-lg:block"
            priority={false}
            width={0}
            height={0}
          />
          <Image
            src="https://www.codewars.com/users/stephane777/badges/micro"
            alt={'Codewars logo'}
            className="h-auto w-96 md:hidden"
            priority={false}
            width={0}
            height={0}
          />
        </div>

        {/* <div>{JSON.stringify(codewarsData)} </div> */}
        {/* <div>{`username: ${codewarsData.username}`}</div> */}
        <div className="flex flex-row justify-center gap-12 pt-24">
          <div className="flex-col items-center rounded-md border-2 border-gray-400 p-6">
            <SparklesIcon title="honor" className="pointer-events-none mx-auto block h-16 w-16" />
            <h2 className="text-xl font-bold">Honor</h2>
            <div className="flex justify-center text-4xl font-extrabold">{codewarsData.honor}</div>
          </div>

          <div className="flex-col items-center rounded-md border-2 border-gray-400 p-6">
            <ArrowTrendingUpIcon
              title="Leaderboard Position"
              className="pointer-events-none mx-auto block h-16 w-16"
            />
            <h2 className="text-xl font-bold">Leaderboard </h2>
            <div className="flex justify-center text-4xl font-extrabold">
              {codewarsData.leaderboardPosition}
            </div>
          </div>

          <div className="flex-col items-center rounded-md border-2 border-gray-400 p-6">
            <ChevronDoubleUpIcon
              title="Ranks name"
              className="pointer-events-none mx-auto block h-16 w-16"
            />
            <h2 className="text-xl font-bold">Ranks name</h2>
            <div className="flex justify-center text-4xl font-extrabold">
              {' '}
              {codewarsData.ranks.overall.name}
            </div>
          </div>
          <div className="flex-col items-center rounded-md border-2 border-gray-400 p-6">
            <ChevronDoubleUpIcon
              title="Ranks score"
              className="pointer-events-none mx-auto block h-16 w-16"
            />
            <h2 className="text-xl font-bold">Ranks score</h2>
            <div className="flex justify-center text-4xl font-extrabold">
              {codewarsData.ranks.overall.score}
            </div>
          </div>

          <div className="flex-col items-center rounded-md border-2 border-gray-400 p-6">
            <LockOpenIcon
              title="Total Completed"
              className="pointer-events-none mx-auto block h-16 w-16"
            />
            <h2 className="text-xl font-bold">Total completed</h2>
            <div className="flex justify-center text-4xl font-extrabold">
              {codewarsData.codeChallenges.totalCompleted}
            </div>
          </div>
        </div>
        {/* 
          <div>{`ranks js name: ${codewarsData.ranks.languages.javascript.name}`}</div>
          <div>{`ranks js score: ${codewarsData.ranks.languages.javascript.score}`}</div>

          <div>{`ranks js name: ${codewarsData.ranks.languages.sql.name}`}</div>
          <div>{`ranks js score: ${codewarsData.ranks.languages.sql.score}`}</div> */}
      </section>
    </main>
  );
}
