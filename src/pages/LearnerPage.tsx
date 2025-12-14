import { useState } from "react";
import banner from "../assets/White Minimalist Simple Coming Soon Banner.png";
import CommonButton from "../components/CommonButtons";
import { useNavigate } from "react-router-dom";
import AIHelper from "../pages/AIHelperPage";


const DEMO_MODE = true; // 🔁 CHANGE TO false FOR LIVE OPENAI

export default function LearnerPage() {
    const navigate = useNavigate();
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
              {
                role: "system",
                content:
                  "You are a helpful and supportive tutor for Per Scholas learners. Explain concepts simply.",
              },
              {
                role: "user",
                content:
                  "Explain JavaScript loops simply and give one short example.",
              },
            ],
          }),
        }
      );

      const data = await response.json();
      setAiResponse(data.choices[0].message.content);
    } catch (error) {
      setAiResponse("AI is currently unavailable. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div>
      {/* Welcome student banner */}
      <section className="mb-15 z-0 py-10 ">
        <div
          className="mx-auto pt-10 p-9 rounded-lg "
          style={{
            backgroundImage: `url(${banner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            height: 300,
            width: 600,
          }}
        >
          <h1 className="mt-3 text-left text-black text-xl">
            Welcome back Learner!
          </h1>
          <p className="mt-10 text-black text-left">███▒▒▒▒▒▒▒ 30%</p>
          <p className="mt-20 text-black text-left">
            Get fast help from AI and Per Scholas alumni tutors.
          </p>
        </div>
      </section>

      {/* Request Help */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
        <div className="flex flex-col rounded-lg border border-gray-200 hover:bg-white hover:border-gray-200 px-4 py-8 text-center text-black text-lg">
          <dt>Notes</dt>
        </div>

        <div className="flex flex-col rounded-lg border border-gray-200 hover:bg-white hover:border-gray-200 px-4 py-8 text-center text-black text-lg">
          <dt>Materials</dt>
        </div>
      </div>

      <div className="flex flex-col">
        <h2 className="font-bold text-black">Get Help Now</h2>

        <label>Topic / Skill</label>
        <select className="rounded-lg border border-black">
          <option >JavaScript</option>
          <option>Python</option>
          <option>IT Support</option>
          <option>AWS</option>
          <option>Cybersecurity</option>
        </select>

        <label>Difficulty Level</label>
        <select className="rounded-lg border border-black">
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>

        <label className="rounded-lg border border-black">Describe Your Question</label>
        <textarea className="rounded-lg border border-black mt-5 mb-5" placeholder="I’m struggling to understand JavaScript loops and how to use them in projects." />

        {/* <button onClick={handleAIHelp}>
          Get AI Help
        </button> */}
        {/* <button><CommonButton label="Get AI Help" color="gray" onClick={handleAIHelp} /></button> */}
        
      </div>

      {/* Demo AI Response */}
      {/* {showFakeAI && (
        <section className="rounded-lg border border-black mt-5 mb-5">
          <h2>AI Study Assistant 🤖</h2>
          <p>
            A loop allows you to repeat a block of code until a condition is
            met. In JavaScript, a <code>for</code> loop is commonly used to run
            code a specific number of times.
          </p>
          <pre>
            {`for (let i = 0; i < 5; i++) {
  console.log(i);
}`}
          </pre>
          <p>
            <strong>Next Step:</strong> Practice writing a loop that prints
            numbers from 1 to 10.
          </p>
        </section>
      )} */}

      {/* Live AI Response */}
      {/* {loading && <p>AI is thinking...</p>}

      {aiResponse && (
        <section className="rounded-lg border border-red mt-5">
          <h2 className="mb-5">AI Study Assistant 🤖</h2>
          <p className="mb-5">{aiResponse}</p>
        </section>
      )} */}

        <AIHelper
  title="AI Study Assistant 🤖"
  systemPrompt="You are a helpful and supportive tutor for Per Scholas learners. Explain concepts simply."
  userPrompt="Explain JavaScript loops simply and give one short example."
/>

      {/* Recommended Tutor */}
      <section>
        <h2 className="mt-5">Recommended Tutor</h2>
        <p>
          <strong>Alex R.</strong> — JavaScript Alumni Tutor
        </p>
        <p>⭐ 5.0 | 🏅 Top Mentor</p>
        {/* <button>Request Session</button> */}
        <CommonButton label="Request Session" color="gray" onClick={()=>{
            navigate('/confirm');
        }} />
      </section>

      {/* Progress */}
      <section>
        <h2>Your Learning Progress</h2>
        <p>Sessions Completed: 3</p>
        <p>Level: Explorer 🌱</p>
        <p>Points Earned: 120</p>
      </section>
    </div>
  );
}
