import * as React from 'react';
//Material UI components
import {
    Paper,
    InputLabel,
    IconButton,
    FormControl,
    FilledInput
} from '@mui/material';
//Material UI icon components
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

function Search(props) {
    //Fetching handleSearch from props and asigning to variable handleSearch
    const handleSearch = props.handleSearch;
    //State to track user search content
    const [search, setSearch] = React.useState('');
    //resets search to empty string
    const handleClear = () => {
        setSearch('');
    }
    //Passes search to EventTable
    React.useEffect(() => { handleSearch(search) }, [search, handleSearch]);

    return (
        <>
            <Paper component="form" sx={{bgcolor: 'white', mb: 2}}>
                <FormControl fullWidth variant="filled">
                    <InputLabel>Search</InputLabel>
                    <FilledInput    onChange={(e)=>setSearch(e.target.value)}
                                    value={search}
                                    endAdornment={ 
                                        search === '' ?
                                        <SearchIcon/> :
                                        <IconButton onClick={handleClear}>
                                            <CloseIcon/>
                                        </IconButton> 
                                    }/>
                </FormControl>
            </Paper>
        </>
    )
}

export default Search;