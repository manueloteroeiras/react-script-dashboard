import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

export default class CardExampleControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }


  render() {
    let { user } = this.props;
    return (
      <Card style={{ marginBottom: 20 }}>
        <CardHeader
          title={ `${user.firstName} ${user.lastName}` }
          subtitle={ user.community.name }
          avatar={ user.profilePicture }
          actAsExpander={true}
        />

        <CardActions>
          <FlatButton label="Expand" onTouchTap={this.handleExpand} />
        </CardActions>
      </Card>
    );
  }
}