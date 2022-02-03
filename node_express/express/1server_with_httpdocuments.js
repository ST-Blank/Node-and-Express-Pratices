const http=require('http')
const {readFileSync}=require('fs')

//get file
const homepage_index=readFileSync('./navBar/index.html')
const homepage_style=readFileSync('./navBar/styles.css')
const homepage_js=readFileSync('./navBar/browser_app.js')
const homepage_image=readFileSync('./navBar/logo.svg')

const server=http.createServer((req,res)=>{
    //console.log(req.method);
    //console.log('detected using site');
    //res.end('home page')
    const url=req.url
    if(url==='/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homepage_index)
        res.end()
    }
    else if(url==='/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homepage_style)
        res.end()
    }
    else if(url==='/browser_app.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(homepage_js)
        res.end()
    }
    else if(url==='/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.write(homepage_image)
        res.end()
    }

    else if(url==='./about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
    }

    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>NOT FOUND</h1>')
        res.end()
    }
})
server.listen(5000)