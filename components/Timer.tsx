"use client";

import { useTimer } from "react-timer-hook";
import { Button } from "./ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

type TimerProps = {
  displayTime: number;
};

export function Timer({ displayTime }: TimerProps) {
  const time = new Date();
  time.setSeconds(time.getSeconds() + displayTime * 60);

  const { totalSeconds, seconds, minutes, hours, days, isRunning, start, pause, resume, restart } = useTimer({ autoStart: false, expiryTimestamp: time, onExpire: () => console.warn("onExpire called") });

  return (
    <div>
      <div className="text-8xl p-5">
        <span>{minutes < 10 ? "0" + minutes.toString() : minutes}</span>:<span>{seconds < 10 ? "0" + seconds.toString() : seconds}</span>
      </div>
      <h2 className="hidden">{isRunning ? "Running" : "Not running"}</h2>
      <div className="flex justify-center space-x-2">
        {!isRunning && <Button onClick={start}>Start</Button>}
        {isRunning && <Button onClick={pause}>Pause</Button>}
        {/* <Button onClick={resume}>Resume</Button> */}
        <Button
          onClick={() => {
            const time = new Date();
            time.setSeconds(time.getSeconds() + displayTime * 60);
            restart(time, false);
          }}
        >
          {/* Restart */}
          <ReloadIcon />
        </Button>
      </div>
    </div>
  );
}
