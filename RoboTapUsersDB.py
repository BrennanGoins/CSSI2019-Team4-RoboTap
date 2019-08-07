from google.appengine.ext import ndb


class UserData(ndb.Model):
    bits = ndb.IntegerProperty(required = True)
    upgrade1Counter = ndb.IntegerProperty(required = True)
    upgrade2Counter = ndb.IntegerProperty(required = True)
    upgrade3Counter = ndb.IntegerProperty(required = True)
