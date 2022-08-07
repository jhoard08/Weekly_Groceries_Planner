export interface IShared {
    children: React.ReactNode;
    className: string;
}

export interface IRecipe {
    id: number;
    favorite: boolean;
    name: string;
    remake: boolean;
    lastMeal: string;
}

export const fakeRecipeData = [
    {
        id: 1,
        favorite: false,
        name: 'Chicken Casserole',
        remake: true,
        lastMeal: 'mm-dd-yyyy'
    },
    {
        id: 2,
        favorite: true,
        name: 'Lasagna',
        remake: true,
        lastMeal: 'mm-dd-yyyy'
    },
    {
        id: 3,
        favorite: false,
        name: 'Pizza',
        remake: false,
        lastMeal: 'mm-dd-yyyy'
    }
];
