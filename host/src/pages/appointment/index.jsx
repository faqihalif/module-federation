// reactjs
import React, { useState, useEffect } from 'react'

// nextjs
import Link from 'next/link';

// reactstrap
import {
    Card,
    CardBody,
    Container,
    Label,
    Row,
    Col,
    Button,
} from "reactstrap";

// components
import BreadCrumb from '@/components/Common/BreadCrumb';

// full calendar
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import BootstrapTheme from "@fullcalendar/bootstrap";
import Flatpickr from "react-flatpickr";
import listPlugin from '@fullcalendar/list';

//redux
import { useSelector, useDispatch } from "react-redux";

// formik
import * as Yup from "yup";
import { useFormik } from "formik";

import {
    getEvents as onGetEvents,
    getCategories as onGetCategories,
    addNewEvent as onAddNewEvent,
    deleteEvent as onDeleteEvent,
    updateEvent as onUpdateEvent,
    resetCalendar,
} from "@/slices/thunks";
import { createSelector } from "reselect";

function index() {
    const dispatch = useDispatch();
    const [event, setEvent] = useState({});
    const [modal, setModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [selectedDay, setSelectedDay] = useState(0);
    const [selectedNewDay, setSelectedNewDay] = useState(0);
    const [isEdit, setIsEdit] = useState(false);
    const [upcommingevents, setUpcommingevents] = useState([]);
    const [isEditButton, setIsEditButton] = useState(true);

    const selectLayoutState = (state) => state.Calendar;
    const selectLayoutProperties = createSelector(
        selectLayoutState,
        (calender) => ({
            events: calender?.events,
            categories: calender?.categories,
            isEventUpdated: calender?.isEventUpdated,
        })
    );
    // Inside your component
    const {
        events, categories, isEventUpdated
    } = useSelector(selectLayoutProperties);

    // useEffect(() => {
    //     dispatch(onGetEvents());
    //     dispatch(onGetCategories());
    //     new Draggable(document.getElementById("external-events"), {
    //         itemSelector: ".external-event",
    //     });
    // }, [dispatch]);

    useEffect(() => {
        setUpcommingevents(events);
        Object.entries(upcommingevents).sort((o1, o2) => {
            return new Date(o1.start) - new Date(o2.start);
        });
    }, [events, upcommingevents]);

    useEffect(() => {
        if (isEventUpdated) {
            setIsEdit(false);
            setEvent({});
            setTimeout(() => {
                dispatch(resetCalendar("isEventUpdated", false));
            }, 500);
        }
    }, [dispatch, isEventUpdated]);

    /**
     * Handling the modal state
     */
    const toggle = () => {
        if (modal) {
            setModal(false);
            setEvent(null);
            setIsEdit(false);
            setIsEditButton(true);
        } else {
            setModal(true);
        }
    };
    /**
     * Handling date click on calendar
     */

    const handleDateClick = (arg) => {
        const date = arg["date"];
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();

        const currectDate = new Date();
        const currentHour = currectDate.getHours();
        const currentMin = currectDate.getMinutes();
        const currentSec = currectDate.getSeconds();
        const modifiedDate = new Date(
            year,
            month,
            day,
            currentHour,
            currentMin,
            currentSec
        );

        const modifiedData = { ...arg, date: modifiedDate };

        setSelectedNewDay(date);
        setSelectedDay(modifiedData);
        toggle();
    };

    const str_dt = function formatDate(date) {
        var monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        var d = new Date(date),
            month = "" + monthNames[d.getMonth()],
            day = "" + d.getDate(),
            year = d.getFullYear();
        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;
        return [day + " " + month, year].join(",");
    };

    const date_r = function formatDate(date) {
        var d = new Date(date),
            month = "" + (d.getMonth() + 1),
            day = "" + d.getDate(),
            year = d.getFullYear();
        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;
        return [year, month, day].join("-");
    };

    /**
     * Handling click on event on calendar
     */
    const handleEventClick = (arg) => {
        const event = arg.event;

        const st_date = event.start;
        const ed_date = event.end;
        const r_date =
            ed_date == null
                ? str_dt(st_date)
                : str_dt(st_date) + " to " + str_dt(ed_date);
        const er_date =
            ed_date == null
                ? date_r(st_date)
                : date_r(st_date) + " to " + date_r(ed_date);

        setEvent({
            id: event.id,
            title: event.title,
            start: event.start,
            end: event.end,
            className: event.classNames,
            category: event.classNames[0],
            location: event._def.extendedProps.location,
            description: event._def.extendedProps.description,
            defaultDate: er_date,
            datetag: r_date,
        });

        setIsEdit(true);
        setIsEditButton(false);
        toggle();
    };
    /**
     * On delete event
     */
    const handleDeleteEvent = () => {
        dispatch(onDeleteEvent(event.id));
        setDeleteModal(false);
        toggle();
    };

    // events validation
    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            title: (event && event.title) || "",
            category: (event && event.category) || "",
            location: (event && event.location) || "",
            description: (event && event.description) || "",
            defaultDate: (event && event.defaultDate) || "",
            datetag: (event && event.datetag) || "",
        },

        validationSchema: Yup.object({
            title: Yup.string().required("Please Enter Your Event Name"),
            category: Yup.string().required("Please Select Your Category"),
        }),
        onSubmit: (values) => {
            var updatedDay = "";
            if (selectedNewDay) {
                updatedDay = new Date(selectedNewDay[1]);
                updatedDay.setDate(updatedDay.getDate() + 1);
            }

            if (isEdit) {
                const updateEvent = {
                    id: event.id,
                    title: values.title,
                    className: values.category,
                    start: selectedNewDay ? selectedNewDay[0] : event.start,
                    end: selectedNewDay ? updatedDay : event.end,
                    location: values.location,
                    description: values.description,
                };
                // update event
                dispatch(onUpdateEvent(updateEvent));
                validation.resetForm();
            } else {
                const newEvent = {
                    id: Math.floor(Math.random() * 100),
                    title: values["title"],
                    start: selectedDay ? selectedNewDay[0] : new Date(),
                    end: selectedDay ? updatedDay : new Date(),
                    className: values.category,
                    location: values["location"],
                    description: values["description"],
                };
                // save new event
                dispatch(onAddNewEvent(newEvent));
                validation.resetForm();
            }
            setSelectedDay(null);
            setSelectedNewDay(null);
            toggle();
        },
    });

    const submitOtherEvent = () => {
        document.getElementById("form-event").classList.remove("view-event");

        document
            .getElementById("event-title")
            .classList.replace("d-none", "d-block");
        document
            .getElementById("event-category")
            .classList.replace("d-none", "d-block");
        document
            .getElementById("event-start-date")
            .parentNode.classList.remove("d-none");
        document
            .getElementById("event-start-date")
            .classList.replace("d-none", "d-block");
        document
            .getElementById("event-location")
            .classList.replace("d-none", "d-block");
        document
            .getElementById("event-description")
            .classList.replace("d-none", "d-block");
        document
            .getElementById("event-start-date-tag")
            .classList.replace("d-block", "d-none");
        document
            .getElementById("event-location-tag")
            .classList.replace("d-block", "d-none");
        document
            .getElementById("event-description-tag")
            .classList.replace("d-block", "d-none");
        // document.getElementById("btn-save-event").removeAttribute("hidden");
        setIsEditButton(true);
    };

    /**
     * On category darg event
     */
    const onDrag = (event) => {
        event.preventDefault();
    };

    /**
     * On calendar drop event
     */
    const onDrop = (event) => {
        const date = event["date"];
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();

        const currectDate = new Date();
        const currentHour = currectDate.getHours();
        const currentMin = currectDate.getMinutes();
        const currentSec = currectDate.getSeconds();
        const modifiedDate = new Date(
            year,
            month,
            day,
            currentHour,
            currentMin,
            currentSec
        );

        const draggedEl = event.draggedEl;
        const draggedElclass = draggedEl.className;
        if (
            draggedEl.classList.contains("external-event") &&
            draggedElclass.indexOf("fc-event-draggable") === -1
        ) {
            const modifiedData = {
                id: Math.floor(Math.random() * 1000),
                title: draggedEl.innerText,
                start: modifiedDate,
                className: draggedEl.className,
            };
            dispatch(onAddNewEvent(modifiedData));
        }
    };

    return (
        <div className="page-content">
            <Container fluid className="row-gap-8">
                <BreadCrumb title="Schedules" pageTitle="Appointment" />
                {/* filter */}
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <Row className="align-items-end">
                                    <Col>
                                        <Label>Patient ID</Label>
                                        <select className="form-select">
                                            <option value="">JEC @ Kedoya</option>
                                            <option value="">JEC @ Kedoya</option>
                                            <option value="">JEC @ Kedoya</option>
                                            <option value="">JEC @ Kedoya</option>
                                            <option value="">JEC @ Kedoya</option>
                                            <option value="">JEC @ Kedoya</option>
                                            <option value="">JEC @ Kedoya</option>
                                            <option value="">JEC @ Kedoya</option>
                                            <option value="">JEC @ Kedoya</option>
                                            <option value="">JEC @ Kedoya</option>
                                            <option value="">JEC @ Kedoya</option>
                                        </select>
                                    </Col>
                                    <Col>
                                        <Label>Policlinic</Label>
                                        <select className="form-select">
                                            <option value="">Eye Check</option>
                                            <option value="">Eye Check</option>
                                            <option value="">Eye Check</option>
                                            <option value="">Eye Check</option>
                                            <option value="">Eye Check</option>
                                            <option value="">Eye Check</option>
                                            <option value="">Eye Check</option>
                                            <option value="">Eye Check</option>
                                            <option value="">Eye Check</option>
                                            <option value="">Eye Check</option>
                                        </select>
                                    </Col>
                                    <Col>
                                        <Label>Doctor</Label>
                                        <select className="form-select">
                                            <option value="">Dr. Rini Sulastiwaty, SpM</option>
                                            <option value="">Dr. Rini Sulastiwaty, SpM</option>
                                            <option value="">Dr. Rini Sulastiwaty, SpM</option>
                                            <option value="">Dr. Rini Sulastiwaty, SpM</option>
                                            <option value="">Dr. Rini Sulastiwaty, SpM</option>
                                            <option value="">Dr. Rini Sulastiwaty, SpM</option>
                                            <option value="">Dr. Rini Sulastiwaty, SpM</option>
                                            <option value="">Dr. Rini Sulastiwaty, SpM</option>
                                            <option value="">Dr. Rini Sulastiwaty, SpM</option>
                                        </select>
                                    </Col>
                                    <Col>
                                        <Button color="primary" type="Button">Filter</Button>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                {/* calendar */}
                <Row>
                    <Col>
                        <Card>
                            <Row>
                                <Col>
                                    <FullCalendar
                                        plugins={[
                                            BootstrapTheme,
                                            dayGridPlugin,
                                            interactionPlugin,
                                            listPlugin
                                        ]}
                                        initialView="dayGridMonth"
                                        slotDuration={"00:15:00"}
                                        handleWindowResize={true}
                                        themeSystem="bootstrap"
                                        headerToolbar={{
                                            left: "prev,next today",
                                            center: "title",
                                            right: "dayGridMonth,dayGridWeek,dayGridDay,listWeek",
                                        }}
                                        events={events}
                                        editable={true}
                                        droppable={true}
                                        selectable={true}
                                        dateClick={handleDateClick}
                                        eventClick={handleEventClick}
                                        drop={onDrop}
                                    />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default index