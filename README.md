# node-simple-server

## Docker

Build docker image
```sh
docker build -t node-simple-server-image .
```

Run docker container
```sh
docker run -dp 3000:3000 node-simple-server-image
```

## Routes

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