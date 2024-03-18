# node-simple-server

# Routes

#### POST /msg
```sh
curl --request POST \
  --url http://localhost:3000/msg \
  --header 'content-type: application/json' \
  --data '{"message": "hello, world!"}'
```

Output:
```sh
message received.
```
---
#### GET /ping
```sh
curl --request GET \
  --url http://localhost:3000/ping
```

Output:
```sh
pong
```
