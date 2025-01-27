// eslint-disable-next-line no-unused-vars
import React from "react"; // Importing React for component functionality
import PropTypes from "prop-types"; // Importing PropTypes for prop validation

const InsightRoll = ({ insights }) => { // Functional component to display insights
  return (
    <div className="w-full bg-accent dark:bg-accentDark text-light dark:text-dark whitespace-nowrap overflow-hidden">
      <div className="animate-roll w-full py-3 sm:py-3 flex items-center justify-center capitalize font-semibold tracking-wider text-sm sm:text-base"> {/* Styling for insights display */}
        {insights.map((text, index) => (
          <div key={index}>
            {text} <span className="px-4">|</span>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

// PropTypes validation
InsightRoll.propTypes = {
  insights: PropTypes.arrayOf(PropTypes.string).isRequired, // Ensuring insights is an array of strings
};

export default InsightRoll;
