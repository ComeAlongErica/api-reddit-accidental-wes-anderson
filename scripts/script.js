"use strict";
$(document).ready(() => {

    $.get("https://www.reddit.com/r/AccidentalWesAnderson.json?limit=10").then((response) => {
        let posts = response.data.children;

        //populates page from reddit
        for (let post of posts) {
            console.log(post);
            $(".container").append(`
            <section class="card">
                <a href="https://www.reddit.com${post.data.permalink}">
                    <h5>${post.data.title}</h5>
                </a>
                    <img src="${post.data.preview.images["0"].source.url}">
            </section> 
            `);
        }
    }).catch((error) => {
        $(".container").append(`There has been an error. Nothing to see.`);
    });

});