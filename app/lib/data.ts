import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

import type { Project, Tool } from './definitions';

export async function fetchTools() {
  noStore(); // prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  try {
    // await new Promise((res) => setTimeout(res, 8000));
    const data = await sql<Tool>`
        SELECT
        sc_tools.id,
        sc_tools.name,
        sc_tools.version
        FROM sc_tools`;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the tools');
  }
}

export async function fetchProjects() {
  noStore(); // prevent the response from being cached.
  try {
    console.log('Fetching projects');
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    console.log('Projects fetched!');

    const data = await sql<Project>`
          SELECT 
          p.id, 
          p.name,
          p.description,
          p.github_link, 
          p.url, 
          p.img_url, 
          p.bundler, 
          p.test_runner,
          p.e2e,
          p.frontend_lib, 
          p.fullstack_fram, 
          p.styling, 
          p.component_library, 
          p.database, 
          p.tools
          FROM sc_projects as p`;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the projects.');
  }
}
