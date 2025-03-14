const blog = require('../data/blog')

function index(req, res) {
    let filteredBlog = blog
    if(req.query.slug){
        console.log('Filter the result');
        filteredBlog = blog.filter(post => post.slug.includes(req.query.slug))
    }
    res.json(filteredBlog)
}

function show(req, res) {
    const postSlug = req.params.slug
    const post = blog.find(post => post.slug === postSlug)
    console.log(post);
    res.json(post)
}

function store(req, res) {
    res.send(`Store new post`)
}

function update(req, res) {
    res.send(`Update the post with slug: ${req.params.slug}`)
}

function modify(req, res) {
    res.send(`Modify the post whith slug: ${req.params.slug}`)
}

function destroy(req, res) {
    res.send(`Delete the post with slug: ${req.params.slug}`)
}

module.exports = {
    index, 
    show,
    store, 
    update,
    modify,
    destroy
}