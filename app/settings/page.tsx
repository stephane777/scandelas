// export default async function Page() {
//   return <div>{''}</div>;
// }

// Todo

// - Create a form to collect project details
//     - name
//     - technology
//     - description
//     - image/url

// - Create a form to collect a list my ressources
// Settings page should allow the choice to add/update the list of projects along with
// the list of tools.

import { DeleteIcon } from '@/app/ui/icons/DeleteIcon';
import { EditIcon } from '@/app/ui/icons/EditIcon';
import { EyeIcon } from '@/app/ui/icons/EyeIcon';
import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  User,
} from '@nextui-org/react';

// import {columns, users} from "./data";

// const columns = [
//   {name: "Name"}
//   ]
export type Key = string | number;
interface StatusColorMap {
  active: 'success';
  paused: 'danger';
  vacation: 'warning';
}

interface User {
  id: number;
  name: string;
  role: string;
  team: string;
  status: keyof StatusColorMap;
  age: string;
  avatar: string;
  email: string;
}

const columns = [
  { name: 'NAME', uid: 'name' },
  { name: 'ROLE', uid: 'role' },
  { name: 'STATUS', uid: 'status' },
  { name: 'ACTIONS', uid: 'actions' },
];

const users: User[] = [
  {
    id: 1,
    name: 'Tony Reichert',
    role: 'CEO',
    team: 'Management',
    status: 'active',
    age: '29',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    email: 'tony.reichert@example.com',
  },
  {
    id: 2,
    name: 'Zoey Lang',
    role: 'Technical Lead',
    team: 'Development',
    status: 'paused',
    age: '25',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    email: 'zoey.lang@example.com',
  },
  {
    id: 3,
    name: 'Jane Fisher',
    role: 'Senior Developer',
    team: 'Development',
    status: 'active',
    age: '22',
    avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    email: 'jane.fisher@example.com',
  },
  {
    id: 4,
    name: 'William Howard',
    role: 'Community Manager',
    team: 'Marketing',
    status: 'vacation',
    age: '28',
    avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
    email: 'william.howard@example.com',
  },
  {
    id: 5,
    name: 'Kristen Copper',
    role: 'Sales Manager',
    team: 'Sales',
    status: 'active',
    age: '24',
    avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
    email: 'kristen.cooper@example.com',
  },
];

const statusColorMap: StatusColorMap = {
  active: 'success',
  paused: 'danger',
  vacation: 'warning',
};

export default async function Page() {
  // const tools = await fetchTools();

  const renderCell = (user: User, columnKey: Key) => {
    switch (columnKey) {
      case 'name':
        return (
          <User
            avatarProps={{ radius: 'lg', src: user.avatar }}
            description={user.email}
            name={user[columnKey]}
          >
            {user.email}
          </User>
        );
      case 'role':
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{user[columnKey]}</p>
            <p className="text-bold text-default-400 text-sm capitalize">{user.team}</p>
          </div>
        );
      case 'status':
        return (
          <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
            {user[columnKey]}
          </Chip>
        );
      case 'actions':
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-default-400 cursor-pointer text-lg active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-default-400 cursor-pointer text-lg active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-danger cursor-pointer text-lg active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return user['name'];
    }
  };

  return (
    <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === 'actions' ? 'center' : 'start'}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={users}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
