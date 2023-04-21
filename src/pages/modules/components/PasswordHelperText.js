import * as React from 'react';

import FormHelperText from '@mui/material/FormHelperText';
import { useFormControl } from '@mui/material/FormControl';

function PasswordHelperText() {
    const { focused } = useFormControl() || {};
  
    const helperText = React.useMemo(() => {
      if (focused) {
        return 'Must have 8 characters minimum';
      }
  
      return ' ';
    }, [focused]);
  
    return <FormHelperText>{helperText}</FormHelperText>;
}
export default PasswordHelperText;