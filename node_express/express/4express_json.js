const express=require('express')
const app=express()
const {products}=require('./data')

app.get('/',(req,res)=>{
    res.send('<h1>home page</h1> <a href="/api/products">products</a>')

})

//app.get('/api/products',(req,res)=>{ 
  //  res.json(products)
//})
app.get('/api/products',(req,res)=>{
    //res.send('hello')
    const newProduct=products.map((product)=>{
        const {id,name,image}=product
        return {id,name,image}
    })
    res.json(newProduct)

})
//for single product
/*
app.get('/api/products/1',(req,res)=>{
    //res.send('hello')
    const singleProduct=products.find((product)=>product.id===1)
    res.json(singleProduct)

})
*/
//for many products
app.get('/api/products/:productID',(req,res)=>{
    //console.log(req);
    //console.log(req.params);
    const {productID}=req.params
    const singleProduct=products.find(
        (product)=>product.id===Number(productID)
        )
        if(!singleProduct){
          return  res.status(404).send('Product not found')
        }
     return res.json(singleProduct)
})
app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
    console.log(req.params);
    res.send('good')
})
app.get('/api/v1/query',(req,res)=>{
    const {search,limit}=req.query
    let sortedProducted=[...products]

    if(search){
        sortedProducted=sortedProducted.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
        if(limit){
            sortedProducted=sortedProducted.slice(0,Number(limit))
        }
        if(sortedProducted.length<1){
            //res.status(200).send('not found matched products')
            return res.status(200).json({sucess:true,data:[]})
        }
        res.status(200).json(sortedProducted)
})

app.listen(5000,()=>{
    console.log('responding on port 5000');
})