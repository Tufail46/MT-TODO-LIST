#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import welcome from "./welcome.js";
let msg = `
    *************************************
    **** Welcome to MT TODO-LIST ****
    *************************************
`;
await welcome(msg);
let todos: string[] = [];
let restart = true;
do {
  let answer: {
    TODO: string;
    confirmTODO: boolean;
  } = await inquirer.prompt([
    {
      type: "input",
      name: "TODO",
      message: `What do you want to add in your ToDo list? `,
    },
    {
      type: "confirm",
      name: "confirmTODO",
      message: "Do you want to add more Items in your ToDo list?",
      default: false,
    },
  ]);
  const { TODO, confirmTODO } = answer;
  restart = confirmTODO;
  if (TODO) {
    todos.push(TODO);
  } else {
    console.log(chalk.bgRedBright(`Enter Valid input`));
  }
} while (restart);
if (todos.length > 0) {
  console.log(chalk.bgGreenBright(`Your ToDo List: `));
  todos.forEach((todo) => {
    console.log(chalk.bgMagentaBright(todo));
  });
} else {
  console.log(chalk.bgBlueBright(`No ToDos found`));
}
