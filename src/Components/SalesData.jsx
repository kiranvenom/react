import { useState } from 'react';
import salesData from '../Data/salesData';
import uniqid from 'uniqid';
import PaginationUI from './PaginationUI';

const ITEMS_PER_PAGE = 5;

const SalesData = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [sortedBy, setSortedBy] = useState(null);
	const [sortOrder, setSortOrder] = useState('asc');

	const handleSort = (columnName) => {
		if (columnName === sortedBy) {
			setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
		} else {
			setSortedBy(columnName);
			setSortOrder('asc');
		}
	};

	const sortedData = [...salesData].sort((a, b) => {
		if (sortOrder === 'asc') {
			return a[sortedBy] - b[sortedBy];
		} else {
			return b[sortedBy] - a[sortedBy];
		}
	});

	// Calculate total number of pages
	const totalPages = Math.ceil(sortedData.length / ITEMS_PER_PAGE);

	// Calculate the index range for the current page
	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const endIndex = startIndex + ITEMS_PER_PAGE;

	// Get the data for the current page
	const currentPageData = sortedData.slice(startIndex, endIndex);

	const handleChangePage = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	return (
		<>
			<table>
				<thead>
					<tr>
						{Object.keys(salesData[0]).map((heading, idx) => (
							<th
								onClick={() => handleSort(heading)}
								key={idx}
								className='bg-slate-500 px-6 py-2 text-white'>
								{heading}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{currentPageData.map((sale, idx) => (
						<tr
							key={idx}
							className={
								idx % 2 === 0
									? 'bg-gray-100 text-center'
									: 'bg-gray-200 text-center'
							}>
							{Object.values(sale).map((data) => (
								<td key={uniqid()}>{data}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
			<PaginationUI
				totalPages={totalPages}
				currentPage={currentPage}
				onPageChange={handleChangePage}
			/>
		</>
	);
};

export default SalesData;
