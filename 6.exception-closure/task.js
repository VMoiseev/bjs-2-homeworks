// Задача №1

function parseCount(item) {
  const parsed = Number.parseInt(item);
  if (isNaN(parsed)) { 
    throw new Error ("Невалидное значение");
  }
  return parsed;
}

function validateCount(item) {
  try {
    function parseCount(item) {
      const parsed = Number.parseInt(item);
      if (isNaN(parsed)) { 
        throw new Error ("Невалидное значение");
      }
      return parsed;
    }
    return parseCount(item);

  } catch(error) {
    return error;
  }
}

//Задача №2

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    if (!(a < b + c && b < a + c && c < a + b)) {
      throw new Error ("Треугольник с такими сторонами не существует");
    }
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea() {
    const p = (this.a + this.b + this.c) / 2;
    const S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return Number(S.toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch(error) {
    const errorMessage = "Ошибка! Треугольник не существует";
    return {
      getPerimeter: () => errorMessage,
      getArea: () => errorMessage
    }
  }
}