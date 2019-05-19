import React from 'react';

export default function Flight({cityfrom, cityto, start, arrive, company, price}) {
    return (
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center text-title flight">
                <h3>{cityfrom} - {cityto}</h3>
                <h3>{start} - {arrive}</h3>
                <h3>{company}</h3>
                <h1>{price}</h1>
            </div>
        </div>
    );
}