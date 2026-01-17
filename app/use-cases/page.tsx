"use client";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";

export default function UseCases() {
  return (
    <main className="max-w-[1100px] min-h-screen mx-auto py-20">
      <Card className="border rounded-lg">
        <CardHeader>
          <CardTitle variant="h2">Use cases</CardTitle>
          <CardDescription>Choisissez un projet.</CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <Link href="/use-cases/agentic-rag">
            <Card className="border border-zinc-200 rounded-lg p-6 hover:bg-zinc-50">
              <CardTitle variant="h3">Agentic RAG</CardTitle>
              <CardDescription>DocChat pour docs techniques.</CardDescription>
            </Card>
          </Link>
          <Link href="/use-cases/mm-rag">
            <Card className="border border-zinc-200 rounded-lg p-6 hover:bg-zinc-50">
              <CardTitle variant="h3">MM-RAG Fashion</CardTitle>
              <CardDescription>StyleAnalyzer multimodal.</CardDescription>
            </Card>
          </Link>
          <Link href="/use-cases/pneumodiag">
            <Card className="border border-zinc-200 rounded-lg p-6 hover:bg-zinc-50">
              <CardTitle variant="h3">PneumoDiag</CardTitle>
              <CardDescription>Diagnostic pneumonie.</CardDescription>
            </Card>
          </Link>
          <Link href="/use-cases/fakefinder">
            <Card className="border border-zinc-200 rounded-lg p-6 hover:bg-zinc-50">
              <CardTitle variant="h3">FakeFinder</CardTitle>
              <CardDescription>Détection d'images IA.</CardDescription>
            </Card>
          </Link>
        </CardContent>
      </Card>
    </main>
  );
}
