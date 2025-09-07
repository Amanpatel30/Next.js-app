export default async function Blog({params})
{
    const paramsObj = await params;
    console.log(paramsObj)

    const {blogID} = paramsObj

    return(
    <>
   <h1>All comments on {blogID}</h1>
    </>);
}