import React from 'react';
import styled from 'styled-components';

import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Container = styled.div `
    margin-top: 64px;
    margin-left: 64px;
`

export default ({children}) => (
    <>
        <Sidebar />
        <Navbar />
        <Container>
            {children}
        </Container>
    </>
)