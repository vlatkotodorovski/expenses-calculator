import React from 'react'
import { Products } from '../Products/Products';
import { Expenses } from '../Expenses/Expenses';
import { NewProduct } from '../NewProduct/NewProduct';
import {Route} from 'react-router-dom'
// import {Header} from '../Header/Header'


export class Portal extends React.Component {
    render() {
        return (
            <div>
                {/* <Header /> */}
                <Route path = "/new-product" component = {NewProduct} />
                <Route path = "/products" component = {Products} />
                <Route path = "/expenses" component = {Expenses} />
            </div>

        )
    }
}