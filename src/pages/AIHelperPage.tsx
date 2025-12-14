import { useState } from "react";
import CommonButton from "../components/CommonButtons";

type AIHelperProps = {
  title?: string;
  systemPrompt: string;
  userPrompt: string;
};

const DEMO_MODE = true; // 🔁 flip to false for live

export default function AIHelper({
  title = "AI Assistant 🤖",
  systemPrompt,
  userPrompt,
}: AIHelperProps) {
  const [showFakeAI, setShowFakeAI] = useState(false);
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAIHelp = () => {
    if (DEMO_MODE) {
      setShowFakeAI(true);
    } else {
      getLiveAIHelp();
    }
  };

  const getLiveAIHelp = async () => {
    setLoading(true);
    setAiResponse("");

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
              { role: "system", content: systemPrompt },
              { role: "user", content: userPrompt },
            ],
          }),
        }
      );

      const data = await response.json();
      setAiResponse(data.choices[0].message.content);
    } catch (error) {
      setAiResponse("AI is currently unavailable.");
    }

    setLoading(false);
  };

  return (
    <section className="mt-5">
      <CommonButton label="Get AI Help" color="gray" onClick={handleAIHelp} />

      {showFakeAI && (
        <div className="rounded-lg border border-black mt-5 p-4">
          <h2>{title}</h2>
          <p>
            This is a demo AI response showing how AI assists users instantly.
          </p>
        </div>
      )}

      {loading && <p>AI is thinking...</p>}

      {aiResponse && (
        <div className="rounded-lg border border-black mt-5 p-4">
          <h2>{title}</h2>
          <p>{aiResponse}</p>
        </div>
      )}
    </section>
  );
}
