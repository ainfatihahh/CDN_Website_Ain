using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using WebApplication_Etiqa.Models;

namespace WebApplication_Etiqa.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FreelancerController : ControllerBase
    {
        //Declaration
        private readonly IConfiguration _configuration;
        public FreelancerController(IConfiguration configuration)
        {
            //To read connection from appsettings.json file
            _configuration = configuration;
        }

        //To GET data from database
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                            select FreelancerId,FreelancerEmail, FreelancerUsername,FreelancerPhoneNumber,FreelancerSkillsets,FreelancerHobby from
                            dbo.Freelancer
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("FreelancerAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        //To INSERT data into database
        [HttpPost]
        public JsonResult Post(Freelancer fl)
        {
            string query = @"
                           insert into dbo.Freelancer
                           values (@FreelancerEmail,@FreelancerUsername,@FreelancerPhoneNumber,@FreelancerSkillsets,@FreelancerHobby)
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("FreelancerAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@FreelancerEmail", fl.FreelancerEmail);
                    myCommand.Parameters.AddWithValue("@FreelancerUsername", fl.FreelancerUsername);
                    myCommand.Parameters.AddWithValue("@FreelancerPhoneNumber", fl.FreelancerPhoneNumber);
                    myCommand.Parameters.AddWithValue("@FreelancerSkillsets", fl.FreelancerSkillsets);
                    myCommand.Parameters.AddWithValue("@FreelancerHobby", fl.FreelancerHobby);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Data Added Successfully");
        }

        //To UPDATE data into database
        [HttpPut]
        public JsonResult Put(Freelancer fl)
        {
            string query = @"
                           update dbo.Freelancer
                           set FreelancerEmail= @FreelancerEmail,
                            FreelancerUsername=@FreelancerUsername,
                            FreelancerPhoneNumber=@FreelancerPhoneNumber,
                            FreelancerSkillsets=@FreelancerSkillsets,
                            FreelancerHobby=@FreelancerHobby
                            where FreelancerId=@FreelancerId
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("FreelancerAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@FreelancerId", fl.FreelancerId);
                    myCommand.Parameters.AddWithValue("@FreelancerEmail", fl.FreelancerEmail);
                    myCommand.Parameters.AddWithValue("@FreelancerUsername", fl.FreelancerUsername);
                    myCommand.Parameters.AddWithValue("@FreelancerPhoneNumber", fl.FreelancerPhoneNumber);
                    myCommand.Parameters.AddWithValue("@FreelancerSkillsets", fl.FreelancerSkillsets);
                    myCommand.Parameters.AddWithValue("@FreelancerHobby", fl.FreelancerHobby);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Updated Successfully");
        }

        [HttpDelete("{FreelancerId}")]
        public JsonResult Delete(int FreelancerId)
        {
            string query = @"
                           delete from dbo.Freelancer
                            where FreelancerId=@FreelancerId
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("FreelancerAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@FreelancerId", FreelancerId);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Data Deleted Successfully");
        }


    }
}
