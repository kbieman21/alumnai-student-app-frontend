import CommonButton from "../components/CommonButtons";
import { useNavigate } from "react-router-dom";


function RquestConfirmPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-5xl font-bold mb-4">Rquest Confirm Page</h1>

      <p className="text-gray-300 text-lg mb-8">
       
      </p>
       <CommonButton
            label="Back to Learner's Page"
            color="gray"
            onClick={() => navigate("/learner")}
          />

     

      {/* <ProjectsPage/> */}
    </div>
  );
}
export default RquestConfirmPage;
