"use client";

import { usePathname } from "next/navigation";

export default async function blogNotFound(){
    console.log(usePathname())
    // console.log(await params)
    return(
        <>
        <h1>404 - PAGE NOT FOUND</h1>
        </>
    )

}