# Welp Sidebar

## A microservice for Welp a Yelp Clone

Reimplemented the backend component of the microservice my team inherited. 
Frontend is fully functional and wasn't changed. In choosing the right database
for the project I benchmarked MongoDB and postgres with the existing legacy code to 
determine which suits the project. Scaled the backend by implementing a Nginx Load Balancer
and multiple mircoservices. The server and database were optimized through pooling and caching.
