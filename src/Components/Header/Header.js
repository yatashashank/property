import React, { Component } from 'react';
import "./Header.css";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from "@material-ui/icons/Menu"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import 'react-dropdown/style.css'
import imgLogo from '../../img/logo.jpg'

class Header extends Component{
    constructor(props){
      super(props);
      this.state = {
        searchTerm: ""
    }
    }

    showMenu(){
        this.props.onclick()
    }
    render() {
        return (
            <div className="header">
                <div className="left-part">
                    <div style={{ width: 50, marginTop: 20, marginLeft: 10 }}>
                        <IconButton>
                            <MenuIcon size="medium" onClick={()=>this.showMenu()}/>
                        </IconButton></div>

                    <img src={imgLogo} alt={"Logo"} style={{ marginTop: 10, marginLeft: 10 }} width="74" height="74" />
                
                </div>
                <div className="right-part">
                    
                 <Button style={{ marginTop: 25, marginLeft: 20, height: 10 }}
                        variant="outlined"
                        color="primary"> Get Property</Button>
                <TextField
                        label="Search"
                        value={this.state.searchTerm}
                        style={{ marginLeft: 40, width: 250, marginTop: 10 }}
                    />

                </div>
         
            </div >
        );
    }
}

export default Header;
