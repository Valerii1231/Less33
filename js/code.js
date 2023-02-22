//  1

fetch('../json/data.json')
.then(response => response.json())
.then(data => showAdminName(data))
 
function showAdminName(data) {
    iterate(data);
    function iterate(obj) {
        Object.keys(obj).forEach(p => {
            if (typeof obj[p] === 'object') {               
                iterate(obj[p]);
            } else {              
                if (obj[p] === true) {              
                    console.log(obj.name);
                }
            }
        });
    };
}





//  2
let nikola = {
    firstName: 'Nikola',
    lastName: 'Tesla'
};
let bob = {
    firstName: 'Bob'
};
let mike = {
    lastName: 'Smith'
};
let michael = {};
let getFullName = function (user) {
    return `${user.firstName} ${user.lastName}`;
}

getFullName = new Proxy(getFullName, {
    apply(target, thisArg, args) {
        for (let key of args) {
            if (Object.keys(key).length === 0) {
                return `${'No name'}`
            }
            for (let k in key) {
                if (Object.keys(key).length === 1) {
                    return `${key[k]}`;
                }
            }
            return target(key);
        }
    }
});

console.log(getFullName(nikola));
console.log(getFullName(bob));
console.log(getFullName(mike));
console.log(getFullName(michael));





//  3
let user = [{
        name: 'Nikola',
        age: 18,
        id: 1
    },
    {
        name: 'Bob',
        age: 25,
        id: 2
    },
    {
        name: 'Mike',
        age: 32,
        id: 3
    },
]
localStorage.setItem('user', JSON.stringify(user));

function sayHelloToUser(id) {
    let arr = JSON.parse(localStorage.getItem('user'));
    for (let item of arr) {
        for (let i in item) {
            if (i === 'id' && item[i] === id) {
                console.log('Hello: ', item.name);
            }
        }
    }
}

sayHelloToUser(3);





//  4

function showValue (){ 
    localStorage.setItem('input', JSON.stringify(document.querySelector ('input').value ));
}
const btn = document.querySelector ('button');
btn.addEventListener('click', showValue);
document.querySelector ('input').value = localStorage.getItem('input');

