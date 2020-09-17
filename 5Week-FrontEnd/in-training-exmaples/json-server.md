# creating a mock api with json-server

The documentation an be found at: https://www.npmjs.com/package/json-server

1. In the desired directory, create a new npm project:
   > npm init
   > You can hit `enter` to use the default options
2. enter the following command to install globally (necessary to do if you want to use cli command):
   > npm i -g json-server
3. create a mock database using a json file (exmple below):

   `db.json`

```json
{
	"trainers": [
		{
			"name": "Ash",
			"badge": 0,
			"team": [
				{
					"id": 1,
					"name": "bulbasaur"
				},
				{
					"id": 25,
					"name": "pikachu"
				}
			]
		},

		{
			"name": "Red",
			"badge": 10,
			"team": [
				{
					"id": 3,
					"name": "venosaur"
				},
				{
					"id": 25,
					"name": "pikachu"
				},
				{
					"id": 143,
					"name": "snorlax"
				}
			]
		}
	]
}
```

4. Start the server:

   > json-server --watch db.json

5. Test with postman or browser: `localhost:3000`
