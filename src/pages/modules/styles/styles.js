const style = () => ({
    rightNav: {
        '&:hover': {
            color: '#5186d5'
        },
        marginLeft: 3
    },
    flex: {
        flex: 1
    },
    sidebar: {
        zIndex: 3
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
        height: '100%', 
        maxWidth: 600, 
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
    },
    joinFormPNG: {
        backgroundRepeat: 'no-repeat',
        backgroundSize: '600px',
        position: 'absolute',
        left: -190,
        zIndex: 1,
        bottom: 0,
        right: 0,
        top: 150
    },
    joinFormGridContainer: {
        minHeight: '100vh', 
        width: '98.5vw', 
        ml: '1.5vw'
    },
    formContainer: {
        justifyContent: 'center', 
        alignItems: 'center',
        display: 'flex',
        px: 2
    },
    form: {
        flexDirection: 'column',
        position: 'relative',
        display: 'flex',
        maxWidth: 500,
        marginTop: 8,
        zIndex: 2,
        py: 5,
        px: 2
    },
    loginImg: {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    },
    loginOverlay: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        minHeight: '100vh',
        minWidth: '100vw'
    },
    rowButton: {
        justifyContent: 'space-between', 
        alignItems: 'stretch',
        display: 'flex',   
        mt: 0.5
    },
    startCell: {
        justifyContent: 'center',
        borderBottom: 'none',
        alignItems: 'center', 
        display: 'flex', 
        flexShrink: 0, 
        width: 90, 
        p: 0,  
    },
    middleCell: {
        borderBottom: 'none',
        flex: '1 1 auto'
    },
    endCell: {
        justifyContent: 'flex-end',
        alignItems: 'center',  
        borderBottom: 'none',
        display: 'flex',
        flexShrink: 0,
        width: 60  
    },
    drawerCell: {
        paddingBottom: 0, 
        paddingTop: 0
    },
    drawerButton: {
        '&:hover': {bgcolor: 'darkslategray'},
        textTransform: 'none',
        bgcolor: 'darkcyan',
        borderRadius: 0,
        width: '100%'    
    }


});

export default style;