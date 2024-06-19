export type Tool = {
  id: string;
  name: string;
  version: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  github_link: string;
  url: string;
  img_url?: string;
  bundler?: string;
  test_runner?: string;
  e2e?: string;
  frontend_lib?: string;
  fullstack_fram?: string;
  styling?: string;
  component_library?: string;
  database?: string;
  tools?: string;
};

// CREATE TABLE sc_projects (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       name VARCHAR(50) NOT NULL,
//       description VARCHAR(255) NOT null,
//       github_link VARCHAR(60) NOT null,
//       url VARCHAR(60) NOT null,
//       img_url VARCHAR(60),
//       bundler UUID REFERENCES sc_tools (id),
//       test_runner UUID REFERENCES sc_tools (id),
//       e2e UUID REFERENCES sc_tools (id),
//       frontend_lib UUID REFERENCES sc_tools (id),
//       fullstack_fram UUID REFERENCES sc_tools (id),
//       styling UUID REFERENCES sc_tools (id),
//       component_library UUID REFERENCES sc_tools (id),
//       database UUID REFERENCES sc_tools (id),
//       tools UUID REFERENCES sc_tools (id)
// );

// insert into sc_projects (
//     name, description, github_link, url, bundler, test_runner, e2e, frontend_lib, styling, component_library
// ) values (
//     'time playground',
//     'A compilation of small project.',
//     'https://github.com/stephane777/timeplayground',
//     'https://github.com/stephane777/timeplayground',
//    'aa507a9e-3245-4d40-936f-96519c443bfc',
//    'dfd99158-17cf-4fde-a922-3945889b4663',
//    'fc492de0-4209-423e-9bd9-b4bf203dc1a5',
//    '0d042c37-8594-4ffa-b53c-248f6248090a',
//    '3aca7d25-fdd6-4110-aa6d-56953b4ff3d2',
//    '15af2430-047b-42a3-a3c7-dafab6511a40'
// );
