import express from 'express'
const newsRouter =express.Router()
export default newsRouter;
import axios from 'axios'


newsRouter.get("/" , async (req , res) =>{
    // res.render("news.ejs" )
    try {
        const result = await axios.get("https://raddy.dev/wp-json/wp/v2/posts/")
        res.render('news', { contents : result.data  

        });
    } catch (error) {
        res.status(404).send(error.message);
    }
});


newsRouter.get("/:id" , async (req , res) =>{
    const contentid = req.params.id
    try {
        const result = await axios.get(`https://raddy.dev/wp-json/wp/v2/posts/${contentid}`)
        res.render('SingleContent', { content : result.data  

        });
    } catch (error) {
        res.status(404).send(error.message);
    }
});

newsRouter.post("" , async (req , res)=>{
    const search = req.body.search;
    try {
        const result = await axios.get(`https://raddy.dev/wp-json/wp/v2/posts/?search=${search}`)
        res.render('searchname', {contents : result.data})
    } catch (error) {
        if (err.response) {
        res.render('searchname', { contents : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.requiest) {
            res.render('searchname', { contents : null })
            console.log(err.requiest)
        } else {
            res.render('searchname', { contents : null })
            console.error('Error', err.message)
        
    }
}
})