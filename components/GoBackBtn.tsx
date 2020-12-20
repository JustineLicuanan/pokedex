import Link from 'next/link';

const GoBackBtn = () => {
	return (
		<div className='goBack'>
			<div className='container flex'>
				<Link href='/'>
					<a className='btn'>← Go Back</a>
				</Link>
			</div>
		</div>
	);
};

export default GoBackBtn;
