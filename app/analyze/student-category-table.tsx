// app/analyze/student-category-table.tsx
"use client";

import { Check, AlertTriangle } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";

type Analysis = {
  id: string;
  main_category: string;
  specific_category: string;
  created_at: string;
  students: {
    first_name: string;
    last_name: string;
  };
};

interface StudentCategoryTableProps {
  students: Analysis[];
  title: string;
  type: "good" | "weak";
}

export function StudentCategoryTable({
  students,
  title,
  type,
}: StudentCategoryTableProps) {
  const handleRowClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const bgColor = type === "good" ? "bg-green-50" : "bg-amber-50";
  const badgeColor =
    type === "good"
      ? "bg-green-100 text-green-800"
      : "bg-amber-100 text-amber-800";
  const Icon = type === "good" ? Check : AlertTriangle;
  const iconColor = type === "good" ? "text-green-500" : "text-amber-500";

  return (
    <div className="rounded-lg border bg-white shadow-sm">
      <div className={`flex items-center gap-2 border-b ${bgColor} p-4`}>
        <Icon className={`h-5 w-5 ${iconColor}`} />
        <h2 className="text-lg font-medium text-gray-900">{title}</h2>
        <span
          className={`ml-auto rounded-full ${badgeColor} px-2.5 py-1 text-xs font-medium`}
        >
          {students.length} élève{students.length !== 1 ? "s" : ""}
        </span>
      </div>

      {students.length === 0 ? (
        <div className="p-4 text-center text-sm text-gray-500">
          Aucun élève classé dans cette catégorie
        </div>
      ) : (
        <div className="overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 text-xs text-gray-500">
              <tr>
                <th className="px-4 py-2 text-left">Élève</th>
                <th className="px-4 py-2 text-left">Catégorie</th>
                <th className="px-4 py-2 text-right">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {students.map((analysis) => (
                <tr
                  key={analysis.id}
                  className="cursor-pointer hover:bg-gray-50"
                  onClick={() => handleRowClick(analysis.id)}
                >
                  <td className="px-4 py-3 text-sm font-medium">
                    {analysis.students?.last_name}{" "}
                    {analysis.students?.first_name}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                      {analysis.specific_category}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right text-xs text-gray-500">
                    {formatDistanceToNow(new Date(analysis.created_at), {
                      addSuffix: true,
                      locale: fr,
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
