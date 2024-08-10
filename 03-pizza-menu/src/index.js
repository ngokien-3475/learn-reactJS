import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all oranic, all delicious
          </p>
          <ul className="pizzas">
            {[
              pizzas.map((pizza) => (
                <Pizza pizzaObj={pizza} key={pizza.name} />
              )),
            ]}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
      <ul className="pizzas">
        {[
          pizzas.map((pizza) => (
            // <Pizza name={pizza.name} photoName={pizza.photoName} />
            // C1
            <Pizza pizzaObj={pizza} key={pizza.name} />
            // C2
            // <li className="pizza">
            //   <img src={pizza.photoName} alt={pizza.name} />
            //   <div>
            //     <h3>{pizza.name}</h3>
            //     <p>{pizza.ingredient}</p>
            //     <span>{pizza.price}</span>
            //   </div>
            // </li>
          )),
        ]}
      </ul>
      {/* <Pizza
        name="Pizza Spinaci"
        ingredient="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredient="Tomato, mushrooms"
        photoName="pizzas/funghi.jpg"
        price={12}
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);

  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredient}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 0;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  if (hour >= openHour && hour <= closeHour) alert("We're currently open");
  else alert("Sorry we're closed");

  console.log(hour);

  // if (!isOpen) {
  //   return <p>CLOSED</p>;
  // }
  return (
    <footer className="fotter">
      {/* C1 */}
      {/* {new Date().toLocaleTimeString()}. We're currently open */}
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {closeHour}:00 and {closeHour}
          :00.
        </p>
      )}
    </footer>
  );
  // return React.createElement("footer", null, "We're currently open!");
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour} to {closeHour} : 00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // React.StrictMode 1 component đặc biệt. Giúp cảnh báo về các thay đổi không an toàn
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// REact before 18
// React.render(<App />);
