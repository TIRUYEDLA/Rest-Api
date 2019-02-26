
const getParsedData = input => {
    //Assuming that "0000" will be present after Firstname and "000" is will be present after the second name for a given input data
    const inputArray = input.split('000');
    let [fName, lName, clientId] = inputArray;
    return { firstName: fName + '0000', lastName: lName.replace(/0/g, '') + '000', clientId };
}

exports.parse = (req, res, next) => {
    const inputData = req.body.data;
    if (!inputData) {
        return res.status(400).send({
            error: "Bad Request"
        });

    }
    const data = getParsedData(inputData);

    return res.status(200).send({
        statusCode: 200,
        data
    });
};