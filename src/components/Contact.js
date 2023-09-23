import { useEffect, useState } from "react";
import { PARTNER_ON_BOARDING } from "../utils/constants";

const Section = ({ question, description }) => {
  const [visibleSection, setVisibleSection] = useState(false);

  return (
    <div className="border-b-2 py-4 mb-2">
      <div className="flex font-semibold justify-between">
        <h1>{question}</h1>
        {visibleSection ? (
          <button
            className="bg-green-300 px-1 rounded"
            onClick={() => setVisibleSection(false)}
          >
            Hide
          </button>
        ) : (
          <button
            className="bg-green-800 px-1 rounded text-white"
            onClick={() => setVisibleSection(true)}
          >
            Show
          </button>
        )}
      </div>
      {visibleSection && <p className="mt-2">{description}</p>}
    </div>
  );
};

const Contact = () => {
  const [questions, setQuestions] = useState([]);

  const fetchPartnerOnboarding = async () => {
    const response = await fetch(`${PARTNER_ON_BOARDING}`);
    const data = await response.json();
    setQuestions(data.data.issues.data);
  };

  useEffect(() => {
    fetchPartnerOnboarding();
  }, []);

  return (
    <div className="max-w-screen-md mx-auto my-4">
      <h1 className="font-bold text-lg">Help & Support</h1>
      <p className="italic">Let's take a step ahead and help you better.</p>
      <div className="my-8">
        {questions.map(({ id, title, description }) => (
          <Section key={id} question={title} description={description} />
        ))}
      </div>
    </div>
  );
};

export default Contact;
