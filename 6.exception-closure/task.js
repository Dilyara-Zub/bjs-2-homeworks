const parseCount = (parseValue) => {
    if (Number.isNaN(Number.parseFloat(parseValue))) {
        const errorMessage = 'Невалидное значение';
        throw new Error(errorMessage);
    }
    return Number.parseFloat(parseValue);
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
        if (this.a + this.b < this.c || 
            this.a + this.c < this.b ||
            this.b + this.c < this.a) {
                const errorMessage = 'Треугольник с такими сторонами не существует';
                throw new Error(errorMessage);
            }
    }

    get perimeter() {
        this.#perimeter = (this.a + this.b + this.c);
        return this.#perimeter;
    }

    get area() {
        const p = (this.#perimeter / 2); 
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
