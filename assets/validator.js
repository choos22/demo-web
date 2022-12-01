

var courseApi = 'http://localhost:3000/courses';

function start() {
    getCourses(renderCourses)

    handleCreateForm();
    
}

start();

function getCourses(callback){
    fetch(courseApi)
        .then(function(reponse){
            return reponse.json();
        })
        .then(callback);
}

function createCourses(data,callback){
    var option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'           
        },
        body: JSON.stringify(data)

    }
    fetch(courseApi, option)
        .then(function(reponse){
             reponse.json();
        })
        .then(callback);
}

function renderCourses(courses){
    var listCoursesBlock = document.querySelector('#list-courses')
    var html = courses.map(function(course){
        return `
        <li>
            <h4>${course.name}</h4>
            <p>${course.decription}</>
        </li>`;
    });
    listCoursesBlock.innerHTML = html.join('');
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create');

    createBtn.onclick = function(){
        var namButton = document.querySelector('input[name="name"]');
        var decriptionBut = document.querySelector('input[name="Description"]');
        
        var fromData = {
            namButton:namButton,
            decriptionBut:decriptionBut
        };

        createCourses(fromData, function(){
            getCourses(renderCourses);
        });
    }
};