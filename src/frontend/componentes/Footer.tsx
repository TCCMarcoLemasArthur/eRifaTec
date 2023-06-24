import '../estilos/footer.css'

export default function Footer() {
  return (
    <>
      <footer className="footerbox">
        <div className="rodape">
          <div className="atalhos">
            <div className="link-section">
              <h5>Geral</h5>
              <ul>
                <li>
                  <span className="link-icon material-icons">
                    navigate_next
                  </span>
                  <a href="">Home</a>
                </li>
                <li>
                  <span className="link-icon material-icons">
                    navigate_next
                  </span>
                  <a href="">Sobre</a>

                </li>
                <li>
                  <span className="link-icon material-icons">
                    navigate_next
                  </span>
                  <a href="">Ajuda</a>
                </li>
                <li>
                  <span className="link-icon material-icons">
                    navigate_next
                  </span>
                  <a href="">Fale Conosco</a>
                </li>
              </ul>
            </div>
            <div className="link-section">
              <h5>Dúvidas</h5>
              <ul>
                <li>
                  <span className="link-icon material-icons">
                    navigate_next
                  </span>
                  <a href="">Como comprar</a>
                </li>
                <li>
                  <span className="link-icon material-icons">
                    navigate_next
                  </span>
                  <a href="">Como escolher meus números</a>
                </li>
                <li>
                  <span className="link-icon material-icons">
                    navigate_next
                  </span>
                  <a href="">Formas de pagamento</a>

                </li>
                <li>
                  <span className="link-icon material-icons">
                    navigate_next
                  </span>
                  <a href="">Como funciona o sorteio</a>
                </li>
              </ul>
            </div>
            <div className="link-section">
              <h5>Cliente</h5>
              <ul>
                <li>
                  <span className="link-icon material-icons">
                    navigate_next
                  </span>
                  <a href="">Minha conta</a>
                </li>
                <li>
                  <span className="link-icon material-icons">
                    navigate_next
                  </span>
                  <a href="">Minhas rifas</a>
                </li>
                <li>
                  <span className="link-icon material-icons">
                    navigate_next
                  </span>
                  <a href="">Meus prêmios</a>
                </li>
              </ul>
            </div>
            <div className="link-section">
              <h5>Gerente</h5>
              <ul>
                <li>
                  <span className="link-icon material-icons">
                    navigate_next
                  </span>
                  <a href="">Painel de rifas</a>
                </li>
                <li>
                  <span className="link-icon material-icons">
                    navigate_next
                  </span>
                  <a href="">Criar nova rifa</a>
                </li>
                <li>
                  <span className="link-icon material-icons">
                    navigate_next
                  </span>
                  <a href="">Gerenciar prêmios</a>
                </li>
              </ul>

            </div>
          </div>
          <div className="redes-sociais">
            <h5>SIGA-NOS</h5>
            <ul>
              <li>
                <a href="http://" target='_blank'>
                  <span className="fa-brands fa-facebook-f"></span>
                </a>
              </li>
              <li>
                <a href="http://" target='_blank'>
                  <span className='fa-brands fa-twitter'></span>
                </a>
              </li>
              <li>
                <a href="http://" target='_blank'>
                  <span className='fa-brands fa-youtube'></span>
                </a>
              </li>
              <li>
                <a href="http://" target='_blank'>
                  <span className='fa-brands fa-instagram'></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}