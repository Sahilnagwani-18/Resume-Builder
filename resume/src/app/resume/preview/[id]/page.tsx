"use client";

import { useParams } from "next/navigation";

export default function PreviewResume() {
  const params = useParams();
  const id = params?.id;

  return (
    <div className="text-center mt-12">
      <h1 className="text-3xl font-semibold text-gray-800">Resume Preview: {id}</h1>
      <p className="mt-4 text-lg text-gray-600">Resume preview will be displayed here.</p>
    </div>
  );
}
