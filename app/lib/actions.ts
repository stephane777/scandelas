// mark all the exported functions within the file as server functions.
'use server';

// Behind the scenes, Server Actions create a POST API endpoint.
//  This is why you don't need to create API endpoints manually when using Server Actions.

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { z } from 'zod';

const ToolFormSchema = z.object({
  id: z.string(),
  name: z.string(),
  version: z.string(),
});

const ProjectFormSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  github_link: z.string().url(),
  url: z.string().url({ message: 'Invalid url' }),
  img_url: z.string().url(),
  bundler: z.string().nullable(),
  test_runner: z.string().nullable(),
  e2e: z.string().nullable(),
  frontend_lib: z.string().nullable(),
  fullstack_fram: z.string().nullable(),
  styling: z.string().nullable(),
  component_library: z.string().nullable(),
  database: z.string().nullable(),
  tools: z.string().nullable(),
});

const CreateTool = ToolFormSchema.omit({ id: true });
const CreateProject = ProjectFormSchema.omit({ id: true });
const UpdateTool = ToolFormSchema.omit({ id: true });
const UpdateProject = ProjectFormSchema.omit({ id: true });

// This is temporary until @types/react-dom is updated
export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function createTool(formData: FormData) {
  const { name, version } = CreateTool.parse({
    name: formData.get('tool'),
    version: formData.get('version'),
  });
  try {
    await sql`
      INSERT INTO sc_tools (name, version)
      VALUES (${name},${version})
      `;
  } catch (error) {
    return { message: `Database Error: Failed to create tool ${name}` };
  }
  revalidatePath('settings/tools');
  redirect('/settings/tools');
}

export async function createProject(formData: FormData) {
  {
    /** Tip: If you're working with forms that have many fields,
         you may want to consider using the entries() method with JavaScript's Object.fromEntries().
         For example: const rawFormData = Object.fromEntries(formData.entries()) */
  }
  console.dir(Object.fromEntries(formData.entries()));
  const {
    name,
    description,
    github_link,
    url,
    img_url,
    bundler,
    test_runner,
    e2e,
    frontend_lib,
    fullstack_fram,
    styling,
    component_library,
    database,
    tools,
  } = CreateProject.parse(Object.fromEntries(formData.entries()));
  try {
    await sql`
      INSERT INTO sc_projects (name, description, github_link, url, img_url, bundler, test_runner, e2e, frontend_lib, fullstack_fram, styling, component_library, database, tools)
      VALUES (${name}, ${description}, ${github_link}, ${url}, ${img_url}, ${bundler || null}, ${test_runner || null}, ${e2e || null}, ${frontend_lib || null}, ${fullstack_fram || null}, ${styling || null}, ${component_library || null}, ${database || null}, ${tools || null})
      `;
  } catch (error) {
    return { message: `Database Error: Failed to create project ${name}` };
  }
  revalidatePath('/settings/projects');
  redirect('/settings/projects');
}

export async function updateTool(id: string, formData: FormData) {
  const { name, version } = UpdateTool.parse({
    name: formData.get('tool'),
    version: formData.get('version'),
  });
  try {
    await sql`
    UPDATE sc_tools
    SET  name = ${name}, version = ${version}
    WHERE id = ${id}
  `;
  } catch (error) {
    return { message: `Database Error: Failed to update tool ${name}` };
  }

  revalidatePath('/settings/tools');
  redirect('/settings/tools');
}

export async function updateProject(id: string, formData: FormData) {
  console.log('updateProject id: ', id);
  console.dir('formData: ', formData);
  const {
    name,
    description,
    github_link,
    url,
    img_url,
    bundler,
    test_runner,
    e2e,
    frontend_lib,
    fullstack_fram,
    styling,
    component_library,
    database,
    tools,
  } = UpdateProject.parse({
    name: formData.get('name'),
    description: formData.get('description'),
    github_link: formData.get('github_link'),
    url: formData.get('url'),
    img_url: formData.get('img_url'),
    bundler: formData.get('bundler'),
    test_runner: formData.get('test_runner'),
    e2e: formData.get('e2e'),
    frontend_lib: formData.get('frontend_lib'),
    fullstack_fram: formData.get('fullstack_fram'),
    styling: formData.get('styling'),
    component_library: formData.get('component_library'),
    database: formData.get('database'),
    tools: formData.get('tools'),
  });

  try {
    await sql`
      UPDATE sc_projects
      SET name = ${name},
      description = ${description},
      github_link = ${github_link},
      url = ${url},
      img_url = ${img_url},
      bundler = ${bundler || null},
      test_runner = ${test_runner || null},
      e2e = ${e2e || null},
      frontend_lib = ${frontend_lib || null},
      fullstack_fram =${fullstack_fram || null},
      styling = ${styling || null},
      component_library = ${component_library || null} ,
      database = ${database || null},
      tools= ${tools || null}
      WHERE id = ${id}
    `;
  } catch (error) {
    return { message: `Database Error: Failed to update project: ${name}` };
  }

  revalidatePath('/settings/projects');
  redirect('/settings/projects');
}

export async function deleteTool(id: string) {
  // throw new Error('Failed Failed Failed');
  try {
    await sql`DELETE FROM sc_tools WHERE id =${id}`;
  } catch (error) {
    return { message: `Database Error: Failed to delete tool with id: ${id}` };
  }
  revalidatePath('/settings/tools');
}

export async function deleteProject(id: string) {
  try {
    await sql`DELETE FROM sc_projects WHERE id=${id}`;
  } catch (error) {
    return { message: `Database Error: Failed to delete project with id ${id}` };
  }
  revalidatePath('/settings/projects');
}
