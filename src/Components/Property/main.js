import React from 'react'
import Property from './property'
import db from '../../dp.json'

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            property:db
         }
    }
    render(){
        return(
            <div className="card">
                {
                this.state.property.map(res=>{
                    return(
                    <Property prop={res} key={res.id} id={res.id}/>
                    )
                })
                }
            </div>
        )
    }
}

export default Main;