import React, { Component } from "react";
import Field from "../Common/Field";

const fields={
    sections:[
        [{name:'name', elementName:'input', type:'text', placeholder:'Your name*'},
        {name:'email', elementName:'input', type:'email', placeholder:'Your email*'},
        {name:'phone', elementName:'input', type:'text', placeholder:'Your phone number*'}
        ],
        [
        {name:'message', elementName:'textarea', type:'text', placeholder:'Your message*'}
        ]
    ]
}
class Contact extends Component{
    constructor(props){
        super(props);
        
        this.state= {
            name: '',
            email: '',
            phone: '',
            message: ''
        }
    }
    render(){
        return(
            <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div className="row align-items-stretch mb-5">

                        {fields.sections.map((section, sectionIndex) =>{
                            console.log("Rendering section", sectionIndex, "with", section);
                            return (
                                <div className="col-md-6" key={sectionIndex}>
                                   {section.map((field, i) => {
                                        return (
                                            <Field 
                                                {...field} 
                                                key={i}
                                                value={this.state[field.name]}
                                                onChange={e => this.setState({
                                                    [field.name]: e.target.value
                                                })} 
                                            />)
                                   })} 
                                </div>   
                            )
                        })}        
                    <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center text-white mb-3">
                            <div className="fw-bolder">Form submission successful!</div>
                            To activate this form, sign up at
                            <br />
                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                        </div>
                    </div>
                   
                    <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                    <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Send Message</button></div>
                    </div>
                </form>
            </div>
        </section>
        );

    }
}

export default Contact;