// src/components/SuccessTemplate.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const SuccessTemplate = () => {
  const { id } = useParams();
  const [message, setMessage] = useState("Processing your invitation...");

  useEffect(() => {
    if (!id) return;

    fetch(`https://immune-coral-pumped.ngrok-free.app/api/admin/createAlumni/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message || "Invitation accepted!");
      })
      .catch(() => {
        setMessage("Error accepting invitation.");
      });
  }, [id]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-50">
      <div className="text-center p-10 rounded-2xl shadow-lg bg-white w-[90%] max-w-lg">
        <h1 className="text-3xl font-bold text-purple-800 mb-4">
          Welcome to Campus Connect
        </h1>

        <p className="text-gray-600 mb-3">{message}</p>

        <p className="text-gray-500 mb-3">
          Acceptance mail with your credentials will reach you shortly.
        </p>

        <p className="text-gray-400 italic">You can close this window now.</p>
      </div>
    </div>
  );
};
