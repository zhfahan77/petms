# PetMS

Pet Microservice


### Setup Instructions

---
Create a .env file in root of the project with the contents of the .env.example file.


Build the application containers...

```sh
$ make build
```

Start the application containers...

```sh
$ make start
```

Stop the application containers...

```sh
$ make stop
```

Stop and remove the application containers and volumes...

```sh
$ make clean
```

### API Endpoints

---

### `GET` `/api/health`

To Check Application Health.

#### Request:
##### Headers
```
Content-Type: application/json
```

#### Response: 
##### Status code: `200`
```json
{ 
    "message" : "OK",
    "statusCode" : 200 
}
```

---

### `GET` `/api/owners`

To List All Owners.

#### Request:
##### Headers
```
Content-Type: application/json
```

#### Response: 
##### Status code: `200`
```json
[
    {
        "id" : 1,
        "name": "Owner 1",
        "address": "Sample address 1",
        "phone": "123456789",
        "email": "test@owner1.com"
    },
    {
        "id" : 2,
        "name": "Owner 2",
        "address": "Sample address 2",
        "phone": "0123456789",
        "email": "test@owner2.com"
    },
    {
        "id" : 3,
        "name": "Owner 3",
        "address": "Sample address 3",
        "phone": "00123456789",
        "email": "test@owner3.com"
    }
]
```

---

### `GET` `/api/owners/:owner_id`

To List One Owner.

#### Request:
##### Headers
```
Content-Type: application/json
```

#### Response: 
##### Status code: `200`
```json
{
    "id" : 1,
    "name": "Owner 1",
    "address": "Sample address 1",
    "phone": "123456789",
    "email": "test@owner1.com"
}
```

---

### `GET` `/api/pets`

To List All Pets.

#### Request:
##### Headers
```
Content-Type: application/json
```

#### Response: 
##### Status code: `200`
```json
[
    {
        "id" : 1,
        "name": "Pet 1",
        "color": "white",
        "age": 3,
        "breed": "breed1",
        "owner_id": 1
    },
    {
        "id" : 2,
        "name": "Pet 3",
        "color": "black",
        "age": 3,
        "breed": "breed2",
        "owner_id": 3
    },
    {
        "id" : 3,
        "name": "Pet 3",
        "color": "black",
        "age": 3,
        "breed": "breed2",
        "owner_id": 3
    }
]
```

---

### `POST` `/api/pets`

To Add One Pet.

#### Request:
##### Headers
```
Content-Type: application/json
```

##### Body
_Mandatory_: All fields.
```json
{
    "name": "Pet 1",
    "color": "white",
    "age": 3,
    "breed": "breed1",
    "owner_id": 1
}
```

#### Response:
##### Status code: `200`
```json
{
    "id" : 1,
    "name": "Pet 1",
    "color": "white",
    "age": 3,
    "breed": "breed1",
    "owner_id": 1
}
```

---

### `GET` `/api/pets/:pet_id`

To List One Pet.

#### Request:
##### Headers
```
Content-Type: application/json
```

#### Response: 
##### Status code: `200`
```json
{
    "id" : 3,
    "name": "Pet 3",
    "color": "black",
    "age": 3,
    "breed": "breed2",
    "owner_id": 3
}
```

---

### `PUT` `/api/pets/:pet_id`

To Edit One Pet.

#### Request:
##### Headers
```
Content-Type: application/json
```

##### Body
_Mandatory_: All fields.
```json
{
    "name": "Pet 3",
    "color": "black",
    "age": 3,
    "breed": "breed2",
    "owner_id": 3
}
```

#### Response:
##### Status code: `200`
```json
{
    "id" : 3,
    "name": "Pet 3",
    "color": "black",
    "age": 3,
    "breed": "breed2",
    "owner_id": 3
}
```

---

### Error Messages

Custom error messages are returned when an error occurs. Sample Error message format is bellow. An error Message will
always return a message and a statusCode indicating it's HTTP Status Code

```json
{ 
    "message" : "No records Found", 
    "statusCode" : 404
}
```

---

### Run Tests

#### E2E Tests (End to end test; Using Chai HTTP Client)

```sh
make test
```

Sample Test Output
```
Running E2E Tests

> pet@1.0.0 test /Users/zhfahan77/Documents/adform-codingassignment
> mocha test/e2e.js --exit

Application is running on 3000


  Health Check Endpoint
    GET /api/health
      ✓ it should show a message if health is ok

  Unwanted Route Exception Handling
    GET /invalid
      ✓ it should show a message if no routes found
    GET /api/invalid
      ✓ it should show a message if no routes found

  List Owners API
    /api/owners should return owners
      ✓ it should return an array of objects with owners details

  List Pets API
    GET /api/pets should return pets
      ✓ it should return an array of objects with pets details

  Add Pets API
    POST /api/pets should add pets
      ✓ it should return an object with pet details

  List Pets For An Owner API
    Get /api/pets/owner/:owner_id should return pets of that owner
      ✓ it should return an array of objects with pet details

  Edit Pet API
    PUT /api/pets/:pet_id should edit pet
      ✓ it should return an object with pet details

  List One Pet API
    GET /api/pets/:pet_id should return one pet
      ✓ it should return an object with pets details

  List One Owner API
    GET /api/owners/:owner_id should return one owner
      ✓ it should return an object with owner details


  10 passing (126ms)

```

#### Unit Tests (Functional Unit Test; Testing Core Component)

```sh
make unit-test
```

Sample Test Output

```
Running Unit Tests

> pet@1.0.0 unit /Users/zhfahan77/Documents/adform-codingassignment
> mocha test/unit.js



  List Owners
    Owners.listOwners should return owners and call data handler function
      ✓ it should return an array of objects with owners details
    Owners.listOwners should return an error message if no records found
      ✓ it should return an object with error message

  List Pets
    Pets.listPets should return pets and call data handler function
      ✓ it should return an array of objects with pets details
    Pets.listPets should return an error message if no records found
      ✓ it should return an object with error message

  Add Pet
    Pets.addPet should add pet and call data handler function
      ✓ it should return an object with pet details

  List Pets for an Owner
    Pets.listPetsForAnOwner should return pets and call data handler function
      ✓ it should return an array of objects with pet details

  Edit Pet
    Pets.editPet should edit pet and call data handler function
      ✓ it should return an object with pet details
    Pets.editPet should return an error message if no records found
      ✓ it should return an object with error message

  List One Pet
    Pets.listPet should return pet and call data handler function
      ✓ it should return an object with pets details
    Pets.listPet should return an error message if no records found
      ✓ it should return an object with error message

  List One Owner
    Owners.listOwner should return owner and call data handler function
      ✓ it should return an object with owner details
    Owners.listOwner should return an error message if no records found
      ✓ it should return an object with error message


  12 passing (31ms)

```