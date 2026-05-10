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

export function TateDesktop() {
  const [entered, setEntered] = useState(false);
  const [booting, setBooting] = useState(false);
  const [bootIndex, setBootIndex] = useState(0);
  const [activeWindow, setActiveWindow] = useState<WindowId>("terminal");
  const [openWindows, setOpenWindows] = useState<WindowId[]>([
    "terminal",
    "links",
  ]);

  function playBootSound() {
    try {
      const AudioContextClass =
        window.AudioContext ||
        (window as typeof window & { webkitAudioContext?: typeof AudioContext })
          .webkitAudioContext;

      if (!AudioContextClass) return;

      const ctx = new AudioContextClass();
      const now = ctx.currentTime;

      const notes = [
        { frequency: 120, start: 0, duration: 0.08 },
        { frequency: 240, start: 0.09, duration: 0.08 },
        { frequency: 360, start: 0.18, duration: 0.1 },
        { frequency: 520, start: 0.3, duration: 0.14 },
      ];

      notes.forEach((note) => {
        const oscillator = ctx.createOscillator();
        const gain = ctx.createGain();

        oscillator.type = "square";
        oscillator.frequency.setValueAtTime(note.frequency, now + note.start);

        gain.gain.setValueAtTime(0.0001, now + note.start);
        gain.gain.exponentialRampToValueAtTime(0.08, now + note.start + 0.01);
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
      // Audio is optional. Site still works if browser blocks it.
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
      <main className="relative min-h-screen overflow-hidden bg-black text-green-100">
        <MatrixRain />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_35%),linear-gradient(180deg,rgba(0,0,0,0.25),rgba(0,0,0,0.88))]" />

        <section className="relative z-10 flex min-h-screen items-center justify-center px-5">
          <div className="w-full max-w-4xl rounded-[2rem] border border-green-400/25 bg-black/65 p-6 shadow-[0_0_90px_rgba(34,197,94,0.18)] backdrop-blur-md sm:p-10">
            <div className="mb-8 flex items-center justify-between border-b border-green-400/20 pb-5">
              <div className="flex items-center gap-3">
                <div className="grid size-11 place-items-center rounded-xl border border-green-400/35 bg-green-400/10">
                  <Terminal className="size-5 text-green-300" />
                </div>

                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-green-400">
                    TATE_OS / PUBLIC_ACCESS
                  </p>
                  <p className="mt-1 font-mono text-xs text-green-700">
                    developed_by_tate_byers.exe
                  </p>
                </div>
              </div>

              <div className="hidden items-center gap-2 font-mono text-xs text-green-500 sm:flex">
                <span className="size-2 rounded-full bg-green-400 shadow-[0_0_20px_rgba(74,222,128,0.9)]" />
                SIGNAL FOUND
              </div>
            </div>

            {!booting ? (
              <>
                <p className="mb-4 font-mono text-sm text-green-400">
                  &gt; unauthorized boring portfolios blocked.
                </p>

                <h1 className="glitch-text text-4xl font-black uppercase tracking-tight text-green-100 sm:text-6xl lg:text-7xl">
                  Welcome to the
                  <span className="block text-green-400">
                    Tate Byers Portfolio System
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl font-mono text-sm leading-7 text-green-200/80 sm:text-base">
                  This is not a normal link page. This is the control room for
                  Tate Byers — business, tech, gaming, creator content, active
                  projects, and whatever gets built next.
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={enterSite}
                    className="group inline-flex items-center justify-center rounded-xl border border-green-300/40 bg-green-400 px-6 py-4 font-mono text-sm font-black uppercase tracking-[0.2em] text-black shadow-[0_0_45px_rgba(74,222,128,0.3)] transition hover:-translate-y-0.5 hover:bg-green-300"
                  >
                    Enter Site
                    <Power className="ml-3 size-4 transition group-hover:rotate-12" />
                  </button>

                  <a
                    href="https://google.com"
                    className="inline-flex items-center justify-center rounded-xl border border-green-400/20 bg-black/50 px-6 py-4 font-mono text-sm font-black uppercase tracking-[0.2em] text-green-300 transition hover:-translate-y-0.5 hover:border-green-300/50 hover:bg-green-400/10"
                  >
                    Leave Matrix
                  </a>
                </div>

                <div className="mt-8 rounded-xl border border-green-400/15 bg-green-950/10 p-4 font-mono text-xs leading-6 text-green-300/75">
                  <p>&gt; press ENTER SITE to boot the desktop environment</p>
                  <p>&gt; audio will only trigger after your click</p>
                  <p>&gt; no templates detected</p>
                </div>
              </>
            ) : (
              <div className="min-h-[360px]">
                <p className="mb-6 font-mono text-sm uppercase tracking-[0.22em] text-green-400">
                  Boot Sequence Started
                </p>

                <div className="space-y-3 font-mono text-sm text-green-300">
                  {bootLines.slice(0, bootIndex).map((line) => (
                    <p key={line}>
                      <span className="text-green-600">[OK]</span> {line}
                    </p>
                  ))}

                  {bootIndex < bootLines.length && (
                    <p className="animate-pulse text-green-400">
                      &gt; {bootLines[bootIndex]}
                    </p>
                  )}
                </div>

                <div className="mt-8 h-3 overflow-hidden rounded-full border border-green-400/20 bg-black">
                  <div
                    className="h-full bg-green-400 shadow-[0_0_25px_rgba(74,222,128,0.85)] transition-all duration-300"
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
    <main className="relative min-h-screen overflow-hidden bg-[#03120a] text-green-100">
      <MatrixRain />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.1),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.15),rgba(0,0,0,0.75))]" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <DesktopTopBar />

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
                    onClick={() => openWindow(windowItem.id)}
                    className={[
                      "group flex items-center gap-3 rounded-xl border p-3 text-left transition",
                      isActive
                        ? "border-green-300/45 bg-green-400/15"
                        : "border-green-400/10 bg-black/30 hover:border-green-300/30 hover:bg-green-400/10",
                    ].join(" ")}
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

            <div className="relative grid gap-4 xl:grid-cols-2">
              {openWindows.includes("terminal") && (
                <OSWindow
                  title="tate@portfolio:~"
                  subtitle="terminal"
                  isActive={activeWindow === "terminal"}
                  onFocus={() => setActiveWindow("terminal")}
                  onClose={() => closeWindow("terminal")}
                >
                  <TerminalContent />
                </OSWindow>
              )}

              {openWindows.includes("links") && (
                <OSWindow
                  title="link-router.app"
                  subtitle="external channels"
                  isActive={activeWindow === "links"}
                  onFocus={() => setActiveWindow("links")}
                  onClose={() => closeWindow("links")}
                >
                  <LinksContent />
                </OSWindow>
              )}

              {openWindows.includes("projects") && (
                <OSWindow
                  title="active-systems.monitor"
                  subtitle="projects"
                  isActive={activeWindow === "projects"}
                  onFocus={() => setActiveWindow("projects")}
                  onClose={() => closeWindow("projects")}
                >
                  <ProjectsContent />
                </OSWindow>
              )}

              {openWindows.includes("creator") && (
                <OSWindow
                  title="creator-mode.panel"
                  subtitle="gaming/media"
                  isActive={activeWindow === "creator"}
                  onFocus={() => setActiveWindow("creator")}
                  onClose={() => closeWindow("creator")}
                >
                  <CreatorContent />
                </OSWindow>
              )}

              {openWindows.includes("contact") && (
                <OSWindow
                  title="open-channel.mail"
                  subtitle="contact"
                  isActive={activeWindow === "contact"}
                  onFocus={() => setActiveWindow("contact")}
                  onClose={() => closeWindow("contact")}
                >
                  <ContactContent />
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

function DesktopTopBar() {
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

      <div className="text-green-500">ACCESS_GRANTED</div>
    </header>
  );
}

type OSWindowProps = {
  title: string;
  subtitle: string;
  isActive: boolean;
  children: React.ReactNode;
  onFocus: () => void;
  onClose: () => void;
};

function OSWindow({
  title,
  subtitle,
  isActive,
  children,
  onFocus,
  onClose,
}: OSWindowProps) {
  return (
    <article
      onMouseDown={onFocus}
      className={[
        "relative overflow-hidden rounded-2xl border bg-black/75 shadow-2xl backdrop-blur-md transition",
        isActive
          ? "border-green-300/40 shadow-[0_0_45px_rgba(34,197,94,0.14)]"
          : "border-green-400/15 opacity-90",
      ].join(" ")}
    >
      <div className="flex items-center justify-between border-b border-green-400/15 bg-green-950/20 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={onClose}
              className="grid size-3 place-items-center rounded-full bg-red-500/90"
              aria-label={`Close ${title}`}
            >
              <span className="sr-only">Close</span>
            </button>
            <span className="size-3 rounded-full bg-yellow-400/90" />
            <span className="size-3 rounded-full bg-green-400/90" />
          </div>

          <div>
            <p className="font-mono text-xs font-bold text-green-100">{title}</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-green-600">
              {subtitle}
            </p>
          </div>
        </div>

        <X className="size-4 text-green-700" />
      </div>

      <div className="p-5">{children}</div>
    </article>
  );
}

function TerminalContent() {
  return (
    <div className="font-mono text-sm leading-7 text-green-300">
      <p>
        <span className="text-green-600">tate@portfolio</span>:~$ whoami
      </p>
      <p className="text-green-100">Tate Byers</p>

      <p className="mt-4">
        <span className="text-green-600">tate@portfolio</span>:~$ cat
        ./profile.txt
      </p>
      <p className="text-green-100">
        Founder, developer, gamer, creator, and builder of digital systems.
      </p>

      <p className="mt-4">
        <span className="text-green-600">tate@portfolio</span>:~$ mission
      </p>
      <p className="text-green-100">
        Build websites, tech systems, content, brands, and projects that do not
        look like everyone else’s recycled template.
      </p>

      <p className="mt-4 animate-pulse text-green-400">
        &gt; waiting for next command...
      </p>
    </div>
  );
}

function LinksContent() {
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
            className="group rounded-xl border border-green-400/15 bg-green-950/10 p-4 transition hover:-translate-y-0.5 hover:border-green-300/40 hover:bg-green-400/10"
          >
            <div className="flex items-start gap-4">
              <div className="grid size-11 shrink-0 place-items-center rounded-xl border border-green-400/20 bg-black/50">
                <Icon className="size-5 text-green-300" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-green-600">
                  {item.label}
                </p>
                <div className="mt-1 flex items-center justify-between gap-3">
                  <h3 className="font-bold text-green-100">{item.title}</h3>
                  <ArrowUpRight className="size-4 text-green-600 transition group-hover:text-green-300" />
                </div>
                <p className="mt-2 text-sm leading-6 text-green-200/70">
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

function ProjectsContent() {
  return (
    <div className="grid gap-4">
      {projects.map((project) => (
        <div
          key={project.title}
          className="rounded-xl border border-green-400/15 bg-black/35 p-4"
        >
          <div className="mb-3 flex items-start justify-between gap-4">
            <div>
              <p className="font-bold text-green-100">{project.title}</p>
              <p className="mt-1 font-mono text-[10px] font-black uppercase tracking-[0.2em] text-green-500">
                {project.status}
              </p>
            </div>

            <ShieldCheck className="size-5 text-green-400" />
          </div>

          <p className="text-sm leading-6 text-green-200/70">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-green-400/15 bg-green-400/10 px-3 py-1 font-mono text-[10px] font-bold text-green-300"
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

function CreatorContent() {
  return (
    <div>
      <div className="mb-5 grid size-14 place-items-center rounded-2xl border border-green-400/20 bg-green-400/10">
        <Radio className="size-7 text-green-300" />
      </div>

      <h2 className="text-2xl font-black text-green-100">
        Creator Mode is warming up.
      </h2>

      <p className="mt-4 leading-7 text-green-200/75">
        This section is for gaming clips, TikTok content, YouTube uploads,
        project breakdowns, behind-the-scenes tech work, and the weird creative
        stuff that makes the personal brand feel alive.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <CreatorTag label="Gaming" />
        <CreatorTag label="Tech" />
        <CreatorTag label="Builds" />
      </div>
    </div>
  );
}

function CreatorTag({ label }: { label: string }) {
  return (
    <div className="rounded-xl border border-green-400/15 bg-black/35 px-4 py-3 text-center font-mono text-xs font-black uppercase tracking-[0.2em] text-green-300">
      {label}
    </div>
  );
}

function ContactContent() {
  return (
    <div>
      <p className="font-mono text-xs font-black uppercase tracking-[0.2em] text-green-500">
        OPEN_CHANNEL
      </p>

      <h2 className="mt-3 text-2xl font-black text-green-100">
        Contact Tate
      </h2>

      <p className="mt-4 leading-7 text-green-200/75">
        Business, websites, tech work, collaborations, creator ideas, project
        questions, or anything that should route through the main channel.
      </p>

      <div className="mt-6 grid gap-3">
        <a
          href="mailto:hello@tatebyers.ca"
          className="inline-flex items-center justify-center rounded-xl border border-green-300/35 bg-green-400 px-5 py-3 font-mono text-sm font-black uppercase tracking-[0.18em] text-black transition hover:-translate-y-0.5 hover:bg-green-300"
        >
          <Mail className="mr-2 size-4" />
          Email Tate
        </a>

        <a
          href="https://lltechsolutions.ca"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-xl border border-green-400/20 bg-black/40 px-5 py-3 font-mono text-sm font-black uppercase tracking-[0.18em] text-green-300 transition hover:-translate-y-0.5 hover:border-green-300/45 hover:bg-green-400/10"
        >
          L&L Tech Solutions
        </a>
      </div>
    </div>
  );
}