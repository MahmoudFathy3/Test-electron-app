import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="p-10">
      <h3>About page</h3>
      <button className="btn bg-blue-300 p-3" onClick={() => navigate(-1)}>
        Back to home
      </button>
    </div>
  );
};

export default About;
