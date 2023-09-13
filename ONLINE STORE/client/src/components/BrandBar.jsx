import React, {useContext} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {Card} from "react-bootstrap";

const BrandBar = observer( () => {
    const {device} = useContext(Context);

    return (
        <div className="d-flex">
                {device.brands?.map(brand =>
                <Card
                    style={{cursor: 'pointer'}}
                    border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                    key={brand.id}
                    className="p-2"
                    onClick={() => device.setSelectedBrand(brand)}
                >

                    {brand.name}
                </Card>
                )}
        </div>
    );
});

export default BrandBar;