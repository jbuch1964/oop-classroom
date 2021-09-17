class Marker {
    constructor(size, color, remainingInk) {
        this.size = size;
        this.color = color;
        this.remainingInk = remainingInk;
    }

    write(change) {
        let change = change.replace(/\s+/g, '');
        this.remainingInk -= change.length;
        if (this.remainingInk === 3) {
               change = 
        }
        return change;
    }
  
}

module.exports = Marker
