import * as React from 'react';
import Typography from './modules/components/Typography';

import useStyles from './modules/styles/styles';
import withRoot from './modules/styles/withRoot';


function Home() {
    const classes = useStyles();
    return (
        <>
            <Typography variant="h1" sx={{textAlign: 'center'}}>
                Hello World
            </Typography>
        </>
    );
}

export default withRoot(Home);