import React from 'react';


const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Bienvenido a Nuestro Sitio</h1>
                <p>Estamos encantados de tenerte aquí</p>
            </header>
            <section className="home-content">
                <div className="home-card">
                    <h2>Nuestros Servicios</h2>
                    <p>Ofrecemos una amplia gama de servicios para satisfacer todas tus necesidades.</p>
                </div>
                <div className="home-card">
                    <h2>Sobre Nosotros</h2>
                    <p>Conoce más sobre nuestra misión, visión y valores.</p>
                </div>
                <div className="home-card">
                    <h2>Contacto</h2>
                    <p>¿Tienes alguna pregunta? No dudes en contactarnos.</p>
                </div>
            </section>
            <footer className="home-footer">
                <p>&copy; 2023 Nuestro Sitio. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default Home;