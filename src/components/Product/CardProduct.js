import React from 'react'
const foods = require.context( '../../assets/img/comida/', true )

function Card ( props ) {

    const { product } = props
    
    return (
        <div className="col-md-4 p-2">
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    <h3>{ product.name }</h3>
                </div>
                <div className='row-md-4'>
                    <img src={ foods( `./${ product.photo }` ) } alt="not found" className='rounded d-block img-product card-img-top' />
                </div>
                <div className="card-body">
                    <div className="row ms-auto">
                        <div className="col">
                            <p>Precio: { product.price }</p>
                        </div>
                        <div className="col">
                            <p>Disponible: { product.quantity }</p>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <button
                        className="btn btn-primary" >
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;