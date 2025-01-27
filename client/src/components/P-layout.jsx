import PropTypes from "prop-types";
import InsightRoll from "./newsrolls.jsx";

const insights = [
    "20+ Projects Completed",
    "6+ Years of Freelancing ",
    "99% Client Satisfaction that's actually true no cap",
    "100K+ Subscribers someday",
    "Authored In-Depth Course on Educative",
    "Has Contributed as a Technical Course Reviewer 📝",
    "Likes Working on Projects so give me a buzz 🏆",
];

export default function PLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}

PLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
