import { useEffect, useState } from "react";

import {
    Send,
    ArrowLeft,
    ShieldCheck,
    FileText
} from "lucide-react";

import {
    useNavigate,
    useSearchParams
} from "react-router-dom";

function RaiseQuery() {

    const navigate = useNavigate();

    const [searchParams] = useSearchParams();

    const [suppliers, setSuppliers] = useState([]);

    const [supplierId, setSupplierId] = useState("");
    const [type, setType] = useState("Allergen Information");
    const [subject, setSubject] = useState("");
    const [question, setQuestion] = useState("");
    const [priority, setPriority] = useState("Medium");
    const [dueDate, setDueDate] = useState("");

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        fetch("http://localhost:8080/api/suppliers")
            .then(response => response.json())
            .then(data => {

                setSuppliers(data);

                const selected = searchParams.get("supplier");

                if (selected) {
                    setSupplierId(selected);
                }

            })
            .catch(() => {});

    }, []);

    async function submitQuery(event) {

        event.preventDefault();

        setLoading(true);

        try {

            const response = await fetch(
                "http://localhost:8080/api/queries",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        supplierId: Number(supplierId),
                        subject,
                        question,
                        type,
                        priority,
                        dueDate
                    })
                }
            );

            if (!response.ok) {
                throw new Error("Failed");
            }

            const data = await response.json();

            navigate(`/query/${data.id}`);

        } catch (error) {

            alert(
                "Backend is not running or the query could not be submitted."
            );

        } finally {

            setLoading(false);

        }
    }

    return (

        <div className="form-page">

            <div className="form-container">

                <button
                    className="back-link"
                    onClick={() => navigate(-1)}
                >
                    <ArrowLeft size={17} />
                    Back
                </button>

                <div className="form-heading">

                    <div className="form-icon">
                        <ShieldCheck size={26} />
                    </div>

                    <div className="eyebrow-row">
                        FOOD SAFETY REQUEST
                    </div>

                    <h1>Raise a new query</h1>

                    <p>
                        Request critical safety information
                        directly from your supplier.
                    </p>

                </div>

                <form
                    className="query-form"
                    onSubmit={submitQuery}
                >

                    <div className="form-section-title">
                        <FileText size={17} />
                        Query information
                    </div>

                    <div className="field">

                        <label>Supplier *</label>

                        <select
                            value={supplierId}
                            onChange={e => setSupplierId(e.target.value)}
                            required
                        >

                            <option value="">
                                Select supplier
                            </option>

                            {suppliers.map(supplier => (
                                <option
                                    key={supplier.id}
                                    value={supplier.id}
                                >
                                    {supplier.name}
                                </option>
                            ))}

                        </select>

                    </div>

                    <div className="field">

                        <label>Query category *</label>

                        <select
                            value={type}
                            onChange={e => setType(e.target.value)}
                        >
                            <option>Allergen Information</option>
                            <option>Certificate</option>
                            <option>Ingredient Safety</option>
                            <option>Microbiological Safety</option>
                            <option>Product Specification</option>
                            <option>Food Safety Compliance</option>
                            <option>Audit Documentation</option>
                            <option>Other</option>
                        </select>

                    </div>

                    <div className="field">

                        <label>Subject *</label>

                        <input
                            type="text"
                            placeholder="e.g. Request latest allergen declaration"
                            value={subject}
                            onChange={e => setSubject(e.target.value)}
                            required
                        />

                    </div>

                    <div className="field">

                        <label>Your question *</label>

                        <textarea
                            rows="6"
                            placeholder="Clearly describe the information or document you need..."
                            value={question}
                            onChange={e => setQuestion(e.target.value)}
                            required
                        />

                        <span className="helper">
                            Be specific so the supplier can respond quickly.
                        </span>

                    </div>

                    <div className="two-fields">

                        <div className="field">

                            <label>Priority *</label>

                            <select
                                value={priority}
                                onChange={e => setPriority(e.target.value)}
                            >
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                            </select>

                        </div>

                        <div className="field">

                            <label>Response due date *</label>

                            <input
                                type="date"
                                value={dueDate}
                                onChange={e => setDueDate(e.target.value)}
                                required
                            />

                        </div>

                    </div>

                    <div className="form-actions">

                        <button
                            type="button"
                            className="cancel-button"
                            onClick={() => navigate(-1)}
                        >
                            Cancel
                        </button>

                        <button
                            className="primary-button"
                            type="submit"
                            disabled={loading}
                        >
                            <Send size={17} />

                            {loading ? "Sending..." : "Send Query"}

                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default RaiseQuery;
