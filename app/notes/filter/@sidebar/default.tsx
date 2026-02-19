"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import css from "./SidebarNotes.module.css";
import { NoteTag } from "@/types/note";

const Tags: NoteTag[] = ["Todo", "Work", "Personal", "Meeting", "Shopping"];

export default function SidebarDefault() {
  const pathname = usePathname();
  const segments = pathname?.split("/") || [];
  const activeTag = segments[segments.length - 1] || "all";

  return (
    <aside className={css.sidebar}>
      <ul className={css.menuList}>
        <li className={css.menuItem}>
          <Link
            href="/notes/filter/all"
            className={`${css.menuLink} ${activeTag === "all" ? css.active : ""}`}
          >
            All notes
          </Link>
        </li>
        {Tags.map((tag) => (
          <li key={tag} className={css.menuItem}>
            <Link
              href={`/notes/filter/${tag}`}
              className={`${css.menuLink} ${activeTag === tag ? css.active : ""}`}
            >
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}