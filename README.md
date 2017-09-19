# react-bootstrap-pagination
A simple component for react that will handle populating pagination buttons with bootstrap styling.

Example usage:
```javascript
<Pagination changePage={this.changePage} curPage={this.curPage} pageCount={this.pageCount} />
```

changePage {function} - the function responsible for handling page updates.

curPage {integer} - the current page that you are on.

pageCount {integer} - refers to how many pages total that will be paginated.

Made using React V15.6.1
