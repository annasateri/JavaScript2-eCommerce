export default {
    state: {
        cart: []
    },
    getters: {
        cart: state => {
            return state.cart
        },
        cartItemCount: state => {
            let items = 0
            state.cart.forEach(item => {
                items += item.quantity
            })
            return items
        },
        totalAmount: state => {
            let total = 0
            state.cart.forEach(totals => {
                total += totals.amount
            })
            return total
        }
    },
    mutations: {
        ADD_TO_CART: (state, {product, quantity, amount}) => {
            let exists = state.cart.find(item => item.product._id === product._id)
            if(exists) {
                exists.quantity += quantity
                exists.amount += amount
                return
            }
            state.cart.push({product, quantity, amount})
        },

        DELETE_PRODUCT: (state, {product, quantity}) => {
            let exists = state.cart.find(item => item.product._id === product._id)
            if(exists) {
                if(quantity < 2) {
                    state.cart = state.cart.filter(item => {
                        return item.product._id !== product._id
                    })
                } else {
                    exists.quantity -= 1
                    exists.amount -= product.price
                }
            }
        },
        CLEAR_CART: (state) => {
            state.cart = []
        }
    },
    actions: {
        addToCart: ({commit}, {product, quantity, amount}) => {
            commit('ADD_TO_CART', {product, quantity, amount})
        },
        deleteProduct: ({commit}, {product, quantity}) => {
            commit('DELETE_PRODUCT', {product, quantity})
        },
        clearCart: ({commit}) => {
            commit('CLEAR_CART')
        }
    }
}