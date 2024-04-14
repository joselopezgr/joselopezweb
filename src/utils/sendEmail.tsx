// import { FormData } from "@/components/contactSection";

// export function sendEmail(data: FormData) {
//     const apiEndpoint = 'api/email';
//     const { name, email, message } = data;

//     fetch(apiEndpoint, {
//         method: 'POST',
//         body: JSON.stringify(data),
//     })
//     .then((res) => res.json())
//     .then((response) => {
//         alert(response.message);
//     })
//     .catch((err) => {
//         alert(err);
//     });
// };