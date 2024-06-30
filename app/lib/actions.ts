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
  name: z.string({ invalid_type_error: 'Please enter a valid name' }).min(1),
  version: z.string({ invalid_type_error: 'Please envter a valid version format' }).min(3).max(8),
});

const ProjectFormSchema = z.object({
  id: z.string(),
  name: z.string({ invalid_type_error: 'Please enter a project name' }).min(1),
  description: z.string({ invalid_type_error: 'Please enter a project name' }).min(10),
  github_link: z.string({ invalid_type_error: 'Please enter a valid github link' }).url(),
  url: z.string({ invalid_type_error: 'Please enter a valid url' }).url(),
  img_url: z.string({ invalid_type_error: 'Please enter a valid url' }).url(),
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
export type StateTool = {
  errors?: {
    name?: string[];
    version?: string[];
  };
  message?: string | null;
};

export type StateProject = {
  message?: string | null;
  errors?: {
    name?: string[];
    description?: string[];
    github_link?: string[];
    url?: string[];
    img_url?: string[];
    bundler?: string[];
    test_runner?: string[];
    e2e?: string[];
    frontend_lib?: string[];
    fullstack_fram?: string[];
    styling?: string[];
    component_library?: string[];
    database?: string[];
    tools?: string[];
  };
};

export async function createTool(prevState: StateTool, formData: FormData) {
  // const { name, version } = CreateTool.safeParse({
  const validatedFields = CreateTool.safeParse({
    name: formData.get('tool'),
    version: formData.get('version'),
  });

  console.dir(validatedFields);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create tool.',
    };
  }

  const { name, version } = validatedFields.data;

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

export async function createProject(prevState: StateProject, formData: FormData) {
  {
    /** Tip: If you're working with forms that have many fields,
         you may want to consider using the entries() method with JavaScript's Object.fromEntries().
         For example: const rawFormData = Object.fromEntries(formData.entries()) */
  }

  const validatedFields = CreateProject.safeParse(Object.fromEntries(formData.entries()));

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Project.',
    };
  }

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
  } = validatedFields.data;

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

export async function updateTool(id: string, prevState: StateTool, formData: FormData) {
  const validatedFields = UpdateTool.safeParse({
    name: formData.get('tool'),
    version: formData.get('version'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Project.',
    };
  }
  const { name, version } = validatedFields.data;

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

export async function updateProject(id: string, prevState: StateProject, formData: FormData) {
  const validatedFields = UpdateProject.safeParse({
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

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Project.',
    };
  }
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
  } = validatedFields.data;

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

  /*   Attempt to delete a tool which is referenced in a master table won't trigger an error from @vercel/postgres
  it will return a 200 status and deletion is aborted
  
  */

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
