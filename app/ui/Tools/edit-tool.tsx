'use client';

import { Tool } from '@/app/lib/definitions';
// import { createTool } from '@/app/lib/actions';
import { Square3Stack3DIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

export default function EditToolForm({ tool }: { tool: Tool }) {
  return (
    <form action={''} className="flex justify-center">
      <div className="mt-24 w-[400px] rounded-md bg-gray-50 p-6 dark:bg-gray-700">
        {/* NAME */}
        <div className="mb-4">
          <label htmlFor="tool" className="mb-2 block text-sm font-medium">
            Tool&apos;s name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="tool"
                name="tool"
                type="string"
                defaultValue={tool.name}
                placeholder="Enter the tool's name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="tool-error"
              />
              <WrenchScrewdriverIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:text-gray-300 dark:peer-focus:text-gray-300" />
            </div>
          </div>
          <div id="tool-error" aria-live="polite" aria-atomic="true">
            {/* {state.errors?.amount &&
              state.errors.amount.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))} */}
          </div>
        </div>
        {/* VERSION */}
        <div className="mb-4">
          <label htmlFor="version" className="mb-2 block text-sm font-medium">
            Version
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="version"
                name="version"
                defaultValue={tool.version}
                type="string"
                placeholder="Enter the version"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="version-error"
              />
              <Square3Stack3DIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:text-gray-300 dark:peer-focus:text-gray-300" />
            </div>
          </div>
          <div id="version-error" aria-live="polite" aria-atomic="true">
            {/* {state.errors?.amount &&
              state.errors.amount.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))} */}
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/settings/tools"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          <Button type="submit" color="primary">
            Create Tool
          </Button>
        </div>
      </div>
    </form>
  );
}
