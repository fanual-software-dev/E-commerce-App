"use client";
import { useUserStore } from "@/contexts/UserStore";
import React, { useState } from "react";

interface Ticket {
  id: number;
  customer: string;
  subject: string;
  status: "Open" | "Resolved";
  details: string;
  comments: string[];
}

const initialTickets: Ticket[] = [
  {
    id: 1,
    customer: "User1",
    subject: "Issue with order #1",
    status: "Open",
    details: "Order #1 was not delivered on time.",
    comments: [],
  },
  {
    id: 2,
    customer: "User2",
    subject: "Payment not processed",
    status: "Open",
    details: "Payment for order #2 did not go through.",
    comments: [],
  },
  {
    id: 3,
    customer: "User3",
    subject: "Wrong item received",
    status: "Open",
    details: "Received a different item than ordered.",
    comments: [],
  },
];

const SupportManagement = () => {
  const user = useUserStore((state) => state.user);
  const [tickets, setTickets] = useState<Ticket[]>(initialTickets);
  const [viewTicket, setViewTicket] = useState<Ticket | null>(null);
  const [resolveTicket, setResolveTicket] = useState<Ticket | null>(null);
  const [comment, setComment] = useState("");

  const handleSendAndResolve = () => {
    if (!resolveTicket) return;
    setTickets((prev) =>
      prev.map((t) =>
        t.id === resolveTicket.id
          ? {
              ...t,
              status: "Resolved",
              comments: comment ? [...t.comments, comment] : t.comments,
            }
          : t,
      ),
    );
    setResolveTicket(null);
    setComment("");
  };

  return (
    <div className="text-white py-8 px-2 xl:pl-24">
      <p>Welcome Back, {user?.firstName ?? ""}</p>
      <div className="mt-8 bg-[#1A1A1A] rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Support & Tickets</h2>
        <p className="mb-6 text-gray-300">
          View and manage customer support tickets.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-[#232323] text-yellow-400">
                <th className="p-2 text-left">Ticket ID</th>
                <th className="p-2 text-left">Customer</th>
                <th className="p-2 text-left">Subject</th>
                <th className="p-2 text-left">Status</th>
                <th className="p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="border-b border-[#232323]">
                  <td className="p-2">TKT{ticket.id}23</td>
                  <td className="p-2">{ticket.customer}</td>
                  <td className="p-2">{ticket.subject}</td>
                  <td className="p-2">
                    <span
                      className={`px-2 py-1 rounded text-xs ${ticket.status === "Open" ? "bg-yellow-500 text-gray-900" : "bg-green-600 text-white"}`}
                    >
                      {ticket.status}
                    </span>
                  </td>
                  <td className="p-2">
                    <button
                      className="bg-gray-800 text-yellow-400 px-3 py-1 rounded hover:bg-gray-700 transition mr-2"
                      onClick={() => setViewTicket(ticket)}
                    >
                      View
                    </button>
                    {ticket.status === "Open" && (
                      <button
                        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-500 transition"
                        onClick={() => setResolveTicket(ticket)}
                      >
                        Resolve
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {viewTicket && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-[#232323] rounded-lg p-6 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
              onClick={() => setViewTicket(null)}
            >
              &times;
            </button>
            <h3 className="text-lg font-bold mb-2">Ticket Details</h3>
            <div className="mb-2 text-sm">
              <span className="font-semibold">Customer:</span>{" "}
              {viewTicket.customer}
            </div>
            <div className="mb-2 text-sm">
              <span className="font-semibold">Subject:</span>{" "}
              {viewTicket.subject}
            </div>
            <div className="mb-2 text-sm">
              <span className="font-semibold">Status:</span> {viewTicket.status}
            </div>
            <div className="mb-2 text-sm">
              <span className="font-semibold">Details:</span>{" "}
              {viewTicket.details}
            </div>
            <div className="mb-2 text-sm">
              <span className="font-semibold">Comments:</span>
              <ul className="ml-4 list-disc">
                {viewTicket.comments.length === 0 && (
                  <li className="text-gray-500">No comments</li>
                )}
                {viewTicket.comments.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {resolveTicket && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-[#232323] rounded-lg p-6 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
              onClick={() => setResolveTicket(null)}
            >
              &times;
            </button>
            <h3 className="text-lg font-bold mb-2">Resolve Ticket</h3>
            <div className="mb-2 text-sm">
              <span className="font-semibold">Customer:</span>{" "}
              {resolveTicket.customer}
            </div>
            <div className="mb-2 text-sm">
              <span className="font-semibold">Subject:</span>{" "}
              {resolveTicket.subject}
            </div>
            <div className="mb-2 text-sm">
              <span className="font-semibold">Details:</span>{" "}
              {resolveTicket.details}
            </div>
            <textarea
              className="w-full p-2 rounded bg-[#181818] text-white mb-2 mt-2"
              placeholder="Add a comment before resolving..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <div className="flex gap-2">
              <button
                className="bg-yellow-500 text-gray-900 px-4 py-2 rounded hover:bg-yellow-400 transition"
                onClick={handleSendAndResolve}
              >
                Send & Resolve
              </button>
              <button
                className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
                onClick={() => setResolveTicket(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportManagement;
