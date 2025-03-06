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
import { Link } from 'react-router';
import { Content } from 'antd/es/layout/layout';


// NOTE: When the css is finally finished, we'll apply 'props' and replace the
// hardcoded information, for example: description, title, author, etc;
export default function Post(props) {
    const [favorite, setFavorite] = React.useState(false); // State to manage Favorite button color

    const handleFavoriteClick = () => {
        setFavorite(!favorite);  // Toggles the 'favorite' state
    };

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text
        return text.substr(0, maxLength) + '...'
    };

    const ContentCard = ({ content }) => {
        return (
            truncateText(content, 100)
        );
    };

    function formatDate(date) {
        const d = new Date(date);
        return d.toLocaleDateString()
    }

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
                title={props.article.title}
                subheader={props.article.updated_at ? formatDate(props.article.updated_at) : formatDate(props.article.created_at)}
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <ContentCard content={props.article.content} />
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
                {/* <Link to={"/articles/"+props.article.id} className={styles.article} key={props.article.id}>See more</Link> */}
                <Link to={"/profile"} className={styles.article} key={props.article.id}>See more</Link>
            </div>

        </Card >
    );
}
