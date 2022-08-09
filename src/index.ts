import { User } from './models/User';

const user = new User({ name: 'nika', age: 33 });

user.set({ name: 'elena' });

console.log(user.get('name'));
console.log(user.get('age'));
