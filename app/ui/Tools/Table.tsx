import { fetchFilteredTool } from '@/app/lib/data';

export default async function ToolsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  //   const tools = await fetchTools();
  const tools = await fetchFilteredTool(query, currentPage);

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
          {tools.map((tool) => {
            return (
              <tr
                key={tool.id}
                className="flex w-full border-b bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <th
                  scope="row"
                  className="w-6/12 whitespace-nowrap p-3 font-medium text-gray-900 dark:text-white"
                >
                  {tool.id}
                </th>

                <td className="flex w-3/12 justify-start p-3">{tool.name}</td>
                <td className="flex w-3/12 justify-start p-3">{tool.version}</td>
                <td className="flex w-3/12 justify-start space-x-3 p-3">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
