[![npm version](https://badge.fury.io/js/uglass.svg)](https://badge.fury.io/js/uglass)

# uGlass
uGlass is a dead simple http request printer. I wrote it because I needed a quick tool to look into an http POST request sent by an host in my network.

### Installation
Just fire up your CLI and issue this command:

```bash
$ npm install -g uglass
```

### Usage
```bash
$ uglass
uglass is running on port 3000. Shoot me! :-)
```

Then you can send a test request to your `localhost:3000`:

```bash
$ http get localhost:3000 param1==Hello param2==World
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 0
Date: Mon, 18 Jan 2016 11:57:47 GMT
```

And you'll see that uGlass printed these parameters:

```
---
param1: Hello
param2: World
---
```

### Custom port
uGlass can listen on a custom port, just use the `-p` option:

```bash
$ uglass -p 8000
uglass is running on port 8000. Shoot me! :-)
```

## Contributions
Feel free to open PRs and issues!
