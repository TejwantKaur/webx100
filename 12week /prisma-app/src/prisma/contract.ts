import { defineContract } from '@prisma/orm-postgres/contract-builder';

export const contract = defineContract({}, ({ field, model, rel }) => {
  const User = model('User', {
  fields: {
    id: field.id.uuidv7String(),
    username: field.text().unique(),
    password: field.text(),
    firstName: field.text().optional(),
    lastName: field.text().optional(),
    email: field.text().unique(),
  },
});

  const Todo = model('Todo', {
    fields: {
      id: field.id.uuidv7String(),
      title: field.text(),
      description: field.text().optional(),
      done: field.boolean().default(false),
      user_id: field.uuidString(),
    },
  });

  return {
    models: {
      User: User.relations({
        todos: rel.hasMany(Todo, { by: 'user_id' }),
      }),
      Todo: Todo.relations({
        author: rel.belongsTo(User, { from: 'user_id', to: 'id' }),
      }),
    },
  };
});

// npm run contract:emit 

// One User can have many Posts. 
// User
// Tejwant
//    │
//    ├── Post 1
//    ├── Post 2
//    └── Post 3