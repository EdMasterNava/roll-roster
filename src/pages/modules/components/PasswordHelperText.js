import * as React from 'react';
//Material UI components
import FormHelperText from '@mui/material/FormHelperText';
import { useFormControl } from '@mui/material/FormControl';

function PasswordHelperText() {
  //Identifies if password text input is active
  const { focused } = useFormControl() || {};
  //Message shown only when text input is active
  const helperText = React.useMemo(() => {
    if (focused) {
      return 'Must have 8 characters minimum';
    }
    return ' ';
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}
export default PasswordHelperText;