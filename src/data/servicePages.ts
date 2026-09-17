export type ServicePageData = {
  slug: string;
  shortName: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  summary: string;
  intro: string;
  problemTitle: string;
  problemAnswer: string;
  situations: Array<{ title: string; description: string }>;
  deliverables: Array<{ title: string; description: string }>;
  workflow: Array<{ title: string; description: string }>;
  scope: Array<{ title: string; description: string }>;
  example: { title: string; input: string; action: string; output: string };
  fitNote: string;
  useCases: string[];
  faq: Array<{ question: string; answer: string }>;
  related: string[];
};

export const servicePages: ServicePageData[] = [
  {
    slug: "ai-consulting-uae",
    shortName: "AI consulting",
    title: "AI consulting for UAE businesses",
    metaTitle: "AI Consulting UAE | Practical AI Strategy | Natha Labs",
    metaDescription:
      "AI consulting for UAE businesses: find valuable use cases, assess data and risk, choose build or buy, and leave with a practical implementation plan.",
    eyebrow: "AI consulting · UAE",
    related: [
      "ai-readiness-assessment-uae",
      "ai-automation-dubai",
      "custom-ai-app-development-dubai",
    ],
    summary:
      "Choose where AI belongs in your business, what to build and what your team needs to make it work.",
    intro:
      "You have a business problem to solve, a growing list of AI products and competing advice about where to start. Natha Labs helps UAE businesses turn those choices into a practical decision. Bring the process that takes too long, the system your team avoids or the project you cannot yet justify.",
    problemTitle: "What should AI consulting help you decide?",
    problemAnswer:
      "AI consulting should tell you which problem to tackle, whether AI is needed and how to judge the result. The work starts with the people doing the job. We examine their tools, information and decisions before recommending a product, an integration or a custom build.",
    situations: [
      {
        title: "Too many possible starting points",
        description:
          "Sales wants faster follow-up. Finance wants fewer spreadsheets. Operations wants better reporting. Compare the work involved and the value to each team before choosing a first project.",
      },
      {
        title: "A product demo left questions unanswered",
        description:
          "The demonstration looked useful, but your own data, approval rules and existing software are different. Find out what the product can handle and what would need additional work.",
      },
      {
        title: "Your IT team will inherit the system",
        description:
          "A solution needs an owner after launch. Include your internal team in decisions about access, support, documentation and ongoing costs so the recommendation is usable in practice.",
      },
    ],
    deliverables: [
      {
        title: "A map of the work",
        description:
          "A written view of the current process, its owners, systems and recurring delays. Your team can check that it reflects what actually happens.",
      },
      {
        title: "A ranked set of opportunities",
        description:
          "Candidate projects compared by business value, data availability, implementation effort and risk. Each recommendation explains the assumptions behind it.",
      },
      {
        title: "A build or buy recommendation",
        description:
          "A comparison of suitable existing tools and custom development, including integration requirements, recurring costs and the implications of changing supplier later.",
      },
      {
        title: "A first-project brief",
        description:
          "A defined scope with sample inputs, acceptance criteria, required approvals and responsibilities. Use it to request an implementation proposal or brief your own team.",
      },
    ],
    workflow: [
      {
        title: "Walk through a real task",
        description:
          "An illustrative starting point is a sales enquiry that crosses WhatsApp, email and a spreadsheet. Follow one enquiry with the people responsible for each handoff.",
      },
      {
        title: "Compare the possible changes",
        description:
          "Check whether clearer ownership, a CRM configuration or AI-assisted intake would address the delay. Test the assumptions that could change the recommendation.",
      },
      {
        title: "Agree the next decision",
        description:
          "Document the recommended route and the evidence needed before further investment. The next step may be a small pilot, a software change or process documentation.",
      },
    ],
    scope: [
      {
        title: "People involved",
        description:
          "Include the process owner, someone doing the daily work and the person responsible for your systems. Their input helps expose exceptions that a management workshop can miss.",
      },
      {
        title: "Information needed",
        description:
          "Sample records, existing software and a description of the current workflow are useful starting material. Sensitive information can be removed before the first review.",
      },
      {
        title: "How value is measured",
        description:
          "Choose measures your team can observe, such as response time, rework or completed cases. Separate expected benefits from results that still need to be demonstrated.",
      },
    ],
    example: {
      title: "Illustrative example: enquiries scattered across tools",
      input:
        "An enquiry arrives by email, gets copied into a spreadsheet and waits for a sales representative.",
      action:
        "Map the handoffs, inspect available CRM features and compare configuration with a custom integration.",
      output:
        "A recommendation that identifies the owner, proposed changes and how the team will measure follow-up.",
    },
    fitNote:
      "A useful first conversation starts with one recurring problem. You do not need a preferred AI model or a completed technical brief.",
    useCases: [
      "Choosing a first AI project",
      "Comparing software and custom builds",
      "Planning business integrations",
      "Briefing an internal development team",
    ],
    faq: [
      {
        question: "Do we need an AI project in mind?",
        answer:
          "No. Start with a task that is slow, error-prone or difficult to delegate. Consulting helps establish whether AI has a useful role and what would need to change first.",
      },
      {
        question: "How is this different from an AI readiness assessment?",
        answer:
          "Consulting helps with a particular decision, such as choosing software or designing a workflow. A readiness assessment examines whether your processes, data, systems and team are prepared to implement AI.",
      },
      {
        question: "Will the recommendation require a custom build?",
        answer:
          "Only when the requirements justify one. Configuring software you already own or connecting existing tools may be sufficient. The recommendation should make that choice clear.",
      },
      {
        question: "How do we scope the engagement?",
        answer:
          "Share the workflow, the people involved and the decision you need to make. The proposal sets out the questions to answer, deliverables, responsibilities and fees before work begins.",
      },
    ],
  },
  {
    slug: "ai-automation-dubai",
    shortName: "AI automation",
    title: "AI automation for Dubai businesses",
    metaTitle: "AI Automation Dubai | Business Workflows | Natha Labs",
    metaDescription:
      "AI automation in Dubai for repetitive business workflows, approvals and handoffs. One workflow mapped, integrated, measured and supported.",
    eyebrow: "AI automation · Dubai",
    related: [
      "whatsapp-automation-uae",
      "ai-document-processing-uae",
      "ai-consulting-uae",
    ],
    summary:
      "Connect the everyday work between your inbox, spreadsheets and business software, with clear approvals and a way to handle exceptions.",
    intro:
      "A customer replies, someone copies the details, another person updates the CRM and an approval waits in an inbox. Natha Labs builds AI automation for Dubai businesses around these everyday handoffs. The aim is a process your team can follow, with fewer repeated entries and less chasing for the next step.",
    problemTitle: "Which business workflows are worth automating?",
    problemAnswer:
      "Start with a repeated task that has a clear trigger, an owner and a result you can check. AI can help interpret messages or documents. Rules can handle predictable actions, such as assigning an enquiry or sending an approval request. Your staff stay responsible for decisions that require judgement.",
    situations: [
      {
        title: "The same details get entered twice",
        description:
          "Staff copy information from messages into spreadsheets and then into another system. Connect the records so the next person receives the details without retyping them.",
      },
      {
        title: "Work stops between teams",
        description:
          "A quotation is ready, but nobody knows who should approve it. Make the next action, responsible person and outstanding information visible in the tools people use.",
      },
      {
        title: "Existing automations need constant repair",
        description:
          "A changed field or unusual message can interrupt a workflow. Give staff a clear view of failures and a controlled way to retry work without creating duplicate records.",
      },
    ],
    deliverables: [
      {
        title: "A documented process",
        description:
          "The current steps, exceptions and responsibilities, with a baseline for the delay or error you want to reduce. This becomes the reference for the build.",
      },
      {
        title: "Connected business tools",
        description:
          "An agreed workflow across email, forms, spreadsheets, CRM or other business systems. Connections depend on the access and integration options each system provides.",
      },
      {
        title: "Approvals and exception handling",
        description:
          "Review steps for uncertain inputs, missing information and sensitive decisions. Staff receive the relevant context and can correct a case before it moves forward.",
      },
      {
        title: "Monitoring and operating guidance",
        description:
          "A record of completed and failed actions, useful alerts and instructions for the process owner. Your team knows how to pause the workflow and request changes.",
      },
    ],
    workflow: [
      {
        title: "Receive and identify",
        description:
          "In an illustrative quotation workflow, an email enquiry arrives. The system identifies the customer, requested service and any missing details needed to prepare a response.",
      },
      {
        title: "Prepare and request approval",
        description:
          "Available information is written to the correct record. A draft quotation or task goes to the responsible person, with questions that still need an answer.",
      },
      {
        title: "Record and follow up",
        description:
          "Once approved, the next action runs and its status is recorded. Failed updates are flagged for review instead of being treated as completed work.",
      },
    ],
    scope: [
      {
        title: "Start with one workflow",
        description:
          "Agree where the process begins and ends. A focused first release makes it easier to test actual exceptions and understand the result before adding more steps.",
      },
      {
        title: "Check access before building",
        description:
          "Your software subscriptions, permissions and available APIs determine which connections are possible. An API is the supported way for one system to exchange information with another.",
      },
      {
        title: "Plan for ongoing changes",
        description:
          "A form, approval rule or software account can change after launch. Assign an owner and agree how maintenance, provider charges and new requirements will be handled.",
      },
    ],
    example: {
      title: "Illustrative example: an enquiry becomes a quotation task",
      input:
        "A customer emails a request with an attachment and an incomplete delivery address.",
      action:
        "Extract the request, match the customer and ask staff to confirm the missing address before approval.",
      output:
        "A CRM record and assigned quotation task, with the original email available for reference.",
    },
    fitNote:
      "This service fits work that repeats often and has a known path. If the process changes from person to person, begin by mapping it.",
    useCases: [
      "Lead routing and follow-up",
      "Quotation approvals",
      "Invoice intake and review",
      "Operational reporting and alerts",
    ],
    faq: [
      {
        question: "Does every step need AI?",
        answer:
          "No. Use predictable rules for predictable actions. AI is useful where messages, documents or requests need interpretation. Keeping that distinction makes the workflow easier to understand and maintain.",
      },
      {
        question: "Can you work with our existing software?",
        answer:
          "The starting point is your current setup. We check available integrations, account permissions and data formats before defining the build. Any required software changes belong in the proposal.",
      },
      {
        question: "What happens if a connection fails?",
        answer:
          "The design should show which action failed and preserve the information needed to recover. Retry rules, duplicate checks and staff alerts are agreed for the specific workflow.",
      },
      {
        question: "How will we know the automation is useful?",
        answer:
          "Compare the agreed baseline with the pilot: time to completion, repeated entry, missed handoffs or cases requiring correction. Review the result with the people using the process.",
      },
    ],
  },
  {
    slug: "custom-ai-app-development-dubai",
    shortName: "Custom AI apps",
    title: "Custom AI app development in Dubai",
    metaTitle: "AI Development Company Dubai | Custom AI Apps | Natha Labs",
    metaDescription:
      "Custom AI application development in Dubai for internal tools and customer products, from proof of concept through secure production deployment.",
    eyebrow: "AI development company · Dubai",
    related: [
      "ai-readiness-assessment-uae",
      "ai-automation-dubai",
      "ai-document-processing-uae",
    ],
    summary:
      "Build a business application around your users, data and approval rules, from a tested prototype to software your team can operate.",
    intro:
      "Your team may already know what the software needs to do. The difficulty is making it fit the way your business works. Natha Labs develops custom AI applications for Dubai businesses when existing products cannot cover the workflow, user experience or system connections you need.",
    problemTitle: "When does a custom AI application make sense?",
    problemAnswer:
      "Custom development makes sense when a specific business requirement is valuable enough to own and maintain. That might be an internal workspace connecting several systems or a customer product using approved business information. First, test whether existing software can meet the requirement with less cost and ongoing work.",
    situations: [
      {
        title: "Your workflow spans disconnected tools",
        description:
          "Staff move between email, WhatsApp, spreadsheets and the CRM to complete one task. A shared application can bring the required information and actions into one place.",
      },
      {
        title: "Different users need different access",
        description:
          "Customers, staff and managers need different views of the same work. Define who can see records, change information and approve actions before building the interface.",
      },
      {
        title: "A prototype needs to become dependable software",
        description:
          "A demo can answer a question without handling permissions, unavailable services or incorrect inputs. A production plan needs to account for those conditions and explain who supports it.",
      },
    ],
    deliverables: [
      {
        title: "A buildable product specification",
        description:
          "User journeys, required screens, business rules and integrations, with a defined first release. The specification separates essential functions from features that can wait.",
      },
      {
        title: "A prototype using representative data",
        description:
          "A working version of the difficult part of the product, assessed against agreed examples. Use it to check usefulness, accuracy and user understanding before expanding the build.",
      },
      {
        title: "The application and its integrations",
        description:
          "The agreed interface, account access and business connections, including review controls for AI-generated work. Web or mobile requirements are selected according to how users will use the product.",
      },
      {
        title: "Deployment and handover materials",
        description:
          "An agreed release process, system documentation and operating instructions. Ownership, access to source code, support arrangements and third-party dependencies are documented in the project agreement.",
      },
    ],
    workflow: [
      {
        title: "Define the user task",
        description:
          "For an illustrative internal proposal tool, identify who prepares the proposal, which records they need and who approves the content before it reaches a customer.",
      },
      {
        title: "Test the difficult part",
        description:
          "Use representative requests to test whether the application finds the right information and prepares a useful draft. Include incomplete inputs and conflicting source material.",
      },
      {
        title: "Build the surrounding application",
        description:
          "Add the required screens, permissions, integrations and review steps. Release to a defined group, examine failures and confirm acceptance criteria before broader use.",
      },
    ],
    scope: [
      {
        title: "Your source information",
        description:
          "AI features need suitable information and permission to use it. Identify the source owner, update process and access restrictions, including what happens when a record is removed.",
      },
      {
        title: "Running costs",
        description:
          "Model usage, hosting, storage and third-party services can create recurring charges. Estimate them against the expected workload and define how usage will be monitored.",
      },
      {
        title: "Product ownership",
        description:
          "Decide who maintains the application, approves changes and handles user support. The agreement should distinguish custom deliverables from licensed software and reusable components.",
      },
    ],
    example: {
      title: "Illustrative example: a proposal preparation workspace",
      input:
        "A staff member adds an enquiry and selects the relevant approved service information.",
      action:
        "The application assembles a draft, points to supporting material and requests review of unresolved questions.",
      output:
        "An editable proposal for staff approval, with the customer record and review history kept together.",
    },
    fitNote:
      "Bring your users, an example task and the limits of your current tools. A first release should solve a specific job well.",
    useCases: [
      "Internal operations applications",
      "Customer-facing AI products",
      "Proposal and review workspaces",
      "Applications using private business knowledge",
    ],
    faq: [
      {
        question: "Can we start with a proof of concept?",
        answer:
          "Yes. A proof of concept focuses on a question that could change the investment decision, such as whether your source documents support useful answers. Its scope and acceptance criteria are agreed first.",
      },
      {
        question: "Do we need our own AI model?",
        answer:
          "Many applications can use an existing model alongside your business information and rules. Model selection depends on the task, quality requirements, data handling and operating cost.",
      },
      {
        question: "Who owns the code and application?",
        answer:
          "The project agreement defines ownership and access. It also identifies third-party licenses and any pre-existing components. Those terms should be settled before development starts.",
      },
      {
        question: "What happens after launch?",
        answer:
          "Agree a support arrangement covering monitoring, fixes and changes. Your handover should identify account owners, deployment access, dependencies and the route for reporting a problem.",
      },
    ],
  },
  {
    slug: "whatsapp-automation-uae",
    shortName: "WhatsApp automation",
    title: "WhatsApp automation for UAE businesses",
    metaTitle: "WhatsApp Automation UAE | AI and CRM | Natha Labs",
    metaDescription:
      "WhatsApp automation for UAE businesses: fast replies, lead qualification, booking, CRM updates and safe transfer to a human team member.",
    eyebrow: "WhatsApp automation · UAE",
    related: [
      "ai-automation-dubai",
      "ai-voice-agents-uae",
      "ai-automation-hospitality-uae",
    ],
    summary:
      "Answer routine questions, capture enquiries and arrange the next step on WhatsApp, with a clear route to your team.",
    intro:
      "Customers ask about availability, send documents and follow up in the same WhatsApp conversation. When the inbox gets busy, staff lose track of who needs a reply. Natha Labs builds WhatsApp automation for UAE businesses around that conversation and the work it needs to trigger.",
    problemTitle: "What can WhatsApp automation do for your business?",
    problemAnswer:
      "WhatsApp automation can answer approved questions, collect the details of an enquiry, request a booking and update a customer record. The useful part is connecting the conversation to your team. Staff should see what was asked, what happened and what needs their attention, without asking the customer to start again.",
    situations: [
      {
        title: "Enquiries wait while staff serve customers",
        description:
          "Your team cannot always answer a message while helping someone in person. A focused assistant can collect the request and explain the next step while staff are occupied.",
      },
      {
        title: "Customer details stay inside individual chats",
        description:
          "One person knows the conversation, but the rest of the team cannot see its status. Connect relevant details to a shared customer record and assign responsibility for follow-up.",
      },
      {
        title: "You want automation without disrupting the inbox",
        description:
          "Your number, chat history and staff routines matter. Review the current WhatsApp Business setup and available connection options before proposing changes to how the team works.",
      },
    ],
    deliverables: [
      {
        title: "A defined conversation flow",
        description:
          "The questions the assistant can answer, information it should collect and actions it may take. Wording is based on the way your customers actually ask for help.",
      },
      {
        title: "Approved business answers",
        description:
          "A maintained source for services, opening hours, booking requirements and other agreed information. Questions outside that material go to your team instead of receiving an invented answer.",
      },
      {
        title: "Connected records and actions",
        description:
          "Enquiries, booking requests or status checks connected to the agreed CRM, calendar or business system. Availability and confirmation rules are tested against the source system.",
      },
      {
        title: "Staff takeover and handover",
        description:
          "A visible route to a person, with the conversation and collected details included. Define what happens when staff are available, busy or outside working hours.",
      },
    ],
    workflow: [
      {
        title: "Understand the request",
        description:
          "In an illustrative service-booking conversation, the customer names the service and preferred day. The assistant asks for only the details still needed to move forward.",
      },
      {
        title: "Check the next available action",
        description:
          "Read the connected calendar when supported, or prepare a booking request for staff. A request remains pending until the agreed confirmation step succeeds.",
      },
      {
        title: "Confirm or transfer",
        description:
          "Send the confirmed details after the system accepts the booking. Transfer exceptions to staff with the request, relevant history and reason for review.",
      },
    ],
    scope: [
      {
        title: "Your current number and history",
        description:
          "Account ownership, phone-app use and available migration or coexistence options need checking first. The proposal should explain expected changes before any live number is connected.",
      },
      {
        title: "Languages and customer wording",
        description:
          "If Arabic and English are required, test both with realistic messages, spelling variations and language switching. Decide which unsupported requests should move to a person.",
      },
      {
        title: "Messages and operating costs",
        description:
          "Map the messages you intend to send, customer permissions and provider requirements. Identify platform charges, integration costs and who maintains the approved answers after launch.",
      },
    ],
    example: {
      title: "Illustrative example: a service appointment request",
      input:
        "A customer asks about a service on WhatsApp and gives a preferred afternoon.",
      action:
        "Collect the required details, check the booking route and send anything unusual to reception.",
      output:
        "A confirmed appointment or a clearly marked request for staff, linked to the customer record.",
    },
    fitNote:
      "Start with one number and a defined set of conversations. Bring examples of the questions your team answers most often.",
    useCases: [
      "Customer enquiry response",
      "Appointment requests",
      "Quotation intake",
      "Order and service updates",
    ],
    faq: [
      {
        question: "Will we lose our existing chats?",
        answer:
          "That cannot be promised before reviewing your account. We check the current setup, history requirements and supported connection options, then explain the migration approach before making changes.",
      },
      {
        question: "Can customers still speak to a person?",
        answer:
          "Yes. Asking for a person should trigger the agreed handover. If nobody is available, the conversation should state what happens next and create a visible task for staff.",
      },
      {
        question: "Can the assistant handle Arabic and English?",
        answer:
          "Both can be included in scope. The relevant test is whether it understands your customers and completes the intended task. Representative conversations form part of acceptance testing.",
      },
      {
        question: "Can it confirm bookings or send payment links?",
        answer:
          "Where your booking or payment provider supports the required integration, these actions can be scoped. Confirmation must reflect the source system, and payment details should use the provider’s approved payment flow.",
      },
    ],
  },
  {
    slug: "ai-voice-agents-uae",
    shortName: "AI voice agents",
    title: "AI voice agents for UAE businesses",
    metaTitle: "AI Voice Agent UAE | Calls and Booking | Natha Labs",
    metaDescription:
      "Bilingual AI voice agents for UAE calls, qualification and booking, with CRM logging, analytics and immediate human transfer.",
    eyebrow: "AI voice agents · UAE",
    related: [
      "whatsapp-automation-uae",
      "ai-automation-dubai",
      "custom-ai-app-development-dubai",
    ],
    summary:
      "Handle routine calls, capture requests and arrange appointments, with tested call flows and an obvious way to reach a person.",
    intro:
      "A phone call needs an answer while the customer is still on the line. Natha Labs builds AI voice agents for UAE businesses that need help with a defined calling task. Start with reception, appointment requests or an agreed follow-up flow, then test how real callers experience it.",
    problemTitle: "What should an AI voice agent be able to do?",
    problemAnswer:
      "A useful voice agent understands the caller’s request, completes an allowed action and transfers the call when it cannot help. It needs more than a convincing voice. Callers should be able to interrupt, correct a detail and ask for a person without getting trapped in a repeated script.",
    situations: [
      {
        title: "Reception cannot answer every call",
        description:
          "Staff may be helping someone at the desk or already on another line. A defined call flow can collect the caller’s request and send it to the right person.",
      },
      {
        title: "Appointment details need repeated follow-up",
        description:
          "Your team spends time checking names, preferred slots and reasons for calling. Capture those details consistently and connect them to a calendar or callback task.",
      },
      {
        title: "Existing phone automation frustrates callers",
        description:
          "Repeated questions and failed recognition waste the caller’s time. Test interruption, correction and human transfer as carefully as the successful booking path.",
      },
    ],
    deliverables: [
      {
        title: "An agreed call flow",
        description:
          "The purpose of the call, required questions, permitted actions and transfer rules. The opening identifies the automated service and gives callers a clear way to request help.",
      },
      {
        title: "Voice and language testing",
        description:
          "Representative calls covering the languages, accents and background conditions relevant to your customers. Check names, dates and numbers that matter to the task.",
      },
      {
        title: "Calendar and CRM connections",
        description:
          "The agreed booking actions, contact records, summaries and follow-up tasks. A CRM is the system your team uses to track customers and their conversations.",
      },
      {
        title: "Call review and operating controls",
        description:
          "Call outcomes, failed actions and transfer results available for review. Recording, transcript access and retention are scoped with the people responsible for your data.",
      },
    ],
    workflow: [
      {
        title: "Identify the reason for calling",
        description:
          "In an illustrative reception flow, the agent introduces itself, asks how it can help and identifies whether the caller needs an appointment or a staff member.",
      },
      {
        title: "Complete the permitted task",
        description:
          "Collect the necessary details and check the connected system. Repeat critical information for confirmation, including the appointment date or callback number.",
      },
      {
        title: "Confirm the result or hand over",
        description:
          "Give the result only after the business system accepts it. Transfer the call or create an agreed callback request when the task needs staff attention.",
      },
    ],
    scope: [
      {
        title: "Phone provider and call route",
        description:
          "Confirm the number, provider and intended inbound or outbound use before choosing the technical setup. Available integrations and provider requirements affect the design.",
      },
      {
        title: "The limits of the conversation",
        description:
          "Choose the requests the agent can handle and the cases it must transfer. Sensitive decisions, complaints and unfamiliar situations need an agreed staff response.",
      },
      {
        title: "Quality and running costs",
        description:
          "Evaluate completion, recognition failures, transfers and abandoned calls alongside usage costs. A fluent voice is only one part of a successful customer experience.",
      },
    ],
    example: {
      title: "Illustrative example: reception during a busy period",
      input:
        "A caller asks for an appointment while reception staff are occupied.",
      action:
        "Capture the request, repeat the details and check the booking system or prepare a callback task.",
      output:
        "A confirmed booking or a staff follow-up record with the caller’s details and reason for calling.",
    },
    fitNote:
      "Choose one call type for the first pilot. Have staff and representative callers test it before expanding the range of requests.",
    useCases: [
      "Reception and routing",
      "Appointment booking",
      "Enquiry qualification",
      "Requested callbacks and follow-up",
    ],
    faq: [
      {
        question: "Can callers ask for a human immediately?",
        answer:
          "That should be part of the agreed flow. The design needs a transfer destination and a fallback when nobody answers, so the request does not disappear.",
      },
      {
        question: "Can it use a UAE phone number?",
        answer:
          "The options depend on your telephony provider, account and intended call flow. Number availability and applicable provider requirements need verification before an implementation is proposed.",
      },
      {
        question: "Can it understand Arabic and English?",
        answer:
          "Language support can be included, but it must be tested with the accents and phrases your callers use. Names, mixed-language requests and corrections deserve specific test cases.",
      },
      {
        question: "How do we decide whether to launch?",
        answer:
          "Agree acceptance criteria before the pilot. Review successful tasks, failed recognition, transfer behaviour and caller feedback. Expand only when the evidence supports the next call type.",
      },
    ],
  },
  {
    slug: "ai-document-processing-uae",
    shortName: "Document AI",
    title: "AI document processing in the UAE",
    metaTitle: "AI Document Processing UAE | Natha Labs",
    metaDescription:
      "Extract, check, search and route invoices, contracts, policies and business documents with human review and system integration.",
    eyebrow: "Document AI · UAE",
    related: [
      "ai-automation-dubai",
      "ai-consulting-uae",
      "custom-ai-app-development-dubai",
    ],
    summary:
      "Collect documents, extract the details your team needs and prepare records for review, with the source visible at every important step.",
    intro:
      "Invoices arrive in different formats. Clients send incomplete files. Staff search old folders to check which policy applies. Natha Labs builds AI document processing for UAE businesses that need a clearer path from incoming information to reviewed work in their existing systems.",
    problemTitle: "Which document tasks can AI help with?",
    problemAnswer:
      "AI document processing can extract fields, compare information, identify missing details and help staff find answers in approved documents. The workflow should preserve the original file and show what needs checking. Your reviewers can then assess a prepared result instead of retyping or searching for every piece of information.",
    situations: [
      {
        title: "Finance re-enters invoice information",
        description:
          "Supplier names, dates and line items move from PDFs into spreadsheets or accounting software. Prepare those fields for review and flag inconsistencies before they become another record.",
      },
      {
        title: "Staff chase missing client documents",
        description:
          "A file arrives, but one attachment or required detail is absent. Track what has been received and prepare a specific request for the remaining information.",
      },
      {
        title: "Answers are buried in policy files",
        description:
          "People search folders, ask colleagues and reuse old guidance. A knowledge assistant can point staff to the relevant passage in a maintained set of approved documents.",
      },
    ],
    deliverables: [
      {
        title: "A document intake workflow",
        description:
          "Agreed email, upload or system inputs linked to the right customer, supplier or case. The original file remains available so reviewers can check the result.",
      },
      {
        title: "Extraction and validation rules",
        description:
          "The fields to capture and checks to perform, such as missing references, mismatched totals or possible duplicates. Unclear information is identified for review.",
      },
      {
        title: "Search with supporting sources",
        description:
          "Where knowledge search is in scope, answers use approved documents and include source references. Access rules determine which material each user can retrieve.",
      },
      {
        title: "Review and system export",
        description:
          "A practical review step before agreed records reach your finance, CRM or other business system. Field mappings and failed exports are visible to the process owner.",
      },
    ],
    workflow: [
      {
        title: "Collect the document",
        description:
          "In an illustrative invoice workflow, an email attachment is linked to its supplier and saved with the incoming message. Unsupported or unreadable files are flagged.",
      },
      {
        title: "Prepare the fields for review",
        description:
          "Extract the required information and compare it with the agreed checks. Show the reviewer missing references, potential duplicates and any values that need confirmation.",
      },
      {
        title: "Approve and send onward",
        description:
          "The reviewer corrects or approves the result. Export the agreed fields, record the outcome and keep a link to the source for later questions.",
      },
    ],
    scope: [
      {
        title: "Document variety",
        description:
          "Test a representative sample, including scans, layouts, languages and poor-quality files. An example that works on one clean PDF does not establish performance across your documents.",
      },
      {
        title: "Meaningful quality checks",
        description:
          "Measure the fields and decisions that matter to the business. An incorrect invoice total and a minor formatting difference have different consequences and should be reviewed accordingly.",
      },
      {
        title: "Access and retention",
        description:
          "Agree who can read the files, where they are processed and how long they are kept. Include the handling of changed permissions and removed source documents.",
      },
    ],
    example: {
      title:
        "Illustrative example: a supplier invoice with a missing reference",
      input:
        "A supplier sends a PDF invoice without the purchase-order reference your finance team requires.",
      action:
        "Extract available fields, flag the missing reference and prepare a follow-up request for review.",
      output:
        "A pending invoice record with its source attached, ready to continue once the missing detail is supplied.",
    },
    fitNote:
      "Bring a varied sample of the documents your team receives and an example of the record or answer they need to produce.",
    useCases: [
      "Invoice and receipt intake",
      "Client document collection",
      "Contract and policy search",
      "Drafting from approved source material",
    ],
    faq: [
      {
        question: "Can it read scanned or Arabic documents?",
        answer:
          "Those requirements can be evaluated using your actual sample files. Image quality, handwriting, layout and language affect results, so acceptance testing should reflect the documents you receive.",
      },
      {
        question: "Will the AI make mistakes?",
        answer:
          "It can. Important fields need validation and an appropriate review step. The system should expose the source and uncertainty so staff can correct the result before it affects downstream work.",
      },
      {
        question: "Can it update our accounting or ERP system?",
        answer:
          "Where a supported API or import route exists, an export can be included. First agree the required fields, duplicate handling, approval rules and recovery process for failed updates.",
      },
      {
        question: "Can it answer questions about our policies?",
        answer:
          "Yes, if the approved material supports that use case. Scope includes document ownership, access rules and source references. When the information is missing or conflicting, the answer should make that clear.",
      },
    ],
  },
  {
    slug: "ai-readiness-assessment-uae",
    shortName: "AI readiness",
    title: "AI readiness assessment for UAE companies",
    metaTitle: "AI Readiness Assessment UAE | Natha Labs",
    metaDescription:
      "A fixed-scope AI readiness assessment for UAE companies covering workflows, data, risk, build versus buy and a measurable pilot plan.",
    eyebrow: "AI readiness assessment · UAE",
    related: [
      "ai-consulting-uae",
      "ai-automation-dubai",
      "custom-ai-app-development-dubai",
    ],
    summary:
      "Check whether your processes, data and team are ready for AI, and define a first project with clear requirements.",
    intro:
      "Before approving an AI project, you need to know what it depends on. Is the information usable? Can the systems connect? Who will check the output? Natha Labs provides AI readiness assessments for UAE companies so those questions are addressed before they become implementation problems.",
    problemTitle: "What does an AI readiness assessment cover?",
    problemAnswer:
      "An AI readiness assessment examines the workflow, available data, system access, responsibilities and risks behind a proposed use case. It identifies what is ready, what needs preparation and what a useful pilot would test. The output is a written assessment and an actionable project brief your team can review.",
    situations: [
      {
        title: "Processes exist in people’s heads",
        description:
          "Experienced staff know which exceptions matter, but the steps are undocumented. Capture how the work is actually done before deciding what software can take over.",
      },
      {
        title: "Your data is spread across systems",
        description:
          "Spreadsheets, shared folders and customer software hold different versions of the information. Identify the source of truth, missing fields and access needed for the proposed workflow.",
      },
      {
        title: "An earlier AI pilot did not progress",
        description:
          "The demo may have worked while the operational questions stayed unresolved. Review ownership, data access, user adoption and success criteria before investing in another implementation.",
      },
    ],
    deliverables: [
      {
        title: "A current-state assessment",
        description:
          "The relevant workflows, owners, information sources and existing tools documented together. Gaps are tied to the proposed use case so the assessment stays specific.",
      },
      {
        title: "A readiness and risk register",
        description:
          "Data quality issues, access requirements and operating decisions that need attention. Each item has a suggested next action and an owner to confirm.",
      },
      {
        title: "A prioritised project roadmap",
        description:
          "Candidate projects ordered by usefulness and preparedness. The roadmap explains which dependencies need resolving and what can be tested with the information already available.",
      },
      {
        title: "A pilot specification",
        description:
          "A defined task, representative inputs, review responsibilities and acceptance criteria. Include the assumptions an implementation proposal must check before setting cost and schedule.",
      },
    ],
    workflow: [
      {
        title: "Observe the current process",
        description:
          "In an illustrative document-intake assessment, follow a file from arrival to completion. Ask staff how they identify missing information and where they record the status.",
      },
      {
        title: "Check what the project depends on",
        description:
          "Review sample files, system access and approval responsibilities. Identify whether the proposed pilot can run with the existing setup or needs preparatory changes.",
      },
      {
        title: "Set a practical starting point",
        description:
          "Document a pilot that tests one useful improvement. Assign the preparation work and define the result that would justify moving to implementation.",
      },
    ],
    scope: [
      {
        title: "Assessment boundaries",
        description:
          "Agree which team, workflow or use cases are being assessed. A bounded review gives owners concrete actions and avoids a broad report with no clear starting point.",
      },
      {
        title: "Participation and examples",
        description:
          "The people doing the work need to explain normal cases and exceptions. Bring representative records, process notes if available and the questions your decision-makers need answered.",
      },
      {
        title: "Using the findings",
        description:
          "The assessment should stand on its own. Your internal team or chosen implementation partner can use the findings, with remaining assumptions and dependencies clearly identified.",
      },
    ],
    example: {
      title: "Illustrative example: preparing document intake for automation",
      input:
        "An operations team wants AI to check customer files, but staff use different checklists.",
      action:
        "Agree the required documents, inspect sample cases and identify who approves exceptions.",
      output:
        "A readiness assessment and pilot brief, including the shared checklist the team must approve first.",
    },
    fitNote:
      "Choose this service when the proposed project sounds useful but the prerequisites are unclear. It can cover one operational workflow.",
    useCases: [
      "Preparing a first AI project",
      "Reviewing data and system access",
      "Recovering a stalled pilot",
      "Planning implementation responsibilities",
    ],
    faq: [
      {
        question: "Is this suitable for a small business?",
        answer:
          "Yes. The assessment can focus on one recurring task and the people responsible for it. The scope should reflect your decision, rather than requiring a company-wide programme.",
      },
      {
        question: "What if we have no process documentation?",
        answer:
          "The assessment can begin by mapping the work with staff. Real examples are useful: an enquiry, invoice or customer request and the steps taken to complete it.",
      },
      {
        question: "Is this different from AI consulting?",
        answer:
          "AI consulting can address a particular decision, such as choosing a tool. A readiness assessment systematically checks the conditions needed to implement and operate your proposed project.",
      },
      {
        question: "Does the assessment commit us to a build?",
        answer:
          "No. The written findings can guide your own team or another supplier. A subsequent build would have its own agreed scope, deliverables and commercial terms.",
      },
    ],
  },
  {
    slug: "ai-automation-real-estate-dubai",
    shortName: "AI for real estate",
    title: "AI automation for Dubai real estate teams",
    metaTitle: "Real Estate AI Automation Dubai | Natha Labs",
    metaDescription:
      "AI automation for Dubai real estate teams: capture, qualify and route leads, connect CRM data, automate follow-up and keep agents in control.",
    eyebrow: "Real estate AI · Dubai",
    related: [
      "whatsapp-automation-uae",
      "ai-automation-dubai",
      "ai-voice-agents-uae",
    ],
    summary:
      "Capture property enquiries, organise follow-up and keep your CRM current, so agents can pick up each conversation with the right context.",
    intro:
      "An enquiry arrives from a campaign, the conversation moves to WhatsApp and the agent’s notes never reach the CRM. Natha Labs builds AI automation for Dubai real estate teams around these gaps. Connect the lead, the property interest and the next action so your team can see what needs attention.",
    problemTitle: "Where can AI help a real estate team?",
    problemAnswer:
      "AI can help collect an enquiry, capture buyer preferences, prepare approved property information and route the conversation to an agent. Connected automation can then update the CRM and track follow-up. Availability, prices and viewing confirmations should come from maintained records or staff approval, with uncertainties made visible.",
    situations: [
      {
        title: "Enquiries arrive from several sources",
        description:
          "Campaign forms, the website and WhatsApp create separate records. Match existing contacts so agents can follow the conversation without starting from scratch.",
      },
      {
        title: "Agents repeat the same intake questions",
        description:
          "Budget, preferred area, property type and timing are collected manually. Capture the agreed details while keeping the route to an agent available when a buyer wants to talk.",
      },
      {
        title: "Managers cannot see the next action",
        description:
          "A lead may have been contacted without the CRM reflecting it. Record the owner, stage and follow-up task so managers can identify unattended enquiries and unresolved handoffs.",
      },
    ],
    deliverables: [
      {
        title: "Connected lead capture",
        description:
          "Enquiries from the agreed channels recorded with their source, contact details and property interest. Matching rules flag possible duplicates for the team to resolve.",
      },
      {
        title: "A qualification conversation",
        description:
          "Questions based on the agency’s requirements, with collected answers available to the assigned agent. Buyers can correct details or request a direct conversation.",
      },
      {
        title: "CRM routing and follow-up",
        description:
          "Assignment rules, agreed pipeline updates and reminders connected to the team’s current CRM. The design respects existing ownership where an agent already handles the contact.",
      },
      {
        title: "An operational view of enquiries",
        description:
          "Visibility into response status, missing information and upcoming actions. Track stages your team actually uses so the reporting reflects work agents can act on.",
      },
    ],
    workflow: [
      {
        title: "Capture the property interest",
        description:
          "In an illustrative campaign flow, a buyer asks about an apartment through WhatsApp. Record the enquiry source and connect the message to the relevant listing when identifiable.",
      },
      {
        title: "Collect the relevant details",
        description:
          "Ask about the agreed preferences and consult maintained listing information. If availability or pricing is uncertain, identify the question for an agent rather than guessing.",
      },
      {
        title: "Assign the next action",
        description:
          "Send the conversation and preferences to the responsible agent. Create a viewing request or follow-up task, then record its status once the team confirms it.",
      },
    ],
    scope: [
      {
        title: "Listing accuracy",
        description:
          "Identify who maintains property details and how changes reach the workflow. Set limits for information that becomes unreliable when a listing is old or incomplete.",
      },
      {
        title: "Agent ownership",
        description:
          "Agree assignment, reassignment and duplicate-handling rules. A new message from an existing buyer should not silently create competing follow-ups from different agents.",
      },
      {
        title: "Lead sources and permissions",
        description:
          "Review the CRM, campaign accounts and available portal connections. Use supported access and define which updates can run automatically and which require an agent.",
      },
    ],
    example: {
      title: "Illustrative example: a WhatsApp enquiry about an apartment",
      input:
        "A buyer asks whether a listed apartment is available and mentions a preferred viewing day.",
      action:
        "Match the listing, capture the request and flag availability for confirmation if the source is outdated.",
      output:
        "A lead assigned to an agent with the conversation, property reference and pending viewing request together.",
    },
    fitNote:
      "Start with one enquiry source and one follow-up path. Your agency needs a clear owner for listing information and CRM records.",
    useCases: [
      "WhatsApp property enquiries",
      "Lead qualification and assignment",
      "Viewing appointment requests",
      "Pipeline reporting and reminders",
    ],
    faq: [
      {
        question: "Can it work with our current real estate CRM?",
        answer:
          "We first check the CRM’s integration options, permissions and field structure. The scope can then specify which records it can read or update and how conflicts will be handled.",
      },
      {
        question: "Can AI recommend properties to buyers?",
        answer:
          "It can help filter approved listing data against stated preferences. The available information must support the recommendation, and an agent should handle missing facts or questions needing professional judgement.",
      },
      {
        question: "How do you avoid incorrect prices or availability?",
        answer:
          "Use maintained listing sources and explicit rules for stale or incomplete data. If the source cannot confirm a fact, the workflow should ask an agent before presenting it as current.",
      },
      {
        question: "Will agents still control their conversations?",
        answer:
          "Yes. Define ownership, staff takeover and the actions that need approval. Automation prepares the context and tracks routine work while agents handle advice, negotiation and the customer relationship.",
      },
    ],
  },
  {
    slug: "ai-automation-hospitality-uae",
    shortName: "AI for hospitality",
    title: "AI automation for UAE hospitality teams",
    metaTitle: "Hospitality AI Automation UAE | Natha Labs",
    metaDescription:
      "AI automation for UAE hotels and venues: respond to enquiries, manage WhatsApp bookings, centralize SOP knowledge and escalate safely.",
    eyebrow: "Hospitality AI · UAE",
    related: [
      "whatsapp-automation-uae",
      "ai-document-processing-uae",
      "ai-voice-agents-uae",
    ],
    summary:
      "Keep guest enquiries, booking requests and operating guidance organised, with the right information available to reception, reservations and sales.",
    intro:
      "Reception is helping a guest. A group enquiry is waiting in email. Another customer is asking about availability on WhatsApp. Natha Labs builds AI automation for UAE hospitality teams around these competing demands, connecting routine questions and requests to the people and systems that can resolve them.",
    problemTitle: "Which hospitality workflows are suitable for AI automation?",
    problemAnswer:
      "Useful starting points include enquiry intake, reservation requests, group-sales preparation and staff searches for approved procedures. Each workflow needs current information and a clear owner. Guest-facing answers should reflect your property’s policies, while availability, pricing and confirmed bookings follow the rules of your reservation or sales process.",
    situations: [
      {
        title: "Reception balances guests and messages",
        description:
          "Staff cannot give every conversation immediate attention during busy periods. Capture requests, answer agreed questions and send exceptions to the right team with the details preserved.",
      },
      {
        title: "Group enquiries need several rounds of questions",
        description:
          "Dates, room requirements, meeting space and catering details arrive across messages. Gather the brief in one place so sales can prepare a response with fewer gaps.",
      },
      {
        title: "Operating guidance is difficult to find",
        description:
          "Procedures may be spread across folders, emails and old documents. Give staff a way to locate the current approved instruction and see the source behind it.",
      },
    ],
    deliverables: [
      {
        title: "An enquiry and routing flow",
        description:
          "Approved answers and structured request capture for a defined guest or commercial journey. Route the request to reception, reservations or sales according to your operating rules.",
      },
      {
        title: "A booking-request workflow",
        description:
          "The agreed availability checks, requests and confirmation steps connected to supported systems. Pending enquiries and confirmed reservations remain clearly distinguishable.",
      },
      {
        title: "A staff knowledge assistant",
        description:
          "Search across a maintained set of approved procedures and policies, with source references. Document owners decide what is current and which staff can access it.",
      },
      {
        title: "Handover and access controls",
        description:
          "Staff receive the request history, missing details and next action. Data access, retention and guest-information boundaries are defined for the specific workflow.",
      },
    ],
    workflow: [
      {
        title: "Collect the enquiry",
        description:
          "In an illustrative group-sales flow, a company asks about rooms and meeting space. Capture the dates, group requirements and contact details needed for a useful response.",
      },
      {
        title: "Prepare the request for the team",
        description:
          "Organise the requirements, identify missing information and consult approved property details. Availability and commercial terms go through the property’s agreed checks.",
      },
      {
        title: "Route for a confirmed response",
        description:
          "Send the prepared brief to sales with unresolved questions highlighted. Staff approve the offer and the customer receives the next step through the agreed channel.",
      },
    ],
    scope: [
      {
        title: "Reservation-system access",
        description:
          "Check the available connections to your booking tools or property management system. A pilot can collect enquiries without writing to reservations where access is unnecessary or unavailable.",
      },
      {
        title: "Commercial approval",
        description:
          "Rates, group terms, exceptions and refunds need defined authority. Specify what the assistant may explain, what it may prepare and what must be approved by staff.",
      },
      {
        title: "Maintaining property information",
        description:
          "Assign owners for policies, opening times, facilities and operating procedures. Updates need to reach the approved source before the assistant relies on the new information.",
      },
    ],
    example: {
      title: "Illustrative example: a company group enquiry",
      input:
        "A company asks about a group stay with meeting space, but has not specified catering requirements.",
      action:
        "Gather the remaining requirements, prepare a structured brief and flag availability and pricing for the sales team.",
      output:
        "A group enquiry ready for staff review, with the conversation and unanswered questions kept together.",
    },
    fitNote:
      "Choose one guest journey or internal workflow first. Reservations, sales and IT should agree the information and actions it needs.",
    useCases: [
      "Group-sales enquiry intake",
      "WhatsApp reservation requests",
      "Venue and facility enquiries",
      "Staff policy and procedure search",
    ],
    faq: [
      {
        question: "Does the system need guest or payment information?",
        answer:
          "Only access needed for the agreed task should be included. An initial knowledge-search or enquiry pilot can often operate without payment details or permission to change reservation records.",
      },
      {
        question: "Can it confirm a reservation automatically?",
        answer:
          "That depends on the booking system and agreed rules. A confirmation should be sent only after the reservation system accepts the booking. Otherwise, present it as a request for staff.",
      },
      {
        question: "Can it prepare group quotations?",
        answer:
          "It can collect requirements and prepare a draft using approved information. Availability, negotiated rates and commercial exceptions should follow the approval process set by your sales team.",
      },
      {
        question: "How do staff know a policy answer is current?",
        answer:
          "Use an approved document collection with named owners and a review process. Answers should point to their source, while outdated or conflicting material is flagged for resolution.",
      },
    ],
  },
];

export const servicePageMap = new Map(
  servicePages.map((page) => [`/${page.slug}`, page]),
);

export const commercialRoutes = [
  "/",
  ...servicePages.map((page) => `/${page.slug}`),
];
