import Link from 'next/link';

interface Props {
	pageNumber: number;
}

const GoBackBtn = ({ pageNumber }: Props) => {
	return (
		<div className='goBack'>
			<div className='container flex'>
				<Link href={`/page/${pageNumber}`}>
					<a className='btn'>← Go Back</a>
				</Link>
			</div>
		</div>
	);
};

export default GoBackBtn;
