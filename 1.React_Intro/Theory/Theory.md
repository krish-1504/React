## Q.1 What is Emmet?
Emmet is plugin for code editor like VScode to allow us to code faster.
for ex : IN HTML5:
you do this => !
so you get this code 

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

2. div>div>p :

```
<div>
    <div>
        <p></p>
    </div>
</div>
```

## Q.2 Diff. b/w LIB. & FrameWork?
A library is a piece of code that we can incorporate in our exixsting project via a CDN or as a package. A liberary does not affect our project structure. whereas a framework is a structured set of librraries and packages implementing a perticular methodology that we have to follow to create a project.

## What Is CDN?
CDN is known as `Content delivery network` that provides us different type of assets / features / libraries created by others over the internet. Using a CND reduces our effort to implement a functionality that is already existing somewhere else that we can simply use via CND.

## What is Cross-Orgin ?
`Cross-origin resource` sharing (CORS) is an HTTP based machenism that allows a server to indicate any origin other than its own from which the browser should permit loading the resources.

The crossorigin attribute sets the mode of the request to an HTTP CORS Request. The purpose of crossorigin attribute is used to share the resources from one domain to another domain. Basically, it is used to handle the CORS request. It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.


## React vs React DOM?
react is used to create view on other hand reactdom is used to render components in web ui.

## What Is React.development.js and react.production.js ?
react.development.js is used for development purpose and the code is not compressed while react.production.js is used for production purposes and the code for this library is compressed.

## What Is difference between `Async` and `Defer` ?
async and defer are `boolean attributes` which are used along with the script tag to load the external scripts efficiently in our we page.

The async and defer attributes both allow the browser to continue parsing the HTML document while JavaScript files are being downloaded, but they differ in when those files are executed.

Async downloads and executes JavaScript as soon as it’s available, while defer attribute waits until the HTML document has been parsed before downloading and executing any external scripts.

In most cases, it doesn’t matter which attribute you use – both will improve performance by allowing the browser to continue parsing while waiting for JavaScript to download. However, there are some situations where one attribute may be preferable to the other.
