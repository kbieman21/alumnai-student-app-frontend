import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-sky-500 text-white">
      
      <h1 className="text-5xl font-bold mb-4">
        Alumni & Learner Connection
      </h1>

      <p className="text-xl text-gray-200 max-w-2xl mb-6">
        A smart, AI-powered tutoring platform that connects Per Scholas learners
        with alumni mentors — delivering faster support, personalized guidance,
        and meaningful ways to give back.
      </p>

      <p className="text-gray-300 max-w-xl mb-10">
        Learners get instant AI help and human mentorship. Alumni earn recognition
        for supporting the next generation.
      </p>

      <div className="space-x-4">
        <Link
          to="/login"
          className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700 transition"
        >
          Register
        </Link>
      </div>

      {/* Optional demo hint */}
      <p className="text-black text-sm mt-8">
        Built with AI + Human Mentorship • Hackathon Prototype
      </p>
    </div>
  );
}

export default HomePage;
