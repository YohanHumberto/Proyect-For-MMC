using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Project1_Angular.Models;
using Project1_Angular.Servicios;

namespace Project1_Angular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrdenesController : Controller
    {
        private IOrdenesService _Ordeneservice;

        public OrdenesController(IOrdenesService Ordeneservice)
        {
            this._Ordeneservice = Ordeneservice;
        }


        [HttpGet]
        public IActionResult GetAllOrdenes()
        {
            return Ok(_Ordeneservice.GetAllOrdenes());
        }

        [HttpGet]
        [Route("{IdOrden:int}")]
        public IActionResult GetOrdenById(int IdOrden)
        {
            return Ok(_Ordeneservice.GetOrdenesById(IdOrden));
        }

       
        [HttpPost]
        public IActionResult AddOrdenes([FromBody] Ordenes Orden)
        {

            ResStruct res = new ResStruct()
            {
                Estado = true,
                MSG = "Orden agregada con exito."
            };

            if (Orden.Cantidad != 0 && Orden.ClienteId != 0 && Orden.ProductoId != 0) _Ordeneservice.AddOrden(Orden);
            else { res.Estado = false; res.MSG = "LAS PROPIEDADES NO PUEDEN ESTAR VACIAS."; }

            return Ok(new { res.Estado, res.MSG });
        }


        [HttpPut]
        public IActionResult UpdateOrdenes([FromBody] Ordenes Orden)
        {

            ResStruct res = new ResStruct()
            {
                Estado = true,
                MSG = "Orden actualizada con exito."
            };

            if (Orden.Cantidad != 0 && Orden.ClienteId != 0 && Orden.ProductoId != 0) _Ordeneservice.UpdateOrden(Orden);
            else { res.Estado = false; res.MSG = "LAS PROPIEDADES NO PUEDEN ESTAR VACIAS."; }

            return Ok(new { res.Estado, res.MSG });

        }


        [HttpDelete("{IdOrden:int}")]
        public IActionResult DeleteOrdenes(int IdOrden)
        {
            try
            {
                _Ordeneservice.DeleteOrden(IdOrden);
                return Ok(new { Estado = true, MSG = "Orden eliminada con exito." });
            }
            catch (System.Exception e)
            {
                return Ok(new { Estado = false, MSG = "ERROR... NO se pudo eliminar la Orden", exec = e.Message });
            }
        }

    }
}
