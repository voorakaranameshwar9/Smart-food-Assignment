import {
    Check,
    Send,
    Clock3,
    CheckCircle2
} from "lucide-react";

function QueryTimeline({ resolved, query }) {

    return (
        <div className="timeline">

            <TimelineItem
                icon={<Check size={15} />}
                title="Query created"
                text={new Date(query.submittedAt).toLocaleString()}
                done={true}
            />

            <TimelineItem
                icon={<Send size={15} />}
                title="Sent to supplier"
                text="Query delivered successfully"
                done={true}
            />

            <TimelineItem
                icon={<Clock3 size={15} />}
                title="Supplier response"
                text={resolved ? "Response received" : "Waiting for supplier response"}
                done={resolved}
            />

            <TimelineItem
                icon={<CheckCircle2 size={15} />}
                title="QA review"
                text={resolved ? "Query resolved" : "Waiting for response"}
                done={resolved}
                last={true}
            />

        </div>
    );
}

function TimelineItem({ icon, title, text, done, last }) {

    return (
        <div className={`timeline-item ${done ? "done" : ""}`}>

            <div className="timeline-icon">
                {icon}
            </div>

            <div className="timeline-content">
                <strong>{title}</strong>
                <p>{text}</p>
            </div>

            {!last && <div className="timeline-line"></div>}

        </div>
    );
}

export default QueryTimeline;
