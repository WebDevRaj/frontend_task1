import React from 'react';
import clgImg from '../imgs/college_02.jpg'

const Card = (props) => {
    const {college_name, tags, rating, rating_remarks, ranking, original_fees, nearest_place, famous_nearest_places, offertext, discount, discounted_fees, fees_cycle, amenties, promoted} = props.data;
    const renderStars = () => {
        let str = ""
        for(let i=0; i<5; i++){
            if(i<rating){
                str += '★'
            }
            else str += '☆'
        }
        return str
    }
    return(
        <div className="card colFlex align_center">
            {promoted && <div className="promoted rowFlex align_center">PROMOTED</div>}
            <div className="header colFlex space_between" style={{backgroundImage: `url(${clgImg})`}}>
                <div className="header_top colFlex align_end">
                    <div className="rating colFlex align_center">    
                        <span><strong>{rating}</strong>/5</span>
                        <span>{rating_remarks}</span>
                    </div>
                </div>
                <div className="header_botttom rowFlex space_between">
                    <div className="tags_wrapper">
                        {tags.map((tag,i) => (
                            <span className="tag" key={i}>{tag}</span>
                        ))}
                    </div>
                    <div className="ranking">#{ranking}</div>
                </div>
            </div>
            <div className="card_main colFlex">
                <div className="rowFlex space_between">
                    <div className="card_main__left">
                        <div className="rowFlex">
                            <h2>{college_name}</h2>
                            <div className="star_rating">
                                {renderStars()}
                            </div> 
                        </div>
                        <div className="nearest_places">
                            {nearest_place.map((place, i) => (
                                <span key={i}>{place}</span>
                            )).reduce((prev, curr) => [prev, ' | ', curr])}
                        </div>
                        <div className="rowFlex famPlace">
                            <span className="text_green">93% Match :</span> {famous_nearest_places}
                        </div>
                    </div>
                    <div className="card_main__right">
                        <div className="discWrapper">
                            <span className="strikethrough">₹ {original_fees}</span>&nbsp;
                            <div className="triangle"></div><span className="discount">&#183; {discount}</span>
                        </div>
                        <div className="disc_fees">₹ {discounted_fees}</div>
                        <div className="fees_cycle">{fees_cycle}</div>
                        
                    </div>
                </div>
                <div className="rowFlex space_between">
                    <div className="offer rowFlex">
                        {offertext}
                    </div>
                    <div className="amenties">{amenties.map((a, i) => (
                            <span key={i}>{a}</span>
                        )).reduce((prev, curr) => [prev, ' · ', curr])}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;