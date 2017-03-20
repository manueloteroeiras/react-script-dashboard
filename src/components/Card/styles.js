import ppt from '../../assets/images/ppt.jpg';

const getStyles = (props) => {
    console.log(props)
    const styles = {
        card: {
            height: '200px',
            backgroundColor : '#607d8b',
            flex: 1,
            flexWrap: 'wrap',
            margin: '15px',
            // webkitBoxShadow: '7px 7px 20px -4px rgba(0,0,0,0.75)',
            // mozBoxShadow: '7px 7px 20px -4px rgba(0,0,0,0.75)',
            boxShadow: '7px 7px 20px -4px rgba(0,0,0,0.75)'
        },
        img : {
            width: '100%',
            backgroundImage : `url(${ ( props.hero ) ? props.hero : ppt })`,
            height: '200px',
            backgroundSize: 'cover',
            backgroundRepeat: 'none'
        },
        details : {
            width : '100%',
            height: '45px',
            backgroundColor : '#607d8b',
            position : 'relative',
            top: '-100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff'
        }
    }
    return styles;
}

export default getStyles;