import { useEffect, useState } from "react";

import {
    Building2,
    Clock3,
    CheckCircle2,
    AlertTriangle,
    Plus,
    ArrowUpRight,
    ShieldCheck
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatusBadge from "../components/StatusBadge";

function Dashboard() {

    const [suppliers, setSuppliers] = useState([]);
    const [queries, setQueries] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {

        fetch("http://localhost:8080/api/suppliers")
            .then(response => response.json())
            .then(data => setSuppliers(data))
            .catch(() => {});

        fetch("http://localhost:8080/api/queries")
            .then(response => response.json())
            .then(data => setQueries(data))
            .catch(() => {});

    }, []);

    const pending = queries.filter(q => q.status === "PENDING").length;

    const resolved = queries.filter(q => q.status === "RESOLVED").length;

    return (

        <div className="layout">

            <Sidebar />

            <main className="main">

                <Topbar />

                <section className="content hero-background food-pattern-bg">

                    <div className="welcome">

                        <div>

                            <div className="eyebrow-row">
                                <span className="live-dot"></span>
                                SYSTEM OPERATIONAL
                            </div>

                            <h1>
                                Supplier Safety
                                <span> Command Center</span>
                            </h1>

                            <p>
                                Monitor supplier communication,
                                food safety queries and compliance
                                from one secure workspace.
                            </p>

                        </div>

                        <button
                            className="primary-button"
                            onClick={() => navigate("/raise-query")}
                        >
                            <Plus size={18} />
                            New Query
                        </button>

                    </div>

                    <div className="stats-grid">

                        <StatCard
                            icon={<Building2 />}
                            title="Total Suppliers"
                            value={suppliers.length}
                            text="Active suppliers"
                        />

                        <StatCard
                            icon={<Clock3 />}
                            title="Pending Queries"
                            value={pending}
                            text="Awaiting response"
                        />

                        <StatCard
                            icon={<CheckCircle2 />}
                            title="Resolved"
                            value={resolved}
                            text="Successfully closed"
                        />

                        <StatCard
                            icon={<AlertTriangle />}
                            title="Attention"
                            value="0"
                            text="Requires action"
                        />

                    </div>

                    <div className="section-heading">

                        <div>
                            <h2>Recent Queries</h2>
                            <p>Latest supplier safety requests</p>
                        </div>

                        <button
                            className="text-button"
                            onClick={() => navigate("/suppliers")}
                        >
                            View all
                            <ArrowUpRight size={16} />
                        </button>

                    </div>

                    <div className="query-table">

                        {queries.length === 0 ? (

                            <div className="empty-state">

                                <div className="empty-icon">
                                    <ShieldCheck size={25} />
                                </div>

                                <h3>No queries yet</h3>

                                <p>
                                    Raise your first supplier
                                    safety query to get started.
                                </p>

                                <button
                                    className="primary-button"
                                    onClick={() => navigate("/raise-query")}
                                >
                                    <Plus size={17} />
                                    Create Query
                                </button>

                            </div>

                        ) : (

                            queries.slice(0, 6).map(query => (

                                <div
                                    className="query-row"
                                    key={query.id}
                                    onClick={() => navigate(`/query/${query.id}`)}
                                >

                                    <div className="query-info">

                                        <div className="query-avatar">
                                            {query.supplier.name.charAt(0)}
                                        </div>

                                        <div>
                                            <strong>{query.subject}</strong>
                                            <span>{query.supplier.name}</span>
                                        </div>

                                    </div>

                                    <div className="query-type">
                                        {query.type}
                                    </div>

                                    <StatusBadge status={query.status} />

                                    <ArrowUpRight size={17} />

                                </div>

                            ))

                        )}

                    </div>

                </section>

            </main>

        </div>
    );
}

function StatCard({ icon, title, value, text }) {

    return (

        <div className="stat-card">

            <div className="stat-icon">
                {icon}
            </div>

            <span>{title}</span>

            <strong>{value}</strong>

            <small>{text}</small>

        </div>
    );
}

export default Dashboard;
