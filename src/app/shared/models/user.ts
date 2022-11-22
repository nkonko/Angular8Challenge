import { Skill } from "./skill";

export interface User {
  id: string;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  birthday: any;
  password: string;
  role: string;
  skills: Skill[];
}
