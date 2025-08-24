import { useParams } from "react-router-dom";
import type { IProducto } from "../Interfaces/Iproducto";
import { ICategorias } from "../Interfaces/Icategoria";


  const productosData: IProducto[] = [
    {
      id: 1,
      nombre: "Laptop Gamer",
      precio: 1200,
      descripcion: "Laptop de alto rendimiento con tarjeta gráfica dedicada.",
      url: "https://www.computron.com.ec/wp-content/uploads/2025/04/14-EP0027LA-3.jpg",
      categoria:ICategorias.Gamer
      
    },
    {
      id: 2,
      nombre: "Smartphone Pro",
      precio: 950,
      descripcion:
        "Teléfono inteligente con cámara de 108MP y batería de larga duración.",
      url: "https://image.made-in-china.com/202f0j00TBwlKzJrEVfC/Xs16-PRO-Android-Mobile-Cellphone3-Inch-2000mAh-4-128GB-4G-LTE-Mini-Smartphone.webp",
      categoria:ICategorias.Telefonos
    },
    {
      id: 3,
      nombre: "Auriculares Bluetooth",
      precio: 150,
      descripcion: "Auriculares inalámbricos con cancelación de ruido activa.",
      url: "https://dcdn-us.mitiendanube.com/stores/001/590/690/products/1-principal-auriculares-teknic-xy-19-95033ba3772d698d1f17206625751869-640-0.png",
      categoria:ICategorias.Musica
    },
    {
      id: 4,
      nombre: "Teclado Mecánico",
      precio: 80,
      descripcion: "Teclado mecánico retroiluminado con switches azules.",
      url: "https://tecnogame.ec/wp-content/uploads/2024/04/Marvo-KG901-2.jpg",
      categoria:ICategorias.Gamer
    },
    {
      id: 5,
      nombre: "Mouse Gamer",
      precio: 60,
      descripcion: "Mouse óptico con DPI ajustable y luces RGB.",
      url: "https://tecnogame.ec/wp-content/uploads/2021/08/Mouse-gamer-logitech-G502-Negro-1.jpg",
      categoria:ICategorias.Electronicos
    },
    {
      id: 6,
      nombre: "Monitor 27'' 4K",
      precio: 400,
      descripcion: "Monitor UHD con panel IPS y tasa de refresco de 144Hz.",
      url: "https://tecnogame.ec/wp-content/uploads/2025/01/Asrock-CL27FF.jpg",
      categoria:ICategorias.Electronicos
    },
    {
      id: 7,
      nombre: "Tablet 10''",
      precio: 300,
      descripcion:
        "Tablet ligera con 128GB de almacenamiento y stylus incluido.",
      url: "https://http2.mlstatic.com/D_NQ_NP_764857-MLA52988770506_122022-O.webp",
      categoria:ICategorias.Telefonos
    },
    {
      id: 8,
      nombre: "Smartwatch",
      precio: 220,
      descripcion:
        "Reloj inteligente con GPS, monitor de sueño y resistencia al agua.",
      url: "https://http2.mlstatic.com/D_NQ_NP_789504-MLU74432321037_022024-O.webp",
      categoria:ICategorias.Telefonos
    },
    {
      id: 9,
      nombre: "Cámara Reflex",
      precio: 700,
      descripcion: "Cámara DSLR con lente 18-55mm y grabación en 4K.",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTN-oH-dY4OTVoyO0o1JCaVXpBMum3o0wWNw&s",
      categoria:ICategorias.Electronicos
    },
    {
      id: 10,
      nombre: "Impresora Multifuncional",
      precio: 180,
      descripcion: "Impresora a color con escáner y conectividad WiFi.",
      url: "https://http2.mlstatic.com/D_NQ_NP_624080-MLU74274227307_012024-O.webp",
      categoria:ICategorias.Electronicos
    },
    {
      id: 11,
      nombre: "Consola Next-Gen",
      precio: 500,
      descripcion:
        "Consola de videojuegos con soporte para 8K y SSD ultra rápido.",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0u0lzCMqx7ngNEDc9KaaHyUSE3Ck-AP3LKw&s",
      categoria:ICategorias.Gamer
    },
    {
      id: 12,
      nombre: "Silla Ergonómica",
      precio: 250,
      descripcion: "Silla de oficina con soporte lumbar y ajuste de altura.",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ZAgatVsZ2FVLvQUt239dkq5AcIQPoAxe-w&s",
      categoria:ICategorias.Gamer
    },
    {
      id: 13,
      nombre: "Disco Duro 2TB",
      precio: 90,
      descripcion: "Disco duro externo portátil USB 3.1 de 2TB.",
      url: "https://sistemasyprogramas.com/3047-large_default/disco-duro-western-digitall-hdd-de-2tb-.jpg",
      categoria:ICategorias.Electronicos
    },
    {
      id: 14,
      nombre: "SSD 1TB",
      precio: 120,
      descripcion: "Unidad SSD NVMe con velocidad de lectura de 3500MB/s.",
      url: "https://http2.mlstatic.com/D_NQ_NP_832221-MLU54982786361_052023-O.webp",
      categoria:ICategorias.Electronicos
    },
    {
      id: 15,
      nombre: "Parlante Bluetooth",
      precio: 75,
      descripcion: "Altavoz portátil con sonido 360° y resistencia al agua.",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaqIyzCN_JYJdge-Jawjdeuf5Yc447FyoKmg&s",
      categoria:ICategorias.Musica
    },
  ];


export const ProductDetail = () => {


  const {id} = useParams();
  const productoFind = productosData.find((p) => p.id === Number(id));

   if (!productoFind) {
    return (
      <section className="detail-container">
        <h1>Producto no encontrado</h1>
      </section>
    );
  }

  return (
    <section className="detail-container">
      <h1>{productoFind?.nombre}</h1>
      <img src={productoFind?.url} alt="" />
      <h2 className="price">$ {productoFind?.precio}</h2>
      <p style={{color:"#303030",fontWeight:"600",marginTop:"15px"}}>{productoFind?.descripcion}</p>
    </section>
  );
};
