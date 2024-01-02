import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Collection from "@/components/Collection";
import { TimerTab } from "@/components/TimerTab";
import { Quote } from "@/components/Quote";

export default async function Home() {
  return (
    <main className="text-center">
      <Header />

      <div className="p-10 md:py-15">
        <h1 className="pb-5">Reading Timer</h1>
        <TimerTab />
      </div>

      <div className="flex justify-center items-center">
        <Separator className="flex items-center mt-10 max-w-xl" />
      </div>

      <div className="p-5 md:p-10 md:pb-20 space-y-5">
        <Quote />
        <h1 className="pt-5">My Reading Entries</h1>

        <Button asChild>
          <Link href="/entries/new">+ New Entry</Link>
        </Button>

        <div className="grid grid-flow-row auto-cols-min lg:grid-cols-2 grid-cols-1">
          <Collection />
        </div>
      </div>

      <Footer />
    </main>
  );
}
