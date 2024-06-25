import { fetchFilteredTools } from '@/app/lib/data';
import { DeleteTool, UpdateTool } from '@/app/ui/Settings/Buttons';

export default async function ToolsTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const tools = await fetchFilteredTools(query, currentPage);

  return (
    <div className="relative flex justify-center overflow-x-auto">
      <table className="w-[800px] text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
        <thead className="bg-sky-200 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr className="flex w-full">
            <th className="w-6/12 p-3">Tools UUID</th>
            <th className="w-3/12 p-3">names</th>
            <th className="w-3/12 p-3">versions</th>
            <th className="flex w-3/12 justify-center p-3">actions</th>
          </tr>
        </thead>

        <tbody className="bg-grey-light flex h-[14.5rem] w-full flex-col overflow-y-auto">
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
                <td className="flex w-3/12 justify-center space-x-3 p-3">
                  <UpdateTool id={tool.id} />
                  <DeleteTool id={tool.id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
