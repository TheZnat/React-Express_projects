import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from '../assets/star.png'
import {useNavigate} from 'react-router-dom'
import {DEVICE_ROUTE} from "../utils/constant";

const DeviceItem = ({device}) => {
    const navigate = useNavigate();
    return (
        <Col
            md={3}
            className={"mt-3"}
            onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}
        >
            <Card
                style={{width: 150, cursor: 'pointer'}}
                border={"light"}
            >
                <Image
                    width={150}
                    height={150}
                    src={process.env.REACT_APP_API_URL + device.img}
                />
                <div className="text-black-50 d-flex justify-content-between align-items-center mt-1">
                    <div>Apple..</div>
                    <div className="d-flex align-items-center">
                        {device.rating}
                        <Image
                            src={star}
                            width={17}
                            height={17}
                        />
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;