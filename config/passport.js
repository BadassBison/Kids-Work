const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const Family = mongoose.model('families');
const keys = require('./keys');

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = keys.secretOrKey;

module.exports = passport => {
    passport.use(new JwtStrategy(options, (jwt_payload, done) => {
        Family.findById(jwt_payload.id)
            .then(family => {
                if (family) {
                    return done(null, family);
                }
                return done(null, false);
            })
            .catch(err => console.log(err));
    }));
};