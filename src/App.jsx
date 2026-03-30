import { useState } from "react";

export default function ForwardArrowSite() {
  const [submitted, setSubmitted] = useState(false);

  const services = [
    {
      title: "AI Primer & Readiness",
      text: "Practical first steps for churches, nonprofits, small businesses, and professional teams that want clarity before investing time or money."
    },
    {
      title: "Human-First AI Guidance",
      text: "Support built around judgment, safety, accountability, and real-world usefulness—not hype."
    },
    {
      title: "Workflow Implementation",
      text: "Help identifying where AI can reduce repetitive work, improve communication, and fit into day-to-day operations."
    }
  ];

  const outcomes = [
    "Start small with a real use case",
    "Stay safe with simple guardrails",
    "Reduce repetitive administrative work",
    "Improve communication quality and speed",
    "Build confidence before larger investments"
  ];

  const principles = [
    "Technology should serve people.",
    "AI should reduce burden—not increase confusion.",
    "Use should be intentional, ethical, and grounded.",
    "Competence, it turns out, still matters."
  ];

  const resources = [
    {
      title: "AI Primer",
      text: "A simple, safe starting point for understanding how AI can be used in real workflows.",
      href: "/Forward_Arrow_AI_Primer_v4.pdf",
      cta: "Open the Primer"
    },
    {
      title: "AI Use Case Checklist",
      text: "Define a real use case before choosing tools—avoid wasted time, confusion, and unnecessary risk.",
      href: "/Forward_Arrow_AI_Checklist_v3.pdf",
      cta: "Open the Checklist"
    },
    {
      title: "Clinic AI Checklist",
      text: "A practical guide for medical practices navigating workflow, compliance, and patient data risks.",
      href: "/Forward_Arrow_Clinic_AI_Checklist_v6_content_fixed.pdf",
      cta: "Open the Clinic Checklist"
    },
    {
      title: "Church AI Starter",
      text: "Simple, human-first guidance for churches exploring AI without losing mission, discernment, or trust.",
      href: "/AI_Church_OnePager_v5.pdf",
      cta: "Open the Church Guide"
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xdawjlzv", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 sticky top-0 bg-white/95 backdrop-blur z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <div className="text-xl font-bold tracking-tight text-teal-700">
              Forward Arrow Services, LLC
            </div>
            <div className="text-sm text-slate-600">
              Human-First AI Guidance for Real-World Organizations
            </div>
          </div>

          <nav className="hidden md:flex gap-6 text-sm text-slate-700">
            <a href="#services" className="hover:text-teal-700">
              Services
            </a>
            <a href="#primer" className="hover:text-teal-700">
              AI Primer
            </a>
            <a href="#resources" className="hover:text-teal-700">
              Resources
            </a>
            <a href="#philosophy" className="hover:text-teal-700">
              Philosophy
            </a>
            <a href="#contact" className="hover:text-teal-700">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-slate-50" />
          <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-teal-200 bg-white px-4 py-1.5 text-sm text-teal-800 shadow-sm">
                Practical AI. Real Results. Human First.
              </div>

              <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
                Clear, grounded guidance for using AI in real workflows.
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-700 max-w-2xl">
                Forward Arrow helps organizations think clearly about where AI fits,
                what it should be doing, and where the right boundaries need to be.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-teal-700 px-6 py-3 text-white font-medium shadow hover:bg-teal-800 transition"
                >
                  Start the conversation
                </a>
                <a
                  href="#resources"
                  className="rounded-2xl border border-teal-700 px-6 py-3 text-teal-700 font-medium shadow-sm hover:bg-teal-50 transition"
                >
                  Explore resources
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold uppercase tracking-wide text-teal-700">
                  Why this matters now
                </div>
                <p className="mt-3 text-slate-700 leading-7">
                  Most organizations do not need more hype around AI. They need
                  practical clarity around where it helps, where it creates risk,
                  and how to use it responsibly in the work they are already doing.
                </p>
              </div>

              <div className="rounded-3xl border-l-4 border-teal-700 bg-teal-50 p-6 shadow-sm">
                <p className="text-lg font-semibold text-teal-800">
                  “Competence, it turns out, still matters.”
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Practical help for organizations trying to make sense of AI.
            </h2>
            <p className="mt-4 text-slate-700 text-lg leading-8">
              Forward Arrow focuses on grounded, useful support that helps teams
              move forward with clarity instead of confusion.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-slate-700 leading-7">{service.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="primer" className="bg-slate-50 border-y border-slate-200 scroll-mt-24">
          <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
                AI Primer
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Start with clarity before you make bigger investments.
              </h2>
              <p className="mt-4 text-slate-700 text-lg leading-8">
                The Forward Arrow primer is built for organizations that want a
                responsible, useful first step into AI.
              </p>

              <a
                href="/Forward_Arrow_AI_Primer_v4.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-6 rounded-2xl bg-teal-700 px-6 py-3 text-white font-medium shadow hover:bg-teal-800 transition"
              >
                Open the AI Primer
              </a>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">
                What organizations gain
              </h3>
              <ul className="mt-4 space-y-3">
                {outcomes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-teal-700 shrink-0" />
                    <span className="text-slate-700 leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="resources" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              Resources
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Practical tools to help you get clarity before you commit.
            </h2>
            <p className="mt-4 text-slate-700 text-lg leading-8">
              These are built for real conversations with organizations trying to
              work out how AI fits into existing workflows, responsibilities, and
              boundaries.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {resources.map((resource) => (
              <a
                key={resource.title}
                href={resource.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:border-teal-400 hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {resource.title}
                </h3>
                <p className="mt-3 text-slate-700 leading-7">{resource.text}</p>
                <div className="mt-5 text-sm font-medium text-teal-700">
                  {resource.cta} →
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="philosophy" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
              Philosophy
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Human-first, practical, and grounded.
            </h2>
            <p className="mt-4 text-slate-700 text-lg leading-8">
              Forward Arrow is built on the belief that technology should help
              people work better, think more clearly, and stay in control of what
              matters most.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {principles.map((principle) => (
              <div
                key={principle}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-slate-800 text-lg leading-7">{principle}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-24">
          <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 md:p-10 shadow-sm">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
                  Contact
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight">
                  Take the next step forward—with clarity.
                </h2>
                <p className="mt-4 text-slate-700 text-lg leading-8">
                  Forward Arrow Services, LLC helps organizations use AI in a way
                  that is useful, responsible, and grounded in human judgment.
                </p>
              </div>

              <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="hidden"
                      name="_subject"
                      value="Forward Arrow Inquiry"
                    />

                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      className="w-full rounded-2xl border border-slate-300 px-4 py-3"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      required
                      className="w-full rounded-2xl border border-slate-300 px-4 py-3"
                    />
                    <input
                      type="text"
                      name="organization"
                      placeholder="Organization"
                      className="w-full rounded-2xl border border-slate-300 px-4 py-3"
                    />

                    <textarea
                      name="message"
                      placeholder="How can Forward Arrow help?"
                      rows="5"
                      required
                      className="w-full rounded-2xl border border-slate-300 px-4 py-3"
                    />

                    <button
                      type="submit"
                      className="w-full rounded-2xl bg-teal-700 px-6 py-3 text-white font-medium shadow hover:bg-teal-800 transition"
                    >
                      Send Message
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-10">
                    <div className="text-2xl font-semibold text-teal-700">
                      Thank you.
                    </div>
                    <p className="mt-4 text-slate-700 leading-7">
                      Your message has been received. Forward Arrow will be
                      following up with you personally within 24 - 48 hours.
                      Until then, check out the primer{" "}
                      <a
                        href="/Forward_Arrow_AI_Primer_v4.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="text-teal-700 font-medium underline hover:text-teal-800"
                      >
                        here.
                      </a>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}