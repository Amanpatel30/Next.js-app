import Link from "next/link";

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