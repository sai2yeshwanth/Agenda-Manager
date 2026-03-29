import React from "react";
import { Button } from "./";

interface AgendaItemProps {
  id: string;
  title: string;
  description?: string;
  date: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const AgendaItem: React.FC<AgendaItemProps> = ({
  id,
  title,
  description,
  date,
  completed,
  onToggle,
  onDelete,
}) => {
  return (
    <div className="group flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-all bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      <div className="flex items-center space-x-3">
        <button
          onClick={() => onToggle(id)}
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
            completed
              ? "bg-green-500 border-green-500 text-white"
              : "border-gray-400 hover:border-green-500"
          }`}
        >
          {completed && (
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
        <div>
          <h3
            className={`font-medium ${completed ? "line-through text-gray-500" : ""}`}
          >
            {title}
          </h3>
          {description && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          )}
          <p className="text-xs text-gray-500">{date}</p>
        </div>
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onDelete(id)}
        className="opacity-0 group-hover:opacity-100 transition-opacity"
      >
        Delete
      </Button>
    </div>
  );
};

export default AgendaItem;
