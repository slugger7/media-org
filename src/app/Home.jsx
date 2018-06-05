import React from 'react';
import {
    withStyles,
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Button
} from '@material-ui/core';
import {
    Share,
    Info
} from '@material-ui/icons';

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
};

class Home extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Typography variant="title">Home</Typography>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image={null}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            Lizzard
                        </Typography>
                        <Typography component="p">This is the component paragraph</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary"><Share /></Button>
                        <Button size="small" color="primary"><Info /></Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(Home);
