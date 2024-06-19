export function ToolsTableSkeleton() {
  return (
    <div className="relative flex justify-center overflow-x-auto">
      <table className="w-[800px] text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
        <thead className="bg-sky-200 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr className="flex w-full">
            <th className="w-6/12 p-3">Tools UUID</th>
            <th className="w-3/12 p-3">names</th>
            <th className="w-3/12 p-3">versions</th>
            <th className="w-3/12 p-3">actions</th>
          </tr>
        </thead>

        <tbody className="bg-grey-light flex h-56 w-full flex-col items-center justify-between overflow-y-scroll">
          <ToolsTableRowSkeleton />
          <ToolsTableRowSkeleton />
          <ToolsTableRowSkeleton />
          <ToolsTableRowSkeleton />
          <ToolsTableRowSkeleton />
        </tbody>
      </table>
    </div>
  );
}

export function ToolsTableRowSkeleton() {
  return (
    <tr className="w-full animate-pulse border-b border-gray-100 last-of-type:border-none dark:border-gray-400 [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      {/* Tools UUID */}
      <td className="relative overflow-hidden whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex items-center gap-3">
          <div className="h-3 w-64 rounded bg-gray-100 dark:bg-gray-500"></div>
        </div>
      </td>
      {/* Name */}
      <td className="relative overflow-hidden whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex items-center gap-3">
          <div className="h-3 w-32 rounded bg-gray-100 dark:bg-gray-500"></div>
        </div>
      </td>
      {/* Versions */}
      <td className="relative overflow-hidden whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex items-center gap-3">
          <div className="h-3 w-32 rounded bg-gray-100 dark:bg-gray-500"></div>
        </div>
      </td>
      {/* Actions */}
      <td className="relative overflow-hidden whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex justify-end gap-3">
          <div className="h-3 w-12 rounded bg-gray-100 dark:bg-gray-500"></div>
          <div className="h-3 w-12 rounded bg-gray-100 dark:bg-gray-500"></div>
        </div>
      </td>
    </tr>
  );
}

export function ProjectTableSkeleton() {
  return (
    <div className="relative flex justify-center overflow-x-auto">
      <table className="text-left text-sm rtl:text-right">
        <thead className="bg-sky-200 text-xs uppercase text-gray-700 dark:bg-gray-600 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Project uuid
            </th>
            <th scope="col" className="px-6 py-3">
              name
            </th>
            <th scope="col" className="px-6 py-3">
              description
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              github link
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              url
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              actions
            </th>
          </tr>
        </thead>
        <tbody>
          <ProjectTableRowSkeleton />
          <ProjectTableRowSkeleton />
          <ProjectTableRowSkeleton />
          <ProjectTableRowSkeleton />
        </tbody>
      </table>
    </div>
  );
}

export function ProjectTableRowSkeleton() {
  return (
    <tr className="w-full animate-pulse border-b border-gray-100 last-of-type:border-none dark:border-gray-400 [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      {/* project UUID */}
      <td className="relative overflow-hidden whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex items-center gap-3">
          <div className="h-3 w-64 rounded bg-gray-100 dark:bg-gray-500"></div>
        </div>
      </td>
      {/* Name */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-3 w-32 rounded bg-gray-100 dark:bg-gray-500"></div>
      </td>
      {/* Description */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-3 w-80 rounded bg-gray-100 dark:bg-gray-500"></div>
      </td>
      {/* github link */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-3 w-16 rounded bg-gray-100 dark:bg-gray-500"></div>
      </td>
      {/* Url */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-3 w-16 rounded bg-gray-100 dark:bg-gray-500"></div>
      </td>
      {/* Actions */}
      <td className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex justify-end gap-3">
          <div className="h-[38px] w-[38px] rounded bg-gray-100 dark:bg-gray-500"></div>
          <div className="h-[38px] w-[38px] rounded bg-gray-100 dark:bg-gray-500"></div>
        </div>
      </td>
    </tr>
  );
}
