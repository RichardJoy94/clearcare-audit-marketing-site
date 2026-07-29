export const siteContent = {
  meta: {
    title: "ClearCare | Hospital MRF Readiness & Proof",
    description:
      "ClearCare is preparing guided design-partner engagements for hospital teams seeking an independent MRF readiness and proof workflow alongside their existing vendor or internal process."
  },
  nav: {
    brand: { name: "ClearCare", accent: "Readiness & Proof" },
    links: [
      { label: "Why Independent", href: "#problem" },
      { label: "The Engagement", href: "#how-it-works" },
      { label: "What You Receive", href: "#evidence" },
      { label: "Who It's For", href: "#audience" }
    ],
    cta: { label: "Discuss a Pilot", href: "#cta" }
  },
  hero: {
    eyebrow: "Hospital Price Transparency Compliance Operations",
    title: ["Know whether your MRF", "is ready to publish.", "Prove how you got there."],
    description:
      "ClearCare is preparing a limited number of guided design-partner engagements for hospital teams that want an independent readiness and proof workflow beside their existing MRF vendor or internal process.",
    note:
      "ClearCare does not certify compliance or replace CMS, legal counsel, or your MRF generation partner.",
    actions: [
      { label: "Discuss a Design-Partner Engagement", href: "#cta", kind: "primary" },
      { label: "See the Engagement", href: "#how-it-works", kind: "secondary" }
    ],
    signals: [
      {
        label: "Independent",
        detail: "Designed to work beside your current MRF vendor or internal pipeline."
      },
      {
        label: "Guided",
        detail: "A scoped 30-60 day engagement with shared success criteria and operating reviews."
      },
      {
        label: "No PHI",
        detail: "Initial design-partner scope uses MRFs and agreed non-PHI evidence."
      }
    ],
    credibility: [
      "Designed around the CMS validator baseline",
      "Official and supplemental findings stay distinct",
      "Source preservation by design",
      "Hospital decisions remain human"
    ]
  },
  problem: {
    tag: "Why Independent",
    title: "Your hospital remains accountable, even when someone else produces the file.",
    intro:
      "CMS provides the regulatory baseline and many hospitals rely on a vendor or internal team to generate the MRF. ClearCare is being built as the independent operating layer around that process: a way to understand readiness, coordinate unresolved work, and preserve the record behind publication.",
    questionsTitle: "Three questions an accountable hospital team should be able to answer.",
    questionsIntro:
      "The purpose of an independent readiness workflow is not to issue a score. It is to make the file, the remaining work, and the hospital's decision record understandable across teams.",
    questions: [
      {
        id: "01",
        question: "Which candidate file is under review, and how does it differ from the prior or public version?",
        answer:
          "File identity and lineage should stay clear from intake through designation and public verification."
      },
      {
        id: "02",
        question: "What material blockers remain, who owns the next action, and what evidence is missing?",
        answer:
          "A useful readiness process connects findings to accountable owners, source-data needs, and a concrete next step."
      },
      {
        id: "03",
        question: "Can we show what was reviewed, what changed, who decided, and what was ultimately published?",
        answer:
          "The operating record should support executive, compliance, legal, vendor, and technical review without implying certification."
      }
    ],
    comparison: {
      beforeLabel: "Without an independent control layer",
      afterLabel: "Guided design-partner focus",
      before: [
        {
          title: "Validation is only one step",
          body: "A validator can identify technical findings without assigning owners, collecting evidence, or documenting the publication decision."
        },
        {
          title: "Work is distributed across teams",
          body: "Compliance, revenue cycle, IT, counsel, and vendors often coordinate through spreadsheets, tickets, and email."
        },
        {
          title: "The publication record is reconstructed later",
          body: "Candidate files, corrections, approvals, and the observed public file can become difficult to connect after the cycle closes."
        }
      ],
      after: [
        {
          title: "Independent readiness context",
          body: "Official CMS validator output and ClearCare supplemental review are presented as distinct inputs, with coverage and limitations visible."
        },
        {
          title: "Blockers routed to the right owner",
          body: "The engagement focuses the team on material root causes, source evidence, supported safe actions, and unresolved decisions."
        },
        {
          title: "A governed record through publication",
          body: "The hospital retains the decision authority while ClearCare preserves the relationship between reviewed, designated, and observed public artifacts."
        }
      ]
    }
  },
  howItWorks: {
    tag: "The Engagement",
    title: "A guided engagement built around your real publication cycle.",
    intro:
      "The initial ClearCare offer is not an open self-service scan. It is a fixed-scope, no-PHI design-partner engagement intended to test accuracy, adoption, operating value, and fit with your existing MRF process.",
    steps: [
      {
        id: "01",
        label: "Qualify & Scope",
        title: "Confirm the trigger, file envelope, team, and decision criteria.",
        body:
          "We align on the publication, remediation, vendor-transition, or readiness event driving the work before any file is submitted.",
        outputs: ["Supported file scope", "Named hospital participants", "Success criteria and decision date"]
      },
      {
        id: "02",
        label: "Baseline & Intake",
        title: "Document the current process and establish the candidate file.",
        body:
          "The team records its current effort, tools, vendor loops, and publication context, then completes controlled no-PHI intake.",
        outputs: ["Current-process baseline", "Candidate and prior/public file identity", "Data-handling confirmation"]
      },
      {
        id: "03",
        label: "Readiness Review",
        title: "Review material blockers with CMS and supplemental findings kept distinct.",
        body:
          "ClearCare organizes the review around what was checked, what was not, the current support envelope, and the next action for each material root cause.",
        outputs: ["Readiness summary", "Coverage and limitations", "Prioritized blocker view"]
      },
      {
        id: "04",
        label: "Resolve & Evidence",
        title: "Route unresolved work and preserve the supporting record.",
        body:
          "Hospital users, vendors, and advisors resolve source-data questions, review supported non-economic changes, and document decisions.",
        outputs: ["Owner-routed work queue", "Evidence requests and responses", "Change preview and approval history"]
      },
      {
        id: "05",
        label: "Designate & Verify",
        title: "The hospital selects its intended publication artifact.",
        body:
          "ClearCare records the hospital's designation and compares the observed public artifact with that reviewed version at a specific time.",
        outputs: ["Designated artifact record", "Observed public-file result", "Publication and proof package"]
      },
      {
        id: "06",
        label: "Measure & Decide",
        title: "Evaluate accuracy, adoption, value, and next-cycle fit.",
        body:
          "The engagement closes with an agreed scorecard, measured support effort, unresolved risks, and a clear decision about recurring use.",
        outputs: ["Pilot scorecard", "Operating-value review", "Next-cycle and monitoring decision"]
      }
    ],
    timeline: {
      tag: "Typical Design-Partner Sequence",
      title: "A 30-60 day engagement with explicit gates.",
      intro:
        "The exact sequence depends on file complexity, participant availability, source-evidence needs, and the confirmed support envelope.",
      items: [
        ["Days 0-5", "Scope and onboard", "Confirm the no-PHI boundary, participants, baseline, files, and success criteria."],
        ["Days 5-15", "Review readiness", "Complete intake, review CMS comparison and supplemental findings, and validate material issues."],
        ["Days 10-35", "Resolve and document", "Route ownership, work through evidence and vendor loops, and re-review supported corrections."],
        ["Days 30-60", "Verify and decide", "Designate the hospital-selected artifact, observe publication, score the engagement, and decide next steps."]
      ],
      outcomeLabel: "Decision point",
      outcome:
        "The engagement ends with measured evidence about product accuracy, hospital adoption, operating value, support burden, and whether ClearCare belongs in the next MRF cycle."
    }
  },
  evidence: {
    tag: "What You Receive",
    title: "A working record for the people responsible for the file.",
    intro:
      "Deliverables are tailored to the confirmed pilot scope. They are designed to support hospital decisions and collaboration, not to replace CMS authority, counsel review, or source-system truth.",
    properties: [
      {
        tag: "Readiness",
        title: "Material blockers, coverage, and next actions",
        body:
          "A plain-language view of the candidate file, the most important unresolved issues, responsible owners, and what the review did or did not cover."
      },
      {
        tag: "Coordination",
        title: "Issues, evidence requests, and vendor handoffs",
        body:
          "A shared operating record for hospital teams and approved external contributors, focused on resolving root causes rather than managing raw finding volume."
      },
      {
        tag: "Governance",
        title: "Change, approval, and artifact lineage",
        body:
          "A traceable relationship between the source file, supported correction activity, reviewers, hospital decisions, and resulting child artifacts."
      },
      {
        tag: "Publication",
        title: "Designation, public observation, and proof",
        body:
          "A reproducible package showing the hospital-designated version, the public artifact observed at a specific time, and the limitations of the record."
      }
    ],
    artifacts: [
      {
        label: "01",
        title: "Executive readiness brief",
        body: "Top blockers, owners, timing, coverage, and the primary decision required."
      },
      {
        label: "02",
        title: "Issue and evidence record",
        body: "Material root causes, CMS or supplemental basis, ownership, evidence, and status."
      },
      {
        label: "03",
        title: "Change and approval history",
        body: "Supported previews, hospital approvals, resulting artifacts, and re-review outcomes."
      },
      {
        label: "04",
        title: "Publication and proof package",
        body: "Designation, observed public result, reproducible references, and explicit limitations."
      }
    ],
    boundariesTitle: "Trust starts with clear boundaries.",
    boundariesIntro:
      "These constraints are part of the design-partner offer, not fine print added after intake.",
    boundaries: [
      {
        title: "CMS remains the authority",
        body: "ClearCare may organize and compare official validator output, but it is not CMS approved or certified."
      },
      {
        title: "No legal certification",
        body: "Readiness states and proof packages support review; they are not legal opinions or guarantees of compliance."
      },
      {
        title: "No PHI in the initial engagement",
        body: "The first commercial scope is limited to MRFs and specifically agreed non-PHI evidence."
      },
      {
        title: "Source and economic truth stay with the hospital",
        body: "ClearCare does not autonomously infer rates or create economic values."
      },
      {
        title: "Only supported safe changes",
        body: "Any change workflow is limited to documented non-economic families with preview, approval, lineage, and re-review."
      },
      {
        title: "The hospital designates the artifact",
        body: "ClearCare records the hospital's decision and observed public result; it does not approve a file for publication."
      }
    ]
  },
  audience: {
    tag: "The Working Team",
    title: "Built for a cross-functional hospital decision.",
    intro:
      "A design-partner engagement needs more than a compliance champion. The strongest pilots include the people who understand source truth, publication, counsel boundaries, and the budget decision.",
    cards: [
      {
        role: "Program Owner",
        title: "Compliance",
        concern: "What is the readiness basis, what remains unresolved, and what record supports our decision?",
        points: ["CMS and supplemental findings kept distinct", "Material blockers and limitations visible", "Proof and counsel review supported"]
      },
      {
        role: "Source & Operations",
        title: "Revenue Cycle",
        concern: "Which findings require source truth, vendor action, or a hospital decision?",
        points: ["Payer, plan, code, and methodology context", "Evidence and vendor loops coordinated", "Unsafe economic inference refused"]
      },
      {
        role: "File & Publication",
        title: "IT and Web",
        concern: "Which artifact was reviewed, what was published, and what does the system touch?",
        points: ["Candidate and public file identity", "Bounded no-PHI data handling", "Publication observation and technical exports"]
      },
      {
        role: "Decision & Oversight",
        title: "Executive and Legal",
        concern: "What decision is required, what are the limitations, and is the operating value material?",
        points: ["Concise blocker and owner view", "Explicit claims and evidence boundaries", "Measured pilot and conversion criteria"]
      }
    ]
  },
  cta: {
    tag: "Design-Partner Program",
    title: "Plan your next MRF cycle with us.",
    description:
      "We are preparing a limited number of guided engagements for hospital teams with a real publication, remediation, vendor-transition, or audit-readiness trigger. Start with a qualification conversation; secure file intake happens only after scope and data handling are agreed.",
    options: [
      {
        tag: "Best Fit",
        title: "A real MRF event and a cross-functional team",
        body:
          "The strongest fit is a hospital or health system with a current or upcoming MRF cycle, a named compliance or revenue-cycle owner, access to technical and source-data stakeholders, and no immediate PHI requirement."
      },
      {
        tag: "What Happens Next",
        title: "A short qualification and scope review",
        body:
          "We will discuss your trigger, current process, file and facility profile, participants, security needs, success criteria, and whether the documented support envelope fits."
      }
    ],
    form: {
      title: "Request a Conversation",
      roles: [
        "Compliance",
        "Revenue Cycle / Revenue Integrity",
        "Finance / Executive Leadership",
        "IT / Data / Web",
        "Legal Counsel",
        "MRF Vendor / Advisor",
        "Other"
      ],
      reasons: [
        "Upcoming MRF publication cycle",
        "CMS warning or corrective action",
        "Proactive readiness review",
        "MRF vendor transition or review",
        "Multi-facility standardization",
        "Public-file issue or drift",
        "Other"
      ],
      timelines: ["Within 30 days", "31-90 days", "3-6 months", "More than 6 months", "Exploring"],
      facilityCounts: ["1 facility", "2-5 facilities", "6-20 facilities", "21+ facilities"],
      primaryAction: "Request a Design-Partner Conversation",
      privacyNote:
        "Please do not submit an MRF, PHI, or confidential evidence through this form. We will arrange secure intake only after scope and data-handling review."
    }
  },
  footer:
    "ClearCare is preparing guided hospital MRF readiness and proof engagements. ClearCare is not CMS, does not certify compliance, does not provide legal advice, and does not replace the hospital's MRF generator or publication decision."
} as const;
