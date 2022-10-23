import style from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={ style.footer }>
      <p>*As imagens dos produtos sao meramente ilustrativas</p>
      <p>A lista de presentes foi criada de maneira pessoal, sendo necessario ir atras de comprar o presente escolhido no site ou loja de sua preferencia</p>
    </footer>
  )
}

export default Footer;