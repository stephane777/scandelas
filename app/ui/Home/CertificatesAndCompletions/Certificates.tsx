import ZoomImage from '@/app/ui/Home/CertificatesAndCompletions/ZomeImage';
import { inter } from '@/app/ui/fonts';
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
    <div className="container flex max-w-[720px] gap-6">
      <div className="w-[360px]">
        <ZoomImage src={src} alt={alt} width={width} height={height} zoomLevel={zoomLevel} />
      </div>
      <div className={clsx(inter.className, 'flex flex-col')}>
        <Link
          href={href}
          target="_blank"
          className={'text-medium text-blue-600 hover:text-blue-400'}
        >
          {heading}
        </Link>
        <ul className="mt-6 list-disc pl-4 text-sm">
          {list?.map((info, index) => {
            return <li key={`${index}-${info}`}>{info}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

const Certificate = ({ heading, href, text, list }: CertificateProps) => {
  return (
    <div className="container flex max-w-[720px] gap-6">
      <div>
        <div
          data-iframe-width="360"
          data-iframe-height="270"
          data-share-badge-id="802f1d9c-a6bf-4e30-9d8d-375acd9ba6e4"
          data-share-badge-host="https://www.credly.com"
        ></div>
      </div>
      <div className={clsx(inter.className, 'flex flex-col')}>
        <Link
          href={href}
          target="_blank"
          className={'text-medium text-blue-600 hover:text-blue-400'}
        >
          {heading}
        </Link>
        <p className={clsx(inter.className, 'text-sm')}>{text}</p>
        <ul className="mt-6 list-disc pl-4 text-sm">
          {list?.map((info, index) => {
            return <li key={`${index}-${info}`}>{info}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

const completions = completion_data?.map((data, index) => {
  return <Completion key={index} {...data} />;
});
const certificates = certificate_data?.map((data, index) => {
  return <Certificate key={index} {...data} />;
});

export const CertificatesAndCompletions = certificates.concat(completions);
