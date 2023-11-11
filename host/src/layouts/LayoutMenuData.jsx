import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'

//Import Icons
import FeatherIcon from "feather-icons-react";

const Navdata = () => {
    const router = useRouter();
    //state data
    const [isDashboard, setIsDashboard] = useState(false);
    const [isApiBam, setIsApiBam] = useState(false);
    const [isTraining, setIsTraining] = useState(false);

    const [iscurrentState, setIscurrentState] = useState('dashboard');

    function updateIconSidebar(e) {
        if (e && e.target && e.target.getAttribute("subitems")) {
            const ul = document.getElementById("two-column-menu");
            const iconItems = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
                var id = item.getAttribute("subitems");
                if (document.getElementById(id))
                    document.getElementById(id).classList.remove("show");
            });
        }
    }

    useEffect(() => {
        document.body.classList.remove('twocolumn-panel');
        if (iscurrentState !== 'dashboard') {
            setIsDashboard(false);
        }
        if (iscurrentState !== 'apibam') {
            setIsApiBam(false);
        }
        if (iscurrentState !== 'training') {
            setIsTraining(false);
        }
    }, [
        router,
        iscurrentState,
        isDashboard,
        isApiBam,
        isTraining
    ]);

    const menuItems = [
        {
            label: "Menu",
            isHeader: true,
        },
        {
            id: "dashboard",
            label: "Dashboards",
            icon: <FeatherIcon icon="home" className="icon-dual" />,
            link: "/#",
            stateVariables: isDashboard,
            click: function (e) {
                e.preventDefault();
                setIsDashboard(!isDashboard);
                setIscurrentState('dashboard');
                updateIconSidebar(e);
            },
            subItems: [
                {
                    id: "analytics",
                    label: "Analytics",
                    link: "/dashboard-analytics",
                    parentId: "dashboard",
                },

            ],
        },
        {
            label: "API BAM",
            isHeader: true,
        },
        {
            id: "apibam",
            label: "API BAM",
            icon: <FeatherIcon icon="share-2" className="icon-dual" />,
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsApiBam(!isApiBam);
                setIscurrentState('apibam');
                updateIconSidebar(e);
            },
            stateVariables: isApiBam,
            subItems: [
                { id: "dashboard", label: "Dashboard", link: "/apibam/dashboard", parentId: "apibam" },
                { id: "clients", label: "Clients", link: "/apibam/clients", parentId: "apibam" },
                { id: "modules", label: "Modules", link: "/apibam/modules", parentId: "apibam" },
                { id: "logs", label: "Logs", link: "/apibam/logs", parentId: "apibam" },
            ],
        },
        {
            label: "Training",
            isHeader: true,
        },
        {
            id: "training",
            label: "Training",
            icon: <FeatherIcon icon="share-2" className="icon-dual" />,
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsTraining(!isTraining);
                setIscurrentState('training');
                updateIconSidebar(e);
            },
            stateVariables: isTraining,
            subItems: [
                { id: "training", label: "Dashboard", link: "/training/", parentId: "training" },
                { id: "training-inhouse", label: "In House Training", link: "/training/inhouse", parentId: "training" },
                { id: "training-external", label: "External Training", link: "/training/external", parentId: "training" },
            ],
        },
    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;