import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";


class Registertion extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title:"Registertion Form"
        };
    }
    render(){
        return(
           <div className="col-12">
               <b>{this.state.title}</b>
           </div> 
        );
    }
}

const mapStateToProps = (state) =>
    ({
    });

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Registertion);