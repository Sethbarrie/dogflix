import React from 'react';


class Errors extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="error-container">
                <ul className="error-list">
                    {this.props.errors.map( error => {
                        return <li>{error}</li>
                    })}
                </ul>
            </div>
        )
    }
}


export default Errors;