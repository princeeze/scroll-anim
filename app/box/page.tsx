import Link from "next/link";
import { Box } from "./box";

export default function BoxPage() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-3">
      <h1 className="text-4xl font-bold">Home</h1>
      <Link href="/box/enter" className="text-blue-500 underline">
        go to about
      </Link>
      <Box color="bg-orange-500" />
    </main>
  );
}
