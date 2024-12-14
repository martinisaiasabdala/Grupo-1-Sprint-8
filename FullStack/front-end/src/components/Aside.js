import React from 'react';
import CardCustomerList from './CardCustomerList';
import CustomerChangeAddress from './CustomerChangeAddress';
import LoanRequestForm from './LoanRequestForm';
import LoanDelete from './LoanDelete';
import UpdateAddress from './UpdateAddress';

const Aside = ({ components, setActiveComponent }) => {

    const iconMapping = {
        Home: 'home ',
        AccountList: 'group ',
        CustomerDetail: 'badge ',
        LoanList: 'money_bag ',
        BranchList: 'store ',
        CardCustomerList: 'credit_card ',
        LoanBranchList: 'local_convenience_store ',
        CustomerChangeAddress: 'import_contacts ',
        LoanRequestForm: 'paid ',
        LoanDelete: 'credit_card_off ',
        UpdateAddress: 'other_houses ',
    };

    const textMapping = {
        Home: '  Inicio',
        AccountList: '  Lista de Cuentas',
        CustomerDetail: '  Detalles del Cliente',
        LoanList: '  Préstamos',
        BranchList: '  Lista de Sucursales',
        CardCustomerList: '  Tarjetas',
        LoanBranchList: '  Sucursales',
        CustomerChangeAddress: '  Cambiar Direccion del Cliente',
        LoanRequestForm: '  Solicitar Préstamo',
        LoanDelete: '  Eliminar Préstamo',
        UpdateAddress: '  Actualizar Direccion',
    };

    if (!components || typeof components !== 'object' || Object.keys(components).length === 0) {
        return <p>No hay componentes disponibles.</p>;
    }
    return (
        <aside className="aside">
            <ul>
                {Object.keys(components).map((key) => (
                    <li key={key}>
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveComponent(key);
                            }}
                        >
                            <span className="material-symbols-outlined">
                                {iconMapping[key] || 'help'} {/* Ícono por defecto si no se encuentra */}
                            </span>
                            {textMapping[key] || key} {/* Texto personalizado o clave por defecto */}
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Aside;