"use client";
import { useRouter } from "next/navigation";
import { Fragment, useRef } from "react";
import { Toaster, toast } from "react-hot-toast";
const postBlog = async ({
    title,
    count,
    price,
}: {
    title: string;
    count: string;
    price: string;
}) => {
    const res = fetch("http://localhost:3000/api/blog", {
        method: "POST",
        body: JSON.stringify({ title, count, price }),
        //@ts-ignore
        "Content-Type": "application/json",
    });
    return (await res).json();
};

const AddBlog = () => {
    const router = useRouter();
    const titleRef = useRef<HTMLTextAreaElement | null>(null);
    const countRef = useRef<HTMLTextAreaElement | null>(null);
    const priceRef = useRef<HTMLTextAreaElement | null>(null);
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (titleRef.current && countRef.current) {
            toast.loading("Sending Request 🚀", { id: "1" });
            await postBlog({
                title: titleRef.current?.value,
                count: countRef.current?.value ? countRef.current?.value : "1",
                price: priceRef.current?.value ? priceRef.current?.value : "0",
            });
            toast.success("Blog Posted Successfully", { id: "1" });
            router.push("/");
            router.refresh()
        }
    };
    return (
        <Fragment>
            <Toaster />
            <div className="w-full m-auto flex my-4">
                <div className="flex flex-col justify-center items-center m-auto">
                    <p className="text-2xl text-slate-200 font-bold p-3">
                        إضافة مرحلة جديدة 🚀
                    </p>
                    <form onSubmit={handleSubmit}>
                        {/* Title */}
                        <textarea
                            ref={titleRef}
                            rows={8}
                            cols={40}
                            placeholder="المرحلة"
                            className="rounded-md border-2 border-sky-200 px-4 w-full py-2 my-2 "
                        ></textarea>
                        {/* Count */}
                        <textarea
                            ref={countRef}
                            placeholder="العدد"
                            className="rounded-md px-4 border-2 border-pink-700 py-2 w-full my-2"
                        ></textarea>
                        {/* Price */}
                        <textarea
                            ref={priceRef}
                            placeholder="السعر"
                            className="rounded-md px-4 border-2  border-pink-700 py-2 w-full my-2"
                        ></textarea>
                        <button className="font-semibold px-4 py-2 shadow-xl bg-slate-200 rounded-lg m-auto hover:bg-slate-100">
                            إضافة
                        </button>
                    </form>
                </div>
            </div>
        </Fragment>
    );
};

export default AddBlog;