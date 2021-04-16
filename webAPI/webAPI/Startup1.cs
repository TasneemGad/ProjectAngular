using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Owin;
using Microsoft.Owin.Cors;
using Microsoft.Owin.Security.OAuth;
using Owin;
using System;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web.Http;
using webAPI.Models;

[assembly: OwinStartup(typeof(webAPI.Startup1))]

namespace webAPI
{
    public class Startup1
    {
        public void Configuration(IAppBuilder app)
        {
            // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=316888
            app.UseCors(CorsOptions.AllowAll);
            //make token be middelware
            app.UseOAuthAuthorizationServer(new OAuthAuthorizationServerOptions()
            {
                TokenEndpointPath = new PathString("/login"),
                AccessTokenExpireTimeSpan = TimeSpan.FromMinutes(60),
                AllowInsecureHttp = true,
                Provider = new TokenCreate()

            }); ;
            //Check token valid 
            app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions());
            HttpConfiguration config = new HttpConfiguration();
            config.MapHttpAttributeRoutes();
            config.Routes.MapHttpRoute(
                "DefaultApi", "api/{controller}/{id}",
                new { id = RouteParameter.Optional });
            config.Routes.MapHttpRoute(
                "Addetion", "add/{controller}/{action}/{id}",
                new { id = RouteParameter.Optional });
            app.UseWebApi(config);
        }
    }
    internal class TokenCreate : OAuthAuthorizationServerProvider
    {
        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
        }
        public override async Task GrantResourceOwnerCredentials
            (OAuthGrantResourceOwnerCredentialsContext context)
        {
            context.OwinContext.Response.Headers.Add(" Access - Control - Allow - Origin ", new[] { "*" });
            UserStore<IdentityUser> store =
                    new UserStore<IdentityUser>(new context());

            UserManager<IdentityUser> manager =
                new UserManager<IdentityUser>(store);
            IdentityUser user = await manager.FindAsync(context.UserName, context.Password);
            if (user == null)
            {
                context.SetError("grant_error", "username & password Not Valid");
            }
            else
            {
                ClaimsIdentity claims = new ClaimsIdentity(context.Options.AuthenticationType);
                claims.AddClaim(new Claim(ClaimTypes.NameIdentifier, user.Id));
                claims.AddClaim(new Claim(ClaimTypes.Name, user.UserName));
                if (manager.IsInRole(user.Id, "Admin"))
                    claims.AddClaim(new Claim(ClaimTypes.Role, "Admin"));

                context.Validated(claims);
            }
        }
    }
}
