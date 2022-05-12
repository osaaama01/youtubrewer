export const Circle = ({size, showText = false, borderColor, backgroundColor,topText,bottomText,borderWeight}) => {

    const styles = {
        circle: {
            display: 'flex',
            boxSizing: 'border-box',
            height: size,
            width: size,
            backgroundColor: backgroundColor,
            border: `${borderWeight}px solid ${borderColor}`,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            textFont: 'Inter'
        },
        circle_dot: {
            width: '6px',
            height: '6px',
            backgroundColor: '#00000026',
            borderRadius: '50%'
        },
    };
        return(

        <div style={styles.circle}>
            {showText ? <div style={{lineHeight: '1', fontFamily: 'Inter', fontSize: '17px'}}><div style={{fontSize: '24px', fontWeight: "bold"}}>{topText}</div>{bottomText}</div> : <span style={styles.circle_dot}/>}
        </div>
    )

}

