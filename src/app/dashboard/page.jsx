"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function DashboardPage() {


  // Sidebar menu items and teams
  const sidebar = {
    nav: [
      { label: "Inbox", icon: "▷" },
      { label: "My issues", icon: "▷" },
      { label: "Views", icon: "▷" },
      { label: "Roadmaps", icon: "▷" },
      { label: "Teams", icon: "▷" },
    ],
    favorites: [
      { label: "GitHub Integration", icon: "▷" },
      { label: "Warp Mode", icon: "▷" },
    ],
    teams: [
      {
        name: "Design",
        children: [],
      },
      {
        name: "Engineering",
        children: [],
      },
    ],
  };

  // Board columns and tasks (sample, matching screenshot)
  const board = [
    {
      title: "In Progress",
      tasks: [
        { id: "ENG-248", title: "Release new website", tag: "Magic", date: "Oct 12", avatars: 1 },
        { id: "ENG-250", title: "Design translucent assets", tag: "Design", date: "Oct 12", avatars: 1 },
      ],
    },
    {
      title: "Backlog",
      tasks: [
        { id: "ENG-028", title: "Update documentation", tag: "", date: "Sep 30", avatars: 1 },
        { id: "ENG-199", title: "Batch loading of partial stores", tag: "SuperSync", date: "Sep 5", avatars: 1 },
        { id: "ENG-201", title: "Fix CSS in roadmap team graph", tag: "Bug", date: "Sep 5", avatars: 1 },
      ],
    },
    {
      title: "Done",
      tasks: [
        { id: "ENG-249", title: "Replace isometric screenshots", tag: "Design", date: "Oct 12", avatars: 1 },
        { id: "ENG-247", title: "Add magical details", tag: "Magic", date: "Oct 11", avatars: 1 },
        { id: "ENG-241", title: "Create router for view link unfurling", tag: "#8892", date: "Oct 1", avatars: 1 },
        { id: "ENG-220", title: "Gather feedback from customers", tag: "Testing", date: "Oct 25", avatars: 1 },
      ],
    },
  ];

  // State for selected project (simulate selection)
  const [selectedProject] = useState({
    name: "Unicore",
    description: "Escape from the game grid and reach the MCP",
    status: "In Progress",
    lead: "aarav",
    members: 3,
    target: "9 sept",
    team: "ENG",
    progress: { scope: 20, started: 2, completed: 4 },
  });

  return (
    <motion.div
      key={typeof window !== "undefined" ? window.location.pathname : undefined}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen bg-[#0a0a12] flex text-white"
    >
      {/* Sidebar */}
      <aside className="w-64 bg-[#10101a] border-r border-[#181828] flex flex-col min-h-screen">
        <Link href="/" className="flex items-center gap-2 px-4 py-3 border-b border-[#181828] hover:bg-[#181828] transition-colors">
          <Image
            src="/logo-assets/logo-light.png"
            alt="Exonium Logo"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <span className="font-bold text-lg tracking-tight">Exonium</span>
        </Link>
        <button className="mx-4 mt-4 mb-2 bg-[#23233a] hover:bg-[#2d2d4d] text-white font-medium py-2 px-4 rounded text-left">New issue</button>
        <nav className="flex flex-col gap-1 px-2 mt-2">
          {sidebar.nav.map((item) => (
            <a key={item.label} href="#" className="flex items-center gap-2 px-2 py-1 rounded hover:bg-[#181828] text-sm">
              <span>{item.icon}</span> {item.label}
            </a>
          ))}
        </nav>
        <div className="mt-6 px-2">
          <span className="text-xs text-[#b4bcd0] mb-1 block">Favorites</span>
          {sidebar.favorites.map((item) => (
            <a key={item.label} href="#" className="flex items-center gap-2 px-2 py-1 rounded hover:bg-[#181828] text-sm">
              <span>{item.icon}</span> {item.label}
            </a>
          ))}
        </div>
        <div className="mt-6 px-2">
          <span className="text-xs text-[#b4bcd0] mb-1 block">Your teams</span>
          {sidebar.teams.map((team) => (
            <div key={team.name} className="mb-2">
              <span className="font-semibold text-sm">{team.name}</span>
              {team.children.length > 0 && (
                <ul className="ml-3 mt-1 text-xs text-[#b4bcd0]">
                  {team.children.map((child) => (
                    <li key={child}>{child}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="flex-1" />
        <div className="px-4 py-3 border-t border-[#181828] text-xs text-[#b4bcd0]">Your teams</div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-row min-h-screen bg-[#0a0a12]">
        {/* Board */}
        <section className="flex-1 px-8 py-6 overflow-x-auto flex gap-6">
          <div className="flex flex-col w-full">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-semibold">Unicore</span>
              <span className="bg-[#23233a] text-xs px-2 py-1 rounded text-[#b4bcd0]">In Progress</span>
              <span className="ml-auto text-xs text-[#b4bcd0]">Escape from the game grid and reach the MCP</span>
            </div>
            <div className="flex gap-4">
              {board.map((col) => (
                <div key={col.title} className="w-72 bg-[#10101a] rounded-lg border border-[#181828] flex flex-col min-h-[400px]">
                  <div className="px-4 py-3 border-b border-[#181828] font-semibold text-base flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#23233a]" />
                    {col.title}
                  </div>
                  <div className="flex-1 flex flex-col gap-2 p-4">
                    {col.tasks.map((task) => (
                      <div key={task.id} className="bg-[#181828] rounded p-3 flex flex-col gap-1 border border-[#23233a]">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-[#b4bcd0]">{task.id}</span>
                          {task.tag && (
                            <span className="text-xs bg-[#23233a] px-2 py-0.5 rounded text-[#b4bcd0]">{task.tag}</span>
                          )}
                        </div>
                        <div className="text-sm font-medium text-white">{task.title}</div>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-[#b4bcd0]">{task.date}</span>
                          <div className="flex -space-x-2">
                            {[...Array(task.avatars)].map((_, i) => (
                              <span key={i} className="w-5 h-5 rounded-full bg-[#23233a] border-2 border-[#10101a] inline-block" />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project details panel */}
        <aside className="w-[340px] bg-[#10101a] border-l border-[#181828] p-6 flex flex-col gap-6 min-h-screen">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Image
                src="/logo-assets/logo-light.png"
                alt="Unicore Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-bold text-lg">Unicore</span>
            </div>
            <p className="text-[#b4bcd0] text-xs mb-2">Escape from the game grid and reach the MCP</p>
            <div className="text-xs text-[#b4bcd0] mb-1">Status: <span className="text-yellow-400">In Progress</span></div>
            <div className="text-xs text-[#b4bcd0] mb-1">Lead: <span className="text-white">aarav</span></div>
            <div className="text-xs text-[#b4bcd0] mb-1">Members: <span className="text-white">3</span></div>
            <div className="text-xs text-[#b4bcd0] mb-1">Target date: <span className="text-orange-400">9 sept</span></div>
            <div className="text-xs text-[#b4bcd0] mb-1">Team: <span className="text-blue-400">CSE</span></div>
          </div>
          <div>
            <h3 className="font-semibold mb-1 text-sm">Progress</h3>
            <div className="w-full h-20 bg-[#181828] rounded flex items-end overflow-hidden">
              {/* Simulated progress chart bars */}
              <div className="w-1/3 h-2/3 bg-blue-400 rounded-l"></div>
              <div className="w-1/3 h-1/2 bg-yellow-400"></div>
              <div className="w-1/3 h-3/4 bg-green-400 rounded-r"></div>
            </div>
            <div className="flex justify-between text-xs text-[#b4bcd0] mt-2">
              <span>Scope {selectedProject.progress.scope}</span>
              <span>Started {selectedProject.progress.started} - 38%</span>
              <span>Completed {selectedProject.progress.completed} - 16%</span>
            </div>
          </div>
        </aside>
      </main>
    </motion.div>
  );
}