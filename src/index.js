module.exports = function toReadable(number) {
    var dg = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var tn = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var tw = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    str = number + '';
    arr = str.split('');

    if (arr.length === 1) {
        return dg[number];
    }
    else if (arr.length === 2) {
        if (number < 20 && number > 9) {
            return tn[number - 10];
        } else if (number % 10 === 0 && number >= 20) {
            return tw[number / 10 - 2];
        } else {
            return tw[parseInt(number / 10) - 2] + " " + dg[number % 10];
        }
    }
    else if(arr.length === 3){
        if(number%100 === 0){
            return dg[number/100] + " hundred";
        }

        else if(arr[1] == 0){
            return dg[parseInt(number/100)] + " hundred " + dg[number % 10];
        }

        else if(arr[1] == 1){
            return dg[parseInt(number/100)] + " hundred " + tn[number % 10];
        }

        else if(arr[2] == 0){
            return dg[parseInt(number/100)] + " hundred " + tw[parseInt(number/10) % 10 - 2];
        }

        else{
            return dg[parseInt(number/100)] + " hundred " + tw[parseInt(number/10) % 10 - 2] + " " + dg[number%10];
        }
    }
}



