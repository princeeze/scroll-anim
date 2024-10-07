import Link from "next/link";
import { Box } from "../box";

export default function EnterPage() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-3">
      <h1 className="text-4xl font-bold">About</h1>
      <Link href="/box" className="text-blue-500 underline">
        go to home
      </Link>

      <Box color="bg-blue-500" />
    </main>
  );
}
