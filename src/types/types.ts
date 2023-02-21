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
  email: string;
}

export interface UserStructure extends UserState {
  isLogged: boolean;
}
