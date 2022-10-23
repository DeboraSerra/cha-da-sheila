import style from './Home.module.scss';

const Home = () => {
  return (
    <main className={style.main}>
      <h1>Cha de casa nova</h1>
      <div>
        <p>Cha de casa nova da Sheila!</p>
        <p>Escolha na lista de presentes disponiveis aquele que voce vai dar de presente e escreva um mensagem para Sheila!</p>
      </div>
    </main>
  )
}

export default Home;