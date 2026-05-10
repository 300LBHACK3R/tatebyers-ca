"use client";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  Cpu,
  Gamepad2,
  Globe2,
  Mail,
  Monitor,
  Play,
  Power,
  Radio,
  ShieldCheck,
  Terminal,
  Video,
  Wifi,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

type ThemeMode = "matrix" | "xp";
type WindowId = "terminal" | "links" | "projects" | "creator" | "contact";

type DesktopWindow = {
  id: WindowId;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
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
    subtitle: "Business + social channels",
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

const links = [
  {
    title: "L&L Tech Solutions",
    label: "BUSINESS_PORTAL",
    description: "Websites, tech support, networking, CCTV, and digital services.",
    href: "https://lltechsolutions.ca",
    icon: BriefcaseBusiness,
  },
  {
    title: "Facebook",
    label: "SOCIAL_FEED",
    description: "Updates, service posts, local work, listings, and business content.",
    href: "https://facebook.com/",
    icon: Globe2,
  },
  {
    title: "TikTok",
    label: "CLIP_ENGINE",
    description: "Gaming clips, tech projects, behind-the-scenes, and creator content.",
    href: "https://tiktok.com/",
    icon: Play,
  },
  {
    title: "YouTube",
    label: "VIDEO_ARCHIVE",
    description: "Long-form videos, gaming uploads, project logs, and tutorials.",
    href: "https://youtube.com/",
    icon: Video,
  },
];

const projects = [
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

  function toggleTheme() {
    setTheme((current) => (current === "matrix" ? "xp" : "matrix"));
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
  }

  function closeWindow(id: WindowId) {
    setOpenWindows((current) => {
      const next = current.filter((windowId) => windowId !== id);

      if (activeWindow === id) {
        setActiveWindow(next[next.length - 1] ?? "terminal");
      }

      return next;
    });
  }

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
                    theme === "matrix" ? "glitch-text text-green-100" : "text-[#174bb8]",
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
                  <p>&gt; audio will only trigger after your click</p>
                  <p>&gt; normal templates deleted from memory</p>
                </div>
              </>
            ) : (
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
                        className={theme === "matrix" ? "text-green-600" : "text-[#2a7f16]"}
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
                      width: `${Math.min(
                        100,
                        (bootIndex / bootLines.length) * 100,
                      )}%`,
                    }}
                  />
                </div>
              </div>
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
        <DesktopTopBar theme={theme} onToggleTheme={toggleTheme} />

        <div className="grid flex-1 grid-cols-1 gap-5 p-5 pb-20 lg:grid-cols-[220px_1fr]">
          <aside
            className={cx(
              "rounded-2xl p-4 backdrop-blur-md",
              theme === "matrix"
                ? "border border-green-400/20 bg-black/50"
                : "border-2 border-[#1847a3] bg-[#ece9d8] shadow-xl",
            )}
          >
            <p
              className={cx(
                "mb-4 font-mono text-xs uppercase tracking-[0.22em]",
                theme === "matrix" ? "text-green-500" : "text-[#174bb8]",
              )}
            >
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
                    onClick={() => openWindow(windowItem.id)}
                    className={cx(
                      "group flex items-center gap-3 rounded-xl border p-3 text-left transition",
                      theme === "matrix" &&
                        (isActive
                          ? "border-green-300/45 bg-green-400/15"
                          : "border-green-400/10 bg-black/30 hover:border-green-300/30 hover:bg-green-400/10"),
                      theme === "xp" &&
                        (isActive
                          ? "border-[#174bb8] bg-[#d7e8ff]"
                          : "border-[#b5b09a] bg-white hover:border-[#174bb8] hover:bg-[#eaf3ff]"),
                    )}
                  >
                    <div
                      className={cx(
                        "grid size-10 place-items-center rounded-lg border",
                        theme === "matrix"
                          ? "border-green-400/20 bg-green-400/10"
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

                    <div>
                      <p
                        className={cx(
                          "font-mono text-xs font-bold",
                          theme === "matrix" ? "text-green-100" : "text-[#1d1d1d]",
                        )}
                      >
                        {windowItem.title}
                      </p>
                      <p
                        className={cx(
                          "mt-1 text-[11px]",
                          theme === "matrix" ? "text-green-600" : "text-[#486e21]",
                        )}
                      >
                        {windowItem.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>

          <section
            className={cx(
              "relative min-h-[720px] rounded-2xl p-4 backdrop-blur-md",
              theme === "matrix"
                ? "border border-green-400/15 bg-black/35"
                : "border-2 border-[#1847a3] bg-white/25 shadow-xl",
            )}
          >
            {theme === "matrix" && (
              <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(rgba(74,222,128,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.045)_1px,transparent_1px)] bg-[size:32px_32px]" />
            )}

            <div className="relative grid gap-4 xl:grid-cols-2">
              {openWindows.includes("terminal") && (
                <OSWindow
                  title="tate@portfolio:~"
                  subtitle="terminal"
                  isActive={activeWindow === "terminal"}
                  theme={theme}
                  onFocus={() => setActiveWindow("terminal")}
                  onClose={() => closeWindow("terminal")}
                >
                  <TerminalContent theme={theme} />
                </OSWindow>
              )}

              {openWindows.includes("links") && (
                <OSWindow
                  title="link-router.app"
                  subtitle="external channels"
                  isActive={activeWindow === "links"}
                  theme={theme}
                  onFocus={() => setActiveWindow("links")}
                  onClose={() => closeWindow("links")}
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
                  onFocus={() => setActiveWindow("projects")}
                  onClose={() => closeWindow("projects")}
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
                  onFocus={() => setActiveWindow("creator")}
                  onClose={() => closeWindow("creator")}
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
                  onFocus={() => setActiveWindow("contact")}
                  onClose={() => closeWindow("contact")}
                >
                  <ContactContent theme={theme} />
                </OSWindow>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
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
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#5aa7ff_0%,#3b82f6_42%,#7cc043_43%,#4e9d24_100%)]" />
      <div className="absolute left-[-10%] top-[44%] h-[38%] w-[70%] rounded-[100%] bg-[#63b82f]" />
      <div className="absolute right-[-12%] top-[39%] h-[42%] w-[70%] rounded-[100%] bg-[#80c94a]" />
      <div className="absolute left-[8%] top-[12%] h-20 w-44 rounded-full bg-white/80 blur-sm" />
      <div className="absolute left-[20%] top-[15%] h-16 w-52 rounded-full bg-white/70 blur-sm" />
      <div className="absolute right-[16%] top-[10%] h-20 w-56 rounded-full bg-white/65 blur-sm" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_35%)]" />
    </div>
  );
}

