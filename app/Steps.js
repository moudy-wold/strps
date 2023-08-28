"use client"
import React, { useState, useEffect } from 'react'
import Link from "next/link";
import { useDeleteBlog } from './../Hooks/DeleteBlog';



export default function Home({ post, }) {
    const [totalStep, setTotalStep] = useState(0)

    useEffect(() => {
        setTotalStep(+post.price * +post.count);
    }, [post.price, post.count]);

    const deleteStep = useDeleteBlog("http://localhost:3000/api/blog")
    const handleDelete = async (id) => {
        await deleteStep(id);
    };
    return (
        <main className="w-full h-full">

            {/* Blogs */}
            <div className="w-full ">
                <div key={post.id} className="w-fit   text-slate-200 rounded-md m-auto  my-5 flex flex-col items-center">
                    <div className="m-auto text-right">
                        {/* Title  */}
                        <div className="mt-3 pt-5    border-t-2 border-red-600 ">
                            <textarea className="mr-auto font-semibold p-2">{post.title}</textarea>
                        </div>
                        {/* Count */}
                        <div className="mt-3">
                            <h2 className="mr-auto font-semibold">العدد : {post.count}</h2>
                        </div>
                        {/* Price */}
                        <div className="mt-3">
                            <h2 className="mr-auto font-semibold">السعر : {post.price}</h2>
                        </div>
                        {/* Step Total */}
                        <div className="mt-3" >
                            <p> حساب المرحلة  : {totalStep}</p>
                        </div  >
                        {/* Edite */}
                        <Link
                            href={`/blog/edit/${post.id}`}
                            className="px-4 py-1 mt-5 m-auto  block  text-center text-xl bg-slate-900 rounded-md font-semibold text-slate-200"
                        >
                            تعديل
                        </Link>
                        {/* Delete */}
                        <div className=" pb-8 border-b-2 border-red-600">
                            <button
                                onClick={() => handleDelete(post.id)}
                                className="font-bold px-4 py-2 shadow-xl mt-5 m-auto w-full block bg-red-500 rounded-lg  hover:bg-red-500" >
                                حذف
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    );
}

