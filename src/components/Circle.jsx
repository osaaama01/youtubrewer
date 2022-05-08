export const Circle = ({size, showText = false, borderColor, backgroundColor}) => {

    const styles = {
        circle: {
            display: 'flex',
            boxSizing: 'border-box',
            height: size,
            width: size,
            backgroundColor: backgroundColor,
            border: `2px solid ${borderColor}`,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
        },
        circle_dot: {
            width: '20%',
            height: '20%',
        },
    };
        return(

        <div style={styles.circle}>
            {showText ? '60%' : <span style={styles.circle_dot}/>}
        </div>
    )

}

