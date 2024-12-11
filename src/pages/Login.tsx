import React from "react";

export const Login: React.FC = () => {
    return (
        <div className="form-login">
            <h2>Iniciar Sesión</h2>
            <form action="">
                <div>
                    <label htmlFor="email">Correo</label>
                    <input type="email" required />
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" required />
                </div>
                <button className="btn-login" type="submit">Iniciar Sesión</button>
            </form>
        </div>
    )
}