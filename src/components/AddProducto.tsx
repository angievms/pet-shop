import React from "react";

export const AddProducto : React.FC = () =>{
    return(
        <form className="form-add-producto">
            <legend>
                Agregar Producto
            </legend>
            <div>
                <label htmlFor="name">Nombre</label>
                <input type="text" name=""/>
            </div>
            <div>
                <label htmlFor="category">Categoría</label>
                <input type="text" name="" />
            </div>

            <div>
            <label htmlFor="price">Precio</label>
            <input type="number" name=""/>
            </div>

            <div>
            <label htmlFor="description">Descripción</label>
            <input type="text" name=""/>
            </div>

            <button className="btn" type="submit">Enviar</button>
        </form>
    )
}