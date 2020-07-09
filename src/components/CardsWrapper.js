import React, { Component } from 'react';
import Card from './Card';
import data from '../data/colleges.json';

class CardsWrapper extends Component {
    colList = data.colleges;
    take = 10;

    state = {
        colleges: [],
        page: 0,
    }

    componentDidMount() {
        this.fetchColleges();
        window.addEventListener('scroll', this.handleScroll)
    }


    handleScroll = (event) => {
        const listElm = event.target.scrollingElement
        if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
            this.fetchColleges()
        }
    }

    fetchColleges = () => {
        const newData = this.colList.slice(this.state.page * this.take, this.state.page * this.take + this.take)
        const newPage = this.state.page + 1;

        this.setState(prevState => ({
            page: newPage,
            colleges: [...prevState.colleges, ...newData]
        }))
    }

    render() {
        return (
            <div className="cards_wrapper rowFlex">
                {this.state.colleges.map((c, i) => (
                    <Card key={i} data={c} />
                ))}
            </div>
        )
    }
}

export default CardsWrapper;