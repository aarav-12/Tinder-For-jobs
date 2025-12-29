"use client";

import { useState } from "react";
import { Profile } from "@/components/types/profile";

export default function ProfileCreatePage() {
  // starting empty form based on your type
  const [form, setForm] = useState<Partial<Profile>>({});

  const handleChange = (field: keyof Profile, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <main className="mx-auto max-w-xl p-6">
      <h1 className="text-2xl font-bold mb-4">Create your profile</h1>

      {/* NAME */}
      <input
        placeholder="Full Name"
        className="border px-3 py-2 rounded w-full mb-3"
        onChange={(e) => handleChange("name", e.target.value)}
      />

      {/* HEADLINE */}
      <input
        placeholder="Headline (eg. Frontend dev who ships)"
        className="border px-3 py-2 rounded w-full mb-3"
        onChange={(e) => handleChange("headline", e.target.value)}
      />

      {/* ...add more fields later */}

      {/* DEBUG visible state */}
      <pre className="mt-6 p-3 border rounded text-sm">
        {JSON.stringify(form, null, 2)}
      </pre>
    </main>
  );
}
