import React from 'react'
import db from '../../dp.json'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {withRouter} from 'react-router-dom'
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Snackbar from '@material-ui/core/Snackbar';

import './details.css'

const styles = {
    card: {
      margin: 10,
    },
    media: {
      objectFit: 'cover',
    },
  };

class Details extends React.Component{
    constructor(props){
        super(props);
      this.state={
          data:db,
          open: false,
            vertical: 'top',
            horizontal: 'center',

      }
    }

    handleClose = () => {
        this.setState({ open: false });
      };

    addToFav(res){
       localStorage.setItem(`addfav${res.id}`, JSON.stringify(res));
       let sta={ 
           vertical: 'bottom', 
           horizontal: 'right'
         }
       this.setState({open:true,...sta})
       
    }

    add(){
        return 'add'
    }
    removeToFav(res){
        localStorage.removeItem(`addfav${res.id}`);
        this.setState({fav:''})
    }

    goBackToList(){
        this.props.history.goBack();
    }

    addFavItem(res){
       let val=JSON.parse(localStorage.getItem(`addfav${res.id}`))
       if(val){
           return(
               <React.Fragment>
                <IconButton aria-label="Add to favorites" onClick={()=>this.removeToFav(res)} ref="refone" style={{color:'green'}}>
                    <FavoriteIcon/>
                 </IconButton> <p style={{fontSize:'12px',color:'green',margin:'-5px'}}>It is in wish list</p></React.Fragment>
           )
       }else{
           return(
               <React.Fragment>
               <IconButton aria-label="Add to favorites"  onClick={()=>this.addToFav(res)} ref="refone" >
                   <FavoriteIcon />
                </IconButton><p style={{fontSize:'12px',color:'red',margin:'-5px'}}> Not in wish list</p></React.Fragment>
           )
       }
    }

   render(){
       
       let val=this.state.data.filter(e=>parseInt(e.id)===parseInt(this.props.match.params.id));
       const { vertical, horizontal, open } = this.state;

    return(
            val.map(res=>{
                  return(
                       <Card className={this.props.card} key={res.id} id="pro">
                        <CardActionArea className="left-part-details">
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            className={this.props.media}
                            height="340"
                            image={require(`../../img/${res.id}.jpg`)}
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {res.property}
                            </Typography>
                            <Typography component="p">
                            Text properties allow communication plan designers to add text strings of up to 20,000 characters to messages. 
                            Designers can specify a default value and a minimum and maximum size for the field
                            </Typography>
                            </CardContent>
                        </CardActionArea>
             

                        <CardContent id="conId">
                            <Typography gutterBottom variant="h5" component="h2">
                                Details:
                            </Typography>
                            <hr/>
                            <Typography component="h4" style={{color:'green',fontWeight:'bold',fontSize:'15px'}}>
                             Occupants :
                            </Typography>
                            <List>
                               {
                                   res.occupants.map(res=>{
                                       return(
                                        <ListItem key={res.name}>
                                        <ListItemText primary={res.name} secondary={`Age : ${res.age}`} />
                                        </ListItem>
                                       )
                                   })
                               }
                            </List>
                            <Typography component="h4" style={{color:'green',fontWeight:'bold',fontSize:'15px'}}>
                             Locations : 
                            </Typography>
                            <List>                        
                                        <ListItem >
                                        <ListItemText primary={res.location} />
                                        </ListItem>
                                   
                            </List>
                            <Typography component="h4" style={{color:'green',fontWeight:'bold',fontSize:'15px'}}>
                             Price / Month :  
                            </Typography>
                            <List>                        
                                        <ListItem >
                                        <ListItemText primary={res.pricepermonth} />
                                        </ListItem>
                                   
                            </List>
                        </CardContent>
                        <CardActions id="cardAction">
                            <Button size="small" color="primary" onClick={()=>this.goBackToList()}>
                            Go back to Property List
                            </Button>
                            {
                                this.addFavItem(res)
                            }
                            <Snackbar
                                anchorOrigin={{ vertical, horizontal }}
                                open={open}
                                onClose={this.handleClose}
                                autoHideDuration={5000}
                                ContentProps={{
                                    'aria-describedby': 'message-id',
                                }}
                                message={<span id="message-id">Property added to the wishlist</span>}
                                />
                        </CardActions>
                        </Card>
                  )
            })
    );
   }
}

export default withStyles(styles)(withRouter(Details));