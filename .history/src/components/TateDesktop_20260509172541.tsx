"use client";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  Cpu,
  Folder,
  Gamepad2,
  Globe2,
  Mail,
  Monitor,
  Play,
  Power,
  Radio,
  Recycle,
  ShieldCheck,
  Terminal,
  Video,
  Wifi,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { ComponentType, MouseEvent, ReactNode } from "react";

type ThemeMode = "matrix" | "xp";
type WindowId = "terminal" | "links" | "projects" | "creator" | "contact";

type DesktopWindow = {
  id: WindowId;
  title: string;
  subtitle: string;
  icon: ComponentType<{ className?: string }>;
};

type DesktopShortcut = {
  id: WindowId | "business" | "trash";
  label: string;
  subtitle: string;
  icon: ComponentType<{ className?: string }>;
  action: () => void;
};

type ExternalLink = {
  title: string;
  label: string;
  description: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
};

type LinkGroup = {
  title: string;
  systemName: string;
  description: string;
  links: ExternalLink[];
};

type ProjectItem = {
  title: string;
  status: string;
  description: string;
  tags: string[];
};

type TerminalLine = {
  id: number;
  type: "input" | "output" | "success" | "error";
  text: string;
};

const SOCIAL_URLS = {
  llTech: "https://lltechsolutions.ca",
  youtubeMain: "https://youtube.com/@LLTechSolutions/videos",
  youtubeGaming: "https://youtube.com/@LLTechSolutions/videos",
  youtubeTech: "https://youtube.com/@LLTechSolutions/videos",
  facebook: "https://www.facebook.com/profile.php?id=61557129795810",
  tiktok: "https://www.tiktok.com/@lltechsolutions",
  linkedin: "https://www.linkedin.com/in/tatebyers/",
  email: "mailto:hello@tatebyers.ca",
};

const windows: DesktopWindow[] = [
  {
    id: "terminal",
    title: "tate@portfolio:~",
    subtitle: "System terminal",
    icon: Terminal,
  },
  {
    id: "links",
    title: "Link Router",
    subtitle: "Grouped channels",
    icon: Globe2,
  },
  {
    id: "projects",
    title: "Active Systems",
    subtitle: "Builds, brands, projects",
    icon: Cpu,
  },
  {
    id: "creator",
    title: "Creator Mode",
    subtitle: "Gaming + media",
    icon: Gamepad2,
  },
  {
    id: "contact",
    title: "Open Channel",
    subtitle: "Contact Tate",
    icon: Mail,
  },
];

const linkGroups: LinkGroup[] = [
  {
    title: "Business Systems",
    systemName: "BUSINESS_DIRECTORY",
    description:
      "Main company, services, client work, and professional technology systems.",
    links: [
      {
        title: "L&L Tech Solutions Website",
        label: "BUSINESS_PORTAL",
        description:
          "Websites, tech support, networking, CCTV, and digital services.",
        href: SOCIAL_URLS.llTech,
        icon: BriefcaseBusiness,
      },
    ],
  },
  {
    title: "YouTube Network",
    systemName: "VIDEO_ARCHIVE",
    description:
      "YouTube channels, long-form videos, project logs, gaming uploads, and tech media.",
    links: [
      {
        title: "L&L Tech Solutions YouTube",
        label: "MAIN_YOUTUBE",
        description:
          "Long-form videos, gaming uploads, project logs, tutorials, and future content.",
        href: SOCIAL_URLS.youtubeMain,
        icon: Video,
      },
      {
        title: "Gaming YouTube",
        label: "GAMING_ARCHIVE",
        description:
          "Gaming clips, highlights, uploads, future streams, and creator experiments.",
        href: SOCIAL_URLS.youtubeGaming,
        icon: Gamepad2,
      },
      {
        title: "Tech / Builds YouTube",
        label: "TECH_MEDIA",
        description:
          "Website builds, technical projects, repairs, tutorials, and behind-the-scenes work.",
        href: SOCIAL_URLS.youtubeTech,
        icon: Monitor,
      },
    ],
  },
  {
    title: "Social Profiles",
    systemName: "SOCIAL_ROUTER",
    description:
      "Public-facing social platforms, business content, and professional profiles.",
    links: [
      {
        title: "L&L Tech Solutions TikTok",
        label: "CLIP_ENGINE",
        description:
          "Gaming clips, tech projects, behind-the-scenes work, and creator content.",
        href: SOCIAL_URLS.tiktok,
        icon: Play,
      },
      {
        title: "Tate Byers Facebook",
        label: "SOCIAL_FEED",
        description:
          "Updates, service posts, local work, listings, and business content.",
        href: SOCIAL_URLS.facebook,
        icon: Globe2,
      },
      {
        title: "Tate Byers LinkedIn",
        label: "PROFESSIONAL_PROFILE",
        description:
          "Professional updates, projects, business activity, and career-facing content.",
        href: SOCIAL_URLS.linkedin,
        icon: BriefcaseBusiness,
      },
    ],
  },
  {
    title: "Contact Channels",
    systemName: "OPEN_CHANNEL",
    description: "Direct contact and business inquiry routing.",
    links: [
      {
        title: "Email Tate",
        label: "DIRECT_CONTACT",
        description:
          "Business, websites, tech work, collaborations, creator ideas, or project questions.",
        href: SOCIAL_URLS.email,
        icon: Mail,
      },
    ],
  },
];

const projects: ProjectItem[] = [
  {
    title: "L&L Tech Solutions",
    status: "ONLINE",
    description:
      "Main technology company for websites, tech support, networking, CCTV, and client systems.",
    tags: ["Websites", "Tech Support", "Networking", "CCTV"],
  },
  {
    title: "Retro TV / Tate’s TV",
    status: "IN DEVELOPMENT",
    description:
      "A custom live-TV style web app with channels, guide systems, themes, and creator-controlled media.",
    tags: ["Next.js", "React", "Streaming UI", "Gaming"],
  },
  {
    title: "TateByers.ca",
    status: "BOOTING",
    description:
      "Personal digital operating system for business links, creator channels, projects, and identity.",
    tags: ["Portfolio", "OS UI", "Personal Brand", "Creator Hub"],
  },
];

