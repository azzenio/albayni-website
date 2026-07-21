export default function Section({
  id,
  children,
  className = "",
  tone = "paper",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  tone?: "paper" | "sand" | "ink";
}) {
  const tones = {
    paper: "bg-paper",
    sand: "bg-sand/60",
    ink: "bg-ink text-paper",
  } as const;
  return (
    <section id={id} className={`${tones[tone]} py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-content px-5 md:px-8">{children}</div>
    </section>
  );
}
