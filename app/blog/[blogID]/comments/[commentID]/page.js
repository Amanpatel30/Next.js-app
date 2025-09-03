export default async function({params})
{
    const paramsObj = await params;
    console.log(paramsObj)

    const {blogID,commentID} = paramsObj

    return(
    <>
   <h1>Comments no. {commentID} on {blogID}</h1>
    </>);
}