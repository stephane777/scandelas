import { DeleteIcon } from '@/app/ui/icons/DeleteIcon';
import { EditIcon } from '@/app/ui/icons/EditIcon';
import { PlusIcon } from '@heroicons/react/24/outline';

import Link from 'next/link';
// import { deleteInvoice } from '@/app/lib/actions';

export function CreateButton({ pathToCreate, name }: { pathToCreate: string; name: string }) {
  return (
    <Link
      href={pathToCreate}
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">{name}</span> <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateTool({ id }: { id: string }) {
  return (
    <Link href={`/settings/tools/${id}/edit`}>
      <EditIcon className="w-5" />
    </Link>
  );
}

export function UpdateProject({ id }: { id: string }) {
  return (
    <Link href={`/settings/projects/${id}/edit`}>
      <EditIcon className="w-5" />
    </Link>
  );
}

export function DeleteTool({ id }: { id: string }) {
  // const deleteToolWithId = deleteTool.bind(null, id);
  return (
    // <form action={deleteToolWithId}>
    <button>
      {/* <span className="sr-only">Delete</span> */}
      <DeleteIcon className="w-5 text-red-600 dark:text-red-500" />
    </button>
  );
}

export function DeleteProject({ id }: { id: string }) {
  // const deleteProjectWithId = deleteProject.bind(null, id);
  return (
    // <form action={deleteProjectWithId}>
    <button>
      {/* <span className="sr-only">Delete</span> */}
      <DeleteIcon className="w-5 text-red-600 dark:text-red-500" />
    </button>
  );
}
