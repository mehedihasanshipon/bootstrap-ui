import React from 'react';
import {Container, Pagination} from 'react-bootstrap'

const Paginations = () => {
    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
        {number}
        </Pagination.Item>,
    );
    }
    return (
        <Container>
            <Pagination>{items}</Pagination>
        </Container>
    );
};

export default Paginations;