var container = document.getElementsByClassName('b-container')[0];

/* changeableContainer */

var colorContainer = {
 
    // element of HTML, which should be updated
    element: document.getElementsByClassName('b-container__results')[0],

    // updates the color on the screen
    update: function (color) {
        this.element.style.backgroundColor = color;

        if (color === 'blue') {
        this.element.style.color = 'white';
        } else {
        this.element.style.color = 'black';
        }
    }
};

/* ConcreteMediator */

var mediator = {
    // handler of user actions
    click: function (e) {
        e = e || window.event;   // IE
        
        if (e.target.nodeName === "BUTTON") {
            var color = e.target.getAttribute('data-color');
            colorContainer.update(color);
            return;
        }
    }
};

/* starting */

var Application = function () {
    this.run = function () {
        // Start!
        container.onclick = mediator.click;
    }
};

var watcher = new Application;
watcher.run();
