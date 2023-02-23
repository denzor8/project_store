import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './ProductCard.css'
// import Pagination from '../../../components/Pagination/Pagination'

export default function ActionAreaCard({ item }) {
	return (
		<>
			<Card sx={{ maxWidth: 200 }} className='postCard'>
				<CardActionArea>
					<Paper variant="outlined" className='post-card'>
						<img src={item.picture} />
					</Paper>
					<CardContent>
						<Typography variant="body2" color="text.secondary">
							Name: {item.name}
							<br />
							Price: {item.price}$
							<br />
							Category: {item.type}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
			
		</>
	);
}