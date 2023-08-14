import create from "./httpsService";

export interface User {
  id: number;
  name: string;
  username: string;
}

export default create("/users");
