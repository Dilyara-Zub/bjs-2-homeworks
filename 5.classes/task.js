class PrintEditionItem {
    #state = 100; 
    type = null;
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
    }

    fix () {
        this.state *= 1.5;
    }

    set state(number) {
        if(number < 0) {
            this.#state  = 0;
        } else if(number > 100) {
            this.#state = 100;
        } else {
           this.#state = number;
        }
    }
    get state() {
        return this.#state;
    }
};

class Magazine extends PrintEditionItem {
    type = 'magazine';
}

class Book extends PrintEditionItem {
    type = 'book';
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
    }
}

class NovelBook extends Book {
    type = 'novel';
}

class FantasticBook extends Book {
    type = 'fantastic';
}

class DetectiveBook extends Book {
    type = 'detective';
}



class Library {
    books = [];
    state;
    constructor(name) {
        this.name = name;
    }

    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        return this.books.find(book => book[type] == value) || null;
    }

    giveBookByName(bookName) {
        const book = this.findBookBy('name', bookName);
        if (book) {
            this.books.splice(this.books.indexOf(book), 1);
        }
        return book;
        }
}