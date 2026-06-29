exports.required = (...fields) => {

    for (const field of fields) {

        if (

            field === undefined ||

            field === null ||

            field === ""

        ) {

            return false;

        }

    }

    return true;

};