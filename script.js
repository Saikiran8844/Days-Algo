function solve(s){
   op = {'Mon':0, 'Tue':0, 'Wed':0,'Thu':0, 'Fri':0,'Sat':0, 'Sun':0}
   days =['Mon', 'Tue', 'Wed', 'Thu','Fri', 'Sat', 'Sun']
   day_e=['Sun','Mon', 'Tue', 'Wed', 'Thu','Fri', 'Sat']
   let z=0
  for(var key in s){
     let day=new Date(key+"Z");
     let x=day.getDay();
     let y=day_e[x]
     op[y]+=s[key]
  }
  for(var key in op){
     if(op[key]==0){
        op[key]+=z+2
        z=op[key]
    }
    else{
        z=op[key]
    }
  }
  return op
}

//let s={'2020-01-01':4,'2020-01-02':4,'2020-01-03':6,'2020-01-04':8,'2020-01-05':2,'2020-01-06':-6,'2020-01-07':2,'2020-01-08':-2}

let s = {'2020-01-01':6,'2020-01-04':12,'2020-01-05':14,'2020-01-06':2,'2020-01-07':4}
console.log(solve(s))