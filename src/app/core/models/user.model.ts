export type UserRoles = 'admin' | 'member';

export interface User {
  id: string;
  name: string;
  avatar: string;
  role: UserRoles;
  email: string;
  password: string;
}
