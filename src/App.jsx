import { useState } from 'react'
import Logo from './components/Logo'
import {
  certifications,
  domainsWorked,
  education,
  experience,
  exploring,
  principles,
  profile,
  projects,
  skillDomains,
  systems,
} from './content'
import './App.css'

function App() {
  const [activeSkill, setActiveSkill] = useState(skillDomains[0].id)
  const activeDomain =
    skillDomains.find((domain) => domain.id === activeSkill) ?? skillDomains[0]

  return (
    <div className="page">
      <header className="nav">
        <a className="nav-brand" href="#top" aria-label="Rajasree home">
          <Logo size="sm" />
        </a>
        <nav aria-label="Primary">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#systems">Systems</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-label="Introduction">
          <div className="hero-bg" aria-hidden="true">
            <pre className="hero-log">
{`$ whoami
rajasree baruri

$ locale
bengaluru · ist

$ focus
backend · cloud · systems`}
            </pre>
          </div>

          <div className="hero-content">
            <div className="hero-brand">
              <Logo size="lg" />
            </div>
            <h1>{profile.title}</h1>
            <p className="hero-meta mono">
              {profile.fullName} · {profile.location}
            </p>
            <p className="hero-lede">{profile.lede}</p>
            <ul className="hero-tags" aria-label="Focus areas">
              {profile.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <div className="hero-actions">
              <a className="btn" href="#systems">
                View systems
              </a>
              <a className="btn btn-ghost" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-label">
            <span className="mono">01 / about</span>
            <h2>About me</h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              {profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="principles">
              {principles.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.body}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="domain-strip">
            <p className="mono strip-label">Domains shipped in</p>
            <ul>
              {domainsWorked.map((domain) => (
                <li key={domain}>{domain}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="experience" className="section section-alt">
          <div className="section-label">
            <span className="mono">02 / path</span>
            <h2>Experience &amp; education</h2>
          </div>

          <div className="path-grid">
            <div>
              <p className="mono strip-label">Work</p>
              <ul className="path-list">
                {experience.map((job) => (
                  <li
                    key={`${job.role}-${job.period}`}
                    className="path-item"
                  >
                    <span className="path-rail" aria-hidden="true">
                      <span className="path-dot" />
                    </span>
                    <div className="path-body">
                      <div className="path-main">
                        <strong>{job.role}</strong>
                        {job.company ? <span>{job.company}</span> : null}
                      </div>
                      <div className="path-meta mono">
                        <span>{job.period}</span>
                        <span>{job.location}</span>
                      </div>
                      <ul className="milestone-list">
                        {job.milestones.map((milestone) => (
                          <li key={milestone}>{milestone}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mono strip-label">Education</p>
              <ul className="path-list">
                {education.map((item) => (
                  <li key={item.school} className="path-item">
                    <span className="path-rail" aria-hidden="true">
                      <span className="path-dot" />
                    </span>
                    <div className="path-body">
                      <div className="path-main">
                        <strong>{item.degree}</strong>
                        <span>{item.school}</span>
                      </div>
                      <div className="path-meta mono">
                        <span>{item.period}</span>
                      </div>
                      <ul className="milestone-list">
                        {item.milestones.map((milestone) => (
                          <li key={milestone}>{milestone}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="mono strip-label cert-label">Certifications</p>
              <ul className="cert-list">
                {certifications.map((cert) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="systems" className="section">
          <div className="section-label">
            <span className="mono">03 / systems</span>
            <h2>Systems I shipped</h2>
            <p className="section-sub">
              Production work across search, queues, WhatsApp messaging, and AI
              insights for dealer and catalogue platforms.
            </p>
          </div>

          <ul className="systems">
            {systems.map((system) => (
              <li key={system.id} className="system">
                <div className="system-top">
                  <span className="mono system-id">{system.id}</span>
                  <span className="mono system-domain">{system.domain}</span>
                </div>
                <h3>{system.title}</h3>
                <p>{system.summary}</p>
                <ul className="system-highlights">
                  {system.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="system-stack mono">{system.stack.join(' · ')}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="projects" className="section section-alt">
          <div className="section-label">
            <span className="mono">04 / projects</span>
            <h2>Projects</h2>
            <p className="section-sub">
              Personal and academic builds across LMS, medical imaging, and
              mobile alerts.
            </p>
          </div>

          <ul className="systems">
            {projects.map((project) => (
              <li key={project.id} className="system">
                <div className="system-top">
                  <span className="mono system-id">{project.id}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <ul className="system-highlights">
                  {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="system-stack mono">{project.stack.join(' · ')}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="skills" className="section">
          <div className="section-label">
            <span className="mono">05 / stack</span>
            <h2>Tools I use</h2>
            <p className="section-sub">
              Pick a domain. Backend is where I spend most of my time; frontend,
              cloud, and platform tools are here too.
            </p>
          </div>

          <div className="skills-explorer">
            <div
              className="skill-tabs"
              role="tablist"
              aria-label="Skill domains"
            >
              {skillDomains.map((domain) => (
                <button
                  key={domain.id}
                  type="button"
                  role="tab"
                  id={`tab-${domain.id}`}
                  aria-selected={activeSkill === domain.id}
                  aria-controls={`panel-${domain.id}`}
                  className={
                    activeSkill === domain.id ? 'skill-tab active' : 'skill-tab'
                  }
                  onClick={() => setActiveSkill(domain.id)}
                >
                  {domain.label}
                </button>
              ))}
            </div>

            <div
              className="skill-panel"
              role="tabpanel"
              id={`panel-${activeDomain.id}`}
              aria-labelledby={`tab-${activeDomain.id}`}
            >
              <p className="mono panel-label">{activeDomain.label}</p>
              <ul>
                {activeDomain.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="exploring">
            <p className="mono strip-label">Actively exploring</p>
            <ul>
              {exploring.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="section section-contact">
          <div className="section-label">
            <span className="mono">06 / contact</span>
            <h2>Let's connect</h2>
          </div>
          <p className="contact-copy">
            Looking for backend, cloud, search, messaging, or full-stack work.
            Email me or find me on GitHub and LinkedIn.
          </p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>Email</a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span className="mono">
          {profile.fullName.toLowerCase()} · software engineer
        </span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </div>
  )
}

export default App
