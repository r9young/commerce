
import {QueryParamsType} from "./utilis/alias"
import {sorting} from './constant'


export default async function SearchPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const searchParams = await props.searchParams;

    // const { sort, q: searchValue } = searchParams as { [key: string]: string };
    const {sort, q: searchValue} = searchParams as QueryParamsType
    //  Standard way to code: 
    //   type QueryParams = { [key: string]: string };
    //   const sorttest = searchParams?.sort;
    //   const searchValues = searchParams?.q;

    const  { sortKey, reverse } = sorting.find((item)=> item.slug === sort) || defaultSort;
    // sorting is an array of objects
    // .find() is a javascript array method - search through an array and return the first element that matches a condition
    // so where is the value .find() is used for searching? the value of sort
    /*
        Take each item 
        Look at its slug property (item.slug)
        compare it to the value of sort
        if they are equal (item.slug === sort), find() stops and returns that object
        if no result, value of find() return undefined. 
    */






 

}