import type {
  CertificateProps,
  CompletionProps,
} from '@/app/ui/Home/CertificatesAndCompletions/Certificates';

export const certificate_data: CertificateProps[] = [
  {
    heading: 'Querying Microsoft SQL Server 2012/2014',
    text: 'Querying Microsoft SQL Server 2012/2014 validates the skills and knowledge necessary to create database objects, work with and modify data, as well as troubleshoot and optimize queries.',
    href: 'https://www.credly.com/badges/802f1d9c-a6bf-4e30-9d8d-375acd9ba6e4/embedded',
    list: ['Create database object', 'Work with data', 'Modify data', 'Troubleshoot and optimize'],
  },
];

export const completion_data: CompletionProps[] = [
  {
    heading: 'Type transformation',
    href: 'https://www.totaltypescript.com/workshops/type-transformations',
    list: [
      'Inference Basics',
      'Unions and Indexing',
      'Template Literals',
      'Type Helpers',
      'Conditional Types and Infer',
      'Mapped Types',
      'Challenges',
    ],
    src: '/certificate_type_transformation.png',
    alt: 'Typescript Generic workshop completion certificate',
    width: 360,
    height: 0,
    zoomLevel: 1.8,
  },
  {
    heading: 'Generics',
    href: 'https://www.totaltypescript.com/workshops/typescript-generics',
    list: [
      'Intro to Generics',
      'Passing Types Arguments',
      'Advanced Generics',
      'Function Overloads',
      'Challenges',
    ],
    src: '/certificate_type_generic.png',
    alt: 'Typescript Generic workshop completion certificate',
    width: 360,
    height: 0,
    zoomLevel: 1.8,
  },
  {
    heading: 'Advanced Typescript Patterns',
    href: 'https://www.totaltypescript.com/workshops/advanced-typescript-patterns',
    list: [
      'Branded Types',
      'Globals',
      'Type Predicates and Assertion Functions',
      'Classes',
      'External Libraries',
      'Identity Functions',
      'Challenges',
    ],
    src: '/certificate_advanced_pattern.png',
    alt: 'Advanced Typescript Patterns workshop',
    width: 360,
    height: 0,
    zoomLevel: 1.8,
  },
];
