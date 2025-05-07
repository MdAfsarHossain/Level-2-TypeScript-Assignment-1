# What are some differences between interfaces and types in TypeScript?

`interfaces`:
TypeScript interfaces define the structure of objects by specifying property types and method signatures, ensuring consistent shapes and enhancing code clarity.

### Declaring Interfaces

The interface keyword is used to declare an interface. Here is the syntax to declare an interface −

### Syntax

```ts
interface interface_name {}
```

### Example

```ts
interface Person {
  name: string;
  gender: string;
  age: number;
}

const people: Person = {
  name: "Afsar",
  gender: "Male",
  age: 25,
};

console.log(
  `Name: ${people.name}, Age: ${people.age}, Gender: ${people.gender}.`
);
```

- The `Person` interface specifies that any object of type `Person` should have `name`, `age` and `gender` properties, name and gender both of which are strings and age is number.
- The `people` object adheres to the `Person` interface by providing the required properties with appropriate string and number values.

### Output:

```ts
Name: Afsar, Age: 25, Gender: Male.
```

# Types

`type`: A type alias creates a name for any type, including `primitives`, `unions`, and `object` shapes.

### Example

```ts
type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Afsar",
  age: 25,
};

console.log(user);
```

### Output

```ts
{
  name: "Afsar",
  age: 25,
}
```

### Key Difference

<table>
  <thead align="center">
    <tr border: none;>
      <td><b>No</b></td>
      <td><b>Types</b></td>
      <td><b>Interface</b></td>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>1</td>
      <td>A collection of data types.</td>
      <td>A syntactical contract.</td>
    </tr>
    <tr>
    <td>2</td>
      <td>More flexible.</td>
      <td>Less flexible compared to type.</td>
    </tr>
    <tr>
    <td>3</td>
      <td>Uses the type keyword</td>
      <td>Uses the interface keyword.</td>
    </tr>
    <tr>
    <td>4</td>
      <td>Supports creating a new name for a type.</td>
      <td>Provides a way to define entities.</td>
    </tr>
    <tr>
    <td>5</td>
      <td>Does not inherently support the use of an object.</td>
      <td>Supports the use of an object.</td>
    </tr>
  </tbody>
</table>

# What is the use of the keyof keyword in TypeScript? Provide an example.

`keyof`: The `keyof` operator in TypeScript is used to derive new types from an existing object type's keys. It is a TypeScript construct commonly used as a building block in generating advaced types from a source object type.

TypeScript keyof is a trivial type manipulation operator introduced in `v 2.1`. It creates a union of string and numerical literal types from the keys of the source object type. TypeScript keyof typically works in conjunction with other operators such as `extends`, `typeof`, `in`, as and `constructs` like index signature syntax to define sophisticated types that often involve properties of important data entities in an application.

### Example

```ts
interface Person {
  name: string;
  age: number;
  email: string;
}

type PersonKeys = keyof Person;
```
