import React from 'react';

class NoticeContent extends React.Component {
	
	render() {

		const { id, title, date } = this.props;

		return (
			<li>
				<div>
					<p>[공지사항]</p>
				</div>
				<div id="notice_title">
					<p>{title}</p>
				</div>
				<div>
					<p>{date}</p>
				</div>
				{/* <div>
					<h2>더 보기 ></h2>
				</div> */}
			</li>
		)
	}
}

export default NoticeContent;