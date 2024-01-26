
const App = () => {
  interface User{
    name: string;
    id: number;
  }
  const newUser = (name:string, id:number)=>{
    console.log(name)
    console.log(id)
  }

  const newUser2 = (user:User)=>{
    console.log(user.name)
    console.log(user.id)
  }

  newUser("Thazin",1);
  newUser2({name:"Sai", id:2})
  newUser2({name:"Myo", id:3, lastName:"Myat"}) //error

//Reusable declaration
  type Point={
    x: number;
    y: number;
  }
  
  function logPoint(p: Point) {
    console.log(p);
  }

  const point3 = { x: 12, y: 26, z: 89 };
  logPoint(point3); 
  
  const rect = { x: 33, y: 3, width: 30, height: 80 };
  logPoint(rect); 
  
  const color = { hex: "#187ABF" };
  logPoint(color); //error

//Union types
  type MyBool=true | false

  const checkBool = (isCheck:MyBool) =>{
    console.log(isCheck)
  }

  checkBool(true)

  type WindowStates = "open"|"closed"|"minimized"

  const setWindow = (wind : WindowStates)=>{
    console.log(wind)
  }

  setWindow("open")
  setWindow("maximized") //error

  const wrapInArray=(obj: string | string[])=>{
    if(typeof obj === "string"){
      return [obj]
    }
    return obj
  }

  const rValue = wrapInArray("Thazin Naing")
  console.log(rValue)

  const rValue2 = wrapInArray(["sai myo Myat"])
  console.log(rValue2)

//generics
  type StringArray = Array<string>;
  type NumberArray = Array<number>;
  type ObjectArray = Array<{name:string,id:number}>

  const strArr:StringArray =["t","h","z"]
  console.log(strArr)

  const numArr:NumberArray = [1,2,3,4]
  console.log(numArr)

  const objArr : ObjectArray = [{name:"Thazin",id:1},{name:"Naing",id:2}]
  console.log(objArr)

// type annotations in parameter
  const greet=(person:string, date:Date)=>{
    console.log("Hello ".concat(person, ", Today is").concat(date.toDateString(), "!"))
    console.log(`Hi ${person}, Today is ${date.toDateString()}! A good day. `)
  }
  greet("Hazal", new Date())

  let myName="Myat Myat"
  console.log(typeof(myName))
  myName="MYO"

  const getFavouriteNumber=():number=>{
    return 23
  }
  console.log(getFavouriteNumber());

//Declare return type in function
  const addTwoNumbers=(a:number, b:number):string=>{
    return (`Add two numbers, ${a} and ${b} is ${a+b}`)
  }

  console.log(addTwoNumbers(2,4))

  const asyncFun=async():Promise<{name:string, id:number}>=>{
    return {name:"Hla", id:2};
  }
  console.log(asyncFun())

//contextual typing because the context that the function within informs what type it should have
  const names=["Alice", "Bob", "Eve"]

  names.forEach((name)=>{
    console.log(name.toUpperCase())
  })

  //adding properties or options with ? 
  const printName=(obj:{first:string, last?:string})=>{
    console.log(`First name is ${obj.first} Last name is ${obj.last}`)
  }

  printName({first:"Pu", last:"Tuu"})
  printName({first:"Naing"})

//Difference between interface and type
//Extending an interface
  interface Animal{
    name:string;
  }
  interface Bear extends Animal{
    honey:boolean;
  }
  const getBear=():Bear=>{
    return {name:"Polar",honey:true}
  }
  const bear=getBear();
  console.log(bear.name+" "+bear.honey)

//Extending a type via intersections
  type Tree={
    name:string;
  }
  type Mango=Tree &{
    big:boolean;
  }
  const getTree=():Mango=>{
    return {name:"Mango",big:true}
  }
  const tree=getTree();
    console.log(tree.name+" "+tree.big)

  //Adding new fields to an existing interface
    interface Window{
      title: string;
    }
    interface Window{
      id:number
    }
    const getWindow=(window:Window)=>{
      console.log(window.title+" "+window.id)
    }
    getWindow({title:"DELL",id:4})

  //A type cannot be changed after being created
  //Duplicate identifier
    type Trip={
      name:string
    }
    // type Trip={
    //   id:number
    // }

  //type assertions (as)
    const myRoot=document.getElementById("root") as HTMLCanvasElement;
    console.log(myRoot)

// Literal types
  const printText=(s:string, alignment:"center"|"left"|"right")=>{
    console.log(s+" "+alignment)
  }
  printText("Hello","center")

  interface Options{
    width:number
  }
  const configure=(x:Options | "auto")=>{
    console.log(x)
  }
  configure({width:100})
  configure("auto")

  const mytype=true
  const obj={counter:0}
    if(mytype){
      obj.counter=1
    }
  console.log(obj.counter)

//Literal Inference (as const)
  const handleRequest=(url:string, method:"GET"|"POST")=>{
    console.log(url+" "+method)
  }
  const req={url:"https://iii.com",method:"GET" as "GET"}
  handleRequest(req.url, req.method as "GET")

  const req1={url:"https://iii.com",method:"GET"} as const
  handleRequest(req1.url, req1.method)

//Non-null Assertion Operator (Postfix !)
  const liveDangerously=(x?:number | null)=>{
    console.log(x!.toFixed())
  }
  liveDangerously(3)

//bigint with function (BigInt) and literal syntax(...n)
  const oneHundred:bigint= BigInt(100)
  const anotherHundred:bigint=200n
  console.log(oneHundred+" "+anotherHundred)

//symbol (symbols are unique and immutable)
  const firstName=Symbol("name")
  const secondName=Symbol("name")

  const isEqual=firstName === secondName //They are never be the same







  return (
    <div>
      Hello
    </div>
  )
}

export default App
