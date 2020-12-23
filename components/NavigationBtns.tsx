import Link from 'next/link';

interface Props {
	pageNumber: string;
	maxPageCount: number;
}

const NavigationBtns = ({ pageNumber, maxPageCount }: Props) => {
	const pageNum = parseInt(pageNumber);

	return (
		<div className='navBtns'>
			<ul className='container flex'>
				<li
					className={`navBtns__previous${
						pageNum === 1 ? ' navBtns__previous--hidden' : ''
					}`}
				>
					<Link href={pageNum === 2 ? '/' : `/page/${pageNum - 1}`}>
						<a className='btn'>Previous</a>
					</Link>
				</li>
				<li
					className={`navBtns__next${
						pageNum === maxPageCount ? ' navBtns__next--hidden' : ''
					}`}
				>
					<Link href={`/page/${pageNum + 1}`}>
						<a className='btn'>Next</a>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default NavigationBtns;
