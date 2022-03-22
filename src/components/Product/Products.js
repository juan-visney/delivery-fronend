import React, {useState, useEffect} from 'react'
import Card from './CardProduct'
import axios from 'axios'

function Products (  ) {

    const [ products, setProducts ] = useState( [] )
    
    const getProducts = async () => {
        await axios.get( 'http://188.166.107.165/api' )
            .then( res => {
                setProducts( res.data )
            }, err => {
                console.log( err )
            } )
    }

    useEffect( () => {
        getProducts()
    }, [] )

    return (
        <div className="row">
            {    
                products.map( product => (
                    <Card
                        key={ product.idProduct }
                        product={ product } />
                ) )
            }
               
        </div>
    );
}

export default Products;