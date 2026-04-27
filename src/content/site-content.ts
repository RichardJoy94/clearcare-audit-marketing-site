export const siteContent = {
  meta: {
    title: "ClearCare Audit | MRF Compliance Risk & Audit Evidence",
    description:
      "ClearCare Audit helps hospital teams evaluate machine-readable pricing files against 45 CFR § 180 and produce audit-ready evidence."
  },
  nav: {
    brand: { name: "ClearCare", accent: "Audit" },
    links: [
      { label: "The Problem", href: "#problem" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Audit Evidence", href: "#evidence" },
      { label: "Who It's For", href: "#audience" }
    ],
    cta: { label: "Request Demo", href: "#cta" }
  },
  hero: {
    eyebrow: "Hospital MRF Compliance · 45 CFR § 180",
    title: ["Know if your pricing", "files will fail audit", "before CMS does."],
    emphasized: "fail audit",
    description:
      "Your MRF has violations you haven't found yet. ClearCare Audit tells you exactly where you're exposed and gives you the evidence to prove you fixed it.",
    note:
      "CMS enforcement activity has increased every year since 2021. Corrective action penalties accrue from the date of violation, not the date of notice.",
    actions: [
      { label: "Get Your Risk Breakdown", href: "#cta", kind: "primary" },
      { label: "See How It Works", href: "#how-it-works", kind: "secondary" }
    ],
    stats: [
      {
        value: "$300",
        detail: "Per-day civil monetary penalty, per hospital with no cap",
        source: "45 CFR § 180.110"
      },
      {
        value: ">50%",
        detail: "Of audited hospitals received a CMS corrective action request in 2023",
        source: "CMS Price Transparency Audit Program"
      },
      {
        value: "0",
        detail: "Standard MRF vendors that produce field-level compliance evidence",
        source: "ClearCare product assessment, 2025"
      }
    ],
    credibility: [
      "Built around CMS audit workflows",
      "Aligned to 45 CFR § 180",
      "Designed with hospital compliance teams",
      "Field-level findings, not a score"
    ]
  },
  problem: {
    tag: "The Problem",
    title: "Your pricing file is a compliance liability you can't currently see.",
    intro:
      "CMS audits are specific. They ask for exact fields, exact violations, and documented proof of remediation. Most hospitals have none of that documentation, not because they aren't trying, but because no tool existed to produce it.",
    questionsTitle: "Three things most hospitals can't answer when CMS asks.",
    questionsIntro:
      "Most hospitals cannot answer any of these. ClearCare Audit exists to close that gap before a corrective action request makes it urgent.",
    questions: [
      {
        id: "01",
        question: "Can you show which specific fields in your MRF violate 45 CFR § 180 right now, today?",
        answer:
          "Not a general assessment. Not a score. The exact fields, the exact rule citations, and the exact values that fail them."
      },
      {
        id: "02",
        question: "If you corrected your file last quarter, can you prove what changed and who authorized it?",
        answer:
          "CMS corrective action requests ask for documentation of remediation, including who reviewed and approved each change before it was applied."
      },
      {
        id: "03",
        question: "Can you reproduce your compliance determination independently without contacting a consultant?",
        answer:
          "A defensible compliance posture is one any party can verify against the file and the rules. A consultant report cannot be independently verified."
      }
    ],
    comparison: {
      beforeLabel: "How hospitals manage MRF compliance today",
      afterLabel: "With ClearCare Audit",
      before: [
        {
          title: "No systematic rule evaluation",
          body: "Compliance is checked manually, if at all, against CMS guidance most teams do not have time to parse in full."
        },
        {
          title: "Fixes happen directly in the file",
          body: "Someone edits the JSON or CSV, uploads a new version, and the original error disappears."
        },
        {
          title: "Consultants produce reports, not evidence",
          body: "A PDF summary of findings does not satisfy a CMS corrective action request."
        },
        {
          title: "No defensible audit trail",
          body: "When CMS asks who authorized a correction, most organizations cannot answer."
        }
      ],
      after: [
        {
          title: "Every field evaluated against 45 CFR § 180",
          body: "A full scan maps each field in your MRF to the exact CMS requirement it must satisfy and flags it by severity if it does not."
        },
        {
          title: "Corrections are previewed and authorized",
          body: "Every proposed change is shown to a named reviewer before it is applied, and the original file state is never overwritten."
        },
        {
          title: "Structured evidence, not a narrative",
          body: "The output of a session is a linked record set: finding to correction to approval, all verifiable against the file itself."
        },
        {
          title: "Compliance posture is documented",
          body: "After a session, your organization has a formal determination backed by the scan record that produced it."
        }
      ]
    }
  },
  howItWorks: {
    tag: "How It Works",
    title: "Five steps from uncertainty to evidence.",
    intro:
      "ClearCare Audit is a structured process, not a dashboard you configure. Each step produces a specific, versioned record.",
    steps: [
      {
        id: "01",
        label: "Upload & Intake",
        title: "Your file enters the system. A session record is created before anything else.",
        body: "Submit your MRF via direct upload or pre-signed URL. The system validates schema eligibility and creates a session ID that links every subsequent record.",
        mock: {
          title: "intake · session-7741 · 2026-04-14T09:17Z",
          rows: [
            ["file", "riverside-medical-mrf-2026-q1.json"],
            ["schema", "cms-mrf-schema-v2.0.0"],
            ["size", "4.2 MB · 18,440 charge rows"],
            ["status", "eligible for scan"],
            ["session", "session-7741 · initiated by M. Torres"]
          ]
        }
      },
      {
        id: "02",
        label: "Risk Scan",
        title: "Every field evaluated against the current CMS rule registry.",
        body: "Each field is evaluated against the enumerated requirements of 45 CFR § 180, with rule citations pinned to the registry version used at scan time.",
        mock: {
          title: "scan-2849 · cms-mrf-rules-v2024-01 · complete",
          rows: [
            ["fields evaluated", "18,440"],
            ["findings", "14 total"],
            ["severity", "3 high · 7 medium · 4 low"],
            ["rule version", "cms-mrf-rules-v2024-01"]
          ]
        }
      },
      {
        id: "03",
        label: "Issue Breakdown",
        title: "Each violation mapped to the specific field, rule, and current value.",
        body: "Your compliance team reviews field name, affected billing code, the CMS rule it fails, current value, required value, and severity.",
        findings: [
          "payer_specific_negotiated_rate · code: 99213 · current: null · required: non-null numeric",
          "billing_code_type · code: 99213 · current: cpt · required: enumerated CPT",
          "standard_charge_gross · code: 27447 · current: N/A · required: numeric"
        ]
      },
      {
        id: "04",
        label: "Controlled Fixes",
        title: "Corrections reviewed and authorized before any change is applied.",
        body: "For mechanically determinable violations, the system generates a side-by-side correction preview. A named reviewer authorizes each batch before anything is applied.",
        diff: {
          before: '"cpt"',
          after: '"CPT"',
          approver: "J. Harmon — VP Compliance",
          timestamp: "2026-04-14 11:42:09 UTC · fix-0041 approved"
        }
      },
      {
        id: "05",
        label: "Audit Proof Bundle",
        title: "One structured export. Ready to give to CMS.",
        body: "The session produces a structured evidence bundle containing the original scan, correction diffs, post-correction scan, governance log, rule snapshot, and posture record.",
        bundle: [
          "original_scan · scan-2849",
          "correction_diff · fix-0041",
          "post_correction_scan · scan-2850",
          "governance_log · session-7741",
          "compliance_posture · bundle-0091"
        ]
      }
    ],
    timeline: {
      title: "What you have in your first 7 days.",
      intro:
        "No integration project. No professional services engagement. Submit your file and you have a documented compliance posture within a week.",
      items: [
        ["Day 1", "Upload your MRF", "Submit your current machine-readable file. Nothing in your existing pipeline is touched."],
        [
          "Day 1–2",
          "Receive your finding table",
          "Violations are listed by severity with exact rule citations so your team knows precisely where exposure exists."
        ],
        [
          "Day 3–5",
          "Review and authorize corrections",
          "A named reviewer approves each proposed correction before it is applied, and that approval is recorded."
        ],
        [
          "Day 6–7",
          "Export your evidence bundle",
          "You leave with an audit-ready package containing findings, corrections, approvals, and compliance posture."
        ]
      ],
      outcome:
        "After 7 days, your organization has a documented compliance posture, a field-level finding record, authorized corrections, and an audit-ready evidence bundle."
    }
  },
  evidence: {
    tag: "Audit Evidence",
    title: "The record holds up because nothing in it can be changed after the fact.",
    intro:
      "Most compliance tools produce reports. ClearCare Audit produces records. The difference matters when CMS asks not just what your posture is, but how you know and who decided.",
    properties: [
      {
        tag: "Nothing is overwritten",
        title: "Every state is preserved exactly as it existed",
        body: "When a correction is applied, the original scan record stays intact and the system creates a new record alongside it."
      },
      {
        tag: "Full traceability",
        title: "Every action links back to a specific person and time",
        body: "Upload, scan, review, authorization, and export each create a timestamped entry in the governance log."
      },
      {
        tag: "Reproducible findings",
        title: "The same file and rule version produce the same result",
        body: "Scan results are pinned to a specific version of the CMS rule registry so any party can verify the output."
      }
    ],
    artifacts: [
      "Original Scan Record",
      "Correction Diff Record",
      "Post-Correction Scan",
      "Governance Log",
      "Rule Registry Snapshot",
      "Compliance Posture Record"
    ],
    alternativesTitle: "What you're working with now and why it's not enough.",
    alternativesIntro:
      "The three most common approaches to MRF compliance all share the same flaw: none of them produce evidence that satisfies a CMS corrective action request.",
    alternatives: [
      {
        label: "Alternative 01",
        title: "Compliance Consultants",
        problems: [
          "Engagements are slow and expensive.",
          "Output is a report, not a record.",
          "The next audit cycle starts over from scratch."
        ],
        replacement: [
          "Repeatable scans at any time",
          "A structured, verifiable record from every session",
          "History that accumulates instead of resetting"
        ]
      },
      {
        label: "Alternative 02",
        title: "Internal Workflows",
        problems: [
          "Manual reviews are inconsistent.",
          "Direct file edits eliminate evidence.",
          "Authorization lives in email threads."
        ],
        replacement: [
          "Consistent evaluation logic every time",
          "Source files are never touched",
          "Authorization embedded in the evidence record"
        ]
      },
      {
        label: "Alternative 03",
        title: "Vendor Dashboards",
        problems: [
          "Compliance scores lack a record behind them.",
          "Opaque methodology is hard to explain to CMS.",
          "No field-level rule citations or governance trail."
        ],
        replacement: [
          "Exact CFR citations for every finding",
          "Explicit authorization on every change",
          "Pinned, reproducible methodology"
        ]
      }
    ]
  },
  audience: {
    tag: "Who It's For",
    title: "Three roles. Three reasons this matters to each.",
    cards: [
      {
        role: "Finance Leadership",
        title: "CFO & Revenue Cycle",
        concern: "What is our actual audit exposure, and what would it cost if CMS acts?",
        points: [
          "Quantify the liability before it materializes",
          "Reduce dependence on external compliance counsel",
          "Replace fire drills with predictable readiness"
        ]
      },
      {
        role: "Compliance Leadership",
        title: "Chief Compliance Officer",
        concern: "If CMS audits us tomorrow, can I produce a defensible record of what we did and who approved it?",
        points: [
          "Visibility at the rule level, not just a score",
          "Authorization embedded, not reconstructed",
          "An audit response that is ready to send"
        ]
      },
      {
        role: "Technology Leadership",
        title: "CTO & IT Leadership",
        concern: "What does this system touch, and what is the integration risk?",
        points: [
          "Source data is never modified",
          "Safe alongside existing infrastructure",
          "Deterministic outputs your team can verify"
        ]
      }
    ]
  },
  cta: {
    tag: "Get Started",
    title: "See where your file stands today.",
    description:
      "We review your current MRF and show exactly where audit risk exists, rule by rule and field by field. Request a demo and we will follow up directly with your team.",
    options: [
      {
        tag: "Bring Your File",
        title: "Get a Compliance Risk Breakdown",
        body: "Submit your current MRF for a full scan, a working review session, and a complete evidence bundle."
      }
    ],
    form: {
      title: "Request Access",
      recipientEmail: "clearcarehq@gmail.com",
      subject: "New ClearCare Audit demo request",
      roles: [
        "CFO / VP Finance",
        "Chief Compliance Officer",
        "VP Revenue Cycle",
        "CTO / VP Technology",
        "Legal Counsel",
        "Other"
      ],
      reasons: [
        "Received a CMS corrective action request",
        "Proactive compliance assessment",
        "Replacing current compliance process",
        "Evaluating audit readiness",
        "Other"
      ],
      primaryAction: "Get Your Risk Breakdown",
      privacyNote: "Your MRF is not retained after the session. Findings are shared only with your team."
    }
  },
  footer:
    "ClearCare Audit evaluates hospital machine-readable pricing files against 45 CFR § 180 requirements. It does not generate MRFs and does not modify source data. This is not legal advice. Compliance determinations should be reviewed with qualified legal counsel."
} as const;
