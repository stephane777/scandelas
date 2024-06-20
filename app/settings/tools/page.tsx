import Search from '@/app/ui/Search';
import { CreateTool } from '@/app/ui/Settings/Buttons';
import ToolTab from '@/app/ui/Settings/ToolsTab';
import { ToolsTableSkeleton } from '@/app/ui/Skeletons';
import { Suspense } from 'react';
export default async function Page() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl p-6">
      <section className="flex-column items-center justify-center pt-16">
        <h1 className={`mb-4 flex justify-center text-2xl md:text-2xl`}>Tools</h1>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
          <Search placeholder="Search invoices..." />
          <CreateTool />
        </div>
        <Suspense fallback={<ToolsTableSkeleton />}>
          <ToolTab />
        </Suspense>
      </section>
    </main>
  );
}
