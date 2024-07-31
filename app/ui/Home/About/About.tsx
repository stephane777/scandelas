import { monserrat } from '@/app/ui/fonts';
import clsx from 'clsx';

export default function About() {
  return (
    <>
      <p className={clsx(monserrat.className, 'prose-p text-base leading-8 tracking-wide')}>
        Hi, I am french software engineer based in London. I have over 2 decades of experience
        working in IT as developer. I mainly worked on the frontend with the support of cloud
        solutions like AWS & GCP for the past few years.
      </p>
      <br />
      <p className={clsx(monserrat.className, 'prose-p text-base leading-8 tracking-wide')}>
        I am dedicated Frontend Developer with a strong foundation in React, Next.js, Tailwind CSS,
        and Server-Side Rendering (SSR), I bring both creativity and technical precision to the web
        development projects I undertake.
      </p>
      <br />
      <p className={clsx(monserrat.className, 'prose-p text-base leading-8 tracking-wide')}>
        With a Bachelor of Science and several years of hands-on experience in the industry, I
        specialize in creating seamless, user-friendly interfaces that enhance user experiences and
        drive engagement. My role at Merkle has allowed me to collaborate with talented teams,
        tackle challenging projects, and stay at the forefront of frontend development technologies.
      </p>
      <p className={clsx(monserrat.className, 'prose-p mt-5 text-base leading-8 tracking-wide')}>
        However, my journey doesn’t stop here. I am eager to expand my expertise and transition into
        a Full Stack Developer role. I am passionate about learning new technologies, improving my
        backend skills, and taking on more comprehensive development challenges that encompass the
        full spectrum of web development.
      </p>
      <br />
      <p className={clsx(monserrat.className, 'prose-p text-base leading-8 tracking-wide')}>
        Outside of work, I enjoy exploring the latest tech trends, contributing to open-source
        projects, and continuously learning to stay ahead in this ever-evolving field.
      </p>
      <br />
      <p className={clsx(monserrat.className, 'prose-p text-base leading-8 tracking-wide')}>
        Let’s connect! Whether you’re interested in discussing technology, exploring potential
        collaborations, or just want to exchange ideas, feel free to reach out.
      </p>
    </>
  );
}
