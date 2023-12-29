![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

# TSpew

A simple template printer for the JavaScript console.

### Install

```
npm install tspew
```

### Example Usage

Create a `template` file in the root of your project

```
touch template
```

Build your template using built in replacers and hex codes or you can supply your own later!

```
%fgHex[473cc2] _____                           _        _____                    _       _
| ____|_  ____ _ _ __ ___  _ __ | | ___  |_   _|__ _ __ ___  _ __ | | __ _| |_ ___
|  _| \ \/ / _` | '_ ` _ \| '_ \| |/ _ \   | |/ _ \ '_ ` _ \| '_ \| |/ _` | __/ _ \
| |___ >  < (_| | | | | | | |_) | |  __/   | |  __/ | | | | | |_) | | (_| | ||  __/
|_____/_/\_\__,_|_| |_| |_| .__/|_|\___|   |_|\___|_| |_| |_| .__/|_|\__,_|\__\___|
                          |_|                               |_|                    %reset

%bgHex[e37000]%fgHex[ffffff] Stats %reset

%fgHex[24d43b]%tick%reset Node Version: %fgHex[24d43b]20.12.0%reset
%fgHex[24d43b]%tick%reset Port: %fgHex[24d43b]3000%reset
%fgHex[d42424]%cross%reset Test Coverage: %fgHex[d42424]40%%reset
```

Call the template printer whenever you want to, for example when an express app starts

```
import express from "express";
import printTemplate from "tspew";

const app = express();

app.listen(3000, () => {
  printTemplate({ lineDelay: 20 });
});
```

![example](./.github/example.gif)