function DesktopTopBar({
  theme,
  onToggleTheme,
}: {
  theme: ThemeMode;
  onToggleTheme: () => void;
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
            onClick={onToggleTheme}
            className="rounded-lg border border-white/35 bg-white/15 px-3 py-2 font-mono text-[11px] font-black uppercase tracking-[0.16em] text-white transition hover:bg-white/25"
          >
            Return Matrix
          </button>
        </header>

        <footer className="fixed inset-x-0 bottom-0 z-40 flex h-12 items-center justify-between border-t border-[#0c3f9f] bg-gradient-to-b from-[#2f7cf6] via-[#245edc] to-[#174bb8] px-3 text-white shadow-[0_-8px_24px_rgba(0,0,0,0.25)]">
          <button className="rounded-xl border border-[#246b16] bg-gradient-to-b from-[#75c043] to-[#2f8a1d] px-5 py-2 text-sm font-black text-white shadow-md">
            start
          </button>

          <div className="hidden gap-2 md:flex">
            <span className="rounded bg-white/15 px-4 py-2 text-xs font-bold">
              tate@portfolio
            </span>
            <span className="rounded bg-white/15 px-4 py-2 text-xs font-bold">
              link-router.app
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold">
            <Wifi className="size-4" />
            ONLINE
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
      </div>

      <button
        type="button"
        onClick={onToggleTheme}
        className="rounded-xl border border-sky-300/30 bg-sky-400/10 px-3 py-2 font-mono text-[11px] font-black uppercase tracking-[0.16em] text-sky-200 transition hover:bg-sky-400/20"
      >
        Enter XP Mode
      </button>
    </header>
  );
}

