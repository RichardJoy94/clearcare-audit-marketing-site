export const siteContent = {
  meta: {
    title: "ClearCare | Hospital MRF Readiness & Proof",
    description:
      "ClearCare is preparing guided design-partner engagements for hospital teams seeking an independent MRF readiness and proof workflow alongside their existing vendor or internal process."
  },
  nav: {
    brand: { name: "ClearCare", accent: "Readiness & Proof" },
    links: [
      { label: "The Workbench", href: "#workbench" },
      { label: "Why Independent", href: "#problem" },
      { label: "The Engagement", href: "#how-it-works" },
      { label: "What You Receive", href: "#evidence" }
    ],
    cta: { label: "Discuss an Engagement", href: "#cta" }
  },
  hero: {
    eyebrow: "Hospital Price Transparency Compliance Operations",
    title: "Know whether your MRF is ready to publish.",
    emphasized: "Prove how you got there.",
    description:
      "ClearCare is a hospital price-transparency compliance-operations workbench preparing for a limited design-partner program. It works beside your MRF vendor or internal pipeline to review the candidate file, focus the team on material blockers and owners, and preserve the record behind publication.",
    actions: [
      { label: "Discuss a Design-Partner Engagement", href: "#cta", kind: "primary" },
      { label: "See the Engagement", href: "#how-it-works", kind: "secondary" }
    ],
    note:
      "Independent of your generation vendor. Official and supplemental findings stay distinct. No PHI in the initial scope.",
    summary: {
      label: "Illustrative workbench view",
      qualifier: "Synthetic representative data",
      cycle: "Example pilot cycle",
      fileName: "example_health_system_standardcharges.csv",
      fileMeta: "Synthetic candidate file / version 3 / source preserved by design",
      status: "Illustrative",
      metrics: [
        { label: "CMS validator input", value: "Reviewed" },
        { label: "ClearCare supplemental", value: "Separated" }
      ],
      blockers: [
        {
          title: "File-header date requires review",
          detail: "CMS basis / owner: Compliance",
          tone: "critical"
        },
        {
          title: "Payer-group mapping needs source evidence",
          detail: "Supplemental / owner: Revenue Cycle",
          tone: "critical"
        },
        {
          title: "Public artifact comparison pending",
          detail: "Pilot workflow / owner: IT and Web",
          tone: "review"
        }
      ],
      footerLeft: "Hospital designation: pending",
      footerRight: "Public observation: planned"
    }
  },
  workbench: {
    tag: "Inside the Workbench",
    title: "One place to see the file, the work, and the record.",
    intro:
      "Illustrative views use synthetic representative data. Each design-partner engagement runs on the hospital's real candidate file only within the documented support envelope.",
    panels: [
      {
        label: "Blocker and Owner Queue",
        kind: "queue",
        items: [
          {
            title: "File-header date requires review",
            detail: "CMS basis / candidate file",
            status: "Compliance"
          },
          {
            title: "Plan-level mapping needs evidence",
            detail: "Source evidence requested",
            status: "Revenue Cycle"
          },
          {
            title: "Vendor response received",
            detail: "Corrected candidate awaiting review",
            status: "Vendor"
          }
        ],
        footer: "Material findings stay connected to a basis, an owner, and a next action."
      },
      {
        label: "Artifact Lineage and Decision",
        kind: "lineage",
        items: [
          { title: "Source candidate preserved", detail: "Synthetic file / unchanged", status: "01" },
          {
            title: "Supported child artifact",
            detail: "Only when included in the confirmed support envelope",
            status: "02"
          },
          {
            title: "Designated by the hospital",
            detail: "Explicit hospital decision",
            status: "03"
          }
        ],
        footer: "The publication version changes only through an explicit, recorded hospital decision."
      },
      {
        label: "Publication Observation",
        kind: "verification",
        reviewedLabel: "Reviewed artifact",
        reviewedValue: "example-sha-256 / candidate-v3",
        publicLabel: "Observed public file",
        publicValue: "Available when included in pilot scope",
        state: "Illustrative comparison state",
        footer: "Compare the reviewed artifact with what is publicly posted at a specific time, when supported."
      }
    ]
  },
  problem: {
    tag: "Why Independent Control",
    title: "Your hospital is accountable, even when someone else produces the file.",
    intro:
      "A validator can flag technical findings. It does not assign owners, collect evidence, document hospital decisions, or confirm that the public file is the version your team reviewed. ClearCare is being prepared as the independent operating layer around your existing generation process.",
    questionsIntro: "An accountable team should be able to answer three questions at any point in the cycle:",
    questions: [
      {
        id: "01",
        question: "Which file is under review, and how does it differ from the prior or public version?",
        answer: "File identity and lineage stay clear from intake through hospital designation and public observation."
      },
      {
        id: "02",
        question: "What blocks publication, who owns the next action, and what evidence is missing?",
        answer: "Findings connect to accountable owners, source-data needs, and a concrete next step."
      },
      {
        id: "03",
        question: "Can you show what was reviewed, what changed, who decided, and what was published?",
        answer:
          "The record supports executive, compliance, legal, vendor, and technical review without implying certification."
      }
    ],
    comparison: {
      beforeLabel: "Today: validator + spreadsheets + email",
      afterLabel: "With ClearCare beside your process",
      before: [
        {
          title: "Findings without owners",
          body: "Technical output lands in spreadsheets, but ownership and the next action remain unclear."
        },
        {
          title: "Coordination by email",
          body: "Compliance, revenue cycle, IT, counsel, and vendors work from different versions of the truth."
        },
        {
          title: "The record is rebuilt after the fact",
          body: "Candidate files, corrections, decisions, and the public file are hard to connect once the cycle closes."
        }
      ],
      after: [
        {
          title: "Blockers routed to owners",
          body: "Official validator output and ClearCare supplemental review stay distinct and connect to a next step."
        },
        {
          title: "One shared operating record",
          body: "Hospital teams and approved contributors coordinate around scoped work and supporting evidence."
        },
        {
          title: "A governed record through publication",
          body: "Source preservation, hospital decisions, and public observation remain connected within supported scope."
        }
      ]
    }
  },
  howItWorks: {
    tag: "The Engagement",
    title: "A 30-60 day engagement built around your real publication cycle.",
    intro:
      "Not an open self-service scan. A fixed-scope, no-PHI design-partner engagement with named participants, explicit gates, and a decision at the end. Qualification happens before any file is submitted.",
    scopeTitle: "Fixed scope, confirmed up front",
    scopeBody:
      "Scope is confirmed against the documented capability, file, and data-handling envelope before intake begins. Secure file intake follows qualification, never the other way around.",
    phases: [
      {
        days: "Days 0-5",
        title: "Qualify and scope",
        body:
          "Confirm the trigger, participants, file envelope, no-PHI boundary, and success criteria before any file is submitted.",
        outputs: ["Supported file scope", "Named participants", "Success criteria and decision date"]
      },
      {
        days: "Days 5-15",
        title: "Baseline and review",
        body:
          "Controlled intake of the candidate file, followed by a readiness review with official and supplemental findings kept distinct.",
        outputs: ["Readiness summary", "Coverage and limitations", "Prioritized blocker view"]
      },
      {
        days: "Days 10-35",
        title: "Resolve and evidence",
        body:
          "Route blockers to owners and work through source-data questions, vendor loops, and supported non-economic changes.",
        outputs: ["Owner-routed work queue", "Evidence and vendor responses", "Supported change record"]
      },
      {
        days: "Days 30-60",
        title: "Designate, verify and decide",
        body:
          "The hospital selects its intended artifact. When included in scope, ClearCare records public observation before the engagement is scored.",
        outputs: ["Hospital decision record", "Scoped public observation", "Pilot scorecard and next-cycle decision"]
      }
    ],
    outcome:
      "The engagement ends with measured evidence about finding accuracy, adoption, operating value, support burden, and whether ClearCare belongs in the hospital's next MRF cycle."
  },
  evidence: {
    tag: "What You Receive",
    title: "A working record for the people responsible for the file.",
    intro:
      "Four deliverables tailored to the confirmed scope, built to support hospital decisions, counsel review, and vendor coordination.",
    deliverables: [
      {
        label: "01",
        title: "Executive readiness brief",
        body: "Top blockers, owners, timing, coverage, and the primary decision required in a concise, forwardable view.",
        audience: "CFO / CCO / sponsors"
      },
      {
        label: "02",
        title: "Issue and evidence record",
        body: "Material root causes with official or supplemental basis, ownership, evidence, and current status.",
        audience: "Compliance / revenue cycle"
      },
      {
        label: "03",
        title: "Change and decision history",
        body: "Supported previews, hospital decisions, resulting artifacts, and re-review outcomes within confirmed scope.",
        audience: "Counsel / compliance"
      },
      {
        label: "04",
        title: "Publication and proof package",
        body: "The hospital-designated version, any supported public observation, and the record's explicit limitations.",
        audience: "IT / vendors / executives"
      }
    ]
  },
  audience: {
    tag: "Who Participates",
    title: "Built for a cross-functional hospital decision.",
    intro:
      "The strongest engagements include the people who own source truth, publication, counsel boundaries, and the budget decision. Approved vendors and advisors participate only through scoped access.",
    cards: [
      {
        role: "Program Owner",
        title: "Compliance",
        concern: "What is the readiness basis, and what record supports our decision?",
        value: "Official and supplemental findings stay distinct, with blockers, limitations, and proof visible."
      },
      {
        role: "Source and Operations",
        title: "Revenue Cycle",
        concern: "Which findings need source truth, vendor action, or a hospital decision?",
        value: "Payer, plan, and code context with coordinated evidence and no unsafe economic inference."
      },
      {
        role: "File and Publication",
        title: "IT and Web",
        concern: "Which artifact was reviewed, and what was actually published?",
        value: "Candidate and public file identity, bounded no-PHI handling, and scoped publication observation."
      },
      {
        role: "Decision and Oversight",
        title: "Executive and Legal",
        concern: "What decision is required, and what are the limitations?",
        value: "A concise blocker-and-owner view with explicit claims boundaries and measured pilot criteria."
      }
    ]
  },
  boundaries: {
    tag: "Boundaries",
    title: "Trust starts with what we won't do.",
    intro: "These constraints are part of the offer, not fine print added after intake.",
    items: [
      {
        number: "01",
        title: "CMS remains the authority",
        body: "ClearCare may organize and compare official validator output; it is not CMS approved or certified."
      },
      {
        number: "02",
        title: "No legal certification",
        body: "Readiness states and proof packages support review; they are not legal opinions or compliance guarantees."
      },
      {
        number: "03",
        title: "No PHI in the initial scope",
        body: "The first engagement is limited to MRFs and specifically agreed non-PHI evidence."
      },
      {
        number: "04",
        title: "Economic truth stays with the hospital",
        body: "ClearCare does not autonomously infer rates or create economic values."
      },
      {
        number: "05",
        title: "Only supported safe changes",
        body: "Any change workflow is limited to documented non-economic families within the confirmed support envelope."
      },
      {
        number: "06",
        title: "The hospital designates the artifact",
        body: "ClearCare records the hospital's decision; it does not approve a file for publication."
      }
    ]
  },
  cta: {
    tag: "Design-Partner Program",
    title: "Plan your next MRF cycle with us.",
    description:
      "A limited number of guided engagements for hospital teams with a real trigger: a publication cycle, remediation need, vendor transition, public-file concern, or audit-readiness requirement.",
    options: [
      {
        tag: "Good Fit",
        title: "A real MRF event and a cross-functional team",
        body:
          "A hospital or health system with a current or upcoming MRF cycle, a named compliance or revenue-cycle owner, access to technical and source-data stakeholders, and no immediate PHI requirement."
      },
      {
        tag: "After You Submit",
        title: "A short qualification and scope conversation",
        body:
          "We discuss your trigger, current process, file and facility profile, participants, security needs, and success criteria. Secure intake is arranged only after scope and data handling are agreed."
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
        "Please do not submit an MRF, PHI, or confidential evidence through this form. Secure intake is arranged only after scope and data-handling review."
    }
  },
  footer:
    "ClearCare is not CMS, does not certify compliance, does not provide legal advice, does not create or alter economic values, and does not replace the hospital's MRF generator or publication decision."
} as const;