const bootLines = [
  "Initializing Tate Portfolio System...",
  "Loading personal brand interface...",
  "Mounting /business/lltechsolutions...",
  "Checking creator channels...",
  "Starting desktop environment...",
  "Injecting caffeine into UI pipeline...",
  "Warning: normal portfolio templates rejected.",
  "Launching Tate OS...",
];

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function TateDesktop() {
  const [theme, setTheme] = useState<ThemeMode>("matrix");
  const [entered, setEntered] = useState(false);
  const [booting, setBooting] = useState(false);
  const [bootIndex, setBootIndex] = useState(0);
  const [activeWindow, setActiveWindow] = useState<WindowId>("terminal");
  const [openWindows, setOpenWindows] = useState<WindowId[]>([
    "terminal",
    "links",
  ]);
  const [startOpen, setStartOpen] = useState(false);

  function toggleTheme() {
    setTheme((current) => (current === "matrix" ? "xp" : "matrix"));
    setStartOpen(false);
  }

  function playBootSound() {
    try {
      const AudioContextClass =
        window.AudioContext ||
        (window as typeof window & { webkitAudioContext?: typeof AudioContext })
          .webkitAudioContext;

      if (!AudioContextClass) return;

      const ctx = new AudioContextClass();
      const now = ctx.currentTime;

      const notes =
        theme === "xp"
          ? [
              { frequency: 392, start: 0, duration: 0.12 },
              { frequency: 523, start: 0.14, duration: 0.14 },
              { frequency: 659, start: 0.3, duration: 0.18 },
            ]
          : [
              { frequency: 120, start: 0, duration: 0.08 },
              { frequency: 240, start: 0.09, duration: 0.08 },
              { frequency: 360, start: 0.18, duration: 0.1 },
              { frequency: 520, start: 0.3, duration: 0.14 },
            ];

      notes.forEach((note) => {
        const oscillator = ctx.createOscillator();
        const gain = ctx.createGain();

        oscillator.type = theme === "xp" ? "sine" : "square";
        oscillator.frequency.setValueAtTime(note.frequency, now + note.start);

        gain.gain.setValueAtTime(0.0001, now + note.start);
        gain.gain.exponentialRampToValueAtTime(0.07, now + note.start + 0.01);
        gain.gain.exponentialRampToValueAtTime(
          0.0001,
          now + note.start + note.duration,
        );

        oscillator.connect(gain);
        gain.connect(ctx.destination);

        oscillator.start(now + note.start);
        oscillator.stop(now + note.start + note.duration + 0.02);
      });
    } catch {
      // Optional audio only.
    }
  }

  function enterSite() {
    playBootSound();
    setBooting(true);
    setBootIndex(0);
  }

  function openWindow(id: WindowId) {
    setOpenWindows((current) =>
      current.includes(id) ? current : [...current, id],
    );
    setActiveWindow(id);
    setStartOpen(false);
  }

  function closeWindow(id: WindowId) {
    setOpenWindows((current) => {
      const next = current.filter((windowId) => windowId !== id);

      if (activeWindow === id) {
        const fallback = next[next.length - 1];

        if (fallback) {
          setActiveWindow(fallback);
        }
      }

      return next;
    });
  }

  function closeAllWindows() {
    setOpenWindows([]);
    setStartOpen(false);
  }

  function openAllWindows() {
    setOpenWindows(["terminal", "links", "projects", "creator", "contact"]);
    setActiveWindow("contact");
    setStartOpen(false);
  }

  const desktopShortcuts: DesktopShortcut[] = [
    {
      id: "terminal",
      label: "Terminal",
      subtitle: "System shell",
      icon: Terminal,
      action: () => openWindow("terminal"),
    },
    {
      id: "links",
      label: "My Links",
      subtitle: "Grouped router",
      icon: Globe2,
      action: () => openWindow("links"),
    },
    {
      id: "projects",
      label: "Projects",
      subtitle: "Active systems",
      icon: Folder,
      action: () => openWindow("projects"),
    },
    {
      id: "creator",
      label: "Gaming",
      subtitle: "Creator mode",
      icon: Gamepad2,
      action: () => openWindow("creator"),
    },
    {
      id: "contact",
      label: "Contact",
      subtitle: "Open channel",
      icon: Mail,
      action: () => openWindow("contact"),
    },
    {
      id: "business",
      label: "L&L Tech",
      subtitle: "Business site",
      icon: BriefcaseBusiness,
      action: () => window.open(SOCIAL_URLS.llTech, "_blank", "noopener,noreferrer"),
    },
    {
      id: "trash",
      label: "Recycle Bin",
      subtitle: "boring_templates",
      icon: Recycle,
      action: closeAllWindows,
    },
  ];

  useEffect(() => {
    if (!booting) return;

    if (bootIndex < bootLines.length) {
      const timer = window.setTimeout(() => {
        setBootIndex((current) => current + 1);
      }, 280);

      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(() => {
      setEntered(true);
      setBooting(false);
    }, 500);

    return () => window.clearTimeout(timer);
  }, [booting, bootIndex]);

  if (!entered) {
    return (
      <main
        className={cx(
          "relative min-h-screen overflow-hidden",
          theme === "matrix"
            ? "bg-black text-green-100"
            : "xp-wallpaper text-white",
        )}
      >
        {theme === "matrix" ? <MatrixRain /> : <XPWallpaper />}

        <button
          type="button"
          onClick={toggleTheme}
          className={cx(
            "fixed right-5 top-5 z-30 rounded-xl px-4 py-3 font-mono text-xs font-black uppercase tracking-[0.18em] shadow-xl transition hover:-translate-y-0.5",
            theme === "matrix"
              ? "border border-sky-300/35 bg-sky-400/10 text-sky-200 hover:bg-sky-400/20"
              : "border border-white/40 bg-[#245edc] text-white hover:bg-[#174bb8]",
          )}
        >
          {theme === "matrix" ? "Enter XP Mode" : "Return Matrix"}
        </button>

        <div
          className={cx(
            "absolute inset-0",
            theme === "matrix"
              ? "bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_35%),linear-gradient(180deg,rgba(0,0,0,0.25),rgba(0,0,0,0.88))]"
              : "bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(0,0,0,0.16))]",
          )}
        />

        <section className="relative z-10 flex min-h-screen items-center justify-center px-5">
          <div
            className={cx(
              "w-full max-w-4xl p-6 shadow-2xl backdrop-blur-md sm:p-10",
              theme === "matrix"
                ? "rounded-[2rem] border border-green-400/25 bg-black/65 shadow-[0_0_90px_rgba(34,197,94,0.18)]"
                : "rounded-2xl border-2 border-[#1847a3] bg-[#ece9d8] text-[#1d1d1d] shadow-[0_30px_120px_rgba(0,0,0,0.38)]",
            )}
          >
            <div
              className={cx(
                "mb-8 flex items-center justify-between pb-5",
                theme === "matrix"
                  ? "border-b border-green-400/20"
                  : "border-b border-[#b5b09a]",
              )}
            >
              <div className="flex items-center gap-3">
                <div
                  className={cx(
                    "grid size-11 place-items-center rounded-xl border",
                    theme === "matrix"
                      ? "border-green-400/35 bg-green-400/10"
                      : "border-[#174bb8] bg-[#245edc]",
                  )}
                >
                  {theme === "matrix" ? (
                    <Terminal className="size-5 text-green-300" />
                  ) : (
                    <Monitor className="size-5 text-white" />
                  )}
                </div>

                <div>
                  <p
                    className={cx(
                      "font-mono text-xs uppercase tracking-[0.28em]",
                      theme === "matrix" ? "text-green-400" : "text-[#174bb8]",
                    )}
                  >
                    {theme === "matrix"
                      ? "TATE_OS / PUBLIC_ACCESS"
                      : "TATE XP / WELCOME.EXE"}
                  </p>
                  <p
                    className={cx(
                      "mt-1 font-mono text-xs",
                      theme === "matrix" ? "text-green-700" : "text-[#486e21]",
                    )}
                  >
                    developed_by_tate_byers.exe
                  </p>
                </div>
              </div>

              <div
                className={cx(
                  "hidden items-center gap-2 font-mono text-xs sm:flex",
                  theme === "matrix" ? "text-green-500" : "text-[#174bb8]",
                )}
              >
                <span
                  className={cx(
                    "size-2 rounded-full shadow-[0_0_20px_rgba(74,222,128,0.9)]",
                    theme === "matrix" ? "bg-green-400" : "bg-[#75c043]",
                  )}
                />
                SIGNAL FOUND
              </div>
            </div>

            {!booting ? (
              <>
                <p
                  className={cx(
                    "mb-4 font-mono text-sm",
                    theme === "matrix" ? "text-green-400" : "text-[#174bb8]",
                  )}
                >
                  &gt; unauthorized boring portfolios blocked.
                </p>

                <h1
                  className={cx(
                    "text-4xl font-black uppercase tracking-tight sm:text-6xl lg:text-7xl",
                    theme === "matrix"
                      ? "glitch-text text-green-100"
                      : "text-[#174bb8]",
                  )}
                >
                  Welcome to the
                  <span
                    className={cx(
                      "block",
                      theme === "matrix" ? "text-green-400" : "text-[#2a7f16]",
                    )}
                  >
                    Tate Byers Portfolio System
                  </span>
                </h1>

                <p
                  className={cx(
                    "mt-6 max-w-2xl font-mono text-sm leading-7 sm:text-base",
                    theme === "matrix" ? "text-green-200/80" : "text-[#333333]",
                  )}
                >
                  This is not a normal link page. This is the control room for
                  Tate Byers — business, tech, gaming, creator content, active
                  projects, and whatever gets built next.
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={enterSite}
                    className={cx(
                      "group inline-flex items-center justify-center rounded-xl px-6 py-4 font-mono text-sm font-black uppercase tracking-[0.2em] shadow-xl transition hover:-translate-y-0.5",
                      theme === "matrix"
                        ? "border border-green-300/40 bg-green-400 text-black shadow-[0_0_45px_rgba(74,222,128,0.3)] hover:bg-green-300"
                        : "border border-[#103f91] bg-[#245edc] text-white hover:bg-[#174bb8]",
                    )}
                  >
                    Enter Site
                    <Power className="ml-3 size-4 transition group-hover:rotate-12" />
                  </button>

                  <a
                    href="https://google.com"
                    className={cx(
                      "inline-flex items-center justify-center rounded-xl border px-6 py-4 font-mono text-sm font-black uppercase tracking-[0.2em] transition hover:-translate-y-0.5",
                      theme === "matrix"
                        ? "border-green-400/20 bg-black/50 text-green-300 hover:border-green-300/50 hover:bg-green-400/10"
                        : "border-[#b5b09a] bg-white text-[#174bb8] hover:border-[#174bb8]",
                    )}
                  >
                    Leave Matrix
                  </a>
                </div>

                <div
                  className={cx(
                    "mt-8 rounded-xl border p-4 font-mono text-xs leading-6",
                    theme === "matrix"
                      ? "border-green-400/15 bg-green-950/10 text-green-300/75"
                      : "border-[#b5b09a] bg-white text-[#333333]",
                  )}
                >
                  <p>&gt; press ENTER SITE to boot the desktop environment</p>
                  <p>&gt; terminal supports real site navigation commands</p>
                  <p>&gt; links are grouped by business, YouTube, social, and contact</p>
                </div>
              </>
            ) : (
              <BootSequence theme={theme} bootIndex={bootIndex} />
            )}
          </div>
        </section>
      </main>
    );
  }

  return (
    <main
      className={cx(
        "relative min-h-screen overflow-hidden",
        theme === "matrix"
          ? "bg-[#03120a] text-green-100"
          : "xp-wallpaper text-[#1d1d1d]",
      )}
      onClick={() => setStartOpen(false)}
    >
      {theme === "matrix" ? <MatrixRain /> : <XPWallpaper />}

      <div
        className={cx(
          "absolute inset-0",
          theme === "matrix"
            ? "bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.1),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.15),rgba(0,0,0,0.75))]"
            : "bg-transparent",
        )}
      />

      <div className="relative z-10 flex min-h-screen flex-col">
        <DesktopTopBar
          theme={theme}
          openWindows={openWindows}
          activeWindow={activeWindow}
          startOpen={startOpen}
          onToggleTheme={toggleTheme}
          onOpenWindow={openWindow}
          onOpenAll={openAllWindows}
          onCloseAll={closeAllWindows}
          onToggleStart={(event) => {
            event.stopPropagation();
            setStartOpen((current) => !current);
          }}
        />

        {theme === "xp" ? (
          <XPDesktop
            shortcuts={desktopShortcuts}
            openWindows={openWindows}
            activeWindow={activeWindow}
            onOpenWindow={openWindow}
            onFocusWindow={setActiveWindow}
            onCloseWindow={closeWindow}
            onCloseAll={closeAllWindows}
            onToggleTheme={toggleTheme}
          />
        ) : (
          <MatrixDesktop
            openWindows={openWindows}
            activeWindow={activeWindow}
            onOpenWindow={openWindow}
            onFocusWindow={setActiveWindow}
            onCloseWindow={closeWindow}
            onCloseAll={closeAllWindows}
            onToggleTheme={toggleTheme}
          />
        )}
      </div>
    </main>
  );
}

function BootSequence({
  theme,
  bootIndex,
}: {
  theme: ThemeMode;
  bootIndex: number;
}) {
  return (
    <div className="min-h-[360px]">
      <p
        className={cx(
          "mb-6 font-mono text-sm uppercase tracking-[0.22em]",
          theme === "matrix" ? "text-green-400" : "text-[#174bb8]",
        )}
      >
        Boot Sequence Started
      </p>

      <div
        className={cx(
          "space-y-3 font-mono text-sm",
          theme === "matrix" ? "text-green-300" : "text-[#333333]",
        )}
      >
        {bootLines.slice(0, bootIndex).map((line) => (
          <p key={line}>
            <span
              className={
                theme === "matrix" ? "text-green-600" : "text-[#2a7f16]"
              }
            >
              [OK]
            </span>{" "}
            {line}
          </p>
        ))}

        {bootIndex < bootLines.length && (
          <p
            className={cx(
              "animate-pulse",
              theme === "matrix" ? "text-green-400" : "text-[#174bb8]",
            )}
          >
            &gt; {bootLines[bootIndex]}
          </p>
        )}
      </div>

      <div
        className={cx(
          "mt-8 h-3 overflow-hidden rounded-full border",
          theme === "matrix"
            ? "border-green-400/20 bg-black"
            : "border-[#103f91] bg-white",
        )}
      >
        <div
          className={cx(
            "h-full transition-all duration-300",
            theme === "matrix"
              ? "bg-green-400 shadow-[0_0_25px_rgba(74,222,128,0.85)]"
              : "bg-[#245edc]",
          )}
          style={{
            width: `${Math.min(100, (bootIndex / bootLines.length) * 100)}%`,
          }}
        />
      </div>
    </div>
  );
}

function MatrixDesktop({
  openWindows,
  activeWindow,
  onOpenWindow,
  onFocusWindow,
  onCloseWindow,
  onCloseAll,
  onToggleTheme,
}: {
  openWindows: WindowId[];
  activeWindow: WindowId;
  onOpenWindow: (id: WindowId) => void;
  onFocusWindow: (id: WindowId) => void;
  onCloseWindow: (id: WindowId) => void;
  onCloseAll: () => void;
  onToggleTheme: () => void;
}) {
  return (
    <div className="grid flex-1 grid-cols-1 gap-5 p-5 lg:grid-cols-[220px_1fr]">
      <aside className="rounded-2xl border border-green-400/20 bg-black/50 p-4 backdrop-blur-md">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-green-500">
          Desktop
        </p>

        <div className="grid gap-3">
          {windows.map((windowItem) => {
            const Icon = windowItem.icon;
            const isActive = activeWindow === windowItem.id;

            return (
              <button
                key={windowItem.id}
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  onOpenWindow(windowItem.id);
                }}
                className={cx(
                  "group flex items-center gap-3 rounded-xl border p-3 text-left transition",
                  isActive
                    ? "border-green-300/45 bg-green-400/15"
                    : "border-green-400/10 bg-black/30 hover:border-green-300/30 hover:bg-green-400/10",
                )}
              >
                <div className="grid size-10 place-items-center rounded-lg border border-green-400/20 bg-green-400/10">
                  <Icon className="size-5 text-green-300" />
                </div>

                <div>
                  <p className="font-mono text-xs font-bold text-green-100">
                    {windowItem.title}
                  </p>
                  <p className="mt-1 text-[11px] text-green-600">
                    {windowItem.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </aside>

      <section className="relative min-h-[720px] rounded-2xl border border-green-400/15 bg-black/35 p-4 backdrop-blur-md">
        <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(rgba(74,222,128,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.045)_1px,transparent_1px)] bg-[size:32px_32px]" />

        <MatrixHud />

        <WindowLayer
          theme="matrix"
          openWindows={openWindows}
          activeWindow={activeWindow}
          onOpenWindow={onOpenWindow}
          onFocusWindow={onFocusWindow}
          onCloseWindow={onCloseWindow}
          onCloseAll={onCloseAll}
          onToggleTheme={onToggleTheme}
        />
      </section>
    </div>
  );
}

function XPDesktop({
  shortcuts,
  openWindows,
  activeWindow,
  onOpenWindow,
  onFocusWindow,
  onCloseWindow,
  onCloseAll,
  onToggleTheme,
}: {
  shortcuts: DesktopShortcut[];
  openWindows: WindowId[];
  activeWindow: WindowId;
  onOpenWindow: (id: WindowId) => void;
  onFocusWindow: (id: WindowId) => void;
  onCloseWindow: (id: WindowId) => void;
  onCloseAll: () => void;
  onToggleTheme: () => void;
}) {
  return (
    <div className="relative min-h-[calc(100vh-3rem)] flex-1 px-4 pb-20 pt-4">
      <div className="absolute left-4 top-4 z-20 grid w-[116px] gap-5 sm:left-6 sm:top-6">
        {shortcuts.map((shortcut) => (
          <XPDesktopIcon key={shortcut.id} shortcut={shortcut} />
        ))}
      </div>

      <section className="relative ml-0 min-h-[calc(100vh-7rem)] rounded-xl border border-white/25 bg-white/5 p-3 shadow-inner sm:ml-36">
        <XPStickyNote />

        {openWindows.length === 0 && (
          <div className="absolute left-1/2 top-1/2 max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border-2 border-[#1847a3] bg-[#ece9d8] p-6 text-center shadow-2xl">
            <p className="text-lg font-black text-[#174bb8]">
              No windows open.
            </p>
            <p className="mt-2 text-sm text-[#333333]">
              Click a desktop icon to launch a Tate XP app.
            </p>
          </div>
        )}

        <WindowLayer
          theme="xp"
          openWindows={openWindows}
          activeWindow={activeWindow}
          onOpenWindow={onOpenWindow}
          onFocusWindow={onFocusWindow}
          onCloseWindow={onCloseWindow}
          onCloseAll={onCloseAll}
          onToggleTheme={onToggleTheme}
        />
      </section>
    </div>
  );
}

function XPDesktopIcon({ shortcut }: { shortcut: DesktopShortcut }) {
  const Icon = shortcut.icon;

  return (
    <button
      type="button"
      onClick={(event) => {
        event.stopPropagation();
        shortcut.action();
      }}
      className="group flex flex-col items-center gap-2 rounded-lg p-2 text-center transition hover:bg-white/20 focus:bg-white/25 focus:outline-none"
    >
      <div className="grid size-14 place-items-center rounded-xl border border-white/35 bg-gradient-to-b from-[#f7fbff] to-[#bfd9ff] shadow-lg">
        <Icon className="size-8 text-[#174bb8]" />
      </div>

      <div>
        <p className="max-w-[95px] rounded bg-black/20 px-1 text-xs font-bold leading-4 text-white shadow-[0_1px_2px_rgba(0,0,0,0.75)]">
          {shortcut.label}
        </p>
        <p className="mt-1 hidden max-w-[95px] text-[10px] leading-3 text-white/85 drop-shadow sm:block">
          {shortcut.subtitle}
        </p>
      </div>
    </button>
  );
}

function WindowLayer({
  theme,
  openWindows,
  activeWindow,
  onOpenWindow,
  onFocusWindow,
  onCloseWindow,
  onCloseAll,
  onToggleTheme,
}: {
  theme: ThemeMode;
  openWindows: WindowId[];
  activeWindow: WindowId;
  onOpenWindow: (id: WindowId) => void;
  onFocusWindow: (id: WindowId) => void;
  onCloseWindow: (id: WindowId) => void;
  onCloseAll: () => void;
  onToggleTheme: () => void;
}) {
  return (
    <div className="relative z-10 grid gap-4 xl:grid-cols-2">
      {openWindows.includes("terminal") && (
        <OSWindow
          title="tate@portfolio:~"
          subtitle="terminal"
          isActive={activeWindow === "terminal"}
          theme={theme}
          onFocus={() => onFocusWindow("terminal")}
          onClose={() => onCloseWindow("terminal")}
        >
          <TerminalContent
            theme={theme}
            onOpenWindow={onOpenWindow}
            onCloseWindow={onCloseWindow}
            onCloseAll={onCloseAll}
            onToggleTheme={onToggleTheme}
          />
        </OSWindow>
      )}

      {openWindows.includes("links") && (
        <OSWindow
          title="link-router.app"
          subtitle="grouped channels"
          isActive={activeWindow === "links"}
          theme={theme}
          onFocus={() => onFocusWindow("links")}
          onClose={() => onCloseWindow("links")}
        >
          <LinksContent theme={theme} />
        </OSWindow>
      )}

      {openWindows.includes("projects") && (
        <OSWindow
          title="active-systems.monitor"
          subtitle="projects"
          isActive={activeWindow === "projects"}
          theme={theme}
          onFocus={() => onFocusWindow("projects")}
          onClose={() => onCloseWindow("projects")}
        >
          <ProjectsContent theme={theme} />
        </OSWindow>
      )}

      {openWindows.includes("creator") && (
        <OSWindow
          title="creator-mode.panel"
          subtitle="gaming/media"
          isActive={activeWindow === "creator"}
          theme={theme}
          onFocus={() => onFocusWindow("creator")}
          onClose={() => onCloseWindow("creator")}
        >
          <CreatorContent theme={theme} />
        </OSWindow>
      )}

      {openWindows.includes("contact") && (
        <OSWindow
          title="open-channel.mail"
          subtitle="contact"
          isActive={activeWindow === "contact"}
          theme={theme}
          onFocus={() => onFocusWindow("contact")}
          onClose={() => onCloseWindow("contact")}
        >
          <ContactContent theme={theme} />
        </OSWindow>
      )}
    </div>
  );
}

function TerminalContent({
  theme,
  onOpenWindow,
  onCloseWindow,
  onCloseAll,
  onToggleTheme,
}: {
  theme: ThemeMode;
  onOpenWindow: (id: WindowId) => void;
  onCloseWindow: (id: WindowId) => void;
  onCloseAll: () => void;
  onToggleTheme: () => void;
}) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      id: 1,
      type: "output",
      text: "Tate Portfolio Terminal initialized.",
    },
    {
      id: 2,
      type: "output",
      text: "Type `help` to view available commands.",
    },
  ]);
  const [lineId, setLineId] = useState(3);
  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  function pushLines(lines: Array<Omit<TerminalLine, "id">>) {
    setHistory((current) => [
      ...current,
      ...lines.map((line, index) => ({
        ...line,
        id: lineId + index,
      })),
    ]);

    setLineId((current) => current + lines.length);
  }

  function openExternal(url: string) {
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function runCommand(rawCommand: string) {
    const command = rawCommand.trim();
    const normalized = command.toLowerCase();

    if (!command) return;

    if (normalized === "clear" || normalized === "cls") {
      setHistory([]);
      setInput("");
      return;
    }

    const inputLine: Omit<TerminalLine, "id"> = {
      type: "input",
      text: `tate@portfolio:~$ ${command}`,
    };

    const output: Array<Omit<TerminalLine, "id">> = [];

    if (normalized === "help") {
      output.push(
        { type: "output", text: "Available commands:" },
        { type: "output", text: "help, ls, whoami, about, mission, date, clear" },
        {
          type: "output",
          text: "open terminal, open links, open projects, open creator, open contact",
        },
        {
          type: "output",
          text: "close links, close projects, close creator, close contact, close all",
        },
        {
          type: "output",
          text: "xp, matrix, lltech, youtube, gaming youtube, tech youtube, facebook, tiktok, linkedin",
        },
      );
    } else if (normalized === "ls" || normalized === "dir") {
      output.push(
        { type: "output", text: "business-systems/" },
        { type: "output", text: "youtube-network/" },
        { type: "output", text: "social-profiles/" },
        { type: "output", text: "contact-channels/" },
        { type: "output", text: "terminal.app" },
        { type: "output", text: "active-systems.monitor" },
      );
    } else if (normalized === "whoami") {
      output.push({
        type: "success",
        text: "Tate Byers — founder, developer, gamer, creator, builder.",
      });
    } else if (normalized === "about") {
      output.push({
        type: "output",
        text: "TateByers.ca is a personal operating-system style portfolio for business links, creator channels, projects, and digital identity.",
      });
    } else if (normalized === "mission") {
      output.push({
        type: "output",
        text: "Build websites, tech systems, content, brands, and projects that do not look like recycled templates.",
      });
    } else if (normalized === "date" || normalized === "time") {
      output.push({
        type: "success",
        text: new Date().toLocaleString(),
      });
    } else if (
      normalized === "open terminal" ||
      normalized === "terminal" ||
      normalized === "cd terminal"
    ) {
      onOpenWindow("terminal");
      output.push({ type: "success", text: "terminal.app is active." });
    } else if (
      normalized === "open links" ||
      normalized === "links" ||
      normalized === "cd links"
    ) {
      onOpenWindow("links");
      output.push({ type: "success", text: "Opened grouped link-router.app." });
    } else if (
      normalized === "open projects" ||
      normalized === "projects" ||
      normalized === "cd projects"
    ) {
      onOpenWindow("projects");
      output.push({ type: "success", text: "Opened active-systems.monitor." });
    } else if (
      normalized === "open creator" ||
      normalized === "creator" ||
      normalized === "gaming" ||
      normalized === "cd creator"
    ) {
      onOpenWindow("creator");
      output.push({ type: "success", text: "Opened creator-mode.panel." });
    } else if (
      normalized === "open contact" ||
      normalized === "contact" ||
      normalized === "email" ||
      normalized === "cd contact"
    ) {
      onOpenWindow("contact");
      output.push({ type: "success", text: "Opened open-channel.mail." });
    } else if (normalized === "close terminal") {
      output.push({
        type: "error",
        text: "Terminal refused to close itself. Use the red X if you really want to kill the shell.",
      });
    } else if (normalized === "close links") {
      onCloseWindow("links");
      output.push({ type: "success", text: "Closed link-router.app." });
    } else if (normalized === "close projects") {
      onCloseWindow("projects");
      output.push({ type: "success", text: "Closed active-systems.monitor." });
    } else if (normalized === "close creator") {
      onCloseWindow("creator");
      output.push({ type: "success", text: "Closed creator-mode.panel." });
    } else if (normalized === "close contact") {
      onCloseWindow("contact");
      output.push({ type: "success", text: "Closed open-channel.mail." });
    } else if (
      normalized === "close all" ||
      normalized === "kill all" ||
      normalized === "shutdown windows"
    ) {
      onCloseAll();
      output.push({ type: "success", text: "Closed all windows. Desktop cleared." });
    } else if (normalized === "xp" || normalized === "xp mode") {
      if (theme === "xp") {
        output.push({ type: "output", text: "Already running Tate XP." });
      } else {
        onToggleTheme();
        output.push({ type: "success", text: "Switching to Tate XP..." });
      }
    } else if (normalized === "matrix" || normalized === "matrix mode") {
      if (theme === "matrix") {
        output.push({ type: "output", text: "Already running Matrix mode." });
      } else {
        onToggleTheme();
        output.push({ type: "success", text: "Returning to Matrix mode..." });
      }
    } else if (
      normalized === "lltech" ||
      normalized === "l&l" ||
      normalized === "open lltech" ||
      normalized === "open business"
    ) {
      openExternal(SOCIAL_URLS.llTech);
      output.push({
        type: "success",
        text: "Opening L&L Tech Solutions in a new tab.",
      });
    } else if (
      normalized === "youtube" ||
      normalized === "main youtube" ||
      normalized === "open youtube"
    ) {
      openExternal(SOCIAL_URLS.youtubeMain);
      output.push({ type: "success", text: "Opening main YouTube in a new tab." });
    } else if (
      normalized === "gaming youtube" ||
      normalized === "open gaming youtube"
    ) {
      openExternal(SOCIAL_URLS.youtubeGaming);
      output.push({
        type: "success",
        text: "Opening gaming YouTube in a new tab.",
      });
    } else if (
      normalized === "tech youtube" ||
      normalized === "builds youtube" ||
      normalized === "open tech youtube"
    ) {
      openExternal(SOCIAL_URLS.youtubeTech);
      output.push({
        type: "success",
        text: "Opening tech/builds YouTube in a new tab.",
      });
    } else if (normalized === "facebook" || normalized === "open facebook") {
      openExternal(SOCIAL_URLS.facebook);
      output.push({ type: "success", text: "Opening Facebook in a new tab." });
    } else if (normalized === "tiktok" || normalized === "open tiktok") {
      openExternal(SOCIAL_URLS.tiktok);
      output.push({ type: "success", text: "Opening TikTok in a new tab." });
    } else if (normalized === "linkedin" || normalized === "open linkedin") {
      openExternal(SOCIAL_URLS.linkedin);
      output.push({ type: "success", text: "Opening LinkedIn in a new tab." });
    } else if (normalized === "sudo make me famous") {
      output.push({
        type: "success",
        text: "Permission granted. Deploy consistency, content, and better taste than everyone else.",
      });
    } else {
      output.push({
        type: "error",
        text: `Command not found: ${command}. Type \`help\` for available commands.`,
      });
    }

    pushLines([inputLine, ...output]);
    setInput("");
  }

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <div
      className={cx(
        "rounded-xl border p-4 font-mono text-sm",
        theme === "matrix"
          ? "border-green-400/15 bg-black/40 text-green-300"
          : "border-[#b5b09a] bg-white text-[#1d1d1d]",
      )}
      onClick={(event) => event.stopPropagation()}
    >
      <div className="max-h-[420px] overflow-y-auto pr-2">
        {history.length === 0 && (
          <p
            className={theme === "matrix" ? "text-green-600" : "text-[#174bb8]"}
          >
            Terminal cleared. Type `help` to continue.
          </p>
        )}

        {history.map((line) => (
          <p
            key={line.id}
            className={cx(
              "whitespace-pre-wrap break-words leading-7",
              line.type === "input" &&
                (theme === "matrix" ? "text-green-100" : "text-[#174bb8]"),
              line.type === "output" &&
                (theme === "matrix" ? "text-green-300" : "text-[#1d1d1d]"),
              line.type === "success" &&
                (theme === "matrix" ? "text-emerald-300" : "text-[#2a7f16]"),
              line.type === "error" &&
                (theme === "matrix" ? "text-red-300" : "text-[#b42318]"),
            )}
          >
            {line.text}
          </p>
        ))}

        <div ref={terminalEndRef} />
      </div>

      <form
        className={cx(
          "mt-4 flex items-center gap-2 border-t pt-4",
          theme === "matrix" ? "border-green-400/15" : "border-[#b5b09a]",
        )}
        onSubmit={(event) => {
          event.preventDefault();
          runCommand(input);
        }}
      >
        <span
          className={cx(
            "shrink-0",
            theme === "matrix" ? "text-green-500" : "text-[#174bb8]",
          )}
        >
          tate@portfolio:~$
        </span>

        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          className={cx(
            "min-w-0 flex-1 bg-transparent outline-none",
            theme === "matrix"
              ? "text-green-100 placeholder:text-green-700"
              : "text-[#111111] placeholder:text-[#777777]",
          )}
          placeholder="type help..."
          autoComplete="off"
          spellCheck={false}
        />
      </form>
    </div>
  );
}

