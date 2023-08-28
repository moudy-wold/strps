// import useSWR from "swr";
// import { mutate } from "swr"
// export const useDeleteBlog = (path) => {

//     const { mutate } = useSWR(path);

//     const deleteStep = async (id) => {
//         const res = fetch(`http://localhost:3000/api/blog/${id}`, {
//             method: "DELETE",
//             //@ts-ignore
//             "Content-Type": "application/json",
//         });
//         mutate();
//     };
//     return deleteStep;
// }
import useSWR from "swr";
import { mutate } from "swr";

export const useDeleteBlog = (path) => {
    const { data, error } = useSWR(path);

    const deleteStep = async (id) => {
        try {
            const res = await fetch(`http://localhost:3000/api/blog/${id}`, {
                method: "DELETE",
                //@ts-ignore
                headers: {
                    "Content-Type": "application/json",
                },
            });

            // التحقق من أن الحذف تم بنجاح من خلال الاستجابة (res)
            if (res.ok) {
                // إعادة تحميل البيانات بعد الحذف بنجاح
                mutate(path);
            } else {
                // في حالة حدوث خطأ في الحذف
                console.error("حدث خطأ أثناء الحذف!");
            }
        } catch (error) {
            console.error("حدث خطأ أثناء الحذف!", error);
        }
    };

    return deleteStep;
};
