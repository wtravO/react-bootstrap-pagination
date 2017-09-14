import React, { Component } from 'react';
import '../vendor/bootstrap/css/bootstrap.css';

class Pagination extends Component {
    getPagination()
    {
        // requires font-awesome for the icons - alternatively replace with whatever
        var pagButtons = [
            <button type="button" className="btn btn-default" onClick={this.props.changePage} key="prevButton" id="prevButton" disabled={(this.props.curPage === 1)? true : false}>
                <i className="fa fa-chevron-left"></i>
            </button>
        ];

        pagButtons = pagButtons.concat(this.getPageNumbers());

        pagButtons.push(
            <button type="button" className="btn btn-default" onClick={this.props.changePage} key="nextButton" id="nextButton" disabled={ (this.props.curPage === this.props.pageCount)? true : false }>
                <i className="fa fa-chevron-right"></i>
            </button>
        );

        return pagButtons;
    }

    getPageNumbers()
    {
        var step = 2; // buttons before and after current page
        var buttons = [];
        var startNum, endNum;

        if(this.props.curPage - step < 1)
        {
            startNum = 1;
            endNum = 1 + (step * 2);
        } else if(this.props.curPage + step > this.props.pageCount){
            startNum = this.props.pageCount - (step * 2);
            endNum = this.props.pageCount;
        } else {
            startNum = this.props.curPage - step;
            endNum = this.props.curPage + step;
        }

        // [firstPage] ...
        if(startNum > 1)
        {
            buttons.push(
                <button className="btn btn-default" key="1" onClick={this.props.changePage}>1</button>
            );

            buttons.push(
                <button className="btn btn-default" key="start_elipses" disabled>...</button>
            );

        }

        // pages for curPage - step -> curPage + step
        for(var i = startNum; i <= endNum; i++)
        {
            buttons.push(
                <button className={"btn btn-default" + ((this.props.curPage === i)? " active" : "")} key={i} onClick={this.props.changePage}>{i}</button>
            );
        }

        // ... [lastPage]
        if(endNum !== this.props.pageCount)
        {
            buttons.push(
                <button className="btn btn-default" key="end_elipses" disabled>...</button>
            );

            buttons.push(
                <button className="btn btn-default" key={this.props.pageCount} onClick={this.props.changePage}>{this.props.pageCount}</button>
            );
        }

        return buttons;
    }

    render() {
        // no need to display pagination if there's only one page
        if(this.props.pageCount <= 1)
            return null;

        return (
            <div className="btn-group">
                {this.getPagination()}
            </div>
        );
    }
}

export default Pagination;