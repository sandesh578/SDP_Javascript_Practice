//By default built in toString is non enumerable but when we create our own it is enumerable
let user={
    name:"Sandesh Parajuli",
    roll:950,
    toString(){
        return this.name;
    }
};

//it is enumerable
for(let key in user)
{
    console.log(key);
}
/*Output
name
roll
toString
*/

Object.defineProperty(user,"toString",{
    enumerable: false
});

//now toString is not visible as it is non enumerable and cannot be listed in loops
for(let key in user)
{
    console.log(key);
}
/*Output
name
roll
*/


//Non-enumerable properties are also excluded from Object.keys
console.log(Object.keys(user));//[ 'name', 'roll' ]