const MindmapController = require("../controller/mindmap.controller");
const HelpersController = require("../controller/helpers.controller");
const UserController = require("../controller/user.controller");
const ChatController = require("../controller/ChatController");


module.exports = (app) => {
    app.get("/api/notes", MindmapController.findAllNotes);
    app.get("/api/helpers", HelpersController.findAllHelpers);
    app.post("/api/notes", MindmapController.createNewNote);
    app.post("/api/helpers", HelpersController.createNewHelper);
    app.post("/api/register", UserController.registerUser);
    app.post("/api/login", UserController.login);
    app.post("/api/logout", UserController.logout);
    app.get("/api/notes/:id", MindmapController.findOneNote);
    app.delete("/api/notes/:id", MindmapController.deleteOneNote);
    app.put("/api/notes/:id", MindmapController.updateNote);

    app.post("/api/chatbot/", ChatController.generateChat);
}