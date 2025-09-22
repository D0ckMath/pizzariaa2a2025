const CadastroProduto = () => {

    return(
        <div className="Produtos">

            <h3>Cadastro de Produtos
                <input type="text" id="id" placeholder="0" disabled />
                <input type="text" id="nome" placeholder="nome do produto" disabled />
                <input type="text" id="descrição" placeholder="descrição" disabled />
                <input type="text" id="tipo" placeholder="tipo de produto" disabled />
                <input type="text" id="preco" placeholder="valor do produto" disabled />
                <input type="text" id="categoriaId" placeholder="1" disabled />

                 <input type="type" value="Cadatrar" onClick={()=>{alert('Cadastrar Produto')}} />
            </h3>
        </div>

    )
}

export default CadastroProduto