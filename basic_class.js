import _ from "lodash";
class Student {
  constructor(name, age,city,branch,batch) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.branch = branch;
    this.batch = batch;
    //console.log("New student added");
  }
  
  moreage()
  {
          if(this.age>19)
          console.log(this.name);
}
  
  citybc()
  {
      if(this.city =='blr' || this.city=='che')
      console.log(this.name);
  }
  
  
}


let students = [new Student('Darshan',20,'che','cbe',19),
                  new Student('Ram',21,'che','cbe',19),
                  new Student('Shyam',22,'blr','blr',19),
                  new Student('Bunty',19,'che','cbe',19),
                  new Student('Babu',18,'blr','blr',19),
                  new Student('Kumar',20,'mad','cbe',19),
                  new Student('Harsh',20,'mad','cbe',19),
                  new Student('Kashyap',20,'mad','blr',19),
                  new Student('Sid',20,'che','blr',19),
                  new Student('Mathan',20,'mad','blr',19)];

console.log("Students with age >19:");
for(let i=0;i<10;i++)
{
    students[i].moreage();
}
console.log("Students with City as blr/che:");
for(let i=0;i<10;i++)
{
    students[i].citybc();
}
//sort students record based on branch 

var sortedObjs = _.sortBy( students, 'branch' );
console.log(sortedObjs);
