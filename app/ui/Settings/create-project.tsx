'use client';
import { createProject } from '@/app/lib/actions';
import type { Tool } from '@/app/lib/definitions';
import { GithubIcon } from '@/app/ui/icons/GithubIcon';
import {
  ArchiveBoxArrowDownIcon,
  LinkIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
// export type Project2 = {
//   id: string;
//   name: string;
//   description: string;
//   github_link: string;
//   url: string;
//   img_url?: string;
//   bundler?: string;
//   test_runner?: string;
//   e2e?: string;
//   frontend_lib?: string;
//   fullstack_fram?: string;
//   styling?: string;
//   component_library?: string;
//   database?: string;
//   tools?: string;
// };

export default function FormProject({ tools }: { tools: Tool[] }) {
  return (
    <form action={createProject} className="flex justify-center">
      <div className="mt-24 w-[400px] rounded-md bg-gray-50 p-6 dark:bg-gray-700">
        {/* NAME */}
        <div className="mb-4">
          <label htmlFor="project" className="mb-2 block text-sm font-medium">
            Project&apos;s name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                autoComplete={'false'}
                id="project"
                name="project"
                type="string"
                placeholder="Enter the project's name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="project-error"
              />
              <WrenchScrewdriverIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:text-gray-300 dark:peer-focus:text-gray-300" />
            </div>
          </div>
          <div id="project-error" aria-live="polite" aria-atomic="true">
            {/* {state.errors?.amount &&
              state.errors.amount.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))} */}
          </div>
        </div>
        {/**DESCRIPTION */}
        <div className="mb-4">
          <label htmlFor="description" className="mb-2 block text-sm font-medium">
            Description
          </label>
          <div className="relative mt-2 rounded-md">
            <textarea
              id="description"
              name="description"
              rows={5}
              cols={30}
              maxLength={255}
              placeholder="Enter the description's description"
              className="peer block w-full rounded-md border border-gray-200 p-3 py-2 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="description-error"
            />
          </div>
          <div id="description-error" aria-live="polite" aria-atomic="true">
            {/* {state.errors?.amount &&
              state.errors.amount.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))} */}
          </div>
        </div>
        {/** GITHUB LINK */}
        <div className="mb-4">
          <label htmlFor="githubLink" className="mb-2 block text-sm font-medium">
            Github link
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                autoComplete={'false'}
                id="githubLink"
                name="githubLink"
                type="string"
                placeholder="Enter the githubLink's"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="githubLink-error"
              />
              <GithubIcon className="absolute left-3 top-[9px] fill-gray-500 dark:fill-gray-300" />
            </div>
          </div>
          <div id="githubLink-error" aria-live="polite" aria-atomic="true">
            {/* {state.errors?.amount &&
              state.errors.amount.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))} */}
          </div>
        </div>
        {/** PROD URL  */}
        <div className="mb-4">
          <label htmlFor="url" className="mb-2 block text-sm font-medium">
            url
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                autoComplete={'false'}
                id="url"
                name="url"
                type="string"
                placeholder="Enter the url's name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="url-error"
              />
              <LinkIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:text-gray-300 dark:peer-focus:text-gray-300" />
            </div>
          </div>
          <div id="url-error" aria-live="polite" aria-atomic="true">
            {/* {state.errors?.amount &&
              state.errors.amount.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))} */}
          </div>
        </div>
        {/** IMAGE URL */}
        <div className="mb-4">
          <label htmlFor="imageUrl" className="mb-2 block text-sm font-medium">
            imageUrl
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                autoComplete={'false'}
                id="imageUrl"
                name="imageUrl"
                type="string"
                placeholder="Enter the imageUrl's name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="imageUrl-error"
              />
              <LinkIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:text-gray-300 dark:peer-focus:text-gray-300" />
            </div>
          </div>
          <div id="imageUrl-error" aria-live="polite" aria-atomic="true">
            {/* {state.errors?.amount &&
              state.errors.amount.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))} */}
          </div>
        </div>
        {/** BUNDLER */}
        <div className="mb-4">
          <label htmlFor="bundler" className="mb-2 block text-sm font-medium">
            Choose bundler
          </label>
          <div className="relative">
            <select
              id="bundler"
              name="bundler"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2"
              aria-describedby="bundler-error"
            >
              <option value="" disabled selected className="text-gray-500 dark:text-gray-400">
                Select a bundler
              </option>
              {tools.map((tool) => (
                <option key={tool.id} value={tool.id}>
                  {tool.name} v{tool.version}
                </option>
              ))}
            </select>

            <ArchiveBoxArrowDownIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:text-gray-300 dark:peer-focus:text-gray-300" />
          </div>
          <div id="bundler-error" aria-live="polite" aria-atomic="true">
            {/* {state.errors?.customerId &&
              state.errors.customerId.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))} */}
          </div>
        </div>
        {/** TEST RUNNER*/}
        <div className="mb-4">
          <label htmlFor="testRunner" className="mb-2 block text-sm font-medium">
            Choose a test runner
          </label>
          <div className="relative">
            <select
              id="testRunner"
              name="testRunner"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              aria-describedby="testRunner-error"
            >
              <option value="" disabled>
                Select a test Runner
              </option>
              {tools.map((tool) => (
                <option key={tool.id} value={tool.id}>
                  {tool.name} v{tool.version}
                </option>
              ))}
            </select>

            <ArchiveBoxArrowDownIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:text-gray-300 dark:peer-focus:text-gray-300" />
          </div>
          <div id="testRunner-error" aria-live="polite" aria-atomic="true">
            {/* {state.errors?.customerId &&
              state.errors.customerId.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))} */}
          </div>
        </div>
        {/** END TO END */}
        <div className="mb-4">
          <label htmlFor="end2end" className="mb-2 block text-sm font-medium">
            Choose an end to end test
          </label>
          <div className="relative">
            <select
              id="end2end"
              name="end2end"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              aria-describedby="end2end-error"
            >
              <option value="" disabled>
                Select an end to end test
              </option>
              {tools.map((tool) => (
                <option key={tool.id} value={tool.id}>
                  {tool.name} v{tool.version}
                </option>
              ))}
            </select>

            <ArchiveBoxArrowDownIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:text-gray-300 dark:peer-focus:text-gray-300" />
          </div>
          <div id="end2end-error" aria-live="polite" aria-atomic="true">
            {/* {state.errors?.customerId &&
              state.errors.customerId.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))} */}
          </div>
        </div>
        {/** FRONTEND LIBRARY*/}
        <div className="mb-4">
          <label htmlFor="frontendLibrary" className="mb-2 block text-sm font-medium">
            Choose a frontend library
          </label>
          <div className="relative">
            <select
              id="frontendLibrary"
              name="frontendLibrary"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              aria-describedby="frontendLibrary-error"
            >
              <option value="" disabled>
                Select a frontend library
              </option>
              {tools.map((tool) => (
                <option key={tool.id} value={tool.id}>
                  {tool.name} v{tool.version}
                </option>
              ))}
            </select>

            <ArchiveBoxArrowDownIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:text-gray-300 dark:peer-focus:text-gray-300" />
          </div>
          <div id="frontendLibrary-error" aria-live="polite" aria-atomic="true">
            {/* {state.errors?.customerId &&
              state.errors.customerId.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))} */}
          </div>
        </div>
        {/** FULLSTACK FRAMEWORK*/}
        <div className="mb-4">
          <label htmlFor="fullstackFramework" className="mb-2 block text-sm font-medium">
            Choose fullstack framework
          </label>
          <div className="relative">
            <select
              id="fullstackFramework"
              name="fullstackFramework"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              aria-describedby="fullstackFramework-error"
            >
              <option value="" disabled>
                Select a fullstack framework
              </option>
              {tools.map((tool) => (
                <option key={tool.id} value={tool.id}>
                  {tool.name} v{tool.version}
                </option>
              ))}
            </select>

            <ArchiveBoxArrowDownIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:text-gray-300 dark:peer-focus:text-gray-300" />
          </div>
          <div id="fullstackFramework-error" aria-live="polite" aria-atomic="true">
            {/* {state.errors?.customerId &&
              state.errors.customerId.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))} */}
          </div>
        </div>
        {/** STYLING */}
        <div className="mb-4">
          <label htmlFor="styling" className="mb-2 block text-sm font-medium">
            Choose a styling tool
          </label>
          <div className="relative">
            <select
              id="styling"
              name="styling"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              aria-describedby="styling-error"
            >
              <option value="" disabled>
                Select a styling tool
              </option>
              {tools.map((tool) => (
                <option key={tool.id} value={tool.id}>
                  {tool.name} v{tool.version}
                </option>
              ))}
            </select>

            <ArchiveBoxArrowDownIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:text-gray-300 dark:peer-focus:text-gray-300" />
          </div>
          <div id="styling-error" aria-live="polite" aria-atomic="true">
            {/* {state.errors?.customerId &&
              state.errors.customerId.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))} */}
          </div>
        </div>
        {/** COMPONENT LIBRARY */}
        <div className="mb-4">
          <label htmlFor="componentLibrary" className="mb-2 block text-sm font-medium">
            Choose a component library
          </label>
          <div className="relative">
            <select
              id="componentLibrary"
              name="componentLibrary"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              aria-describedby="componentLibrary-error"
            >
              <option value="" disabled>
                Select a component library
              </option>
              {tools.map((tool) => (
                <option key={tool.id} value={tool.id}>
                  {tool.name} v{tool.version}
                </option>
              ))}
            </select>

            <ArchiveBoxArrowDownIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:text-gray-300 dark:peer-focus:text-gray-300" />
          </div>
          <div id="componentLibrary-error" aria-live="polite" aria-atomic="true">
            {/* {state.errors?.customerId &&
              state.errors.customerId.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))} */}
          </div>
        </div>
        {/** DATABASES */}
        <div className="mb-4">
          <label htmlFor="databases" className="mb-2 block text-sm font-medium">
            Choose a database
          </label>
          <div className="relative">
            <select
              id="database"
              name="database"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              aria-describedby="database-error"
            >
              <option value="" disabled>
                Select a database
              </option>
              {tools.map((tool) => (
                <option key={tool.id} value={tool.id}>
                  {tool.name} v{tool.version}
                </option>
              ))}
            </select>

            <ArchiveBoxArrowDownIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:text-gray-300 dark:peer-focus:text-gray-300" />
          </div>
          <div id="database-error" aria-live="polite" aria-atomic="true">
            {/* {state.errors?.customerId &&
              state.errors.customerId.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))} */}
          </div>
        </div>
        {/** TOOLS*/}
        <div className="mb-4">
          <label htmlFor="tool" className="mb-2 block text-sm font-medium">
            Choose a tool
          </label>
          <div className="relative">
            <select
              id="tool"
              name="tool"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              aria-describedby="tool-error"
            >
              <option value="" disabled>
                Select a tool
              </option>
              {tools.map((tool) => (
                <option key={tool.id} value={tool.id}>
                  {tool.name} v{tool.version}
                </option>
              ))}
            </select>

            <ArchiveBoxArrowDownIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:text-gray-300 dark:peer-focus:text-gray-300" />
          </div>
          <div id="tool-error" aria-live="polite" aria-atomic="true">
            {/* {state.errors?.customerId &&
              state.errors.customerId.map((error: string) => (
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
            Create Project
          </Button>
        </div>
      </div>
    </form>
  );
}
