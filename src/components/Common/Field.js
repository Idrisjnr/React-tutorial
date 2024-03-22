import React, {Component} from "react";

class Field extends Component{
    render(){
        return(
            <div className="form-group">
            <div class="form-group form-group-textarea mb-md-0">

                {this.props.elementName=== 'input' ?
                
                <input 
                    className="form-control" 
                    id={this.props.name}
                    type={this.props.type} 
                    placeholder={this.props.placeholder}
                    data-sb-validations="required"
                    value={this.props.value}
                    onChange={e => this.props.onChange(e)}    
                />
                
                :
                <textarea
                    className="form-control" 
                    id={this.props.name}
                    placeholder={this.props.placeholder}
                    data-sb-validations="required"
                    value={this.props.value}
                    onChange={e => this.props.onChange(e)}
                />
                }
                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
            </div>
            </div>
            
        );
    }
}

export default Field;