using Project1_Angular.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project1_Angular.Servicios
{
    interface IProductoService
    {

        public List<Productos> GetAllProductos();

        public Productos GetProductosById(int ProductoId);

        public void AddProducto(Productos Producto);

        public void UpdateProducto(Productos Producto);

        public void DeleteProducto(int ProductosId);
      
    }
}
