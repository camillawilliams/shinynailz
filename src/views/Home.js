
import React from "react";

// import Pexels from 'pexels.jpg'
import HomeJumbo from "../js/components/homejumbo";
import Card from "../js/components/card";

export const Home = () => {
   
    return (
        <div>
			<div className="container-3"></div>
        <HomeJumbo />
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
        
     
    );
};

export default Home