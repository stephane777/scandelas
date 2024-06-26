// Todo

// - Create a form to collect project details
//     - name
//     - technology
//     - description
//     - image/url

// - Create a form to collect a list my ressources
// Settings page should allow the choice to add/update the list of projects along with
// the list of tools.

import ProjectsTab from '@/app/ui/Settings/ProjectsTab';
import ToolTab from '@/app/ui/Settings/ToolsTab';
// import { fetchProjects, fetchTools } from '../lib/data';
import { ProjectTableSkeleton, ToolsTableSkeleton } from '@/app/ui/Skeletons';
import { Suspense } from 'react';

export default async function Page() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl p-6">
      <section className="flex-column items-center pt-16">
        <h1 className={`mb-4 flex justify-center text-2xl md:text-2xl`}>Projects</h1>
        <Suspense fallback={<ProjectTableSkeleton />}>
          <ProjectsTab />
        </Suspense>
      </section>
      <section className="flex-column items-center justify-center pt-16">
        <h1 className={`mb-4 flex justify-center text-2xl md:text-2xl`}>Tools</h1>

        <Suspense fallback={<ToolsTableSkeleton />}>
          {/* todo :  mobile view  */}
          <ToolTab />
        </Suspense>
      </section>
    </main>
  );
}
