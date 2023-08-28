"use client";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
type UpdateBlogParams = {
    title: string;
    count: string;
    price: string;
    id: string;
};
const updateBlog = async (data: UpdateBlogParams) => {
    const res = fetch(`http://localhost:3000/api/blog/${data.id}`, {
        method: "PUT",
        body: JSON.stringify({ title: data.title, count: data.count, price: data.price }),
        //@ts-ignore
        "Content-Type": "application/json",
    });
    return (await res).json();
};

// const deleteBlog = async (id: string) => {
//     const res = fetch(`http://localhost:3000/api/blog/${id}`, {
//         method: "DELETE",
//         //@ts-ignore
//         "Content-Type": "application/json",
//     });
//     return (await res).json();
// };

const getBlogById = async (id: string) => {
    const res = await fetch(`http://localhost:3000/api/blog/${id}`);
    const data = await res.json();
    return data.post;
};

const EditBlog = ({ params }: { params: { id: string } }) => {
    const router = useRouter();
    const titleRef = useRef<HTMLTextAreaElement | null>(null);
    const countRef = useRef<HTMLTextAreaElement | null>(null);
    const priceRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
        toast.loading("Fetching Blog Details 🚀", { id: "1" });
        getBlogById(params.id)
            .then((data) => {
                if (titleRef.current && countRef.current && priceRef.current) {
                    titleRef.current.value = data.title;
                    countRef.current.value = data.count;
                    priceRef.current.value = data.price;
                    toast.success("Fetching Complete", { id: "1" });
                }
            })
            .catch((err) => {
                console.log(err);
                toast.error("Error fetching blog", { id: "1" });
            });
    }, [params.id]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (titleRef.current && countRef.current && priceRef.current) {
            toast.loading("Sending Request 🚀", { id: "1" });
            await updateBlog({
                title: titleRef.current?.value,
                count: countRef.current?.value,
                price: priceRef.current?.value,
                id: params.id,
            });
            toast.success("Blog Posted Successfully", { id: "1" });
            await router.push("/");
        }
    };
    // const handleDelete = async () => {
    //     toast.loading("Deleting Blog", { id: "2" });
    //     await deleteBlog(params.id);
    //     toast.success("Blog Deleted", { id: "2" });
    //     router.push("/");
    // };
    return (
        <Fragment>
            <Toaster />
            <div className="w-full m-auto flex my-4">
                <div className="flex flex-col justify-center items-center m-auto">
                    <p className="text-2xl text-slate-200 font-bold p-3">
                        تعديل 🚀
                    </p>
                    <form onSubmit={handleSubmit}>
                        <textarea
                            rows={8}
                            cols={40}
                            ref={titleRef}
                            placeholder="إسم مرحلة"
                            className="rounded-md px-4 border-2  border-sky-700 w-full py-2 my-2 "
                        ></textarea>
                        {/* Count */}
                        <textarea
                            ref={countRef}
                            placeholder="العدد"
                            className="rounded-md  border-2  border-pink-700 px-4 py-2 w-full my-2"
                        ></textarea>
                        {/* Price */}
                        <textarea
                            ref={priceRef}
                            placeholder="السعر"
                            className="rounded-md  border-2  border-pink-700 px-4 py-2 w-full my-2"
                        ></textarea>
                        <div className="flex justify-between">
                            <button className="font-semibold   px-4 py-2 shadow-xl bg-slate-200 rounded-lg m-auto hover:bg-slate-100">
                                تحديث
                            </button>
                        </div>
                    </form>
                    {/* <button
                        onClick={handleDelete}
                        className="font-semibold px-4 py-2 shadow-xl bg-red-400 rounded-lg  m-auto mt-2 hover:bg-red-500"
                    >
                        حذف
                    </button> */}
                </div>
            </div>
        </Fragment>
    );
};

export default EditBlog;