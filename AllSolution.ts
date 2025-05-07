{
  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper || toUpper === undefined) {
      return input.toLocaleUpperCase();
    } else {
      return input.toLocaleLowerCase();
    }
  }

  console.log(formatString("Hello")); // Output: "HELLO"
  console.log(formatString("Hello", true)); // Output: "HELLO"
  console.log(formatString("Hello", false)); // Output: "hello"

  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    const newArray = items?.filter((item) => item.rating >= 4.0);
    return newArray;
  }

  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
  ];

  console.log(filterByRating(books));

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    let newArray: T[] = [];

    for (const i of arrays) {
      newArray.push(...i);
    }

    return newArray;
  }

  console.log(concatenateArrays(["a", "b"], ["c"])); // Output: ["a", "b", "c"]
  console.log(concatenateArrays([1, 2], [3, 4], [5])); // Output: [1, 2, 3, 4, 5]

  class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }

    getInfo() {
      console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
  }

  class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }

    getModel() {
      console.log(`Model: ${this.model}`);
    }
  }

  const myCar = new Car("Toyota", 2020, "Corolla");
  myCar.getInfo(); // Output: "Make: Toyota, Year: 2020"
  myCar.getModel(); // Output: "Model: Corolla"

  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }

  console.log(processValue("hello")); // Output: 5
  console.log(processValue(10)); // Output: 20

  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null;
    }

    let mostExpensiveProduct = products[0];
    for (const product of products) {
      if (product.price > mostExpensiveProduct.price) {
        mostExpensiveProduct = product;
      }
    }
    return mostExpensiveProduct;
  }

  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
  ];

  console.log(getMostExpensiveProduct(products));
  console.log(getMostExpensiveProduct([]));

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    switch (day) {
      case Day.Saturday:
      case Day.Sunday:
        return "Weekend";
      default:
        return "Weekday";
    }
  }

  console.log(getDayType(Day.Monday)); // Output: "Weekday"
  console.log(getDayType(Day.Sunday)); // Output: "Weekend"
  console.log(getDayType(Day.Monday)); // Output: "Weekday"
  console.log(getDayType(Day.Tuesday)); // Output: "Weekday"
  console.log(getDayType(Day.Saturday)); // Output: "Weekend"
  console.log(getDayType(Day.Sunday)); // Output: "Weekend"

  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n < 0) {
          reject("Error: Negative number not allowed");
        } else {
          resolve(n * n);
        }
      }, 1000);
    });
  }
  squareAsync(4).then(console.log); // Output after 1s: 16
  squareAsync(-3).catch(console.error); // Output: Error: Negative number not allowed
}
