// "use client";
// import React, { useState } from 'react';
// import { useRouter } from "next/navigation";
// import { MdErrorOutline } from 'react-icons/md';
// import { Toaster, toast } from "react-hot-toast";

// function Sign_In() {
//     const router = useRouter();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [emailInVaild, setEmailInVaild] = useState(true);
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         toast.loading("Sending Request 🚀", { id: "1" });
//         const handler = async () => {
//             const res = await fetch(`http://localhost:3000/api/user/sign-in`, {
//                 method: "POST",
//                 body: JSON.stringify({ email, password }),
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//             });

//             if (res.ok) {
//                 const responseBody = await res.json();
//                 if (responseBody.user != null) {
//                     setEmailInVaild(true);
//                     toast.success("Successfly", { id: "1" });
//                     router.push("/");
//                 } else {
//                     setEmailInVaild(false)
//                     toast.error("Please Check Your Email Or Password", { id: "1" });
//                 }
//             } else {
//                 console.error("فشلت عملية تسجيل الدخول.");
//                 toast.error("Please Check Your Network", { id: "1" });
//             }
//             return res;
//         };
//         const qq = await handler()
//     };
//     return (
//         <div className='w-4/12 mt-4 m-auto'>
//             <Toaster />
//             <form onSubmit={handleSubmit} className="w-full max-w-sm p-4 bg-white rounded-lg shadow-md">
//                 <h2 className="m-auto block w-fit   text-lg">Login In </h2>
//                 <div className="mb-4">
//                     {!emailInVaild && <span className="text-red-900 text-sm"> <MdErrorOutline className="inline" /> Please Check Your Email Or Password</span>}
//                     <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
//                     <input
//                         type="email"
//                         id="email"
//                         className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
//                     <input
//                         type="password"
//                         id="password"
//                         className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="text-center">
//                     <button type="submit" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600">
//                         Login
//                     </button>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default Sign_In