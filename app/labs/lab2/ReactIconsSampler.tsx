import "@/app/labs/lab2/tailwind/utilities.css";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
// With AI: two families not used above
import { MdSchool } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi2";
// On your own: two more new families (Game Icons, Simple Icons)
import { GiWeightLiftingUp } from "react-icons/gi";
import { SiNextdotjs } from "react-icons/si";

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2 className="text-lg font-semibold">React Icons Sampler</h2>
      <div className="flex gap-3 text-3xl">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />
        {/* With AI */}
        <MdSchool className="text-4xl text-blue-600" />
        <HiAcademicCap className="text-4xl text-blue-600" />
        {/* On your own */}
        <GiWeightLiftingUp className="text-4xl text-red-600" />
        <SiNextdotjs className="text-4xl text-green-700" />
      </div>
    </div>
  );
}
