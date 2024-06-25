import { fetchProjectById } from '@/app/lib/data';
import Breadcrumbs from '@/app/ui/Settings/breadcrumbs';
// import EditToolForm from '@/app/ui/Tools/edit-tool';
import { fetchTools } from '@/app/lib/data';
import EditFormProject from '@/app/ui/Projects/edit-project';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const [tools, project] = await Promise.all([fetchTools(), fetchProjectById(id)]);

  if (!tools || !project) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Project', href: '/settings/projects' },
          {
            label: 'Edit Tool',
            href: `/settings/projects/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditFormProject project={project} tools={tools} />
    </main>
  );
}
