import { useEffect, useState } from "react";
import { Category } from "../models/category.model";
import { fetchCategory } from "../api/category.api";

export const useCategory = () => {
    const [category, setCategory] = useState<Category[]>([]);

    useEffect(()=>{
        
        fetchCategory().then((category)=> {
            console.log(0);
            if(!category) return;
            console.log(1);
            const categoryWithAll = [
                {
                    id: null,
                    name: "전체",
                },
                ...category
            ]
            setCategory(categoryWithAll);
        });
    }, []);

    return {category};
};