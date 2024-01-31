import { Avatar, Card as MuiCard, CardActions, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

type Props = {
    initial: string;
    title: string;
    subheader: string;
    content: string;
}

const Card = ({
    initial, title, subheader, content
}: Props) => {
    return (
        <MuiCard>
            <CardHeader
                avatar={<Avatar>{initial}</Avatar>}
                title={title}
                subheader={subheader}
            />
            <CardContent>
                <Typography>{content}</Typography>
            </CardContent>
            <CardActions>
            <IconButton><FavoriteIcon /></IconButton>
            <IconButton><ShareIcon/></IconButton>
            </CardActions>
        </MuiCard>
    )
}

export default Card