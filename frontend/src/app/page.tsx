"use client";

import AgendaList from "@/components/AgendaList";
import type { AgendaItemType } from "@/types";
import { useState } from "react";

const initialItems: AgendaItemType[] = [
  {
    id: "1",
    title: "Complete project setup",
    description: "Set up Next.js with Tailwind and component library",
    date: "Today",
    completed: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Design agenda UI",
    description: "Create responsive agenda list component",
    date: "Tomorrow",
    completed: true,
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  },
];

export default function Home() {
  const [items, setItems] = useState(initialItems);

  const handleToggleItem = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  const handleDeleteItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddItem = () => {
    const newItem: AgendaItemType = {
      id: Date.now().toString(),
      title: `New Agenda Item ${items.length + 1}`,
      date: "Today",
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setItems((prev) => [newItem, ...prev]);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <AgendaList
        items={items}
        onToggleItem={handleToggleItem}
        onDeleteItem={handleDeleteItem}
        onAddItem={handleAddItem}
      />
    </main>
  );
}
