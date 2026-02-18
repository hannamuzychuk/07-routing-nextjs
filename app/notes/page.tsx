// import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
// // import { fetchNotes } from "@/lib/api";
// import NotesClient from "./Notes.client";

// export default async function NotesPage() {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery({
//     queryKey: ["notes", 1, ""],
//     queryFn: () => fetchNotes(1, ""),
//   });
// import { redirect } from 'next/navigation';

// export default function NotesPage() {
//   redirect('/notes/filter/all');

//   return (
//     <HydrationBoundary state={dehydrate(QueryClient)}>
//       <NotesClient />
//     </HydrationBoundary>
//   );
// }
import { redirect } from "next/navigation";

export default function NotesPage() {
  redirect("/notes/filter/all");

  return null;
}
