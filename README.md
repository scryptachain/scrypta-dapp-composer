# Idanode Middleware API

This middleware API is built with NestJS and can be used to create a middleware service for any kind of backend.

This middleware communicates directly with one of the available IdaNodes to send and receive informations without calling them.

You can use it to create specific and structured calls and write your own rules before send the data to the blockchain.

It works with 3 simple endpoint, but you can create other endpoints based on your needs.

## [GET] /

This will give you the result of a `/wallet/getinfo` calls from the first available node.

# [POST] /get

This will make a `GET` call to the first available node, you've to pass the `endpoint` parameter in this way:
```
{
	"endpoint": "/wallet/getnewaddress"
}
``` 

# [POST] /post

This will make a `POST` call to the first available node, you've to pass the `endpoint` parameter and the `params` parameter in this way:
```
{
	"endpoint": "/sidechain/shares",
	"params": {
		"sidechain_address": "6RQ54yHx2dARWkN8Biiw3gDjb4sB5hSHSH"
	}
}
``` 

## SERVER PORT

Default port is `3000` to communicate with the MiddlewareAPI.