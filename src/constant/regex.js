// const RegeX = {
//     NAME_REGEX()
//     {
//         return /^[a-zA-Z-]{3,20}$/;
//     },
//     PWSD_REGEX()
//     {
//         return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,}$/;
//     },
//     EMAIL_REGX()
//     {
//         return /^[a-z0-9_]+@[a-z]+\.[a-z]{2,3}$/;
//     },
//     PHONE_REGX()
//     {
//         return /^[+]*[0-9]+$/;
//     }
// }

// export default RegeX;

export const NAME_REGEX = /^[a-zA-Z-]{3,20}$/;
export const PWSD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,}$/;
export const EMAIL_REGX = /^[a-z0-9_]+@[a-z]+\.[a-z]{2,3}$/;
export const PHONE_REGX = /^[+]*[0-9]+$/;