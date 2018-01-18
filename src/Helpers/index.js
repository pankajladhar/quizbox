const uniqNumber = (obj) => {
    let minimum = (obj && obj.min) || 0;
    let maximum = ((obj && obj.max) || 100) + 1;
    let count = (obj && obj.count) || 1;
    let sort = (obj && obj.sort);
    let sortValue = ['asc', 'desc'];

    let validate = () => {
        if (typeof minimum !== "number" || typeof maximum !== "number" || typeof count !== "number")
            return "Only number accepted"

        if (sort && sortValue.indexOf(sort) < 0)
            return "Value of `sort` should be either `asc` or `desc`";

        if (minimum > maximum)
            return "Value of `min` should be greater than `max`";

        if (maximum - minimum < count)
            return "Value of `count` should not be lesser than `max-min`";

        if (minimum === (maximum - 1))
            return "Incorrect `min` value beacuse its matching with default value of `max`";

        return true
    }

    const sortArray = (numArray) => {
        return sort === 'asc' ? numArray.sort((a, b) => a - b) : numArray.sort((a, b) => b - a)
    }

    const generateRandom = () => {
        let randomNumberArray = [];
        while (randomNumberArray.length < count) {
            let num = Math.floor(Math.random() * maximum)
            num > minimum && randomNumberArray.indexOf(num) === -1 && randomNumberArray.push(num)
        }
        return randomNumberArray
    }


    const doSort = (output) => {
        return sort ? sortArray(output) : output
    }

    let validateOutput = validate();
    if (validateOutput === true) {
        let output = generateRandom();
        return count > 1 ? doSort(output) : output[0];
    } else {
        throw new Error(validateOutput);
    }

}

export { uniqNumber };