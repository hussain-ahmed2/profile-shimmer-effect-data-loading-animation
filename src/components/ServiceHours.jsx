"use client";
import { useState } from "react";

export function formatTime(time24) {
  const [hour, minute] = time24.split(":").map(Number);
  const period = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 || 12;
  return `${hour12}:${minute.toString().padStart(2, "0")} ${period}`;
}
const dayNames = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

export default function ServiceHours({ serviceHours }) {
  const todayIndex = new Date().getDay();
  const today = dayNames[todayIndex];
  const { opens, closes } = serviceHours[today];

  const formattedOpens = formatTime(opens);
  const formattedCloses = formatTime(closes);

  const orderedDays = [
    ...dayNames.slice(todayIndex),
    ...dayNames.slice(0, todayIndex),
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex  gap-5 flex-col">
      <h3 className="font-bold text-lg flex flex-wrap items-center space-x-3">
        <span className="text-neutral-800"> Sales hours:</span>&nbsp;
        <div>
          <span className="capitalize text-base font-medium">{today}</span>{" "}
          <span className="text-sm font-normal mr-1">{`(From ${formattedOpens} to ${formattedCloses})`}</span>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="font-normal text-blue-500 underline underline-offset-4 text-sm cursor-pointer"
        >
          View all hours
        </button>
      </h3>
      {isOpen && (
        <div className="">
          {orderedDays.map((day) => {
            const { opens, closes } = serviceHours[day];
            const formattedOpens = formatTime(opens);
            const formattedCloses = formatTime(closes);
            return (
              <div key={day} className="flex justify-between gap-5">
                <span className="capitalize font-medium text-neutral-800">
                  {day}
                </span>
                <span className="">{`From ${formattedOpens} to ${formattedCloses}`}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
