import ZoomImage from '@/app/ui/Home/CertificatesAndCompletions/ZomeImage';
import { inter } from '@/app/ui/fonts';
import { ChevronUpIcon } from '@heroicons/react/24/outline';
import { Card, CardBody, CardFooter, CardHeader, Divider } from '@nextui-org/react';
import clsx from 'clsx';
import Link from 'next/link';
import { certificate_data, completion_data } from './data';

interface CompletionInfos {
  heading: string;
  href: string;
  list: string[];
}

interface ZoomImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  zoomLevel: number;
}

export interface CompletionProps extends CompletionInfos, ZoomImage {}

export interface CertificateProps extends CompletionInfos {
  text: string;
}

const Completion = ({
  heading,
  href,
  list,
  src,
  alt,
  width,
  height,
  zoomLevel,
}: CompletionProps) => {
  return (
    <Card className={clsx(inter.className, 'relative py-4')}>
      <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
        <p className="text-tiny font-bold uppercase">Total Typescript - workshop</p>
        <small className="text-default-500">@mattpocockuk</small>
        <Link
          href={href}
          target="_blank"
          className={'pt-2 text-large font-bold text-blue-600 hover:text-blue-400'}
        >
          {heading}
        </Link>
      </CardHeader>
      <Divider />
      <CardBody className="overflow-visible py-2">
        <div className="z-10 w-[360px]">
          <ZoomImage src={src} alt={alt} width={width} height={height} zoomLevel={zoomLevel} />
        </div>
      </CardBody>

      <CardFooter className="h-16">
        <ul className="absolute bottom-0 left-0 z-10 flex w-full list-disc flex-col justify-end bg-white text-sm dark:bg-zinc-900">
          <ChevronUpIcon
            title="Ranks name"
            className="pointer-events-none z-10 mx-auto h-5 w-5 translate-y-2 animate-pulse rounded-full bg-slate-100 p-1 dark:bg-slate-800"
          />
          <Divider className="z-10 mb-4" />
          <div className="flex h-14 w-full cursor-pointer flex-col justify-end overflow-hidden bg-white px-8 pb-4 transition-all hover:z-30 hover:h-44 dark:bg-zinc-900">
            {list?.map((info, index) => {
              return <li key={`${index}-${info}`}>{info}</li>;
            })}
          </div>
        </ul>
      </CardFooter>
    </Card>
  );
};

const Certificate = ({ heading, href, text, list }: CertificateProps) => {
  return (
    <Card className={clsx(inter.className, 'relative py-4')}>
      <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
        <p className="text-tiny font-bold uppercase">Microsoft SQL Server 2012/14</p>
        {/* <small className="text-default-500">@mattpocockuk</small> */}
        <Link
          href={href}
          target="_blank"
          className={'pt-2 text-medium font-bold text-blue-600 hover:text-blue-400'}
        >
          {heading}
        </Link>
      </CardHeader>
      <Divider />
      <CardBody className="overflow-visible py-2">
        <div>
          <div
            data-iframe-width="360"
            data-iframe-height="270"
            data-share-badge-id="802f1d9c-a6bf-4e30-9d8d-375acd9ba6e4"
            data-share-badge-host="https://www.credly.com"
          ></div>
        </div>
      </CardBody>

      <CardFooter className="h-16">
        <ul className="absolute bottom-0 left-0 z-10 flex w-full list-disc flex-col justify-end bg-white text-sm dark:bg-zinc-900">
          <ChevronUpIcon
            title="Ranks name"
            className="pointer-events-none z-10 mx-auto h-5 w-5 translate-y-2 rounded-full bg-slate-100 p-1 dark:bg-slate-800"
          />
          <Divider className="z-10 mb-4" />
          <div className="flex h-14 w-full cursor-pointer flex-col justify-end overflow-hidden bg-white px-8 pb-4 transition-all hover:z-30 hover:h-40 dark:bg-zinc-900">
            <p className={clsx(inter.className, 'text-sm')}>{text}</p>
            {list?.map((info, index) => {
              return <li key={`${index}-${info}`}>{info}</li>;
            })}
          </div>
        </ul>
      </CardFooter>
    </Card>
  );
};

const completions = completion_data?.map((data, index) => {
  return <Completion key={index} {...data} />;
});
const certificates = certificate_data?.map((data, index) => {
  return <Certificate key={index} {...data} />;
});

export const CertificatesAndCompletions = certificates.concat(completions);
