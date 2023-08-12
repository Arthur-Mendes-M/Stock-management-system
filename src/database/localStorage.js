export const getLocalData = ({localName}) => {
    const searchResult = localStorage.getItem(localName)

    return searchResult ? JSON.parse(searchResult) : null

    // throw new Response('Suspichos', {status: 404})
    // console.log('Isso esta sendo executado')
}

export const getProduct = ({params}) => {
    // localStorage.setItem('products', JSON.stringify([{id: 1, name: 'First product', price: 2000}, {id: 2, name: 'Second product', price: 100}]))
    const allProducts = getLocalData({localName: 'products'})

    if(!allProducts) {
        throw new Response('Não existem produtos na lista', {status: 500})
    }

    const product = allProducts.filter(product => product.id == params.productId)[0]

    if(!product) {
        throw new Response('Produto não encontrado', {status: 404})
    }

    return product
}

export const saveLocalData = ({localName, data}) => {
    localStorage.setItem(localName, data)
}