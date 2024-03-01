import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';

const PaginationUI = ({ totalPages, currentPage, onPageChange }) => {
	console.log('totalPages', totalPages);
	console.log('currentPage', currentPage);
	const generatePaginationItems = () => {
		const items = [];

		// Previous Page button
		items.push(
			<PaginationItem key='prev'>
				<PaginationPrevious
					onClick={() => onPageChange(currentPage - 1)}
					disabled={currentPage === 1}
					href='#'
				/>
			</PaginationItem>,
		);

		// Numbered page links
		for (let i = 1; i <= totalPages; i++) {
			items.push(
				<PaginationItem key={i}>
					<PaginationLink
						onClick={() => onPageChange(i)}
						isActive={currentPage === i}
						href='#'>
						{i}
					</PaginationLink>
				</PaginationItem>,
			);
		}

		// Next Page button
		items.push(
			<PaginationItem key='next'>
				<PaginationNext
					onClick={() => onPageChange(currentPage + 1)}
					disabled={currentPage === totalPages}
					href='#'
				/>
			</PaginationItem>,
		);

		return items;
	};

	return (
		<Pagination className='mt-4'>
			<PaginationContent>{generatePaginationItems()}</PaginationContent>
		</Pagination>
	);
};

export default PaginationUI;
