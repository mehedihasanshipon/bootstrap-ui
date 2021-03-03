import React from 'react';
import {Media} from 'react-bootstrap';
import photo from '../logo.svg'

const Medias = () => {
    return (
        <Media>
        <Media.Body>
            <h5>Media Heading</h5>
            <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
            Donec lacinia congue felis in faucibus.
            </p>
        </Media.Body>
        <img
            width={100}
            height={100}
            className="ml-3"
            src={photo}
            alt="Generic placeholder"
        />
        </Media>
    );
};

export default Medias;