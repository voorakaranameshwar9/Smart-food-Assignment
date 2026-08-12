import {
    Bell,
    Search,
    UserCircle
} from "lucide-react";

function Topbar() {

    return (
        <header className="topbar">

            <div className="top-search">
                <Search size={18} />

                <input
                    placeholder="Search suppliers or queries..."
                />
            </div>

            <div className="top-actions">

                <button className="icon-button">
                    <Bell size={19} />
                    <span className="notification-dot"></span>
                </button>

                <div className="user">

                    <div className="user-avatar">
                        QA
                    </div>

                    <div>
                        <strong>QA Manager</strong>
                        <span>Food Safety Team</span>
                    </div>

                </div>

            </div>

        </header>
    );
}

export default Topbar;
