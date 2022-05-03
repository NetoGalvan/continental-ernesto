import React from 'react';

const TotalCupones = ({cupones}) => {
    return (
        <div>
            { Object(cupones).length }
        </div>
    );
};

export default TotalCupones;