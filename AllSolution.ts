{
  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper || toUpper === undefined) {
      return input.toLocaleUpperCase();
    } else {
      return input.toLocaleLowerCase();
    }
  }

  formatString("Hello");
  formatString("Hello", true);
  formatString("Hello", false);

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

  filterByRating(books);

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    let newArray: T[] = [];

    for (const i of arrays) {
      newArray.push(...i);
    }

    return newArray;
  }

  concatenateArrays(["a", "b"], ["c"]);
  concatenateArrays([1, 2], [3, 4], [5]);

  class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }

    getInfo() {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }

  class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }

    getModel() {
      return `Model: ${this.model}`;
    }
  }

  const myCar = new Car("Toyota", 2020, "Corolla");
  myCar.getInfo();
  myCar.getModel();

  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }

  processValue("hello");
  processValue(10);

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

  getMostExpensiveProduct(products);

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

  getDayType(Day.Monday);
  getDayType(Day.Sunday);

  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      if (n < 0) {
        reject("Error: Negative number not allowed");
      } else {
        setTimeout(() => {
          resolve(n * n);
        }, 1000);
      }
    });
  }

  squareAsync(4).then(console.log);
  squareAsync(-3).catch(console.error);
}
