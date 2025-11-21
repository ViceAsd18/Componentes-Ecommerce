import ClienteLayout from "./ClienteLayout";
import SeccionContacto from "../../organismo/Contacto/SeccionContacto";


const ContactoLayout = () => {
    return (
        <ClienteLayout>
            <div style={{
                width: "100%",
                maxWidth: 1200,
                margin: "0 auto",
                padding: "0 20px",
                marginBottom: 80
            }}>

                <SeccionContacto />

            </div>
        </ClienteLayout>
    );
};

export default ContactoLayout;