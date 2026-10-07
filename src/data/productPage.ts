export const productPage = {
  slug: "document-desk",
  shortName: "Document Desk",
  title: "Document Desk: AI document processing for UAE businesses",
  metaTitle: "Document Desk | AI Invoice and Contract Processing UAE | Natha Labs",
  metaDescription:
    "Document Desk turns invoices, tenancy contracts, trade licences and forms into checked records. Built on Claude by Natha Labs in Dubai. Every field links to its source page and a person approves each record.",
  eyebrow: "Document Desk · Early access · UAE",
  summary:
    "Upload invoices, contracts, licences and forms. Document Desk reads them, fills the fields you need, links every value to the page it came from and waits for your team to approve before anything reaches your accounting or CRM.",
  status:
    "Document Desk is in development at Natha Labs in Dubai. We are working with a first group of UAE businesses on real files. Request access to join them.",
  builtOn:
    "Document Desk uses Claude, the AI model from Anthropic, through the Claude API to read each document, extract fields and explain where each value came from. Totals, tax arithmetic and format checks run as fixed rules in our own code. A person approves every record before it leaves Document Desk.",
  documents: [
    {
      title: "Supplier invoices",
      description:
        "Supplier name, tax registration number, invoice number, dates, line items, VAT and totals. Checks that VAT is 5 percent where it applies and that the lines add up.",
    },
    {
      title: "Tenancy contracts",
      description:
        "Parties, property, annual rent, cheque schedule, start and end dates, and any clause your team asks for. Dates and amounts are cross-checked within the document.",
    },
    {
      title: "Trade licences and company documents",
      description:
        "Legal name, licence number, activities, issue and expiry dates for supplier and customer onboarding, with expiry flagged ahead of time.",
    },
    {
      title: "Forms and application packs",
      description:
        "Customer, employee and tenant forms, scanned or digital, in English or Arabic, turned into one record per form with missing fields listed.",
    },
  ],
  workflow: [
    {
      title: "Send the document",
      description:
        "Upload a PDF or photo, forward an email, or send it on WhatsApp. Document Desk keeps the original alongside the record.",
    },
    {
      title: "Claude reads and extracts",
      description:
        "Each field you asked for is filled in, with a link to the page and the passage it came from. Uncertain or missing values are marked, never guessed.",
    },
    {
      title: "Rules check the result",
      description:
        "Totals, tax amounts, number formats and dates are checked by fixed rules. Anything that fails is flagged for a person.",
    },
    {
      title: "Your team approves",
      description:
        "A reviewer sees the record next to the source, corrects anything that needs it and approves. Approved records go to your accounting software, CRM or a spreadsheet, with an audit trail.",
    },
  ],
  principles: [
    {
      title: "Every value shows its source",
      description:
        "Click any field and see the page and passage it came from. Nothing is accepted without a place in the original document.",
    },
    {
      title: "A person approves every record",
      description:
        "Document Desk prepares the record. Your reviewer decides. Flagged items are listed first so review time goes where it matters.",
    },
    {
      title: "Agreed data handling",
      description:
        "Access, storage, retention and the systems each record flows into are agreed in writing before live use. Documents are processed for extraction only.",
    },
  ],
  faq: [
    {
      question: "Which documents can Document Desk handle?",
      answer:
        "Supplier invoices, tenancy contracts, trade licences, company registration documents, customer and employee forms, and similar business paperwork. Both scanned and digital files work; scan quality affects results, and the review step catches what the model could not read.",
    },
    {
      question: "Does it work with Arabic documents?",
      answer:
        "Yes. Claude reads English and Arabic text, including documents that mix both. Fields are returned in the language you choose for your records.",
    },
    {
      question: "What happens when a field is unclear?",
      answer:
        "The field is marked as uncertain or missing with a note on why, and the record is routed to a reviewer. Document Desk does not fill a value it cannot find in the document.",
    },
    {
      question: "Where do approved records go?",
      answer:
        "To a spreadsheet, to accounting software such as Zoho Books, QuickBooks or Xero, or to your CRM through its API. The destination and field mapping are set up with you during onboarding.",
    },
    {
      question: "Where is my data processed and stored?",
      answer:
        "Documents are sent to the Claude API for reading and extraction and are not used to train the model. Where records and originals are stored, who can access them and how long they are kept are agreed with you in writing before live use.",
    },
    {
      question: "What does it cost?",
      answer:
        "Early-access businesses are priced per document volume, agreed in a written proposal after we have processed a sample of your real files. There is no charge for the sample.",
    },
  ],
};
