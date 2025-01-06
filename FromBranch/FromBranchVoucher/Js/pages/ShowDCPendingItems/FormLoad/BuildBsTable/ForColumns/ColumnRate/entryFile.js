const StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = symbolFormatPrice;
    inFindColumn.footerFormatter  = totalFormatter;
};

function totalFormatter(data) {
    var field = this.field;
    return '₹ ' + data.map(function (row) {
        return +row.Rate
    }).reduce(function (sum, i) {
        return sum + i
    }, 0)
};
function symbolFormatPrice(data) {
    var field = this.field
    return '₹ ' + data;

}



export { StartFunc };
