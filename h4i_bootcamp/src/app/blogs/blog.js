"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var blogs = [
    {
        title: "Downtown",
        date: "10/16/2024",
        description: "Went downtown to eat some Thai food",
        image: "",
        imageAlt: "Image of Downtown",
        slug: "downtown",
    },
    {
        title: "Milestone 1",
        date: "10/19/2024",
        description: "First milestone in H4I bootcamp",
        image: "",
        imageAlt: "Milestone 1 Image",
        slug: "milestone1",
    },
];
document.addEventListener("DOMContentLoaded", function () {
    var blogContainer = document.getElementById("blog-container");
    if (blogContainer) {
        blogs.forEach(function (blog) {
            var blogDiv = document.createElement("div");
            var blogTitle = document.createElement("h1");
            var blogImage = document.createElement("img");
            var blogDescription = document.createElement("p");
            var blogHREF = document.createElement("a");
            blogTitle.textContent = blog.title;
            blogImage.src = blog.image || "placeholder.jpg";
            blogImage.alt = blog.imageAlt;
            blogDescription.textContent = blog.description;
            blogHREF.href = "src/app/blogs/".concat(blog.slug, ".html");
            blogHREF.textContent = "MORE";
            blogDiv.appendChild(blogTitle);
            blogDiv.appendChild(blogImage);
            blogDiv.appendChild(blogDescription);
            blogDiv.appendChild(blogHREF);
            blogContainer.appendChild(blogDiv);
        });
    }
    else {
        console.error("Blog container not found!");
    }
});
exports.default = blogs;
