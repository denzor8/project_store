import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Post from './Post.css';

export default function ActionAreaCard({ card }) {
	return (
		<Card sx={{ maxWidth: 200 }} className='postCard'>
			<CardActionArea>
				<Paper variant="outlined" className='post-card'>
					<img src={card.picture} />
				</Paper>
				<CardContent>
					<Typography variant="body2" color="text.secondary">
						Name: {card.name}
						<br />
						Price: {card.price}$
						<br />
						Category: {card.type}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}