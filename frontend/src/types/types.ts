export interface IUser {
  username: string;
  email: string;
  password: string;
}
export interface IUserCharacter {
  user: string;
  character: number;
}
export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}
export interface ICharacters {
  characters: ICharacter[];
}
