import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const Asia = () => {
    
    let navigate = useNavigate()

    return (
        <div>

            <Button onClick={() => navigate(-1)}>Go back</Button>
        </div>

    )
};

export default Asia;