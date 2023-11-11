import React, { useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import SimpleBar from "simplebar-react";
import { usePathname } from 'next/navigation'
import { Collapse } from 'reactstrap';

// Import Data
import navdata from "./LayoutMenuData";

// redux
import { useSelector } from "react-redux";
import { createSelector } from 'reselect';

//import logo
import logoSm from "../assets/images/logo-sm.png";
import logoDark from "../assets/images/logo-dark.png";
import logoLight from "../assets/images/logo-light.png";

//Import Components
import { Container } from "reactstrap";

const Sidebar = ({ layoutType }) => {
    useEffect(() => {
        var verticalOverlay = document.getElementsByClassName("vertical-overlay");
        if (verticalOverlay) {
            verticalOverlay[0].addEventListener("click", function () {
                document.body.classList.remove("vertical-sidebar-enable");
            });
        }
    });

    const addEventListenerOnSmHoverMenu = () => {
        // add listener Sidebar Hover icon on change layout from setting
        if (document.documentElement.getAttribute('data-sidebar-size') === 'sm-hover') {
            document.documentElement.setAttribute('data-sidebar-size', 'sm-hover-active');
        } else if (document.documentElement.getAttribute('data-sidebar-size') === 'sm-hover-active') {
            document.documentElement.setAttribute('data-sidebar-size', 'sm-hover');
        } else {
            document.documentElement.setAttribute('data-sidebar-size', 'sm-hover');
        }
    };

    // left sidebar
    const navData = navdata().props.children;

    const pathname = usePathname()

    /* layout settings */
    const selectLayoutState = (state) => state.Layout;
    const selectLayoutProperties = createSelector(
        selectLayoutState,
        (layout) => ({
            leftsidbarSizeType: layout.leftsidbarSizeType,
            sidebarVisibilitytype: layout.sidebarVisibilitytype,
            layoutType: layout.layoutType
        })
    );
    // Inside your component
    const {
        leftsidbarSizeType, sidebarVisibilitytype
    } = useSelector(selectLayoutProperties);

    // vertical and semibox resize events
    const resizeSidebarMenu = useCallback(() => {
        var windowSize = document.documentElement.clientWidth;
        if (windowSize >= 1025) {
            if (document.documentElement.getAttribute("data-layout") === "vertical") {
                document.documentElement.setAttribute("data-sidebar-size", leftsidbarSizeType);
            }
            if (document.documentElement.getAttribute("data-layout") === "semibox") {
                document.documentElement.setAttribute("data-sidebar-size", leftsidbarSizeType);
            }
            var hamburgerIcon = document.querySelector(".hamburger-icon");
            if ((sidebarVisibilitytype === "show" || layoutType === "vertical" || layoutType === "twocolumn") && document.querySelector(".hamburger-icon")) {
                if (hamburgerIcon !== null) {
                    hamburgerIcon.classList.remove("open");
                }
            } else {
                if (hamburgerIcon !== null) {
                    hamburgerIcon.classList.add("open");
                }
            }

        } else if (windowSize < 1025 && windowSize > 767) {
            document.body.classList.remove("twocolumn-panel");
            if (document.documentElement.getAttribute("data-layout") === "vertical") {
                document.documentElement.setAttribute("data-sidebar-size", "sm");
            }
            if (document.documentElement.getAttribute("data-layout") === "semibox") {
                document.documentElement.setAttribute("data-sidebar-size", "sm");
            }
            if (document.querySelector(".hamburger-icon")) {
                document.querySelector(".hamburger-icon").classList.add("open");
            }
        } else if (windowSize <= 767) {
            document.body.classList.remove("vertical-sidebar-enable");
            if (document.documentElement.getAttribute("data-layout") !== "horizontal") {
                document.documentElement.setAttribute("data-sidebar-size", "lg");
            }
            if (document.querySelector(".hamburger-icon")) {
                document.querySelector(".hamburger-icon").classList.add("open");
            }
        }
    }, [leftsidbarSizeType, sidebarVisibilitytype, layoutType]);

    useEffect(() => {
        window.addEventListener("resize", resizeSidebarMenu, true);
    }, [resizeSidebarMenu]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const initMenu = () => {
            const pathName = process.env.PUBLIC_URL + pathname;
            const ul = document.getElementById("navbar-nav");
            const items = ul.getElementsByTagName("a");
            let itemsArray = [...items]; // converts NodeList to Array
            removeActivation(itemsArray);
            let matchingMenuItem = itemsArray.find((x) => {
                return x.pathname === pathName;
            });
            if (matchingMenuItem) {
                activateParentDropdown(matchingMenuItem);
            }
        };
        initMenu();
    }, [pathname, layoutType]);

    function activateParentDropdown(item) {

        item.classList.add("active");
        let parentCollapseDiv = item.closest(".collapse.menu-dropdown");

        if (parentCollapseDiv) {

            // to set aria expand true remaining
            parentCollapseDiv.classList.add("show");
            parentCollapseDiv.parentElement.children[0].classList.add("active");
            parentCollapseDiv.parentElement.children[0].setAttribute("aria-expanded", "true");
            if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")) {
                parentCollapseDiv.parentElement.closest(".collapse").classList.add("show");
                if (parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling)
                    parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.classList.add("active");
                if (parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.closest(".collapse")) {
                    parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.closest(".collapse").classList.add("show");
                    parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.closest(".collapse").previousElementSibling.classList.add("active");
                }
            }
            return false;
        }
        return false;
    }

    const removeActivation = (items) => {
        let actiItems = items.filter((x) => x.classList.contains("active"));

        actiItems.forEach((item) => {
            if (item.classList.contains("menu-link")) {
                if (!item.classList.contains("active")) {
                    item.setAttribute("aria-expanded", false);
                }
                if (item.nextElementSibling) {
                    item.nextElementSibling.classList.remove("show");
                }
            }
            if (item.classList.contains("nav-link")) {
                if (item.nextElementSibling) {
                    item.nextElementSibling.classList.remove("show");
                }
                item.setAttribute("aria-expanded", false);
            }
            item.classList.remove("active");
        });
    };
    return (
        <React.Fragment>
            <div className="app-menu navbar-menu">
                <div className="navbar-brand-box">
                    <Link href="/" className="logo logo-dark">
                        <span className="logo-sm">
                            <Image src={logoSm} alt="" height="22" />
                        </span>
                        <span className="logo-lg">
                            <Image src={logoDark} alt="" height="17" />
                        </span>
                    </Link>

                    <Link href="/" className="logo logo-light">
                        <span className="logo-sm">
                            <Image src={logoSm} alt="" height="22" />
                        </span>
                        <span className="logo-lg">
                            <Image src={logoLight} alt="" height="17" />
                        </span>
                    </Link>
                    <button
                        onClick={addEventListenerOnSmHoverMenu}
                        type="button"
                        className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
                        id="vertical-hover"
                    >
                        <i className="ri-record-circle-line"></i>
                    </button>
                </div>
                <React.Fragment>
                    <SimpleBar id="scrollbar" className="h-100">
                        <Container fluid>
                            <div id="two-column-menu"></div>
                            <ul className="navbar-nav" id="navbar-nav">
                                {/* menu Items */}
                                {(navData || []).map((item, key) => {
                                    return (
                                        <React.Fragment key={key}>
                                            {/* Main Header */}
                                            {item['isHeader'] ?
                                                <li className="menu-title"><span data-key="t-menu">{item.label}</span></li>
                                                : (
                                                    (item.subItems ? (
                                                        <li className="nav-item">
                                                            <Link
                                                                onClick={item.click}
                                                                className="nav-link menu-link"
                                                                href={item.link ? item.link : "/#"}
                                                                data-bs-toggle="collapse"
                                                            >
                                                                {item.icon} <span data-key="t-apps">{item.label}</span>
                                                            </Link>
                                                            <Collapse
                                                                className="menu-dropdown"
                                                                isOpen={item.stateVariables}
                                                                id="sidebarApps">
                                                                <ul className="nav nav-sm flex-column test">
                                                                    {/* subItms  */}
                                                                    {item.subItems && ((item.subItems || []).map((subItem, key) => (
                                                                        <React.Fragment key={key}>
                                                                            {!subItem.isChildItem ? (
                                                                                <li className="nav-item">
                                                                                    <Link
                                                                                        href={subItem.link ? subItem.link : "/#"}
                                                                                        className="nav-link"
                                                                                    >
                                                                                        {subItem.label}
                                                                                        {subItem.badgeName ?
                                                                                            <span className={"badge badge-pill bg-" + subItem.badgeColor} data-key="t-new">{subItem.badgeName}</span>
                                                                                            : null}
                                                                                    </Link>
                                                                                </li>
                                                                            ) : (
                                                                                <li className="nav-item">
                                                                                    <Link
                                                                                        onClick={subItem.click}
                                                                                        className="nav-link"
                                                                                        href="/#"
                                                                                        data-bs-toggle="collapse"
                                                                                    > {subItem.label}
                                                                                        {subItem.badgeName ?
                                                                                            <span className={"badge badge-pill bg-" + subItem.badgeColor} data-key="t-new">{subItem.badgeName}</span>
                                                                                            : null}
                                                                                    </Link>
                                                                                    <Collapse className="menu-dropdown" isOpen={subItem.stateVariables} id="sidebarEcommerce">
                                                                                        <ul className="nav nav-sm flex-column">
                                                                                            {/* child subItms  */}
                                                                                            {subItem.childItems && (
                                                                                                (subItem.childItems || []).map((childItem, key) => (
                                                                                                    <React.Fragment key={key}>
                                                                                                        {!childItem.childItems ?
                                                                                                            <li className="nav-item">
                                                                                                                <Link
                                                                                                                    href={childItem.link ? childItem.link : "/#"}
                                                                                                                    className="nav-link">
                                                                                                                    {childItem.label}
                                                                                                                </Link>
                                                                                                            </li>
                                                                                                            : <li className="nav-item">
                                                                                                                <Link href="/#" className="nav-link" onClick={childItem.click} data-bs-toggle="collapse">
                                                                                                                    {childItem.label}
                                                                                                                </Link>
                                                                                                                <Collapse className="menu-dropdown" isOpen={childItem.stateVariables} id="sidebaremailTemplates">
                                                                                                                    <ul className="nav nav-sm flex-column">
                                                                                                                        {childItem.childItems.map((subChildItem, key) => (
                                                                                                                            <li className="nav-item" key={key}>
                                                                                                                                <Link href={subChildItem.link} className="nav-link" data-key="t-basic-action">{subChildItem.label} </Link>
                                                                                                                            </li>
                                                                                                                        ))}
                                                                                                                    </ul>
                                                                                                                </Collapse>
                                                                                                            </li>
                                                                                                        }
                                                                                                    </React.Fragment>
                                                                                                ))
                                                                                            )}
                                                                                        </ul>
                                                                                    </Collapse>
                                                                                </li>
                                                                            )}
                                                                        </React.Fragment>
                                                                    ))
                                                                    )}
                                                                </ul>

                                                            </Collapse>
                                                        </li>
                                                    ) : (
                                                        <li className="nav-item">
                                                            <Link
                                                                className="nav-link menu-link"
                                                                href={item.link ? item.link : "/#"}>
                                                                {item.icon} <span>{item.label}</span>
                                                                {item.badgeName ?
                                                                    <span className={"badge badge-pill bg-" + item.badgeColor} data-key="t-new">{item.badgeName}</span>
                                                                    : null}
                                                            </Link>
                                                        </li>
                                                    ))
                                                )
                                            }
                                        </React.Fragment>
                                    );
                                })}
                            </ul>
                        </Container>
                    </SimpleBar>
                    <div className="sidebar-background"></div>
                </React.Fragment>
            </div>
            <div className="vertical-overlay"></div>
        </React.Fragment>
    );
};

export default Sidebar;
