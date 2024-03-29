import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Title } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import { changeTheme } from './actions';

const useStyles = makeStyles({
    label: { width: '10em', display: 'inline-block' },
    button: { margin: '1em' },
});

const Configuration = () => {
    const classes = useStyles();
    const theme = useSelector((state) => state.theme);
    const dispatch = useDispatch();
    return (
        <Card>
            <Title title="Configuracion" />
            <CardContent>
                <div className={classes.label}>
                    Theme
                </div>
                <Button
                    variant="contained"
                    className={classes.button}
                    color={theme === 'light' ? 'primary' : 'default'}
                    onClick={() => dispatch(changeTheme('light'))}
                >
                    LIGHT
                </Button>
                <Button
                    variant="contained"
                    className={classes.button}
                    color={theme === 'dark' ? 'primary' : 'default'}
                    onClick={() => dispatch(changeTheme('dark'))}
                >
                    DARK
                </Button>
            </CardContent>
        </Card>
    );
};

export default Configuration;
