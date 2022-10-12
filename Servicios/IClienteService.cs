using Project1_Angular.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project1_Angular.Servicios
{
    public interface IClienteService
    {
        public List<Clientes> GetAllClientes();

        public Clientes GetClientesById(int ClienteId);

        public void AddCliente(Clientes Cliente);

        public void UpdateCliente(Clientes Cliente);

        public void DeleteCliente(int ClientesId);
    }
}
