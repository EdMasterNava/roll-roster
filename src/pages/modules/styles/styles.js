const style = () => ({
    rightNav: {
        '&:hover': {
            color: '#3b7ad8'
        },
        marginLeft: 3
    },
    flex: {
        flex: 1
    },
    sidebar: {
        zIndex: 1
    },
    sidebarContent: {
        flexDirection: 'column',
        display: 'flex'
    },
    sidebarButtons: {
        disply: 'flex',
        width: '100%'
    },
    heroImg: {
        minHeight: 'clamp(50vw, 70vh, 100vw)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
        backgroundSize: 'cover',
        position: 'relative'
    },
    heroOverlay: {
        backgroundImage: 
            'linear-gradient(to right, rgba(0, 0, 0, 0.8) 2%, rgba(0, 0, 0, 0) 98%)',
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        top: 0
    },
    heroContainer: {
        position: 'relative',
        maxWidth: 600,
        height: '100%',  
        px: 3.8,
        pt: 15
    },
    heroButton: {
        '&:hover': {
            backgroundColor: '#3265b1'
        },
        backgroundColor: '#3b7ad8',
        textTransform: 'none',
        borderRadius: 10,
        mt: 2,
        py: 2,
        px: 6
    },
    subHero: {
        backgroundColor: 'black',
        py: 10
    }

});

export default style;