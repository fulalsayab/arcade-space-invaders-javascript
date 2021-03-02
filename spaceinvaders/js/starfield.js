//  Define the starfield class.
function Starfield() {
    this.fbs = 30;
    this.canvas = null;
    this.width = 0;
    this.height = 0;
    this.minVelocity = 15;
    this.maxVelocity = 30;
    this.stars = 100;
    this.intervalId = 0;
}

Starfield.prototype.initialize = function (div) {
    let self = this;
    // store the dive
    this.containDiv = div;
    self.width = window.innerWidth;
    self.height = window.innerHeight;

    window.addEventListener('resize', function resize(evt) {
        self.width = window.innerWidth;
        self.height = window.innerHeight;
        self.canvas.width = self.width;
        self.canvas.height = self.height;
        self.draw();
    });
    //	Create the canvas.
    let canvas = document.createElement('canvas');
    div.appendChild(canvas);
    this.canvas = canvas;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
};

Starfield.prototype.start = function () {
    //	Create the stars.
    let stars = [];
    for (let i = 0; i < this.stars; i++) {
        Stars[i] = new Stars(Math.random() * this.width, Math.random() * this.height, Math.random() * 3 + 1,
            (Math.random() * (this.maxVelocity - this.minVelocity)) + this.minVelocity);
    }
    this.stars = stars;
    //	Start the timer.
    this.intervalId = setInterval(function () {
        self.update();
        self.draw();
    }, 1000 / this.fps);

    Starfield.prototype.stop = function () {
        clearInterval(this.intervalId);
    };
    Starfield.prototype.update = function () {
        let dt = 1 / this.fbs;
        for (let i = 0; i < this.stars.length; i++) {
            this.stars[i] = new Star(Math.random() * this.width, 0, Math.random() * 3 + 1,
                (Math.random() * (this.maxVelocity - this.minVelocity)) + this.minVelocity);
        }
    };

    Starfield.prototype.draw = function () {
        //	Get the drawing context.
        let ctx = this.canvas.getContext("2d");
        //	Draw the background.
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, this.width, this.height);

        //	Draw stars.
        ctx.fillStyle = '#ffffff';
        for (let i = 0; i < this.stars.length; i++) {
            let star = this.stars[i];
            ctx.fillRect(star.x, star.y, star.size, star.size);
        }
    };

    function Star(x, y, size, velocity) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.velocity = velocity;

    }
}