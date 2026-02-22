"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// --- Hardcoded data ---

const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const CLASSES = [
  { id: 1, day: 1, time: "09:00", title: "A1 Beginners", students: 6, duration: 90 },
  { id: 2, day: 1, time: "14:00", title: "B2 Intermediate", students: 4, duration: 60 },
  { id: 3, day: 2, time: "10:30", title: "A2 Elementary", students: 8, duration: 90 },
  { id: 4, day: 3, time: "09:00", title: "C1 Advanced", students: 3, duration: 60 },
  { id: 5, day: 3, time: "18:00", title: "A1 Beginners", students: 5, duration: 90 },
  { id: 6, day: 4, time: "11:00", title: "B1 Pre-Intermediate", students: 7, duration: 60 },
  { id: 7, day: 5, time: "09:00", title: "B2 Intermediate", students: 4, duration: 60 },
  { id: 8, day: 5, time: "15:00", title: "A2 Elementary", students: 6, duration: 90 },
  { id: 9, day: 6, time: "10:00", title: "Conversation Club", students: 10, duration: 60 },
];

const STUDENTS = [
  { id: 1, name: "Alice Moretti", email: "alice.moretti@gmail.com", level: "A1", enrolled: "Jan 2025", status: "active" },
  { id: 2, name: "James Whitfield", email: "james.w@outlook.com", level: "B2", enrolled: "Sep 2024", status: "active" },
  { id: 3, name: "Sofia Dupont", email: "sofia.dupont@mail.fr", level: "A2", enrolled: "Feb 2025", status: "active" },
  { id: 4, name: "Lena Schmidt", email: "lena.schmidt@web.de", level: "C1", enrolled: "Mar 2024", status: "active" },
  { id: 5, name: "Carlos Fernandez", email: "carlos.f@hotmail.com", level: "B1", enrolled: "Oct 2024", status: "inactive" },
  { id: 6, name: "Yuki Tanaka", email: "yuki.tanaka@yahoo.jp", level: "A1", enrolled: "Jan 2025", status: "active" },
  { id: 7, name: "Emma Brown", email: "emma.brown@icloud.com", level: "B2", enrolled: "Jun 2024", status: "active" },
  { id: 8, name: "Marcos Silva", email: "marcos.silva@gmail.com", level: "A2", enrolled: "Feb 2025", status: "active" },
  { id: 9, name: "Hana Novak", email: "hana.novak@seznam.cz", level: "B1", enrolled: "Nov 2024", status: "inactive" },
  { id: 10, name: "Tom Bergstrom", email: "tom.berg@gmail.com", level: "C1", enrolled: "Apr 2024", status: "active" },
  { id: 11, name: "Mia Kowalski", email: "mia.k@wp.pl", level: "A1", enrolled: "Jan 2025", status: "active" },
  { id: 12, name: "David Okafor", email: "d.okafor@gmail.com", level: "A2", enrolled: "Feb 2025", status: "active" },
];

const LEVEL_COLORS: Record<string, string> = {
  A1: "bg-beige-200 text-black-700",
  A2: "bg-beige-300 text-black-800",
  B1: "bg-olive-100 text-olive-800",
  B2: "bg-olive-200 text-olive-900",
  C1: "bg-terracotta-100 text-terracotta-800",
};

// Get current week Mon–Sun dates
function getCurrentWeekDates() {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 = Sun
  const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  const monday = new Date(today);
  monday.setDate(today.getDate() + mondayOffset);
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d;
  });
}

export default function AdminPage() {
  const [search, setSearch] = useState("");
  const weekDates = getCurrentWeekDates();
  const todayDate = new Date().getDate();

  const filtered = STUDENTS.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-beige-50">
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">

        {/* Header */}
        <div>
          <p className="txt-overline text-olive-600">Admin</p>
          <h1 className="txt-h1">Dashboard</h1>
        </div>

        {/* Weekly Calendar */}
        <section>
          <h2 className="txt-h3 mb-4">This week</h2>
          <div className="grid grid-cols-7 gap-2">
            {WEEK_DAYS.map((day, i) => {
              const date = weekDates[i];
              const isToday = date.getDate() === todayDate;
              const dayClasses = CLASSES.filter((c) => c.day === i + 1);
              return (
                <div
                  key={day}
                  className={cn(
                    "rounded-xl border p-3 min-h-[180px] flex flex-col gap-2",
                    isToday
                      ? "border-olive-400 bg-olive-50"
                      : "border-beige-300 bg-white"
                  )}
                >
                  <div className="flex flex-col items-center pb-2 border-b border-beige-200">
                    <span
                      className={cn(
                        "txt-label text-xs font-semibold uppercase tracking-widest",
                        isToday ? "text-olive-700" : "text-black-400"
                      )}
                    >
                      {day}
                    </span>
                    <span
                      className={cn(
                        "text-lg font-bold leading-none mt-0.5",
                        isToday ? "text-olive-700" : "text-black-800"
                      )}
                    >
                      {date.getDate()}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5 flex-1">
                    {dayClasses.length === 0 && (
                      <p className="text-xs text-black-300 text-center mt-2">—</p>
                    )}
                    {dayClasses.map((c) => (
                      <div
                        key={c.id}
                        className="rounded-lg bg-olive-600 text-white px-2 py-1.5 text-xs"
                      >
                        <p className="font-semibold leading-tight">{c.time}</p>
                        <p className="leading-tight opacity-90 truncate">{c.title}</p>
                        <p className="opacity-70 leading-tight">{c.students} students</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Students Table */}
        <section>
          <div className="flex items-center justify-between mb-4 gap-4">
            <h2 className="txt-h3">Students</h2>
            <Input
              placeholder="Search by name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="max-w-xs"
            />
          </div>
          <Card>
            <CardContent className="p-0">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-beige-200 text-left">
                    <th className="px-5 py-3 txt-label text-black-500 font-semibold">Name</th>
                    <th className="px-5 py-3 txt-label text-black-500 font-semibold">Email</th>
                    <th className="px-5 py-3 txt-label text-black-500 font-semibold">Level</th>
                    <th className="px-5 py-3 txt-label text-black-500 font-semibold">Enrolled</th>
                    <th className="px-5 py-3 txt-label text-black-500 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-5 py-8 text-center text-black-400">
                        No students found.
                      </td>
                    </tr>
                  )}
                  {filtered.map((student, idx) => (
                    <tr
                      key={student.id}
                      className={cn(
                        "border-b border-beige-100 hover:bg-beige-50 transition-colors",
                        idx === filtered.length - 1 && "border-b-0"
                      )}
                    >
                      <td className="px-5 py-3 font-medium text-black-900">{student.name}</td>
                      <td className="px-5 py-3 text-black-500">{student.email}</td>
                      <td className="px-5 py-3">
                        <span
                          className={cn(
                            "inline-block rounded-md px-2 py-0.5 text-xs font-semibold",
                            LEVEL_COLORS[student.level] ?? "bg-beige-100 text-black-600"
                          )}
                        >
                          {student.level}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-black-500">{student.enrolled}</td>
                      <td className="px-5 py-3">
                        <Badge
                          variant={student.status === "active" ? "default" : "outline"}
                          className={cn(
                            student.status === "active"
                              ? "bg-olive-600 text-white hover:bg-olive-700"
                              : "text-black-400 border-beige-300"
                          )}
                        >
                          {student.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
          {filtered.length > 0 && (
            <p className="text-xs text-black-400 mt-2 px-1">
              {filtered.length} of {STUDENTS.length} students
            </p>
          )}
        </section>

      </div>
    </div>
  );
}
