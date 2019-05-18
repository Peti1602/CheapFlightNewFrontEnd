import React from 'react';

export default function Cheapflight({firstname, lastname}) {
        return (
            <div className="row">
                <div className="col-10 mx-auto my-2 text-center text-title">
                    <h1 className="text-capitalize text-weight-bold">
                        {firstname}
                        <strong className="text-blue">
                            {lastname}
                        </strong>
                    </h1>
                </div>
            </div>
        );
}