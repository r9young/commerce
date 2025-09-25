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

*/

"use client"


import { useSearchParams, ReadonlyURLSearchParams } from "next/navigation";

export default function SearchParams(): string {

    const searchParams = useSearchParams();

    console.log("searchParms:", searchParams.toString())

    return searchParams.toString()

}