function StatusBadge({ status }) {

    const value = status?.toLowerCase();

    return (
        <span className={`status-badge ${value}`}>

            <span className="status-dot"></span>

            {status}

        </span>
    );
}

export default StatusBadge;
