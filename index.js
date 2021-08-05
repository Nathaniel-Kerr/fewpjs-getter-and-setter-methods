class Circle {
    constructor(radius){
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    get circumference() {
        let diameter = this.radius * 2;
        return diameter * 3.14;
    }

    get area() {
        let radiusSq = this.radius * this.radius;
        return 3.14 * radiusSq;
    }

    set diameter(diameter) {
        return this.radius = diameter / 2;
    }

    set circumference(circumference) {
        return this.radius = (circumference / 3.14) / 2;
    }

    set area(area) {
        return this.radius = Math.sqrt(area / Math.PI);
    }
}