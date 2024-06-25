import { fetchToolById } from '@/app/lib/data';
import Breadcrumbs from '@/app/ui/Settings/breadcrumbs';
import EditToolForm from '@/app/ui/Tools/edit-tool';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const tool = await fetchToolById(id);

  if (!tool) {
    notFound();
  }
  return (
    <main className="min-h-screen">
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Tools', href: '/settings/tools' },
          {
            label: 'Edit Tool',
            href: `/settings/tools/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditToolForm tool={tool} />
    </main>
  );
}
