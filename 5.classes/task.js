// Задача № 1

class PrintEditionItem {

  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
  }

  set state(number) {
    if(number < 0) {
        this._state = 0;
    } else if(number > 0) {
        this._state = 100;
    } else {
        this._state = state;
    }
  }

  get state() {
    return this._state;
  }
}

const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100

class Magazine extends PrintEditionItem {

  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {

  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends Book {
    
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "novel";
    this.author = author;
  }
}

class FantasticBook extends Book {
    
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "fantastic";
    this.author = author;
  }
}

class DetectiveBook extends Book {
    
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "detective";
    this.author = author;
  }
}

const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state);
picknick.fix();
console.log(picknick.state);

// Задача № 2

class Library {

  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if(book.state > 30) {
      this.books.push(book);
    } else {
      console.log("Извините, состояние вашей книги крайне низкое");
    }
  }

  findBookBy(type, value) {
    for (let key of this.books) {
      if (value === key[type]) {
        return key;
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let key of this.books) {
      if (bookName === key.name) {
        this.books.splice(key.indexOf, 1);
        return key;
      } 
    }
    return null;
  }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

// Задача № 3

class Student {
    constructor (name) {
      this.name = name;
    }
  
    addGrade(mark, subject) {
      if(mark > 0 && mark <= 5) {
        if (this.marks === undefined) {
          this.marks = [];
          if (this.marks[subject] === undefined) {
            this.marks[subject] = [mark];
          } else {
            this.marks[subject].push(mark);
          }
        } 
      } else {
        console.log('Ошибка, оценка должна быть числом от 1 до 5');
      }
    }   
      
    getAverageBySubject(subject) {
      if (this.marks[subject] === undefined) {
        console.log('Несуществующий предмет')
      } else {
        let sum = 0;
      
        for(let i = 0; i < this.marks[subject].length; i++) {
          sum += this.marks[subject][i];
        }
                  
        console.log(`Средний балл по предмету ${subject}: ` + (sum / this.marks[subject].length));
        return sum / this.marks[subject].length;
      }
    }
  
    getTotalAverage() {
      if(this.marks.length === 0) {
        console.log('Ошибка, отсутствуют оценки для расчета');
      } else {
        let sum = 0;
        let count = 0;
        for (let item in this.marks) {
          sum += this.getAverageBySubject(item);
          count += 1;
        }
  
        console.log("Средний балл по всем предметам: " + (sum / count));
        return sum / count;    
      }
    }
  
    getAverage() {
      let count = 0;
      let sum = 0;
      for(let subject in this.marks) {
        sum += this.getAverageBySubject(subject);
        count++;
      }
      if(count > 0) {
        let avg = sum/count.toFixed(2);
        console.log(`Средний балл по всем предметам ${avg}`);
        return avg;
      } else {
        console.log("Нет оценок");
        return null;
      }
    }
  
    exclude(reason) {
      if(this.subject !== undefined) { 
        delete this.subject;
      }
      if(this.marks !== undefined) { 
        delete this.marks;
      }
      this.excluded = reason;
    }
  }