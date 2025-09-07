import { notFound } from "next/navigation";


export async function generateMetadata ({params}) {
    //  console.log(await params)

    const {blogID} = await params;
    
    return{
        title:`Blog ${blogID}`
    }
}


export default async function Blog({params})
{
    // console.log( await params)
    const {blogID} = await params;
    // if (!/^\d+$/.test(blogID)) {
    //   notFound(); 
    //   console.log("not found"); 
    // }
    if (!/^\d+$/.test(blogID)) {
        notFound();
    }
    return(
    <>
   <h1>Blog ID:{blogID}</h1>
    </>);
}