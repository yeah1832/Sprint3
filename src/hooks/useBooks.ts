import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Book } from "../models/book.model";
import { Pagination } from "../models/pagination.model";
import { fetchBooks } from "../api/books.api";
import { QUERYSTRING } from "../contents/querystring";
import { LIMIT } from "../contents/pagination";
import { useQuery } from "react-query";

export const useBooks = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const {data: booksData, isLoading: isBooksLoading} = useQuery(["books", location.search], () => fetchBooks({
        category_id: params.get(QUERYSTRING.CATEGORY_ID) ? Number(params.get(QUERYSTRING.CATEGORY_ID)) : undefined,
        news: params.get(QUERYSTRING.NEWS) ? true : undefined,
        currentPage: params.get(QUERYSTRING.PAGE) ? Number(params.get(QUERYSTRING.PAGE)) : 1,
        limit: LIMIT,
    }) );

    return {
        books: booksData?.books,
        pagination: booksData?.pagination,
        isEmpty: booksData?.books.length === 0,
        isBooksLoading,
    };
};