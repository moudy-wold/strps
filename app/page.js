"use client";
import Steps from "./Steps";
import React, { useState, useEffect } from 'react'
import { getBlog } from "../Hooks/getBlog";
import Link from "next/link";
import { AiOutlineUser } from 'react-icons/ai';
// async function fetchBlog() {
//   const res = await fetch("http://localhost:3000/api/blog", {
//     next: {
//       revalidate: 10,
//     }
//   })
//   const data = await res.json();
//   return data.posts
// }

// const deleteBlog = async (id) => {
//   const res = fetch(`http://localhost:3000/api/blog/${id}`, {
//     method: "DELETE",
//     //@ts-ignore
//     "Content-Type": "application/json",
//   });
//   return (await res).json();
// };

export default function Home() {

  const { data: data, isLoading, error } = getBlog();
  const [total, setTotal] = useState(0)
  const [signed, setSigned] = useState(false)
  useEffect(() => {
    const datas = async () => {
      return data?.posts?.map((post) => setTotal(prev => prev + (+post.price * +post.count)))
    };
    datas();
    localStorage.getItem('signed') ? setSigned(true) : setSigned(false)
    localStorage.setItem('myData', 'This is my data');
  }, [data])

  // const posts = await fetchBlog()

  // const handleDelete = async (id) => {
  //   await deleteBlog(id);
  // };
  return (
    <main className="w-full h-full">
      <div className="w-full p-5 border-b border-grey-200 flex justify-end  " >

        {/* <Link
          href={"/user/sign-up"}>
          <div className="flex flex-col justify-center items-center cursor-pointer border-2 border-rey-400 rounded-lg p-1 active:bg-red-500   " >
            <p> Sign Up   </p>
            <p><AiOutlineUser /></p>
          </div>
        </Link>
        <Link
          href={"/user/sign-in"}>
          <div className="flex flex-col justify-center items-center cursor-pointer border-2 border-rey-400 rounded-lg p-1  active:bg-red-500" >
            <p>  Sign In     </p>
            <p><AiOutlineUser /></p>
          </div>
        </Link> */}
      </div>
      {/* Add blog Link */}
      <div className="flex my-5">
        <Link
          href={"/blog/add"}
          className=" md:w-1/6 sm:w-2/4 text-center rounded-md p-2 m-auto bg-slate-200 font-semibold"
        >
          إضافة مرحلة جديدة 🚀
        </Link>
      </div>
      {isLoading && <div className='m-auto text-center '>جاري التحميل...</div>}
      {data?.posts?.map((post) => {
        return <Steps post={post} key={post.id} setTotal={setTotal} />
      })}
      {/* finally Total */}
      <div className="mb-5 w-fit m-auto">
        <p
          className="  font-bold px-4 py-2 text-center shadow-xl bg-red-200 rounded-lg  m-auto mt-2 hover:bg-red-500">
          المجموع <br /> {total}
        </p>
      </div>
    </main >
  );
}

