"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Timer } from "./Timer";

export function TimerTab() {
  const timer = { sessionMinutes: 30, restMinutes: 5 };

  return (
    <div className="flex justify-center">
      <Tabs defaultValue="session" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="session">Session</TabsTrigger>
          <TabsTrigger value="break">Break</TabsTrigger>
        </TabsList>
        <TabsContent value="session">
          <Timer displayTime={timer.sessionMinutes} />
        </TabsContent>
        <TabsContent value="break">
          <Timer displayTime={timer.restMinutes} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
