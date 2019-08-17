#!/bin/bash
mkdir -p JSON;
echo '[
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
]' > JSON/owners.json;

echo '[
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
]' > JSON/pets.json;