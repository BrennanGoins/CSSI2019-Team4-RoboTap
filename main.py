import webapp2
import os
import jinja2
import random

jinja_current_directory = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

class RoboTap(webapp2.RequestHandler):
    def get(self):
<<<<<<< HEAD
        start_template=jinja_current_directory.get_template("Templates/start.html")
=======
        start_template=jinja_current_directory.get_template("start.html")
>>>>>>> 1f4db1896e961243cb51f17083760946ede0381c
        self.response.write(start_template.render())

app = webapp2.WSGIApplication([
    ('/', RoboTap)
], debug=True)
