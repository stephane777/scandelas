'use client';

import { Pagination } from '@nextui-org/react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function ToolsPagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { replace } = useRouter();

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <Pagination
      initialPage={Number(searchParams.get('page') || 1)}
      showControls
      showShadow={false}
      size={'md'}
      radius="sm"
      color={'default'}
      variant="light"
      onChange={(page) => replace(createPageURL(page))}
      total={totalPages}
      disableAnimation={false}
      classNames={{
        wrapper: 'gap-0 overflow-visible h-8 ',
        item: 'w-8 h-8 text-small bg-transparent',
        cursor: '',
      }}
    />
  );
}
