import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/viewstyle.css'
export default function View() {
  return (
    <main className='container'>
        <div className="cardd mt-3 border p-1 w-75">
            <section className='sec1 w-50'>
                <img className='fitimg w-100' src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/c/8/u/-original-imagsn6q3wzzdcfu.jpeg?q=70" alt="" />
            </section>
            <section className='sec2 w-50 d-flex flex-column justify-content-center align-items-center'>
                <h2 className='pt-2'>Men Shoes</h2>
                <h3 className='pt-2'>Price: $23</h3>

                <button className='btn btn-dark pt-2 pb-2 w-25'>ADD</button>
            </section>
        </div>
    </main>
  )
}
