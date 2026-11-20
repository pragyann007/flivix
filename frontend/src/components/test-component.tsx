"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function TestComponent() {
  const [count, setCount] = useState(0);

  return (
    <Card className="w-full max-w-md mx-auto shadow-md">
      <CardHeader>
        <CardTitle className="text-xl">Shadcn UI Test Component</CardTitle>
        <CardDescription>
          Shadcn is successfully configured with Next.js and Tailwind CSS v4!
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Current interactive click count:{" "}
          <span className="font-semibold text-foreground">{count}</span>
        </p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button onClick={() => setCount((prev) => prev + 1)}>
          Click Me (+1)
        </Button>
        <Button variant="outline" onClick={() => setCount(0)}>
          Reset
        </Button>
      </CardFooter>
    </Card>
  );
}
