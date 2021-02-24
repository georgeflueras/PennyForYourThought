export interface Thought {
  username: string;
  date: string;
  content: string;
  likedBy: string[];
  totalPennies: number;
}

export interface User {
  name: string;
  email: string;
  password: string;
}