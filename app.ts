// const person: {
//   name: string,
//   age: number,
//   hobbies: string[],
//   role: [number, string],
// } = {
//   name: 'yota',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'],
// };

enum Role {
  ADMIN, READ_ONLY, AUTHOR
}

const person = {
  name: 'yota',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

let favoriteActivities: any[];
favoriteActivities = ['Sports', 5];

// person.role = [0, 'member'];

console.log(person.name);

for (const hobbie of person.hobbies){
  console.log(hobbie);
}

if(person.role === Role.ADMIN) {
  console.log('管理者です');
}