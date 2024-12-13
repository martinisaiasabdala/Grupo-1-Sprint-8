/*
            <footer className="home-footer">
                <p>&copy; 2023 Nuestro Sitio. Todos los derechos reservados.</p>
            </footer>
*/

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerContenido">
                <div className="logo">
                    <div className="imagenFooter">
                        <a href="index.html">
                            <img src="/imagenes/banking-isologotipoai.png" alt="Banking Logo" />
                        </a>
                    </div>
                    <div className="copyRight">
                        <p>
                            &copy; 2024 Banking Inc. Todos los <br />
                            derechos reservados.
                        </p>
                    </div>
                </div>
                <div className="enlaces">
                    <h2 className="footerTitulo">LEGAL</h2>
                    <a href='/terminos-y-condiciones'>Términos y condiciones</a>
                    <a href='/politica-de-privacidad'>Política de privacidad</a>
                </div>
                <div className="enlaces">
                    <h2 className="footerTitulo">ENLACES</h2>
                    <a href='/transferencias'>Transferencias</a>
                    <a href='/pagos'>Pagos de facturas</a>
                    <a href='/solicitar-prestamo'>Solicitar prestamo</a>
                    <a href='/simular-prestamo'>Simular prestamo</a>
                </div>
                <div className="redes">
                    <a href="https://www.facebook.com/" target="facebook">
                        <img src="/iconos/icono-facebook.svg" alt="Ingresar a Facebook" />
                    </a>
                    <a href="https://github.com/martinisaiasabdala/Grupo-1-Sprint-2" target="github">
                        <img src="/iconos/icono-github.svg" alt="Ingresar a GitHub" />
                    </a>
                    <a href="https://www.instagram.com/" target="instagram">
                        <img src="/iconos/icono-instagram.svg" alt="Ingresar a Instagram" />
                    </a>
                </div>
            </div>
        </footer>
    );
};
