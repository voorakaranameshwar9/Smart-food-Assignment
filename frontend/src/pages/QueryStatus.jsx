import { useEffect, useState } from "react";

import {
    ArrowLeft,
    CheckCircle2,
    Clock3
} from "lucide-react";

import {
    useNavigate,
    useParams
} from "react-router-dom";

import StatusBadge from "../components/StatusBadge";
import QueryTimeline from "../components/QueryTimeline";

function QueryStatus() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [query, setQuery] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        fetch(`http://localhost:8080/api/queries/${id}`)
            .then(response => response.json())
            .then(data => setQuery(data))
            .catch(() => {});

    }, [id]);

    async function resolveQuery() {

        setLoading(true);

        try {

            const response = await fetch(
                `http://localhost:8080/api/queries/${id}/resolve`,
                {
                    method: "PUT"
                }
            );

            const data = await response.json();

            setQuery(data);

        } finally {

            setLoading(false);

        }
    }

    if (!query) {

        return (
            <div className="loading-page">
                <div className="loader"></div>
                Loading query...
            </div>
        );

    }

    const resolved = query.status === "RESOLVED";

    return (

        <div className="status-page">

            <div className="status-container">

                <button
                    className="back-link"
                    onClick={() => navigate("/suppliers")}
                >
                    <ArrowLeft size={17} />
                    Back to suppliers
                </button>

                <div className="status-hero">

                    <div>

                        <span className="query-number">
                            QUERY #{query.id}
                        </span>

                        <h1>{query.subject}</h1>

                        <p>
                            {query.supplier.name}
                            {"  ·  "}
                            {query.supplier.category}
                        </p>

                    </div>

                    <StatusBadge status={query.status} />

                </div>

                <div className="status-layout">

                    <div>

                        <div className="white-card">

                            <div className="card-title">
                                <h2>Query details</h2>
                            </div>

                            <div className="detail-grid">

                                <Detail
                                    label="Category"
                                    value={query.type}
                                />

                                <Detail
                                    label="Priority"
                                    value={query.priority}
                                />

                                <Detail
                                    label="Submitted"
                                    value={
                                        new Date(
                                            query.submittedAt
                                        ).toLocaleString()
                                    }
                                />

                                <Detail
                                    label="Due date"
                                    value={query.dueDate}
                                />

                            </div>

                        </div>

                        <div className="white-card question-card">

                            <span className="query-number">
                                QUESTION
                            </span>

                            <p>{query.question}</p>

                        </div>

                    </div>

                    <div className="white-card">

                        <div className="card-title">

                            <h2>Query progress</h2>

                            <Clock3 size={18} />

                        </div>

                        <QueryTimeline
                            resolved={resolved}
                            query={query}
                        />

                    </div>

                </div>

                {!resolved && (

                    <button
                        className="resolve-large"
                        onClick={resolveQuery}
                        disabled={loading}
                    >
                        <CheckCircle2 size={19} />

                        {loading
                            ? "Resolving..."
                            : "Mark as Resolved"
                        }

                    </button>

                )}

                {resolved && (

                    <div className="resolved-banner">

                        <CheckCircle2 size={20} />

                        Query successfully resolved.

                    </div>

                )}

            </div>

        </div>
    );
}

function Detail({ label, value }) {

    return (

        <div className="detail">

            <span>{label}</span>

            <strong>{value}</strong>

        </div>
    );
}

export default QueryStatus;
