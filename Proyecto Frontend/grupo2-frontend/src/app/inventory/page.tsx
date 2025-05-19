import Articulo from "@/modules/components/articulo.component";
import Layout from "@/modules/layout/layout";


export default function Inventory() {
  const imagenLocal = "/inventario.jpg"; // misma imagen para todos

  return (
    <Layout>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Articulo
          nombre="Mochila Wayuu"
          descripcion="Hecha a mano por artesanos colombianos."
          categoria="Accesorios"
          fecha="Mayo 2025"
          imagen={imagenLocal}
        />
        <Articulo
          nombre="Sombrero Vueltiao"
          descripcion="Tradición de la costa Caribe colombiana."
          categoria="Ropa"
          fecha="Mayo 2025"
          imagen={imagenLocal}
        />
        <Articulo
          nombre="Hamaca artesanal"
          descripcion="Para descansar con estilo y cultura."
          categoria="Decoración"
          fecha="Mayo 2025"
          imagen={imagenLocal}
        />
      </section>
    </Layout>
  );
}
