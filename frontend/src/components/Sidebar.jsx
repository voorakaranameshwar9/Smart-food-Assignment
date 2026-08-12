import {
    LayoutDashboard,
    Building2,
    MessageSquare,
    BarChart3,
    Settings,
    ShieldCheck
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar() {

    return (
        <aside className="sidebar">

            <div className="brand">

                <div className="brand-icon">
                    <ShieldCheck size={23} />
                </div>

                <div>
                    <strong>FoodSafe</strong>
                    <span>QA Command Center</span>
                </div>

            </div>

            <div className="nav-title">
                WORKSPACE
            </div>

            <nav>

                <NavLink to="/">
                    <LayoutDashboard size={18} />
                    Dashboard
                </NavLink>

                <NavLink to="/suppliers">
                    <Building2 size={18} />
                    Suppliers
                </NavLink>

                <NavLink to="/raise-query">
                    <MessageSquare size={18} />
                    Queries
                </NavLink>

                <NavLink to="#">
                    <BarChart3 size={18} />
                    Analytics
                </NavLink>

            </nav>

            <div className="sidebar-bottom">

                <NavLink to="#">
                    <Settings size={18} />
                    Settings
                </NavLink>

                <div className="security-card">
                    <ShieldCheck size={18} />

                    <div>
                        <strong>Food Safety</strong>
                        <span>Compliance active</span>
                    </div>
                </div>

            </div>

        </aside>
    );
}

export default Sidebar;
