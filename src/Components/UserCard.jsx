import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const UserCard = ({ name, email, id }) => {
	return (
		<Card>
			<CardHeader>
				<Avatar>
					<AvatarImage
						src={`https://loremflickr.com/320/240?random=${id}`}
					/>
					<AvatarFallback>{id}</AvatarFallback>
				</Avatar>

				<CardTitle>{name}</CardTitle>
			</CardHeader>
			<CardContent>
				<a href={`mailto:${email}`}>{email}</a>
			</CardContent>
		</Card>
	);
};

export default UserCard;
