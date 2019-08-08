import webapp2
import os
import jinja2
from RoboTapUsersDB import UserData



jinja_current_directory = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

class roboTap(webapp2.RequestHandler):
    def get(self):
        start_template=jinja_current_directory.get_template('templates/start.html')
        self.response.write(start_template.render())


class Login(webapp2.RequestHandler):
    def get(self):
        login_template=jinja_current_directory.get_template("templates/login.html")
        self.response.write(login_template.render())



app = webapp2.WSGIApplication([
    ('/', Login),
    ('/roboTap', roboTap)
], debug=True)
