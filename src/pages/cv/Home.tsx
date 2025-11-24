import { useEffect } from "react";
import { EXPERIENCE_ITEMS } from "@/lib/portfolio/experience";
import { EDUCATION_ITEMS } from "@/lib/portfolio/education";
import {
  SLICED_PROJECT_ITEMS,
  MAX_PROJECT_NODE_COUNT,
} from "@/lib/portfolio/projects";
import {
  MAX_AWARD_NODE_COUNT,
  SLICED_AWARD_ITEMS,
} from "@/lib/portfolio/awards";
import { TECH_STACK } from "@/lib/portfolio/tech-stack";
import { formatTimelineDate, groupTechStackItems } from "@/lib/portfolio/utils";
import { ABOUT_ME } from "@/lib/portfolio/constants";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiGlobe,
} from "react-icons/fi";

export default function Home() {
  useEffect(() => {
    window.print();
  }, []);

  const groupedTechStack = groupTechStackItems(TECH_STACK);

  const softwareSectorExperienceItems = EXPERIENCE_ITEMS.filter(
    (item) => item.group === "Software Sector"
  );

  return (
    <div>
      {/* Header Section */}
      <header className="mb-5 flex flex-col gap-2">
        <h1 className="mb-2 text-2xl font-bold">sachintha senanayake</h1>
        <div className="text-muted grid grid-cols-1 gap-x-8 gap-y-2 text-xs sm:grid-cols-2">
          <div className="flex flex-row items-center gap-2">
            <FiMapPin aria-hidden="true" className="text-muted h-4 w-4" />
            <p>
              <strong>Location:</strong> Colombo, Sri Lanka
            </p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <FiPhone aria-hidden="true" className="text-muted h-4 w-4" />
            <p>
              <strong>Phone:</strong> +94 72 455 9912
            </p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <FiMail aria-hidden="true" className="text-muted h-4 w-4" />
            <p>
              <strong>Email:</strong>{" "}
              <a
                className="text-link underline"
                href="mailto:sachinthasenanayake180@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                sachinthasenanayake180@gmail.com
              </a>
            </p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <FiGithub aria-hidden="true" className="text-muted h-4 w-4" />
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                className="text-link underline"
                href="https://github.com/sachintha180"
                target="_blank"
                rel="noreferrer"
              >
                @sachintha180
              </a>
            </p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <FiLinkedin aria-hidden="true" className="text-muted h-4 w-4" />
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                className="text-link underline"
                href="https://www.linkedin.com/in/sachinthasenanayake180/"
                target="_blank"
                rel="noreferrer"
              >
                @sachinthasenanayake180
              </a>
            </p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <FiGlobe aria-hidden="true" className="text-muted h-4 w-4" />
            <p>
              <strong>Website:</strong>{" "}
              <a
                className="text-link underline"
                href="https://sachintha.net"
                target="_blank"
                rel="noreferrer"
              >
                sachintha.net
              </a>
            </p>
          </div>
        </div>
      </header>

      {/* About Me Section */}
      <section className="mb-5">
        <h2 className="text-warm border-warm mb-4 border-b pb-2 text-xl font-bold">
          about me
        </h2>
        <p className="text-justify text-xs">{ABOUT_ME}</p>
      </section>

      {/* Experience Section */}
      <section className="mb-5">
        <h2 className="text-cool border-cool mb-4 border-b pb-2 text-xl font-bold">
          experience
        </h2>
        {softwareSectorExperienceItems.map((item, itemIndex) =>
          item.roles.map((role, roleIndex) => (
            <article key={`${itemIndex}-${roleIndex}`} className="mb-6">
              <div className="mb-2 flex items-start justify-between">
                <div className="flex flex-row items-start gap-3">
                  {/* Role and Organization Name */}
                  <div className="flex flex-col gap-1">
                    <strong>{role.role}</strong>
                    <span className="text-muted text-xs">
                      {item.organization.name}
                    </span>
                  </div>

                  {/* Organization Location */}
                  {item.organization.location && (
                    <span className="mt-1 flex items-center gap-1 text-xs">
                      <FiMapPin
                        aria-hidden="true"
                        className="text-muted h-4 w-4"
                      />
                      {item.organization.location}
                    </span>
                  )}
                </div>

                {/* Role Duration */}
                <span className="text-secondary text-right text-xs">
                  {formatTimelineDate(role.startDate, role.endDate)}
                </span>
              </div>

              {/* Role Details */}
              <ul className="mt-2 ml-6 max-w-[550px] list-disc text-xs">
                {role.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="mb-1">
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))
        )}
      </section>

      {/* Page Break */}
      <div className="page-break"></div>

      {/* Education Section */}
      <section className="mb-8">
        <h2 className="text-success border-success mb-4 border-b pb-2 text-xl font-bold">
          education
        </h2>
        {EDUCATION_ITEMS.filter((item) => item.label !== "Certifications")
          .slice(2, EDUCATION_ITEMS.length - 1)
          .map((item, itemIndex) =>
            item.programs.map((program, programIndex) => (
              <article key={`${itemIndex}-${programIndex}`} className="mb-6">
                <div className="mb-2 flex items-start justify-between">
                  <div className="flex flex-row items-start gap-5">
                    <div className="flex flex-col gap-1">
                      {/* Program Name and Field */}
                      <strong>
                        {program.name}
                        {program.field && `, ${program.field}`}
                        <span className="text-success">
                          {program.grade && ` - ${program.grade}`}
                        </span>
                      </strong>

                      {/* Institution Name */}
                      <span className="text-muted text-xs">
                        {item.institution.name}
                      </span>

                      {/* Institution Location */}
                      {item.institution.location && (
                        <span className="mt-1 flex items-center gap-1 text-xs">
                          <FiMapPin
                            aria-hidden="true"
                            className="text-muted h-4 w-4"
                          />
                          {item.institution.location}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Program Duration */}
                  <span className="text-secondary text-right text-xs">
                    {program.pursuing
                      ? `Expected ${program.endYear}`
                      : program.endYear}
                  </span>
                </div>
              </article>
            ))
          )}
      </section>

      {/* Projects Section */}
      <section className="mb-8">
        <h2 className="text-danger border-danger mb-4 border-b pb-2 text-xl font-bold">
          top {MAX_PROJECT_NODE_COUNT} projects
        </h2>
        {SLICED_PROJECT_ITEMS.map((project, index) => (
          <article key={index} className="mb-6">
            <div className="mb-2 flex items-start justify-between">
              <div className="flex flex-col gap-1">
                {/* Project Title */}
                <div className="flex items-center gap-2">
                  <strong>{project.title}</strong>
                  {project.pending && (
                    <span className="text-muted text-xs italic">(Pending)</span>
                  )}
                </div>

                {/* Project Description Bullets */}
                <ul className="mt-1 ml-5 max-w-[500px] list-disc text-xs">
                  {project.description.map((desc, descIndex) => (
                    <li key={descIndex} className="mb-1">
                      {desc}
                    </li>
                  ))}

                  {/* Project Tech Stack */}
                  {project.tools && project.tools.length > 0 && (
                    <li className="mb-1 text-xs">
                      <strong className="text-danger">Tech Stack:</strong>{" "}
                      {project.tools.map((tool, toolIndex) => (
                        <span key={toolIndex}>
                          <strong>{tool}</strong>
                          {toolIndex < project.tools.length - 1 && ", "}
                        </span>
                      ))}
                    </li>
                  )}
                </ul>
              </div>
              {/* Project time duration */}
              <span className="text-secondary text-right text-xs whitespace-nowrap">
                Completed in {project.timeDuration}
              </span>
            </div>
          </article>
        ))}
      </section>

      {/* Page Break */}
      <div className="page-break"></div>

      {/* Technical Skills Section */}
      <section className="mb-8">
        <h2 className="text-secondary border-secondary mb-4 border-b pb-2 text-xl font-bold">
          technical skills
        </h2>
        <ul className="ml-6 list-disc text-xs">
          {groupedTechStack.map((group, index) => (
            <li key={index} className="mb-2">
              <strong className="text-secondary">{group.group.label}:</strong>{" "}
              {group.items.map((item, itemIndex) => (
                <span key={itemIndex}>
                  <strong>{item.name}</strong>
                  {itemIndex < group.items.length - 1 && ", "}
                </span>
              ))}
            </li>
          ))}
        </ul>
      </section>

      {/* Awards Section */}
      <section className="mb-8">
        <h2 className="text-warm border-warm mb-4 border-b pb-2 text-xl font-bold">
          top {MAX_AWARD_NODE_COUNT} awards
        </h2>
        {SLICED_AWARD_ITEMS.map((award, index) => (
          <article key={index} className="mb-6">
            <div className="mb-2 flex items-start justify-between">
              <div className="flex flex-col gap-1">
                <strong>{award.title}</strong>
                <span className="text-muted text-xs">
                  {award.organization.name}
                  {award.organization.location &&
                    `, ${award.organization.location}`}
                </span>
              </div>
              <span className="text-secondary text-right text-xs">
                {award.year}
              </span>
            </div>
            <p className="mt-2 text-xs">{award.description}</p>
          </article>
        ))}
      </section>

      {/* References Section */}
      <section className="mb-8">
        <h2 className="text-muted border-muted mb-4 border-b pb-2 text-xl font-bold">
          references
        </h2>
        <p className="text-xs">Available upon request.</p>
      </section>
    </div>
  );
}
