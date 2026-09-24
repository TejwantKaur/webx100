//  Pick;

interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  password: string;
}

// asi bas ehi allow kerna user nu to update;
type UpdateProps = Pick<User, "name" | "age" | "email">;

//  but now we r passing all 3 to func; bhave user ne 1 e update kerna hove
function updateUser(updated: UpdateProps) {
  // data type
}
updateUser({
  "name": "Highlight",
  "age": 5,
  "email": "tej@gmail.com"
}); // all 3 are required;


// Partial
// make updateprops optional
type UpdatePropsOptional = Partial<UpdateProps>;
function updateUserOptional(updated: UpdatePropsOptional) {
  // data type
}
updateUserOptional({}); // empty v chlega hun;
updateUserOptional({"name": "Hi there!"})
