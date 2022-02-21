function findDuplicateTransactions(items = []) {

    items.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));

    let obj = items[0], arr = [], latestId = 0, mainArr = [];

    for (let i = 1; i < items.length; i++) {
        if (items[i].sourceAccount === obj.sourceAccount && items[i].targetAccount === obj.targetAccount && items[i].amount === obj.amount &&
            items[i].category === obj.category &&
            (new Date(items[i].time) - new Date(obj.time)) / 60000 < 1) {
            if (latestId !== obj.id) {
                arr.push(obj);
                latestId = obj.id;
            }
            if (latestId !== items[i].id) {
                arr.push(items[i]);
                latestId = items[i].id
            }
            obj = items[i];
        }
        else {
            if (items[i].category !== obj.category) {
                mainArr = [arr.slice()]
                arr = [];
            }
            obj = items[i];
        }
    }
    mainArr.push(arr)

    console.log(mainArr);
    return mainArr;
}
