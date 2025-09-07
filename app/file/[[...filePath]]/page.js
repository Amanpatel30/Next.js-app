export default async function file({params}) {
  console.log(await params)
  const {filePath} = await params
  return (
    <>
      <h1>file Path:{filePath}</h1>
    </>
  )
}
