# TOPIC: Fastify

## 1. Identify the "Why?"
I saw this thing mentioned in a job posting, and I kinda want that job
-- OR --
I want to know if there are alternatives to anything that I've used
-- OR --
I want to ensure that the tools I'm using for my project are the tools
best suited for the features I'm looking to build

## 2. Listing Assumptions and Prior Knowledge
- Fastify is a JavaScript framework for building web API's *
- Fastify is a potential alternative to Express
- Fastify cannot be used to build a client-side application

## 3. Ask Questions
- How does Fastify support database integration?
- What is needed to configure a Fastify application?
- Does Fastify support global and/or route specific middleware?
- Does Fastify support HTTP
- How does Fastify compare to Express
- What are the biggest limitations with regard to API design?
- What is it good at
- What is it bad at
## 4. Find Resources
- https://www.fastify.io/docs/latest/
- https://blog.appsignal.com/2023/04/26/getting-started-with-fastify-for-nodejs.html
- https://www.youtube.com/watch?v=k1FSybMulVQ
- https://medium.com/@fastifyjs 
- https://tsh.io/blog/fastify-practical-overview/
- https://twitter.com/fastifyjs?lang=en
- https://snyk.io/advisor/npm-package/fastify
## 5. Answer Questions asked
1. Fastify looks to have a pretty diverse set of database integration options. Most of the heavy hitters look to be supported "out of the box," with options to create your own plugins to support some other database not supported out of the box. The "out of the box" supported plugins are also maintained by the Fastify developers themselves.
2. Fastify, when creating the server itself, accepts a configuration object. This object is designed to have a robust set of configurable features, from URL parsing to request body size, etc. 
3. Unfortunately, Fastify does not support middleware out of the box. However, you can implement external libraries to add middleware support. Additionally, what middleware support IS provided by these external libraries seems to be even more limited due to Fastify's routing rules.
4. Fastify not only supports HTTP, but HTTPS and even HTTP/2 protocols.
5. One the really useful features of Express is the simplicity in which you can add middleware, both globally and locally. So with regards to middleware, Fastify is worse for middleware. Fastify is faster than Express in that it is optimized to process more requests per second. It also has encapsulated plugin support, which reduces (or even eliminates) some of the cross-compatibility issues you may run into with Express when using multiple third party libararies. Fastify also is built with security in mind moreso than Express. There are specific features that, while possible in Express through the use of other libraries and packages, are baked into Fastify, such as request body validations. However, I'm not liking the lack of middleware support. 
6. There do not appear to be many limitations with regard to API design. The biggest flaw that I can find is that the type of middleware that simplifies the route handling logic is not necessarily possible in all routes with Fastify (specifically, it appears that you cannot use middleware plugins for routes with parameters).
7. Fastify excels at speed. It handles requests faster and can handle more simultaneously than Express. It also solves the potential problem of cross-depdenency middleware conflicts (although this is somewhat negated by Fastify's general lack of middleware support).
8. Lack of middleware is a major downside of Fastify. Fastify has a much smaller community, and thus fewer resources in terms of documentation, guides, forums, libraries, packages, etc. 
## 6. Summarize and Share 
Fastify seems like it MIGHT eventually be better alternative to Express. However, while the things that Fastify does better (i.e. built-in request validation, wider built-in database support, security options, more requests per second) are great, most of them can be done in Express with very little additional work. Additionally, many of the things that Express does better (i.e. MIDDLEWARE, having a community of support and resources) are NOT things that can be easily implemented into Fastify with external libraries/plugins/etc. Overall, I would assess that Express is the better option in most cases. However, Fastify is still an excellent choice for many, if not most, projects. 