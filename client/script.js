$(document).ready(() => {
    $.ajax({
        url: 'http://localhost:3000/api/todo',
        success: (data) => {
            let todo = []
            for (let  i = 0; i < data.length; i++) {
                todo.push(`
                <div id="rowTodo${data[i]._id}" class="col-sm-12">`)

                if (data[i].status == true) {
                    todo.push(`
                <span>
                    <input type="checkbox" id="checkboxTodo#${data[i]._id}" name="updateStatus" checked>
                </span>
                `)
                }
                else {
                    todo.push(`
                <span>
                    <input type="checkbox" id="checkboxTodo#${data[i]._id}" name="updateStatus">
                </span>
                `)
                }

                todo.push(`
                    <span id="title${data[i]._id}">${data[i].title}</span>
                    <span class="pull-right">
                        <button id="edit#${data[i]._id}" name="titleEdit" class="btn btn-warning">Edit</button>
                        <button id="delete#${data[i]._id}" name="titleDelete" class="btn btn-danger">Delete</button>
                    </span>
                </div>
                `)

            }

            $('#rowOfTodos').append(todo.join(""))
        }
    })
})

//create todo
$(document).on('click', 'button[id="submitTodo"]', function (e) {
    e.preventDefault()

    $.ajax({
        url: `http://localhost:3000/api/todo`,
        method: 'post',
        contentType: 'application/x-www-form-urlencoded',
        data: {
            title: $('input[name="title"]').val()
        },
        success: (data) => {
            let html = `
            <div id="rowTodo${data._id}" class="col-sm-12">
                <span>
                    <input type="checkbox" id="checkboxTodo#${data._id}" name="updateStatus">
                </span>
                <span id="title${data._id}">${data.title}</span>
                <span class="pull-right">
                    <button id="edit#${data._id}" name="titleEdit" class="btn btn-warning">Edit</button>
                    <button id="delete#${data._id}" name="titleDelete" class="btn btn-danger">Delete</button>
                </span>
            </div>`

            $('input[name="title"]').val("")
            $('#rowOfTodos:last').append(html)
        }
    })
})

//delete todo
$(document).on('click', 'button[name="titleDelete"]', function() {
    let id = this.id.split("#")
    let todoId = id[1]

    $.ajax({
        url: `http://localhost:3000/api/todo/${todoId}`,
        method: 'delete',
        contentType: 'application/x-www-form-urlencoded',

        success: () => {
            $(`#rowTodo${todoId}`).remove()
        }
    })
})

//get todo for edit
$(document).on('click', 'button[name="titleEdit"]', function () {
    let id = this.id.split("#")
    let todoId = id[1]

    $.ajax({
        url: `http://localhost:3000/api/todo/${todoId}`,
        method: 'get',
        contentType: 'application/x-www-form-urlencoded',

        success: (data) => {
            $('#modalEditTodo').modal('show')
            $('input[name="editTitle"]').val(data.title)
            var temp = $("input[name='todoId']").val()
            if ( typeof temp != "undefined") {
                $("input[name='todoId']").replaceWith(`<input type='hidden' name='todoId' value='${data._id}'>`)
            }
            else {
                $("#formEditTodo").append(`<input type='hidden' class='form-control' name='todoId' value='${data._id}'>`)
            }

        }
    })
})

//update todo
$(document).on('click', 'button[id="submitEditTodo"]', function (e) {
    e.preventDefault()
    let todoId = $('input[name="todoId"]').val()
    let editTitle = $('input[name="editTitle"]').val()

    $.ajax({
        url: `http://localhost:3000/api/todo/${todoId}`,
        method: 'put',
        contentType: 'application/x-www-form-urlencoded',
        data: {
            title: editTitle
        },
        success: (data) => {
            console.log(data)
            $('#modalEditTodo').modal('hide')
            $('input[name="todoId"]').val("")
            $('input[name="editTitle"]').val("")
            $(`#title${data._id}`).text(data.title)
        }
    })
})

//update todo status
$(document).on('click', 'input[name="updateStatus"]', function () {
    let id = this.id.split("#")
    let todoId = id[1]
    var status = false

    if (this.checked) status = true
    else status = false

    $.ajax({
        url: `http://localhost:3000/api/todo/status/${todoId}`,
        method: 'put',
        contentType: 'application/x-www-form-urlencoded',
        data: {
            status: status
        }
    })
})