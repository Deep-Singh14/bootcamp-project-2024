type Blog = {
    title: string
    date: string
    description: string
    image: string
    imageAlt: string
    slug: string
}; 

const blogs: Blog[] = [
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
]


const blogContainer = document.getElementById("blog-container")

blogs.forEach(blog => {
    //Create different elements
    const blogDiv = document.createElement("div")
    const blogTitle = document.createElement("h1")
    const blogImage = document.createElement("img")
    const blogDescription = document.createElement("p")
    const blogHREF = document.createElement("a")

    //Add text and such to each element
    blogTitle.textContent = blog.title;
    blogImage.src = blog.image;
    blogImage.alt = blog.imageAlt;
    blogDescription.textContent = blog.description;

    //Adds the HREEF to the blogHREF element:  <a href = "...">MORE</a>
    blogHREF.href = `blogs/${blog.slug}.html`
    blogHREF.textContent = "MORE";

    blogDiv.appendChild(blogTitle)
    blogDiv.appendChild(blogImage)
    blogDiv.appendChild(blogDescription)
    blogDiv.appendChild(blogHREF)

    blogContainer?.appendChild(blogDiv) //blogContainer possibly null -> added '?'
})