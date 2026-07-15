import { useMemo, useState } from "react";

export default function ForwardArrowSite() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [showOffer, setShowOffer] = useState(false);

  // Replace this with your live Square checkout/payment link.
  const SQUARE_CHECKOUT_URL = "https://square.link/u/REPLACE_WITH_YOUR_LINK";

  const freeKitItems = [
    "AI Readiness Quick-Start Guide",
    "Human-First AI Use Checklist",
    "Five Common Governance Gaps",
    "First-Policy Planning Worksheet",
    "30-Day Responsible AI Action Map"
  ];

  const paidSystemItems = [
    {
      title: "AI Primer",
      description:
        "A plain-language guide leaders can use to understand practical AI opportunities, limitations, and risks."
    },
    {
      title: "AI Policy Library",
      description:
        "Adaptable policy language covering acceptable use, human oversight, transparency, data handling, and accountability."
    },
    {
      title: "Healthcare Governance Pack",
      description:
        "Clinic-focused templates for PHI protection, vendor review, human clinical authority, and HIPAA-conscious AI use."
    },
    {
      title: "Church & Nonprofit Governance Pack",
      description:
        "Practical safeguards for member data, donor information, counseling boundaries, communications, and volunteer use."
    },
    {
      title: "Vendor Vetting Checklist",
      description:
        "A repeatable review process for privacy, security, data retention, contracts, auditability, and operational fit."
    },
    {
      title: "Executive Briefing",
      description:
        "A concise leadership-ready summary of the decisions, risks, responsibilities, and first actions that matter."
    },
    {
      title: "AI Inventory Workbook",
      description:
        "A structured worksheet for identifying where AI is already being used, by whom, for what, and with what data."
    },
    {
      title: "30-Day Governance Roadmap",
      description:
        "A practical first-month sequence that turns concern into visible action without overwhelming the organization."
    }
  ];

  const credibility = [
    "20+ years working in enterprise technology and operational systems",
    "Experience across insurance, retail, infrastructure, reliability, and observability",
    "Human-first governance built for real teams—not abstract theory",
    "Practical guidance for healthcare, nonprofits, churches, and small organizations"
  ];

  const faqs = [
    {
      question: "Is the free Starter Kit really free?",
      answer:
        "Yes. Enter your email and Forward Arrow will send the free Starter Kit. You will also receive occasional practical guidance and product updates. You can unsubscribe at any time."
    },
    {
      question: "What is the paid Starter System?",
      answer:
        "It is a packaged collection of templates, checklists, workbooks, and implementation guidance designed to help an organization establish a usable AI governance baseline."
    },
    {
      question: "Is this legal or compliance advice?",
      answer:
        "No. Forward Arrow provides operational governance guidance and educational materials. Organizations should involve qualified legal, privacy, security, and compliance professionals when required."
    },
    {
      question: "Will this replace a full assessment?",
      answer:
        "No. The Starter System helps an organization begin. A tailored assessment examines actual workflows, tools, data, responsibilities, and evidence in the organization itself."
    },
    {
      question: "Who is this built for?",
      answer:
        "It is designed for small and mid-sized organizations, especially healthcare practices, churches, nonprofits, professional teams, and businesses beginning to formalize AI use."
    }
  ];

  const offerValue = useMemo(
    () => [
      { label: "Policy and governance templates", value: "$149" },
      { label: "Industry-specific guidance packs", value: "$129" },
      { label: "Inventory and vendor worksheets", value: "$79" },
      { label: "30-day implementation roadmap", value: "$69" },
      { label: "Executive briefing materials", value: "$49" }
    ],
    []
  );

  const handleLeadSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setFormError("");

    const form = event.currentTarget;
    const data = new FormData(form);

    data.append("_subject", "Forward Arrow Starter Kit Request");
    data.append("lead_source", "forwardarrow.us");
    data.append("requested_resource", "Human-First AI Governance Starter Kit");

    try {
      const response = await fetch("https://formspree.io/f/xdawjlzv", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("The form could not be submitted.");
      }

      setSubmitted(true);
      setShowOffer(true);
      form.reset();

      window.setTimeout(() => {
        document
          .getElementById("starter-system-offer")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
    } catch (error) {
      setFormError(
        "We could not submit your request. Please try again in a moment."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const scrollToCapture = () => {
    document
      .getElementById("get-the-kit")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const goToCheckout = () => {
    if (SQUARE_CHECKOUT_URL.includes("REPLACE_WITH_YOUR_LINK")) {
      window.alert(
        "Add your Square checkout link to SQUARE_CHECKOUT_URL near the top of App.jsx."
      );
      return;
    }

    window.location.href = SQUARE_CHECKOUT_URL;
  };

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="min-w-0">
            <div className="truncate text-lg font-extrabold tracking-tight text-teal-800 sm:text-xl">
              Forward Arrow Services, LLC
            </div>
            <div className="hidden text-xs font-medium text-slate-500 sm:block">
              Human-First AI Governance for Real-World Organizations
            </div>
          </a>

          <button
            type="button"
            onClick={scrollToCapture}
            className="shrink-0 rounded-xl bg-teal-700 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-200"
          >
            Get the Free Kit
          </button>
        </div>
      </header>

      <main id="top">
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-20 bg-gradient-to-br from-teal-50 via-white to-slate-50" />
          <div className="absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-teal-200/30 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-28">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-2 text-sm font-bold text-teal-800 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-teal-600" />
                Practical AI. Responsible Use. Human Authority.
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-7xl">
                AI is already inside your organization.
              </h1>

              <p className="mt-6 max-w-2xl text-xl font-semibold leading-8 text-slate-700 sm:text-2xl">
                The real question is whether anyone has mapped the risk,
                responsibility, and boundaries around it.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Get the free Human-First AI Governance Starter Kit and begin
                identifying where AI is being used, what information may be at
                risk, and what leadership should do next.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {freeKitItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-black text-teal-800">
                      ✓
                    </span>
                    <span className="text-sm font-semibold leading-6 text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={scrollToCapture}
                  className="rounded-2xl bg-teal-700 px-7 py-4 text-base font-extrabold text-white shadow-lg shadow-teal-900/10 transition hover:-translate-y-0.5 hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-200"
                >
                  Send Me the Free Starter Kit
                </button>
                <span className="text-sm font-medium text-slate-500">
                  No cost. No obligation. Unsubscribe anytime.
                </span>
              </div>
            </div>

            <div id="get-the-kit" className="scroll-mt-28">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-900/10 sm:p-8">
                {!submitted ? (
                  <>
                    <div className="rounded-2xl bg-teal-50 p-5">
                      <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-teal-700">
                        Free Download
                      </div>
                      <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                        Human-First AI Governance Starter Kit
                      </h2>
                      <p className="mt-3 leading-7 text-slate-600">
                        A practical starting point for leaders who need clarity
                        before AI use becomes a compliance, privacy, operational,
                        or trust problem.
                      </p>
                    </div>

                    <form onSubmit={handleLeadSubmit} className="mt-6 space-y-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-sm font-bold text-slate-700"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          autoComplete="name"
                          required
                          placeholder="Your name"
                          className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3.5 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm font-bold text-slate-700"
                        >
                          Work email
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          autoComplete="email"
                          required
                          placeholder="you@organization.org"
                          className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3.5 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="organization"
                          className="mb-2 block text-sm font-bold text-slate-700"
                        >
                          Organization
                        </label>
                        <input
                          id="organization"
                          type="text"
                          name="organization"
                          autoComplete="organization"
                          placeholder="Organization name"
                          className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3.5 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="organization_type"
                          className="mb-2 block text-sm font-bold text-slate-700"
                        >
                          Organization type
                        </label>
                        <select
                          id="organization_type"
                          name="organization_type"
                          defaultValue=""
                          className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3.5 text-slate-950 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
                        >
                          <option value="" disabled>
                            Select one
                          </option>
                          <option>Healthcare clinic or practice</option>
                          <option>Church or ministry</option>
                          <option>Nonprofit or community organization</option>
                          <option>Small or mid-sized business</option>
                          <option>Professional services firm</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <label className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                        <input
                          type="checkbox"
                          name="consent"
                          value="yes"
                          required
                          className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-700 focus:ring-teal-600"
                        />
                        <span className="text-xs leading-5 text-slate-600">
                          Send me the Starter Kit and occasional practical emails
                          from Forward Arrow about responsible AI adoption,
                          governance resources, and related services. I can
                          unsubscribe at any time.
                        </span>
                      </label>

                      {formError ? (
                        <div
                          role="alert"
                          className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700"
                        >
                          {formError}
                        </div>
                      ) : null}

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full rounded-2xl bg-teal-700 px-6 py-4 text-base font-extrabold text-white shadow-lg shadow-teal-900/10 transition hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-200 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {submitting
                          ? "Sending..."
                          : "Get My Free Starter Kit"}
                      </button>

                      <p className="text-center text-xs leading-5 text-slate-500">
                        Forward Arrow respects your inbox and does not sell your
                        contact information.
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="py-4 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-3xl font-black text-teal-800">
                      ✓
                    </div>
                    <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950">
                      Your request is in.
                    </h2>
                    <p className="mt-4 leading-7 text-slate-600">
                      Thank you. Check your inbox for delivery and next-step
                      information from Forward Arrow.
                    </p>
                    <button
                      type="button"
                      onClick={() =>
                        document
                          .getElementById("starter-system-offer")
                          ?.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                          })
                      }
                      className="mt-6 rounded-2xl bg-teal-700 px-6 py-3.5 font-extrabold text-white transition hover:bg-teal-800"
                    >
                      See the Complete Starter System
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-950 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
            <div>
              <div className="text-3xl font-black text-teal-300">Discover</div>
              <p className="mt-3 leading-7 text-slate-300">
                Identify where AI is already being used, who is using it, and
                what information is being shared.
              </p>
            </div>
            <div>
              <div className="text-3xl font-black text-teal-300">Govern</div>
              <p className="mt-3 leading-7 text-slate-300">
                Establish clear expectations, human accountability, data
                boundaries, and vendor review requirements.
              </p>
            </div>
            <div>
              <div className="text-3xl font-black text-teal-300">Improve</div>
              <p className="mt-3 leading-7 text-slate-300">
                Move from unmanaged experimentation toward useful, responsible,
                and measurable implementation.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm font-extrabold uppercase tracking-[0.2em] text-teal-700">
              Why This Matters
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Most AI risk begins quietly.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              It often starts with a well-intentioned employee using a convenient
              tool. Without visibility, policy, training, or review, small
              decisions can become organization-wide exposure.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Shadow AI",
                text: "Employees adopt tools before leadership knows they are in use."
              },
              {
                title: "Sensitive Data",
                text: "Customer, patient, employee, donor, or internal information may enter unapproved systems."
              },
              {
                title: "Unreviewed Output",
                text: "Confident AI-generated content can be published or acted upon without qualified review."
              },
              {
                title: "Unclear Accountability",
                text: "When no owner exists, policy, vendor review, training, and incident response are inconsistent."
              }
            ].map((item, index) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100 text-lg font-black text-teal-800">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
            <div>
              <div className="text-sm font-extrabold uppercase tracking-[0.2em] text-teal-700">
                A Better Starting Point
              </div>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Start with a system—not another random AI tool.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Forward Arrow begins with the operating reality of your
                organization: people, workflows, data, decisions, tools, and
                responsibility.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                The goal is not to slow innovation. The goal is to help your
                organization move forward with enough visibility and structure
                to use AI confidently.
              </p>

              <button
                type="button"
                onClick={scrollToCapture}
                className="mt-8 rounded-2xl border border-teal-700 bg-white px-6 py-3.5 font-extrabold text-teal-800 transition hover:bg-teal-50"
              >
                Get the Free Starting Kit
              </button>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-900/5 sm:p-9">
              <div className="text-sm font-extrabold uppercase tracking-[0.2em] text-teal-700">
                Forward Arrow Principles
              </div>
              <div className="mt-6 space-y-4">
                {[
                  "Technology should serve people.",
                  "Human authority and accountability remain primary.",
                  "Sensitive information requires deliberate protection.",
                  "AI-generated work requires proportionate review.",
                  "Governance should enable useful innovation.",
                  "Competence, it turns out, still matters."
                ].map((principle) => (
                  <div
                    key={principle}
                    className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4"
                  >
                    <span className="mt-0.5 text-xl font-black text-teal-700">
                      →
                    </span>
                    <span className="font-semibold leading-7 text-slate-700">
                      {principle}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {showOffer ? (
          <section
            id="starter-system-offer"
            className="scroll-mt-24 bg-slate-950 text-white"
          >
            <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-4xl text-center">
                <div className="inline-flex rounded-full border border-teal-500/40 bg-teal-500/10 px-4 py-2 text-sm font-extrabold uppercase tracking-[0.18em] text-teal-300">
                  Optional Next Step
                </div>
                <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl">
                  Turn the free guidance into an operating baseline.
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                  The Human-First AI Governance Starter System™ packages the
                  templates, worksheets, and implementation guidance needed to
                  begin building a practical governance program.
                </p>
              </div>

              <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="grid gap-5 sm:grid-cols-2">
                  {paidSystemItems.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-white/10 bg-white/5 p-6"
                    >
                      <h3 className="text-xl font-extrabold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 leading-7 text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="lg:sticky lg:top-28 lg:self-start">
                  <div className="rounded-[2rem] border border-teal-400/30 bg-white p-7 text-slate-950 shadow-2xl shadow-black/30 sm:p-9">
                    <div className="text-sm font-extrabold uppercase tracking-[0.2em] text-teal-700">
                      Complete Starter System
                    </div>
                    <h3 className="mt-3 text-3xl font-black tracking-tight">
                      Human-First AI Governance Starter System™
                    </h3>
                    <p className="mt-4 leading-7 text-slate-600">
                      A downloadable implementation package for organizations
                      ready to move beyond awareness and establish a practical
                      foundation.
                    </p>

                    <div className="mt-6 space-y-3 border-y border-slate-200 py-6">
                      {offerValue.map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center justify-between gap-4 text-sm"
                        >
                          <span className="font-semibold text-slate-600">
                            {item.label}
                          </span>
                          <span className="font-bold text-slate-400 line-through">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6">
                      <div className="text-sm font-bold text-slate-500">
                        Individual asset value
                      </div>
                      <div className="mt-1 text-2xl font-black text-slate-400 line-through">
                        $475
                      </div>
                      <div className="mt-4 text-sm font-extrabold uppercase tracking-[0.18em] text-teal-700">
                        Launch Price
                      </div>
                      <div className="mt-1 text-6xl font-black tracking-tight">
                        $79
                      </div>
                      <div className="mt-2 text-sm text-slate-500">
                        One-time purchase. Digital delivery.
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={goToCheckout}
                      className="mt-7 w-full rounded-2xl bg-teal-700 px-6 py-4 text-lg font-extrabold text-white shadow-lg transition hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-200"
                    >
                      Get the Complete Starter System
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        document
                          .getElementById("about-forward-arrow")
                          ?.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                          })
                      }
                      className="mt-3 w-full rounded-2xl border border-slate-300 px-6 py-3.5 font-bold text-slate-600 transition hover:bg-slate-50"
                    >
                      Not Today—Keep Reading
                    </button>

                    <p className="mt-5 text-center text-xs leading-5 text-slate-500">
                      This is an educational and operational resource package,
                      not legal advice or a guarantee of compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section
            id="starter-system-offer"
            className="border-y border-slate-200 bg-teal-50"
          >
            <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-6 lg:px-8">
              <div className="text-sm font-extrabold uppercase tracking-[0.2em] text-teal-700">
                Complete System Available
              </div>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                First, get the free kit.
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                After you request the Starter Kit, you will have the option to
                review the complete Human-First AI Governance Starter System™.
              </p>
              <button
                type="button"
                onClick={scrollToCapture}
                className="mt-8 rounded-2xl bg-teal-700 px-7 py-4 font-extrabold text-white transition hover:bg-teal-800"
              >
                Get the Free Kit First
              </button>
            </div>
          </section>
        )}

        <section
          id="about-forward-arrow"
          className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-6 lg:px-8"
        >
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-teal-800 to-slate-950 p-8 text-white shadow-xl sm:p-10">
              <div className="text-sm font-extrabold uppercase tracking-[0.2em] text-teal-300">
                Forward Arrow Services
              </div>
              <blockquote className="mt-6 text-3xl font-black leading-tight tracking-tight sm:text-4xl">
                “You cannot govern what you cannot see.”
              </blockquote>
              <p className="mt-6 leading-8 text-slate-300">
                Forward Arrow helps organizations create visibility, define
                responsibility, protect human judgment, and establish practical
                controls around AI use.
              </p>
            </div>

            <div>
              <div className="text-sm font-extrabold uppercase tracking-[0.2em] text-teal-700">
                Built from Operational Experience
              </div>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Governance grounded in how organizations actually work.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Daniel R. Reed Jr. founded Forward Arrow Services after more than
                two decades working around enterprise technology, production
                operations, knowledge systems, reliability, observability, and
                organizational change.
              </p>

              <div className="mt-8 space-y-4">
                {credibility.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-100 font-black text-teal-800">
                      ✓
                    </span>
                    <span className="font-semibold leading-7 text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-5xl px-5 py-20 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="text-sm font-extrabold uppercase tracking-[0.2em] text-teal-700">
                Frequently Asked Questions
              </div>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Clear answers before you begin.
              </h2>
            </div>

            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm open:shadow-md"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-extrabold text-slate-950">
                    {faq.question}
                    <span className="text-2xl font-light text-teal-700 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-4xl leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] bg-slate-950 px-6 py-12 text-center text-white shadow-2xl sm:px-10 sm:py-16">
              <div className="text-sm font-extrabold uppercase tracking-[0.2em] text-teal-300">
                Start with Visibility
              </div>
              <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-black tracking-tight sm:text-5xl">
                Take the first responsible step before AI use expands any
                further.
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                Get the free Human-First AI Governance Starter Kit and begin
                mapping the questions your organization needs to answer.
              </p>
              <button
                type="button"
                onClick={scrollToCapture}
                className="mt-8 rounded-2xl bg-teal-500 px-7 py-4 font-extrabold text-slate-950 transition hover:bg-teal-400"
              >
                Send Me the Free Starter Kit
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <div className="font-extrabold text-slate-800">
              Forward Arrow Services, LLC
            </div>
            <div className="mt-1">
              Human-First AI Governance • Grand Rapids, Michigan
            </div>
          </div>

          <div className="max-w-2xl text-xs leading-5 md:text-right">
            Educational and operational guidance only. Nothing on this site
            constitutes legal, medical, regulatory, or compliance advice.
          </div>
        </div>
      </footer>
    </div>
  );
}