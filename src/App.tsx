interface User{
  name: string;
  id: number;
}
const App = () => {

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
  newUser2({name:"Myo", id:3, lastName:"Myat"})

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
  setWindow("maximized")

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

  type StringArray = Array<string>;
  type NumberArray = Array<number>;
  type ObjectArray = Array<{name:string,id:number}>

  const strArr:StringArray =["t","h","z"]
  console.log(strArr)

  const numArr:NumberArray = [1,2,3,4]
  console.log(numArr)

  const objArr : ObjectArray = [{name:"Thazin",id:1},{name:"Naing",id:2}]
  console.log(objArr)

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

  



  

  return (
    <div>
      Hello
    </div>
  )
}

export default App
