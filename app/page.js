import Link from "next/link";


export default function Home() {
  return (
    <>
    
   <h1>hi</h1>
    <p>
    <Link href={"/services"}>Services</Link>
    </p>
    <p>
    <Link href={"/blog"}>Blog</Link>

    </p><p>
    <Link href={"/about"}>about</Link>

    </p>
    </>
  );
}
