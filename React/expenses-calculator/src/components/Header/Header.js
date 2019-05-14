import React from 'react'

export class Header extends React.Component {
    render() {
        return (
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
        )
    }
}