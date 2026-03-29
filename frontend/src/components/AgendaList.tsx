import type { AgendaItemType } from "@/types";
import React from "react";
import { Button } from "./";
import AgendaItem from "./AgendaItem";

interface AgendaListProps {
  items: AgendaItemType[];
  onToggleItem: (id: string) => void;
  onDeleteItem: (id: string) => void;
  onAddItem: () => void;
}

const AgendaList: React.FC<AgendaListProps> = ({
  items,
  onToggleItem,
  onDeleteItem,
  onAddItem,
}) => {
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Agenda Manager
        </h1>
        <Button onClick={onAddItem} className="ml-4">
          + Add Item
        </Button>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-12">
          <svg
            className="mx-auto h-12 w-12 text-gray-400 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">
            No agenda items
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Get started by adding a new item.
          </p>
          <div className="mt-6">
            <Button onClick={onAddItem}>Create first item</Button>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {items.map((item) => (
            <AgendaItem
              key={item.id}
              {...item}
              onToggle={onToggleItem}
              onDelete={onDeleteItem}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AgendaList;
