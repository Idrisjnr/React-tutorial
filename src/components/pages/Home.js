import React, { Component } from "react";
import Headers from "../Common/Header";
import image from '../assets/img/header-bg.jpg';

//Re-usable components
import Services from "../Common/Services";

class Home extends Component{
    render(){
        return(
            <div>
                <Headers 
                    title="Welcome To Our Studio!"
                    subtitle="IT'S NICE TO MEET YOU"
                    buttonText="Tell me more"
                     link="/services"
                    showButton={true}
                    image={image}
                />

                  <Services/> 
                                
            </div>
        );
    }
}

export default Home;