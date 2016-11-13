# JavaScript-Dynamic-Elements-and-Events

## Install All Node Package Manager

```
npm install express-generator -g
express -e

npm install mongodb --save
npm install mongoose --save

npm install cors --save

npm install dotenv --save

```

## Install Library For Client Site

```
touch .bowerrc

Inside .bowerrc
{
    "directory": ".lib/"
}

npm install bower -g
bower install bootstrap --save
```

### Endpoint

| Endpoind              | HTTP      | Description               |
| ----------            | -----     | ------------              |
| api/todo              | GET       | Get all todo              |
| api/todo/:id          | GET       | Get todo by id            |
| api/todo              | POST      | Create todo               |
| api/todo/:id          | DELETE    | Delete todo by id         |
| api/todo/:id          | PUT       | Update todo by id         |
| api/todo/status:id    | PUT       | Update status todo by id  |