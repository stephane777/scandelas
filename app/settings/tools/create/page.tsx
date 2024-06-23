// import Form from '@/app/ui/invoices/create-form';
// import { fetchCustomers } from '@/app/lib/data';
import Breadcrumbs from '@/app/ui/Settings/breadcrumbs';
import FormTool from '@/app/ui/Settings/create-tool';
export default async function Page() {
  // const customers = await fetchCustomers();

  return (
    <main className="flex-column mx-auto min-h-screen max-w-6xl items-center justify-center p-6">
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Tools', href: '/settings/tools' },
          {
            label: 'Create Tool',
            href: '/settings/tools/create',
            active: true,
          },
        ]}
      />

      <FormTool />
    </main>
  );
}
