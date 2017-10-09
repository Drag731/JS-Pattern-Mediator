var buttonRed = document.getElementsByClassName('container__button_red');
var buttonGreen = document.getElementsByClassName('container__button_green');
var buttonBlue = document.getElementsByClassName('container__button_blue');
var buttonYellow = document.getElementsByClassName('container__button_yellow');
var container = document.getElementsByClassName('b-container')[0];
/* Buttons */

var Button = function (color) {
    this.color = color;
};
Button.prototype.change = function () {
    mediator.changeColor.call(this);
};

/* changeableContainer */

var colorContainer = {
 
    // element of HTML, which should be updated
    element: document.getElementsByClassName('b-container__results')[0],

    // updates the color on the screen
    update: function (color) {
        this.element.style.backgroundColor = color;

        if (color === 'Blue') {
        this.element.style.color = 'white';
        } else {
        this.element.style.color = 'black';
        }
    }
};

/* ConcreteMediator */

var mediator = {

    // all buttons
    buttons: {},
 
    // initialization
    setup: function () {
        var buttons = this.buttons;
        buttons.red = new Button('Red');
        buttons.green = new Button('Green');
        buttons.blue = new Button('Blue');
        buttons.yellow = new Button('Yellow');
    },
 
    // updates the color, if user click on the button
    changeColor: function () {
        var color = this.color;
        colorContainer.update(color);
    },
 
    // handler of user actions
    click: function (e) {
        e = e || window.event;   // IE
        
        if (~[].slice.call(buttonRed).indexOf(e.target)) { // color "red"
            mediator.buttons.red.change();
            return;
        }
        if (~[].slice.call(buttonGreen).indexOf(e.target)) { // color "green"
            mediator.buttons.green.change();
            return;
        }
        if (~[].slice.call(buttonBlue).indexOf(e.target)) { // color "blue"
            mediator.buttons.blue.change();
            return;
        }
        if (~[].slice.call(buttonYellow).indexOf(e.target)) { // color "yellow"
            mediator.buttons.yellow.change();
            return;
        }
    }
};

/* starting */

var Application = function () {
    this.run = function () {
        // Start!
        mediator.setup();
        container.onclick = mediator.click;
    }
};

var watcher = new Application;
watcher.run();