type OSWindowProps = {
  title: string;
  subtitle: string;
  isActive: boolean;
  theme: ThemeMode;
  children: React.ReactNode;
  onFocus: () => void;
  onClose: () => void;
};

function OSWindow({
  title,
  subtitle,
  isActive,
  theme,
  children,
  onFocus,
  onClose,
}: OSWindowProps) {
  return (
    <article
      onMouseDown={onFocus}
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
              onClick={onClose}
              className={cx(
                "grid size-3 place-items-center rounded-full",
                theme === "matrix" ? "bg-red-500/90" : "bg-[#ff5f57]",
              )}
              aria-label={`Close ${title}`}
            >
              <span className="sr-only">Close</span>
            </button>
            <span
              className={cx(
                "size-3 rounded-full",
                theme === "matrix" ? "bg-yellow-400/90" : "bg-[#ffbd2e]",
              )}
            />
            <span
              className={cx(
                "size-3 rounded-full",
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

        <X className={cx("size-4", theme === "matrix" ? "text-green-700" : "text-white")} />
      </div>

      <div className="p-5">{children}</div>
    </article>
  );
}

function TerminalContent({ theme }: { theme: ThemeMode }) {
  return (
    <div
      className={cx(
        "font-mono text-sm leading-7",
        theme === "matrix" ? "text-green-300" : "text-[#1d1d1d]",
      )}
    >
      <p>
        <span className={theme === "matrix" ? "text-green-600" : "text-[#174bb8]"}>
          tate@portfolio
        </span>
        :~$ whoami
      </p>
      <p className={theme === "matrix" ? "text-green-100" : "text-[#111111]"}>
        Tate Byers
      </p>

      <p className="mt-4">
        <span className={theme === "matrix" ? "text-green-600" : "text-[#174bb8]"}>
          tate@portfolio
        </span>
        :~$ cat ./profile.txt
      </p>
      <p className={theme === "matrix" ? "text-green-100" : "text-[#111111]"}>
        Founder, developer, gamer, creator, and builder of digital systems.
      </p>

      <p className="mt-4">
        <span className={theme === "matrix" ? "text-green-600" : "text-[#174bb8]"}>
          tate@portfolio
        </span>
        :~$ mission
      </p>
      <p className={theme === "matrix" ? "text-green-100" : "text-[#111111]"}>
        Build websites, tech systems, content, brands, and projects that do not
        look like everyone else’s recycled template.
      </p>

      <p
        className={cx(
          "mt-4 animate-pulse",
          theme === "matrix" ? "text-green-400" : "text-[#174bb8]",
        )}
      >
        &gt; waiting for next command...
      </p>
    </div>
  );
}

function LinksContent({ theme }: { theme: ThemeMode }) {
  return (
    <div className="grid gap-3">
      {links.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noreferrer"
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
                <Icon className={cx("size-5", theme === "matrix" ? "text-green-300" : "text-white")} />
              </div>

              <div className="min-w-0 flex-1">
                <p
                  className={cx(
                    "font-mono text-[10px] font-black uppercase tracking-[0.2em]",
                    theme === "matrix" ? "text-green-600" : "text-[#486e21]",
                  )}
                >
                  {item.label}
                </p>
                <div className="mt-1 flex items-center justify-between gap-3">
                  <h3 className={cx("font-bold", theme === "matrix" ? "text-green-100" : "text-[#1d1d1d]")}>
                    {item.title}
                  </h3>
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
                    theme === "matrix" ? "text-green-200/70" : "text-[#333333]",
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
              <p className={cx("font-bold", theme === "matrix" ? "text-green-100" : "text-[#1d1d1d]")}>
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

            <ShieldCheck className={cx("size-5", theme === "matrix" ? "text-green-400" : "text-[#174bb8]")} />
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
        <Radio className={cx("size-7", theme === "matrix" ? "text-green-300" : "text-white")} />
      </div>

      <h2 className={cx("text-2xl font-black", theme === "matrix" ? "text-green-100" : "text-[#174bb8]")}>
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

      <h2 className={cx("mt-3 text-2xl font-black", theme === "matrix" ? "text-green-100" : "text-[#174bb8]")}>
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
          href="mailto:hello@tatebyers.ca"
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
          href="https://lltechsolutions.ca"
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