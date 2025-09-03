export default async function Blog({params})
{
    // console.log( await params)
    const {blogID} = await params;
    return(
    <>
   <h1>Blog ID:{blogID}</h1>
    </>);
}