"use client";

import { useState } from "react";

export default function HomePage() {
  return (
    <section>
      <h1>Página principal</h1>
      <button onClick={() => alert("Alert!")}>Click!</button>
    </section>
  );
}
