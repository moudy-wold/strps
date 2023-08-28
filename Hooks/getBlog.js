"use client";
import useSWR from "swr";
import { fetcher } from "../lib/fetcher";

export const getBlog = () => {
    const { data, error, isLoading } = useSWR("http://localhost:3000/api/blog", fetcher, {
        next: { revalidate: 10, }
    })
    return {
        data,
        isLoading,
        error
    }
}

