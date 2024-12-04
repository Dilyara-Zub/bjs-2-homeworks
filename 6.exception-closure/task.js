const parseCount = (parseValue) => {
    let parseResult = Number.parseFloat(parseValue);
    if (Number.isNaN(parseResult)) {
        throw new Error('Невалидное значение');
    } return parseResult;
}

const validateCount = (parseValue) => {
    try {
        return parseCount(parseValue);

    } catch (error) {
        return error;
    }
}



class Triangle {
    #perimeter;
    #area;
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (a + b < c || 
            a + c < b ||
            b + c < a) {
                throw new Error('Треугольник с такими сторонами не существует');
            }
    }

    get perimeter() {
        this.#perimeter = (this.a + this.b + this.c);
        return this.#perimeter;
    }

    get area() {
        const p = (this.perimeter / 2); 
        const triangleArea = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))
        return this.#area = Number(triangleArea.toFixed(3));
    }
}

const getTriangle = (a, b, c) => {
    try {
        return new Triangle(a, b, c);
    } catch(error) {
        return {
            get area() {return 'Ошибка! Треугольник не существует'},
            get perimeter() {return 'Ошибка! Треугольник не существует'},
        }
    }
    

}
