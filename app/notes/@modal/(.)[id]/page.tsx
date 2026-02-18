import Modal from "@/components/Modal/Modal";
import NotePreview from "@/components/NotePreview/NotePreview";
import { fetchNoteById } from "@/lib/api";
import { notFound } from "next/navigation";

interface NoteModalProps {
  params: Promise<{ id: string }>;
}

export default async function NoteModal({ params }: NoteModalProps) {
  const { id } = await params;
  // const cleanId = id.replace("(.)", "").trim();

  // const note = await fetchNoteById(cleanId);
  const note = await fetchNoteById(id);

  if (!note) {
    return notFound();
  }

  return (
    <Modal>
      <NotePreview note={note} />
    </Modal>
  );
}
