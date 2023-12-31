const jwt = require('jsonwebtoken');
require("dotenv").config();
const Post = require('../models/Post');
exports.regUser = async (req, res, next) => {
    try {
        let obj = req.body;
        console.log(req.body)
        let val = await Post.register(obj.name, obj.number, obj.email, obj.password);
        if (val != 1) val = 0;
        return res.json({
            success: val
        })
    } catch (error) {
        console.log(error);
        next(error);
    }
}
exports.login = async (req, res, next) => {
    try {
        let obj = req.body;
        let result = await Post.login(obj.email, obj.password);
        console.log("token: " + result)
        if (result == null) {
            sucvar = 0;
            msg = "Invalid credentials!"
        }
        else {
            sucvar = 1;
            msg = "Login successful!"
        }
        return res.json({
            success: sucvar,
            message: msg,
            token: result
        })
        // res.status(200).json({ message: "sent" });
    } catch (error) {
        console.log(error);
        next(error);
    }
}
exports.login = async (req, res, next) => {
    try {
        let obj = req.body;
        let result = await Post.login(obj.email, obj.password);
        console.log("token: " + result)
        if (result == null) {
            sucvar = 0;
            msg = "Invalid credentials!"
        }
        else {
            sucvar = 1;
            msg = "Login successful!"
        }
        return res.json({
            success: sucvar,
            message: msg,
            token: result
        })
        // res.status(200).json({ message: "sent" });
    } catch (error) {
        console.log(error);
        next(error);
    }
}
exports.submit = async (req, res, next) => {
    try {
        // let result = await Post.reset(obj.username, obj.password, obj.newpassword);
        let user = req.user.result;
        console.log(user)
        console.log(req.body)
        let result = await Post.submit(user, req.body.answers);
        return res.json({
            result: result
        })
        res.status(200).json({ message: "sent" });
    } catch (error) {
        console.log(error);
        next(error);
    }
}
exports.getUser = async (req, res, next) => {
    try {
        let user = req.user.result;
        let result = await Post.getUser(user.email)
        return res.json({
            result: result
        })
        res.status(200).json({ message: "sent" });
    } catch (error) {
        console.log(error);
        next(error);
    }
}
// exports.reset = async (req, res, next) => {
//     try {
//         let obj = req.body;
//         let result = await Post.reset(obj.username, obj.password, obj.newpassword);
//         return res.json({
//             result: result
//         })
//         res.status(200).json({ message: "sent" });
//     } catch (error) {
//         console.log(error);
//         next(error);
//     }
// }
// exports.findPeopleByID = async (req, res, next) => {
//     try {
//         let [val,_] = await Post.findByWork(req.body.work_id);
//         res.status(200).json({ val });
//     } catch (error) {
//         console.log(error);
//         next(error);
//     }
// }
// exports.findMovieDetailsByID = async (req, res, next) => {
//     try {
//         Post.findMovieByID(req.body.movie_id);
//         res.status(200).json({ message: "sent" });
//     } catch (error) {
//         console.log(error);
//         next(error);
//     }
// }
// exports.findAllMovie = async (req, res, next) => {
//     try {
//         let [val, _] = await Post.findAllMovies();
//         res.status(200).json({ val });
//     } catch (error) {
//         console.log(error);
//         next(error);
//     }
// }
// exports.findMovieByName = async (req, res, next) => {
//     try {
//         let name = req.params.name;
//         let [val, _] = await Post.findByName(name);
//         res.status(200).json({ val });
//     } catch (error) {
//         console.log(error);
//         next(error);
//     }
// }
// exports.getReview = async (req, res, next) => {
//     try {
//         let id = req.params.id;
//         let [val, _] = await Post.getRev(id);
//         res.status(200).json({ val });
//     } catch (error) {
//         console.log(error);
//         next(error);
//     }
// }
// exports.insertToTable = async (req, res, next) => {
//     try {
//         let obj = req.body;
//         obj = obj.results;
//         for (var ele of obj) {
//             if (ele.adult == true)
//                 ele["adult"] = 1;
//             else
//                 ele["adult"] = 0;
//             if (ele.video == true)
//                 ele["video"] = 1;
//             else
//                 ele["video"] = 0;
//             Post.insertTo(ele)
//         }
//         res.status(200).json(obj);
//     } catch (error) {
//         console.log(error);
//         next(error);
//     }
// }
// exports.getPop = async (req, res, next) => {
//     try {
//         let [results, _] = await Post.getPopMovie();
//         console.log(results)
//         res.status(200).json({ page: 1, results, total_pages: 35456, total_results: 709112 });
//     } catch (error) {
//         console.log(error);
//         next(error);
//     }
// }
// exports.getById = async (req, res, next) => {
//     try {
//         let id = req.params.id;
//         let [results, _] = await Post.getMovieByID(id);
//         res.status(200).json({ results });
//     } catch (error) {
//         console.log(error);
//         next(error);
//     }
// }
// exports.getByGenre = async (req, res, next) => {
//     try {
//         let genre = req.params.genre;
//         let [results, _] = await Post.getMovieByGenre(genre);
//         res.status(200).json({ results });
//     } catch (error) {
//         console.log(error);
//         next(error);
//     }
// }
// exports.getUser = async (req, res, next) => {
//     try {
//         let token = req.get("authorization");
//         console.log(token)
//         if (token) {
//             token = token.slice(7)
//             jwt.verify(token, process.env.ACCESS_KEY, async (err, decoded) => {
//                 if (err) {
//                     res.json({
//                         success: 0,
//                         message: "Invalid token"
//                     });
//                 }
//                 else {
//                     let [val,_] = await Post.getUserInfo(decoded.result.username, decoded.result.password)
//                     res.json({val})
//                 }
//             })
//         } else {
//             res.json({
//                 success: 0,
//                 message: "access denied! Unauthorized user!"
//             })
//         }
//     } catch (error) {
//         console.log(error);
//         next(error);
//     }
// }
// exports.postReview = async (req, res, next) => {
//     try {
//         console.log(req.body)
//         let [results, _] = await Post.postReview(req.body.username, req.body.review, req.body.score, req.body.movie_id)
//         res.status(200).json({ results });
//     } catch (error) {
//         console.log(error);
//         next(error);
//     }
// }
// exports.getCount = async (req, res, next) => {
//     try {
//         var id = req.params.id;
//         let [results, _] = await Post.getCount(id);
//         res.status(200).json({ results });
//     } catch (error) {
//         console.log(error);
//         next(error);
//     }
// }
// exports.getCast = async (req, res, next) => {
//     try {
//         var id = req.params.id;
//         let [results, _] = await Post.getCastMovie(id);
//         res.status(200).json({ results });
//     } catch (error) {
//         console.log(error);
//         next(error);
//     }
// }

