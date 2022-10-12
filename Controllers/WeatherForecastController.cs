using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Project1_Angular.Contexto;
using Project1_Angular.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project1_Angular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly ContextDB _ContextDb;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, ContextDB contextDB)
        {
            _logger = logger;
            this._ContextDb = contextDB;

        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }

        [HttpGet()]
        [Route("{IdClientes:int}")]
        public IEnumerable<Clientes> Getdata(int IdClientes)
        {
           return _ContextDb.Clientes.ToArray();
        }
    }
}
