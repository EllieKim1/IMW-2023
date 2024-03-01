console.log("Hello World!");


$(document).ready(function() {
    const numDots = 100;
    const colors = ["rgba(250, 255, 182, 0.8)", "rgba(210, 255, 206, 0.8)", "rgba(255, 206, 254, 0.8)", "rgba(173, 221, 255, 0.8)"]; 
    
    for (let i = 0; i < numDots; i++) {
        const colorIndex = i % 4; 
        $("body").append(`<div class="dots" style="width: 6vw; height: 6vw; background-color: ${colors[colorIndex]}; position: absolute; top: ${Math.random() * 100}vh; left: ${Math.random() * 100}vw;"></div>`);
    }

    $(".dots").hide().fadeIn(2000);

    $(".dots").click(function() {
        const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        $("body").css("background-color", randomColor);
    });


    $("p").text("Click the dots to change the background color!");
});