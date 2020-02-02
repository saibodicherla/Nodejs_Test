'use strict';
var arg1,arg2=[];
process.argv.forEach(function (val, index, array) {
  if(index==2)
  {
    arg1=val
  }
  else if(index==3)
  {
    arg2=val.split(",")
  }
});

const fs=require('fs');
let rawdata=fs.readFileSync('hj.json');
let stu=JSON.parse(rawdata);
var ans='';
if(stu.hasOwnProperty(arg1))
{
  var t=0;
  ans="> OK "
  for(var r=0;r<arg2.length;r++)
  {
    if(stu[arg1].hasOwnProperty(arg2[r]))
    {

      r==0 ? ans=ans+stu[arg1][arg2[r]] :  ans=ans+','+stu[arg1][arg2[r]]
    }
    else
    {
      ans="Fail NO_PRODUCT"
      break;
    }
  }
}
else
{
  ans="Fail NO_SUPPLER"
}
console.log(ans)





/*
if(r==0)
{
 ans=ans+stu[arg1][arg2[r]]
}
else
{
  ans=ans+','+stu[arg1][arg2[r]]
}*/