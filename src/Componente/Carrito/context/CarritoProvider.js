import { createContext, useReducer } from "react";
import axios from 'axios';
import { TYPES } from "../actions/shoppingActions"
import { shoppingReducer, shoppingInitialState } from "../reducer/shoppingReducer"
import React from 'react';
import swal from 'sweetalert';

export const CarritoContext = createContext()

const CarritoProvider = ({ children }) => {

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

    const { products, cart } = state

    const seAgregoalCart = () => {
        swal({
            text: "El Instrumento se agrego correctamente",
            icon: "success",
            button: "Aceptar",
            timer: "3000"
        });
    }

    const actualizarStado = async () => {
        const productsURL = "http://localhost:3000/productos";
        const cartURL = "http://localhost:3000/cart";

        const resProducts = await axios.get(productsURL);
        const resCart = await axios.get(cartURL);
        const newProduct = await resProducts.data;
        const newCartItem = await resCart.data;
        dispatch({ type: TYPES.READ_STATE, payload: { newProduct, newCartItem } })
    }

    const limpiarCarrito = async () => {
        swal({
            title: "Eliminar",
            text: "Esta seguro que desea elimianr todos los productos del carrito",
            icon: "warning",
            buttons: ["No", "si"]
        })
            .then(respuesta => {
                if (respuesta) {
                    cart.map(async item => {
                        let endpoint = `http://localhost:3000/cart/${item.id}`;
                        let options = {
                            method: "DELETE",
                            headers: { "content-type": "application/json" }
                        };
                        let res = await axios(endpoint, options)
                    })
                    dispatch({ type: TYPES.CLEAR_CART })
                    swal({
                        text: "Se elimino el instrumento",
                        icon: "success"
                    })
                }
            })
    }

    const eliminarProducto = async (data, all = false) => {

        if (all) {
            let endpoint = `http://localhost:3000/cart/${data.id}`;
            let options = {
                method: "DELETE",
                headers: { "content-type": "application/json" }
            };
            let res = await axios(endpoint, options)

            dispatch({ type: TYPES.REMOVE_ALL_PRODUCT, payload: data.id })
        } else {

            let itemInCart = state.cart.find(item => item.id === data.id)

            if (itemInCart.quantity > 1) {
                let endpoint = `http://localhost:3000/cart/${data.id}`;
                let options = {
                    method: "PUT",
                    headers: { "content-type": "application/json" },
                    data: JSON.stringify({ ...data, quantity: itemInCart.quantity - 1 })
                };
                let res = await axios(endpoint, options)
                dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: data.id })
            } else {
                let endpoint = `http://localhost:3000/cart/${data.id}`;
                let options = {
                    method: "DELETE",
                    headers: { "content-type": "application/json" }
                };
                let res = await axios(endpoint, options)
                dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: data.id })
            }


        }
    }

    const agregarAlCarrito = async (data) => {
        let newItem = state.products.find(product => product.id === data.id)

        let itemInCart = state.cart.find(item => item.id === newItem.id)

        if (itemInCart) {
            let endpoint = `http://localhost:3000/cart/${data.id}`;
            let options = {
                method: "PUT",
                headers: { "content-type": "application/json" },
                data: JSON.stringify({ ...data, quantity: itemInCart.quantity + 1 })
            };
            let res = await axios(endpoint, options);
            let itemData = await res.data;

            seAgregoalCart();

            dispatch({ type: TYPES.ADD_TO_CART, payload: { itemData } })


        } else {
            let options = {
                method: "POST",
                headers: { "content-type": "application/json" },
                data: JSON.stringify({ ...data, quantity: 1 })
            };
            let res = await axios("http://localhost:3000/cart", options);
            let itemData = await res.data;

            seAgregoalCart();

            dispatch({ type: TYPES.ADD_TO_CART, payload: { itemData } })
        }
    }

    const data = { state, products, cart, actualizarStado, limpiarCarrito, eliminarProducto, agregarAlCarrito }

    return (
        <CarritoContext.Provider value={data} >
            {children}
        </CarritoContext.Provider >
    )
}

export default CarritoProvider