<!-- INFO TABLE BEGIN -->

| Source                                                                               | Solutions                                                                                                                                                    |
| :----------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [`Manipulate URL Parameters`](https://www.codewars.com/kata/524300d5add6f657e20008ff) | [<img src="https://res.cloudinary.com/rascaltwo/image/upload/v1631924076/javascript_ehszr7.svg" alt="JavaScript" title="JavaScript" width="50" />](s05.js) |

<!-- INFO TABLE END -->

You need to write a function ( `addOrChangeUrlParameter(url, keyValueParameter)` ) that can manipulate URL parameters.

It should be able to

-   add a parameter to an existing URL,

but also to

-   change a parameter if it already exists.

### Example:

```

addOrChangeUrlParameter("www.example.com", "key=value")
// -> 'www.example.com?key=value' (adds a parameter).

addOrChangeUrlParameter("www.example.com?key=value", "key2=value2" )
// -> 'www.example.com?key=value&key2=value2' (adds another parameter).

addOrChangeUrlParameter("www.example.com?key=oldValue`", "key=newValue" )
// ->'www.example.com?key=newValue' (changes the parameter).
```
