'use client';
// import { createProject } from '@/app/lib/actions';
import type { StateProject } from '@/app/lib/actions';
import { updateProject } from '@/app/lib/actions';
import type { Project, Tool } from '@/app/lib/definitions';
import { GithubIcon } from '@/app/ui/icons/GithubIcon';
import {
  ArchiveBoxArrowDownIcon,
  LinkIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

import { useFormState } from 'react-dom';

export default function EditFormProject({ tools, project }: { tools: Tool[]; project: Project }) {
  const initialState: StateProject = { message: null, errors: {} };

  const updateProjectWithId = updateProject.bind(null, project.id);
  const [state, dispatch] = useFormState(updateProjectWithId, initialState);
  return (
    <form action={dispatch} className="flex justify-center">
      <div className="mt-24 w-[400px] rounded-md bg-gray-50 p-6 dark:bg-gray-700">
        {/* NAME */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Project&apos;s name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                autoComplete={'false'}
                id="name"
                name="name"
                defaultValue={project.name}
                type="string"
                placeholder="Enter the name's name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="name-error"
              />
              <WrenchScrewdriverIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:text-gray-300 dark:peer-focus:text-gray-300" />
            </div>
          </div>
          <div id="name-error" aria-live="polite" aria-atomic="true">
            {state.errors?.name &&
              state.errors.name.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
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
              rows={17}
              cols={30}
              defaultValue={project.description}
              maxLength={255}
              placeholder="Enter the description's description"
              className="peer block w-full rounded-md border border-gray-200 p-3 py-2 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="description-error"
            />
          </div>
          <div id="description-error" aria-live="polite" aria-atomic="true">
            {state.errors?.description &&
              state.errors.description.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        {/** GITHUB LINK */}
        <div className="mb-4">
          <label htmlFor="github_link" className="mb-2 block text-sm font-medium">
            Github link
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                autoComplete={'false'}
                id="github_link"
                name="github_link"
                type="string"
                defaultValue={project.github_link}
                placeholder="Enter the github_link's"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="github_link-error"
              />
              <GithubIcon className="absolute left-3 top-[9px] fill-gray-500 dark:fill-gray-300" />
            </div>
          </div>
          <div id="github_link-error" aria-live="polite" aria-atomic="true">
            {state.errors?.github_link &&
              state.errors.github_link.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
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
                defaultValue={project.url}
                placeholder="Enter the url's name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="url-error"
              />
              <LinkIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:text-gray-300 dark:peer-focus:text-gray-300" />
            </div>
          </div>
          <div id="url-error" aria-live="polite" aria-atomic="true">
            {state.errors?.url &&
              state.errors.url.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        {/** IMAGE URL */}
        <div className="mb-4">
          <label htmlFor="img_url" className="mb-2 block text-sm font-medium">
            image url
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                autoComplete={'false'}
                id="img_url"
                name="img_url"
                type="string"
                defaultValue={project.img_url}
                placeholder="Enter the img_url's name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="img_url-error"
              />
              <LinkIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:text-gray-300 dark:peer-focus:text-gray-300" />
            </div>
          </div>
          <div id="img_url-error" aria-live="polite" aria-atomic="true">
            {state.errors?.img_url &&
              state.errors.img_url.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
      </div>
      <div className="mt-24 w-[400px] rounded-md bg-gray-50 p-6 dark:bg-gray-700">
        {/** BUNDLER */}
        <div className="mb-4">
          <label htmlFor="bundler" className="mb-2 block text-sm font-medium">
            Choose bundler
          </label>
          <div className="relative">
            <select
              id="bundler"
              name="bundler"
              defaultValue={project.bundler}
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2"
            >
              <option value="" className="text-gray-500 dark:text-gray-400">
                N/A
              </option>
              {tools.map((tool) => (
                <option key={tool.id} value={tool.id}>
                  {tool.name} v{tool.version}
                </option>
              ))}
            </select>

            <ArchiveBoxArrowDownIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:text-gray-300 dark:peer-focus:text-gray-300" />
          </div>
        </div>
        {/** TEST RUNNER*/}
        <div className="mb-4">
          <label htmlFor="test_runner" className="mb-2 block text-sm font-medium">
            Choose a test runner
          </label>
          <div className="relative">
            <select
              id="test_runner"
              name="test_runner"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={project.test_runner}
            >
              <option value="" className="text-gray-500 dark:text-gray-400">
                N/A
              </option>
              {tools.map((tool) => (
                <option key={tool.id} value={tool.id}>
                  {tool.name} v{tool.version}
                </option>
              ))}
            </select>

            <ArchiveBoxArrowDownIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:text-gray-300 dark:peer-focus:text-gray-300" />
          </div>
        </div>
        {/** END TO END */}
        <div className="mb-4">
          <label htmlFor="e2e" className="mb-2 block text-sm font-medium">
            Choose an end to end test
          </label>
          <div className="relative">
            <select
              id="e2e"
              name="e2e"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={project.e2e}
            >
              <option value="" className="text-gray-500 dark:text-gray-400">
                N/A
              </option>
              {tools.map((tool) => (
                <option key={tool.id} value={tool.id}>
                  {tool.name} v{tool.version}
                </option>
              ))}
            </select>

            <ArchiveBoxArrowDownIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:text-gray-300 dark:peer-focus:text-gray-300" />
          </div>
        </div>
        {/** FRONTEND LIBRARY*/}
        <div className="mb-4">
          <label htmlFor="frontend_lib" className="mb-2 block text-sm font-medium">
            Choose a frontend library
          </label>
          <div className="relative">
            <select
              id="frontend_lib"
              name="frontend_lib"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={project.frontend_lib}
            >
              <option value="" className="text-gray-500 dark:text-gray-400">
                N/A
              </option>
              {tools.map((tool) => (
                <option key={tool.id} value={tool.id}>
                  {tool.name} v{tool.version}
                </option>
              ))}
            </select>

            <ArchiveBoxArrowDownIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:text-gray-300 dark:peer-focus:text-gray-300" />
          </div>
        </div>
        {/** FULLSTACK FRAMEWORK*/}
        <div className="mb-4">
          <label htmlFor="fullstack_fram" className="mb-2 block text-sm font-medium">
            Choose fullstack framework
          </label>
          <div className="relative">
            <select
              id="fullstack_fram"
              name="fullstack_fram"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={project.fullstack_fram}
            >
              <option value="" className="text-gray-500 dark:text-gray-400">
                N/A
              </option>
              {tools.map((tool) => (
                <option key={tool.id} value={tool.id}>
                  {tool.name} v{tool.version}
                </option>
              ))}
            </select>

            <ArchiveBoxArrowDownIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:text-gray-300 dark:peer-focus:text-gray-300" />
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
              defaultValue={project.styling}
            >
              <option value="" className="text-gray-500 dark:text-gray-400">
                N/A
              </option>
              {tools.map((tool) => (
                <option key={tool.id} value={tool.id}>
                  {tool.name} v{tool.version}
                </option>
              ))}
            </select>

            <ArchiveBoxArrowDownIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:text-gray-300 dark:peer-focus:text-gray-300" />
          </div>
        </div>
        {/** COMPONENT LIBRARY */}
        <div className="mb-4">
          <label htmlFor="component_library" className="mb-2 block text-sm font-medium">
            Choose a component library
          </label>
          <div className="relative">
            <select
              id="component_library"
              name="component_library"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={project.component_library}
            >
              <option value="" className="text-gray-500 dark:text-gray-400">
                N/A
              </option>
              {tools.map((tool) => (
                <option key={tool.id} value={tool.id}>
                  {tool.name} v{tool.version}
                </option>
              ))}
            </select>

            <ArchiveBoxArrowDownIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:text-gray-300 dark:peer-focus:text-gray-300" />
          </div>
        </div>
        {/** DATABASES */}
        <div className="mb-4">
          <label htmlFor="database" className="mb-2 block text-sm font-medium">
            Choose a database
          </label>
          <div className="relative">
            <select
              id="database"
              name="database"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={project.database}
            >
              <option value="" className="text-gray-500 dark:text-gray-400">
                N/A
              </option>
              {tools.map((tool) => (
                <option key={tool.id} value={tool.id}>
                  {tool.name} v{tool.version}
                </option>
              ))}
            </select>

            <ArchiveBoxArrowDownIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:text-gray-300 dark:peer-focus:text-gray-300" />
          </div>
        </div>
        {/** TOOLS*/}
        <div className="mb-4">
          <label htmlFor="tools" className="mb-2 block text-sm font-medium">
            Choose a tool
          </label>
          <div className="relative">
            <select
              id="Tools"
              name="tools"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={project.tools}
            >
              <option value="" className="text-gray-500 dark:text-gray-400">
                N/A
              </option>
              {tools.map((tool) => (
                <option key={tool.id} value={tool.id}>
                  {tool.name} v{tool.version}
                </option>
              ))}
            </select>

            <ArchiveBoxArrowDownIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 dark:text-gray-300 dark:peer-focus:text-gray-300" />
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/settings/projects"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          <Button type="submit" color="primary">
            Update Project
          </Button>
        </div>
      </div>
    </form>
  );
}
