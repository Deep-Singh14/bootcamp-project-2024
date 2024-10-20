var blogs = [
    {
        title: "Downtown",
        date: "10/16/2024",
        description: "Went downtown to eat some Thai food",
        image: "",
        imageAlt: "",
        slug: ""
    },
    {
        title: "Milestone 1",
        date: "10/19/2024",
        description: "First milestone in H4I bootcamp",
        image: "",
        imageAlt: "",
        slug: ""
    }
];
var blogContainer = document.getElementById("blog-container");
blogs.forEach(function (blog) {
    var blogDiv = document.createElement("div");
    var blogTitle = document.createElement("h1");
    var blogImage = document.createElement("img");
    var blogDescription = document.createElement("p");
    blogDiv.appendChild(blogTitle);
    blogDiv.appendChild(blogImage);
    blogDiv.appendChild(blogDescription);
    blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(blogDiv); //blogContainer possibly null -> added '?'
});
