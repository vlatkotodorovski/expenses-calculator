import React from 'react'
import './Expenses.css'
// import { NavLink } from 'react-router-dom'


export class Expenses extends React.Component {
    render() {
        return (
            <section id="expenses">
                <div className="headerNewProduct">
                    <div className="button">
                        <button className="button_products">PRODUCTS</button>
                        <button className="button_expenses">EXPENSES</button>
                    </div>
                    <div className="avatar">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Gal_Gadot_%2836165097896%29_%28cropped%29.jpg/900px-Gal_Gadot_%2836165097896%29_%28cropped%29.jpg"
                            alt="avatar" />
                        <p>Gal Gadot</p>
                    </div>
                </div>
                <div className="prodText_dropdown">
                    <div className="prodText">
                        <h1>Expenses</h1>
                    </div>
                </div>
                <div className="tabs-form">
                    <div className="tabs">
                        <button className="active">MONTHLY</button>
                        <button className="inactive">YEARLY</button>
                    </div>

                    <div className="prod_dropdown exps">
                        <label htmlFor="">Choose Month</label>
                        <form>
                            <select>
                                <option value="january">January</option>
                                <option value="february">February</option>
                                <option value="march">March</option>
                                <option value="april">April</option>
                                <option value="may">May</option>
                                <option value="june">June</option>
                                <option value="july">July</option>
                                <option value="august">August</option>
                                <option value="september">September</option>
                                <option value="october">October</option>
                                <option value="november">November</option>
                                <option value="december">December</option>
                            </select>
                        </form>
                    </div>

                </div>
                <div className="table-container">
                    <table className="table">
                        <thead className="table-header">
                            <tr>
                                <th>Product Name</th>
                                <th>Product Type</th>
                                <th>Product Descrtiption</th>
                                <th>Purchase Date</th>
                                <th>Product Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="table-body">
                            <tr className="table-row">
                                <td>Coca Cola</td>
                                <td>Drink</td>
                                <td>carbonated soft drink</td>
                                <td>29/04/2019</td>
                                <td>75</td>
                                <td></td>
                            </tr>
                        </tbody>
                        <tbody className="table-body">
                            <tr className="table-row">
                                <td>Coca Cola</td>
                                <td>Drink</td>
                                <td>carbonated soft drink</td>
                                <td>29/04/2019</td>
                                <td>75</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="fixed-text-price">
                        <p>Total Spent: 1205 den.</p>
                    </div>
                </div>
            </section>

        )
    }
}