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
    // await new Promise((resolve) => setTimeout(resolve, 3000));

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

const ITEMS_PER_PAGE = 5;
export async function fetchToolsPages(query: string) {
  noStore();
  try {
    const count = await sql`SELECT COUNT(*)
    FROM sc_tools as t
    WHERE
      t.name ILIKE ${`%${query}%`} OR
      t.version ILIKE ${`%${query}%`}
     
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of tools.');
  }
}

export async function fetchFilteredTools(query: string, currentPage: number) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const tools = await sql<Tool>`
       SELECT
        t.id,
        t.name,
        t.version
        FROM sc_tools as t
      WHERE
        t.name ILIKE ${`%${query}%`} OR
        t.version ILIKE ${`%${query}%`}
      ORDER BY t.name DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return tools.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch tools.');
  }
}

export async function fetchToolById(id: string) {
  noStore();
  try {
    const data = await sql<Tool>`
      SELECT
        t.id,
        t.name,
        t.version
      FROM sc_tools as t
      WHERE t.id = ${id}
    `;
    const tool = data.rows;

    return tool[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error(`Failed to fetch tool with id: ${id}.`);
  }
}

export async function fetchProjectById(id: string) {
  noStore();
  try {
    const data = await sql<Project>`
      SELECT
       *
      FROM sc_projects as p
      WHERE p.id = ${id}
    `;
    const project = data.rows;

    return project[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error(`Failed to fetch project with id: ${id}.`);
  }
}

export async function getCodeWarsProfile() {
  try {
    const res = await fetch(`${process.env.CODEWARS_URL}/${process.env.CODEWARS_USER}`, {
      cache: 'no-cache',
    });
    if (!res.ok) {
      throw new Error(`Fetching codewars profile failed with status:${res.status}`);
    }
    return res.json();
  } catch (error) {
    console.error(error);
    console.error('Failed to load data from codewars');
    throw new Error('Failed to fetch codewars profile');
  }
}
