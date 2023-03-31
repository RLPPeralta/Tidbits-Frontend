import React from 'react';
import { Navbar, Stack } from 'react-bootstrap';
import { Outlet } from 'react-router';

const Home = () => {

    return (
        <div>
            <Navbar>

            </Navbar>
            <Stack>
                <Outlet />
            </Stack>
        </div>

    )
};

export default Home;