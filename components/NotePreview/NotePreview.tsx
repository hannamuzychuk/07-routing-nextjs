"use client"

import { Note } from "@/types/note";
import { useRouter } from "next/navigation";
import css from "./NotePreview.module.css";

interface NotePreviewPops {
  note: Note;
}

export default function NotePreview({ note }: NotePreviewPops) {
  const router = useRouter();

  const data = new Date(note.updatedAt || note.createdAt)
    .toISOString()
    .split("T")[0];

  return (
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
          {data}
        </div>
      </div>
    </div>
  );
}
