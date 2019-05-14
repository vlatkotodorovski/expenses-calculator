import React from 'react'
import './Products.css'
// import { NavLink } from 'react-router-dom'


export class Products extends React.Component {
    render() {
        return (
            <section id="products">
                {/* <div className="headerNewProduct">
        <div className="button">
            <button className="button_products">PRODUCTS</button>
            <button className="button_expenses">EXPENSES</button> 
        </div>
        <div className="avatar">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Gal_Gadot_%2836165097896%29_%28cropped%29.jpg/900px-Gal_Gadot_%2836165097896%29_%28cropped%29.jpg"
                alt="avatar"/>
            <p>Gal Gadot</p>
        </div>
    </div> */}
    <div className="prodText_dropdown">
        <div>
            <h1>Products</h1>
        </div>
        <div className="prod_dropdown">
            <label htmlFor="">Filter by:</label>
            <form>
                <select>
                    <option value="year">Year</option>
                    <option value="highest_price">Highest Price</option>
                    <option value="lowest_price">Lowest Price</option>
                    <option value="latest_purchase">Latest Purchases</option>
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
                    <th>#</th>
                </tr>
            </thead>
            <tbody className="table-body">
                <tr className="table-row">
                    <td>Coca Cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>29/04/2019</td>
                    <td>75</td>
                    <td className="row-actions"><i className="far fa-edit"></i> <i className="far fa-trash-alt"></i></td>
                </tr>
                <tr className="table-row">
                    <td>Coca Cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>29/04/2019</td>
                    <td>75</td>
                    <td className="row-actions"><i className="far fa-edit"></i> <i className="far fa-trash-alt"></i></td>
                </tr>
                <tr className="table-row">
                    <td>Coca Cola</td>
                    <td>Drink</td>
                    <td>carbonated soft drink</td>
                    <td>29/04/2019</td>
                    <td>75</td>
                    <td className="row-actions"><i className="far fa-edit"></i> <i className="far fa-trash-alt"></i></td>
                </tr>
            </tbody>
        </table>

    </div>
    <div className="products-buttons">
        <button className="product-button-green">NEW CALCULATION</button>
        <button className="product-button-grey">NEW PRODUCT</button>
    </div>
        
            </section>

        )
    }
}