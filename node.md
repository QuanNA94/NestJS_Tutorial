
- controllers are responsible for handling incoming request and returning responses to the client.
- controller has more than one route, and different routes can perform different actions
- In order to create a basic controller, using classes and decorators. Decorators associate classes with rerquired metadata and enable Nest to create
a routing map

For quickly creating a CRUD constroller with the validation built-in, you may use the CLI's CRUD generator:
    nest g resource [name]

- Routing 
    - @Controller(): decorator allow us to easily group a set of rerlated routes, and minimize repetitive code.
     

How to Add Commit Hooks to Git with Husky to Automate Code Tasks? 
    - what are Git Hooks? 
        - Git hooks are scripts that you can set up to run at certain events in the Git lifecycle.
        + what is a script? 
            - 
        - These events include differrent stages of a commit, like before a commit (pre-commit) and after a commit (post-commit)
    - what is Husky?
        - Husky is a tool that allows us to easily wwrangle(manage) Git hooks and run the scripts we want at those stages.
        - It works by including an object right within our package.json file that  configures Husky to run the scripts we specify.
        After that, Husky handles managing at which point in the Git lifecycle our scripts will run.

    - What are we going to build?
    - Step 0- setup a new prroject 
    - Step 1- Installing Husky to a project 
    - Step 2- Configuring Husky to run Git hooks 
    - Step 3- Using Husky to format code with Prerttier

    - pre-commit.sample: được gọi ngay trước khi thực hiện commit.
        - pre-commit:
    - commit-msg.sample: chỉnh sửa tệp tin tại chỗ.
    - post-update.sample: được gọi sau khi remote repository đã cập nhật.

- Eslint: là một tool để phân tích code javascript để xác đinh các đoạn code có lỗi(hoặc có khả năng có lỗi), và có thể fix tự động cho chúng ta.
- Prettier: code formatter, chỉ tập trung vào format code , chứ không phân tích được lỗi như Eslint.
