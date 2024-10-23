var blogs = [
    {
        title: "Downtown",
        date: "10/16/2024",
        description: "Went downtown to eat some Thai food",
        image: "",
        imageAlt: "",
        slug: "downtown"
    },
    {
        title: "Milestone 1",
        date: "10/19/2024",
        description: "First milestone in H4I bootcamp",
        image: "",
        imageAlt: "",
        slug: "milestone1"
    }
];
var blogContainer = document.getElementById("blog-container");
blogs.forEach(function (blog) {
    //Create different elements
    var blogDiv = document.createElement("div");
    var blogTitle = document.createElement("h1");
    var blogImage = document.createElement("img");
    var blogDescription = document.createElement("p");
    var blogHREF = document.createElement("a");
    //Add text and such to each element
    blogTitle.textContent = blog.title;
    blogImage.src = blog.image;
    blogImage.alt = blog.imageAlt;
    blogDescription.textContent = blog.description;
    //Adds the HREEF to the blogHREF element:  <a href = "...">MORE</a>
    blogHREF.href = "../bootcamp-project-2024/src/blogs/".concat(blog.slug, ".html");
    blogHREF.textContent = "MORE";
    blogDiv.appendChild(blogTitle);
    blogDiv.appendChild(blogImage);
    blogDiv.appendChild(blogDescription);
    blogDiv.appendChild(blogHREF);
    blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(blogDiv); //blogContainer possibly null -> added '?'
});
