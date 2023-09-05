"use client";
import styles from './page.module.css' // caminho do arquivo do styles
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0); // setando o state do contador
  const [cards, setCards] = useState([]); // setando o state que vai os componentes do card

  function handleIncrease() { // função responsável por aumentar o valor do contador e adicionar um card ao state cards
    setCount(count + 1);
    setCards([...cards, <MostrarValor key={count+1} string={"Card "+(count+1)}/>])
  }

  function handleDecrease() { // função responsável por diminuir o valor do contador e remover o último card adicionado
    if (count > 0) {
      setCards(cards.filter(c => c.key !== count.toString()));
      setCount(count - 1);
    }
  }

  return ( // return raíz da page
    <div className={styles.body}>
      <Header/>
      <div className={styles.main}>
        <h1 className={styles.h1}>Contador Interativo</h1>
        <Counter count={count} key={"="}/>  {/* contador (=)*/}
        <div className={styles.buttonContainer}>  {/* container dos 2 botões */}
          <Increase onClick={handleIncrease} key={"+"}/>  {/* Botão "Adicionar Um" (+)*/}
          <Decrease count={count} onClick={handleDecrease} key={"-"}/>  {/* Botão "Subtrair Um" (-)*/}
        </div>
        <div className={styles.cardContainer}>
          {cards} {/* state que armazena os cards */}
        </div>
      </div>
    </div>

  )
}

function Header() { // componente do header
  return (
    <div>
      <header className={styles.header}>
        <a href="https://ceosjr.com/" target="_blank"><img src="/ceos_logo.svg" height="40"/></a>
        <p className={styles.name}>Victor Gabriel Moreno</p>
      </header>
    </div>
  )
}

function Counter({ count }) { // componente do contador
  return (
    <p className={styles.counter}>{count}</p>
  )
}

function Increase({ onClick }) { // componente do botão "Aumentar Um"
  return (
    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded transition-colors duration-300 ease-in-out active:bg-blue-700" onClick={onClick}>
      Adicionar Um (+)
    </button>
  );
}
function Decrease({ onClick, count }) { // componente do botão "Subtrair Um"
  let decreaseButton = "bg-red-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed";
  if (count > 0) { // se o contador >= 1, exibe o botão 
    decreaseButton = "bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded transition-colors duration-300 ease-in-out active:bg-red-700";
  }
  return (
    <button className={decreaseButton} onClick={onClick}>
      Subtrair Um (-)
    </button>
  );
}

function MostrarValor({ string }) { // componente do card que recebe uma string como propriedade e a exibe centralizada
  return (
    <div className = {"max-w-sm rounded overflow-hidden shadow-lg"} id={styles.card} /*className={styles.card}*/>
      {string}
    </div>
  )
}