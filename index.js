// code your solution here
function superbowlWin(record){
    function winningYear(year){
        return year.result === "W";
    }

const winningYearObject = record.find(winningYear);
    if (winningYearObject){
        return winningYearObject.year
    }

}