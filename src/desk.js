class Desk {
    constructor(length, width, height, isWhiteboard) {
        this.length = length;
        this.width = width;
        this.height = height;
        this.isWhiteboard = isWhiteboard;
        this.content = '';
    }
    write(content) {
        this.content += content;
    }

    wipe() {
        if (this.isWhiteboard === true) {
            this.content = '';
        } 
    }

}


module.exports = Desk
