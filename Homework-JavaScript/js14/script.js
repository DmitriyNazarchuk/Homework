{
    const table = {
        tagName: 'table',
        attrs: {
            border: "1",
        },
        children: [
            {
                tagName: 'tr',
                children: [
                    {
                        tagName: "td",
                        children: ["1x1"],
                    },
                    {
                        tagName: "td",
                        children: ["1x2"],
                    },
                ]
            },
            {
                tagName: 'tr',
                children: [
                    {
                        tagName: "td",
                        children: ["2x1"],
                    },
                    {
                        tagName: "td",
                        children: ["2x2"],
                    },
                ]
            }
        ]
    }

    function htmlTree(obj) {
        if (typeof obj === 'string') {
            return obj;
        }

        const { tagName, attrs, children } = obj;
        let str = `<${tagName}`;
        
        if (attrs) {
            for (const [key, value] of Object.entries(attrs)) {
                str += ` ${key}='${value}'`;
            }
        }

        str += '>';

        if (children) {
            for (const child of children) {
                str += htmlTree(child);
            }
        }

        str += `</${tagName}>`;
        return str;
}

const htmlString = htmlTree(table);
document.write(htmlString);
}

{
    const table = {
        tagName: 'table',
        attrs: {
            border: "1",
        },
        children: [
            {
                tagName: 'tr',
                children: [
                    {
                        tagName: "td",
                        children: ["1x1"],
                    },
                    {
                        tagName: "td",
                        children: ["1x2"],
                    },
                ]
            },
            {
                tagName: 'tr',
                children: [
                    {
                        tagName: "td",
                        children: ["2x1"],
                    },
                    {
                        tagName: "td",
                        children: ["2x2"],
                    },
                ]
            }
        ]
    }

    function domTree(parent, obj) {
        if (typeof obj === 'string') {
            const textObj = document.createTextNode(obj);
            parent.appendChild(textObj);
        } else {
            const { tagName, attrs, children } = obj;
            const element = document.createElement(tagName);
            
            if (attrs) {
                for (const [key, value] of Object.entries(attrs)) {
                    element.setAttribute(key, value);
                }
            }
            
            parent.appendChild(element);
            
            if (children) {
                for (const child of children) {
                    domTree(element, child);
                }
            }
        }
    }
    

    domTree(document.body, table)
}

{
    function deepCopy(obj) {
        if (typeof obj !== 'object' || obj === null) {
            return obj;
        }
    
        let copy = Array.isArray(obj) ? [] : {};
        
        for (const key in obj) {
            copy[key] = deepCopy(obj[key]);
        }
        
        return copy;
    }

        const table = {
        tagName: 'table',
        attrs: {
            border: "1",
        },
        children: [
            {
                tagName: 'tr',
                children: [
                    {
                        tagName: "td",
                        children: ["1x1"],
                    },
                    {
                        tagName: "td",
                        children: ["1x2"],
                    },
                ]
            },
            {
                tagName: 'tr',
                children: [
                    {
                        tagName: "td",
                        children: ["2x1"],
                    },
                    {
                        tagName: "td",
                        children: ["2x2"],
                    },
                ]
            }
        ]
    }

    const arr  = [1,"string", null, undefined, {a: 15, b: 10, c: [1,2,3,4],d: undefined, e: true }, true, false]
    const arr2 = deepCopy(arr) //arr2 та всі його вкладені масиви та об'єкти - інші об'єкти, які можна змінювати без ризику поміняти щось у arr
    console.log(arr2);
    const table2 = deepCopy(table) // Аналогічно
    console.log(table2);
}

{
    function stringify(obj) {
        if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
            return String(obj);
        }
        if (typeof obj === 'string') {
            return `"${obj}"`;  
        }
        if (typeof obj === 'undefined') {
            return 'null';
        }
        if (Array.isArray(obj)) {
            const arrStr = obj.map(item => stringify(item)).join(',');
            return `[${arrStr}]`;
        }
        if (typeof obj === 'object') {
            const objStr = Object.entries(obj)
                .map(([key, value]) => `"${key}":${stringify(value)}`)
                .join(',');
            return `{${objStr}}`;
        }
    }
        

    const table = {
        tagName: 'table',
        attrs: {
            border: "1",
        },
        children: [
            {
                tagName: 'tr',
                children: [
                    {
                        tagName: "td",
                        children: ["1x1"],
                    },
                    {
                        tagName: "td",
                        children: ["1x2"],
                    },
                ]
            },
            {
                tagName: 'tr',
                children: [
                    {
                        tagName: "td",
                        children: ["2x1"],
                    },
                    {
                        tagName: "td",
                        children: ["2x2"],
                    },
                ]
            }
        ]
    }

    const arr  = [1,"string", null, undefined, {a: 15, b: 10, c: [1,2,3,4],d: undefined, e: true }, true, false]
    const jsonString = stringify(arr) //Напишіть функцію stringify без використання JSON.stringify
    console.log(stringify(arr));
    const jsonString2 = stringify(table) //Напишіть функцію stringify без використання JSON.stringify
    console.log(JSON.parse(jsonString)) //не повинно поламатися і повернути структуру, у всьому схожу з оригінальним arr або table
    console.log(jsonString);
    console.log(jsonString === JSON.stringify(arr)) //повинно бути true
    console.log(jsonString2 === JSON.stringify(table)) //повинно бути true 

}

{
    function getElementById(idToFind) {
        function walker(parent) {
            if (parent.id === idToFind) {
                throw parent;
            }
            if (parent.children) {
                for (let i = 0; i < parent.children.length; i++) {
                    walker(parent.children[i]);
                }
            }
        }
    
        try {
            walker(document.body);
        } catch (element) {
            return element;
        }
    
        return null;
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        const foundElement = getElementById('test');
        console.log(foundElement); 
    });
}