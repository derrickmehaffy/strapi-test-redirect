# Strapi URL Shortener / Redirect

This is a sample Strapi application that is built to show how you can create a simple URL Shortener using built in koa redirect methods.

There is a single model with the following fields:

- `name`: Used to give simple names to shortened links
- `short_code`: The shortened code that users will use to be redirected
- `redirect_url`: This is the URL the user will be redirected to

If for some reason a user tries to request a code that doesn't exist then the user is redirected to `https://strapi.io/404`

In order for this to work, a new route is added to a normal model that has a different prefix route, though this could be customized, it would not be a good idea to bind this on the root path. In this example it's bound to `/r/:short_code` in the [following file](api/redirect/config/routes.json#L27-L34).

Adding new routes is very simple, as the name can be anything you want (the user doesn't see this), a unique short code (enforced since it's a UID), and a redirect URL.

Additionally the [custom controller](api/redirect/controllers/redirect.js) could also send telemetry data to an external service.
