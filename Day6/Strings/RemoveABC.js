/*Create a function that will remove the letters "a", "b" and "c" from the 
given string and return the modified version. If the given string
 does not contain "a", "b", or "c", return null.*/

function removeABC(str)
{
    let isPresent=false;
    for(let i=0;i<str.length;i++)
    {
        if(str.charAt(i)=='a'||str.charAt(i)=='b'||str.charAt(i)=='c')
        {
            str=str.replace(str.charAt(i),'');
            isPresent=true;
        }
    }
    if(isPresent==false)
    {
        return null;
    }
    return str;
}

 console.log(removeABC("This might be a bit hard"));//This might e  it hrd

 console.log(removeABC("hello world!"));//null

 console.log(removeABC(""));//null