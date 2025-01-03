"use client";

import Image from 'next/image';
import { useState } from 'react';

interface Highlight {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  sampleWeek: string[];
}

export default function FounderHighlights() {
  const [selectedHighlight, setSelectedHighlight] = useState<Highlight | null>(null);

  const highlights: Highlight[] = [
    {
      title: "Ironman Finisher",
      subtitle: "You can achieve YOUR impossible",
      image: "/images/ironman.png",
      alt: "Ironman Competition",
      sampleWeek: [
        "Monday: 2hr Bike + 30min Run",
        "Tuesday: 1hr Swim + Strength",
        "Wednesday: 1.5hr Run",
        "Thursday: 3hr Bike",
        "Friday: 1hr Swim + 45min Run",
        "Saturday: 4hr Bike + 30min Run",
        "Sunday: 2hr Run"
      ]
    },
    {
      title: "State Deadlift Record",
      subtitle: "Strength is Never a Weakness",
      image: "/images/deadlift.png",
      alt: "Breaking Deadlift Record",
      sampleWeek: [
        "Monday: Heavy Deadlifts + Accessories",
        "Tuesday: Upper Body Push",
        "Wednesday: Recovery/Mobility",
        "Thursday: Squat Focus + Accessories",
        "Friday: Upper Body Pull",
        "Saturday: Technique Work",
        "Sunday: Rest/Active Recovery"
      ]
    },
    {
      title: "Family First",
      subtitle: "My Why",
      image: "/images/family.png",
      alt: "Family Photo",
      sampleWeek: [
        "Monday: Family Morning Walk + Evening Workout",
        "Tuesday: Kids' Sports Practice + Quick HIIT",
        "Wednesday: Family Bike Ride",
        "Thursday: Park Workout with Kids",
        "Friday: Family Swim Session",
        "Saturday: Active Family Outing",
        "Sunday: Family Hike/Adventure"
      ]
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Experience & Achievements
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Backed by proven results and dedication to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight: Highlight, index: number) => (
            <button
              key={index}
              onClick={() => setSelectedHighlight(highlight)}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={highlight.image}
                  alt={highlight.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">
                  {highlight.subtitle}
                </p>
              </div>
            </button>
          ))}
        </div>

        {selectedHighlight && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {selectedHighlight.title}
                    </h2>
                    <p className="text-xl text-gray-600 mt-1">
                      {selectedHighlight.subtitle}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedHighlight(null)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="relative aspect-video bg-gray-100 mb-6 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-20 h-20 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Sample Training Week</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <ul className="space-y-2">
                      {selectedHighlight.sampleWeek.map((day: string, index: number) => (
                        <li key={index} className="text-gray-700">{day}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
