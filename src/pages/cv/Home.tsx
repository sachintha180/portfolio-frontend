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
      <header className="flex flex-col gap-2 mb-5">
        <h1 className="text-2xl font-bold mb-2">sachintha senanayake</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-muted text-xs">
          <div className="flex flex-row gap-2 items-center">
            <FiMapPin aria-hidden="true" className="w-4 h-4 text-muted" />
            <p>
              <strong>Location:</strong> Colombo, Sri Lanka
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <FiPhone aria-hidden="true" className="w-4 h-4 text-muted" />
            <p>
              <strong>Phone:</strong> +94 72 455 9912
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <FiMail aria-hidden="true" className="w-4 h-4 text-muted" />
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
          <div className="flex flex-row gap-2 items-center">
            <FiGithub aria-hidden="true" className="w-4 h-4 text-muted" />
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
          <div className="flex flex-row gap-2 items-center">
            <FiLinkedin aria-hidden="true" className="w-4 h-4 text-muted" />
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
          <div className="flex flex-row gap-2 items-center">
            <FiGlobe aria-hidden="true" className="w-4 h-4 text-muted" />
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
        <h2 className="text-warm text-xl font-bold border-b border-warm pb-2 mb-4">
          about me
        </h2>
        <p className="text-justify text-xs">{ABOUT_ME}</p>
      </section>

      {/* Experience Section */}
      <section className="mb-5">
        <h2 className="text-cool text-xl font-bold border-b border-cool pb-2 mb-4">
          experience
        </h2>
        {softwareSectorExperienceItems.map((item, itemIndex) =>
          item.roles.map((role, roleIndex) => (
            <article key={`${itemIndex}-${roleIndex}`} className="mb-6">
              <div className="flex justify-between items-start mb-2">
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
                    <span className="flex items-center gap-1 text-xs mt-1">
                      <FiMapPin
                        aria-hidden="true"
                        className="w-4 h-4 text-muted"
                      />
                      {item.organization.location}
                    </span>
                  )}
                </div>

                {/* Role Duration */}
                <span className="text-right text-xs text-secondary">
                  {formatTimelineDate(role.startDate, role.endDate)}
                </span>
              </div>

              {/* Role Details */}
              <ul className="ml-6 mt-2 list-disc text-xs max-w-[550px]">
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
        <h2 className="text-success text-xl font-bold border-b border-success pb-2 mb-4">
          education
        </h2>
        {EDUCATION_ITEMS.filter((item) => item.label !== "Certifications")
          .slice(2, EDUCATION_ITEMS.length - 1)
          .map((item, itemIndex) =>
            item.programs.map((program, programIndex) => (
              <article key={`${itemIndex}-${programIndex}`} className="mb-6">
                <div className="flex justify-between items-start mb-2">
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
                        <span className="flex items-center gap-1 text-xs mt-1">
                          <FiMapPin
                            aria-hidden="true"
                            className="w-4 h-4 text-muted"
                          />
                          {item.institution.location}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Program Duration */}
                  <span className="text-right text-xs text-secondary">
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
        <h2 className="text-danger text-xl font-bold border-b border-danger pb-2 mb-4">
          top {MAX_PROJECT_NODE_COUNT} projects
        </h2>
        {SLICED_PROJECT_ITEMS.map((project, index) => (
          <article key={index} className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div className="flex flex-col gap-1">
                {/* Project Title */}
                <div className="flex items-center gap-2">
                  <strong>{project.title}</strong>
                  {project.pending && (
                    <span className="italic text-xs text-muted">(Pending)</span>
                  )}
                </div>

                {/* Project Description Bullets */}
                <ul className="list-disc ml-5 mt-1 text-xs max-w-[500px]">
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
              <span className="text-right text-xs text-secondary whitespace-nowrap">
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
        <h2 className="text-secondary text-xl font-bold border-b border-secondary pb-2 mb-4">
          technical skills
        </h2>
        <ul className="list-disc ml-6 text-xs">
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
        <h2 className="text-warm text-xl font-bold border-b border-warm pb-2 mb-4">
          top {MAX_AWARD_NODE_COUNT} awards
        </h2>
        {SLICED_AWARD_ITEMS.map((award, index) => (
          <article key={index} className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div className="flex flex-col gap-1">
                <strong>{award.title}</strong>
                <span className="text-muted text-xs">
                  {award.organization.name}
                  {award.organization.location &&
                    `, ${award.organization.location}`}
                </span>
              </div>
              <span className="text-right text-xs text-secondary">
                {award.year}
              </span>
            </div>
            <p className="mt-2 text-xs">{award.description}</p>
          </article>
        ))}
      </section>

      {/* References Section */}
      <section className="mb-8">
        <h2 className="text-muted text-xl font-bold border-b border-muted pb-2 mb-4">
          references
        </h2>
        <p className="text-xs">Available upon request.</p>
      </section>
    </div>
  );
}
