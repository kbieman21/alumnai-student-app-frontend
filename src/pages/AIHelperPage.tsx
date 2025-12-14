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

  const OPENAI_MODEL = "gpt-4o-mini";

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
            model: OPENAI_MODEL,
            messages: [
              { role: "system", content: systemPrompt },
              { role: "user", content: userPrompt },
            ],
          }),
        }
      );

      console.log(import.meta.env.VITE_OPENAI_API_KEY);

      const data = await response.json();
    //   setAiResponse(data.choices[0].message.content);
    setAiResponse(
  data?.choices?.[0]?.message?.content ||
  "No response from AI."
);

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
            Sure! In JavaScript, loops are used to repeat a block of code multiple times. This is helpful when you want to perform the same action on a list of items or to repeat an action a specific number of times. There are different types of loops in JavaScript, but the most common ones are: 1. for loop: Here, you specify a starting point, an ending point, and how much to increase the count each time. 2. while loop: This continues to run as long as a condition is true. ### Example of a for loop: Let's say you want to print the numbers 1 to 5. You can use a for loop like this: 
javascript for (let i = 1; i = 5; i++)
 ### Explanation: - let i = 1: This initializes a variable i to 1. - i = 5: This is the condition that keeps the loop running as long as i is less than or equal to 5. - i++: This increases i by 1 each time the loop runs. - Inside the braces {}, console.log(i); prints the current value of i. When you run this code, it will output: 
 1 2 3 4 5 
 This shows how the loop repeats the action of printing the number until it reaches 5!
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
