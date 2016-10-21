import React, {Component} from "react";

class Header extends Component {
	render() {
		return (
			<header>
				<div className="marvel-logo">
					<img src="assets/images/marvel-logo.jpg" alt="" />                
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
                        <li className="menu-item">Characters</li>
                        <li className="menu-item">Comics</li>
                        <li className="menu-item">Creators</li>
                        <li className="menu-item">Events</li>
                        <li className="menu-item">Series</li>
                        <li className="menu-item">Stories</li>
                        <li className="menu-item">Comics</li>
                    </ul>
                </div>
        	</header>
		);
	}
}

export default Header;