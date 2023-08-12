export const getLocalData = ({localName}) => {
    const searchResult = localStorage.getItem(localName)

    return searchResult ? JSON.parse(searchResult) : null
}

export const saveLocalData = ({localName, data}) => {
    localStorage.setItem(localName, JSON.stringify(data))
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

export const saveProduct = ({product}) => {
    let allProducts = getLocalData({localName: 'products'}) ?? []
    allProducts.push(product)

    saveLocalData({localName: 'products', data: allProducts})

    return allProducts
}

export const updateProduct = ({productId, productData}) => {
    let allProducts = getLocalData({localName: 'products'})
    const foundProduct = allProducts.filter(savedProduct => savedProduct.id === productId)[0]

    if(!foundProduct)
        return null

    const productIndex = allProducts.indexOf(foundProduct)

    const updatedProduct = {
        ...foundProduct, 
        ...productData
    }

    allProducts.splice(productIndex, 1, updatedProduct)

    saveLocalData({localName: 'products', data: allProducts})

    return allProducts
}

export const removeProduct = ({productId}) => {
    let allProducts = getLocalData({localName: 'products'})
    const filteredProducts = allProducts.filter(savedProduct => savedProduct.id !== productId)

    saveLocalData({localName: 'products', data: filteredProducts})

    return filteredProducts
}