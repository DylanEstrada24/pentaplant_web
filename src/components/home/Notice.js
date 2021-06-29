import React from "react";
import $ from 'jquery';
import NoticeContent from './NoticeContent';
class Notice extends React.Component {

    state = {
        notices : [
            /*
            {id: 0, title: `당국 "국산 항체치료제 '델타 변이' 방어능력 현저히 떨어져"`, date: '06-25'},
            {id: 1, title: '학교·아동시설서 새 집단감염…대전 교회-가족 관련 누적 72명', date: '06-25'},

            {id: 2, title: "'아크 인베·모건스탠리' 親암호화폐 행보에 비트코인 상승세", date: "06-28"},
            */
            {id: 0, title: "멕시코 중앙은행 '암호화폐, 금융 시장에 발 들일 수 없다", date: "06-28"},
            {id: 1, title: "중국 최장수 암호화폐 거래소 BTC차이나, 규제에 ‘백기 투항’ 비트코인 사업 종료", date: "06-29"}
        ]
    }
    
    componentDidMount() {
        let height = $(".notice").height();
        let num = $(".rolling li").length;
        let max = height * num;
        let move = 0;
        
        const rolling = () => {
            move += height;
            $(".rolling").animate({"top": -move}, 600, function() {
                if(move >= max) {
                    $(this).css("top", 0);
                    move = 0;
                }
            })
        }
        
        setInterval(rolling, 3000);
        
        $(".rolling").append($(".rolling li").first().clone());
    }
    
    // componentWillUnmount() {
        //     clearInterval(this.rolling);
        // }
        
        
        render() {

            const {notices} = this.state;
            
            const noticeList = notices.map(
                ({id, title, date}) => (
                    <NoticeContent
                    id={id}
                    title={title}
                    date={date}
                    key={id}
                />)
            );

        return (
            <section className="section2">
                <div className="notice">
                    <ul className="rolling">
                        {noticeList}
                    </ul>
                </div>
            </section>
        )
    }
}
export default Notice;