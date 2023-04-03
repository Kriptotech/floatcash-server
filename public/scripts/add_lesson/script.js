var title = document.getElementById("title");
var courseId = document.getElementById("course_id");
var LessonNumber = document.getElementById("lesson_number");
var courseName = document.getElementById("course_name");
var videoUrl = document.getElementById("video_url");
var teacherName = document.getElementById("teacher_name");
var teacherAvatar = document.getElementById("teacher_avatar");
var teacherOcupation = document.getElementById("teacher_ocupation");
var description = document.getElementById("description");
var submitButton = document.getElementById("submit");
var message = document.getElementById("message")
var form = document.querySelector(".form");

submitButton.addEventListener("mousedown", () => {
let values = {
    title: title.value,
    course_id: courseId.value,
    course_name: courseName.value,
    lesson_number: LessonNumber.value,
    video: videoUrl.value,
    teacher: teacherName.value,
    teacher_avatar: teacherAvatar.value,
    teacher_ocupation: teacherOcupation.value,
    description: description.value,
};
fetch(`https://einsrocket-server.cyclic.app/lessons/add`, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
        "Content-Type": "application/json",
    },
})
    .then((res) => res.json())
    .then((data) => {
        message.innerText = data.message;
    })
    .catch((err) => console.log(err));
});

