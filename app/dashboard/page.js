
```javascript
"use client";

import { useState } from "react";

export default function Dashboard() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  async function runAI() {
    const res = await fetch("/api/ai", {
      method: "POST",
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();
    setResult(data.result);
  }

  return (
    <div style={{padding:"40px"}}>
      <h2>AI Code Panel</h2>

      <textarea
        onChange={(e)=>setPrompt(e.target.value)}
        placeholder="Enter your prompt..."
        style={{width:"100%",height:"150px",margin:"10px 0"}}
      />

      <button onClick={runAI} style={{padding:"10px 20px",cursor:"pointer"}}>Run AI</button>

      <pre style={{marginTop:"20px",background:"#f0f0f0",padding:"10px"}}>{result}</pre>
    </div>
  );
}
```
