// import Form from '@/app/ui/invoices/create-form';
// import { fetchCustomers } from '@/app/lib/data';
import { fetchTools } from '@/app/lib/data';
import Breadcrumbs from '@/app/ui/Settings/breadcrumbs';
import FormProject from '@/app/ui/Settings/create-project';
export default async function Page() {
  const tools = await fetchTools();

  return (
    <main className="flex-column mx-auto min-h-screen max-w-6xl items-center justify-center p-6">
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Projects', href: '/settings/projects' },
          {
            label: 'Create Project',
            href: '/settings/projects/create',
            active: true,
          },
        ]}
      />

      <FormProject tools={tools} />
    </main>
  );
}
