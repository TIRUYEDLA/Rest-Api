const getParsedData = input => {

    //Assuming that "0000" will be present after Firstname and "000" is will be present after the second name for a given input data
    const inputArray = input.split('000');
    let [firstName, lName, clientId] = inputArray;
    clientId = clientId.slice(0,3) + "-" + clientId.slice(3);
    return { firstName , lastName: lName.replace(/0/g, ''), clientId };
}

exports.parse = (req, res, next) => {
    const inputData = req.body.data;

    if(!inputData) {
        return res.status(400).send({
            error: "Bad Request"
        });

    }

    const data = getParsedData(inputData);

    return res.status(200).send({
        statusCode: 200,
        data
    });
}