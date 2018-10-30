"use strict";
$(document).ready(() => {
    
    $.get("https://www.reddit.com/r/AccidentalWesAnderson/").then((response) => {
    console.log(response);
    });

});