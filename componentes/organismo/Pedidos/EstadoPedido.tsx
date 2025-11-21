import React from 'react';
import { Steps, Tag } from 'antd';
import {
    FileTextOutlined,
    DropboxOutlined,
    CarOutlined,
    HomeOutlined,
    EnvironmentOutlined,
    InfoCircleFilled
} from '@ant-design/icons';
import Titulo from "../../atomos/General/Titulo";
import Parrafo from "../../atomos/General/Parrafo";
import Imagen from "../../atomos/General/Imagen";



const containerStyle: React.CSSProperties = {
    padding: '40px 0',
    backgroundColor: '#F9FAFB',
    minHeight: '80vh'
};

const mainCardStyle: React.CSSProperties = {
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    padding: '40px',
    border: '1px solid #eee',
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1.5fr 1fr',
    gap: '60px'
};

const headerOrderStyle: React.CSSProperties = {
    gridColumn: '1 / -1',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderBottom: '2px solid #F0F0F0',
    paddingBottom: '20px',
    marginBottom: '30px'
};

const productItemStyle: React.CSSProperties = {
    display: 'flex',
    gap: '15px',
    marginBottom: '15px',
    paddingBottom: '15px',
    borderBottom: '1px dashed #eee'
};

const EstadoPedido = () => {
    return (
        <div style={containerStyle}>
            <div style={mainCardStyle}>

                <div style={headerOrderStyle}>
                    <div>
                        <span style={{ fontSize: '0.9rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>
                            Número de Orden
                        </span>
                        <Titulo variante="item" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', color: '#168B8D', margin: '5px 0 0 0', lineHeight: 1 }}>
                            #HH-90897
                        </Titulo>
                        <Parrafo style={{ margin: '5px 0 0 0', fontSize: '0.95rem', color: '#666' }}>
                            Realizado el 20 de Octubre, 2025
                        </Parrafo>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <Tag color="processing" style={{ padding: '5px 15px', fontSize: '1rem', borderRadius: '20px', border: 'none', backgroundColor: '#E6FFFB', color: '#168B8D', fontWeight: 600 }}>
                            En Tránsito
                        </Tag>
                    </div>
                </div>

                <div>
                    <Titulo variante="item" style={{ fontSize: '1.3rem', marginBottom: 25 }}>
                        Historial de Seguimiento
                    </Titulo>

                    <Steps
                        direction="vertical"
                        current={2}
                        items={[
                            {
                                title: 'Orden Recibida',
                                description: 'Hemos recibido tu pedido correctamente. (20 Oct - 10:30 hrs)',
                                icon: <FileTextOutlined />,
                            },
                            {
                                title: 'Pago Confirmado',
                                description: 'Tu transacción fue exitosa. (20 Oct - 10:35 hrs)',
                                icon: <FileTextOutlined />,
                            },
                            {
                                title: 'Empaquetado',
                                description: 'Tus productos frescos han sido seleccionados y embalados. (21 Oct - 09:00 hrs)',
                                icon: <DropboxOutlined />,
                            },
                            {
                                title: 'En Ruta',
                                description: 'El repartidor va en camino a tu dirección. (22 Oct - 08:30 hrs)',
                                icon: <CarOutlined style={{ fontSize: 24, color: '#168B8D' }} />,
                            },
                            {
                                title: 'Entregado',
                                description: 'Estimado para hoy antes de las 18:00 hrs.',
                                icon: <HomeOutlined />,
                            },
                        ]}
                    />
                </div>

                <div style={{ backgroundColor: '#FAFAFA', padding: '30px', borderRadius: '16px', height: 'fit-content' }}>

                    <Titulo variante="item" style={{ fontSize: '1.2rem', marginBottom: 20, borderBottom: '2px solid #168B8D', paddingBottom: 10, display: 'inline-block' }}>
                        Resumen del Paquete
                    </Titulo>

                    <div style={{
                        backgroundColor: '#fff',
                        border: '1px solid #b7eb8f',
                        borderRadius: '8px',
                        padding: '12px',
                        marginBottom: '25px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <InfoCircleFilled style={{ color: '#52c41a', fontSize: '18px' }} />
                        <span style={{ fontSize: '0.9rem', color: '#444' }}>
                            La empresa encargada de tu reparto es: <strong>DINO BOX</strong> 🦖
                        </span>
                    </div>

                    <div style={{ marginBottom: 30 }}>
                        <div style={{ display: 'flex', gap: 10, color: '#555' }}>
                            <EnvironmentOutlined style={{ marginTop: 4, color: '#168B8D' }} />
                            <div>
                                <strong style={{ display: 'block', color: '#333' }}>Dirección de Entrega</strong>
                                Av. Los Leones 2255, Depto 301.<br/>Providencia, Santiago.
                            </div>
                        </div>
                    </div>

                    <div style={{ marginBottom: 20 }}>
                        <div style={productItemStyle}>
                            <div style={{ width: 50, height: 50, borderRadius: 6, overflow: 'hidden' }}>
                                <Imagen src="/assets/img/estado-pedido/tomates.jpg" alt="Tomate" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <strong style={{ fontSize: '0.9rem', display: 'block' }}>Tomate Limachino</strong>
                                <span style={{ fontSize: '0.85rem', color: '#888' }}>2 kg x $1.995</span>
                            </div>
                            <strong style={{ fontSize: '0.95rem', color: '#168B8D' }}>$3.990</strong>
                        </div>

                        <div style={productItemStyle}>
                            <div style={{ width: 50, height: 50, borderRadius: 6, overflow: 'hidden' }}>
                                <Imagen src="/assets/img/estado-pedido/lechuga-costina.jpg" alt="Lechuga" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <strong style={{ fontSize: '0.9rem', display: 'block' }}>Lechuga Costina</strong>
                                <span style={{ fontSize: '0.85rem', color: '#888' }}>1 un</span>
                            </div>
                            <strong style={{ fontSize: '0.95rem', color: '#168B8D' }}>$1.290</strong>
                        </div>

                        <div style={productItemStyle}>
                            <div style={{ width: 50, height: 50, borderRadius: 6, overflow: 'hidden' }}>
                                <Imagen src="/assets/img/estado-pedido/zanahorias.jpg" alt="Zanahorias" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <strong style={{ fontSize: '0.9rem', display: 'block' }}>Pack Zanahorias</strong>
                                <span style={{ fontSize: '0.85rem', color: '#888' }}>1 kg</span>
                            </div>
                            <strong style={{ fontSize: '0.95rem', color: '#168B8D' }}>$1.500</strong>
                        </div>
                    </div>

                    <div style={{ borderTop: '2px solid #eee', paddingTop: 15 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: '0.9rem', color: '#666' }}>
                            <span>Subtotal</span>
                            <span>$6.780</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 15, fontSize: '0.9rem', color: '#666' }}>
                            <span>Envío</span>
                            <span>$2.990</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 700, color: '#333' }}>
                            <span>Total Pagado</span>
                            <span style={{ color: '#168B8D' }}>$9.770</span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default EstadoPedido;