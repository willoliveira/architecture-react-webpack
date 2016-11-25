import React, {Component} from "react";
import { Link } from "react-router"

class Header extends Component {
	render() {
		return (
			<header>
				<div className="marvel-logo">
					<Link to="/" activeClassName="active">
						<img src="assets/images/marvel-logo.jpg" alt="" />
					</Link>        
				</div>
            	<div className="">
					<div className="menu-social">
						<div className="menu-social-left">
							<ul className="menu-socials-net">
								<li className="menu-item"><i>face</i></li>
								<li className="menu-item"><i>twitter</i></li>
								<li className="menu-item"><i>youtube</i></li>
							</ul>
						</div>
						<div className="menu-social-right">
							<ul className="menu-socials-account">
								<li className="menu-item">Marvel mastercard</li>
								<li className="menu-item"><span className="bold">Marvel insider</span> <span className="">5,200 Points</span></li>
								<li className="menu-item"><i>icon-user</i>Willian</li>
							</ul>
						</div>
					</div>
				</div>
                <div className="menu-separaca"></div>
                <div className="menu-principal">
                    <ul className="menu-socials-net">
                        <li className="menu-item"><Link to="/characters" activeClassName="active">Characters</Link></li>
                        <li className="menu-item"><Link to="/comics" activeClassName="active">Comics</Link></li>
                        <li className="menu-item"><Link to="/creators" activeClassName="active">Creators</Link></li>
                        <li className="menu-item"><Link to="/events" activeClassName="active">Events</Link></li>
                        <li className="menu-item"><Link to="/series" activeClassName="active">Series</Link></li>
                        <li className="menu-item"><Link to="/stories" activeClassName="active">Stories</Link></li>
                    </ul>
                </div>
        	</header>
		);
	}
}

export default Header;