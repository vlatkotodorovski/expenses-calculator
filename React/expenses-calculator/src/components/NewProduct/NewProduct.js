import React from 'react'
import './NewProduct.css'
// import { NavLink } from 'react-router-dom'


export class NewProduct extends React.Component {
    render() {
        return (
            <section id="new-product">
                <div className="newProduct">
        <div className="headerNewProduct">
            <div className="button" >
                <button className="button_products">PRODUCTS</button>
                <button className="button_expenses">EXPENSES</button>
            </div>


            <div className="avatar">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Gal_Gadot_%2836165097896%29_%28cropped%29.jpg/900px-Gal_Gadot_%2836165097896%29_%28cropped%29.jpg" alt="avatar" />
                <p>Gal Gadot</p>
            </div>
        </div>

        <div className="backgroundProduct">
            <div className="backNewProd">
                <h1>New Product</h1>
            </div>
            <div className="mainProduct">
                <div className="login-form prod">
                    <form>
                        <label htmlFor="">Product Name</label>
                        <input type="text" name="productName" placeholder=""/>
                        
                        <label htmlFor="">Product Description</label>   
                        <input type="text" name="productDescription" placeholder=""/>   

                        <label htmlFor="">Product Type</label>                
                        <input type="text" name="productType" placeholder=""/>
                        
                        <label htmlFor="">Purchase Date</label>   
                        <input type="text" name="purchaseDate" placeholder=""/>
                        
                        <label htmlFor="">Product Price</label> 
                        <input type="text" name="productPrice" placeholder=""/>
                                  
                        <button>CREATE PRODUCT</button>
                    </form>

                </div>
                
                <div className="createNewProduct">
                        
                            <div className="new-p">
                                    <p className="button-plus"><i className="fas fa-plus-circle"></i></p>
                                    <p className="newProdText">You are creating a new product</p>
                            </div>
                    
                    
                </div>
            </div>
        </div>

    </div>
            </section>

        )
    }
}