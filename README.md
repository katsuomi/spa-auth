## Cookie

An HTTP cookie (web cookie, browser cookie) is a small piece of data that a server sends to the user's web browser. 

The browser may store it and send it back with the next request to the same server. 
Typically, it's used to tell if two requests came from the same browser — keeping a user logged-in, for example. 
It remembers stateful information for the stateless HTTP protocol.

## A typical HTTP session

In client-server protocols, like HTTP, sessions consist of three phases:

1. The client establishes a TCP connection (or the appropriate connection if the transport layer is not TCP).

2. The client sends its request, and waits for the answer.

3. The server processes the request, sending back its answer, providing a status code and appropriate data.

As of HTTP/1.1, the connection is no longer closed after completing the third phase, and the client is now granted a further request: this means the second and third phases can now be performed any number of times.
