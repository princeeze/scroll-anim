import Link from "next/link";

export default function Projects() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Link href="/parallax">Parallax</Link>
      <Link href="/canvas">Canvas</Link>
      <Link href="/scroll">Scroll</Link>
      <Link href="/zoom">Zoom</Link>
    </div>
  );
}
