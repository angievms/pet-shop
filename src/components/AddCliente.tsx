import React from "react";

export const AddCliente : React.FC = () =>{
    return(
        <form className="form-add-cliente">
            <legend>
                Agregar Cliente
            </legend>
            <div>
                <label htmlFor="name">Nombre</label>
                <input type="text" name=""/>
            </div>
            <div>
                <label htmlFor="last-name">Apellidos</label>
                <input type="text" name="" />
            </div>

            <div>
            <label htmlFor="email">Correo</label>
            <input type="email" name=""/>
            </div>

            <div>
            <label htmlFor="address">Dirección</label>
            <input type="text" name=""/>
            </div>

            <div>
            <label htmlFor="phone">Teléfono</label>
            <input type="tel" name=""/>
            </div>
            <button className="btn" type="submit">Enviar</button>
        </form>
    )
}