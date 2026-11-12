import './ListaProdutos.css'

import produto2 from '../../assets/img/produtos/le_grand_chocolat.png'
import UserProdutos from '../../assets/icones/user.svg'
import StarProdutos from '../../assets/icones/star.svg'
import imgBannerBolos from '../../assets/img/banner_3.png'
import { Link } from 'react-router-dom'
import Card from '../../components/card/Card'

function ListaProdutos() {
  return (
    <>
      <main>
        <section className="prod_banner" />
        <section className="container prod_container">
          <div className="box_h2">
            <h1>Nossos Bolos</h1>
            <span>Nos Gâteaux</span>
            <hr />
          </div>
          <div className="prod_cards">
            <Card
              imgProdutos={produto2}
              nome={'Le Grand Chocolat'}
              descricao={'Mousse de chocolate belga 70%'}
              valor={185.0}
              quantidadeAvaliacoes={10}
              nota={9.5}
            />
          </div>
        </section>
      </main>
    </>

  )
}

export default ListaProdutos;