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

### `GET` `/api/health/`

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

### `GET` `/api/owners/`

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

### `POST` `/api/pets/`

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