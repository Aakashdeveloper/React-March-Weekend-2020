import React from 'react';
import { Link} from 'react-router-dom';

const LatestNews = (props) => {
    const NewsRender = ({ldata}) => {
        if(ldata){
            return ldata.map((data) => {
                return(
                    <Link to={`details/${data.id}`} className="item">
                        <div className="image_cover"
                        style={{background:`url('/images/articles/${data.img}')`}}>
                            <div className="description">
                                <span>{data.category}</span>
                                <div>{data.title}</div>
                            </div>

                        </div>
                    </Link>
                )
            })
        }
    }

    return(
        <React.Fragment>
            <div className="home-latest">
                {NewsRender(props)}
            </div>
        </React.Fragment>
    )
}

export default LatestNews;