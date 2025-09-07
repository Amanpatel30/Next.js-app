import Link from "next/link";
export const metadata = {
  title:"Services"
}

export default function Services(){
    return(
    
    <>
    <h1>Services</h1>
    <p>
    <Link href={"/services/web-dev"}>Web-dev</Link>
    </p>
    <p>
    </p>
    <Link href={"/services/seo"}>SEO</Link>
    </>
    
)
}