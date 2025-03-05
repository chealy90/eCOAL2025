import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import styles from "./Card.module.css"
import { Link } from '@mui/material';


// NOTE: When the css is finally finished, we'll apply 'props' and replace the
// hardcoded information, for example: description, title, author, etc;
export default function Post(props) {
    const [favorite, setFavorite] = React.useState(false); // State to manage Favorite button color

    const handleFavoriteClick = () => {
        setFavorite(!favorite);  // Toggles the 'favorite' state
    };


    return (
        <Card sx={{ maxWidth: 345 }} className={styles.card}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={props.title}
                subheader={props.update_at ? props.update_at : props.create_at}
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {/* FIX: Insert function to send sinopse*/}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    aria-label="add to favorites"
                    onClick={handleFavoriteClick}
                    sx={{ color: favorite ? red[500] : 'inherit' }} // Change color based on 'favorite' state
                >
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>

            <div>
                <Link top={}>See more</Link>
            </div>

        </Card >
    );
}
