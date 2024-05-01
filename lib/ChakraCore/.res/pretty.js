var backslashN = '\n';
function pretty(obj, space) {
    var indent = '',
        subIndents = '';
    if (space == null) space = 4;
    if (typeof space == 'number') {
        for (var i = 0; i < space; i++) {
            indent += ' ';
        }
    } else if (typeof space == 'string') {
        indent = space;
    }
    function str(obj) {
        var jsType = Object.prototype.toString.call(obj);
        if (
            jsType.match(/object (String|Date|Function|JSON|Math|RegExp)/)
        ) {
            return JSON.stringify(String(obj));
        } else if (jsType.match(/object (Number|Boolean|Null)/)) {
            return JSON.stringify(obj);
        } else if (jsType.match(/object Undefined/)) {
            return JSON.stringify('undefined');
        } else {
            if (jsType.match(/object (Array|Arguments|Map|Set)/)) {
                if (jsType.match(/object (Map|Set)/)) {
                    /* es6新增的方法和参数类型 */
                    obj = Array.from(obj);
                }
                var partial = [];
                subIndents = subIndents + indent;
                var len = obj.length;
                for (var i = 0; i < len; i++) {
                    partial.push(str(obj[i]));
                }
                var result =
                    len == 0
                        ? '[]'
                        : indent.length
                        ? '[' +
                        backslashN +
                        subIndents +
                        partial.join(',' + backslashN + subIndents) +
                        backslashN +
                        subIndents.slice(indent.length) +
                        ']'
                        : '[' + partial.join(',') + ']';
                subIndents = subIndents.slice(indent.length);
                return result;
            } else if (
                jsType.match(
                    /object (Object|Error|global|Window|HTMLDocument)/i
                ) ||
                obj instanceof Error
            ) {
                var partial = [];
                subIndents = subIndents + indent;
                var ownProps = Object.getOwnPropertyNames(obj);
                /* Object.keys 为自身非继承属性(不用for in因为for遍历继承的祖先属性)，Object.getOwnPropertyNames 在前者基础上包括不可枚举属性  */
                var len = ownProps.length;
                for (var i = 0; i < len; i++) {
                    partial.push(
                        str(ownProps[i]) +
                            (indent.length ? ': ' : ':') +
                            str(obj[ownProps[i]])
                    );
                }
                var result =
                    len == 0
                        ? '{}'
                        : indent.length
                        ? '{' +
                        backslashN +
                        subIndents +
                        partial.join(',' + backslashN + subIndents) +
                        backslashN +
                        subIndents.slice(indent.length) +
                        '}'
                        : '{' + partial.join(',') + '}';
                subIndents = subIndents.slice(indent.length);
                return result;
            } else {
                return JSON.stringify(String(obj));
            }
        }
    }
    function decycle(obj) {
        /* the function can solve circular structure like JSON.decycle, the return value can be decoded by JSON.retrocycle(JSON.parse()) */
        var arrParents = [];
        return (function derez(obj, path) {
            var jsType = Object.prototype.toString.call(obj);
            if (
                jsType.match(
                    /object (String|Date|Function|JSON|Math|RegExp|Number|Boolean|Null|Undefined)/
                )
            ) {
                return obj;
            } else {
                if (jsType.match(/object (Array|Arguments|Map|Set)/)) {
                    var len = arrParents.length;
                    for (var i = 0; i < len; i++) {
                        /* arr like [obj, '$'] */
                        var arr = arrParents[i];
                        if (obj === arr[0]) {
                            return { $ref: arr[1] };
                        }
                    }
                    arrParents.push([obj, path]);
                    var newObj = [];
                    if (jsType.match(/object (Map|Set)/)) {
                        /* es6新增的方法和参数类型 */
                        obj = Array.from(obj);
                    }
                    var length = obj.length;
                    for (var i = 0; i < length; i++) {
                        newObj[i] = derez(obj[i], path + '[' + i + ']');
                    }
                    return newObj;
                } else {
                    var len = arrParents.length;
                    for (var i = 0; i < len; i++) {
                        /* arr like [obj, '$'] */
                        var arr = arrParents[i];
                        if (obj === arr[0]) {
                            return { $ref: arr[1] };
                        }
                    }
                    arrParents.push([obj, path]);
                    var newObj = {};
                    var ownProps = Object.getOwnPropertyNames(obj);
                    var length = ownProps.length;
                    for (var i = 0; i < length; i++) {
                        newObj[ownProps[i]] = derez(
                            obj[ownProps[i]],
                            path + '[' + JSON.stringify(ownProps[i]) + ']'
                        );
                    }
                    return newObj;
                }
            }
        })(obj, '$');
    }
    return str(decycle(obj));
}