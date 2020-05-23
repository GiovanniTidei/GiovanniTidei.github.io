var triggerAtY = $('#Skills').offset().top - $(window).outerHeight();

$(window).scroll(function(event) {
    // #target not yet in view
    if (triggerAtY > $(window).scrollTop()) {
        return;
    }


    $(window).one('scroll', function update() {
        var element = document.getElementById("myprogressBar");
        var width = 1;
        var identity = setInterval(scene, 10);

        function scene() {
            if (width >= 95) {
                clearInterval(identity);
            } else {
                width++;
                element.style.width = width + '%';
            }
        }
    });

    // remove this event handler
    $(this).off(event);
})



var triggerAtY = $('#Skills').offset().top - $(window).outerHeight();

$(window).scroll(function(event) {
    // #target not yet in view
    if (triggerAtY > $(window).scrollTop()) {
        return;
    }


    $(window).one('scroll', function update() {
        var element = document.getElementById("myprogressBar2");
        var width = 1;
        var identity = setInterval(scene, 10);

        function scene() {
            if (width >= 95) {
                clearInterval(identity);
            } else {
                width++;
                element.style.width = width + '%';
            }
        }
    });

    // remove this event handler
    $(this).off(event);
})


var triggerAtY = $('#Skills').offset().top - $(window).outerHeight();

$(window).scroll(function(event) {
    // #target not yet in view
    if (triggerAtY > $(window).scrollTop()) {
        return;
    }


    $(window).one('scroll', function update() {
        var element = document.getElementById("myprogressBar3");
        var width = 1;
        var identity = setInterval(scene, 10);

        function scene() {
            if (width >= 45) {
                clearInterval(identity);
            } else {
                width++;
                element.style.width = width + '%';
            }
        }
    });

    // remove this event handler
    $(this).off(event);
})


var triggerAtY = $('#Skills').offset().top - $(window).outerHeight();

$(window).scroll(function(event) {
    // #target not yet in view
    if (triggerAtY > $(window).scrollTop()) {
        return;
    }


    $(window).one('scroll', function update() {
        var element = document.getElementById("myprogressBar4");
        var width = 1;
        var identity = setInterval(scene, 10);

        function scene() {
            if (width >= 60) {
                clearInterval(identity);
            } else {
                width++;
                element.style.width = width + '%';
            }
        }
    });

    // remove this event handler
    $(this).off(event);
})


var triggerAtY = $('#Skills').offset().top - $(window).outerHeight();

$(window).scroll(function(event) {
    // #target not yet in view
    if (triggerAtY > $(window).scrollTop()) {
        return;
    }


    $(window).one('scroll', function update() {
        var element = document.getElementById("myprogressBar5");
        var width = 1;
        var identity = setInterval(scene, 10);

        function scene() {
            if (width >= 85) {
                clearInterval(identity);
            } else {
                width++;
                element.style.width = width + '%';
            }
        }
    });

    // remove this event handler
    $(this).off(event);
})


var triggerAtY = $('#Skills').offset().top - $(window).outerHeight();

$(window).scroll(function(event) {
    // #target not yet in view
    if (triggerAtY > $(window).scrollTop()) {
        return;
    }


    $(window).one('scroll', function update() {
        var element = document.getElementById("myprogressBar6");
        var width = 1;
        var identity = setInterval(scene, 10);

        function scene() {
            if (width >= 95) {
                clearInterval(identity);
            } else {
                width++;
                element.style.width = width + '%';
            }
        }
    });

    // remove this event handler
    $(this).off(event);
})


var triggerAtY = $('#Skills').offset().top - $(window).outerHeight();

$(window).scroll(function(event) {
    // #target not yet in view
    if (triggerAtY > $(window).scrollTop()) {
        return;
    }


    $(window).one('scroll', function update() {
        var element = document.getElementById("myprogressBar7");
        var width = 1;
        var identity = setInterval(scene, 10);

        function scene() {
            if (width >= 95) {
                clearInterval(identity);
            } else {
                width++;
                element.style.width = width + '%';
            }
        }
    });

    // remove this event handler
    $(this).off(event);
})


var triggerAtY = $('#Skills').offset().top - $(window).outerHeight();

$(window).scroll(function(event) {
    // #target not yet in view
    if (triggerAtY > $(window).scrollTop()) {
        return;
    }


    $(window).one('scroll', function update() {
        var element = document.getElementById("myprogressBar8");
        var width = 1;
        var identity = setInterval(scene, 10);

        function scene() {
            if (width >= 65) {
                clearInterval(identity);
            } else {
                width++;
                element.style.width = width + '%';
            }
        }
    });

    // remove this event handler
    $(this).off(event);
})

var counter = 0;
$(window).scroll(function(event) {
    console.log('I\'m expensive', $(window).scrollTop(), ++counter);
});


/*Linear progess barr BasicFunction


$(window).one('scroll', function update() {
    var element = document.getElementById("myprogressBar");
    var width = 1;
    var identity = setInterval(scene, 10);

    function scene() {
        if (width >= 95) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
        }
    }
});

$(window).one('scroll', function update() {
    var element = document.getElementById("myprogressBar2");
    var width = 1;
    var identity = setInterval(scene, 10);

    function scene() {
        if (width >= 95) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
        }
    }
});

$(window).one('scroll', function update() {
    var element = document.getElementById("myprogressBar3");
    var width = 1;
    var identity = setInterval(scene, 10);

    function scene() {
        if (width >= 45) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
        }
    }
});

$(window).one('scroll', function update() {
    var element = document.getElementById("myprogressBar4");
    var width = 1;
    var identity = setInterval(scene, 10);

    function scene() {
        if (width >= 60) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
        }
    }
});

$(window).one('scroll', function update() {
    var element = document.getElementById("myprogressBar5");
    var width = 1;
    var identity = setInterval(scene, 10);

    function scene() {
        if (width >= 85) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
        }
    }
});

$(window).one('scroll', function update() {
    var element = document.getElementById("myprogressBar6");
    var width = 1;
    var identity = setInterval(scene, 10);

    function scene() {
        if (width >= 95) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
        }
    }
});

$(window).one('scroll', function update() {
    var element = document.getElementById("myprogressBar7");
    var width = 1;
    var identity = setInterval(scene, 10);

    function scene() {
        if (width >= 95) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
        }
    }
});

$(window).one('scroll', function update() {
    var element = document.getElementById("myprogressBar8");
    var width = 1;
    var identity = setInterval(scene, 10);

    function scene() {
        if (width >= 65) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
        }
    }
});







/*FINE Linear progess barr*/

$(window).one('scroll', function() {

});