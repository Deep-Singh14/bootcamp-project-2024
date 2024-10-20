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
]


const blogContainer = document.getElementById("blog-container")

blogs.forEach(blog => {
    const blogDiv = document.createElement("div")
    const blogTitle = document.createElement("h1")
    const blogImage = document.createElement("img")
    const blogDescription = document.createElement("p")

    blogDiv.appendChild(blogTitle)
    blogDiv.appendChild(blogImage)
    blogDiv.appendChild(blogDescription)

    blogContainer?.appendChild(blogDiv) //blogContainer possibly null -> added '?'
})