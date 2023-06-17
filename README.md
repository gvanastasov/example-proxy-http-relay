# Example Relay Proxy

This repository contains a pair of HTTP servers, one acting as the target server and the other as a relay proxy server. The relay proxy server is designed to anonymize the IP address of the original client requester, providing an additional layer of privacy and acting as an intermediary between the client and the target server.

## Features

- Anonymizes the IP address of the client making requests to the target server.
- Acts as a relay proxy between the client and the target server.
- Uses the `x-forwarded-for` header to pass the modified IP address from the proxy server to the target server.
- Simple and lightweight implementation using Node.js and the HTTP module.
- Easily configurable for customization and integration into your own projects.

## Benefits of a Relay Proxy

- **IP Anonymization**: The relay proxy server helps anonymize the IP address of the client making requests to the target server. By modifying the `x-forwarded-for` header, the client's original IP address can be concealed, enhancing privacy and preventing direct identification.

- **Request Filtering and Transformation**: The relay proxy server can intercept and modify incoming requests before forwarding them to the target server. This allows for various filtering, transformation, or customization operations such as rate limiting, request validation, header modification, or request/response logging.

- **Caching and Performance Optimization**: By acting as an intermediary, the relay proxy server can implement caching mechanisms to improve performance. It can cache responses from the target server and serve them directly to subsequent requests, reducing the load on the target server and improving response times.

- **Load Balancing and High Availability**: The relay proxy server can distribute incoming requests across multiple instances of the target server, enabling load balancing and improved scalability. It can also handle failover scenarios by redirecting requests to alternate target server instances if one becomes unavailable.

## Prerequisites

To run the servers in this repository, you need to have the following software installed on your machine:

- Node.js (version 16 or higher)
- NPM (Node Package Manager)
- Ensure both :3000 (proxy) and :3001 (target) ports are available, otherwise update [runtime-config](./config/http.conf.js) and [docker-config](./docker-compose.yaml)

## Installation

1. Clone this repository to your local machine.

2. Navigate to the cloned repository's directory.

## Usage

Since this is merely a demo in a local Node.js environment, when running the proxy server and target server on the same machine, the actual client IP address may not be accessible due to how the network stack works. To simulate different client IP addresses for testing purposes, you may need to run the proxy server and target server on separate machines or use virtualization techniques, such as running them in separate containers or virtual machines. By doing so, you can simulate the communication between distinct client and server environments and observe different IP addresses. Further, the target server is exposed via a port forwarding as well, but in real world it could have been hidden on an internal network. This can also be easily simulated via `networks` in docker-compose.

1. Build containers
```sh
docker-compose build
```

2. Run
```sh
docker-compose up
```

3. Send HTTP requests to the relay proxy server, which will anonymize the client's IP address and forward the request to the target server.
```sh
curl -X GET http://localhost:3000/
```

> remember to remove your containers once you stop the process.
```sh
docker-compose down
```

## License

This project is licensed under the MIT License.
