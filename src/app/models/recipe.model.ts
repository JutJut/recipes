import { Difficulty } from './difficulty';

export interface Recipe {
  cookingTime: number;
  difficulty: Difficulty;
  imageUrl: string;
  ingredients: string[];
  instructions: string;
  isBookmarked: boolean;
  name: string;
  preparationTime: number;
}
