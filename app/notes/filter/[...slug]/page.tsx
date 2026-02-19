import { fetchNotes } from "@/lib/api";
import { NoteTag } from "@/types/note";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import NotesClient from "./Notes.client";

interface FilterPageProps {
  params: { slug?: string[] };
}

export default async function FilterPage({ params }: FilterPageProps) {
  const slug = params.slug || [];
  const tag = slug[0] || "all";

// const valueTag = tag === 'all' ? "" : tag;
const activeTag = tag === "all" ? undefined : (tag as NoteTag);
  
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
 queryKey: ["notes", 1, "", activeTag],
    queryFn: () => fetchNotes(1, "", activeTag),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient activeTag={activeTag} />
    </HydrationBoundary>
  );
}
