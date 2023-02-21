import { JwtPayload } from "jwt-decode";

export interface RobotStructure {
  id: string;
  name: string;
  url: string;
  stats: {
    speed: number;
    endurance: number;
    creationDate: string;
  };
}

export type RobotsStructure = RobotStructure[];

export interface UserState {
  id: string;
  username: string;
  token: string;
}

export interface UserStructure extends UserState {
  isLogged: boolean;
}

export interface UserCredentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface CustomTokenPayload extends JwtPayload {
  id: string;
  email: string;
  username: string;
}
