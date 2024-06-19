import { fetchProjects } from '@/app/lib/data';

export default async function ProjectsTab() {
  const projects = await fetchProjects();
  return (
    <div className="relative flex justify-center overflow-x-auto">
      <table className="text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
        <thead className="bg-sky-200 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
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
        <tbody className="h-56 overflow-scroll">
          {projects.map((project) => {
            return (
              <tr
                key={project.id}
                className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                >
                  {project.id}
                </th>

                <td className="px-6 py-4">{project.name}</td>
                <td className="px-6 py-4">{project.description}</td>
                <td className="px-6 py-4">
                  {
                    <a
                      href={project.github_link}
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      url
                    </a>
                  }
                </td>
                <td className="px-6 py-4">
                  {
                    <a
                      href={project.url}
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      url
                    </a>
                  }
                </td>
                <td className="space-x-3 px-6 py-4">
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
