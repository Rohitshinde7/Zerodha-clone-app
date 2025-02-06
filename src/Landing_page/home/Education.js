import React from 'react';

function Education() {
    return (
        <div className="container p-5">
        <div className="row">
          <div className="col"> 
            <img style={{width:"70%"}} src='media/images/education.svg'></img>
          </div>
            
        
          <div className="col"> 
            <h1 className='text-muted'  >Free and open market education</h1>
            <p className=' text-muted mt-4 fs-5'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
            <a style={{ textDecoration: "none" }} className=" mt-5 fs-5" href="">
              {" "}
              Varsity{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>

            <p className='text-muted mt-5 fs-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
            <a style={{ textDecoration: "none" }} className="mt-5 fs-5" href="">
              {" "}
              TradingQ&A {" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      );
}

export default Education;