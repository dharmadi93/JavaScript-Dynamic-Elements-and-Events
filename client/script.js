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
                    <input type="checkbox" id="checkboxTodo${i}" checked>
                </span>
                `)
                }
                else {
                    todo.push(`
                <span>
                    <input type="checkbox" id="checkboxTodo${i}">
                </span>
                `)
                }

                todo.push(`
                    ${data[i].title}
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