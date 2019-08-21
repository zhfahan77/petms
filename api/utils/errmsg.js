let NotFound = {
    "message": "No records Found",
    "statusCode": 404
}

let RequiredFieldNotFound = {
    "message": "Required Field Not Found",
    "statusCode": 404
}

let AddPetRequiredFieldsNotFound = {
    "message": "Required Fields Not Found; name, color, age, breed, owner_id fields are required",
    "statusCode": 404
}

let DefaultRouteException = {
    "message": "Oops! Nothing found",
    "statusCode": 404
}

let BadRequest = {
    "message": "404 Bad Request, please check your specified endpoint and request method",
    "statusCode": 404
}

let OK = {
    "message": "OK",
    "statusCode": 200
}

let SomethingWentWrong = {
    "message": "Something Went Wrong",
    "statusCode": 500
}

let MaxRequestsExceeds = {
    "message": "Maximum requests per 15 min exceeds, please try again",
    "statusCode": 429
}

module.exports = {
    NotFound: NotFound,
    RequiredFieldNotFound: RequiredFieldNotFound,
    AddPetRequiredFieldsNotFound: AddPetRequiredFieldsNotFound,
    DefaultRouteException: DefaultRouteException,
    BadRequest: BadRequest,
    OK: OK,
    SomethingWentWrong: SomethingWentWrong,
    MaxRequestsExceeds: MaxRequestsExceeds
}