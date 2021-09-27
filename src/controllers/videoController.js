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
export const getEdit = (req, res) => {
    const {id} = req.params;
    const video = videos[id-1];
    return res.render("edit",{pageTitle:`Editing: ${video.title}`},video);
};
export const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body; //form에 있는 input name="title"연결 - edit.pug(form안에 있는 input 데이터 가져오기),   req.body는 JSON형태 데이터 가져오기
    videos[id - 1].title = title; //video.title가 입력하는대로 써진다
    return res.redirect(`/videos/${id}`);  //videoRouter로 간다 url id 부분으로 -> watch
  };








 
