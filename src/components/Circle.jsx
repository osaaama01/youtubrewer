import { flexbox } from "@mui/system";

export const Circle = ({size, showText = false}) => {

    const styles = {
        circle: {
            display: 'flex',
            boxSizing: 'border-box',
            height: size,
            width: size,
            backgroundColor: '#04CF55',
            border: '2px solid #000000',
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
            {showText ? '60%' : null}
        </div>
    )

}

