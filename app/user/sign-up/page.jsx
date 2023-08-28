// "use client";
// import { useRouter } from "next/navigation";
// import { Fragment, useRef, useState, useEffect } from "react";
// import { Toaster, toast } from "react-hot-toast";
// const postBlog = async ({ email, password }) => {
//     const res = fetch("http://localhost:3000/api/user/sign-up", {
//         method: "POST",
//         body: JSON.stringify({ email, password }),
//         //@ts-ignore
//         "Content-Type": "application/json",
//     });
//     return (await res).json();
// };

// const Sign_Up = () => {
//     const router = useRouter();
//     const userNameRef = useRef(null);
//     const passWordRef = useRef(null);
//     const conPassWordRef = useRef(null);
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (pass === conPass) {
//             setConCheck(true)
//             if (userNameRef.current && passWordRef.current && conPassWordRef.current) {
//                 toast.loading("Sending Request 🚀", { id: "1" });
//                 await postBlog({
//                     email: userNameRef.current?.value,
//                     password: passWordRef.current?.value,
//                 });
//                 toast.success("Blog Posted Successfully", { id: "1" });
//                 router.push("/user/sign-in");
//                 router.refresh()
//             };
//         } else {
//             setConCheck(false)
//         }
//     };
//     const [pass, setPass] = useState('');
//     const [conPass, setConPass] = useState('');
//     const [conCheck, setConCheck] = useState(true);

//     return (
//         <Fragment>
//             <Toaster />
//             <div className="w-full m-auto flex my-4">
//                 <div className="flex flex-col justify-center items-center m-auto">
//                     <p className="text-2xl text-slate-200 font-bold p-3">
//                         Sign Up 🚀
//                     </p>
//                     <form className=" w-full" onSubmit={handleSubmit}>
//                         {/* Email */}
//                         <input
//                             ref={userNameRef}
//                             required
//                             type="email"
//                             placeholder="email"
//                             className="rounded-md border-2 border-sky-200 px-4  w-full py-2 my-2 "
//                         />
//                         <br />
//                         {/* PassWord */}
//                         <input
//                             ref={passWordRef}
//                             required
//                             type="text"
//                             onChange={(e) => setPass(e.target.value)}
//                             placeholder="password"
//                             className="rounded-md px-4 border-2 border-pink-700 py-2 w-full my-2"
//                         />
//                         <br />
//                         {/* Confirm PassWord */}
//                         <input
//                             ref={conPassWordRef}
//                             onChange={(e) => setConPass(e.target.value)}
//                             required
//                             type="text"
//                             placeholder="confirm password"
//                             className={conCheck ? "rounded-md px-4 border-2 border-pink-200 py-2 w-full my-2" : "rounded-md px-4 border-2 border-red-700 py-2 w-full my-2"}
//                         />
//                         <br />
//                         <button className="font-semibold m-auto block px-4 py-2 shadow-xl bg-slate-200 rounded-lg m-auto hover:bg-slate-100">
//                             إضافة
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </Fragment>
//     );
// };

// export default Sign_Up;