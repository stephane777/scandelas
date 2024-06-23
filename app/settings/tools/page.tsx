import { fetchToolsPages } from '@/app/lib/data';
import Search from '@/app/ui/Search';
import { CreateButton } from '@/app/ui/Settings/Buttons';
// import ToolTab from '@/app/ui/Settings/ToolsTab';
import ToolsPagination from '@/app/ui/Tools/Paginations';
import Table from '@/app/ui/Tools/Table';
import { Suspense } from 'react';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchToolsPages(query);

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl justify-center p-6">
      <section className="flex-column w-[800px] items-center justify-center pt-16">
        <h1 className={`mb-4 flex justify-center text-2xl md:text-2xl`}>Tools</h1>
        <div className="pb mt-4 flex items-center justify-between gap-2 pb-12 md:mt-8">
          <Search placeholder="Search tools..." />
          <CreateButton pathToCreate={'/settings/tools/create'} name={'create tool'} />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Table query={query} currentPage={currentPage} />
        </Suspense>
        <div className="mt-5 flex w-full justify-center">
          <ToolsPagination totalPages={totalPages} />
        </div>
      </section>
    </main>
  );
}
