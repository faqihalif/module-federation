// import React from 'react'

// // reactstrap
// import {
//     Card,
//     CardBody,
//     Container,
//     Form,
//     FormGroup,
//     FormFeedback,
//     Input,
//     Label,
//     Row,
//     Col,
//     Button,
//     Nav,
//     NavItem,
//     NavLink,
//     TabContent,
//     TabPane
// } from "reactstrap";

// // components
// import BreadCrumb from '@/components/Common/BreadCrumb';

// function index() {
//     return (
//         <div className="page-content">
//             <Container fluid className="row-gap-8">
//                 <BreadCrumb title="Modules" pageTitle="API BAM" />
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maxime optio, fuga aut earum inventore adipisci dicta pariatur tenetur voluptatibus cum nihil at impedit nulla? Voluptas obcaecati iste mollitia placeat.</p>
//             </Container>
//         </div>
//     )
// }

// export default index

import { lazy } from 'react'

const index = lazy(() => import('apibam/modules'))

export default index

