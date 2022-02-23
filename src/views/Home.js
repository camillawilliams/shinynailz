import React from "react";
import HomeJumbo from "../js/components/homejumbo";
import Card from "../js/components/card";
import MyNavbar from "../js/components/mynavbar";

export const Home = () => {
   
    return (
        <div>
			<div>
			<MyNavbar />
			<div className="container-3"></div>
        <HomeJumbo />
		{/* <MyNavbar /> */}
        <div className="row">
					<Card
						title="This is a Card Test!"
						text="Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Explicabo magni sapiente, tempore debitis beatae
                        culpa natus architecto."
						footer="Find out more!"
					/>
					{/* <Card
						title="This is a Card Test!"
						text="Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Explicabo magni sapiente, tempore debitis beatae
                        culpa natus architecto."
						footer="Find out more!" */}
					{/* /> */}
					{/* <Card
						title="This is a Card Test!"
						text="Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Explicabo magni sapiente, tempore debitis beatae
                        culpa natus architecto."
						footer="Find out more!"
					/> */}
					{/* <Card
						title="This is a Card Test!"
						text="Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Explicabo magni sapiente, tempore debitis beatae
                        culpa natus architecto."
						footer="Find out more!"
					/> */}
				</div>
			</div>
        </div>
     
    );
};

export default Home