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

  return (
    <div>
      Hello
    </div>
  )
}

export default App
