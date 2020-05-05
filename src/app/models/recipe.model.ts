import { Difficulty } from './difficulty';

export interface Recipe {
  id: string;
  cookingTime: number;
  difficulty: Difficulty;
  imageUrl: string;
  ingredients: string[];
  instructions: string;
  isBookmarked: boolean;
  name: string;
  preparationTime: number;
}
