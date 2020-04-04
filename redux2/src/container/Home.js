import React, {Component} from 'react';
import LatestNews from '../component/Home/LatestNews';
import {connect} from 'react-redux';
import {latestNews,articleNews,galleryNews } from '../action';
import { bindActionCreators} from 'redux';

import ArticleNews from '../component/Home/Artciledata';
import GalleryNews from '../component/Home/GalleryNews';


class Home extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
   
    componentDidMount(){
        this.props.latestNews();
        this.props.articleNews();
        this.props.galleryNews();

    }
    render(){
        return(
            <div>
                <LatestNews ldata={this.props.datalist.latestdata}/>
                <ArticleNews adata={this.props.datalist.artciledata}/>
                <GalleryNews gdata={this.props.galData.gallerydata}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        datalist:state.articles,
        galData:state.gallery
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews,articleNews,galleryNews}, dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);