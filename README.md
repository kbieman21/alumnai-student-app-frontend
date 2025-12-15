## GIF
![](https://github.com/kbieman21/alumnai-student-app-frontend/blob/941ecbfb129317284e22f00c4352c4864b85469f/Video%20Project%20gif.gif)



# Repo Collaborators:
Kibreab Solomon
ROLE:TEAM TECH LEAD, FULL STACK DEVELOPER, AI ARCHITECT
Eriko Kan
ROLE:FULL STACK DEVELOPER, AI ARCHITECT, PRINCIPAL ENGINEER
Arshpreet Kaur
ROLE: FULL STACK DEVELOPER, GUI DESIGNER, UX/UI
Angelica Flores
ROLE: FULL STACK DEVELOPER, SCRUM MASTER, TECHNICAL WRITER


# Background:
Per scholas is a tuition-free school that provides hands-on technical instruction for high demand jobs and buisness professional skills development. This application is a smart, gamified tutoring platform that connects Per Scholas learners with alumni tutors, enhanced by AI-powered learning support to make tutoring faster, more accessible, and more rewarding.


# Problem:
Per scholas wants to allow students who have graduated to have the opportunity to give back as a mentor/tutor in subjects such as Software engineering. We need to develop a tutoring app called PeerTrack+ that alows alumni and current students to connect and learn for future student success, while integrating the latest AI assistive technologies.


# Solution:
We want to make a smart helper app called PeerTrack+ that benefits the community of the Per Scholas progam.
We have created and designed this app to allow only three users: Admin, Learner, and Tutor to log in. This app integrates AI and a chatbot with open AI that helps answer questions fast on the platform if a student requested.


Key Features:
- Only Alumni can signup to become tutors and have access to the Tutor portal. The Tutors can edit their profile, accept or decline a requested session, create prep material with the aid of AI, and view their rewards.
- Current Students can request help from the AI chatbot, contact for support, schedule a tutoring session, and view their progress and rewards. When contacting for support, a learner selects a topic, difficulty, and describes their problem.
- Admin will be able to edit Almuni and student profiles, approve /deny tutoring applications, and admin can see the AI-suggested trends of data.


# Mission:
We created this app in hopes of improving the perscholas community from which we graduated from to help solve the gap between learner and alumni mentorship.


## Frontend routes
After login:
    • The backend returns the authenticated user and their role
    • The frontend stores this securely for the session
    • Routing is role-based, so learners, tutors, and admins automatically land on the correct dashboard
This keeps the UI clean and prevents users from accessing pages they shouldn’t.



## Backend API Endpoints:
users:
GET        /api/users             -       Get users
GET        /api/users/:id         -       Get user by id

users-Register:    
POST       /api/user/register     -       Register user

users-Login:	
POST       /api/user/login        -       Login user




## Technolgies USED:
Basics:
-Github Collab Repos
-Visual Studio Code


Programming Language:
-Javascript


AI TOOLS:
-OpenAI API Key integration


FOUNDATION:
- Balsamiq UX/UI Wireframe (free trial only)
- React Javascript Libraries
- MongoDB
- TailwindCSS UI/UX


 More Tech Stack
Frontend
	• React + TypeScript
	• Vite (build tool)
	• Tailwind CSS (styling)
	• React Router dom(routing)
	• Context API (global state management)
	• Axios (API requests)
	• npm (package manager)
    • open ai
    

Backend
	• Node.js 
	• Express
	• JavaScript
	• MongoDB (Mongoose)
	• JSON Web Tokens (JWT)
	• CORS
	• bcrypt.js
	• dotenv
    • morgan logger

—--- This is the end


