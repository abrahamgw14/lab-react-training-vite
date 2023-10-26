import BoxColor from "../components/box-color/BoxColor"
import Greetings from "../components/Greetings"
import IdCard from "../components/Idcard"
import Random from "../components/random/Random"
import BoxColor from "../components/box-color/BoxColor"
import CreditCard from "./components/creditCard"
import Rating from "../components/rating/Rating"
import DriverCard from "./components/driverCard"


function App() {

  return ( 
    <IdCard 
      firstName={"Carlos"}
      lastName={"Montoya"}
      gender={"male"}
      height={180}
      birth={new Date("1994-10-23").toDateString()}
      picture="https://randomuser.me/api/portraits/men/44.jpg"
      
      
    />,

    <IdCard
        lastName='Delores'
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />,

    <div>
      <Greetings language={"en"}/>
      <Greetings language={"fr"}/>
    </div>,

    <Random min={1} max={6} />,
    <Random min={1} max={100} />,

<div>
  <BoxColor r={255} g={0} b={0}/>
  <BoxColor r={0} g={255} b={0}/>
  <BoxColor r={0} g={0} b={255}/>
</div>,

<div>
  <Rating>0</Rating>
  <Rating>1.49</Rating>
  <Rating>1.5</Rating>
  <Rating>3</Rating>
  <Rating>4</Rating>
  <Rating>5</Rating>
</div>,

<DriverCard
  name="Travis Kalanick"
  rating={4.2}
  img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
  car={{
    model: "Toyota Corolla Altis",
    licensePlate: "CO42DE"
  }}
/>,

<DriverCard
name="Dara Khosrowshahi"
rating={4.9}
img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
car={{
  model: "Audi A3",
  licensePlate: "BE33ER"
}}
/>

  );
}

export default App;