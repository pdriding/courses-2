// app/components/modal-backdrop.jsx
"use client";

import { useRouter } from "next/navigation";

export default function ModalBackdrop() {
  const router = useRouter();

  return (
    <div
      className="modal-backdrop"
      onClick={() => router.back()} // prefer router.back() over window.history.back()
    />
  );
}
