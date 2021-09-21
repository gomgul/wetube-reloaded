/*
const fakeUser = {
    username : "Nicolas",
    loggedIn : false,
};
*/

export const trending = (req, res) => {
    let videos = [
        {
            title: "First Video",
            rating:5,
            comments:2,
            createdAt: "2 minutes ago",
            views:59,
            id:1
        },
        {
            title: "Second Video",
            rating:5,
            comments:2,
            createdAt: "2 minutes ago",
            views:59,
            id:2
        },
        {
            title: "Third Video",
            rating:5,
            comments:2,
            createdAt: "2 minutes ago",
            views:59,
            id:3
        },
    ];
    return res.render(
    "home",{pageTitle : "Comes from your controller", videos});
     };
export const watch = (req, res) => {
    const {id} = req.params; //videoRouter 안에 get id가져왔다
    const video = videos[id-1];
    return res.render("watch",{pageTitle:`Watching: ${video.title}`, video});
};
export const edit = (req, res) => {
    const {id} = req.params;
    const video = videos[id-1];
    return res.render("edit",{pageTitle:`Editing: ${video.title}`},video);
};
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
    return res.send("Delete Video");
};
 
