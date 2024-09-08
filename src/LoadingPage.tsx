import React, { FC } from "react";
import { FaSpinner } from "react-icons/fa";

// Define the component as a Functional Component using the FC type
const LoadingPage: FC = () => {
  return (
    <div className="grow flex justify-center items-center">
      <div className="text-5xl animate-spin"><FaSpinner/></div>
    </div>
  );
};

export default LoadingPage;
