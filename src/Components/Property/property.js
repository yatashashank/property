import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {withRouter} from 'react-router-dom'


const styles = {
  card: {
    maxWidth: 345,
    margin: 10,
  },
  media: {
    objectFit: 'cover',
  },
};

class Property extends React.Component{
constructor(props){
    super(props);
    this.state={
      val:''
    }
}
getDetails(id){
    this.props.history.push({
        pathname: '/details/' +id,
        state: '',
      })
}

render(){
  const { classes,id } = this.props;
  const {property} =this.props.prop;
  return (
    <Card className={classes.card} onClick={()=>this.getDetails(id)}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="140"
          image={require(`../../img/${id}.jpg`)}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {property}
          </Typography>
          <Typography component="p">
          Text properties allow communication plan designers to add text strings of up to 20,000 characters to messages. 
          Designers can specify a default value and a minimum and maximum size for the field
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          More Details
        </Button>
      </CardActions>
    </Card>
  );
    }
}

Property.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(Property));
