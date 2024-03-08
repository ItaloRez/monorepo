"use client";

import { useEffect, useState } from "react";
import { trpc } from "../trpc";

export interface ClientSideProps {}

export default function Page({}: ClientSideProps) {
  const [response, setResponse] = useState<string>("");

  useEffect(() => {
    trpc.hello.query().then((res) => {
      setResponse(res);
    });
  }, []);

  return (
    <div>
      <span>{response}</span>
    </div>
  );
}
