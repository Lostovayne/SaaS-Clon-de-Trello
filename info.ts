// "use client";
// import { useAuth, useUser } from "@clerk/nextjs";

// const ProtectedPage = () => {
//     const { userId } = useAuth();
//     const { user } = useUser();
//     return (
//         <div>
//             User: {user?.firstName}
//             userId: {userId}
//         </div>
//     );
// };
// export default ProtectedPage;

// server components

// import { auth, currentUser } from "@clerk/nextjs";

// const ProtectedPage = async () => {
//     const user = await currentUser();
//     const { userId } = auth();
//     return (
//         <div>
//             User: {user?.firstName}
//             userId: {userId}
//         </div>
//     );
// };
// export default ProtectedPage;
