//Create a function that moves all capital letters to the front of a word.

function capToFront(str)
{
    let res='';
    for(let i=0;i<str.length;i++)
    {
        if(str.charAt(i).codePointAt(0)>=65&&str.charAt(i).codePointAt(0)<=90)
        {
           res+=str.charAt(i);
        }
    }
    for(let i=0;i<str.length;i++)
    {
        if(str.charAt(i).codePointAt(0)>=97&&str.charAt(i).codePointAt(0)<=122)
        {
           res+=str.charAt(i);
        }
    }
    return res;
}

console.log(capToFront("hApPy"));//APhpy

console.log(capToFront("moveMENT"));//MENTmove

console.log(capToFront("shOrtCAKE"));//OCAKEshrt