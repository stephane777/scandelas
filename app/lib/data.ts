import { sql } from '@vercel/postgres';

import type { Tools } from './definitions';

export async function fetchTools() {
  // noStore();
  try {
    const data = await sql<Tools>`
        SELECT sc_tools.id, sc_tools.name, sc_tools.version
        FROM sc_tools`;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest invoices.');
  }
}
