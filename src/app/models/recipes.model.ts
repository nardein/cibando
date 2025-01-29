export interface Recipe {
  _id: any;
  title: string;
  description: string;
  image: string;
  difficulty: number;
  date?: string;
  createdAt?: string;
  published: boolean;
}
