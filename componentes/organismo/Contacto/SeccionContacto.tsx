import React from 'react';
import { Form, Input } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';

import ContenedorSeccion from "../../atomos/General/ContenedorSeccion";
import Titulo from "../../atomos/General/Titulo";
import Parrafo from "../../atomos/General/Parrafo";
import Boton from "../../atomos/General/Boton";
import Imagen from "../../atomos/General/Imagen";


const { TextArea } = Input;

const contenedorGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1.5fr 1fr',
    gap: '80px',
    alignItems: 'start',
};

const formContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
};

const inputStyle: React.CSSProperties = {
    backgroundColor: '#FFFFFF',
    border: '1px solid #E0E0E0',
    borderRadius: 8,
    padding: '12px',
    fontSize: '0.95rem'
};

const infoPanelStyle: React.CSSProperties = {
    backgroundColor: '#FFFFFF',
    padding: '40px',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    height: '100%',
    alignItems: 'center',
    boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
};

const itemContactoStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    fontSize: '1rem',
    color: '#444',
    textAlign: 'left',
};

const iconoStyle: React.CSSProperties = {
    fontSize: '18px',
    color: '#168B8D',
    backgroundColor: '#F4FBFB',
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
};

const mapaBoxStyle: React.CSSProperties = {
    width: '100%',
    height: '300px',
    backgroundColor: '#168B8D',
    borderRadius: '16px',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto'
};

const mapaImagenStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    objectPosition: 'center center',
    opacity: 0.9,
    filter: 'grayscale(1) brightness(0) invert(1)',
    transform: 'scale(0.7) translateX(-110px)',
};

const ContactoSeccion = () => {
    const onFinish = (values: any) => {
        console.log('Formulario enviado:', values);
        alert("¡Mensaje enviado!");
    };

    return (
        <ContenedorSeccion
            variante="seccion"
            style={{
                backgroundColor: '#F7F9FC',
                paddingTop: 60,
                paddingBottom: 60,
                borderRadius: 0
            }}
        >
            <div style={contenedorGridStyle}>

                <div style={formContainerStyle}>
                    <h2 style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '3rem',
                        fontWeight: 800,
                        color: '#8B4513',
                        margin: '0 0 10px 0',
                        lineHeight: 1.1
                    }}>
                        Conéctate con HuertoHogar
                    </h2>

                    <Parrafo style={{ marginBottom: 40, color: '#666', fontSize: '1.1rem', maxWidth: '800px', textAlign: 'center' }}>
                        Estamos aquí para ayudarte. Envíanos tus consultas o sugerencias y nuestro equipo te responderá a la brevedad.
                    </Parrafo>

                    <Form layout="vertical" onFinish={onFinish} size="large">
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                            <Form.Item
                                label={<span style={{fontWeight: 600, color: '#444'}}>Nombre Completo</span>}
                                name="nombre"
                                rules={[{ required: true }]}
                            >
                                <Input placeholder="Ingresa tu nombre completo" style={inputStyle} />
                            </Form.Item>

                            <Form.Item
                                label={<span style={{fontWeight: 600, color: '#444'}}>Teléfono</span>}
                                name="telefono"
                            >
                                <Input placeholder="Ingresa tu teléfono" style={inputStyle} />
                            </Form.Item>
                        </div>

                        <Form.Item
                            label={<span style={{fontWeight: 600, color: '#444'}}>Correo Electrónico</span>}
                            name="email"
                            rules={[{ required: true, type: 'email' }]}
                        >
                            <Input placeholder="Ingresa tu correo electrónico" style={inputStyle} />
                        </Form.Item>

                        <Form.Item
                            label={<span style={{fontWeight: 600, color: '#444'}}>Mensaje</span>}
                            name="mensaje"
                            rules={[{ required: true }]}
                        >
                            <TextArea rows={5} placeholder="Escribe aquí tu mensaje..." style={inputStyle} />
                        </Form.Item>

                        <Form.Item style={{ marginTop: 10 }}>
                            <Boton variante="primario" style={{ width: '100%', justifyContent: 'center', height: '55px', fontSize: '1.1rem',fontFamily: 'Montserrat, sans-serif',fontWeight: 600 }}>
                                Enviar Mensaje
                            </Boton>
                        </Form.Item>
                    </Form>
                </div>

                <div style={infoPanelStyle}>

                    <div>
                        <Titulo variante="seccion" style={{ textAlign: 'center', marginBottom: 30, fontSize: '1.5rem', color: '#8B4513' }}>
                            Información
                        </Titulo>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 25 }}>
                            <div style={itemContactoStyle}>
                                <div style={iconoStyle}><MailOutlined /></div>
                                <div>
                                    <strong style={{display:'block', fontSize:'0.85rem', color:'#888', textTransform:'uppercase'}}>Email</strong>
                                    <span style={{fontWeight: 500}}>contacto@huertohogar.cl</span>
                                </div>
                            </div>
                            <div style={itemContactoStyle}>
                                <div style={iconoStyle}><PhoneOutlined /></div>
                                <div>
                                    <strong style={{display:'block', fontSize:'0.85rem', color:'#888', textTransform:'uppercase'}}>Teléfono</strong>
                                    <span style={{fontWeight: 500}}>+56 9 1234 5678</span>
                                </div>
                            </div>
                            <div style={itemContactoStyle}>
                                <div style={iconoStyle}><EnvironmentOutlined /></div>
                                <div>
                                    <strong style={{display:'block', fontSize:'0.85rem', color:'#888', textTransform:'uppercase'}}>Ubicación</strong>
                                    <span style={{fontWeight: 500}}>Av. Providencia 1234, Santiago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={mapaBoxStyle}>
                        <Imagen
                            src="/assets/img/nosotros/mapachile.svg"
                            alt="Mapa Cobertura"
                            style={mapaImagenStyle}
                        />
                    </div>

                </div>

            </div>
        </ContenedorSeccion>
    );
};

export default ContactoSeccion;