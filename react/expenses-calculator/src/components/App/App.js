import React from 'react'
import {Route} from 'react-router-dom'
import {Login} from '../Login/Login'
import {Register} from '../Register/Register'
import {Portal} from '../Portal/Portal'
// import {NewProduct} from '../NewProduct/NewProduct'
// import {Products} from '../Products/Products'
// import {Expenses} from '../Expenses/Expenses'
import './App.css'

export class App extends React.Component {
    render() {
        return(
            <main id="app">
                <Route exact path = "/" component = {Login} />
                <Route path = "/register" component = {Register} />
                <Portal />
                {/* <Route path = "/new-product" component = {NewProduct} />
                <Route path = "/products" component = {Products} />
                <Route path = "/expenses" component = {Expenses} /> */}

            </main>

        )
    }
}