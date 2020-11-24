const person: {
  name: string,
  age: number,
  hobbies: string[],
  role: [number, string],
} = {
  name: 'yota',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
};


let favoriteActivities: string[];
favoriteActivities = ['Sports'];

// person.role = [0, 'member'];

console.log(person.name);

for (const hobbie of person.hobbies){
  console.log(hobbie);
}