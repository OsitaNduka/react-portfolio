import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of East London, United Kingdom
          </h3>
          <p> Master of Laws, (LLM): International Law and Financial Markets</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Plymouth, United Kingdom
          </h3>

          <p>
          Bachelor of Science, (BSc): Law with Management 
          </p>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           Trilogy Boot-Camp 
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
           Front-End Web Development
          </h4>
          <p>Developed Front-End Web Projects and collaborated
            with two teams to launch two Applications.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2011 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Electoral Registration Officer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            London Borough of Newham Electoral Services
          </h4>
          <p>
          My duty as an Electoral officer assisted me to develop the skills I displayed in the roles such as communication, accuracy, 
          problem solving, tenacity and inclusion.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;