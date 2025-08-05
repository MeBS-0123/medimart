'use client'

export default function AgendarCitaButton({ especialidad }) {
    const handleClick = () => {
        const mensaje = `¡Hola! Me gustaría agendar una cita para la especialidad de ${especialidad}. ¿Qué fechas tienen disponibles?\n\nMi nombre es: `;
        const url = `https://wa.me/51929802396?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    }

    return (
        <div style={{
            position: 'fixed',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 9999
        }}>
            <button
                onClick={handleClick}
                style={{
                    backgroundColor: '#25D366',
                    color: '#fff',
                    border: 'none',
                    padding: '14px 28px',
                    borderRadius: '30px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                    minWidth: '220px',
                    textAlign: 'center'

                }}
            >
                Agendar cita
            </button>
        </div>
    )
}
