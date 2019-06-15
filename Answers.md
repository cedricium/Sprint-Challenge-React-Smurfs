1.  Explain the differences between `client-side routing` and `server-side routing`.

`server-side routing`: When a web resource is requested, the client asks the server
for said resources. The server then returns the resources (typically a document).
The server also refreshes the webpage in order for the new resources to be displayed.

`client-side routing`: Unlike server-side rendering, when a resource is requested,
the request doesn't go to a server. Rather, the internal state is instead returned
that is already available resulting in smaller request sizes.

1.  What does HTTP stand for?

Hypertext Transfer Protocol

1.  What does CRUD stand for?

Create, Read, Update, Delete

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

```
Create --- POST 
Read ----- GET
Update --- PUT
Delete --- DELETE
```

1.  Mention three tools we can use to make AJAX requests

- browser-native `fetch` API
- `axios` package
- `XMLHttpRequest` (XHR) web API
