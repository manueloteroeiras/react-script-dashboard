import React from 'react';

import getStyles from './styles';

const Card = (props) => {
    let styles = getStyles(props);
    return(
        <div style={ styles.card } onClick={ ()=> props.action() } >
            <div style={ styles.img } ></div>
            { (props.text) ? 
                <div style={ styles.details }>
                    <h4>{ props.title }</h4>
                </div>
             : null }
        </div>
    )
}

export default Card