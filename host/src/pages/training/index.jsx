import React, { lazy } from 'react'

const Page = lazy(() => import('training/training'))

// layout
import Layout from '@/layouts'

function index() {
    return (
        <div className="page-content">
            <Page />
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