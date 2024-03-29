// PaginationHelper
// For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

// The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

// The following are some examples of how this class is used:

// var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
// helper.pageCount(); // should == 2
// helper.itemCount(); // should == 6
// helper.pageItemCount(0); // should == 4
// helper.pageItemCount(1); // last page - should == 2
// helper.pageItemCount(2); // should == -1 since the page is invalid

// // pageIndex takes an item index and returns the page that it belongs on
// helper.pageIndex(5); // should == 1 (zero based index)
// helper.pageIndex(2); // should == 0
// helper.pageIndex(20); // should == -1
// helper.pageIndex(-10); // should == -1

class PaginationHelper {
  constructor(collection, itemsPerPage) {
    // The constructor takes in an array of items and a integer indicating how many
    // items fit within a single page
    this._collection = collection;
    this._itemsPerPage = itemsPerPage;
  }
  itemCount() {
    // returns the number of items within the entire collection
    return this._collection.length;
  }
  pageCount() {
    // returns the number of pages
    return Math.ceil(this._collection.length / this._itemsPerPage);
  }
  pageItemCount(pageIndex) {
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
    if (pageIndex + 1 > this.pageCount() || pageIndex < 0) {
      return -1;
    } else if (pageIndex < this.pageCount() - 1) {
      return this._itemsPerPage;
    } else {
      return this._collection.length % this._itemsPerPage;
    }
  }
  pageIndex(itemIndex) {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
    console.log(this._collection.length, this._itemsPerPage, this.pageCount());
    if (itemIndex >= this._collection.length || itemIndex < 0) {
      return -1;
    } else if (itemIndex === 0) {
      return 0;
    } else {
      return itemIndex >= this._itemsPerPage
        ? Math.floor(itemIndex / this._itemsPerPage)
        : 0;
    }
  }
}
const helper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4);
console.log(helper.pageCount());
console.log(helper.itemCount());
console.log(helper.pageItemCount(0));
console.log(helper.pageItemCount(1));
console.log(helper.pageItemCount(2));
