export const metadata = {
  title:{
    template:"%s | Technical agency",
    default :"Technical agency"
  }
}

export default function RootLayout({ children }) {
  // console.log(children)
  return (
<>

        <h1 style={{background:"orange"}}>Header</h1>
        {children}
        <h1 style={{background:"green"}}>Footer</h1>
</>
  );
}
