const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2);

const returnLastTwoDrivers = (drivers) => drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = (val) => (fare) => fare * val;

function fareDoubler(fare) {
    return createFareMultiplier(2)(fare)
}

function fareTripler(fare) {
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(drivers,selection) {
    if (selection === returnFirstTwoDrivers) {
        return drivers.slice(0,2);
    } else if (selection === returnLastTwoDrivers) {
        return drivers.slice(-2);
    }
}