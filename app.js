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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'yota',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
var favoriteActivities;
favoriteActivities = ['Sports'];
// person.role = [0, 'member'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobbie = _a[_i];
    console.log(hobbie);
}
if (person.role === Role.ADMIN) {
    console.log('管理者です');
}
