import ProjectsTab from '@/app/ui/Projects/Table';

import Search from '@/app/ui/Search';
import { CreateButton } from '@/app/ui/Settings/Buttons';
import { ProjectTableSkeleton } from '@/app/ui/Skeletons';
import { Suspense } from 'react';

export default async function Page({ params }: { params: string }) {
  return (
    <main className="mx-auto min-h-screen max-w-6xl p-6">
      <section className="flex-column items-center pt-16">
        <h1 className={`mb-4 flex justify-center text-2xl md:text-2xl`}>Projects</h1>
        <div className="pb mt-4 flex items-center justify-between gap-2 pb-12 md:mt-8">
          <Search placeholder="Search projects..." />
          <CreateButton pathToCreate={'/settings/projects/create'} name={'create project'} />
        </div>
        <Suspense fallback={<ProjectTableSkeleton />}>
          <ProjectsTab />
        </Suspense>
      </section>
    </main>
  );
}
