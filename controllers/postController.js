const blog = require('../data/blog')

function index(req, res) {
    let filteredBlog = blog
    if(req.query.tags){
        console.log('Filter the result');
        filteredBlog = blog.filter(post => post.tags.includes(req.query.tags))
        console.log(filteredBlog);
    }
    res.json(filteredBlog)
}

function show(req, res) {
    const postSlug = req.params.slug
    const post = blog.find(post => post.slug === postSlug)
    console.log(post);

    if(!post){
        return res.status(404).json({
            error: '404',
            message: 'Post not found'
        })
    }
    res.json(post)
}

function store(req, res) {
    console.log(req.body);
    
    const newPost = {
        title: "Torta al cioccolato fondente",
        slug: "torta-al-cioccolato-fondente",
        content: "La torta al cioccolato fondente è un dessert ricco e irresistibile, perfetto per ogni occasione speciale. Realizzata con ingredienti di alta qualità come il cioccolato fondente, uova fresche e burro, questa torta si caratterizza per la sua consistenza morbida e il suo sapore intenso. Un vero e proprio peccato di gola per gli amanti del cioccolato.",
        image: "torta-al-cioccolato.jpg",
        tags: ["cioccolato", "dolci", "dessert", "torta", "fondente"]
      }

      blog.push(newPost);
      console.log(blog);

      res.status(201);
      res.json(newPost)
}

function update(req, res) {
   
}

function modify(req, res) {
    res.send(`Modify the post whith slug: ${req.params.slug}`)
}

function destroy(req, res) {
    const postSlug = req.params.slug
    const post = blog.find(post => post.slug === postSlug)

    if(!post){
        return res.status(404).json({
            error: '404',
            message: 'Post not found'
        })
    }
    blog.splice(blog.indexOf(post), 1)
    console.log(blog);    

    res.sendStatus(204)
}

module.exports = {
    index, 
    show,
    store, 
    update,
    modify,
    destroy
}