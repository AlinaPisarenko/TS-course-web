import { User } from './models/User';

const user = new User({ name: 'alina', age: 30 });

user.save();
