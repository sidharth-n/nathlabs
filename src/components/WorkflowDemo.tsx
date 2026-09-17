import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  FileText,
  GitBranch,
  MessageCircle,
  UserRound,
} from "lucide-react";

const examples = [
  {
    label: "Enquiries",
    Icon: MessageCircle,
    source: "New WhatsApp enquiry",
    message: "Hi, can I book a viewing this weekend?",
    fields: ["Request", "Property viewing", "Preferred time", "This weekend"],
    action: "Match the right agent",
    result: "Enquiry added to your CRM",
    note: "Your team takes the conversation from here.",
  },
  {
    label: "Documents",
    Icon: FileText,
    source: "Supplier invoice received",
    message: "An invoice arrives as a PDF attachment.",
    fields: [
      "Document",
      "Supplier invoice",
      "Next step",
      "Check required fields",
    ],
    action: "Flag anything missing",
    result: "Draft ready for review",
    note: "Your finance team approves before posting.",
  },
  {
    label: "Operations",
    Icon: GitBranch,
    source: "Customer request received",
    message: "Could you send an update on our order?",
    fields: ["Request", "Order status", "Source", "Your order system"],
    action: "Find the latest status",
    result: "Reply ready for your team",
    note: "Unclear requests go to a person.",
  },
];

export default function WorkflowDemo() {
  const [selected, setSelected] = useState(0);
  const item = examples[selected];
  return (
    <div className="workflow-demo">
      <div className="demo-top">
        <span>
          <span className="status-dot" /> A connected workflow
        </span>
        <span className="demo-caption">Illustrative example</span>
      </div>
      <div
        className="demo-tabs"
        role="group"
        aria-label="Choose an example workflow"
      >
        {examples.map((ex, i) => (
          <button
            key={ex.label}
            type="button"
            aria-pressed={selected === i}
            onClick={() => setSelected(i)}
          >
            <ex.Icon size={15} />
            {ex.label}
          </button>
        ))}
      </div>
      <div className="demo-canvas" key={selected}>
        <div className="demo-node input-node">
          <div className="node-title">
            <span className="node-icon">
              <item.Icon size={18} />
            </span>
            {item.source}
            <span className="node-step">01</span>
          </div>
          <p className="message-bubble">{item.message}</p>
        </div>
        <div className="connector">
          <span />
          <ArrowDown size={14} />
        </div>
        <div className="demo-node process-node">
          <div className="node-title">
            <img src="/logo.svg" width="26" height="26" alt="" />
            {item.action}
            <span className="node-step">02</span>
          </div>
          <dl>
            {[0, 2].map((i) => (
              <div key={i}>
                <dt>{item.fields[i]}</dt>
                <dd>{item.fields[i + 1]}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="connector">
          <span />
          <ArrowDown size={14} />
        </div>
        <div className="demo-node result-node">
          <span className="result-check">
            <Check size={18} />
          </span>
          <div>
            <strong>{item.result}</strong>
            <span>Ready for a person to take over</span>
          </div>
          <UserRound size={18} />
        </div>
      </div>
      <div className="demo-footer">
        <span>{item.note}</span>
        <ArrowUpRight size={16} />
      </div>
    </div>
  );
}