function LinksContent({ theme }: { theme: ThemeMode }) {
  return (
    <div className="grid gap-5">
      {linkGroups.map((group) => (
        <section
          key={group.title}
          className={cx(
            "overflow-hidden rounded-xl border",
            theme === "matrix"
              ? "border-green-400/15 bg-black/25"
              : "border-[#b5b09a] bg-[#f7f4e8]",
          )}
        >
          <div
            className={cx(
              "border-b px-4 py-3",
              theme === "matrix"
                ? "border-green-400/15 bg-green-950/15"
                : "border-[#b5b09a] bg-gradient-to-b from-[#ffffff] to-[#e4e0c8]",
            )}
          >
            <p
              className={cx(
                "font-mono text-[10px] font-black uppercase tracking-[0.22em]",
                theme === "matrix" ? "text-green-500" : "text-[#486e21]",
              )}
            >
              {group.systemName}
            </p>

            <h3
              className={cx(
                "mt-1 text-lg font-black",
                theme === "matrix" ? "text-green-100" : "text-[#174bb8]",
              )}
            >
              {group.title}
            </h3>

            <p
              className={cx(
                "mt-1 text-sm leading-6",
                theme === "matrix" ? "text-green-200/65" : "text-[#333333]",
              )}
            >
              {group.description}
            </p>
          </div>

          <div className="grid gap-3 p-3">
            {group.links.map((item) => {
              const Icon = item.icon;
              const isMail = item.href.startsWith("mailto:");

              return (
                <a
                  key={item.title}
                  href={item.href}
                  target={isMail ? undefined : "_blank"}
                  rel={isMail ? undefined : "noreferrer"}
                  className={cx(
                    "group rounded-xl border p-4 transition hover:-translate-y-0.5",
                    theme === "matrix"
                      ? "border-green-400/15 bg-green-950/10 hover:border-green-300/40 hover:bg-green-400/10"
                      : "border-[#b5b09a] bg-white hover:border-[#174bb8] hover:bg-[#eaf3ff]",
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={cx(
                        "grid size-11 shrink-0 place-items-center rounded-xl border",
                        theme === "matrix"
                          ? "border-green-400/20 bg-black/50"
                          : "border-[#174bb8] bg-[#245edc]",
                      )}
                    >
                      <Icon
                        className={cx(
                          "size-5",
                          theme === "matrix" ? "text-green-300" : "text-white",
                        )}
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p
                        className={cx(
                          "font-mono text-[10px] font-black uppercase tracking-[0.2em]",
                          theme === "matrix"
                            ? "text-green-600"
                            : "text-[#486e21]",
                        )}
                      >
                        {item.label}
                      </p>

                      <div className="mt-1 flex items-center justify-between gap-3">
                        <h4
                          className={cx(
                            "font-bold",
                            theme === "matrix"
                              ? "text-green-100"
                              : "text-[#1d1d1d]",
                          )}
                        >
                          {item.title}
                        </h4>

                        <ArrowUpRight
                          className={cx(
                            "size-4 transition",
                            theme === "matrix"
                              ? "text-green-600 group-hover:text-green-300"
                              : "text-[#174bb8]",
                          )}
                        />
                      </div>

                      <p
                        className={cx(
                          "mt-2 text-sm leading-6",
                          theme === "matrix"
                            ? "text-green-200/70"
                            : "text-[#333333]",
                        )}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}

function ProjectsContent({ theme }: { theme: ThemeMode }) {
  return (
    <div className="grid gap-4">
      {projects.map((project) => (
        <div
          key={project.title}
          className={cx(
            "rounded-xl border p-4",
            theme === "matrix"
              ? "border-green-400/15 bg-black/35"
              : "border-[#b5b09a] bg-white",
          )}
        >
          <div className="mb-3 flex items-start justify-between gap-4">
            <div>
              <p
                className={cx(
                  "font-bold",
                  theme === "matrix" ? "text-green-100" : "text-[#1d1d1d]",
                )}
              >
                {project.title}
              </p>
              <p
                className={cx(
                  "mt-1 font-mono text-[10px] font-black uppercase tracking-[0.2em]",
                  theme === "matrix" ? "text-green-500" : "text-[#486e21]",
                )}
              >
                {project.status}
              </p>
            </div>

            <ShieldCheck
              className={cx(
                "size-5",
                theme === "matrix" ? "text-green-400" : "text-[#174bb8]",
              )}
            />
          </div>

          <p
            className={cx(
              "text-sm leading-6",
              theme === "matrix" ? "text-green-200/70" : "text-[#333333]",
            )}
          >
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={cx(
                  "rounded-full border px-3 py-1 font-mono text-[10px] font-bold",
                  theme === "matrix"
                    ? "border-green-400/15 bg-green-400/10 text-green-300"
                    : "border-[#174bb8]/30 bg-[#d7e8ff] text-[#174bb8]",
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function CreatorContent({ theme }: { theme: ThemeMode }) {
  return (
    <div>
      <div
        className={cx(
          "mb-5 grid size-14 place-items-center rounded-2xl border",
          theme === "matrix"
            ? "border-green-400/20 bg-green-400/10"
            : "border-[#174bb8] bg-[#245edc]",
        )}
      >
        <Radio
          className={cx(
            "size-7",
            theme === "matrix" ? "text-green-300" : "text-white",
          )}
        />
      </div>

      <h2
        className={cx(
          "text-2xl font-black",
          theme === "matrix" ? "text-green-100" : "text-[#174bb8]",
        )}
      >
        Creator Mode is warming up.
      </h2>

      <p
        className={cx(
          "mt-4 leading-7",
          theme === "matrix" ? "text-green-200/75" : "text-[#333333]",
        )}
      >
        This section is for gaming clips, TikTok content, YouTube uploads,
        project breakdowns, behind-the-scenes tech work, and the weird creative
        stuff that makes the personal brand feel alive.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <CreatorTag label="Gaming" theme={theme} />
        <CreatorTag label="Tech" theme={theme} />
        <CreatorTag label="Builds" theme={theme} />
      </div>
    </div>
  );
}

function CreatorTag({ label, theme }: { label: string; theme: ThemeMode }) {
  return (
    <div
      className={cx(
        "rounded-xl border px-4 py-3 text-center font-mono text-xs font-black uppercase tracking-[0.2em]",
        theme === "matrix"
          ? "border-green-400/15 bg-black/35 text-green-300"
          : "border-[#b5b09a] bg-white text-[#174bb8]",
      )}
    >
      {label}
    </div>
  );
}

function ContactContent({ theme }: { theme: ThemeMode }) {
  return (
    <div>
      <p
        className={cx(
          "font-mono text-xs font-black uppercase tracking-[0.2em]",
          theme === "matrix" ? "text-green-500" : "text-[#486e21]",
        )}
      >
        OPEN_CHANNEL
      </p>

      <h2
        className={cx(
          "mt-3 text-2xl font-black",
          theme === "matrix" ? "text-green-100" : "text-[#174bb8]",
        )}
      >
        Contact Tate
      </h2>

      <p
        className={cx(
          "mt-4 leading-7",
          theme === "matrix" ? "text-green-200/75" : "text-[#333333]",
        )}
      >
        Business, websites, tech work, collaborations, creator ideas, project
        questions, or anything that should route through the main channel.
      </p>

      <div className="mt-6 grid gap-3">
        <a
          href={SOCIAL_URLS.email}
          className={cx(
            "inline-flex items-center justify-center rounded-xl border px-5 py-3 font-mono text-sm font-black uppercase tracking-[0.18em] transition hover:-translate-y-0.5",
            theme === "matrix"
              ? "border-green-300/35 bg-green-400 text-black hover:bg-green-300"
              : "border-[#103f91] bg-[#245edc] text-white hover:bg-[#174bb8]",
          )}
        >
          <Mail className="mr-2 size-4" />
          Email Tate
        </a>

        <a
          href={SOCIAL_URLS.llTech}
          target="_blank"
          rel="noreferrer"
          className={cx(
            "inline-flex items-center justify-center rounded-xl border px-5 py-3 font-mono text-sm font-black uppercase tracking-[0.18em] transition hover:-translate-y-0.5",
            theme === "matrix"
              ? "border-green-400/20 bg-black/40 text-green-300 hover:border-green-300/45 hover:bg-green-400/10"
              : "border-[#b5b09a] bg-white text-[#174bb8] hover:border-[#174bb8]",
          )}
        >
          L&L Tech Solutions
        </a>
      </div>
    </div>
  );
}

function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const phrases = useMemo(
    () => [
      "DEVELOPED BY TATE BYERS",
      "TATEBYERS.CA",
      "L&L TECH SOLUTIONS",
      "BUILD MODE",
      "PORTFOLIO SYSTEM",
      "GAMING",
      "WEB DESIGN",
      "TECH SUPPORT",
      "CREATOR MODE",
      "OPEN CHANNEL",
    ],
    [],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrame = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const fontSize = 15;
    let columns = Math.floor(width / fontSize);
    let drops = Array.from({ length: columns }, () =>
      Math.floor(Math.random() * -100),
    );

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      columns = Math.floor(width / fontSize);
      drops = Array.from({ length: columns }, () =>
        Math.floor(Math.random() * -100),
      );
    }

    function draw() {
      if (!context) return;

      context.fillStyle = "rgba(0, 0, 0, 0.075)";
      context.fillRect(0, 0, width, height);

      context.font = `${fontSize}px monospace`;

      for (let index = 0; index < drops.length; index += 1) {
        const phrase = phrases[index % phrases.length];
        const char = phrase[Math.floor(Math.random() * phrase.length)] || "T";

        const x = index * fontSize;
        const y = drops[index] * fontSize;

        context.fillStyle = Math.random() > 0.975 ? "#d9ffe7" : "#22c55e";
        context.fillText(char, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[index] = 0;
        }

        drops[index] += 1;
      }

      animationFrame = window.requestAnimationFrame(draw);
    }

    resize();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, [phrases]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-55"
      aria-hidden="true"
    />
  );
}

function XPWallpaper() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#62b5ff_0%,#3d8df2_36%,#7fd24d_37%,#4ea526_100%)]" />

      <div className="absolute right-[12%] top-[8%] size-40 rounded-full bg-yellow-100/70 blur-3xl" />
      <div className="absolute right-[15%] top-[11%] size-20 rounded-full bg-white/65 blur-xl" />

      <div className="absolute left-[7%] top-[12%] h-16 w-44 rounded-full bg-white/80 blur-sm" />
      <div className="absolute left-[18%] top-[15%] h-20 w-56 rounded-full bg-white/70 blur-sm" />
      <div className="absolute right-[23%] top-[18%] h-16 w-52 rounded-full bg-white/65 blur-sm" />
      <div className="absolute right-[10%] top-[21%] h-14 w-40 rounded-full bg-white/60 blur-sm" />

      <div className="absolute left-[-12%] top-[43%] h-[45%] w-[78%] rounded-[100%] bg-[#63bc32]" />
      <div className="absolute right-[-18%] top-[39%] h-[48%] w-[82%] rounded-[100%] bg-[#86d84f]" />
      <div className="absolute left-[18%] top-[55%] h-[38%] w-[74%] rounded-[100%] bg-[#3f9825]" />
      <div className="absolute bottom-[-22%] left-[-10%] h-[45%] w-[120%] rounded-[100%] bg-[#2f801f]" />

      <div className="absolute bottom-[24%] left-1/2 -translate-x-1/2 rotate-[-3deg] text-center">
        <p className="text-5xl font-black uppercase tracking-[0.16em] text-white/25 drop-shadow-[0_3px_5px_rgba(0,0,0,0.35)] sm:text-7xl">
          TATE XP
        </p>
        <p className="mt-2 text-sm font-black uppercase tracking-[0.35em] text-white/35 drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)]">
          TateByers.ca
        </p>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.28),transparent_38%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),transparent_45%,rgba(0,0,0,0.12))]" />
    </div>
  );
}

function LiveClock({ theme }: { theme: ThemeMode }) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());

    const timer = window.setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  if (!now) {
    return <span>--:--</span>;
  }

  const time = now.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  const date = now.toLocaleDateString([], {
    month: "short",
    day: "numeric",
  });

  if (theme === "xp") {
    return (
      <div className="text-right text-[11px] font-bold leading-tight text-white">
        <p>{time}</p>
        <p className="text-white/75">{date}</p>
      </div>
    );
  }

  return (
    <div className="font-mono text-[11px] leading-tight text-green-400">
      <p>{time}</p>
      <p className="text-green-700">{date}</p>
    </div>
  );
}

function XPStickyNote() {
  return (
    <div className="absolute right-5 top-5 z-20 hidden w-72 rotate-1 rounded-xl border border-yellow-600/30 bg-[#fff6a8] p-4 text-[#3a2f00] shadow-2xl lg:block">
      <p className="text-sm font-black uppercase tracking-[0.14em]">
        System Notes
      </p>
      <p className="mt-3 text-sm leading-6">
        Welcome to Tate XP. Click desktop icons, open windows, close apps, use
        the terminal, check links, and try not to delete the internet.
      </p>
      <p className="mt-4 font-mono text-xs text-[#6b5a00]">
        note: links are grouped like a real system directory
      </p>
    </div>
  );
}

function MatrixHud() {
  return (
    <div className="absolute bottom-5 right-5 z-20 hidden w-80 rounded-2xl border border-green-400/20 bg-black/70 p-4 font-mono text-xs text-green-300 shadow-[0_0_40px_rgba(34,197,94,0.16)] backdrop-blur-md lg:block">
      <div className="mb-3 flex items-center justify-between">
        <p className="font-black uppercase tracking-[0.22em] text-green-400">
          System HUD
        </p>
        <span className="size-2 rounded-full bg-green-400 shadow-[0_0_18px_rgba(74,222,128,0.9)]" />
      </div>

      <div className="space-y-2 text-green-500">
        <p>
          <span className="text-green-300">identity:</span> Tate Byers
        </p>
        <p>
          <span className="text-green-300">mode:</span> build / create / deploy
        </p>
        <p>
          <span className="text-green-300">links:</span> grouped router enabled
        </p>
        <p>
          <span className="text-green-300">terminal:</span> command navigation
          active
        </p>
      </div>
    </div>
  );
}

function DesktopTopBar({
  theme,
  openWindows,
  activeWindow,
  startOpen,
  onToggleTheme,
  onOpenWindow,
  onOpenAll,
  onCloseAll,
  onToggleStart,
}: {
  theme: ThemeMode;
  openWindows: WindowId[];
  activeWindow: WindowId;
  startOpen: boolean;
  onToggleTheme: () => void;
  onOpenWindow: (id: WindowId) => void;
  onOpenAll: () => void;
  onCloseAll: () => void;
  onToggleStart: (event: MouseEvent<HTMLButtonElement>) => void;
}) {
  if (theme === "xp") {
    return (
      <>
        <header className="flex h-12 items-center justify-between border-b border-[#0c3f9f] bg-gradient-to-b from-[#2f7cf6] via-[#245edc] to-[#174bb8] px-4 font-mono text-xs text-white shadow-lg">
          <div className="flex items-center gap-3">
            <Monitor className="size-4" />
            <span className="font-black uppercase tracking-[0.18em]">
              Tate XP
            </span>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onToggleTheme();
            }}
            className="rounded-lg border border-white/35 bg-white/15 px-3 py-2 font-mono text-[11px] font-black uppercase tracking-[0.16em] text-white transition hover:bg-white/25"
          >
            Return Matrix
          </button>
        </header>

        {startOpen && (
          <div
            onClick={(event) => event.stopPropagation()}
            className="fixed bottom-12 left-3 z-50 w-[320px] overflow-hidden rounded-t-2xl border-2 border-[#174bb8] bg-[#ece9d8] shadow-2xl"
          >
            <div className="bg-gradient-to-b from-[#2f7cf6] via-[#245edc] to-[#174bb8] p-4 text-white">
              <p className="text-lg font-black">Tate Byers</p>
              <p className="text-xs text-white/80">
                Portfolio System Administrator
              </p>
            </div>

            <div className="grid gap-2 p-3">
              {windows.map((windowItem) => {
                const Icon = windowItem.icon;

                return (
                  <button
                    key={windowItem.id}
                    type="button"
                    onClick={() => onOpenWindow(windowItem.id)}
                    className="flex items-center gap-3 rounded-xl border border-[#b5b09a] bg-white p-3 text-left transition hover:border-[#174bb8] hover:bg-[#eaf3ff]"
                  >
                    <div className="grid size-10 place-items-center rounded-lg bg-[#245edc]">
                      <Icon className="size-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-black text-[#1d1d1d]">
                        {windowItem.title}
                      </p>
                      <p className="text-xs text-[#486e21]">
                        {windowItem.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}

              <div className="my-1 border-t border-[#b5b09a]" />

              <button
                type="button"
                onClick={onOpenAll}
                className="rounded-xl bg-[#245edc] px-4 py-3 text-left text-sm font-black text-white transition hover:bg-[#174bb8]"
              >
                Open All Windows
              </button>

              <button
                type="button"
                onClick={onCloseAll}
                className="rounded-xl border border-[#b5b09a] bg-white px-4 py-3 text-left text-sm font-black text-[#174bb8] transition hover:border-[#174bb8]"
              >
                Close All Windows
              </button>
            </div>
          </div>
        )}

        <footer className="fixed inset-x-0 bottom-0 z-40 flex h-12 items-center justify-between border-t border-[#0c3f9f] bg-gradient-to-b from-[#2f7cf6] via-[#245edc] to-[#174bb8] px-3 text-white shadow-[0_-8px_24px_rgba(0,0,0,0.25)]">
          <button
            type="button"
            onClick={onToggleStart}
            className="rounded-xl border border-[#246b16] bg-gradient-to-b from-[#75c043] to-[#2f8a1d] px-5 py-2 text-sm font-black text-white shadow-md transition hover:brightness-110"
          >
            start
          </button>

          <div className="hidden min-w-0 flex-1 gap-2 px-3 md:flex">
            {openWindows.map((windowId) => {
              const item = windows.find(
                (windowItem) => windowItem.id === windowId,
              );
              if (!item) return null;

              const Icon = item.icon;

              return (
                <button
                  key={windowId}
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    onOpenWindow(windowId);
                  }}
                  className={cx(
                    "flex max-w-[210px] items-center gap-2 truncate rounded px-3 py-2 text-xs font-bold transition",
                    activeWindow === windowId
                      ? "bg-white/30 shadow-inner"
                      : "bg-white/15 hover:bg-white/25",
                  )}
                >
                  <Icon className="size-4 shrink-0" />
                  <span className="truncate">{item.title}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3 rounded bg-white/10 px-2 py-1 text-xs font-bold">
            <Wifi className="size-4" />
            <span>ONLINE</span>
            <LiveClock theme="xp" />
          </div>
        </footer>
      </>
    );
  }

  return (
    <header className="flex h-14 items-center justify-between border-b border-green-400/20 bg-black/65 px-5 font-mono text-xs text-green-300 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <Monitor className="size-4" />
        <span className="font-black uppercase tracking-[0.22em]">TATE_OS</span>
      </div>

      <div className="hidden items-center gap-6 md:flex">
        <span>portfolio.system</span>
        <span>developed_by_tate_byers</span>
        <span className="flex items-center gap-2">
          <Wifi className="size-4" />
          ONLINE
        </span>
        <LiveClock theme="matrix" />
      </div>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onToggleTheme();
        }}
        className="rounded-xl border border-sky-300/30 bg-sky-400/10 px-3 py-2 font-mono text-[11px] font-black uppercase tracking-[0.16em] text-sky-200 transition hover:bg-sky-400/20"
      >
        Enter XP Mode
      </button>
    </header>
  );
}

function OSWindow({
  title,
  subtitle,
  isActive,
  theme,
  children,
  onFocus,
  onClose,
}: {
  title: string;
  subtitle: string;
  isActive: boolean;
  theme: ThemeMode;
  children: ReactNode;
  onFocus: () => void;
  onClose: () => void;
}) {
  return (
    <article
      onMouseDown={(event) => {
        event.stopPropagation();
        onFocus();
      }}
      className={cx(
        "relative overflow-hidden rounded-2xl border shadow-2xl backdrop-blur-md transition",
        theme === "matrix" &&
          (isActive
            ? "border-green-300/40 bg-black/75 shadow-[0_0_45px_rgba(34,197,94,0.14)]"
            : "border-green-400/15 bg-black/75 opacity-90"),
        theme === "xp" &&
          (isActive
            ? "border-2 border-[#174bb8] bg-[#ece9d8] shadow-[0_20px_60px_rgba(0,0,0,0.28)]"
            : "border-2 border-[#5579c6] bg-[#ece9d8] opacity-95"),
      )}
    >
      <div
        className={cx(
          "flex items-center justify-between px-4 py-3",
          theme === "matrix"
            ? "border-b border-green-400/15 bg-green-950/20"
            : "border-b border-[#103f91] bg-gradient-to-b from-[#2f7cf6] via-[#245edc] to-[#174bb8] text-white",
        )}
      >
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <button
              type="button"
              onMouseDown={(event) => event.stopPropagation()}
              onClick={(event) => {
                event.stopPropagation();
                onClose();
              }}
              className={cx(
                "grid size-5 place-items-center rounded-full text-[10px] font-black leading-none transition hover:scale-110",
                theme === "matrix"
                  ? "bg-red-500/90 text-white"
                  : "bg-[#ff5f57] text-white",
              )}
              aria-label={`Close ${title}`}
              title={`Close ${title}`}
            >
              ×
            </button>

            <span
              className={cx(
                "size-5 rounded-full",
                theme === "matrix" ? "bg-yellow-400/90" : "bg-[#ffbd2e]",
              )}
            />

            <span
              className={cx(
                "size-5 rounded-full",
                theme === "matrix" ? "bg-green-400/90" : "bg-[#28c840]",
              )}
            />
          </div>

          <div>
            <p
              className={cx(
                "font-mono text-xs font-bold",
                theme === "matrix" ? "text-green-100" : "text-white",
              )}
            >
              {title}
            </p>
            <p
              className={cx(
                "font-mono text-[10px] uppercase tracking-[0.2em]",
                theme === "matrix" ? "text-green-600" : "text-white/70",
              )}
            >
              {subtitle}
            </p>
          </div>
        </div>

        <button
          type="button"
          onMouseDown={(event) => event.stopPropagation()}
          onClick={(event) => {
            event.stopPropagation();
            onClose();
          }}
          className={cx(
            "grid size-7 place-items-center rounded transition",
            theme === "matrix"
              ? "text-green-500 hover:bg-green-400/10 hover:text-green-200"
              : "bg-[#d7492f] text-white hover:bg-[#b8321f]",
          )}
          aria-label={`Close ${title}`}
          title={`Close ${title}`}
        >
          <X className="size-4" />
        </button>
      </div>

      <div className="p-5">{children}</div>
    </article>
  );
}
