const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Bob","salary":1000},
    {"name":"Ann","salary":2000},
    {"name":"Linda","salary":1500}
];

const getWorthyWorkers = workersArray => {
    const worthyWorkers = [];

    for (let i = 0; i < workersArray.length; i++) {
        const currentWorker = workersArray[i];

        if (currentWorker.salary > 1000) {
            worthyWorkers.push(currentWorker.name);
        }
    }

    return worthyWorkers;
}

console.log(getWorthyWorkers(workers))