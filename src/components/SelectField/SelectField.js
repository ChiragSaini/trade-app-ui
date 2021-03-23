import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        maxHeight: 10,
        textAlign: "center",
        justifyContent: "center"
    }
}));

export default function SimpleSelect(props) {
    const classes = useStyles();
    const [val, setVal] = React.useState(props.options[0]);

    const handleChange = (event) => {
        console.log(event.target.value)
        setVal(event.target.value);
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">{props.heading}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={val}
                    onChange={handleChange}
                >
                    {
                        props.options.map((opt, idx) => <MenuItem key={idx} value={opt}>{opt}</MenuItem>)
                    }
                </Select>
            </FormControl>
        </div>
    );
}
