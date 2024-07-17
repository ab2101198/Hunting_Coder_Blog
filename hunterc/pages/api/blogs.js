
import * as fs from 'fs' ;

export default async function handler(req, res) {
    
    let data = await fs.promises.readdir("@/../blogdata") ;

    console.log(data) ;
    console.log(typeof data) ;

    let myfile;
    
    let allBlogs = [] ;

    for(let index = 0; index<data.length ; index++){
        const item = data[index] ;

        console.log(item) ;
        console.log(typeof item) ;

        myfile = await fs.promises.readFile(('@/../blogdata/' + item), 'utf-8') 

        // console.log(typeof myfile) ;
        // console.log(myfile);
        allBlogs.push(JSON.parse(myfile)) 
    }

    // console.log(typeof allBlogs) ;
    res.status(200).json(allBlogs) ;
}
  