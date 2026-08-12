import { useEffect, useState } from "react";

import {
    Search,
    Plus,
    ArrowUpRight,
    MapPin
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatusBadge from "../components/StatusBadge";

function Suppliers() {

    const [suppliers, setSuppliers] = useState([]);
    const [queries, setQueries] = useState([]);
    const [search, setSearch] = useState("");

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

    function getQueries(id) {
        return queries.filter(q => q.supplier.id === id);
    }

    function getStatus(id) {

        const list = getQueries(id);

        if (list.length === 0) {
            return "NO QUERY";
        }

        if (list.some(q => q.status === "PENDING")) {
            return "PENDING";
        }

        return "RESOLVED";
    }

    const filtered = suppliers.filter(supplier =>
        supplier.name.toLowerCase().includes(search.toLowerCase()) ||
        supplier.category.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <div className="layout">

            <Sidebar />

            <main className="main">

                <Topbar />

                <section className="content suppliers-bg">

                    <div className="page-title">

                        <div>

                            <div className="eyebrow-row">
                                SUPPLIER NETWORK
                            </div>

                            <h1>Suppliers</h1>

                            <p>
                                Manage supplier relationships
                                and monitor food safety communication.
                            </p>

                        </div>

                        <button
                            className="primary-button"
                            onClick={() => navigate("/raise-query")}
                        >
                            <Plus size={18} />
                            Raise Query
                        </button>

                    </div>

                    <div className="filter-bar">

                        <div className="search-box">

                            <Search size={18} />

                            <input
                                placeholder="Search suppliers..."
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                            />

                        </div>

                        <select>
                            <option>All Status</option>
                            <option>Pending</option>
                            <option>Resolved</option>
                        </select>

                        <select>
                            <option>All Categories</option>
                            <option>Ingredients</option>
                            <option>Bakery</option>
                            <option>Produce</option>
                        </select>

                    </div>

                    <div className="supplier-grid">

                        {filtered.map(supplier => {

                            const supplierQueries = getQueries(supplier.id);

                            return (

                                <div
                                    className="supplier-card"
                                    key={supplier.id}
                                >

                                    <div className="supplier-top">

                                        <div className="supplier-avatar">
                                            {supplier.name.charAt(0)}
                                        </div>

                                        <StatusBadge status={getStatus(supplier.id)} />

                                    </div>

                                    <h3>{supplier.name}</h3>

                                    <p>{supplier.category}</p>

                                    <div className="supplier-location">
                                        <MapPin size={15} />
                                        {supplier.location}
                                    </div>

                                    <div className="supplier-meta">

                                        <span>
                                            {supplier.contactPerson}
                                        </span>

                                        <strong>
                                            {supplierQueries.length} Queries
                                        </strong>

                                    </div>

                                    <button
                                        className="outline-button"
                                        onClick={() =>
                                            navigate(
                                                `/raise-query?supplier=${supplier.id}`
                                            )
                                        }
                                    >
                                        Raise Query
                                        <ArrowUpRight size={16} />
                                    </button>

                                </div>

                            );

                        })}

                    </div>

                </section>

            </main>

        </div>
    );
}

export default Suppliers;
