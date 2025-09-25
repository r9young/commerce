// example

type User = { 
    name: string; 
    age: number;
    active: boolean
}


const user: User = {
    name: "Alice",
    age: 25,
    active: true,
}

function printUser(u:User) {
    console.log(u.name)
}


export type QueryParamsType = 
    {[key: string]: string}

/*
    why do we need to strict the type of QueryParams here?
    As in default, searchParams is typed more strictly by Next.js
    Record<string, string | string[] | undefined> but 
    “Trust me — every property in searchParams is just a string.”

*/ 

const obj: QueryParamsType = {
    q: "hat",
    sort: "price-asc",
    tag: "blue"
}

// what is string[]? e.g ["hat", "shoes", "bags"]