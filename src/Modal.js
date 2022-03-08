export const Modal = (props) => {
    return <div style={{
        position: 'fixed',
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    }}>
        <span style={{
            position: 'absolute',
            background: 'rgba(17, 20, 45, 0.5)',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        }} onClick={props.onClose} />
        {props.children}
    </div>
}