// reactjs
import React, { useState } from 'react'

// layout
import Layout from '@/layouts'

// reactstrap
import {
    Container,
} from "reactstrap";

// components
import BreadCrumb from '@/components/common/BreadCrumb';

function index() {
    return (
        <div className="page-content">
            <Container fluid className="row-gap-8">
                <BreadCrumb title="Dashboard" pageTitle="Dashboard" />
                <div>
                    <p>This is Dashboard Page</p>
                </div>
            </Container>
        </div>
    )
}

// Render Layout
index.getLayout = page => {
    return (
        <Layout
            children={page}
        />
    )
}

export default index