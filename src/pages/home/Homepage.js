import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import React from "react";
import NavigationMenu from "../../components/navbar/navbar";
import "./Homepage.less";

function Homepage() {
	return (
		<Layout>
			<Header>
                <NavigationMenu/>
            </Header>
			<Content>
				<div className="prime_bg_color wrapsection">content</div>
			</Content>
			<Footer>Foot</Footer>
		</Layout>
	);
}

export default Homepage;
