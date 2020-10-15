import React from 'react';
import frame from '../../../logos/Frame.png';

const HeaderMain = () => {
    return (
        <main style={{height:'500px'}} className="row d-flex align-items-center">
        <div className="col-md-4 offset-md-2">
            <h1 style={{color: '#3A4256'}}>Let's Grow Your <br/> Brand To The <br/> Next Level </h1>
            <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
            <button className="btn btn-dark">Hire Us</button>
        </div>
        <div className="col-md-6">
            <img style={{width:'450px',}} src={frame} alt="" className="img-fluid mb-5"/>
        </div>
    </main>
    );
};

export default HeaderMain;