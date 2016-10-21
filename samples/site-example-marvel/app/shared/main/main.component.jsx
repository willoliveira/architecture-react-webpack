import React, {Component} from "react";
import Header from "../header/header.component.jsx";
import Footer from "../footer/footer.component.jsx";

class Main extends Component {
	render() {
		return (
            <div>
                <Header />
                <section>
                    {this.props.children}
                </section>
                <Footer />
            </div>			
		);
	}
}

export default Main;