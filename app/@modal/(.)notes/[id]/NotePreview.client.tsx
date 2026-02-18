"use client"

import { Note } from "@/types/note";
import { useRouter } from "next/navigation";
import css from "./NotePreview.module.css";
import Modal from "@/components/Modal/Modal";

interface NotePreviewPops {
  note: Note;
}

export default function NotePreview({ note }: NotePreviewPops) {
  const router = useRouter();

  const date = new Date(note.updatedAt || note.createdAt)
    .toISOString()
    .split("T")[0];

  return (
   <Modal onClose={() => router.back()}>
      <div className={css.container}>
        <button className={css.backBtn} onClick={() => router.back()}>
          ← Back
        </button>

        <div className={css.item}>
          <div className={css.header}>
            <h2>{note.title}</h2>
            <span className={css.tag}>{note.tag}</span>
          </div>

          <div className={css.content}>{note.content}</div>

          <div className={css.date} suppressHydrationWarning>
            {date}
          </div>
        </div>
      </div>
    </Modal>
  );
}
