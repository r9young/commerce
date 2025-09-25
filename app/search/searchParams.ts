/*
    WHAT IS THIS COMPONENT DOING?

    0. Next.js gives props → props.searchParams = { q: "hat", sort: "price-asc" }
    1. `await props.searchParams` → get the query object.

    Behind the sense, Next.js already parsed the query string (?q=hat&sort=price-asc) into a standard URLSearchParams object.

    THE SHAPE OF OBJECT?

    {
        q: "hat", // string 
        sort: "price-asc", // string
        tag: ["red", "blue"] // string[]
    }


    No conversion needed** → `useSearchParams` already gives you an object you can work with.

    Access values directly** using its methods:

    ```ts
    const params = useSearchParams();
    ```

        params.get("q")` → first value for `q` (string or `null`)
        params.get("sort")` → first value for `sort`
        params.getAll("tag")` → all values for `tag` (string\[])
        params.has("q")` → check if key exists (`true/false`)


    */

"use client"


import { useSearchParams } from "next/navigation";

export function SearchParamsTest(): string {

    const searchParams = useSearchParams();

    console.log("searchParms:", searchParams.toString())

    return searchParams.toString()

}

// Test: http://localhost:3005/search?q=hat&sort=price-asc&tag=blue

export function SearchParamsClient(){

    const searchParams = useSearchParams();

    return searchParams

}


// ! It is different from a Server Component

/* so the following question is not a React Component, it is a special page file in Next.js App Router
   What will it to do:
    1. Matches the route to your page component
    2. Parses the url
    3. calls your function, automatically filling in the props.


// ?q=hat&sort=price-asc:
    /*
        { q: "hat", sort: "price-asc" }
    */

export default async function SearchParams(props:{
     searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {


}